class StayAISubscriptions extends HTMLElement {
  constructor() {
    super();
    this.productJSON = this.getAttribute("productData");
    this.product = JSON.parse(this.productJSON);
    this.productFormId = this.getAttribute("productFormId");
    this.initialVariant = this.getAttribute("currentVariantId")
  }

  connectedCallback() {
    this.initWidget();
    this.setupEventListeners();
  }

  initWidget() {
    this.purchaseTypeSubscription = this.querySelector(
      "[for='purchaseTypeSubscription']"
    );
    this.purchaseTypeOneTime = this.querySelector(
      "[for='purchaseTypeOneTime']"
    );
    this.sellingPlanSelector = this.querySelector(".rtx-subscription-dropdown");
    this.subscriptionBox = this.querySelector(
      "[data-retextion-subscription-box]"
    );
    this.radioOneTime = this.querySelector(
      'input[value="purchaseTypeOneTime"]'
    );
    this.radioSubscription = this.querySelector(
      'input[value="purchaseTypeSubscription"]'
    );
    this.sellingPlanGroups = this.product.selling_plan_groups.filter(
      (group) => group.app_id == "5859381"
    );

    const selectedInitialVariant = this.product.variants.find((variant) => variant.id === Number(this.initialVariant))
    this.currentVariant = selectedInitialVariant || this.product.variants[0];
    this.updateSellingPlans();
  }

  // Set up event listeners for the purchase type, frequency and variant selectors
  setupEventListeners() {
    const purchaseTypeRadioButtons = this.querySelectorAll(
      'input[name="purchaseType"]'
    );
    
    // Handle purchase type change
    purchaseTypeRadioButtons.forEach((radio) =>
      radio.addEventListener("change", () => {
        this[
          radio.value === "purchaseTypeSubscription"
            ? "showSubscriptionBox"
            : "hideSubscriptionBox"
        ]();
        this.updateProductPrice(this.sellingPlanSelector.value);
      })
    );

    // Handle frequency selector change
    this.sellingPlanSelector.addEventListener("change", (e) => {
      this.updateSellingPlanInput(e.target.value);
      this.updateProductPrice(e.target.value);
    });

    // Add listeners for ALL product option inputs, including those not in variantSelectors
    const optionGroups = document.querySelectorAll('.single-option-radio');
    optionGroups.forEach((group) => {
      const inputs = group.querySelectorAll('input[type="radio"]');
      inputs.forEach((input) => {
        input.addEventListener("change", () => {
          console.log("Option group input changed:", input);
          this.handleVariantChange(optionGroups);
        });
      });
    });
    
    // Also add listeners to any other selector classes that might be used
    // const allOptionInputs = document.querySelectorAll('.single-option-selector__radio, .custom-radio-cls-subsc, .beta-quantity');
    // allOptionInputs.forEach((input) => {
    //   // Only add if this is a new element not already covered
    //   if (!input.classList.contains('custom-radio-button-variant')) {
    //     input.addEventListener("change", () => {
    //       console.log("Additional option input changed:", input);
    //       this.handleVariantChange();
    //     });
    //   }
    // });
  }

  // Extract variant change handling to a separate method
  handleVariantChange(optionGroups) {
    // Get all selected options
    const selectedOptions = [];
    
    optionGroups.forEach((group, index) => {
      const selectedOption = group.querySelector('input:checked');
      if (selectedOption) {
        selectedOptions[index] = selectedOption.getAttribute('data-option');
      }
    });
    
    console.log("Selected options combination:", selectedOptions);
    
    // Find the variant that matches these selected options
    const matchingVariant = this.product.variants.find(variant => {
      return variant.options.every((option, index) => 
        option === selectedOptions[index]
      );
    });
    
    if (matchingVariant) {
      console.log("Found matching variant:", matchingVariant.id);
      this.currentVariant = matchingVariant;
      this.updateSellingPlans();
    } else {
      console.log("No matching variant found for options:", selectedOptions);
    }
  }

  // Populate the subscription frequency selector with selling plans for the current variant
  updateSellingPlans() {
    // Get the selling plans for the current variant
    const stayWidget = this.querySelector(`.stay-ai-subscriptions`);

    const sellingPlans = this.currentVariant.selling_plan_allocations
      .map((spa) =>
        this.sellingPlanGroups
          .find((g) => g.id === spa.selling_plan_group_id)
          ?.selling_plans.find((sp) => sp.id === spa.selling_plan_id)
      )
      .filter(Boolean);

    if (sellingPlans.length == 0) {
      this.updateSellingPlanInput("");
      stayWidget.classList.toggle("is-visible", false);
      console.log("No SPs, hiding widget");
      return;
    } else stayWidget.classList.toggle("is-visible", true);

    // Clear existing options and populate dropdown
    this.sellingPlanSelector.innerHTML = sellingPlans
      .map(
        (plan) => `<option value="${plan.id}">${plan.options[0].value}</option>`
      )
      .join("");

    if (!this.isSubscriptionOptionSelected()) {
      this.addSelectFrequencyOption();
      this.updateSellingPlanInput("");
    } else {
      this.updateSellingPlanInput(sellingPlans[0]?.id || "");
    }

    // Show or hide the subscription frequency selector
    this.subscriptionBox.classList.toggle(
      "is-visible",
      this.isSubscriptionOptionSelected()
    );

    // Update prices
    this.updateProductPrice(
      this.isSubscriptionOptionSelected()
        ? this.sellingPlanSelector.value
        : sellingPlans[0]?.id || ""
    );
  }

  // Add "Select frequency" option to the frequency selector
  addSelectFrequencyOption() {
    if (!this.sellingPlanSelector.querySelector('option[value=""]')) {
      this.sellingPlanSelector.insertAdjacentHTML(
        "afterbegin",
        '<option value="" selected>Select frequency</option>'
      );
    }
  }

  // Show the subscription frequency selector
  showSubscriptionBox() {
    this.subscriptionBox.classList.toggle("disable", false);
    this.subscriptionBox.classList.toggle("is-visible", true);
    this.purchaseTypeSubscription.classList.toggle("is-selected", true);
    this.purchaseTypeOneTime.classList.toggle("is-selected", false);
    this.sellingPlanSelector.querySelector('option[value=""]')?.remove();
    this.updateSellingPlanInput(this.sellingPlanSelector.value);
  }

  // Hide the subscription frequency selector
  hideSubscriptionBox() {
    if (!this.frequencyVisible) {
      this.subscriptionBox.classList.toggle("is-visible", false);
    }
    this.addSelectFrequencyOption();
    this.subscriptionBox.classList.toggle("disable", true);
    this.purchaseTypeSubscription.classList.toggle("is-selected", false);
    this.purchaseTypeOneTime.classList.toggle("is-selected", true);
    this.updateSellingPlanInput("");
  }

  // Check if the subscription option is selected
  isSubscriptionOptionSelected() {
    return this.purchaseTypeSubscription.classList.contains("is-selected");
  }

  //Add selling plan input to form with specified selling plan ID
  updateSellingPlanInput(sellingPlanId) {

    const productForm = document.querySelector(
      this.productFormId?.trim()
        ? `#${this.productFormId}`
        : `form[action='/cart/add'][data-type='add-to-cart-form']`
    );

    if (!productForm) return;

    // Find or create the hidden input for selling plan
    let sellingPlanInput = productForm.querySelector(
      "input[name='selling_plan']"
    );
    if (!sellingPlanInput) {
      sellingPlanInput = document.createElement("input");
      sellingPlanInput.type = "hidden";
      sellingPlanInput.name = "selling_plan";
      sellingPlanInput.value = sellingPlanId;
      productForm.appendChild(sellingPlanInput);
    } else {
      sellingPlanInput.value = sellingPlanId;
    }
  }

  updateProductPrice(sellingPlanId) {
    const selectedSellingPlanAllocation =
      this.currentVariant.selling_plan_allocations.find(
        (spa) => spa.selling_plan_id == sellingPlanId
      );

    const sellingPlan = this.sellingPlanGroups
      .find((group) => group.selling_plans.some((sp) => sp.id == sellingPlanId))
      ?.selling_plans.find((sp) => sp.id == sellingPlanId);

    const oneTimeLblPrice = this.querySelector("[data-rtx-onetime-price]");
    const subscriptionLblPrice = this.querySelector(
      "[data-rtx-subscription-price]"
    );
    const savingLbl = this.querySelector(".subscription-savings");

    const onetimePrice = this.formatMoney(this.currentVariant.price);
    let subscriptionPrice = onetimePrice;

    // Update one-time price if necessary
    if (oneTimeLblPrice && oneTimeLblPrice.textContent !== onetimePrice) {
      oneTimeLblPrice.textContent = onetimePrice;
    }

    // Update subscription price
    if (selectedSellingPlanAllocation) {
      subscriptionPrice = this.formatMoney(selectedSellingPlanAllocation.price);

      if (
        subscriptionLblPrice &&
        subscriptionPrice !== subscriptionLblPrice.textContent
      ) {
        subscriptionLblPrice.innerHTML =
          subscriptionPrice !== onetimePrice
            ? `<s class="fullPrice"></s>${subscriptionPrice}`
            : subscriptionPrice;
      }

      // Calculate and update savings label
      let discount =
        this.currentVariant.price - selectedSellingPlanAllocation.price;

      if (discount > 0) {
        if (sellingPlan?.price_adjustments[0].value_type === "percentage") {
          discount = `${sellingPlan.price_adjustments[0].value}%`;
        } else {
          discount = this.formatMoney(discount);
        }
        if (savingLbl.textContent !== discount)
          savingLbl.textContent = discount;
      } else {
        savingLbl.textContent = "";
      }
    }
  }

  // Toggle checked state based on the currently checked radio button
  toggleRadioButtons() {
    this.radioOneTime.checked = !this.radioOneTime.checked;
    this.radioSubscription.checked = !this.radioSubscription.checked;
  }

  // Format money based on Shopify's active currency
  formatMoney(money) {
    const { Shopify, theme } = window;
    const currency = Shopify?.currency?.active || 'USD';
    const locale   = Shopify?.locale || 'en';

    // Convierte a unidad de moneda
    const amount = money / 100;

    // Formateador SIN decimales
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    return formatter.format(amount);
  }
}

// Define the custom element
customElements.define("purchase-options", StayAISubscriptions);
