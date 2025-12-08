window.theme = window.theme || {};
window.slate = window.slate || {};

/* ================ VENDORS ================ */
/** HTML5 LightBox - jQuery Image and Video LightBox Plugin
 * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://html5box.com
 * Version 8.0 
 */
(function(){var scripts=document.getElementsByTagName("script");var jsFolder="";for(var i=0;i<scripts.length;i++)if(scripts[i].src&&scripts[i].src.match(/html5lightbox\.js/i))jsFolder=scripts[i].src.substr(0,scripts[i].src.lastIndexOf("/")+1);var loadjQuery=false;if(typeof jQuery=="undefined")loadjQuery=true;else{var jVersion=jQuery.fn.jquery.split(".");if(jVersion[0]<1||jVersion[0]==1&&jVersion[1]<6)loadjQuery=true}if(loadjQuery){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");
script.setAttribute("type","text/javascript");if(script.readyState)script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;loadHtml5LightBox(jsFolder)}};else script.onload=function(){loadHtml5LightBox(jsFolder)};script.setAttribute("src",jsFolder+"jquery.js");head.appendChild(script)}else loadHtml5LightBox(jsFolder)})();
function loadHtml5LightBox(jsFolder){(function($){$.fn.html5lightbox=function(options){var inst=this;inst.options=$.extend({freelink:"http://html5box.com/",defaultvideovolume:1,mutevideo:false,autoclose:false,autoclosedelay:0,resizedelay:100,insideiframe:false,autoresizecontent:true,defaultwidth:960,defaultheight:540,usedefaultsizeforcontent:false,preload:true,preloadallonpageload:false,preloadalldelay:5E3,autoplay:true,loopvideo:false,html5player:true,responsive:true,nativehtml5controls:false,videohidecontrols:false,
nativecontrolsonfirefox:false,nativecontrolsonie:false,nativecontrolsoniphone:true,nativecontrolsonipad:true,nativecontrolsonandroid:true,nativecontrolsonfullscreen:true,nativecontrolsnodownload:true,noresizecallback:true,imagekeepratio:true,maxheight:false,elemautoheight:false,useflashonie9:true,useflashonie10:true,useflashonie11:false,useflashformp4onfirefox:false,transition:"none",transitionduration:400,exitanimation:"",animationduration:"1s",enablepdfjs:true,pdfjsengine:"",openpdfinnewtaboniphone:false,
openpdfinnewtabonipad:false,googleanalyticsaccount:"",arrowloop:true,showall:false,userelforgroup:true,shownavigation:true,thumbwidth:96,thumbheight:72,thumbgap:4,thumbtopmargin:12,thumbbottommargin:12,thumbborder:1,thumbbordercolor:"transparent",thumbhighlightbordercolor:"#fff",thumbopacity:1,navbuttonwidth:32,navbgcolor:"rgba(0,0,0,0.2)",shownavcontrol:true,navcontrolimage:"lightbox-navcontrol.png",hidenavdefault:false,overlaybgcolor:"#000",overlayopacity:0.9,bgcolor:"#fff",bordersize:8,borderradius:0,
bordermargin:16,bordertopmargin:48,barautoheight:true,barheight:64,smallscreenheight:415,responsivebarheight:false,barheightonsmallheight:64,notkeepratioonsmallheight:false,bordertopmarginsmall:36,loadingwidth:64,loadingheight:64,resizespeed:400,fadespeed:0,jsfolder:jsFolder,skinsfoldername:"skins/default/",nextimage:"lightbox-next.png",previmage:"lightbox-prev.png",closeimage:"lightbox-close.png",playvideoimage:"lightbox-playvideo.png",titlebgimage:"lightbox-titlebg.png",
navarrowsalwaysshowontouch:true,showarrowsbottomonsmallscreen:true,navarrowsbottomscreenwidth:479,closeonoverlay:true,alwaysshownavarrows:false,showplaybutton:true,playimagesize:32,fullscreenmode:false,
fullscreennomargin:false,fullscreenmodeonsmallscreen:false,fullscreennomarginonsmallscreen:false,fullscreensmallscreenwidth:800,fullscreenbgcolor:"transparent",fullscreenbordersize:0,fullscreentextinside:false,fullscreentextoutside:true,fullscreennotransition:true,videobgcolor:"#000",html5videoposter:"",showtitle:true,titlestyle:"bottom",titleinsidecss:"color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px;",titlebottomcss:"color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
titleoutsidecss:"color:#fff; font-size:18px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin: 8px;",resizeleftright:true,showonmouseoverinside:false,showinsidetitleforimageonly:true,showdescription:true,descriptioninsidecss:"color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",descriptionbottomcss:"color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
descriptionoutsidecss:"color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin:8px; padding: 0px;",fullscreentitlebottomcss:"color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px 8px;",fullscreendescriptionbottomcss:"color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",showsocialmedia:true,socialmediaposition:"position:absolute;top:8px;right:8px;",
showtitleprefix:true,titleprefix:"%NUM / %TOTAL",autoslide:false,slideinterval:5E3,showtimer:true,timerposition:"bottom",timerheight:2,timercolor:"#dc572e",timeropacity:1,initvimeo:true,inityoutube:true,swipepreventdefaultonandroid:false,initsocial:true,showsocial:false,socialposition:"position:absolute;top:100%;right:0;",socialpositionsmallscreen:"position:absolute;top:100%;right:0;left:0;",socialdirection:"horizontal",socialbuttonsize:32,socialbuttonfontsize:18,socialrotateeffect:true,showfacebook:true,
showtwitter:true,showpinterest:true,showemail:true,imagepercentage:75,sidetobottomscreenwidth:479,errorwidth:280,errorheight:48,errorcss:"text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",enabletouchswipe:true,mobileresizeevent:false,swipedistance:0,bodynoscroll:false,useabsolutepos:false,useabsoluteposonmobile:false,supportesckey:true,supportarrowkeys:true,version:"3.3",stamp:true,freemark:"72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
watermark:"",watermarklink:""},options);if(typeof html5lightbox_options!="undefined"&&html5lightbox_options)$.extend(inst.options,html5lightbox_options);if($("div.html5lightbox_options").length)$.each($("div.html5lightbox_options").data(),function(key,value){inst.options[key.toLowerCase()]=value});if($("div#html5lightbox_options").length)$.each($("div#html5lightbox_options").data(),function(key,value){inst.options[key.toLowerCase()]=value});if($("div#html5lightbox_general_options").length)$.each($("div#html5lightbox_general_options").data(),
function(key,value){inst.options[key.toLowerCase()]=value});var ELEM_TYPE=0,ELEM_HREF=1,ELEM_TITLE=2,ELEM_GROUP=3,ELEM_WIDTH=4,ELEM_HEIGHT=5,ELEM_HREF_WEBM=6,ELEM_HREF_OGG=7,ELEM_THUMBNAIL=8,ELEM_DESCRIPTION=9,ELEM_DIV=10,ELEM_ORIGINALWIDTH=11,ELEM_ORIGINALHEIGHT=12,ELEM_SOCIALMEDIA=13,ELEM_WEBLINK=14,ELEM_WEBLINKTARGET=15,ELEM_WEBLINKTEXT=16;inst.options.types=["IMAGE","FLASH","VIDEO","YOUTUBE","VIMEO","PDF","MP3","WEB","FLV","DAILYMOTION","DIV","WISTIA","IFRAMEVIDEO"];inst.options.htmlfolder=window.location.href.substr(0,
window.location.href.lastIndexOf("/")+1);inst.options.skinsfolder=inst.options.skinsfoldername;if(inst.options.skinsfolder.length>0&&inst.options.skinsfolder[inst.options.skinsfolder.length-1]!="/")inst.options.skinsfolder+="/";if(inst.options.skinsfolder.charAt(0)!="/"&&inst.options.skinsfolder.substring(0,5)!="http:"&&inst.options.skinsfolder.substring(0,6)!="https:")inst.options.skinsfolder=inst.options.jsfolder+inst.options.skinsfolder;var image_list=["nextimage","previmage","closeimage",
"playvideoimage","titlebgimage"];for(var i=0;i<image_list.length;i++)if(inst.options[image_list[i]])if(inst.options[image_list[i]].substring(0,7).toLowerCase()!="http://"&&inst.options[image_list[i]].substring(0,8).toLowerCase()!="https://")inst.options[image_list[i]]=inst.options.skinsfolder+inst.options[image_list[i]];var i;var l;var mark="";var bytes=
inst.options.freemark.split(",");for(i=0;i<bytes.length;i++)mark+=String.fromCharCode(bytes[i]);inst.options.freemark=mark;var d0="hmtamgli5cboxh.iclolms";for(i=1;i<=5;i++)d0=d0.slice(0,i)+d0.slice(i+1);l=d0.length;for(i=0;i<5;i++)d0=d0.slice(0,l-9+i)+d0.slice(l-8+i);if(inst.options.htmlfolder.indexOf(d0)!=-1)inst.options.stamp=false;inst.options.flashInstalled=false;try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))inst.options.flashInstalled=true}catch(e){if(navigator.mimeTypes["application/x-shockwave-flash"])inst.options.flashInstalled=
true}inst.options.html5VideoSupported=!!document.createElement("video").canPlayType;inst.options.isChrome=navigator.userAgent.match(/Chrome/i)!=null;inst.options.isFirefox=navigator.userAgent.match(/Firefox/i)!=null;inst.options.isOpera=navigator.userAgent.match(/Opera/i)!=null||navigator.userAgent.match(/OPR\//i)!=null;inst.options.isSafari=navigator.userAgent.match(/Safari/i)!=null;inst.options.isIE11=navigator.userAgent.match(/Trident\/7/)!=null&&navigator.userAgent.match(/rv:11/)!=null;inst.options.isIE=
navigator.userAgent.match(/MSIE/i)!=null&&!inst.options.isOpera;inst.options.isIE10=navigator.userAgent.match(/MSIE 10/i)!=null&&!this.options.isOpera;inst.options.isIE9=navigator.userAgent.match(/MSIE 9/i)!=null&&!inst.options.isOpera;inst.options.isIE8=navigator.userAgent.match(/MSIE 8/i)!=null&&!inst.options.isOpera;inst.options.isIE7=navigator.userAgent.match(/MSIE 7/i)!=null&&!inst.options.isOpera;inst.options.isIE6=navigator.userAgent.match(/MSIE 6/i)!=null&&!inst.options.isOpera;inst.options.isIE678=
inst.options.isIE6||inst.options.isIE7||inst.options.isIE8;inst.options.isIE6789=inst.options.isIE6||inst.options.isIE7||inst.options.isIE8||inst.options.isIE9;inst.options.isAndroid=navigator.userAgent.match(/Android/i)!=null;inst.options.isIPad=navigator.userAgent.match(/iPad/i)!=null;inst.options.isIPhone=navigator.userAgent.match(/iPod/i)!=null||navigator.userAgent.match(/iPhone/i)!=null;inst.options.isIOS=inst.options.isIPad||inst.options.isIPhone;inst.options.isMobile=inst.options.isAndroid||
inst.options.isIPad||inst.options.isIPhone;inst.options.isIOSLess5=inst.options.isIPad&&inst.options.isIPhone&&(navigator.userAgent.match(/OS 4/i)!=null||navigator.userAgent.match(/OS 3/i)!=null);inst.options.supportCSSPositionFixed=!inst.options.isIE6&&!inst.options.isIOSLess5;inst.options.iequirksmode=inst.options.isIE6789&&document.compatMode!="CSS1Compat";inst.options.isTouch="ontouchstart"in window;if(inst.options.isChrome){var match=navigator.userAgent.match(/Chrome\/([0-9]+)/);inst.options.chromeVersion=
match&&match.length>=2?parseInt(match[1],10):0}if(inst.options.isAndroid){var match=navigator.userAgent.match(/Android\s([0-9\.]*)/i);inst.options.androidVersion=match&&match.length>=2?parseInt(match[1],10):-1}var v=document.createElement("video");inst.options.canplaymp4=v&&v.canPlayType&&v.canPlayType("video/mp4").replace(/no/,"");if(inst.options.isFirefox&&inst.options.nativecontrolsonfirefox||(inst.options.isIE6789||inst.options.isIE10||inst.options.isIE11)&&inst.options.nativecontrolsonie||inst.options.isIPhone&&
inst.options.nativecontrolsoniphone||inst.options.isIPad&&inst.options.nativecontrolsonipad||inst.options.isAndroid&&inst.options.nativecontrolsonandroid)inst.options.nativehtml5controls=true;if(inst.options.isIOS||inst.options.isAndroid)inst.options.nativecontrolsonfullscreen=true;inst.options.navheight=0;inst.options.thumbgap+=2*inst.options.thumbborder;inst.options.resizeTimeout=-1;inst.slideTimeout=null;inst.autosliding=false;inst.existingElem=-1;inst.direction=-3;inst.elemArray=new Array;inst.options.curElem=
-1;inst.defaultoptions=$.extend({},inst.options);if(inst.options.googleanalyticsaccount&&!window._gaq){window._gaq=window._gaq||[];window._gaq.push(["_setAccount",inst.options.googleanalyticsaccount]);window._gaq.push(["_trackPageview"]);$.getScript("https://ssl.google-analytics.com/ga.js")}if(inst.options.initvimeo){var tag=document.createElement("script");var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,
firstScriptTag)}if(inst.options.inityoutube){var tag=document.createElement("script");var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)};inst.showing=false;inst.navvisible=false;inst.disableEscKey=function(isFullscreen){if(isFullscreen)inst.disableesckeyinfullscreen=
true;else setTimeout(function(){inst.disableesckeyinfullscreen=false},1E3)};inst.supportKeyboard=function(){inst.disableesckeyinfullscreen=false;$(document).keyup(function(e){if(!inst.showing)return;if(!inst.disableesckeyinfullscreen&&inst.options.supportesckey&&e.keyCode==27)inst.finish();else if(inst.options.supportarrowkeys)if(e.keyCode==39)inst.gotoSlide(-1);else if(e.keyCode==37)inst.gotoSlide(-2)});if(inst.options.supportesckey&&document.addEventListener){document.addEventListener("MSFullscreenChange",
function(){inst.disableEscKey(document.msFullscreenElement!=null)},false);document.addEventListener("webkitfullscreenchange",function(){inst.disableEscKey(document.webkitIsFullScreen)},false)}};inst.supportKeyboard();inst.init=function(){inst.showing=false;inst.readData();inst.createMarkup();inst.initSlide()};inst.checkParentData=function(node,parentNode,attr){return node.data(attr)?node.data(attr):parentNode&&parentNode.data(attr)?parentNode.data(attr):null};inst.checkParentClass=function(node,parentNode,
attr){var ret=null;$.each([node,parentNode],function(index,nodeValue){if(nodeValue&&nodeValue.attr("class")){var classList=nodeValue.attr("class").split(/\s+/);$.each(classList,function(index,className){if(className&&className.toLowerCase().indexOf("html5lightbox-"+attr+"-")==0){var names=className.split("-");if(names.length==3)ret=parseInt(names[2])}})}});return ret};inst.readNodeData=function(node,parentNode){var fileType="mediatype"in node.data()?node.data("mediatype"):inst.checkType(node.attr("href"));
if(fileType<0)return;var title=node.data("title")?node.data("title"):node.attr("title");var group=node.data("group")?node.data("group"):inst.options.userelforgroup?node.attr("rel"):null;if(!group&&parentNode)group=parentNode.data("group")?parentNode.data("group"):inst.options.userelforgroup?parentNode.attr("rel"):null;for(var i=0;i<inst.elemArray.length;i++)if(node.attr("href")==inst.elemArray[i][ELEM_HREF]){inst.elemArray[i][ELEM_TITLE]=title;inst.elemArray[i][ELEM_GROUP]=group;return}var w=inst.checkParentData(node,
parentNode,"width");var h=inst.checkParentData(node,parentNode,"height");if(!w)w=inst.checkParentClass(node,parentNode,"width");if(!h)h=inst.checkParentClass(node,parentNode,"height");inst.elemArray.push(new Array(fileType,node.attr("href"),title,group,w,h,inst.checkParentData(node,parentNode,"webm"),inst.checkParentData(node,parentNode,"ogg"),inst.checkParentData(node,parentNode,"thumbnail"),inst.checkParentData(node,parentNode,"description"),null,null,null,inst.checkParentData(node,parentNode,"socialmedia"),
inst.checkParentData(node,parentNode,"weblink"),inst.checkParentData(node,parentNode,"weblinktarget"),inst.checkParentData(node,parentNode,"weblinktext")))};inst.readData=function(){inst.each(function(){var self=$(this);if(this.nodeName.toLowerCase()=="a"||this.nodeName.toLowerCase()=="area")inst.readNodeData(self);else self.find("a,area").each(function(){inst.readNodeData($(this),self)})})};inst.createMarkup=function(){if($(window).width()<=inst.options.fullscreensmallscreenwidth){if(inst.options.fullscreenmodeonsmallscreen){inst.options.fullscreenmode=
true;if(inst.options.fullscreennomarginonsmallscreen)inst.options.fullscreennomargin=true}if(inst.options.fullscreenmode&&inst.options.fullscreennomarginonsmallscreen)inst.options.fullscreennomargin=true}if(inst.options.fullscreenmode){inst.options.bgcolor=inst.options.fullscreenbgcolor;inst.options.bordersize=inst.options.fullscreenbordersize;if(inst.options.fullscreennomargin){inst.options.bordersize=0;inst.options.bordermargin=0;inst.options.bordertopmargin=0;inst.options.bordertopmarginsmall=
0}if(inst.options.fullscreentextoutside){inst.options.titlestyle="outside";inst.options.titlecss=inst.options.titleoutsidecss;inst.options.descriptioncss=inst.options.descriptionoutsidecss}else if(inst.options.fullscreentextinside){inst.options.titlestyle="inside";inst.options.titlecss=inst.options.titleinsidecss;inst.options.descriptioncss=inst.options.descriptioninsidecss}else{inst.options.titlebottomcss=inst.options.fullscreentitlebottomcss;inst.options.descriptionbottomcss=inst.options.fullscreendescriptionbottomcss}}inst.options.barheightoriginal=
inst.options.barheight;if(inst.options.responsivebarheight){var winH=$(window).height();if(winH<=inst.options.smallscreenheight)inst.options.barheight=inst.options.barheightonsmallheight}switch(inst.options.titlestyle){case "inside":inst.options.titlecss=inst.options.titleinsidecss;inst.options.descriptioncss=inst.options.descriptioninsidecss;break;case "outside":inst.options.titlecss=inst.options.titleoutsidecss;inst.options.descriptioncss=inst.options.descriptionoutsidecss;break;default:inst.options.titlecss=
inst.options.titlebottomcss;inst.options.descriptioncss=inst.options.descriptionbottomcss}inst.options.titlecss=$.trim(inst.options.titlecss);if(inst.options.titlecss.length>1){if(inst.options.titlecss.charAt(0)=="{")inst.options.titlecss=inst.options.titlecss.substring(1);if(inst.options.titlecss.charAt(inst.options.titlecss.length-1)=="}")inst.options.titlecss=inst.options.titlecss.substring(0,inst.options.titlecss.length-1)}inst.options.descriptioncss=$.trim(inst.options.descriptioncss);if(inst.options.descriptioncss.length>
1){if(inst.options.descriptioncss.charAt(0)=="{")inst.options.descriptioncss=inst.options.descriptioncss.substring(1);if(inst.options.descriptioncss.charAt(inst.options.descriptioncss.length-1)=="}")inst.options.descriptioncss=inst.options.descriptioncss.substring(0,inst.options.descriptioncss.length-1)}inst.options.errorcss=$.trim(inst.options.errorcss);if(inst.options.errorcss.length>1){if(inst.options.errorcss.charAt(0)=="{")inst.options.errorcss=inst.options.errorcss.substring(1);if(inst.options.errorcss.charAt(inst.options.errorcss.length-
1)=="}")inst.options.errorcss=inst.options.errorcss.substring(0,inst.options.errorcss.length-1)}var styleCss=".bodynoscroll {height:100%;overflow:hidden;}";styleCss+=".html5-hide {display:none !important;} #html5box-html5-lightbox .html5-text {"+inst.options.titlecss+"}";styleCss+="#html5box-html5-lightbox .html5-description {"+inst.options.descriptioncss+"}";styleCss+="#html5box-html5-lightbox .html5-error {"+inst.options.errorcss+"}";if(inst.options.navarrowsalwaysshowontouch||inst.options.alwaysshownavarrows){styleCss+=
"#html5box-html5-lightbox .html5-prev-touch {left:0px;top:50%;margin-top:-16px;margin-left:-32px;} #html5box-html5-lightbox .html5-next-touch {right:0px;top:50%;margin-top:-16px;margin-right:-32px;}";if(inst.options.showarrowsbottomonsmallscreen)styleCss+="@media (max-width: "+inst.options.navarrowsbottomscreenwidth+"px) { #html5box-html5-lightbox .html5-prev-touch {top:100%;left:0;margin:0;} #html5box-html5-lightbox .html5-next-touch {top:100%;right:0;margin:0;} }"}styleCss+="#html5box-html5-lightbox .html5-prev-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-fullscreen {display:block;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:none;}";
if(inst.options.showarrowsbottomonsmallscreen)styleCss+="@media (max-width: "+inst.options.navarrowsbottomscreenwidth+"px) {#html5box-html5-lightbox .html5-prev-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-fullscreen {display:none;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:block;} }";if(inst.options.titlestyle=="right"){styleCss+="#html5box-html5-lightbox .html5-elem-wrap {width:"+inst.options.imagepercentage+
"%;height:100%;} #html5box-html5-lightbox .html5-elem-data-box {min-height:100%;}";styleCss+="@media (max-width: "+inst.options.sidetobottomscreenwidth+"px) {#html5box-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}"}else if(inst.options.titlestyle=="left"){styleCss+="#html5box-html5-lightbox .html5-elem-wrap {height:100%;} #html5box-html5-lightbox .html5-elem-data-box {width:"+String(100-inst.options.imagepercentage)+
"%;min-height:100%;}";styleCss+="@media (max-width: "+inst.options.sidetobottomscreenwidth+"px) {#html5box-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}"}styleCss+=".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }";styleCss+="@media (max-width: "+
inst.options.navarrowsbottomscreenwidth+"px) {#html5-social {"+inst.options.socialpositionsmallscreen+"}}";styleCss+=".html5box-animated { -webkit-animation-duration:"+inst.options.animationduration+"; animation-duration:"+inst.options.animationduration+"; -webkit-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes html5box-fadeOut { from { opacity: 1; } to { opacity: 0; } } @keyframes html5box-fadeOut { from { opacity: 1; } to { opacity: 0; } } .html5box-fadeOut { -webkit-animation-name: html5box-fadeOut; animation-name: html5box-fadeOut; }";
styleCss+="@-webkit-keyframes html5box-fadeOutDown { from { opacity: 1; } to { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0); } } @keyframes html5box-fadeOutDown { from { opacity: 1; } to { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0); } } .html5box-fadeOutDown { -webkit-animation-name: html5box-fadeOutDown; animation-name: html5box-fadeOutDown; }";$("head").append("<style type='text/css' data-creator='html5box-html5-lightbox'>"+
styleCss+"</style>");var elemheight=inst.options.elemautoheight?"auto":"100%";inst.$lightbox=$("<div id='html5box-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'>"+"<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:"+inst.options.overlaybgcolor+";opacity:"+inst.options.overlayopacity+";filter:alpha(opacity="+Math.round(inst.options.overlayopacity*100)+
");'></div>"+"<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>"+"<div class='html5-elem-box' style='display:block;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:"+elemheight+";margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'>"+"<div class='html5-elem-wrap' style='display:block;position:relative;overflow:hidden;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:"+
inst.options.bgcolor+";'>"+"<div class='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;'></div>"+"<div class='html5-error-box html5-error' style='display:none;position:absolute;padding:"+inst.options.bordersize+"px;text-align:center;width:"+inst.options.errorwidth+"px;height:"+inst.options.errorheight+"px;'>"+"The requested content cannot be loaded.<br />Please try again later."+
"</div>"+"<div class='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;"+(inst.options.iequirksmode?"margin":"padding")+":"+inst.options.bordersize+"px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div>"+"</div>"+"</div>"+"<div id='html5-watermark' style='display:none;position:absolute;left:"+String(inst.options.bordersize+2)+"px;top:"+String(inst.options.bordersize+2)+"px;'></div>"+"</div>"+"</div>");
inst.options.positionFixed=inst.options.supportCSSPositionFixed&&inst.options.responsive&&!inst.options.iequirksmode;if(inst.options.useabsolutepos||inst.options.useabsoluteposonmobile&&inst.options.isMobile)inst.options.positionFixed=false;inst.$lightbox.css({position:inst.options.positionFixed?"fixed":"absolute"});inst.$lightbox.appendTo("body");inst.$lightboxBox=$("#html5-lightbox-box",inst.$lightbox);inst.$elem=$(".html5-elem-box",inst.$lightbox);inst.$elemWrap=$(".html5-elem-wrap",inst.$lightbox);
inst.$loading=$(".html5-loading",inst.$lightbox);inst.$error=$(".html5-error-box",inst.$lightbox);inst.$image=$(".html5-image",inst.$lightbox);if(inst.options.fullscreenmode&&inst.options.fullscreennomargin)inst.$elem.css({overflow:"hidden"});var elemText="<div class='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div class='html5-text' style='display:block;overflow:hidden;'></div></div>";if(inst.options.titlestyle=="left")inst.$elem.prepend(elemText);else if(inst.options.titlestyle==
"outside")inst.$lightbox.append(elemText);else inst.$elem.append(elemText);inst.$elemData=$(".html5-elem-data-box",inst.$lightbox);inst.$text=$(".html5-text",inst.$lightbox);if(inst.options.borderradius>0){inst.$elem.css({"border-radius":inst.options.borderradius+"px","-moz-border-radius":inst.options.borderradius+"px","-webkit-border-radius":inst.options.borderradius+"px"});if(inst.options.titlestyle=="inside")inst.$elemWrap.css({"border-radius":inst.options.borderradius+"px","-moz-border-radius":inst.options.borderradius+
"px","-webkit-border-radius":inst.options.borderradius+"px"});else if(inst.options.titlestyle=="bottom"){inst.$elemWrap.css({"border-top-left-radius":inst.options.borderradius+"px","-moz-top-left-border-radius":inst.options.borderradius+"px","-webkit-top-left-border-radius":inst.options.borderradius+"px","border-top-right-radius":inst.options.borderradius+"px","-moz-top-right-border-radius":inst.options.borderradius+"px","-webkit-top-right-border-radius":inst.options.borderradius+"px"});inst.$elemData.css({"border-bottom-left-radius":inst.options.borderradius+
"px","-moz-top-bottom-border-radius":inst.options.borderradius+"px","-webkit-bottom-left-border-radius":inst.options.borderradius+"px","border-bottom-right-radius":inst.options.borderradius+"px","-moz-bottom-right-border-radius":inst.options.borderradius+"px","-webkit-bottom-right-border-radius":inst.options.borderradius+"px"})}}if(inst.options.titlestyle=="right"||inst.options.titlestyle=="left"){inst.$lightboxBox.css({"background-color":inst.options.bgcolor});if(inst.options.titlestyle=="right"){inst.$elemWrap.css({position:"relative",
"float":"left"});inst.$elemData.css({position:"relative",overflow:"hidden",padding:inst.options.bordersize+"px"})}else{inst.$elemWrap.css({position:"relative",overflow:"hidden"});inst.$elemData.css({position:"relative","float":"left",padding:inst.options.bordersize+"px"})}}else if(inst.options.titlestyle=="inside"){inst.$elemData.css({position:"absolute",margin:0,padding:0,bottom:inst.options.bordersize+"px",left:inst.options.bordersize+"px",right:inst.options.bordersize+"px","background-color":"#333",
"background-color":"rgba(51, 51, 51, 0.6)"});if(inst.options.showonmouseoverinside)inst.$elemData.css({opacity:0});inst.$text.css({padding:inst.options.bordersize+"px "+2*inst.options.bordersize+"px"})}else if(inst.options.titlestyle=="outside")inst.$elemData.css({position:"relative",width:"100%",height:"auto"});else{inst.$elemData.css({position:"relative",width:"100%",height:inst.options.barautoheight?"auto":inst.options.barheight+"px","padding":"0 0 "+inst.options.bordersize+"px"+" 0","background-color":inst.options.bgcolor,
"text-align":"left"});if(!inst.options.fullscreenmode||!inst.options.fullscreennomargin)inst.$text.css({"margin":"0 "+inst.options.bordersize+"px"})}if(inst.options.showsocial){var socialCode='<div id="html5-social" style="display:none;'+inst.options.socialposition+'">';var socialBtnCSS=(inst.options.socialdirection=="horizontal"?"display:inline-block;":"display:block;")+"margin:4px;";var socialCSS="display:table-cell;width:"+inst.options.socialbuttonsize+"px;height:"+inst.options.socialbuttonsize+
"px;font-size:"+inst.options.socialbuttonfontsize+"px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";if(inst.options.showemail)socialCode+='<div class="html5-social-btn'+(inst.options.socialrotateeffect?" html5-rotate":"")+' html5-social-email" style="'+socialBtnCSS+'"><div class="mh-icon-mail" style="'+socialCSS+'background-color:#4d83ff;"></div></div>';if(inst.options.showfacebook)socialCode+='<div class="html5-social-btn'+(inst.options.socialrotateeffect?
" html5-rotate":"")+' html5-social-facebook" style="'+socialBtnCSS+'"><div class="mh-icon-facebook" style="'+socialCSS+'background-color:#3b5998;"></div></div>';if(inst.options.showtwitter)socialCode+='<div class="html5-social-btn'+(inst.options.socialrotateeffect?" html5-rotate":"")+' html5-social-twitter" style="'+socialBtnCSS+'"><div class="mh-icon-twitter" style="'+socialCSS+'background-color:#03b3ee;"></div></div>';if(inst.options.showpinterest)socialCode+='<div class="html5-social-btn'+(inst.options.socialrotateeffect?
" html5-rotate":"")+' html5-social-pinterest" style="'+socialBtnCSS+'"><div class="mh-icon-pinterest" style="'+socialCSS+'background-color:#c92228;"></div></div>';socialCode+='<div style="clear:both;"></div></div>';inst.$lightboxBox.append(socialCode);$(".html5-social-btn",inst.$lightbox).click(function(){var shareUrl=window.location.href+(window.location.href.indexOf("?")<0?"?":"&")+"html5lightboxshare="+encodeURIComponent(inst.currentElem[ELEM_HREF]);var shareTitle=inst.currentElem[ELEM_TITLE];
var shareMedia=inst.currentElem[ELEM_HREF];if(inst.currentElem[ELEM_TYPE]==0)shareMedia=inst.absoluteUrl(inst.currentElem[ELEM_HREF]);else if(inst.currentElem[ELEM_TYPE]==3)shareMedia="https://img.youtube.com/vi/"+inst.getYoutubeId(inst.currentElem[ELEM_HREF])+"/0.jpg";else{var lightboxLink=$('.html5lightbox[href="'+inst.currentElem[ELEM_HREF]+'"]');if(lightboxLink.length>0)if(lightboxLink.data("shareimage")&&lightboxLink.data("shareimage").length>0)shareMedia=inst.absoluteUrl(lightboxLink.data("shareimage"));
else if(lightboxLink.data("thumbnail")&&lightboxLink.data("thumbnail").length>0)shareMedia=inst.absoluteUrl(lightboxLink.data("thumbnail"));else{var lightboxImg=$("img",lightboxLink);if(lightboxImg.length>0)shareMedia=inst.absoluteUrl(lightboxImg.attr("src"))}}var isVideo=inst.currentElem[ELEM_TYPE]==2||inst.currentElem[ELEM_TYPE]==3||inst.currentElem[ELEM_TYPE]==4||inst.currentElem[ELEM_TYPE]==8||inst.currentElem[ELEM_TYPE]==9||inst.currentElem[ELEM_TYPE]==11||inst.currentElem[ELEM_TYPE]==12;if(!shareTitle)shareTitle=
"";else shareTitle=inst.html2Text(shareTitle);if($(this).hasClass("html5-social-facebook"))window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(shareUrl)+"&t="+encodeURIComponent(shareTitle),"_blank");else if($(this).hasClass("html5-social-twitter"))window.open("https://twitter.com/share?url="+encodeURIComponent(shareUrl)+"&text="+encodeURIComponent(shareTitle),"_blank");else if($(this).hasClass("html5-social-pinterest"))window.open("https://pinterest.com/pin/create/bookmarklet/?media="+
encodeURIComponent(shareMedia)+"&url="+encodeURIComponent(shareUrl)+"&description="+encodeURIComponent(shareTitle)+"&is_video="+(isVideo?"true":"false"),"_blank");else if($(this).hasClass("html5-social-email"))window.open("mailto:?subject="+encodeURIComponent(shareTitle)+"&body=Check out this: "+encodeURIComponent(shareUrl));return false})}if(inst.options.fullscreenmode){inst.$lightbox.append("<div class='html5-next-fullscreen' style='cursor:pointer;position:absolute;right:"+inst.options.bordersize+
"px;top:50%;margin-top:-16px;z-index:1;'></div>"+"<div class='html5-prev-fullscreen' style='cursor:pointer;position:absolute;left:"+inst.options.bordersize+"px;top:50%;margin-top:-16px;z-index:1;'></div>");inst.$next=$(".html5-next-fullscreen",inst.$lightbox);inst.$prev=$(".html5-prev-fullscreen",inst.$lightbox);inst.$lightboxBox.append("<div class='html5-next-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;right:0;margin-top:8px;z-index:1;'></div>"+"<div class='html5-prev-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;left:0;margin-top:8px;z-index:1;'></div>");inst.$nextbottom=$(".html5-next-bottom-fullscreen",inst.$lightbox);inst.$prevbottom=$(".html5-prev-bottom-fullscreen",inst.$lightbox);inst.$nextbottom.click(function(){inst.nextArrowClicked()});inst.$prevbottom.click(function(){inst.prevArrowClicked()});inst.$lightbox.append("<div id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;margin-top:0;margin-right:0;'></div>");inst.$close=$("#html5-close-fullscreen",inst.$lightbox)}else{inst.$lightboxBox.append("<div class='html5-next' style='display:none;cursor:pointer;position:absolute;right:"+inst.options.bordersize+"px;top:50%;margin-top:-32px;z-index:1;'><img alt='' src='"+inst.options.nextimage+"'></div>"+"<div class='html5-prev' style='display:none;cursor:pointer;position:absolute;left:"+inst.options.bordersize+"px;top:50%;margin-top:-32px;z-index:1;'><img alt='' src='"+
inst.options.previmage+"'></div>");inst.$next=$(".html5-next",inst.$lightbox);inst.$prev=$(".html5-prev",inst.$lightbox);if(inst.options.isTouch&&inst.options.navarrowsalwaysshowontouch||inst.options.alwaysshownavarrows){inst.$lightboxBox.append("<div class='html5-next-touch' style='display:block;cursor:pointer;position:absolute;z-index:1;'></div>"+"<div class='html5-prev-touch' style='display:block;cursor:pointer;position:absolute;z-index:1;'><img alt='' src='"+
inst.options.previmage+"'></div>");inst.$nexttouch=$(".html5-next-touch",inst.$lightbox);inst.$prevtouch=$(".html5-prev-touch",inst.$lightbox);inst.$nexttouch.click(function(){inst.nextArrowClicked()});inst.$prevtouch.click(function(){inst.prevArrowClicked()})}inst.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'></div>");inst.$close=$("#html5-close",inst.$lightbox)}if(inst.options.titlestyle==
"inside"&&inst.options.showonmouseoverinside)inst.$lightboxBox.hover(function(){if(inst.currentElem[ELEM_TYPE]==0||!inst.options.showinsidetitleforimageonly)inst.$elemData.animate({opacity:1},400)},function(){inst.$elemData.animate({opacity:0},400)});inst.$watermark=$("#html5-watermark",inst.$lightbox);if(inst.options.stamp)inst.$watermark.html("<a href='"+inst.options.freelink+"' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>"+
inst.options.freemark+"</div></div></a>");else if(inst.options.watermark){var html="<img alt='' src='"+inst.options.watermark+"' style='border:none;' />";if(inst.options.watermarklink)html="<a href='"+inst.options.watermarklink+"' target='_blank'>"+html+"</a>";inst.$watermark.html(html)}if(inst.options.closeonoverlay)$("#html5-lightbox-overlay",inst.$lightbox).click(inst.finish);inst.$close.click(inst.finish);inst.$next.click(function(){inst.nextArrowClicked()});inst.$prev.click(function(){inst.prevArrowClicked()});
$(window).resize(function(){if(inst.options.isIOS&&!inst.options.mobileresizeevent)return;clearTimeout(inst.options.resizeTimeout);inst.options.resizeTimeout=setTimeout(function(){inst.resizeWindow()},inst.options.resizedelay)});$(window).scroll(function(){if(inst.options.isIOS&&!inst.options.mobileresizeevent)return;inst.scrollBox()});$(window).on("orientationchange",function(e){if(inst.options.isMobile){clearTimeout(inst.options.resizeTimeout);inst.options.resizeTimeout=setTimeout(function(){inst.resizeWindow()},
inst.options.resizedelay)}});if(inst.options.enabletouchswipe)inst.enableSwipe()};inst.html2Text=function(html){var tag=document.createElement("div");tag.innerHTML=html;return tag.innerText};inst.slideTimer=function(interval,callback,updatecallback){var timerInstance=this;timerInstance.timeout=interval;var updateinterval=50;var updateTimerId=null;var runningTime=0;var paused=false;var started=false;var startedandpaused=false;this.pause=function(){if(started){paused=true;clearInterval(updateTimerId)}};
this.resume=function(forceresume){if(startedandpaused&&!forceresume)return;startedandpaused=false;if(started&&paused){paused=false;updateTimerId=setInterval(function(){runningTime+=updateinterval;if(runningTime>timerInstance.timeout){clearInterval(updateTimerId);if(callback)callback()}if(updatecallback)updatecallback(runningTime/timerInstance.timeout)},updateinterval)}};this.stop=function(){clearInterval(updateTimerId);if(updatecallback)updatecallback(-1);runningTime=0;paused=false;started=false};
this.start=function(){runningTime=0;paused=false;started=true;updateTimerId=setInterval(function(){runningTime+=updateinterval;if(runningTime>timerInstance.timeout){clearInterval(updateTimerId);if(callback)callback()}if(updatecallback)updatecallback(runningTime/timerInstance.timeout)},updateinterval)};this.startandpause=function(){runningTime=0;paused=true;started=true;startedandpaused=true};return this};inst.updateTimer=function(percent){var w=Math.round(percent*100);if(w>100)w=100;if(w<0)w=0;$(".html5-timer",
inst.$lightbox).css({display:"block",width:w+"%"})};inst.initSlide=function(){inst.autosliding=false;inst.slideTimeout=inst.slideTimer(inst.options.slideinterval,function(){inst.gotoSlide(-1)},inst.options.showtimer?function(percent){inst.updateTimer(percent)}:null);if(inst.options.autoslide){inst.slideTimeout.stop();inst.autosliding=true}};inst.nextArrowClicked=function(){if(inst.options.nextElem<=inst.options.curElem)if(inst.options.onlastarrowclicked&&window[inst.options.onlastarrowclicked]&&typeof window[inst.options.onlastarrowclicked]==
"function")window[inst.options.onlastarrowclicked]();inst.gotoSlide(-1)};inst.prevArrowClicked=function(){if(inst.options.prevElem>=inst.options.curElem)if(inst.options.onfirstarrowclicked&&window[inst.options.onfirstarrowclicked]&&typeof window[inst.options.onfirstarrowclicked]=="function")window[inst.options.onfirstarrowclicked]();inst.gotoSlide(-2)};inst.calcNextPrevElem=function(){inst.options.nextElem=-1;inst.options.prevElem=-1;inst.options.inGroup=false;inst.options.groupIndex=0;inst.options.groupCount=
0;var group=inst.elemArray[inst.options.curElem][ELEM_GROUP];for(var i=0;i<inst.elemArray.length;i++)if(inst.matchGroup(group,inst.elemArray[i][ELEM_GROUP])){if(i==inst.options.curElem)inst.options.groupIndex=inst.options.groupCount;inst.options.groupCount++}var j,curGroup=inst.elemArray[inst.options.curElem][ELEM_GROUP];if(curGroup!=undefined&&curGroup!=null){for(j=inst.options.curElem+1;j<inst.elemArray.length;j++)if(inst.matchGroup(curGroup,inst.elemArray[j][ELEM_GROUP])){inst.options.nextElem=
j;break}if(inst.options.nextElem<0)for(j=0;j<inst.options.curElem;j++)if(inst.matchGroup(curGroup,inst.elemArray[j][ELEM_GROUP])){inst.options.nextElem=j;break}if(inst.options.nextElem>=0){for(j=inst.options.curElem-1;j>=0;j--)if(inst.matchGroup(curGroup,inst.elemArray[j][ELEM_GROUP])){inst.options.prevElem=j;break}if(inst.options.prevElem<0)for(j=inst.elemArray.length-1;j>inst.options.curElem;j--)if(inst.matchGroup(curGroup,inst.elemArray[j][ELEM_GROUP])){inst.options.prevElem=j;break}}}if(inst.options.nextElem>=
0||inst.options.prevElem>=0)inst.options.inGroup=true};inst.calcBoxPosition=function(initW,initH){var boxW=initW+2*inst.options.bordersize;var boxH=initH+2*inst.options.bordersize;var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;var winH=$(window).height();var boxT=Math.round((winH-navH)/2-boxH/2);if(inst.options.titlestyle=="bottom")boxT-=Math.round(inst.options.barheight/2);var topmargin=$(window).height()<inst.options.smallscreenheight?inst.options.bordertopmarginsmall:
inst.options.bordertopmargin;if(boxT<topmargin)boxT=topmargin;if(inst.options.insideiframe&&window.self!=window.top)if(parent.window.jQuery&&parent.window.jQuery("#"+inst.options.iframeid).length){var iframetop=parent.window.jQuery("#"+inst.options.iframeid).offset().top;var parentscroll=parent.window.document.body.scrollTop;boxT=topmargin;boxT+=parentscroll>iframetop?parentscroll-iframetop:0}return[boxW,boxH,boxT]};inst.hideNavArrows=function(){var showPrev=false;var showNext=false;if(inst.options.inGroup){if(inst.options.arrowloop||
!inst.options.arrowloop&&inst.options.prevElem<inst.options.curElem)showPrev=true;if(inst.options.arrowloop||!inst.options.arrowloop&&inst.options.nextElem>inst.options.curElem)showNext=true}if(showPrev){inst.$prev.removeClass("html5-hide");if(inst.$prevbottom)inst.$prevbottom.removeClass("html5-hide");if(inst.$prevtouch)inst.$prevtouch.removeClass("html5-hide")}else{inst.$prev.addClass("html5-hide");if(inst.$prevbottom)inst.$prevbottom.addClass("html5-hide");if(inst.$prevtouch)inst.$prevtouch.addClass("html5-hide")}if(showNext){inst.$next.removeClass("html5-hide");
if(inst.$nextbottom)inst.$nextbottom.removeClass("html5-hide");if(inst.$nexttouch)inst.$nexttouch.removeClass("html5-hide")}else{inst.$next.addClass("html5-hide");if(inst.$nextbottom)inst.$nextbottom.addClass("html5-hide");if(inst.$nexttouch)inst.$nexttouch.addClass("html5-hide")}};inst.resizePositionFixed=function(){if(!inst.options.positionFixed)inst.$lightbox.css({"padding-top":$(window).scrollTop()+"px","height":Math.max($(document).height(),$(window).height())+"px"})};inst.adjustLightboxPos=
function(w,h){var winWidth=$(window).width();var boxPos=inst.calcBoxPosition(w,h);var boxW=boxPos[0];var boxH=boxPos[1];var boxT=boxPos[2];if(inst.options.iequirksmode)inst.$lightboxBox.css({"top":boxT});else inst.$lightboxBox.css({"margin-top":boxT});inst.resizePositionFixed();if((inst.options.titlestyle=="left"||inst.options.titlestyle=="right")&&winWidth>inst.options.sidetobottomscreenwidth){inst.$lightboxBox.css({"width":boxW,"height":boxH});inst.$elemWrap.css({"width":inst.options.imagepercentage+
"%","height":"100%"})}else{inst.$lightboxBox.css({"width":boxW,"height":"auto"});inst.$elemWrap.css({"width":boxW,"height":boxH})}};inst.clickHandler=function(){var $this=$(this);var dataoptions={};$.each($this.data(),function(key,value){dataoptions[key.toLowerCase()]=value});inst.options=$.extend(inst.options,inst.defaultoptions,dataoptions);$(window).trigger("html5lightbox.lightboxshow");inst.init();if(inst.elemArray.length<=0)return true;inst.hideObjects();for(var i=0;i<inst.elemArray.length;i++)if(inst.elemArray[i][ELEM_HREF]==
$this.attr("href"))break;if(i==inst.elemArray.length)return true;inst.options.curElem=i;inst.calcNextPrevElem();inst.reset();inst.$lightbox.show();inst.adjustLightboxPos(inst.options.loadingwidth,inst.options.loadingheight);inst.loadCurElem();return false};inst.loadThumbnail=function(src,index,title){var imgLoader=new Image;$(imgLoader).on("load",function(){var style;if(this.width/this.height<=inst.options.thumbwidth/inst.options.thumbheight)style="width:100%;";else style="height:100%;";$(".html5-nav-thumb").eq(index).html("<img alt='"+
inst.html2Text(title)+"' style='"+style+"' src='"+src+"' />")});imgLoader.src=src};inst.matchGroup=function(curGroup,elemGroup){if(inst.options.showall)return true;if(!curGroup||!elemGroup)return false;var curs=curGroup.split(":");var elems=elemGroup.split(":");var result=false;for(var i in curs)if($.inArray(curs[i],elems)>-1){result=true;break}return result};inst.showNavigation=function(){if(!inst.options.shownavigation)return;if(!inst.currentElem||!inst.currentElem[ELEM_GROUP])return;var i;var showNav=
false;var group=inst.currentElem[ELEM_GROUP];for(i=0;i<inst.elemArray.length;i++)if(inst.matchGroup(group,inst.elemArray[i][ELEM_GROUP]))if(inst.elemArray[i][ELEM_THUMBNAIL]&&inst.elemArray[i][ELEM_THUMBNAIL].length>0){showNav=true;break}if(!showNav)return;inst.options.navheight=inst.options.thumbheight+inst.options.thumbtopmargin+inst.options.thumbbottommargin;if($(".html5-nav").length>0)return;var posCss=inst.options.hidenavdefault?"top:100%;bottom:auto;left:0;right:0;":"top:auto;bottom:0;left:0;right:0;";
var posType=inst.options.positionFixed?"fixed":"absolute";$("body").append("<div class='html5-nav' style='display:block;position:"+posType+";"+posCss+"width:100%;height:"+inst.options.navheight+"px;z-index:9999999;"+(inst.options.navbgcolor?"background-color:"+inst.options.navbgcolor+";":"")+"'>"+"<div class='html5-nav-container' style='position:relative;margin:"+inst.options.thumbtopmargin+"px auto "+inst.options.thumbbottommargin+"px;'>"+"<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:"+
inst.options.navbuttonwidth+"px;height:100%;left:0;top:0;'></div>"+"<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>"+"<div class='html5-nav-list'></div>"+"</div>"+"<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:"+inst.options.navbuttonwidth+"px;height:100%;right:0;top:0;'></div>"+
"</div>"+"</div>");inst.navvisible=inst.options.hidenavdefault?false:true;if(inst.options.shownavcontrol){$(".html5-nav").append('<div class="html5-nav-showcontrol" style="position:absolute;display:block;cursor:pointer;bottom:100%;right:12px;margin:0;padding:0;"></div>');$(".html5-nav-showcontrol").click(function(){var winH=$(window).height();var navH=$(".html5-nav").height();if(inst.navvisible){inst.navvisible=false;$(".html5-nav").css({top:winH-
navH+"px",bottom:"auto"}).animate({top:winH+"px"},function(){$(this).css({top:"100%",bottom:"auto"})})}else{inst.navvisible=true;var navH=$(".html5-nav").height();$(".html5-nav").css({top:winH+"px",bottom:"auto"}).animate({top:winH-navH+"px"},function(){$(this).css({top:"auto",bottom:0})})}inst.resizeWindow()})}var index=0;for(i=0;i<inst.elemArray.length;i++)if(inst.matchGroup(group,inst.elemArray[i][ELEM_GROUP]))if(inst.elemArray[i][ELEM_THUMBNAIL]&&inst.elemArray[i][ELEM_THUMBNAIL].length>0){$(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='"+
i+"' style='float:left;overflow:hidden;cursor:pointer;opacity:"+inst.options.thumbopacity+";margin: 0 "+inst.options.thumbgap/2+"px;width:"+inst.options.thumbwidth+"px;height:"+inst.options.thumbheight+"px;border:"+inst.options.thumbborder+"px solid "+inst.options.thumbbordercolor+";'></div>");this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL],index,inst.elemArray[i][ELEM_TITLE]);index++}$(".html5-nav-thumb").hover(function(){$(this).css({opacity:1});$(this).css({border:inst.options.thumbborder+
"px solid "+inst.options.thumbhighlightbordercolor})},function(){$(this).css({opacity:inst.options.thumbopacity});$(this).css({border:inst.options.thumbborder+"px solid "+inst.options.thumbbordercolor})});$(".html5-nav-thumb").click(function(){var index=$(this).data("arrayindex");if(index>=0)inst.gotoSlide(index)});inst.options.totalwidth=index*(inst.options.thumbgap+inst.options.thumbwidth+2*inst.options.thumbborder);$(".html5-nav-list").css({display:"block",position:"relative","margin-left":0,width:inst.options.totalwidth+
"px"}).append("<div style='clear:both;'></div>");var $navMask=$(".html5-nav-mask");var $navPrev=$(".html5-nav-prev");var $navNext=$(".html5-nav-next");$navPrev.click(function(){var $navList=$(".html5-nav-list");var $navNext=$(".html5-nav-next");var winWidth=$(window).width();var maskWidth=winWidth-2*inst.options.navbuttonwidth;var marginLeft=parseInt($navList.css("margin-left"))+maskWidth;if(marginLeft>=0){marginLeft=0;$(this).css({"background-position":"center left"})}else $(this).css({"background-position":"center right"});
if(marginLeft<=maskWidth-inst.options.totalwidth)$navNext.css({"background-position":"center left"});else $navNext.css({"background-position":"center right"});$navList.animate({"margin-left":marginLeft})});$navNext.click(function(){var $navList=$(".html5-nav-list");var $navPrev=$(".html5-nav-prev");var winWidth=$(window).width();var maskWidth=winWidth-2*inst.options.navbuttonwidth;var marginLeft=parseInt($navList.css("margin-left"))-maskWidth;if(marginLeft<=maskWidth-inst.options.totalwidth){marginLeft=
maskWidth-inst.options.totalwidth;$(this).css({"background-position":"center left"})}else $(this).css({"background-position":"center right"});if(marginLeft>=0)$navPrev.css({"background-position":"center left"});else $navPrev.css({"background-position":"center right"});$navList.animate({"margin-left":marginLeft})});var winWidth=$(window).width();if(inst.options.totalwidth<=winWidth){$navMask.css({width:inst.options.totalwidth+"px"});$navPrev.hide();$navNext.hide()}else{$navMask.css({width:winWidth-
2*inst.options.navbuttonwidth+"px"});$navPrev.show();$navNext.show()}};inst.loadElem=function(elem){inst.currentElem=elem;inst.showing=true;if(inst.options.bodynoscroll)$("html,body").addClass("bodynoscroll");if(!(inst.options.showtitle&&inst.currentElem[ELEM_TITLE]&&inst.currentElem[ELEM_TITLE].length>0||inst.options.showdescription&&inst.currentElem[ELEM_DESCRIPTION]&&inst.currentElem[ELEM_DESCRIPTION].length>0||inst.options.inGroup&&(inst.options.showplaybutton||inst.options.showtitleprefix)))inst.options.barheight=
0;inst.showNavigation();inst.$elem.off("mouseenter").off("mouseleave").off("mousemove");inst.$loading.show();if(inst.options.onshowitem&&window[inst.options.onshowitem]&&typeof window[inst.options.onshowitem]=="function")window[inst.options.onshowitem](elem);if((inst.options.transition=="slide"||inst.options.transition=="crossfade")&&inst.existingElem>=0){$(".html5-elem-box-previous").remove();var newitem=inst.$elem.clone();newitem.insertAfter(inst.$elem);inst.$prevelem=inst.$elem;inst.$elem=newitem;
inst.$prevelem.addClass("html5-elem-box-previous");inst.$elem.addClass("html5-elem-box-current");inst.$elemWrap=$(".html5-elem-wrap",inst.$elem);inst.$loading=$(".html5-loading",inst.$elem);inst.$error=$(".html5-error-box",inst.$elem);inst.$image=$(".html5-image",inst.$elem);if(inst.options.titlestyle!="outside"){inst.$elemData=$(".html5-elem-data-box",inst.$elem);inst.$text=$(".html5-text",inst.$elem)}inst.$elem.css({position:"absolute",top:0,left:inst.options.transition=="slide"?inst.direction==
-1?"100%":"-100%":0,opacity:0,height:"auto"});inst.$prevelem.css({width:inst.$prevelem.width()+"px",height:inst.$prevelem.height()+"px"})}switch(elem[ELEM_TYPE]){case 0:var imgLoader=new Image;$(imgLoader).on("load",function(){elem[ELEM_ORIGINALWIDTH]=imgLoader.width;elem[ELEM_ORIGINALHEIGHT]=imgLoader.height;inst.showImage(elem,imgLoader.width,imgLoader.height)});$(imgLoader).on("error",function(){inst.showError()});imgLoader.src=elem[ELEM_HREF];break;case 1:inst.showSWF(elem);break;case 2:case 8:inst.showVideo(elem);
break;case 3:case 4:case 9:case 11:case 12:inst.showYoutubeVimeo(elem);break;case 5:inst.showPDF(elem);break;case 6:inst.showMP3(elem);break;case 7:inst.showWeb(elem);break;case 10:inst.showDiv(elem);break}if(inst.options.googleanalyticsaccount&&window._gaq)window._gaq.push(["_trackEvent","Lightbox","Open",elem[ELEM_HREF]]);if(inst.options.preload){if(inst.options.nextElem>=0&&inst.elemArray[inst.options.nextElem][ELEM_TYPE]==0)(new Image).src=inst.elemArray[inst.options.nextElem][ELEM_HREF];if(inst.options.prevElem>=
0&&inst.elemArray[inst.options.prevElem][ELEM_TYPE]==0)(new Image).src=inst.elemArray[inst.options.prevElem][ELEM_HREF]}};inst.loadCurElem=function(){inst.loadElem(inst.elemArray[inst.options.curElem])};inst.showError=function(){inst.$loading.hide();inst.resizeLightbox(inst.options.errorwidth,inst.options.errorheight,true,function(){inst.$loading.hide();inst.$error.show();inst.$elem.fadeIn(inst.options.fadespeed,function(){inst.showData()})})};inst.calcTextWidth=function(objW){return objW-36};inst.showTitle=
function(t,description){var text="";if(inst.options.showtitle)if(t&&t.length>0)text+=t;if(inst.options.inGroup){if(inst.options.showtitleprefix)text="<span class='html5-title-prefix'>"+inst.options.titleprefix.replace("%NUM",inst.options.groupIndex+1).replace("%TOTAL",inst.options.groupCount)+"</span> <span class='html5-title-caption'>"+text+"</span>";if(inst.options.showplaybutton)text="<div class='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;width:"+inst.options.playimagesize+
"px;height:"+inst.options.playimagesize+"px;'><div class='html5-play' style='display:block;'></div><div class='html5-pause' style='display:none;'></div></div> "+text}if(text.length>0)text='<div class="html5-title">'+text+"</div>";if(inst.options.showdescription&&description&&description.length>0)text+='<div class="html5-description">'+description+"</div>";inst.$text.html(text);if(inst.options.inGroup&&inst.options.showplaybutton){if(inst.autosliding){$(".html5-play",
inst.$lightbox).hide();$(".html5-pause",inst.$lightbox).show()}else{$(".html5-play",inst.$lightbox).show();$(".html5-pause",inst.$lightbox).hide()}$(".html5-play",inst.$lightbox).click(function(){$(".html5-play",inst.$lightbox).hide();$(".html5-pause",inst.$lightbox).show();if(inst.slideTimeout){inst.slideTimeout.stop();inst.slideTimeout.start();inst.autosliding=true}});$(".html5-pause",inst.$lightbox).click(function(){$(".html5-play",inst.$lightbox).show();$(".html5-pause",inst.$lightbox).hide();
if(inst.slideTimeout){inst.slideTimeout.stop();inst.autosliding=false}})}$("#html5-social",inst.$lightbox).show();if(inst.options.showsocialmedia)if(inst.currentElem[ELEM_SOCIALMEDIA])if($("#html5-socialmedia",inst.$lightboxBox).length>0)$("#html5-socialmedia",inst.$lightboxBox).html(inst.currentElem[ELEM_SOCIALMEDIA]);else inst.$lightboxBox.append('<div id="html5-socialmedia" style="'+inst.options.socialmediaposition+'">'+inst.currentElem[ELEM_SOCIALMEDIA]+"</div>");else if($("#html5-socialmedia",
inst.$lightboxBox).length>0)$("#html5-socialmedia",inst.$lightboxBox).remove()},inst.showImage=function(elem,imgW,imgH){var elemW,elemH;if(elem[ELEM_WIDTH])elemW=elem[ELEM_WIDTH];else{elemW=imgW;elem[ELEM_WIDTH]=imgW}if(elem[ELEM_HEIGHT])elemH=elem[ELEM_HEIGHT];else{elemH=imgH;elem[ELEM_HEIGHT]=imgH}inst.showTitle(elem[ELEM_TITLE],elem[ELEM_DESCRIPTION]);var sizeObj=inst.calcElemSize({w:elemW,h:elemH},inst.options.imagekeepratio);inst.resizeLightbox(sizeObj.w,sizeObj.h,true,function(){inst.$loading.hide();
var timercode=!inst.options.showtimer||!inst.options.inGroup?"":"<div class='html5-timer' style='display:none;position:absolute;"+inst.options.timerposition+":0;left:0;width:0;height:"+inst.options.timerheight+"px;background-color:"+inst.options.timercolor+";opacity:"+inst.options.timeropacity+";'></div>";var titlecode=elem[ELEM_WEBLINKTEXT]&&elem[ELEM_WEBLINKTEXT].length>0?" title='"+elem[ELEM_WEBLINKTEXT].replace(/'/g,"&#39;")+"'":"";var targetcode=elem[ELEM_WEBLINKTARGET]&&elem[ELEM_WEBLINKTARGET].length>
0?" target='"+elem[ELEM_WEBLINKTARGET]+"'":"";var linkcode=elem[ELEM_WEBLINK]&&elem[ELEM_WEBLINK].length>0?"<a href='"+elem[ELEM_WEBLINK]+"'"+titlecode+targetcode+">":"";var linkcodeafter=elem[ELEM_WEBLINK]&&elem[ELEM_WEBLINK].length>0?"</a>":"";inst.$image.hide();inst.$image.html("<div class='html5-image-container' style='display:block;position:relative;width:100%;height:100%;"+(inst.options.imagekeepratio?"overflow:hidden;":"overflow:auto;")+"'>"+linkcode+"<img class='html5-image-img' alt='"+inst.html2Text(elem[ELEM_TITLE])+
"' src='"+elem[ELEM_HREF]+"' width='100%' height='auto' />"+linkcodeafter+timercode+"</div>");inst.$image.fadeIn(inst.options.fadespeed);inst.showData();if(inst.autosliding){inst.slideTimeout.stop();inst.slideTimeout.start()}})};inst.showSWF=function(elem){var dataW=elem[ELEM_WIDTH]?elem[ELEM_WIDTH]:inst.options.defaultwidth;var dataH=elem[ELEM_HEIGHT]?elem[ELEM_HEIGHT]:inst.options.defaultheight;inst.showTitle(elem[ELEM_TITLE],elem[ELEM_DESCRIPTION]);var sizeObj=inst.calcElemSize({w:dataW,h:dataH},
true);dataW=sizeObj.w;dataH=sizeObj.h;inst.resizeLightbox(dataW,dataH,true,function(){inst.$loading.hide();inst.$image.html("<div class='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();inst.embedFlash($(".html5lightbox-swf",inst.$image),elem[ELEM_HREF],"window",{width:dataW,height:dataH});inst.$elem.show();inst.showData();if(inst.autosliding){inst.slideTimeout.stop();inst.slideTimeout.start()}})};inst.showVideo=function(elem){inst.slideTimeout.stop();inst.showTitle(elem[ELEM_TITLE],
elem[ELEM_DESCRIPTION]);var dataW=elem[ELEM_WIDTH]?elem[ELEM_WIDTH]:inst.options.defaultwidth;var dataH=elem[ELEM_HEIGHT]?elem[ELEM_HEIGHT]:inst.options.defaultheight;var sizeObj=inst.calcElemSize({w:dataW,h:dataH},true);dataW=sizeObj.w;dataH=sizeObj.h;inst.resizeLightbox(dataW,dataH,true,function(){inst.$loading.hide();inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:"+inst.options.videobgcolor+";'></div>").show();var isHTML5=
false;if(inst.options.isIE678||elem[ELEM_TYPE]==8||inst.options.isIE9&&inst.options.useflashonie9||inst.options.isIE10&&inst.options.useflashonie10||inst.options.isIE11&&inst.options.useflashonie11)isHTML5=false;else if(inst.options.isMobile)isHTML5=true;else if((inst.options.html5player||!inst.options.flashInstalled)&&inst.options.html5VideoSupported){isHTML5=true;if(inst.options.isFirefox||inst.options.isOpera)if(!elem[ELEM_HREF_WEBM]&&!elem[ELEM_HREF_OGG]&&(!inst.options.canplaymp4||inst.options.useflashformp4onfirefox))isHTML5=
false}if(isHTML5){var videoSrc=elem[ELEM_HREF];if(inst.options.isFirefox||inst.options.isOpera)if(elem[ELEM_HREF_WEBM])videoSrc=elem[ELEM_HREF_WEBM];else if(elem[ELEM_HREF_OGG])videoSrc=elem[ELEM_HREF_OGG];inst.embedHTML5Video($(".html5lightbox-video",inst.$image),videoSrc,inst.options.autoplay,inst.options.loopvideo,inst.options.mutevideo);if(elem[ELEM_WEBLINK]&&elem[ELEM_WEBLINK].length>0)$(".html5-lightbox-video",inst.$image).css({cursor:"pointer"}).click(function(){if(elem[ELEM_WEBLINKTARGET]&&
elem[ELEM_WEBLINKTARGET].length>0)window.open(elem[ELEM_WEBLINK],elem[ELEM_WEBLINKTARGET]);else window.open(elem[ELEM_WEBLINK])})}else{var videoFile=elem[ELEM_HREF];if(videoFile.charAt(0)!="/"&&videoFile.substring(0,5)!="http:"&&videoFile.substring(0,6)!="https:")videoFile=inst.options.htmlfolder+videoFile;inst.embedFlash($(".html5lightbox-video",inst.$image),inst.options.jsfolder+"html5boxplayer.swf","transparent",{width:dataW,height:dataH,jsobjectname:"html5Lightbox",hidecontrols:inst.options.videohidecontrols?
"1":"0",hideplaybutton:"0",videofile:videoFile,hdfile:"",ishd:"0",defaultvolume:inst.options.defaultvideovolume,autoplay:inst.options.autoplay?"1":"0",loop:inst.options.loopvideo?"1":"0",errorcss:".html5box-error"+inst.options.errorcss,id:0})}inst.$elem.show();inst.showData()})};inst.loadNext=function(){$(window).trigger("html5lightbox.videofinished");if(inst.autosliding)inst.gotoSlide(-1);else if(inst.options.autoclose)setTimeout(function(){inst.finish()},inst.options.autoclosedelay)};inst.getYoutubeParams=
function(href){var result={};if(href.indexOf("?")<0)return result;var params=href.substring(href.indexOf("?")+1).split("&");for(var i=0;i<params.length;i++){var value=params[i].split("=");if(value&&value.length==2&&value[0].toLowerCase()!="v")result[value[0].toLowerCase()]=value[1]}return result};inst.getYoutubeId=function(href){var youtubeId="";var regExp=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;var match=href.match(regExp);if(match&&match[7]&&match[7].length==
11)youtubeId=match[7];return youtubeId};inst.prepareYoutubeHref=function(href){var youtubeId=inst.getYoutubeId(href);var protocol="https:";var result=protocol+"//www.youtube.com/embed/"+youtubeId;var params=this.getYoutubeParams(href);var first=true;for(var key in params){if(first){result+="?";first=false}else result+="&";result+=key+"="+params[key]}return result};inst.prepareDailymotionHref=function(href){if(href.match(/\:\/\/.*(dai\.ly)/i)){var protocol="https:";var id=href.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
href=protocol+"//www.dailymotion.com/embed/video/"+id}return href};inst.showYoutubeVimeo=function(elem){inst.slideTimeout.stop();inst.showTitle(elem[ELEM_TITLE],elem[ELEM_DESCRIPTION]);var dataW=elem[ELEM_WIDTH]?elem[ELEM_WIDTH]:inst.options.defaultwidth;var dataH=elem[ELEM_HEIGHT]?elem[ELEM_HEIGHT]:inst.options.defaultheight;var sizeObj=inst.calcElemSize({w:dataW,h:dataH},true);dataW=sizeObj.w;dataH=sizeObj.h;if(inst.options.noresizecallback){inst.resizeLightbox(dataW,dataH,true,function(){inst.showData()});
inst.showYouTubeVimeoCallback(elem,sizeObj)}else inst.resizeLightbox(dataW,dataH,true,function(){inst.showYouTubeVimeoCallback(elem,sizeObj);inst.showData()})};inst.showYouTubeVimeoCallback=function(elem,sizeObj){inst.$loading.hide();inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();var href=elem[ELEM_HREF];var youtubeid="";if(elem[ELEM_TYPE]==3){youtubeid=inst.getYoutubeId(href);href=inst.prepareYoutubeHref(href)}if(elem[ELEM_TYPE]==
9)href=inst.prepareDailymotionHref(href);if(inst.options.autoplay){href+=href.indexOf("?")<0?"?":"&";if(elem[ELEM_TYPE]==11)href+="autoPlay=true";else href+="autoplay=1"}if(inst.options.loopvideo){href+=href.indexOf("?")<0?"?":"&";switch(elem[ELEM_TYPE]){case 3:href+="loop=1&playlist="+youtubeid;break;case 4:case 9:href+="loop=1";break;case 11:href+="endVideoBehavior=loop";break}}if(elem[ELEM_TYPE]==3){if(href.indexOf("?")<0)href+="?wmode=transparent&rel=0";else href+="&wmode=transparent&rel=0";if(inst.options.videohidecontrols)href+=
"&controls=0&showinfo=0";if(inst.options.mutevideo)href+="&mute=1";href+="&enablejsapi=1&origin="+document.location.protocol+"//"+document.location.hostname}else if(elem[ELEM_TYPE]==4){href+=href.indexOf("?")<0?"?":"&";href+="api=1&player_id=html5boxiframevideo"+inst.options.curElem;if(inst.options.mutevideo)href+="&muted=1"}$(".html5lightbox-video",inst.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5boxiframevideo' id='html5boxiframevideo"+inst.options.curElem+"' width='100%' height='100%' src='"+
href+"' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");inst.$elem.show();if(elem[ELEM_TYPE]==3){if(inst.options.inityoutube){inst.youtubeFinishCount=0;inst.initYoutubeFinishCallback()}}else if(elem[ELEM_TYPE]==4)if(inst.options.initvimeo){inst.vimeoFinishCount=0;inst.initVimeoFinishCallback()}};inst.initYoutubeFinishCallback=function(){if(typeof YT==="object"&&typeof YT.Player==="function")inst.ytplayer=new YT.Player("html5boxiframevideo"+inst.options.curElem,
{events:{"onStateChange":function(event){if(event.data==YT.PlayerState.ENDED){$(window).trigger("html5lightbox.videofinished");if(inst.autosliding)inst.gotoSlide(-1);else if(inst.options.autoclose)setTimeout(function(){inst.finish()},inst.options.autoclosedelay)}}}});else setTimeout(function(){if(inst.youtubeFinishCount<10){inst.youtubeFinishCount++;inst.initYoutubeFinishCallback()}},300)};inst.initVimeoFinishCallback=function(){if(typeof $f==="function"){var vimeoIframe=$("#html5boxiframevideo"+
inst.options.curElem)[0];inst.vimeoPlayer=$f(vimeoIframe);inst.vimeoPlayer.addEvent("ready",function(){inst.vimeoPlayer.addEvent("finish",function(id){$(window).trigger("html5lightbox.videofinished");if(inst.autosliding)inst.gotoSlide(-1);else if(inst.options.autoclose)setTimeout(function(){inst.finish()},inst.options.autoclosedelay)})})}else setTimeout(function(){if(inst.vimeoFinishCount<10){inst.vimeoFinishCount++;inst.initVimeoFinishCallback()}},300)};inst.showPDF=function(elem){if(inst.options.enablepdfjs){if(inst.options.isIPhone&&
inst.options.openpdfinnewtaboniphone||inst.options.isIPad&&inst.options.openpdfinnewtabonipad){var win=window.open(elem[ELEM_HREF],"_blank");win.focus();inst.finish();return}if(!inst.options.pdfjsengine)inst.options.pdfjsengine=inst.options.jsfolder+"pdfjs/web/viewer.html";var href=elem[ELEM_HREF];if(href.substring(0,5)!="http:"&&href.substring(0,6)!="https:")href=inst.absoluteUrl(href);var hashindex=href.indexOf("#");if(hashindex>0)href=encodeURIComponent(href.substring(0,hashindex))+href.substring(hashindex);
else href=encodeURIComponent(href);var pdfelem=jQuery.extend(true,{},elem);pdfelem[ELEM_HREF]=inst.options.pdfjsengine+(inst.options.pdfjsengine.indexOf("?")<0?"?":"&")+"file="+href;inst.showWeb(pdfelem)}else if(inst.options.isIPhone||inst.options.isIPad||inst.options.isAndroid||inst.options.isIE||inst.options.isIE11){var win=window.open(elem[ELEM_HREF],"_blank");win.focus();inst.finish();return}else inst.showWeb(elem)};inst.showMP3=function(elem){};inst.showDiv=function(elem){inst.showTitle(elem[ELEM_TITLE],
elem[ELEM_DESCRIPTION]);var winWidth=$(window).width();var winH=$(window).height();var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;var dataW=elem[ELEM_WIDTH]?elem[ELEM_WIDTH]:inst.options.usedefaultsizeforcontent?inst.options.defaultwidth:winWidth;var dataH=elem[ELEM_HEIGHT]?elem[ELEM_HEIGHT]:inst.options.usedefaultsizeforcontent?inst.options.defaultheight:winH-navH;var sizeObj=inst.calcElemSize({w:dataW,h:dataH},false);dataW=sizeObj.w;dataH=sizeObj.h;inst.resizeLightbox(dataW,
dataH,true,function(){inst.$loading.hide();inst.$image.html("<div class='html5lightbox-div' id='html5lightbox-div"+inst.options.curElem+"' style='display:block;width:100%;height:"+(inst.options.autoresizecontent?"auto":"100%")+";"+(inst.options.isIOS?"-webkit-overflow-scrolling:touch;overflow-y:scroll;":"overflow:auto;")+"'></div>").show();var divID=elem[ELEM_HREF];if($(divID).length>0)$(divID).children().appendTo($("#html5lightbox-div"+inst.options.curElem,inst.$image));else $("#html5lightbox-div"+
inst.options.curElem,inst.$image).html("<div class='html5-error'>The specified div ID does not exist.</div>");inst.$elem.show();inst.showData();if(inst.options.autoresizecontent)inst.resizeWindow();if(inst.autosliding){inst.slideTimeout.stop();inst.slideTimeout.start()}})};inst.isSameDomain=function(href){if(href.substring(0,5)!="http:"&&href.substring(0,6)!="https:")return true;var link=document.createElement("a");link.setAttribute("href",href);var result=link.protocol==document.location.protocol&&
link.host==document.location.host&&link.port==document.location.port;link=null;return result};inst.showWeb=function(elem){inst.showTitle(elem[ELEM_TITLE],elem[ELEM_DESCRIPTION]);var winWidth=$(window).width();var winH=$(window).height();var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;var dataW=elem[ELEM_WIDTH]?elem[ELEM_WIDTH]:inst.options.usedefaultsizeforcontent?inst.options.defaultwidth:winWidth;var dataH=elem[ELEM_HEIGHT]?elem[ELEM_HEIGHT]:inst.options.usedefaultsizeforcontent?
inst.options.defaultheight:winH-navH;var sizeObj=inst.calcElemSize({w:dataW,h:dataH},false);dataW=sizeObj.w;dataH=sizeObj.h;inst.resizeLightbox(dataW,dataH,true,function(){inst.$image.html("<div class='html5lightbox-web' style='display:block;width:100%;height:100%;"+(inst.options.isIOS?"-webkit-overflow-scrolling:touch;overflow-y:scroll;":"")+"'></div>").show();$(".html5lightbox-web",inst.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5lightbox-web-iframe' width='100%' height='100%' src='"+
elem[ELEM_HREF]+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");$(".html5lightbox-web-iframe",inst.$image).on("load",function(){inst.$loading.hide()});inst.$elem.show();inst.showData();if(inst.options.autoresizecontent&&inst.isSameDomain(elem[ELEM_HREF])){$(".html5lightbox-web-iframe",inst.$image).data("sameorigin",true);$(".html5lightbox-web-iframe",inst.$image).on("load",function(){$(this).data("sameoriginloaded",true);inst.resizeWindow()})}if(inst.autosliding){inst.slideTimeout.stop();
inst.slideTimeout.start()}})};inst.scrollBox=function(){};inst.resizeWindow=function(){if(!inst.currentElem)return;if(!inst.options.responsive)return;var winWidth=$(window).width();var winH=$(window).height();if(!(inst.options.showtitle&&inst.currentElem[ELEM_TITLE]&&inst.currentElem[ELEM_TITLE].length>0||inst.options.showdescription&&inst.currentElem[ELEM_DESCRIPTION]&&inst.currentElem[ELEM_DESCRIPTION].length>0||inst.options.inGroup&&(inst.options.showplaybutton||inst.options.showtitleprefix)))inst.options.barheight=
0;var elemW,elemH,keepratio;if(inst.currentElem[ELEM_TYPE]==5||inst.currentElem[ELEM_TYPE]==7||inst.currentElem[ELEM_TYPE]==10){var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;elemW=inst.currentElem[ELEM_WIDTH]?inst.currentElem[ELEM_WIDTH]:inst.options.usedefaultsizeforcontent?inst.options.defaultwidth:winWidth;elemH=inst.currentElem[ELEM_HEIGHT]?inst.currentElem[ELEM_HEIGHT]:inst.options.usedefaultsizeforcontent?inst.options.defaultheight:winH-navH;keepratio=false}else{elemW=
inst.currentElem[ELEM_WIDTH]?inst.currentElem[ELEM_WIDTH]:inst.options.defaultwidth;elemH=inst.currentElem[ELEM_HEIGHT]?inst.currentElem[ELEM_HEIGHT]:inst.options.defaultheight;if(inst.currentElem[ELEM_TYPE]==0)keepratio=inst.options.imagekeepratio;else keepratio=true}var sizeObj=inst.calcElemSize({w:elemW,h:elemH},keepratio);inst.adjustLightboxPos(sizeObj.w,sizeObj.h);inst.adjustDataHeight();if(inst.options.autoresizecontent&&(inst.currentElem[ELEM_TYPE]==5||inst.currentElem[ELEM_TYPE]==7||inst.currentElem[ELEM_TYPE]==
10)){var resizeHeight=false;if(inst.currentElem[ELEM_TYPE]==7&&$(".html5lightbox-web-iframe",inst.$lightbox).length>0&&$(".html5lightbox-web-iframe",inst.$lightbox).data("sameoriginloaded")){var iframe=$(".html5lightbox-web-iframe",inst.$lightbox)[0];if(iframe&&iframe.contentWindow&&iframe.contentWindow.document&&iframe.contentWindow.document.documentElement.offsetHeight)if(elemH>iframe.contentWindow.document.documentElement.offsetHeight){elemH=iframe.contentWindow.document.documentElement.offsetHeight;
resizeHeight=true}}else if(inst.currentElem[ELEM_TYPE]==10&&$(".html5lightbox-div",inst.$lightbox).length>0){var divH=$(".html5lightbox-div",inst.$lightbox).height();if(elemH>divH){elemH=divH;resizeHeight=true}}if(resizeHeight){sizeObj=inst.calcElemSize({w:elemW,h:elemH},keepratio);inst.adjustLightboxPos(sizeObj.w,sizeObj.h)}}if($(".html5-nav").length<=0)return;$(".html5-nav-list").css({"margin-left":0});var $navMask=$(".html5-nav-mask");var $navPrev=$(".html5-nav-prev");var $navNext=$(".html5-nav-next");
var winWidth=$(window).width();if(inst.options.totalwidth<=winWidth){$navMask.css({width:inst.options.totalwidth+"px"});$navPrev.hide();$navNext.hide()}else{$navMask.css({width:winWidth-2*inst.options.navbuttonwidth+"px"});$navPrev.show();$navNext.show()}};inst.calcElemSize=function(sizeObj,keepratio){if(!inst.options.responsive)return sizeObj;var winWidth=$(window).width();var winH=$(window).height();winH=winH?winH:$(document).height();if(inst.options.resizeleftright&&(inst.options.titlestyle=="left"||
inst.options.titlestyle=="right")&&winWidth>inst.options.sidetobottomscreenwidth)sizeObj.w=sizeObj.w*100/inst.options.imagepercentage;var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;var topmargin=$(window).height()<inst.options.smallscreenheight?inst.options.bordertopmarginsmall:inst.options.bordertopmargin;var h0=winH-navH-2*inst.options.bordersize-2*topmargin;if(inst.options.responsivebarheight)if(winH<=inst.options.smallscreenheight)inst.options.barheight=inst.options.barheightonsmallheight;
else inst.options.barheight=inst.options.barheightoriginal;if(inst.options.titlestyle=="bottom")h0-=inst.options.barheight;else if(inst.options.titlestyle=="outside")h0-=inst.$elemData.outerHeight();var w0=winWidth-2*inst.options.bordersize-2*inst.options.bordermargin;if(inst.options.resizeleftright&&(inst.options.titlestyle=="left"||inst.options.titlestyle=="right")&&winWidth>inst.options.sidetobottomscreenwidth)w0-=2*inst.options.bordersize;if(inst.options.fullscreenmode&&winWidth>inst.options.navarrowsbottomscreenwidth||
(inst.options.isTouch&&inst.options.navarrowsalwaysshowontouch||inst.options.alwaysshownavarrows)&&winWidth>inst.options.navarrowsbottomscreenwidth)w0-=64;if(inst.options.notkeepratioonsmallheight&&winH<=inst.options.smallscreenheight)keepratio=false;if(inst.currentElem[ELEM_TYPE]==0&&keepratio){var ratio=inst.currentElem[ELEM_ORIGINALWIDTH]/inst.currentElem[ELEM_ORIGINALHEIGHT];if(inst.options.resizeleftright&&(inst.options.titlestyle=="left"||inst.options.titlestyle=="right")&&winWidth>inst.options.sidetobottomscreenwidth)ratio*=
100/inst.options.imagepercentage;sizeObj.h=Math.round(sizeObj.w/ratio);if(sizeObj.h>h0){sizeObj.w=Math.round(ratio*h0);sizeObj.h=h0}if(sizeObj.w>w0){sizeObj.h=Math.round(w0/ratio);sizeObj.w=w0}}else{if(sizeObj.h>h0){if(keepratio)sizeObj.w=Math.round(sizeObj.w*h0/sizeObj.h);sizeObj.h=h0}else if(inst.options.maxheight)sizeObj.h=h0;if(sizeObj.w>w0){if(keepratio)sizeObj.h=Math.round(sizeObj.h*w0/sizeObj.w);sizeObj.w=w0}}if(inst.options.resizeleftright&&(inst.options.titlestyle=="left"||inst.options.titlestyle==
"right")&&winWidth>inst.options.sidetobottomscreenwidth)sizeObj.w+=2*inst.options.bordersize;return sizeObj};inst.adjustDataHeight=function(){var winWidth=$(window).width();var winH=$(window).height();var isBottomText=inst.options.titlestyle=="bottom"||inst.options.titlestyle=="outside"||(inst.options.titlestyle=="left"||inst.options.titlestyle=="right")&&winWidth<=inst.options.sidetobottomscreenwidth;if(inst.options.responsivebarheight)if(winH<=inst.options.smallscreenheight)inst.options.barheight=
inst.options.barheightonsmallheight;else inst.options.barheight=inst.options.barheightoriginal;if(isBottomText){var topmargin=$(window).height()<inst.options.smallscreenheight?inst.options.bordertopmarginsmall:inst.options.bordertopmargin;var navH=inst.options.shownavigation&&inst.navvisible?inst.options.navheight:0;var winH=$(window).height();var maxH=winH-topmargin-navH;var barHeight=inst.options.barautoheight?inst.$elemData.outerHeight():inst.options.barheight;var totalHeight=inst.$elemWrap.outerHeight()+
barHeight;var elemHeight=Math.min(maxH,totalHeight);var boxMargin=(winH-navH-elemHeight)/2;inst.$elem.css({"max-height":elemHeight+"px"});inst.$lightboxBox.css({"margin-top":boxMargin+"px"})}else inst.$elem.css({"max-height":"none"});if(inst.options.titlestyle=="bottom"||inst.options.titlestyle=="inside")inst.$lightboxBox.css({height:"auto"});if(inst.options.positionFixed)$("#html5-lightbox-overlay",inst.$lightbox).css({height:Math.max($(window).height(),$(document).height())});else $("#html5-lightbox-overlay",
inst.$lightbox).css({height:"100%"})};inst.showData=function(){if(inst.$text.text().length>0)inst.$elemData.show();inst.adjustDataHeight();$(window).trigger("html5lightbox.lightboxopened")};inst.resizeLightbox=function(elemW,elemH,bAnimate,onFinish){inst.hideNavArrows();var boxPos=inst.calcBoxPosition(elemW,elemH);var boxW=boxPos[0];var boxH=boxPos[1];var boxT=boxPos[2];inst.$loading.hide();inst.$watermark.hide();if(inst.options.nextElem<=inst.options.curElem)if(inst.options.onlastitem&&window[inst.options.onlastitem]&&
typeof window[inst.options.onlastitem]=="function")window[inst.options.onlastitem](inst.currentElem);if(inst.options.prevElem>=inst.options.curElem)if(inst.options.onfirstitem&&window[inst.options.onfirstitem]&&typeof window[inst.options.onfirstitem]=="function")window[inst.options.onfirstitem](inst.currentElem);if(!inst.options.fullscreenmode&&(!inst.options.isTouch||!inst.options.navarrowsalwaysshowontouch)&&!inst.options.alwaysshownavarrows){inst.$lightboxBox.on("mouseenter mousemove",function(){if(inst.options.arrowloop&&
inst.options.prevElem>=0||!inst.options.arrowloop&&inst.options.prevElem>=0&&inst.options.prevElem<inst.options.curElem)inst.$prev.fadeIn();if(inst.options.arrowloop&&inst.options.nextElem>=0||!inst.options.arrowloop&&inst.options.nextElem>=0&&inst.options.nextElem>inst.options.curElem)inst.$next.fadeIn()});inst.$lightboxBox.on("mouseleave",function(){inst.$next.fadeOut();inst.$prev.fadeOut()})}var existingBoxT=parseInt(inst.$lightboxBox.css("margin-top"));inst.$lightboxBox.css({"margin-top":boxT});
inst.resizePositionFixed();var speed=bAnimate?inst.options.resizespeed:0;if(inst.options.fullscreenmode&&inst.options.fullscreennotransition)speed=0;if((inst.options.transition=="slide"||inst.options.transition=="crossfade")&&inst.existingElem>=0)speed=0;var winWidth=$(window).width();if((inst.options.titlestyle=="left"||inst.options.titlestyle=="right")&&winWidth>inst.options.sidetobottomscreenwidth){if(boxW==inst.$lightboxBox.width()&&boxH==inst.$lightboxBox.height())speed=0;inst.$lightboxBox.animate({width:boxW},
speed).animate({height:boxH},speed,function(){inst.onAnimateFinish(onFinish)})}else{if(boxW==inst.$elemWrap.width()&&boxH==inst.$elemWrap.height())speed=0;inst.$lightboxBox.css({"width":boxW,"height":"auto"});inst.$elemWrap.animate({width:boxW},speed).animate({height:boxH},speed,function(){inst.onAnimateFinish(onFinish)})}};inst.onAnimateFinish=function(onFinish){inst.$loading.show();inst.$watermark.show();inst.$close.show();inst.$elem.css({"background-color":inst.options.bgcolor});inst.resizePositionFixed();
onFinish();inst.finishCallback()};inst.finishCallback=function(){if((inst.options.transition=="slide"||inst.options.transition=="crossfade")&&inst.existingElem>=0)if(inst.options.transition=="slide"){inst.$prevelem.animate({left:inst.direction==-1?"-100%":"100%",opacity:0},{duration:inst.options.transitionduration});inst.$elem.animate({left:0,opacity:1},{duration:inst.options.transitionduration,always:function(){inst.$prevelem.remove();inst.$elem.removeClass("html5-elem-box-current").css({position:"relative",
height:"100%"})}})}else{inst.$prevelem.animate({opacity:0},{duration:inst.options.transitionduration});inst.$elem.animate({opacity:1},{duration:inst.options.transitionduration,always:function(){inst.$prevelem.remove();inst.$elem.removeClass("html5-elem-box-current").css({position:"relative",height:"100%"})}})}},inst.resetDiv=function(elemID){if(inst.elemArray.length>0&&elemID>=0)if(inst.elemArray[elemID][ELEM_TYPE]==10){var divID=inst.elemArray[elemID][ELEM_HREF];if($(divID).length>0)$("#html5lightbox-div"+
elemID).children().appendTo($(divID))}};inst.reset=function(){if(inst.options.stamp)inst.$watermark.hide();inst.showing=false;inst.$image.empty();inst.$text.empty();inst.$error.hide();inst.$loading.hide();inst.$image.hide();if(inst.options.titlestyle=="bottom"||inst.options.titlestyle=="inside")inst.$elemData.hide();if(!inst.options.fullscreenmode)inst.$close.hide();inst.$elem.css({"background-color":""})};inst.resetNavigation=function(){inst.options.navheight=0;$(".html5-nav").remove();inst.navvisible=
false};inst.finish=function(){if(inst.options.exitanimation=="fadeOut"||inst.options.exitanimation=="fadeOutDown"){inst.$lightbox.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){inst.$lightboxBox.removeClass("html5box-animated html5box-"+inst.options.exitanimation);inst.$lightbox.removeClass("html5box-animated html5box-fadeOut");inst.finishDone()});inst.$lightbox.addClass("html5box-animated html5box-fadeOut");inst.$lightboxBox.addClass("html5box-animated html5box-"+
inst.options.exitanimation)}else inst.finishDone()};inst.finishDone=function(){inst.existingElem=-1;inst.resetDiv(inst.options.curElem);if($(".html5-lightbox-video",inst.$lightbox).length)$(".html5-lightbox-video",inst.$lightbox).attr("src","");$("head").find("style").each(function(){if($(this).data("creator")=="html5box-html5-lightbox")$(this).remove()});if(inst.options.bodynoscroll)$("html,body").removeClass("bodynoscroll");inst.slideTimeout.stop();inst.reset();inst.resetNavigation();inst.$lightbox.remove();
$("#html5box-html5-lightbox").remove();inst.showObjects();if(inst.options.oncloselightbox&&window[inst.options.oncloselightbox]&&typeof window[inst.options.oncloselightbox]=="function")window[inst.options.oncloselightbox](inst.currentElem);if(inst.onLightboxClosed&&typeof inst.onLightboxClosed=="function")inst.onLightboxClosed(inst.currentElem);$(window).trigger("html5lightbox.lightboxclosed")};inst.pauseSlide=function(){};inst.playSlide=function(){};inst.gotoSlide=function(slide){inst.existingElem=
inst.options.curElem;inst.direction=slide;inst.resetDiv(inst.options.curElem);if(slide==-1){if(inst.options.nextElem<0)return;inst.options.curElem=inst.options.nextElem}else if(slide==-2){if(inst.options.prevElem<0)return;inst.options.curElem=inst.options.prevElem}else if(slide>=0){inst.direction=slide>inst.options.curElem?-1:-2;inst.options.curElem=slide}if(inst.autosliding)inst.slideTimeout.stop();inst.calcNextPrevElem();if(inst.options.transition!="slide"&&inst.options.transition!="crossfade")inst.reset();
inst.loadCurElem();if(inst.options.titlestyle=="inside"&&inst.options.showonmouseoverinside&&inst.currentElem[ELEM_TYPE]!==0&&inst.options.showinsidetitleforimageonly)inst.$elemData.css({opacity:0})};inst.enableSwipe=function(){var preventDefault=inst.options.isAndroid&&(inst.options.swipepreventdefaultonandroid||inst.options.androidVersion>=0&&inst.options.androidVersion<=5)?true:false;inst.$lightboxBox.html5lightboxTouchSwipe({preventWebBrowser:preventDefault,swipeDistance:inst.options.swipedistance,
swipeLeft:function(){inst.gotoSlide(-1)},swipeRight:function(){inst.gotoSlide(-2)}})};inst.hideObjects=function(){$("select, embed, object").css({"visibility":"hidden"})};inst.showObjects=function(){$("select, embed, object").css({"visibility":"visible"})};inst.embedHTML5Video=function($container,src,autoplay,loopvideo,mutevideo){$container.html("<div style='display:block;width:100%;height:100%;position:relative;'><video class='html5-lightbox-video' width='100%' height='100%'"+(inst.options.html5videoposter&&
inst.options.html5videoposter.length>0?"poster='"+inst.options.html5videoposter+"'":"")+(autoplay?" autoplay":"")+(loopvideo?" loop":"")+(mutevideo?" muted":"")+(inst.options.nativehtml5controls&&!inst.options.videohidecontrols?" controls='controls'":"")+(inst.options.nativecontrolsnodownload?' controlsList="nodownload"':"")+" src='"+src+"'></div>");if(mutevideo)inst.options.defaultvideovolume=0;if(!inst.options.nativehtml5controls&&!inst.options.videohidecontrols){$("video",$container).data("src",
src);$("video",$container).lightboxHTML5VideoControls(inst.options.skinsfolder,inst,".html5-lightbox-video",inst.options.videohidecontrols,false,inst.options.defaultvideovolume,inst.options.nativecontrolsonfullscreen,inst.options.nativecontrolsnodownload,null)}$("video",$container).off("ended").on("ended",function(){$(window).trigger("html5lightbox.videofinished");if(inst.autosliding)inst.gotoSlide(-1);else if(inst.options.autoclose)setTimeout(function(){inst.finish()},inst.options.autoclosedelay)})};
inst.embedFlash=function($container,src,wmode,flashVars){if(inst.options.flashInstalled){var htmlOptions={pluginspage:"http://www.adobe.com/go/getflashplayer",quality:"high",allowFullScreen:"true",allowScriptAccess:"always",type:"application/x-shockwave-flash"};htmlOptions.width="100%";htmlOptions.height="100%";htmlOptions.src=src;htmlOptions.flashVars=$.param(flashVars);htmlOptions.wmode=wmode;var htmlString="";for(var key in htmlOptions)htmlString+=key+"="+htmlOptions[key]+" ";$container.html("<embed "+
htmlString+"/>")}else $container.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")};
inst.checkType=function(href){if(!href)return-1;if(href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i))return 0;if(href.match(/[^\.]\.(swf)\s*$/i))return 1;if(href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i))return 2;if(href.match(/\:\/\/.*(youtube\.com)/i)||href.match(/\:\/\/.*(youtu\.be)/i))return 3;if(href.match(/\:\/\/.*(vimeo\.com)/i))return 4;if(href.match(/\:\/\/.*(dailymotion\.com)/i)||href.match(/\:\/\/.*(dai\.ly)/i))return 9;if(href.match(/[^\.]\.(pdf)/i))return 5;if(href.match(/[^\.]\.(mp3)\s*$/i))return 6;
if(href.match(/[^\.]\.(flv)\s*$/i))return 8;if(href.match(/\#\w+/i))return 10;if(href.match(/\:\/\/.*(wistia)/i))return 11;return 7};inst.getURLParams=function(){var result={};var params=window.location.search.substring(1).split("&");for(var i=0;i<params.length;i++){var value=params[i].split("=");if(value&&value.length==2)result[value[0].toLowerCase()]=unescape(value[1])}return result};inst.absoluteUrl=function(href){var link=document.createElement("a");link.href=href;return link.protocol+"//"+link.host+
link.pathname+link.search+link.hash};inst.showLightboxObject=function(obj){if(obj)inst.showLightbox(obj.type,obj.href,obj.title,obj.width,obj.height,obj.webm,obj.ogg,obj.thumbnail,obj.description,obj.div,obj.originalwidth,obj.originalheight,obj.socialmedia,obj.weblink,obj.weblinktarget,obj.weblinktext,obj.group)};inst.showLightbox=function(type,href,title,width,height,webm,ogg,thumbnail,description,div,originalwidth,originalheight,socialmedia,weblink,weblinktarget,weblinktext,group){inst.options=
$.extend(inst.options,inst.defaultoptions);$(window).trigger("html5lightbox.lightboxshow");inst.init();inst.reset();inst.$lightbox.show();inst.adjustLightboxPos(inst.options.loadingwidth,inst.options.loadingheight);inst.loadElem(new Array(type,href,title,group,width,height,webm,ogg,thumbnail,description,div,originalwidth,originalheight,socialmedia,weblink,weblinktarget,weblinktext))};inst.addItemNoDuplicate=function(href,title,group,width,height,webm,ogg,thumbnail,description,mediatype){for(var i=
0;i<inst.elemArray.length;i++)if(inst.elemArray[i][ELEM_HREF]==href)return;inst.addItem(href,title,group,width,height,webm,ogg,thumbnail,description,mediatype)};inst.addItem=function(href,title,group,width,height,webm,ogg,thumbnail,description,mediatype){type=mediatype&&mediatype>=0?mediatype:inst.checkType(href);inst.elemArray.push(new Array(type,href,title,group,width,height,webm,ogg,thumbnail,description))};inst.showItem=function(href){inst.options=$.extend(inst.options,inst.defaultoptions);$(window).trigger("html5lightbox.lightboxshow");
inst.init();if(inst.elemArray.length<=0)return true;inst.hideObjects();for(var i=0;i<inst.elemArray.length;i++)if(inst.elemArray[i][ELEM_HREF]==href)break;if(i==inst.elemArray.length)return true;inst.options.curElem=i;inst.calcNextPrevElem();inst.reset();inst.$lightbox.show();inst.adjustLightboxPos(inst.options.loadingwidth,inst.options.loadingheight);inst.loadCurElem();return false};inst.each(function(){var self=$(this);var nodeName=this.nodeName.toLowerCase();if(nodeName=="a"||nodeName=="area")self.off("click").click(inst.clickHandler);
else self.find("a,area").each(function(){$(this).off("click").click(inst.clickHandler)});var autoopen=false;var autoopendelay=0;var autoopenonce=false;var autoopenonceexpire=0;if(typeof html5lightbox_options!="undefined"&&html5lightbox_options){if("autoopen"in html5lightbox_options)autoopen=html5lightbox_options.autoopen;if("autoopendelay"in html5lightbox_options)autoopendelay=html5lightbox_options.autoopendelay;if("autoopenonce"in html5lightbox_options)autoopenonce=html5lightbox_options.autoopenonce;
if("autoopenonceexpire"in html5lightbox_options)autoopenonceexpire=html5lightbox_options.autoopenonceexpire}autoopen=self.data("autoopen")?self.data("autoopen"):autoopen;autoopendelay=self.data("autoopendelay")?self.data("autoopendelay"):autoopendelay;autoopenonce=self.data("autoopenonce")?self.data("autoopenonce"):autoopenonce;autoopenonceexpire=self.data("autoopenonceexpire")?self.data("autoopenonceexpire"):autoopenonceexpire;autocookie="html5lightboxpopup=1;path=/";if(autoopenonceexpire>0){var expires=
new Date;expires.setTime(expires.getTime()+autoopenonceexpire*60*60*1E3);autocookie+=";expires="+expires.toUTCString()}if(autoopen){var is_popped=false;if(autoopenonce){var cookies=document.cookie?document.cookie.split(";"):[];for(var i in cookies){var parts=$.trim(cookies[i]).split("=");if(parts.length&&parts[0]=="html5lightboxpopup"){is_popped=true;break}}}if(!is_popped){setTimeout(function(){self.click();document.cookie=autocookie},autoopendelay);return false}}if(self.data("preloadonpageload")){var fileType=
"mediatype"in self.data()?self.data("mediatype"):inst.checkType(self.attr("href"));if(fileType==0){var preloaddelay=self.data("preloaddelay")?self.data("preloaddelay"):0;setTimeout(function(){(new Image).src=self.attr("href")},preloaddelay)}}});var urlParams=inst.getURLParams();if("html5lightboxshare"in urlParams){var shareUrl=decodeURIComponent(urlParams["html5lightboxshare"]);var shareLink=$('.html5lightbox[href="'+shareUrl+'"]');if(shareLink.length>0)shareLink.click()}if(inst.options.preloadallonpageload)setTimeout(function(){inst.each(function(){if(this.nodeName.toLowerCase()!=
"a"&&this.nodeName.toLowerCase()!="area")return;var fileType="mediatype"in $(this).data()?$(this).data("mediatype"):inst.checkType($(this).attr("href"));if(fileType!==0)return;(new Image).src=$(this).attr("href");if($(this).data("thumbnail"))(new Image).src=$(this).data("thumbnail")})},inst.options.preloadalldelay);return inst}})(jQuery);(function($){$.fn.html5lightboxTouchSwipe=function(options){var defaults={preventWebBrowser:false,swipeDistance:0,swipeLeft:null,swipeRight:null,swipeTop:null,swipeBottom:null};
if(options)$.extend(defaults,options);return this.each(function(){var startX=-1,startY=-1;var curX=-1,curY=-1;function touchStart(event){var e=event.originalEvent;if(e.targetTouches.length>=1){startX=e.targetTouches[0].pageX;startY=e.targetTouches[0].pageY}else touchCancel(event)}function touchMove(event){if(defaults.preventWebBrowser)event.preventDefault();var e=event.originalEvent;if(e.targetTouches.length>=1){curX=e.targetTouches[0].pageX;curY=e.targetTouches[0].pageY}else touchCancel(event)}function touchEnd(event){if(curX>
0||curY>0){triggerHandler();touchCancel(event)}else touchCancel(event)}function touchCancel(event){startX=-1;startY=-1;curX=-1;curY=-1}function triggerHandler(){if(Math.abs(curX-startX)>Math.abs(curY-startY)){if(Math.abs(curX-startX)>defaults.swipeDistance)if(curX>startX){if(defaults.swipeRight)defaults.swipeRight.call()}else if(defaults.swipeLeft)defaults.swipeLeft.call()}else if(Math.abs(curY-startY)>defaults.swipeDistance)if(curY>startY){if(defaults.swipeBottom)defaults.swipeBottom.call()}else if(defaults.swipeTop)defaults.swipeTop.call()}
try{$(this).on("touchstart",touchStart);$(this).on("touchmove",touchMove);$(this).on("touchend",touchEnd);$(this).on("touchcancel",touchCancel)}catch(e){}})}})(jQuery);(function($){$.fn.lightboxHTML5VideoControls=function(skinFolder,parentInst,videoElem,hideControls,hidePlayButton,defaultVolume,fullscreenNativeControls,html5VideoNoDownload,skinImages){var isTouch="ontouchstart"in window;var eStart=isTouch?"touchstart":"mousedown";var eMove=isTouch?"touchmove":"mousemove";var eCancel=isTouch?"touchcancel":
"mouseup";var eClick="click";var BUTTON_SIZE=32;var BAR_HEIGHT=isTouch?48:36;var hideControlsTimerId=null;var hideVolumeBarTimeoutId=null;var sliderDragging=false;var isFullscreen=false;var userActive=true;var isHd=$(this).data("ishd");var hd=$(this).data("hd");var src=$(this).data("src");var $videoObj=$(this);$videoObj.get(0).removeAttribute("controls");var $videoPlay=$("<div class='html5boxVideoPlay'></div>");$videoObj.after($videoPlay);var playbuttonImage=skinImages&&"playbutton"in skinImages&&
skinImages.playbutton.length>0?skinImages.playbutton:skinFolder+"html5boxplayer_playvideo.png";$videoPlay.css({position:"absolute",top:"50%",left:"50%",display:"block",cursor:"pointer",width:64,height:64,"margin-left":-32,"margin-top":-32,"background-image":"url('"+playbuttonImage+"')","background-position":"center center","background-repeat":"no-repeat"}).on(eClick,function(){$videoObj.get(0).play()});var $videoFullscreenBg=$("<div class='html5boxVideoFullscreenBg'></div>");var $videoControls=$("<div class='html5boxVideoControls'>"+
"<div class='html5boxVideoControlsBg'></div>"+"<div class='html5boxPlayPause'>"+"<div class='html5boxPlay'></div>"+"<div class='html5boxPause'></div>"+"</div>"+"<div class='html5boxTimeCurrent'>--:--</div>"+"<div class='html5boxFullscreen'></div>"+"<div class='html5boxHD'></div>"+"<div class='html5boxVolume'>"+"<div class='html5boxVolumeButton'></div>"+"<div class='html5boxVolumeBar'>"+"<div class='html5boxVolumeBarBg'>"+"<div class='html5boxVolumeBarActive'></div>"+"</div>"+"</div>"+"</div>"+"<div class='html5boxTimeTotal'>--:--</div>"+
"<div class='html5boxSeeker'>"+"<div class='html5boxSeekerBuffer'></div>"+"<div class='html5boxSeekerPlay'></div>"+"<div class='html5boxSeekerHandler'></div>"+"</div>"+"<div style='clear:both;'></div>"+"</div>");$videoObj.after($videoControls);$videoObj.after($videoFullscreenBg);$videoFullscreenBg.css({display:"none",position:"fixed",left:0,top:0,bottom:0,right:0});$videoControls.css({display:"block",position:"absolute",width:"100%",height:BAR_HEIGHT,left:0,bottom:0,right:0,margin:"0 auto"});var userActivate=
function(){userActive=true};$videoObj.on("touch click mousemove mouseenter",function(){userActive=true});if(!hideControls)setInterval(function(){if(userActive){$videoControls.show();userActive=false;clearTimeout(hideControlsTimerId);hideControlsTimerId=setTimeout(function(){if(!$videoObj.get(0).paused)$videoControls.fadeOut()},5E3)}},250);$(".html5boxVideoControlsBg",$videoControls).css({display:"block",position:"absolute",width:"100%",height:"100%",left:0,top:0,"background-color":"#000000",opacity:0.7,
filter:"alpha(opacity=70)"});$(".html5boxPlayPause",$videoControls).css({display:"block",position:"relative",width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",margin:Math.floor((BAR_HEIGHT-BUTTON_SIZE)/2),"float":"left"});var $videoBtnPlay=$(".html5boxPlay",$videoControls);var $videoBtnPause=$(".html5boxPause",$videoControls);$videoBtnPlay.css({display:"block",position:"absolute",top:0,left:0,width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",cursor:"pointer","background-image":"url('"+skinFolder+"html5boxplayer_playpause.png"+
"')","background-position":"top left"}).hover(function(){$(this).css({"background-position":"bottom left"})},function(){$(this).css({"background-position":"top left"})}).on(eClick,function(){$videoObj.get(0).play()});$videoBtnPause.css({display:"none",position:"absolute",top:0,left:0,width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",cursor:"pointer","background-image":"url('"+skinFolder+"html5boxplayer_playpause.png"+"')","background-position":"top right"}).hover(function(){$(this).css({"background-position":"bottom right"})},
function(){$(this).css({"background-position":"top right"})}).on(eClick,function(){$videoObj.get(0).pause()});var $videoTimeCurrent=$(".html5boxTimeCurrent",$videoControls);var $videoTimeTotal=$(".html5boxTimeTotal",$videoControls);var $videoSeeker=$(".html5boxSeeker",$videoControls);var $videoSeekerPlay=$(".html5boxSeekerPlay",$videoControls);var $videoSeekerBuffer=$(".html5boxSeekerBuffer",$videoControls);var $videoSeekerHandler=$(".html5boxSeekerHandler",$videoControls);$videoTimeCurrent.css({display:"block",
position:"relative","float":"left","line-height":BAR_HEIGHT+"px","font-weight":"normal","font-size":"12px",margin:"0 8px","font-family":"Arial, Helvetica, sans-serif",color:"#fff"});$videoTimeTotal.css({display:"block",position:"relative","float":"right","line-height":BAR_HEIGHT+"px","font-weight":"normal","font-size":"12px",margin:"0 8px","font-family":"Arial, Helvetica, sans-serif",color:"#fff"});$videoSeeker.css({display:"block",cursor:"pointer",overflow:"hidden",position:"relative",height:"10px",
"background-color":"#222",margin:Math.floor((BAR_HEIGHT-10)/2)+"px 4px"}).on(eStart,function(e){var e0=isTouch?e.originalEvent.touches[0]:e;var pos=e0.pageX-$videoSeeker.offset().left;$videoSeekerPlay.css({width:pos});$videoObj.get(0).currentTime=pos*$videoObj.get(0).duration/$videoSeeker.width();$videoSeeker.on(eMove,function(e){var e0=isTouch?e.originalEvent.touches[0]:e;var pos=e0.pageX-$videoSeeker.offset().left;$videoSeekerPlay.css({width:pos});$videoObj.get(0).currentTime=pos*$videoObj.get(0).duration/
$videoSeeker.width()})}).on(eCancel,function(){$videoSeeker.off(eMove)});$videoSeekerBuffer.css({display:"block",position:"absolute",left:0,top:0,height:"100%","background-color":"#444"});$videoSeekerPlay.css({display:"block",position:"absolute",left:0,top:0,height:"100%","background-color":"#fcc500"});var $videoFSObj=fullscreenNativeControls?$videoObj:$videoObj.parent();if($videoFSObj.get(0).requestFullscreen||$videoFSObj.get(0).webkitRequestFullScreen||$videoFSObj.get(0).mozRequestFullScreen||$videoFSObj.get(0).webkitEnterFullScreen||
$videoFSObj.get(0).msRequestFullscreen){var switchScreen=function(fullscreen){if(fullscreen){if(fullscreenNativeControls){$videoObj.get(0).setAttribute("controls","controls");if(html5VideoNoDownload)$videoObj.get(0).setAttribute("controlsList","nodownload")}if($videoFSObj.get(0).requestFullscreen)$videoFSObj.get(0).requestFullscreen();else if($videoFSObj.get(0).webkitRequestFullScreen)$videoFSObj.get(0).webkitRequestFullScreen();else if($videoFSObj.get(0).mozRequestFullScreen)$videoFSObj.get(0).mozRequestFullScreen();
else if($videoFSObj.get(0).webkitEnterFullScreen)$videoFSObj.get(0).webkitEnterFullScreen();if($videoFSObj.get(0).msRequestFullscreen)$videoFSObj.get(0).msRequestFullscreen()}else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.msExitFullscreen)document.msExitFullscreen()};
var switchScreenCSS=function(fullscreen){if(fullscreenNativeControls)if(fullscreen){$videoObj.get(0).setAttribute("controls","controls");if(html5VideoNoDownload)$videoObj.get(0).setAttribute("controlsList","nodownload")}else $videoObj.get(0).removeAttribute("controls");else if(fullscreen){$(document).on("mousemove",userActivate);$videoControls.css({"z-index":2147483647,position:"fixed"});$videoFullscreenBg.css({"z-index":2147483647,display:"block"});$videoPlay.css({"z-index":2147483647})}else{$(document).off("mousemove",
userActivate);$videoControls.css({"z-index":"",position:"absolute"});$videoFullscreenBg.css({"z-index":"",display:"none"});$videoPlay.css({"z-index":""})}};if(document.addEventListener){document.addEventListener("MSFullscreenChange",function(){isFullscreen=document.msFullscreenElement!=null;switchScreenCSS(isFullscreen)},false);document.addEventListener("fullscreenchange",function(){isFullscreen=document.fullscreen;switchScreenCSS(isFullscreen)},false);document.addEventListener("mozfullscreenchange",
function(){isFullscreen=document.mozFullScreen;switchScreenCSS(isFullscreen)},false);document.addEventListener("webkitfullscreenchange",function(){isFullscreen=document.webkitIsFullScreen;switchScreenCSS(isFullscreen)},false)}if($videoFSObj&&$videoFSObj.get(0)&&$videoFSObj.get(0).addEventListener){$videoFSObj.get(0).addEventListener("webkitbeginfullscreen",function(){isFullscreen=true;switchScreenCSS(isFullscreen)},false);$videoFSObj.get(0).addEventListener("webkitendfullscreen",function(){isFullscreen=
false;switchScreenCSS(isFullscreen)},false)}if(!fullscreenNativeControls)$("head").append("<style type='text/css'>video"+videoElem+"::-webkit-media-controls { display:none !important; }</style>");var $videoFullscreen=$(".html5boxFullscreen",$videoControls);$videoFullscreen.css({display:"block",position:"relative","float":"right",width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",margin:Math.floor((BAR_HEIGHT-BUTTON_SIZE)/2),cursor:"pointer","background-image":"url('"+skinFolder+"html5boxplayer_fullscreen.png"+
"')","background-position":"left top"}).hover(function(){var backgroundPosX=$(this).css("background-position")?$(this).css("background-position").split(" ")[0]:$(this).css("background-position-x");$(this).css({"background-position":backgroundPosX+" bottom"})},function(){var backgroundPosX=$(this).css("background-position")?$(this).css("background-position").split(" ")[0]:$(this).css("background-position-x");$(this).css({"background-position":backgroundPosX+" top"})}).on(eClick,function(){isFullscreen=
!isFullscreen;switchScreen(isFullscreen)})}if(hd){var $videoHD=$(".html5boxHD",$videoControls);$videoHD.css({display:"block",position:"relative","float":"right",width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",margin:Math.floor((BAR_HEIGHT-BUTTON_SIZE)/2),cursor:"pointer","background-image":"url('"+skinFolder+"html5boxplayer_hd.png"+"')","background-position":(isHd?"right":"left")+" center"}).on(eClick,function(){isHd=!isHd;$(this).css({"background-position":(isHd?"right":"left")+" center"});parentInst.isHd=
isHd;var isPaused=$videoObj.get(0).isPaused;$videoObj.get(0).setAttribute("src",(isHd?hd:src)+"#t="+$videoObj.get(0).currentTime);if(!isPaused)$videoObj.get(0).play();else $videoObj.get(0).pause()})}$videoObj.get(0).volume=defaultVolume;var volumeSaved=defaultVolume==0?1:defaultVolume;var volume=$videoObj.get(0).volume;$videoObj.get(0).volume=volume/2+0.1;if($videoObj.get(0).volume===volume/2+0.1){$videoObj.get(0).volume=volume;var $videoVolume=$(".html5boxVolume",$videoControls);var $videoVolumeButton=
$(".html5boxVolumeButton",$videoControls);var $videoVolumeBar=$(".html5boxVolumeBar",$videoControls);var $videoVolumeBarBg=$(".html5boxVolumeBarBg",$videoControls);var $videoVolumeBarActive=$(".html5boxVolumeBarActive",$videoControls);$videoVolume.css({display:"block",position:"relative","float":"right",width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",margin:Math.floor((BAR_HEIGHT-BUTTON_SIZE)/2)}).hover(function(){clearTimeout(hideVolumeBarTimeoutId);var volume=$videoObj.get(0).volume;$videoVolumeBarActive.css({height:Math.round(volume*
100)+"%"});$videoVolumeBar.show()},function(){clearTimeout(hideVolumeBarTimeoutId);hideVolumeBarTimeoutId=setTimeout(function(){$videoVolumeBar.hide()},1E3)});$videoVolumeButton.css({display:"block",position:"absolute",top:0,left:0,width:BUTTON_SIZE+"px",height:BUTTON_SIZE+"px",cursor:"pointer","background-image":"url('"+skinFolder+"html5boxplayer_volume.png"+"')","background-position":"top "+(volume>0?"left":"right")}).hover(function(){var backgroundPosX=$(this).css("background-position")?$(this).css("background-position").split(" ")[0]:
$(this).css("background-position-x");$(this).css({"background-position":backgroundPosX+" bottom"})},function(){var backgroundPosX=$(this).css("background-position")?$(this).css("background-position").split(" ")[0]:$(this).css("background-position-x");$(this).css({"background-position":backgroundPosX+" top"})}).on(eClick,function(){var volume=$videoObj.get(0).volume;if(volume>0){volumeSaved=volume;volume=0}else volume=volumeSaved;var backgroundPosY=$(this).css("background-position")?$(this).css("background-position").split(" ")[1]:
$(this).css("background-position-y");$videoVolumeButton.css({"background-position":(volume>0?"left":"right")+" "+backgroundPosY});$videoObj.get(0).volume=volume;$videoVolumeBarActive.css({height:Math.round(volume*100)+"%"})});$videoVolumeBar.css({display:"none",position:"absolute",left:4,bottom:"100%",width:24,height:80,"margin-bottom":Math.floor((BAR_HEIGHT-BUTTON_SIZE)/2),"background-color":"#000000",opacity:0.7,filter:"alpha(opacity=70)"});$videoVolumeBarBg.css({display:"block",position:"relative",
width:10,height:68,margin:7,cursor:"pointer","background-color":"#222"});$videoVolumeBarActive.css({display:"block",position:"absolute",bottom:0,left:0,width:"100%",height:"100%","background-color":"#fcc500"});$videoVolumeBarBg.on(eStart,function(e){var e0=isTouch?e.originalEvent.touches[0]:e;var vol=1-(e0.pageY-$videoVolumeBarBg.offset().top)/$videoVolumeBarBg.height();vol=vol>1?1:vol<0?0:vol;$videoVolumeBarActive.css({height:Math.round(vol*100)+"%"});$videoVolumeButton.css({"background-position":"left "+
(vol>0?"top":"bottom")});$videoObj.get(0).volume=vol;$videoVolumeBarBg.on(eMove,function(e){var e0=isTouch?e.originalEvent.touches[0]:e;var vol=1-(e0.pageY-$videoVolumeBarBg.offset().top)/$videoVolumeBarBg.height();vol=vol>1?1:vol<0?0:vol;$videoVolumeBarActive.css({height:Math.round(vol*100)+"%"});$videoVolumeButton.css({"background-position":"left "+(vol>0?"top":"bottom")});$videoObj.get(0).volume=vol})}).on(eCancel,function(){$videoVolumeBarBg.off(eMove)})}var calcTimeFormat=function(seconds){var h0=
Math.floor(seconds/3600);var h=h0<10?"0"+h0:h0;var m0=Math.floor((seconds-h0*3600)/60);var m=m0<10?"0"+m0:m0;var s0=Math.floor(seconds-(h0*3600+m0*60));var s=s0<10?"0"+s0:s0;var r=m+":"+s;if(h0>0)r=h+":"+r;return r};if(hidePlayButton)$videoPlay.hide();if(hideControls)$videoControls.hide();var onVideoPlay=function(){if(!hidePlayButton)$videoPlay.hide();if(!hideControls){$videoBtnPlay.hide();$videoBtnPause.show()}};var onVideoPause=function(){if(!hidePlayButton)$videoPlay.show();if(!hideControls){$videoControls.show();
clearTimeout(hideControlsTimerId);$videoBtnPlay.show();$videoBtnPause.hide()}};var onVideoEnded=function(){$(window).trigger("html5lightbox.videoended");if(!hidePlayButton)$videoPlay.show();if(!hideControls){$videoControls.show();clearTimeout(hideControlsTimerId);$videoBtnPlay.show();$videoBtnPause.hide()}};var onVideoUpdate=function(){var curTime=$videoObj.get(0).currentTime;if(curTime){$videoTimeCurrent.text(calcTimeFormat(curTime));var duration=$videoObj.get(0).duration;if(duration){$videoTimeTotal.text(calcTimeFormat(duration));
if(!sliderDragging){var sliderW=$videoSeeker.width();var pos=Math.round(sliderW*curTime/duration);$videoSeekerPlay.css({width:pos});$videoSeekerHandler.css({left:pos})}}}};var onVideoProgress=function(){if($videoObj.get(0).buffered&&$videoObj.get(0).buffered.length>0&&!isNaN($videoObj.get(0).buffered.end(0))&&!isNaN($videoObj.get(0).duration)){var sliderW=$videoSeeker.width();$videoSeekerBuffer.css({width:Math.round(sliderW*$videoObj.get(0).buffered.end(0)/$videoObj.get(0).duration)})}};try{$videoObj.on("play",
onVideoPlay);$videoObj.on("pause",onVideoPause);$videoObj.on("ended",onVideoEnded);$videoObj.on("timeupdate",onVideoUpdate);$videoObj.on("progress",onVideoProgress)}catch(e){}}})(jQuery);jQuery(document).ready(function(){if(typeof html5Lightbox==="undefined")if(jQuery.fn.html5lightbox)html5Lightbox=jQuery(".html5lightbox").html5lightbox()})};

var Froogaloop=function(){function n(e){return new n.fn.init(e)}var d={},f=!1,p=(Array.prototype.slice,"*");function l(e,n,t){if(t.contentWindow.postMessage){var r=JSON.stringify({method:e,value:n});t.contentWindow.postMessage(r,"*")}}function e(e){var n,t;try{t=(n=JSON.parse(e.data)).event||n.method}catch(e){}if("ready"!=t||f||(f=!0),!/^https?:\/\/player.vimeo.com/.test(e.origin))return!1;"*"===p&&(p=e.origin);var r,i,o=n.value,l=n.data,u=""===u?null:n.player_id,a=(r=t,(i=u)?d[i][r]:d[r]),s=[];return!!a&&(void 0!==o&&s.push(o),l&&s.push(l),u&&s.push(u),0<s.length?a.apply(null,s):a.call())}function u(e,n,t){t?(d[t]||(d[t]={}),d[t][e]=n):d[e]=n}function a(e){return e&&e.constructor&&e.call&&e.apply}return(n.fn=n.prototype={element:null,init:function(e){return"string"==typeof e&&(e=document.getElementById(e)),this.element=e,this},api:function(e,n){if(!this.element||!e)return!1;var t=this.element,r=""!==t.id?t.id:null,i=a(n)?null:n,o=a(n)?n:null;return o&&u(e,o,r),l(e,i,t),this},addEvent:function(e,n){if(!this.element)return!1;var t=this.element,r=""!==t.id?t.id:null;return u(e,n,r),"ready"!=e?l("addEventListener",e,t):"ready"==e&&f&&n.call(null,r),this},removeEvent:function(e){if(!this.element)return!1;var n=this.element,t=function(e,n){if(n&&d[n]){if(!d[n][e])return!1;d[n][e]=null}else{if(!d[e])return!1;d[e]=null}return!0}(e,""!==n.id?n.id:null);"ready"!=e&&t&&l("removeEventListener",e,n)}}).init.prototype=n.fn,window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e),window.Froogaloop=window.$f=n}();

/*! Morphext - v2.4.4 - 2015-05-21 */
!function(a){"use strict";function b(b,c){this.element=a(b),this.settings=a.extend({},d,c),this._defaults=d,this._init()}var c="Morphext",d={animation:"bounceIn",separator:",",speed:2e3,complete:a.noop};b.prototype={_init:function(){var b=this;this.phrases=[],this.element.addClass("morphext"),a.each(this.element.text().split(this.settings.separator),function(c,d){b.phrases.push(a.trim(d))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",a.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var a=this;this._interval=setInterval(function(){a.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery);

/* Simple jQuery Equal Heights @version 1.5.1. Copyright (c) 2013 Matt Banks. Dual licensed under the MIT and GPL licenses. */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/*! Magnific Popup - v1.0.0 - 2015-03-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
/*
 * ScrollToFixed
 * https://github.com/bigspotteddog/ScrollToFixed
 *
 * Copyright (c) 2011 Joseph Cava-Lynch
 * MIT license
 */
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var l=this;l.$el=a(d);l.el=d;l.$el.data("ScrollToFixed",l);var c=false;var G=l.$el;var H;var E;var e;var y;var D=0;var q=0;var j=-1;var f=-1;var t=null;var z;var g;function u(){G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");f=-1;D=G.offset().top;q=G.offset().left;if(l.options.offsets){q+=(G.offset().left-G.position().left)}if(j==-1){j=q}H=G.css("position");c=true;if(l.options.bottom!=-1){G.trigger("preFixed.ScrollToFixed");w();G.trigger("fixed.ScrollToFixed")}}function n(){var I=l.options.limit;if(!I){return 0}if(typeof(I)==="function"){return I.apply(G)}return I}function p(){return H==="fixed"}function x(){return H==="absolute"}function h(){return !(p()||x())}function w(){if(!p()){t.css({display:G.css("display"),width:G.outerWidth(true),height:G.outerHeight(true),"float":G.css("float")});cssOptions={"z-index":l.options.zIndex,position:"fixed",top:l.options.bottom==-1?s():"",bottom:l.options.bottom==-1?"":l.options.bottom,"margin-left":"0px"};if(!l.options.dontSetWidth){cssOptions.width=G.width()}G.css(cssOptions);G.addClass(l.options.baseClassName);if(l.options.className){G.addClass(l.options.className)}H="fixed"}}function b(){var J=n();var I=q;if(l.options.removeOffsets){I="";J=J-D}cssOptions={position:"absolute",top:J,left:I,"margin-left":"0px",bottom:""};if(!l.options.dontSetWidth){cssOptions.width=G.width()}G.css(cssOptions);H="absolute"}function k(){if(!h()){f=-1;t.css("display","none");G.css({"z-index":y,width:"",position:E,left:"",top:e,"margin-left":""});G.removeClass("scroll-to-fixed-fixed");if(l.options.className){G.removeClass(l.options.className)}H=null}}function v(I){if(I!=f){G.css("left",q-I);f=I}}function s(){var I=l.options.marginTop;if(!I){return 0}if(typeof(I)==="function"){return I.apply(G)}return I}function A(){if(!a.isScrollToFixed(G)){return}var K=c;if(!c){u()}else{if(h()){D=G.offset().top;q=G.offset().left}}var I=a(window).scrollLeft();var L=a(window).scrollTop();var J=n();if(l.options.minWidth&&a(window).width()<l.options.minWidth){if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}else{if(l.options.maxWidth&&a(window).width()>l.options.maxWidth){if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}else{if(l.options.bottom==-1){if(J>0&&L>=J-s()){if(!x()||!K){o();G.trigger("preAbsolute.ScrollToFixed");b();G.trigger("unfixed.ScrollToFixed")}}else{if(L>=D-s()){if(!p()||!K){o();G.trigger("preFixed.ScrollToFixed");w();f=-1;G.trigger("fixed.ScrollToFixed")}v(I)}else{if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}}}else{if(J>0){if(L+a(window).height()-G.outerHeight(true)>=J-(s()||-m())){if(p()){o();G.trigger("preUnfixed.ScrollToFixed");if(E==="absolute"){b()}else{k()}G.trigger("unfixed.ScrollToFixed")}}else{if(!p()){o();G.trigger("preFixed.ScrollToFixed");w()}v(I);G.trigger("fixed.ScrollToFixed")}}else{v(I)}}}}}function m(){if(!l.options.bottom){return 0}return l.options.bottom}function o(){var I=G.css("position");if(I=="absolute"){G.trigger("postAbsolute.ScrollToFixed")}else{if(I=="fixed"){G.trigger("postFixed.ScrollToFixed")}else{G.trigger("postUnfixed.ScrollToFixed")}}}var C=function(I){if(G.is(":visible")){c=false;A()}};var F=function(I){(!!window.requestAnimationFrame)?requestAnimationFrame(A):A()};var B=function(){var J=document.body;if(document.createElement&&J&&J.appendChild&&J.removeChild){var L=document.createElement("div");if(!L.getBoundingClientRect){return null}L.innerHTML="x";L.style.cssText="position:fixed;top:100px;";J.appendChild(L);var M=J.style.height,N=J.scrollTop;J.style.height="3000px";J.scrollTop=500;var I=L.getBoundingClientRect().top;J.style.height=M;var K=(I===100);J.removeChild(L);J.scrollTop=N;return K}return null};var r=function(I){I=I||window.event;if(I.preventDefault){I.preventDefault()}I.returnValue=false};l.init=function(){l.options=a.extend({},a.ScrollToFixed.defaultOptions,i);y=G.css("z-index");l.$el.css("z-index",l.options.zIndex);t=a("<div />");H=G.css("position");E=G.css("position");e=G.css("top");if(h()){l.$el.after(t)}a(window).bind("resize.ScrollToFixed",C);a(window).bind("scroll.ScrollToFixed",F);if("ontouchmove" in window){a(window).bind("touchmove.ScrollToFixed",A)}if(l.options.preFixed){G.bind("preFixed.ScrollToFixed",l.options.preFixed)}if(l.options.postFixed){G.bind("postFixed.ScrollToFixed",l.options.postFixed)}if(l.options.preUnfixed){G.bind("preUnfixed.ScrollToFixed",l.options.preUnfixed)}if(l.options.postUnfixed){G.bind("postUnfixed.ScrollToFixed",l.options.postUnfixed)}if(l.options.preAbsolute){G.bind("preAbsolute.ScrollToFixed",l.options.preAbsolute)}if(l.options.postAbsolute){G.bind("postAbsolute.ScrollToFixed",l.options.postAbsolute)}if(l.options.fixed){G.bind("fixed.ScrollToFixed",l.options.fixed)}if(l.options.unfixed){G.bind("unfixed.ScrollToFixed",l.options.unfixed)}if(l.options.spacerClass){t.addClass(l.options.spacerClass)}G.bind("resize.ScrollToFixed",function(){t.height(G.height())});G.bind("scroll.ScrollToFixed",function(){G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");A()});G.bind("detach.ScrollToFixed",function(I){r(I);G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",C);a(window).unbind("scroll.ScrollToFixed",F);G.unbind(".ScrollToFixed");t.remove();l.$el.removeData("ScrollToFixed")});C()};l.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.3.15
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};

/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
!r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);
/*
 * Debounce function
 * based on unminified version from http://davidwalsh.name/javascript-debounce-function
 */
theme.debounce = function(n,t,u){var e;return function(){var a=this,r=arguments,i=function(){e=null,u||n.apply(a,r)},o=u&&!e;clearTimeout(e),e=setTimeout(i,t),o&&n.apply(a,r)}};

//AOS
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

theme.Currency = (function() {
  var moneyFormat = '$';

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      var centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[.@]/
    );

    if (match !== null) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();
	//debugger;
    this._onSelectChange(this)
    $(this.singleOptionSelector, this.$container).on(
      'change',
      this._onSelectChange.bind(this)
    );
  }

  Variants.prototype = _.assignIn({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = _.map(
        $(this.singleOptionSelector, this.$container),
        function(element) {
          var $element = $(element);
          var type = $element.attr('type');
          var currentOption = {};

          if (type === 'radio' || type === 'checkbox') {
            if ($element[0].checked) {
              currentOption.value = $element.val();
              currentOption.index = $element.data('index');

              return currentOption;
            } else {
              return false;
            }
          } else {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          }
        }
      );

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = _.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = _.find(variants, function(variant) {
        return selectedValues.every(function(values) {
          return _.isEqual(variant[values.index], values.value);
        });
      });

      return found;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      //debugger;
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;
//!!!
      this._updateMetadata(variant);
      this._updateOptionsPrices(variant);
      this._hideUnavailable(variant);
//--
      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },
//!!!
    // _hideUnavailable: function(variant) {
    //   console.log(variant);
    //   if($('#shopify-section-product-template-nectar')){
    //     if(variant.option1 == '64 16oz'){
    //       $('#ProductSelect-option-1').find('label[data-option="6-Pack"]').hide();
    //     }else{
    //       $('#ProductSelect-option-1').find('label[data-option="6-Pack"]').show();
    //     }
    //     if(variant.option2 == '6-Pack'){
    //       $('#ProductSelect-option-0').find('label[data-option="64 16oz"]').hide();
    //     }else{
    //       $('#ProductSelect-option-0').find('label[data-option="64 16oz"]').show();
    //     }
    //   }
    // },
    
      _hideUnavailable: function(variant) {
     // console.log(variant);
      if($('#shopify-section-product-template-mist')){
        // if(variant.option1 == 'Rose Mist 2oz'){        
        //   $('#ProductSelect-option-1').find('label[data-option="4 Fills"]').hide();
        // }else{          
        //   $('#ProductSelect-option-1').find('label[data-option="4 Fills"]').show();
        // }
        // if(variant.option1 == 'Rose Mist 2oz'){
        //   $('#ProductSelect-option-1').find('label[data-option="8 Fills"]').hide();
        // }else{
        //  $('#ProductSelect-option-1').find('label[data-option="8 Fills"]').show();
        // }

        if(variant.option1 == 'Rose Mist 2oz'){ 
          // $("label[for='ProductSelect-option-choose-quantity-Single']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-2-pack']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-3-pack").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
         // $('#ProductSelect-option-1').find('label[data-option="Single"]').hide();          
        }else{          
          $('#ProductSelect-option-1').find('label[data-option="Single"]').show();
          $('#ProductSelect-option-1').find('label[data-option="2-pack"]').show();    
          $('#ProductSelect-option-1').find('label[data-option="3-pack"]').show();
          // $("label[for='ProductSelect-option-choose-quantity-Single']").removeClass("secondpack");
          // $("label[for='ProductSelect-option-choose-quantity-2-pack']").removeClass("secondpack");
          // $("label[for='ProductSelect-option-choose-quantity-3-pack").removeClass("secondpack");
        }

        
        if(variant.option1 == '4 Fills 8oz'){ 
         // $("label[for='ProductSelect-option-choose-quantity-Single']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-2-pack']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-3-pack").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-3-pack").addClass("secondpack");
         // $('#ProductSelect-option-1').find('label[data-option="Single"]').hide();          
        }else{          
          $('#ProductSelect-option-1').find('label[data-option="Single"]').show();
          $('#ProductSelect-option-1').find('label[data-option="2-pack"]').show();    
          $('#ProductSelect-option-1').find('label[data-option="3-pack"]').show();
          $("label[for='ProductSelect-option-choose-quantity-Single']").removeClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-2-pack']").removeClass("secondpack");
          // $("label[for='ProductSelect-option-choose-quantity-3-pack").removeClass("secondpack");
        }
        // if(variant.option1 == '4 Fills 8oz'){
        //  $('#ProductSelect-option-1').find('label[data-option="2-pack"]').hide();          
        // }else{
        //   $('#ProductSelect-option-1').find('label[data-option="2-pack"]').show();          
        // }
        //  if(variant.option1 == '4 Fills 8oz'){
        //   $('#ProductSelect-option-1').find('label[data-option="3-pack"]').hide();
        // }else{
        //   $('#ProductSelect-option-1').find('label[data-option="3-pack"]').show();
        // }
         if(variant.option1 == 'Rose Mist Set 10oz'){ 
          // $("label[for='ProductSelect-option-choose-quantity-Single']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-2-pack']").addClass("secondpack");
         // $("label[for='ProductSelect-option-choose-quantity-3-pack").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-3-pack").addClass("secondpack");
         // $('#ProductSelect-option-1').find('label[data-option="Single"]').hide();          
        }else{          
          $('#ProductSelect-option-1').find('label[data-option="Single"]').show();
          $('#ProductSelect-option-1').find('label[data-option="2-pack"]').show();    
          $('#ProductSelect-option-1').find('label[data-option="3-pack"]').show();
          $("label[for='ProductSelect-option-choose-quantity-Single']").removeClass("secondpack");
          $("label[for='ProductSelect-option-choose-quantity-2-pack']").removeClass("secondpack");
          // $("label[for='ProductSelect-option-choose-quantity-3-pack").removeClass("secondpack");
        }
       // if(variant.option1 == 'Rose Mist Set 10oz'){          
       //    //$('#ProductSelect-option-1').find('label[data-option="Single"]').hide();   
       //    $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
       //    $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
       //  }else{          
       //    $('#ProductSelect-option-1').find('label[data-option="Single"]').show();
       //  }
       //  if(variant.option1 == 'Rose Mist Set 10oz'){
       //     //$('#ProductSelect-option-1').find('label[data-option="2-pack"]').hide();   
       //     $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
       //     $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
       //  }else{
       //    $('#ProductSelect-option-1').find('label[data-option="2-pack"]').show();          
       //  }
       //   if(variant.option1 == 'Rose Mist Set 10oz'){
       //    // $('#ProductSelect-option-1').find('label[data-option="3-pack"]').hide();
       //    $("label[for='ProductSelect-option-choose-quantity-4 Fills").addClass("secondpack");
       //    $("label[for='ProductSelect-option-choose-quantity-8 Fills").addClass("secondpack");
       //  }else{
       //    $('#ProductSelect-option-1').find('label[data-option="3-pack"]').show();
       //  }

        
      }
               
    },                             

    _updateOptionsPrices: function(variant) {
           
      var pricesForOptions = this._findPricesForOptions(variant);

      var option2Select = $('#ProductSelect-option-1');

      $.each(pricesForOptions, function(key, option){
        option2Select.find('label[data-option="'+ option['option2Name'] +'"]').find('.option-price').text('$'+option['price']);
     
      });
      
       var option1Select = $('#ProductSelect-option-0');

      $.each(pricesForOptions, function(key, option){
        option1Select.find('label').find('.option-price').text('$'+option['price']);
     
      });
      
      
      var pricesForSubscriptions = this._findPricesForSubscriptions(variant);
      $.each(pricesForSubscriptions, function(key, option){
        $('.rc_price[data-option="'+ option['option3Name'] +'"]').text(option['price']);
      });
    },

    _findPricesForSubscriptions: function(currentVariant) {
      var variants = this.product.variants;

      var pricesForSubscriptions = [];
      var option1 = currentVariant['option1'];
      var option2 = currentVariant['option2'];
      var option3 = ['one-time purchase', 'subscription'];

      $.each(variants, function(key, variant){
        $.each(option3, function(key, option3){
          if (variant['option1'] == option1 && variant['option2'] == option2 && variant['option3'] == option3) {
            pricesForSubscriptions.push({
              option3Name: option3,
              price: variant['price'] / 100
            });
          }
        });
      });
      return pricesForSubscriptions;
    },

    _findPricesForOptions: function(currentVariant) {
      var variants = this.product.variants;     

      var pricesForOptions = [];
      var option1 = currentVariant['option1'];
      var option2 = this._findOptionsNames(variants);
      var option3 = currentVariant['option3'];

      $.each(variants, function(key, variant){
        $.each(option2, function(key, option2){
          if (variant['option1'] == option1 && variant['option2'] == option2 && variant['option3'] == option3) {
            pricesForOptions.push({
              option2Name: option2,
              price: variant['price'] / 100
            });
          }
        });
      });
      return pricesForOptions;
    },

    _findOptionsNames: function(variants) {
      var optionsQtyNames = [];
      $.each(variants, function(key, value){
        var option2 = value['option2'];
        var found = $.inArray(option2, optionsQtyNames);        
        if (found < 0) {
          optionsQtyNames.push(option2);
        }
      });
      return optionsQtyNames;
    },

    _updateMetadata: function(variant) {      
      var variantMetadata = metadata[variant.id];      
      $('.product-images-info').text(variantMetadata['images_info']);
      $('.product-images-info-title').text(variantMetadata['images_title']);
      var priceServings = (variant.price / 100 / variantMetadata['price_info']).toFixed(2);
      console.log(variantMetadata);
      
      $('.product-price-info').html('$' + priceServings + ' <span class="unit-n">/ serving</span>');
       $('.product-price-dev').html(variantMetadata['price_dev']);
            $('.product-price-dev2').html(variantMetadata['price_dev2']);
    },
//--
    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (
        !variant.featured_image ||
        variantImage.src === currentVariantImage.src
      ) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price
      ) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant SKU changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.$container.trigger({
        type: 'variantSKUChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?variant=' +
        variant.id;
      window.history.replaceState({ path: newurl }, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();


/* ================ MODULES ================ */

/*!
handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();
/*============================================================================
  Ajax the add to cart experience by revealing it in a side drawer
  Plugin Documentation - http://shopify.github.io/Timber/#ajax-cart
  (c) Copyright 2015 Shopify Inc. Author: Carson Shold (@cshold). All Rights Reserved.

  This file includes:
    - Basic Shopify Ajax API calls
    - Ajax cart plugin

  This requires:
    - jQuery 1.8+
    - handlebars.min.js (for cart template)
    - modernizer.min.js
    - snippet/ajax-cart-template.liquid

  Customized version of Shopify's jQuery API
  (c) Copyright 2009-2015 Shopify Inc. Author: Caroline Schnapp. All Rights Reserved.
==============================================================================*/
if (typeof ShopifyAPI === 'undefined') {
  ShopifyAPI = {};
}

/*============================================================================
  API Helper Functions
==============================================================================*/
function attributeToString(attribute) {
  if (typeof attribute !== 'string') {
    attribute += '';
    if (attribute === 'undefined') {
      attribute = '';
    }
  }
  return jQuery.trim(attribute);
}

/*============================================================================
  API Functions
==============================================================================*/
ShopifyAPI.onCartUpdate = function() {
  // alert('There are now ' + cart.item_count + ' items in the cart.');
};

ShopifyAPI.updateCartNote = function(note, callback) {
  var params = {
    type: 'POST',
    url: '/cart/update.js',
    data: 'note=' + attributeToString(note),
    dataType: 'json',
    success: function(cart) {
      if (typeof callback === 'function') {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    }
  };
  debugger;
  jQuery.ajax(params);
};

ShopifyAPI.onError = function(XMLHttpRequest) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (data.message) {
    alert(data.message + '(' + data.status + '): ' + data.description);
  }
};

/*============================================================================
  POST to cart/add.js returns the JSON of the cart
    - Allow use of form element instead of just id
    - Allow custom error callback
==============================================================================*/
ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
  var formData = new FormData(form);
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: formData,
    processData: false,
    contentType: false,
    dataType: 'json',
    success: function(line_item) {
      if (typeof callback === 'function') {
        callback(line_item, form);
      } else {
        ShopifyAPI.onItemAdded(line_item, form);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      if (typeof errorCallback === 'function') {
        errorCallback(XMLHttpRequest, textStatus);
      } else {
        ShopifyAPI.onError(XMLHttpRequest, textStatus);
      }
    }
  };
  debugger;
  jQuery.ajax(params);
};

// Get from cart.js returns the cart in JSON
ShopifyAPI.getCart = function(callback) {
  jQuery.getJSON('/cart.js', function(cart) {
    if (typeof callback === 'function') {
      callback(cart);
    } else {
      ShopifyAPI.onCartUpdate(cart);
    }
  });
};

// POST to cart/change.js returns the cart in JSON
ShopifyAPI.changeItem = function(line, quantity, callback) {
  var params = {
    type: 'POST',
    url: '/cart/change.js',
    data: 'quantity=' + quantity + '&line=' + line,
    dataType: 'json',
    success: function(cart) {
      if (typeof callback === 'function') {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

/*============================================================================
  Ajax Shopify Add To Cart
==============================================================================*/
var ajaxCart = (function(module, $) {
  'use strict';

  // Public functions
  var init, loadCart;

  // Private general variables
  var settings, isUpdating, $body;

  // Private plugin variables
  var $formContainer,
    $addToCart,
    $cartCountSelector,
    $cartCostSelector,
    $cartContainer;

  // Private functions
  var updateCountPrice,
    formOverride,
    itemAddedCallback,
    itemErrorCallback,
    cartUpdateCallback,
    buildCart,
    cartCallback,
    adjustCart,
    adjustCartCallback,
    qtySelectors,
    validateQty;

  /*============================================================================
    Initialise the plugin and define global options
  ==============================================================================*/
  init = function(options) {
    // Default settings
    settings = {
      formSelector: '[data-product-form]',
      cartContainer: '#CartContainer',
      addToCartSelector: 'input[type="submit"]',
      cartCountSelector: null,
      cartCostSelector: null,
      moneyFormat: '$',
      disableAjaxCart: false,
      enableQtySelectors: true
    };

    // Override defaults with arguments
    $.extend(settings, options);

    // Select DOM elements
    $formContainer = $(settings.formSelector);
    $cartContainer = $(settings.cartContainer);
    $addToCart = $formContainer.find(settings.addToCartSelector);
    $cartCountSelector = $(settings.cartCountSelector);
    $cartCostSelector = $(settings.cartCostSelector);

    // General Selectors
    $body = $('body');

    // Track cart activity status
    isUpdating = false;

    // Setup ajax quantity selectors on the any template if enableQtySelectors is true
    if (settings.enableQtySelectors) {
      qtySelectors();
    }

    // Take over the add to cart form submit action if ajax enabled
    if (!settings.disableAjaxCart && $addToCart.length) {
      formOverride();
    }

    // Run this function in case we're using the quantity selector outside of the cart
    adjustCart();
  };

  loadCart = function() {
    $body.addClass('drawer--is-loading');
    ShopifyAPI.getCart(cartUpdateCallback);
  };

  updateCountPrice = function(cart) {
    if ($cartCountSelector) {
      $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

      if (cart.item_count === 0) {
        $cartCountSelector.addClass('hidden-count');
      }
    }
    if ($cartCostSelector) {
      $cartCostSelector.html(
        theme.Currency.formatMoney(cart.total_price, settings.moneyFormat)
      );
    }
    $('.cart-link__bubble').text(cart.item_count);
  };

  formOverride = function() {
    $formContainer.on('submit', function(evt) {
      evt.preventDefault();

      // Add class to be styled if desired
      $addToCart.removeClass('is-added').addClass('is-adding');

      // Remove any previous quantity errors
      $('.qty-error').remove();

      ShopifyAPI.addItemFromForm(
        evt.target,
        itemAddedCallback,
        itemErrorCallback
      );
    });
  };

  itemAddedCallback = function() {
    $addToCart.removeClass('is-adding').addClass('is-added');

    ShopifyAPI.getCart(cartUpdateCallback);
  };

  itemErrorCallback = function(XMLHttpRequest) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    $addToCart.removeClass('is-adding is-added');

    if (data.message) {
      if (data.status === 422) {
        $formContainer.after(
          '<div class="errors qty-error">' + data.description + '</div>'
        );
      }
    }
  };

  cartUpdateCallback = function(cart) {
    // Update quantity and price
    updateCountPrice(cart);
    buildCart(cart);
  };

  buildCart = function(cart) {
    // Start with a fresh cart div
    $cartContainer.empty();

    // Show empty cart
    if (cart.item_count === 0) {
      $cartContainer.append(
        '<p class="cart--empty-message">' +
          theme.strings.cartEmpty +
          '</p>\n' +
          '<p class="cookie-message">' +
          theme.strings.cartCookies +
          '</p>'
      );
      cartCallback(cart);
      return;
    }

    // Handlebars.js cart layout
    var items = [],
      item = {},
      data = {},
      source = $('#CartTemplate').html(),
      template = Handlebars.compile(source);

    // Add each item to our handlebars.js data
    $.each(cart.items, function(index, cartItem) {
      /* Hack to get product image thumbnail
       *   - If image is not null
       *     - Remove file extension, add _small, and re-add extension
       *     - Create server relative link
       *   - A hard-coded url of no-image
       */
      var prodImg;
      var unitPrice = null;
      if (cartItem.image !== null) {
        prodImg = cartItem.image
          .replace(/(\.[^.]*)$/, '_small$1')
          .replace('http:', '');
      } else {
        prodImg =
          '//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif';
      }

      if (cartItem.properties !== null) {
        $.each(cartItem.properties, function(key, value) {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.properties !== null) {
        $.each(cartItem.properties, function(key, value) {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.line_level_discount_allocations.length !== 0) {
        for (var discount in cartItem.line_level_discount_allocations) {
          var amount =
            cartItem.line_level_discount_allocations[discount].amount;

          cartItem.line_level_discount_allocations[
            discount
          ].formattedAmount = theme.Currency.formatMoney(
            amount,
            settings.moneyFormat
          );
        }
      }

      if (cart.cart_level_discount_applications.length !== 0) {
        for (var cartDiscount in cart.cart_level_discount_applications) {
          var cartAmount =
            cart.cart_level_discount_applications[cartDiscount]
              .total_allocated_amount;

          cart.cart_level_discount_applications[
            cartDiscount
          ].formattedAmount = theme.Currency.formatMoney(
            cartAmount,
            settings.moneyFormat
          );
        }
      }

      if (cartItem.unit_price_measurement) {
        unitPrice = {
          addRefererenceValue:
            cartItem.unit_price_measurement.reference_value !== 1,
          price: theme.Currency.formatMoney(
            cartItem.unit_price,
            settings.moneyFormat
          ),
          reference_value: cartItem.unit_price_measurement.reference_value,
          reference_unit: cartItem.unit_price_measurement.reference_unit
        };
      }

      // Create item's data object and add to 'items' array
      item = {
        key: cartItem.key,
        line: index + 1, // Shopify uses a 1+ index in the API
        url: cartItem.url,
        img: prodImg,
        name: cartItem.product_title,
        variation: cartItem.variant_title,
        properties: cartItem.properties,
        itemAdd: cartItem.quantity + 1,
        itemMinus: cartItem.quantity - 1,
        itemQty: cartItem.quantity,
        price: theme.Currency.formatMoney(
          cartItem.original_line_price,
          settings.moneyFormat
        ),
        discountedPrice: theme.Currency.formatMoney(
          cartItem.final_line_price,
          settings.moneyFormat
        ),
        discounts: cartItem.line_level_discount_allocations,
        discountsApplied:
          cartItem.line_level_discount_allocations.length === 0 ? false : true,
        vendor: cartItem.vendor,
        unitPrice: unitPrice
      };

      items.push(item);
    });

    // Gather all cart data and add to DOM
    data = {
      items: items,
      note: cart.note,
      totalPrice: theme.Currency.formatMoney(
        cart.total_price,
        settings.moneyFormat
      ),
      cartDiscounts: cart.cart_level_discount_applications,
      cartDiscountsApplied:
        cart.cart_level_discount_applications.length === 0 ? false : true
    };

    $cartContainer.append(template(data));

    cartCallback(cart);
  };

  cartCallback = function(cart) {
    $body.removeClass('drawer--is-loading');
    $body.trigger('ajaxCart.afterCartLoad', cart);

    if (window.Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }
  };

  adjustCart = function() {
    // Delegate all events because elements reload with the cart

    // Add or remove from the quantity
    $body.on('click', '.ajaxcart__qty-adjust', function() {
      if (isUpdating) {
        return;
      }
      var $el = $(this),
        line = $el.data('line'),
        $qtySelector = $el.siblings('.ajaxcart__qty-num'),
        qty = parseInt($qtySelector.val().replace(/\D/g, ''));

      qty = validateQty(qty);

      // Add or subtract from the current quantity
      if ($el.hasClass('ajaxcart__qty--plus')) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 0) qty = 0;
      }

      // If it has a data-line, update the cart.
      // Otherwise, just update the input's number
      if (line) {
        updateQuantity(line, qty);
      } else {
        $qtySelector.val(qty);
      }
    });

    // Update quantity based on input on change
    $body.on('change', '.ajaxcart__qty-num', function() {
      if (isUpdating) {
        return;
      }
      var $el = $(this),
        line = $el.data('line'),
        qty = parseInt($el.val().replace(/\D/g, ''));

      qty = validateQty(qty);

      // If it has a data-line, update the cart
      if (line) {
        updateQuantity(line, qty);
      }
    });

    // Prevent cart from being submitted while quantities are changing
    $body.on('submit', 'form.ajaxcart', function(evt) {
      if (isUpdating) {
        evt.preventDefault();
      }
    });

    // Highlight the text when focused
    $body.on('focus', '.ajaxcart__qty-adjust', function() {
      var $el = $(this);
      setTimeout(function() {
        $el.select();
      }, 50);
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      // Add activity classes when changing cart quantities
      var $row = $('.ajaxcart__row[data-line="' + line + '"]').addClass(
        'is-loading'
      );

      if (qty === 0) {
        $row.parent().addClass('is-removed');
      }

      // Slight delay to make sure removed animation is done
      setTimeout(function() {
        ShopifyAPI.changeItem(line, qty, adjustCartCallback);
      }, 250);
    }

    // Save note anytime it's changed
    $body.on('change', 'textarea[name="note"]', function() {
      var newNote = $(this).val();

      // Update the cart note in case they don't click update/checkout
      ShopifyAPI.updateCartNote(newNote, function() {});
    });
  };

  adjustCartCallback = function(cart) {
    // Update quantity and price
    updateCountPrice(cart);

    // Reprint cart on short timeout so you don't see the content being removed
    setTimeout(function() {
      ShopifyAPI.getCart(buildCart);
      isUpdating = false;
    }, 150);
  };

  qtySelectors = function() {
    // Change number inputs to JS ones, similar to ajax cart but without API integration.
    // Make sure to add the existing name and id to the new input element
    var $numInputs = $('input[type="number"]');

    if ($numInputs.length) {
      $numInputs.each(function() {
        var $el = $(this),
          currentQty = $el.val(),
          inputName = $el.attr('name'),
          inputId = $el.attr('id');

        var itemAdd = currentQty + 1,
          itemMinus = currentQty - 1,
          itemQty = currentQty;

        var source = $('#JsQty').html(),
          template = Handlebars.compile(source),
          data = {
            key: $el.data('id'),
            itemQty: itemQty,
            itemAdd: itemAdd,
            itemMinus: itemMinus,
            inputName: inputName,
            inputId: inputId
          };

        // Append new quantity selector then remove original
        $el.after(template(data)).remove();
      });

      // Setup listeners to add/subtract from the input
      $('.js-qty__adjust').on('click', function() {
        var $el = $(this),
          $qtySelector = $el.siblings('.js-qty__num'),
          qty = parseInt($qtySelector.val().replace(/\D/g, ''));

        qty = validateQty(qty);

        // Add or subtract from the current quantity
        if ($el.hasClass('js-qty__adjust--plus')) {
          qty += 1;
        } else {
          qty -= 1;
          if (qty <= 1) qty = 1;
        }

        // Update the input's number
        $qtySelector.val(qty);
      });
    }
  };

  validateQty = function(qty) {
    if (parseFloat(qty) === parseInt(qty) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      // Not a number. Default to 1.
      qty = 1;
    }
    return qty;
  };

  module = {
    init: init,
    load: loadCart
  };

  return module;
})(ajaxCart || {}, jQuery);


/*============================================================================
  Money Format
  - Shopify.format money is defined in option_selection.js.
    If that file is not included, it is redefined here.
==============================================================================*/
window.timber = window.timber || {};
window.theme = window.theme || {};

timber.initCache = function() {
  timber.cache = {
    // General
    $html: $('html'),
    $body: $('body'),
    $window: $(window),

    // Navigation
    $navigation: $('#AccessibleNav'),

    // Product Page
    $optionSelector: $('.single-option-selector'),

    // Customer Pages
    $recoverPasswordLink: $('#RecoverPassword'),
    $hideRecoverPasswordLink: $('#HideRecoverPasswordLink'),
    $recoverPasswordForm: $('#RecoverPasswordForm'),
    $customerLoginForm: $('#CustomerLoginForm'),
    $passwordResetSuccess: $('#ResetSuccess')
  };
};

timber.init = function() {
  timber.initCache();
  timber.accessibleNav();
  timber.drawersInit();
  timber.responsiveVideos();
  timber.loginForms();
};

timber.accessibleNav = function() {
  var classes = {
    active: 'nav-hover',
    focus: 'nav-focus',
    outside: 'nav-outside',
    hasDropdown: 'site-nav--has-dropdown',
    link: 'site-nav__link'
  };
  var selectors = {
    active: '.' + classes.active,
    hasDropdown: '.' + classes.hasDropdown,
    dropdown: '[data-meganav-dropdown]',
    link: 'a',
    nextLink: '> a',
    parentLink: '[data-meganav-type="parent"]',
    childLink: '[data-meganav-type="child"]'
  };

  var $nav = timber.cache.$navigation,
    $allLinks = $nav.find(selectors.link),
    $parents = $nav.find(selectors.hasDropdown),
    $childLinks = $nav.find(selectors.childLink),
    $topLevel = $parents.find(selectors.nextLink),
    $dropdowns = $nav.find(selectors.dropdown),
    $subMenuLinks = $dropdowns.find(selectors.link);

  // Mouseenter
  $parents.on('mouseenter touchstart', function(evt) {
    var $el = $(this);
    var evtType = evt.type;
    var $dropdowns = $nav.find(selectors.active);

    if (!$el.hasClass(classes.active)) {
      // force stop the click from happening
      evt.preventDefault();
      evt.stopImmediatePropagation();
    }

    // Make sure we close any opened same level dropdown before opening a new one
    if (evtType === 'touchstart' && $dropdowns.length > 0) {
      hideDropdown($el);
    }

    showDropdown($el);
  });

  $childLinks.on('touchstart', function(evt) {
    evt.stopImmediatePropagation();
  });

  $parents.on('mouseleave', function() {
    hideDropdown($(this));
  });

  $allLinks.on('focus', function() {
    handleFocus($(this));
  });

  $allLinks.on('blur', function() {
    removeFocus($topLevel);
  });

  // accessibleNav private methods
  function handleFocus($el) {
    var $newFocus = null,
      $previousItem = $el.parent().prev();

    // Always put tabindex -1 on previous element just in case the user is going backward.
    // In that case, we want to focus on the previous parent and not the previous parent childs

    $allLinks.attr('tabindex', '');

    if ($previousItem.hasClass(classes.hasDropdown)) {
      $previousItem.find(selectors.dropdown + ' a').attr('tabindex', -1);
    }

    $newFocus = $el.parents(selectors.hasDropdown).find('> a');
    addFocus($newFocus);
  }

  function showDropdown($el) {
    var $toplevel = $el.find(selectors.nextLink);

    $toplevel.attr('aria-expanded', true);

    $el.addClass(classes.active);

    setTimeout(function() {
      timber.cache.$body.on('touchstart.MegaNav', function() {
        hideDropdowns();
      });
    }, 250);
  }

  function hideDropdown($el) {
    var $dropdowns = $el.parent().find(selectors.active);
    var $parentLink = $dropdowns.find(selectors.nextLink);

    $parentLink.attr('aria-expanded', false);

    $dropdowns.removeClass(classes.active);

    timber.cache.$body.off('touchstart.MegaNav');
  }

  function hideDropdowns() {
    var $dropdowns = $nav.find(selectors.active);
    $.each($dropdowns, function() {
      hideDropdown($(this));
    });
  }

  function addFocus($el) {
    $el.addClass(classes.focus);

    if ($el.attr('aria-expanded') !== undefined) {
      $el.attr('aria-expanded', true);
    }
  }

  function removeFocus($el) {
    $el.removeClass(classes.focus);

    $subMenuLinks.attr('tabindex', -1);

    if ($el.attr('aria-expanded') !== undefined) {
      $el.attr('aria-expanded', false);
    }
  }

  // Check if dropdown is outside of viewport
  function handleDropdownOffset($dropdowns) {
    var viewportSize = $(window).width();
    $dropdowns.removeClass(classes.outside);

    $.each($dropdowns, function() {
      var $dropdown = $(this);
      var dropdownOffset = $dropdown.offset().left + $dropdown.width();
      if (dropdownOffset > viewportSize) {
        $dropdown.addClass(classes.outside);
      }
    });
  }

  timber.cache.$window.load(function() {
    handleDropdownOffset($dropdowns);
  });

  timber.cache.$window.resize(function() {
    afterResize(function() {
      handleDropdownOffset($dropdowns);
    }, 250);
  });
};

timber.drawersInit = function() {
  timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left');
  if (theme.settings.cartType === 'drawer') {
    timber.RightDrawer = new timber.Drawers('CartDrawer', 'right', {
      onDrawerOpen: ajaxCart.load
    });
  }
};

timber.getHash = function() {
  return window.location.hash;
};

timber.responsiveVideos = function() {
  var $iframeVideo = $(
    'iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]'
  );
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function() {
    // Add wrapper to make video responsive
    if (!$(this).parents('.video-wrapper').length) {
      $(this).wrap('<div class="video-wrapper"></div>');
    }
  });

  $iframeReset.each(function() {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's 'incorrect iFrame content on 'back'' bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() === '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};

/*============================================================================
  Drawer modules
  - Docs http://shopify.github.io/Timber/#drawers
==============================================================================*/
timber.Drawers = (function() {
  var Drawer = function(id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-button-' + position,
      openButtonLeftClass: 'js-drawer-open-button-left',
      drawerLeftClass: 'drawer--left',
      drawerRightClass: 'drawer--right',
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-' + position
    };

    this.nodes = {
      $parent: $('body, html'),
      $page: $('#PageContainer'),
      $moved: $('.page-container')
    };

    this.config = $.extend(defaults, options);
    this.position = position;

    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function() {
    var $openBtn = $(this.config.open);

    // Add aria controls
    $openBtn.attr('aria-expanded', 'false');

    $openBtn.on('click', $.proxy(this.open, this));
    this.$drawer.find(this.config.close).on('click', $.proxy(this.close, this));
  };

  Drawer.prototype.open = function(evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Other drawers that might be open (will be closed later)
    var $otherDrawers = $('.drawer').not(this.$drawer);

    // don't open an opened drawer
    if (this.drawerIsOpen) {
      if (evt) {
        evt.preventDefault();
      }
      return;
    }

    // Close other drawers if they are open
    var self = this;
    $otherDrawers.each(function() {
      if (!$(this).hasClass(self.config.openClass)) {
        return;
      }

      if ($(this).hasClass(self.config.drawerLeftClass)) {
        timber.LeftDrawer.close();
      }

      if ($(this).hasClass(self.config.drawerRightClass)) {
        timber.RightDrawer.close();
      }
    });

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    this.nodes.$moved.addClass('is-transitioning');
    this.$drawer.prepareTransition();

    this.nodes.$parent.addClass(
      this.config.openClass + ' ' + this.config.dirOpenClass
    );
    this.$drawer.addClass(this.config.openClass);

    this.drawerIsOpen = true;

    // Set focus on drawer
    Drawer.prototype.trapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    });

    // Run function when drawer opens if set
    if (
      this.config.onDrawerOpen &&
      typeof this.config.onDrawerOpen === 'function'
    ) {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    this.bindEvents();
  };

  Drawer.prototype.close = function(evt) {
    // don't close a closed drawer
    if (!this.drawerIsOpen) {
      return;
    }

    if (evt.keyCode !== 27) {
      evt.preventDefault();
    }
    // deselect any focused form elements
    $(document.activeElement).trigger('blur');

    // Ensure closing transition is applied to moved elements, like the nav
    this.nodes.$moved.prepareTransition({ disableExisting: true });
    this.$drawer.prepareTransition({ disableExisting: true });

    this.nodes.$parent.removeClass(
      this.config.dirOpenClass + ' ' + this.config.openClass
    );
    this.$drawer.removeClass(this.config.openClass);

    this.drawerIsOpen = false;

    // Remove focus on drawer
    Drawer.prototype.removeTrapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    });

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'false');
    }

    this.unbindEvents();
  };

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  Drawer.prototype.trapFocus = function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
      options.$container.attr('tabindex', '-1');
    }

    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (
        options.$container[0] !== evt.target &&
        !options.$container.has(evt.target).length
      ) {
        options.$container.focus();
      }
    });
  };

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  Drawer.prototype.removeTrapFocus = function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  };

  Drawer.prototype.bindEvents = function() {
    // Lock scrolling on mobile
    this.nodes.$page.on('touchmove.drawer', function() {
      return false;
    });

    this.$drawer.on('click.drawer', function(event) {
      if ($(this).hasClass('drawer--left')) {
        event.stopPropagation();
      }
    });

    $('.page-container, .drawer__header-container').on(
      'click.drawer',
      this.close.bind(this)
    );

    // Pressing escape closes drawer
    this.nodes.$parent.on(
      'keyup.drawer',
      $.proxy(function(evt) {
        // The hamburger 'open' button changes to a 'close' button when the drawer
        // is open. Clicking on it will close the drawer.
        if (this.$activeSource !== undefined) {
          this.$activeSource.on(
            'click.drawer',
            $.proxy(function() {
              if (
                !this.$activeSource.hasClass(this.config.openButtonLeftClass)
              ) {
                return;
              }
              this.close();
            }, this)
          );
        }
        if (evt.keyCode === 27) {
          this.close(evt);
        }
      }, this)
    );
  };

  Drawer.prototype.unbindEvents = function() {
    if (this.$activeSource !== undefined) {
      this.$activeSource.off('.drawer');
    }
    this.nodes.$page.off('.drawer');
    this.nodes.$parent.off('.drawer');
  };

  return Drawer;
})();

// Initialize Timber's JS on docready
$(timber.init);

/*
 * Shopify JS for customizing Slick.js
 *   http://kenwheeler.github.io/slick/
 *   Untouched JS in assets/slick.min.js
 */

theme.Slideshow = (function() {
  'use strict';

  var selectors = {
    activeSlide: '.slick-active',
    heroAdaptTextWrap: '[data-hero-adapt-text-wrap]',
    heroDotsWrapper: '[data-hero-dots-wrapper]',
    heroImage: '[data-hero-image]',
    heroTextContent: '[data-hero-text-content]',
    pagination: '[data-slide-pagination]',
    pause: '[data-pause]',
    slickList: '.slick-list',
    slidePrevious: '[data-slide-previous]',
    slideNext: '[data-slide-next]',
    slides: '.slick-slide'
  };

  var classes = {
    heroSlideHidden: 'hero__slide--hidden',
    isPaused: 'is-paused'
  };

  function Slideshow($slider) {
    var $sliderWrapper = $slider.closest('[data-section-id]');
    var loadSlideA11yString = (this.loadSlideA11yString = $slider.data(
      'slide-nav-a11y'
    ));
    var activeSlideA11yString = (this.activeSlideA11yString = $slider.data(
      'slide-nav-active-a11y'
    ));

    this.$slider = $slider;

    // Default settings
    this.settings = {
      $element: $slider,
      accessibility: true,
      adaptHeight: $slider.data('adapt'),
      arrows: true,
      dots: true,
      slide: '[data-hero-slide]',
      /* eslint-disable shopify/jquery-dollar-sign-reference */
      prevArrow: $slider.find(selectors.slidePrevious),
      nextArrow: $slider.find(selectors.slideNext),
      appendDots: $slider.find(selectors.heroDotsWrapper),
      /* eslint-enable shopify/jquery-dollar-sign-reference */
      adaptiveHeight: true,
      draggable: false,
      fade: true,
      onInit: this.onInit.bind(this),
      onBeforeChange: this.beforeChange.bind(this),
      onAfterChange: this.afterChange.bind(this),
      focusOnChange: true,
      isTouch: Modernizr.touch ? true : false,
      //autoplay: true,
      autoplay: $slider.data('autoplay'),
      autoplaySpeed: $slider.data('autoplayspeed'),
      customPaging: function(slick, index) {
        var labelString =
          index === 0 ? activeSlideA11yString : loadSlideA11yString;
        return (
          '<a href="' +
          $slider.attr('id') +
          '" aria-label="' +
          labelString.replace('[slide_number]', index + 1) +
          '" data-slide-number="' +
          index +
          '" data-slide-pagination aria-controls="SlickSlide' +
          (index + 1) +
          '"></a>'
        );
      }
    };

    this.cache = {
      $window: $(window),
      $heroImage: $slider.find(selectors.heroImage),
      $heroText: $slider.find(selectors.heroTextContent),
      $pauseButton: $slider.find(selectors.pause),
      $textWrapperMobile: $sliderWrapper.find(selectors.heroAdaptTextWrap)
    };

    this.currentActiveSlide = 0;

    /*
     * Init slick slider
     *   - Add any additional option changes here
     *   - https://github.com/kenwheeler/slick/#options
     */
    this.$slider.slick(this.settings);
  }

  Slideshow.prototype = _.assignIn({}, Slideshow.prototype, {
    onInit: function(obj) {
      this.$allSlides = obj.$slides;
      this.$activeSlide = obj.$slider.find(
        selectors.slides + selectors.activeSlide
      );
      this.$pagination = obj.$slider.find(selectors.pagination);

      if (!this.settings.isTouch) {
        obj.$slides.addClass(classes.heroSlideHidden);
        this.$activeSlide.removeClass(classes.heroSlideHidden);
      }

      if (this.settings.autoplay) {
        this.cache.$pauseButton.on('click', this.togglePause.bind(this));

        $(document).scroll(
          theme.debounce(
            function() {
              var slideshowOffsetY =
                obj.$slider.offset().top + obj.$slider.outerHeight();

              if (slideshowOffsetY < window.pageYOffset) {
                this.togglePauseAttributes(this.cache.$pauseButton, false);
                obj.$slider.slickPause();
              } else if (!this.cache.$pauseButton.hasClass(classes.isPaused)) {
                this.togglePauseAttributes(this.cache.$pauseButton, true);
                obj.$slider.slickPlay();
              }
            }.bind(this),
            250
          )
        );
      }

      // Prevent default slick behaviour of autoplaying on mouseleave
      obj.$slider.find(selectors.slickList).off('mouseleave.slick');

      if (this.settings.adaptHeight) {
        this.showMobileText(0);
      }

      this.slideshowA11ySetup(obj.$slider);
      this.applySlideColor(0, 1);
    },

    beforeChange: function(obj, currentSlide, nextSlide) {
      obj.$slider.attr('data-slide-index', nextSlide);

      if (!this.settings.isTouch) {
        obj.$slides.removeClass(classes.heroSlideHidden);
      }

      if (this.settings.adaptHeight) {
        this.showMobileText(nextSlide);
      }

      this.applySlideColor(nextSlide, currentSlide);

      this.$pagination.each(
        function(index, element) {
          var labelString =
            index === nextSlide
              ? this.activeSlideA11yString
              : this.loadSlideA11yString;

          labelString = labelString.replace('[slide_number]', index + 1);

          $(element).attr('aria-label', labelString);
        }.bind(this)
      );

      // Set upcoming slide as index
      this.currentActiveSlide = nextSlide;
    },

    afterChange: function(obj) {
      if (this.settings.isTouch) {
        return;
      }

      this.$activeSlide = this.$slider.find(
        selectors.slides + selectors.activeSlide
      );

      obj.$slides.addClass(classes.heroSlideHidden).attr('aria-hidden', true);

      this.$activeSlide
        .removeClass(classes.heroSlideHidden)
        .attr('aria-hidden', false);
    },

    keyboardNavigation: function(evt) {
      if (evt.keyCode === 37) {
        this.$slider.slickPrev();
      }
      if (evt.keyCode === 39) {
        this.$slider.slickNext();
      }
    },

    togglePause: function(evt) {
      var $pauseButton = $(evt.currentTarget);
      var isPaused = $pauseButton.hasClass(classes.isPaused);

      this.togglePauseAttributes($pauseButton, isPaused);

      if (this.settings.autoplay) {
        if (isPaused) {
          this.$slider.slickPlay();
        } else {
          this.$slider.slickPause();
        }
      }
    },

    togglePauseAttributes: function($pauseButton, isPaused) {
      if (this.settings.autoplay) {
        $pauseButton
          .toggleClass(classes.isPaused, !isPaused)
          .attr(
            'aria-label',
            isPaused
              ? $pauseButton.data('label-pause')
              : $pauseButton.data('label-play')
          );
      }
    },

    showMobileText: function(slideIndex) {
      var $allTextContent = this.cache.$textWrapperMobile.find(
        selectors.heroTextContent
      );
      var $currentTextContent = this.cache.$textWrapperMobile.find(
        '[data-index="' + slideIndex + '"]'
      );

      if (!$currentTextContent.length && this.$allSlides.length === 1) {
        this.cache.$textWrapperMobile.hide();
      } else {
        this.cache.$textWrapperMobile.show();
      }

      $allTextContent.hide();
      $currentTextContent.show();
    },

    // Apply when slideshow is in first position
    applySlideColor: function(nextSlideIndex, previousSlideIndex) {
      var prefixClassName = 'hero--color-';

      this.$slider
        .removeClass(prefixClassName + previousSlideIndex)
        .addClass(prefixClassName + nextSlideIndex);
    },

    slideshowA11ySetup: function($slider) {
      var $list = $slider.find(selectors.slickList);

      // When an element in the slider is focused
      // pause slideshow and set aria-live.
      $slider
        .on(
          'focusin mouseenter',

          function(evt) {
            if (
              !$slider.has(evt.target).length ||
              $list.attr('aria-live') === 'polite'
            ) {
              return;
            }

            $list.attr('aria-live', 'polite');
            if (this.settings.autoplay) {
              $slider.slickPause();
            }
          }.bind(this)
        )
        .on(
          'focusout mouseleave',

          function(evt) {
            if ($slider.has(evt.relatedTarget).length) {
              return;
            }

            $list.removeAttr('aria-live');
            if (this.settings.autoplay) {
              // Only resume playing if the user hasn't paused using the pause
              // button
              if (!this.cache.$pauseButton.hasClass(classes.isPaused)) {
                $slider.slickPlay();
              }
            }
          }.bind(this)
        )
        .on('keyup', this.keyboardNavigation.bind(this));

      $list.removeAttr('tabindex');

      this.$allSlides.each(function(index) {
        $(this)
          .attr('id', 'SlickSlide' + (index + 1))
          .attr('aria-hidden', true);
      });

      this.$activeSlide.attr('aria-hidden', false);

      if (this.$allSlides.length > 1) {
        this.$pagination.each(function() {
          $(this).on('click keyup', function(evt) {
            if (evt.type === 'keyup' && evt.which !== 13) return;

            evt.preventDefault();

            if (evt.type === 'keyup') {
              $slider.focus();
            }
          });
        });
      }
    }
  });

  return Slideshow;
})();


/* ================ Sections ================ */
window.theme = window.theme || {};

theme.Product = (function() {
  function Product(container) {
    var $window = $(window);

    this.settings = {
      productPageLoad: false,
      preloadImage: false,
      enableHistoryState: true,
      namespace: '.productSection'
    };

    this.selectors = {
      productImageWrapper: '.product-single__photo-wrapper',
      productImages: '.product-single__photos',
      productImagePhoto: '.product-single__photo',
      productImagePhotoFlexWrapper: '.product-single__photo--flex-wrapper',
      productThumbnail: '.product-single__thumbnail',
      productImagePhotoContainer: '.product-single__photo--container',
      productFullDetails: '.product-single__full-details',
      productForm: '.add-to-cart__form',
      addToCart: '.btn--add-to-cart',
      addToCartText: '.btn__text',
      priceContainer: '[data-price-container]',
      productPrice: '#ProductPrice',
      SKU: '.variant-sku',
      priceA11y: '#PriceA11y',
      comparePrice: '#ComparePrice',
      comparePriceA11y: '#ComparePriceA11y',
      comparePriceWrapper: '.product-single__price--wrapper',
      quantityElements: '.js-quantity-selector, label + .js-qty',
      originalSelectorId: '#ProductSelect',
      singleOptionSelector: '.single-option-selector__radio',
      radioWrapper: '.radio-wrapper',
      meta: '.product-single__meta',
      productWrapper: '.product-single',
      shopifyPaymentButton: '.shopify-payment-button',
      unitPrice: '[data-unit-price]',
      unitPriceBaseUnit: '[data-unit-price-base-unit]'
    };

    this.classes = {
      priceContainerUnitAvailable: 'price-container--unit-available'
    };

    var $container = (this.$container = $(container));
    var sectionId = $container.attr('data-section-id');

    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(
      document.getElementById('ProductJson-' + sectionId).innerHTML
    );
    this.zoomType = $container.data('image-zoom-type');

    this.initBreakpoints();
    this.stringOverrides();
    this.initProductVariant();
    //this.initStickyProductMeta();
    this.productThumbnailSwitch();
    this.clickDefaultVariant();

    if (this.zoomType) {
      this.productImageZoom();
    }

    if (theme.settings.cartType === 'drawer') {
      ajaxCart.init({
        formSelector: '#AddToCartForm--' + sectionId,
        cartContainer: '#CartContainer',
        addToCartSelector: '#AddToCart--' + sectionId,
        enableQtySelectors: true,
        moneyFormat: theme.strings.moneyFormat
      });
    }

    //!!!
    $('.rc_radio').change(function(){
      var options = $('.option-name-subscription').find('.single-option-radio').addClass('test');
      var cartButton = $('.btn--add-to-cart').find('.btn__text');
      if ($(this).hasClass('rc_radio__onetime')){
        options.find('label[data-option="one-time purchase"]').click();
        cartButton.text('Add to Cart');
      }else{
        options.find('label[data-option="subscription"]').click();
        cartButton.text('Subscribe Now');
      }
    });

    $('.product-single__description-arrow').click(function(){
      $('.product-single__description').toggleClass('description-small');
    });

  //   $window
  //     .on('load' + this.settings.namespace, theme.initStickyProductMeta)
  //     .on(
  //       'resize' + this.settings.namespace,
  //       theme.debounce(this.initStickyProductMeta, 150).bind(this)
  //     );
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    initProductVariant: function() {
      var options = {
        $container: this.$container,
        enableHistoryState:
          this.$container.data('enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);
      this.$container.on(
        'variantChange' + this.settings.namespace,
        this.productPage.bind(this)
      );
      this.$container.on(
        'variantImageChange' + this.settings.namespace,
        this.showVariantImage.bind(this)
      );
    },

    initBreakpoints: function() {
      var self = this;
      var $container = self.$container;
      self.zoomType = $container.data('image-zoom-type');

      enquire.register(theme.variables.mediaQuerySmall, {
        match: function() {
          self.createImageCarousel();
          if (self.zoomType) {
            if ($(self.selectors.productImagePhoto).length) {
              // remove event handlers for product zoom on mobile
              $(self.selectors.productImagePhoto).off();
            }
          }
        },
        unmatch: function() {
          self.destroyImageCarousel();
          self.reorderImages();
          if (self.zoomType) {
            // reinit product zoom
            self.productImageZoom();
          }
        }
      });
    },

    //!!!
    clickDefaultVariant: function() {
      
      /*if ($('.single-option-radio').find('input[data-default="true"]').is(":checked")) {
         $('.single-option-radio').find('input[data-default="true"]').prop('checked', false);
      }*/
     // $('.single-option-radio').find('label[data-default="true"]').click();
     $('.option-name-subscription').find('.single-option-radio').find('label[data-option="subscription"]').click();
      $('data option[value="Single"]').attr("selected",true);
    },

    stringOverrides: function() {
      // Override defaults in theme.strings with potential
      // template overrides

      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },

    resizeElements: function() {
      $(this.selectors.productGridImages, this.$container).imagesLoaded(
        function() {
          $(this.selectors.productGridImages, this.$container)
            .css('height', 'auto')
            .equalHeights();
        }
      );
    },

    showVariantImage: function(evt) {
      var variant = evt.variant;
      var $newImage = $(
        '.product-single__photo[data-image-id="' +
          variant.featured_image.id +
          '"]'
      );
      var imageIndex;
   
      if (theme.variables.bpSmall) {
        $('.product-single__photos').addClass('is-translating').slick('slickUnfilter');
        $('.mobile-attached.show-thumb-mobile').removeClass('show-thumb-mobile').removeClass('testslide').addClass('hide-thumb-mobile');
        $('.product-image__slick-dots').addClass('is-translating');
        setTimeout(function() {
          var slide = $('.slick-slide[data-slideimage-id="'+variant.featured_image.id+'"]');
          slide.removeClass('hide-thumb-mobile').addClass('show-thumb-mobile').addClass('testslide');
        }, 10);
  
        setTimeout(function() {
          $('.product-image__slick-dots').removeClass('is-translating');
          $('.product-single__photos').slick('slickFilter', '.show-thumb-mobile').slick('refresh').removeClass('is-translating');
        }, 20);
      }

      if (variant && variant.featured_image) {
        this.setActiveThumbnail(variant.featured_image.id);
        this.setActiveVariantThumbnail(variant.featured_image.id);
      }

      if (theme.variables.bpSmall) {
        // Switch carousel slide, unless it's the first photo on load
        imageIndex = $newImage.closest('.slick-slide').attr('data-slick-index');
        // Navigate to slide unless it's the first photo on load
        // If there is no index, slider is not initalized.
        if (_.isUndefined(imageIndex)) {
          return;
        }

        if (imageIndex !== 0 || theme.variables.productPageLoad) {
          //$(this.selectors.productImages, this.$container).slick('slickGoTo',
          //  imageIndex, true
          //);
        }
        // Switch image variant on thumbnail layout for desktop view;
        // When a image variant is updated on mobile view, update the
        // desktop view also.
        if (!this.$container.data('scroll-to-image')) {
          this.switchImage(variant.featured_image.id);
        }
      } else {
        if (this.$container.data('scroll-to-image')) {
          imageIndex = $newImage.closest('.slick-slide').index();
          // Scroll to/reorder image unless it's the first photo on load
          if (imageIndex !== 0 || theme.variables.productPageLoad) {
            if (theme.variables.productPageSticky) {
              // Scroll to variant image
              $('html, body').animate(
                {
                  scrollTop: $newImage.offset().top
                },
                250
              );
            } else {
              // Move selected variant image to top, preventing scrolling
              var currentScroll = $(document).scrollTop();
              $newImage
                .closest(
                  $(
                    this.selectors.productImagePhotoFlexWrapper,
                    this.$container
                  )
                )
                .prependTo($(this.selectors.productImages, this.$container));
              $(document).scrollTop(currentScroll);
            }
          }
        } else {
          // Thumbnail layout
          // Move selected variant image to top
          $newImage
            .closest(
              $(this.selectors.productImagePhotoFlexWrapper, this.$container)
            )
            .prependTo($(this.selectors.productImages, this.$container));
          // Switch image variant for thumnail layout
          this.switchImage(variant.featured_image.id);
        }
      }

      if (!theme.variables.productPageLoad) {
        theme.variables.productPageLoad = true;
      }
    },

    switchImage: function(imageId) {
      $(this.selectors.productImagePhotoContainer, this.$container).addClass(
        'hide'
      );
      $(this.selectors.productImagePhotoContainer, this.$container)
        .filter('#ProductImageWrapper-' + imageId)
        .removeClass('hide');
    },

    reorderImages: function() {
      if (this.$container.data('scroll-to-image')) return;
      var $newImage = $(
        this.selectors.productImagePhotoContainer,
        this.$container
      ).not('.hide');
      $newImage
        .closest(
          $(this.selectors.productImagePhotoFlexWrapper, this.$container)
        )
        .prependTo($(this.selectors.productImages, this.$container));
    },

    productThumbnailSwitch: function() {
      var self = this;
      var $productThumbnails = $('#ProductThumbs', this.$container).find(
        this.selectors.productThumbnail
      );

      if ($productThumbnails.length) {
        // Switch the main image with one of the thumbnails
        // Note: this does not change the variant selected, just the image
        $productThumbnails.on('click', function(evt) {
          evt.preventDefault();
          var newImageId = $(this).attr('data-image-id');
          var $newImage = $(
            '.product-single__photo[data-image-id="' + newImageId + '"]'
          );

          self.switchImage(newImageId);
          self.setActiveThumbnail(newImageId);

          // Thumbnail layout
          // Move selected featured image to top
          $newImage
            .closest(
              $(self.selectors.productImagePhotoFlexWrapper, self.$container)
            )
            .prependTo($(self.selectors.productImages, self.$container));
        });
      }
    },

    setActiveThumbnail: function(imageId) {
      var $productThumbnails = $('#ProductThumbs', this.$container).find(
        this.selectors.productThumbnail
      );
      
      if ($productThumbnails.length) {
        var activeClass = 'active-thumb';
        var $thumbnail = $(
          this.selectors.productThumbnail + "[data-image-id='" + imageId + "']",
          this.$container
        );

        $productThumbnails.removeClass(activeClass);
        $thumbnail.addClass(activeClass);
      }
    },

    setActiveVariantThumbnail: function(imageId) {
      var $productThumbnails = $('#ProductThumbs', this.$container).find(
        this.selectors.productThumbnail
      );
      var $productImageWrappers = $('#ProductThumbs', this.$container).find(
        this.selectors.productImageWrapper
      );

      if ($productThumbnails.length) {
        var activeWrapperClass = 'active-thumb-wrapper';
        var $thumbnail = $(
          this.selectors.productThumbnail + "[data-image-id='" + imageId + "']",
          this.$container
        );
        var $imageWrapper = $thumbnail.parent();

        $productImageWrappers.removeClass(activeWrapperClass);
        $imageWrapper.addClass(activeWrapperClass);
      }
    },

    productImageZoom: function() {
      if (
        !$(this.selectors.productImagePhoto, this.$container).length ||
        theme.variables.bpSmall
      ) {
        return;
      }

      $(this.selectors.productImagePhoto, this.$container).magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        closeBtnInside: false,
        closeOnContentClick: true,
        tClose: theme.strings.zoomClose,
        removalDelay: 500,
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
          tPrev: theme.strings.zoomPrev,
          tNext: theme.strings.zoomNext
        }
      });
    },

    createImageCarousel: function() {
      var self = this;

      if (
        !$(this.selectors.productImages, this.$container).length ||
        $(this.selectors.productImagePhoto, this.$container).length < 2
      ) {
        return;
      }

      $(this.selectors.productImages, this.$container).slick({
        arrows: false,
        dots: true,
        autoplay: false,
        adaptiveHeight: true,
        appendDots:$('.product-image__slick-dots'),
        onAfterChange: function() {
          // Let's do this after changing slides
          // Update featured image and active thumbnail on desktop
          // when changing slides
          self.setFeaturedImage();
        }
      });
    },

    setFeaturedImage: function() {
      // Thumbnail layout only
      if (this.$container.data('scroll-to-image')) return;
      var imageId = $(this.selectors.productImages, this.$container)
        .find('.slick-slide.slick-active .product-single__photo')
        .attr('data-image-id');

      this.switchImage(imageId);
      this.setActiveThumbnail(imageId);
    },

    destroyImageCarousel: function() {
      if (!$(this.selectors.productImages, this.$container).length) {
        return;
      }
      $(this.selectors.productImages, this.$container).slick("unslick");
    },

    productPage: function(evt) {
      var moneyFormat = theme.strings.moneyFormat;
      var variant = evt.variant;
      var translations = theme.strings;

      if (variant) {
        // Display variant image on featured product
        if (!$('body').hasClass('template-product')) {
          if (variant.featured_image) {
            var $newImage = $(
              this.selectors.productImageWrapper +
                '[data-image-id="' +
                variant.featured_image.id +
                '"]',
              this.$container
            );
            var $otherImages = $(
              this.selectors.productImageWrapper +
                ':not([data-image-id="' +
                variant.featured_image.id +
                '"])',
              this.$container
            );

            $newImage.removeClass('hide');
            $otherImages.addClass('hide');
          }
        }

        $(this.selectors.priceContainer, this.$container).removeClass(
          'visibility-hidden ' + this.classes.priceContainerUnitAvailable
        );
        $(this.selectors.productPrice, this.$container).attr(
          'aria-hidden',
          'false'
        );
        $(this.selectors.priceA11y, this.$container).attr(
          'aria-hidden',
          'false'
        );

        // Select a valid variant if available
        if (variant.available) {
          // Available, enable the submit button, change text, show quantity elements
          $(this.selectors.addToCart, this.$container)
            .removeClass('disabled')
            .prop('disabled', false);
          $(this.selectors.addToCartText, this.$container).html(function(){           
              var text = translations.addToCart;
              if ($('.rc_block__type__autodeliver').hasClass('rc_block__type--active')){
                text = 'Subscribe Now';
              }
              return text
          }

          );
          $(this.selectors.quantityElements, this.$container).show();
          $(this.selectors.shopifyPaymentButton, this.$container).show();

          // Update the full details link
          var $link = $(this.selectors.productFullDetails, this.$container);
          if ($link.length) {
            $link.attr(
              'href',
              this.updateUrlParameter($link.attr('href'), 'variant', variant.id)
            );
          }
        } else {
          // Sold out, disable the submit button, change text, hide quantity elements
          $(this.selectors.addToCart, this.$container)
            .addClass('disabled')
            .prop('disabled', true);
          $(this.selectors.addToCartText, this.$container).html(
            translations.soldOut
          );
          $(this.selectors.quantityElements, this.$container).hide();
          $(this.selectors.shopifyPaymentButton, this.$container).hide();
        }

        $(this.selectors.productPrice, this.$container)
          .html(theme.Currency.formatMoney(variant.price, moneyFormat))
          .show();

        // Also update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice, this.$container).html(
            theme.Currency.formatMoney(variant.compare_at_price, moneyFormat)
          );
          $(this.selectors.comparePriceWrapper, this.$container).removeClass(
            'hide'
          );
          $(this.selectors.productPrice, this.$container).addClass('on-sale');
          $(this.selectors.comparePriceWrapper, this.$container).attr(
            'aria-hidden',
            'false'
          );
          $(this.selectors.comparePriceA11y, this.$container).attr(
            'aria-hidden',
            'false'
          );
        } else {
          $(this.selectors.comparePriceWrapper, this.$container)
            .addClass('hide')
            .attr('aria-hidden', 'true');
          $(this.selectors.productPrice, this.$container).removeClass(
            'on-sale'
          );
          $(this.selectors.comparePrice, this.$container).html('');
          $(this.selectors.comparePriceA11y, this.$container).attr(
            'aria-hidden',
            'true'
          );
        }

        if (variant.unit_price) {
          var $unitPrice = $(this.selectors.unitPrice, this.$container);
          var $unitPriceBaseUnit = $(
            this.selectors.unitPriceBaseUnit,
            this.$container
          );

          $unitPrice.html(
            theme.Currency.formatMoney(variant.unit_price, moneyFormat)
          );
          $unitPriceBaseUnit.html(this.getBaseUnit(variant));

          $(this.selectors.priceContainer, this.$container).addClass(
            this.classes.priceContainerUnitAvailable
          );
        }

        // Also Show SKU
        $(this.selectors.SKU).html(variant.sku);
      } else {
        // The variant doesn't exist, disable submit button.
        // This may be an error or notice that a specific variant is not available.
        // To only show available variants, implement linked product options:
        //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
        $(this.selectors.addToCart, this.$container)
          .addClass('disabled')
          .prop('disabled', true);
        $(this.selectors.addToCartText, this.$container).html(
          translations.unavailable
        );
        $(this.selectors.quantityElements, this.$container).hide();
        $(this.selectors.shopifyPaymentButton, this.$container).hide();

        $(this.selectors.priceContainer, this.$container).addClass(
          'visibility-hidden'
        );
        $(this.selectors.productPrice, this.$container).attr(
          'aria-hidden',
          'true'
        );
        $(this.selectors.priceA11y, this.$container).attr(
          'aria-hidden',
          'true'
        );
        $(this.selectors.comparePriceWrapper, this.$container).attr(
          'aria-hidden',
          'true'
        );
        $(this.selectors.comparePriceA11y, this.$container).attr(
          'aria-hidden',
          'true'
        );
      }
    },

    updateUrlParameter: function(url, key, value) {
      var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
      var separator = url.indexOf('?') === -1 ? '?' : '&';

      if (url.match(re)) {
        return url.replace(re, '$1' + key + '=' + value + '$2');
      } else {
        return url + separator + key + '=' + value;
      }
    },

    // initStickyProductMeta: function() {
    //   var $meta = $(this.selectors.meta, this.$container);
    //   var $wrapper = $(this.selectors.productWrapper, this.$container);

    //   if ($meta.find('#shopify-product-reviews').length) {
    //     theme.variables.productPageSticky = false;
    //     return;
    //   }

    //   if (
    //     !$meta.length ||
    //     $(this.selectors.productImagePhoto, this.$container).length < 2
    //   ) {
    //     return;
    //   }

    //   // Force detatch if already detached. Prevent layout issues.
    //   $meta.trigger('detach.ScrollToFixed');

    //   // Detach and stop if on mobile breakpoint
    //   if (theme.variables.bpSmall) {
    //     return;
    //   }

    //   var productCopyHeight = $meta.outerHeight();
    //   var productImagesHeight = $(
    //     this.selectors.productImages,
    //     this.$container
    //   ).height();

    //   /*============================================================================
    //     Calculate when to detach fixed element to avoid content overlap.
    //     Subtract product copy height from the limit because plugin uses offset().top
    //   ==============================================================================*/
    //   var calcLimit = $wrapper.offset().top + $wrapper.height();
    //   calcLimit -= productCopyHeight;

    //   // Init sticky if desc shorter than images and fits in viewport
    //   if (
    //     productCopyHeight < productImagesHeight &&
    //     productCopyHeight < $(window).height()
    //   ) {
    //     theme.variables.productPageSticky = true;
    //     $meta.scrollToFixed({
    //       limit: calcLimit
    //     });
    //   } else {
    //     theme.variables.productPageSticky = false;
    //   }
    // },

    onUnload: function() {
      this.$container.off(this.settings.namespace);
      this.destroyImageCarousel();
    },

    getBaseUnit: function(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    }
  });

  return Product;
})();
//!!!
window.theme = window.theme || {};
theme.ProductTabs = (function() {
  function ProductTabs() {
    
    $('.tab-title').click(function() {
      if (!$(this).hasClass('active')) {
        var index = $(this).data('tab');
        $('.tab-title').removeClass('active');
        $(this).addClass('active');
        $('.tab-text').addClass('hide');
        $('.tab-image-wrapper').addClass('hide');
        $(`.tab-text[data-tab='${index}']`).removeClass('hide');
        $(`.tab-image-wrapper[data-tab='${index}']`).removeClass('hide');
      }
    });

  }

  return ProductTabs;
})();

window.theme = window.theme || {};
theme.FullWidthOverlay = (function() {
  function FullWidthOverlay() {

    $(".js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 3000,
      complete: function () {
          // Called after the entrance animation is executed.
      }
    });

  }

  return FullWidthOverlay;
})();

window.theme = window.theme || {};
theme.FeaturedBlogSlider = (function() {
  function FeaturedBlogSlider() {

    $('.featured-blog-slider__wrapper').slick({
      arrows: false,
      dots: true,
      appendDots:$('.featured-blog-slider__slick-dots'),
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  }

  return FeaturedBlogSlider;
})();

window.theme = window.theme || {};
theme.WhyNectarSlider = (function() {
  function WhyNectarSlider() {

    var slick = $('.why-nectar__slider-wrapper').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
    $('.why-nectar__slider-wrapper .slick-prev').hide();
    
    
	$('.why-nectar__slider-wrapper').on('afterChange', function(slick, currentSlide){
      console.log('edge was hit ' + currentSlide.currentSlide);
      if(currentSlide.currentSlide == 0){
        $('.why-nectar__slider-wrapper .slick-prev').hide();
      }else{
        $('.why-nectar__slider-wrapper .slick-prev').show();
      }
      
      if(currentSlide.currentSlide != 0 && (currentSlide.slideWidth + currentSlide.currentLeft) == 0){
        $('.why-nectar__slider-wrapper .slick-next').hide();
      }else{
        $('.why-nectar__slider-wrapper .slick-next').show();
      }
	});

  }

  return WhyNectarSlider;
})();

window.theme = window.theme || {};
theme.FeaturedRecipes = (function() {
  function FeaturedRecipes() {

    $('.featured-recipes__slider-wrapper').slick({
      arrows: false,
      dots: true,
      appendDots:$('.featured-recipes__slick-dots'),
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

  }

  return FeaturedRecipes;
})();
///---

window.theme = window.theme || {};

theme.Collection = (function() {
  function Collection(container) {
    this.selectors = {
      productGridImages: '.grid-uniform .grid-product__image-wrapper',
      $productGridRows: $('.collage-grid__row'),
      productGridPhotosLarge: '.grid__item--large .grid-product__image-link',
      $collectionImage: $('.collection-hero__image'),
      filterDropdowns: '.filter-dropdown',
      filterSelect: '.filter-dropdown__select',
      filterLabel: '.filter-dropdown__label',
      sortDropdown: '#sortBy'
    };

    var $container = (this.$container = $(container));
    this.gridType = $container.data('grid-type');

    this.selectors.$collectionImage.addClass('is-init');

    // Enable parallax effect if 3d transforms are supported
    if (!Modernizr.csstransforms3d) {
      return;
    }

    theme.cache.$window.on('scroll', function() {
      var scrolled = theme.cache.$window.scrollTop();
      theme.cache.$collectionImage.css({
        transform: 'translate3d(0, ' + scrolled / 4.5 + 'px, 0)'
      });
    });

    this.init();
  }

  Collection.prototype = _.assignIn({}, Collection.prototype, {
    init: function() {
      this.cacheSelectors();
      this.setQueryParams();

      this.cache.$sortDropdown.on('change', this.sortCollection.bind(this));

      if (this.gridType === 'collage') {
        this.initCollageGrid();
      } else if (this.gridType === 'grid') {
        theme.equalHeights.call(this);
      }
    },

    updateFilterLabel: function(evt, element) {
      var $select = evt ? $(evt.target) : $(element);
      var $label = $select
        .prev('.filter-dropdown__label')
        .find('.filter-dropdown__label--active');
      var selectedVariant = $select.find('option:selected').text();

      $label.html(' ' + selectedVariant);
      this.cache.$filterDropdowns.addClass('loaded');
    },

    cacheSelectors: function() {
      this.cache = {
        $html: $('html'),
        $window: $(window),
        $productGridImages: $(this.selectors.productGridImages),
        $productGridRows: $(this.selectors.productGridRows),
        $productGridPhotosLarge: $(this.selectors.productGridPhotosLarge),
        $filterDropdowns: $(this.selectors.filterDropdowns),
        $filterSelect: $(this.selectors.filterSelect),
        $filterLabel: $(this.selectors.filterLabel),
        $sortDropdown: $(this.selectors.sortDropdown)
      };
    },

    setQueryParams: function() {
      //don't execute if sort dropdown is not present.
      if (!this.cache.$sortDropdown.length) {
        return;
      }

      Shopify.queryParams = this.parseQueryString();
    },

    parseQueryString: function() {
      if (!location.search.length) {
        return {};
      }

      var params = {};

      for (
        var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&');
        i < aCouples.length;
        i++
      ) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
          params[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(
            aKeyValue[1]
          );
        }
      }
      return params;
    },

    initCollageGrid: function() {
      if (!this.cache.$productGridRows.length) {
        return;
      }

      this.collageGridHeights();

      theme.cache.$window.on(
        'resize',
        theme.debounce(this.collageGridHeights, 500)
      );
    },

    collageGridHeights: function() {
      if (theme.variables.bpSmall || !this.cache.$productGridRows.length) {
        return;
      }

      // calculate image heights for each row of grid images
      for (var i = this.cache.$productGridRows.length - 1; i >= 0; i--) {
        var $currentRow = $(this.cache.$productGridRows[i]);
        var $smallImages = $currentRow.find(
          '.grid__item--small .grid-product__image-wrapper'
        );
        var $largeImageWrapper = $currentRow.find(
          '.grid__item--large .grid-product__image-wrapper'
        );
        var $largeImage = $largeImageWrapper.find('.grid-product__image-link');

        // calculate the bottom edge of the small image
        var smallImageOffset =
          $smallImages[1].offsetTop + $smallImages[1].offsetHeight;

        // calculate the bottom edge of the large image for the row
        var largeImageOffset =
          $largeImageWrapper[0].offsetTop + $largeImageWrapper[0].offsetHeight;

        var largeImageHeight = 0;

        // Depending on which image is lower, increase or decrease the large
        // image size
        if (smallImageOffset > largeImageOffset) {
          largeImageHeight =
            $largeImage.height() + (smallImageOffset - largeImageOffset);
        } else {
          largeImageHeight =
            $largeImage.height() - (largeImageOffset - smallImageOffset);
        }

        $largeImage.css('height', largeImageHeight);
      }
    },

    clearCollageGridHeights: function() {
      if (!this.cache.$productGridRows.length) {
        return;
      }

      this.cache.$productGridPhotosLarge.removeAttr('style');
    },

    collectionSorting: function() {
      if (!this.cache.$tagList.length) {
        return;
      }

      this.cache.$tagList.on('change', function() {
        window.location.href = $(this).val();
      });
    },

    sortCollection: function() {
      if (!this.cache.$sortDropdown.length) {
        return;
      }

      if (Shopify.queryParams.page) {
        delete Shopify.queryParams.page;
      }
      Shopify.queryParams.sort_by = this.cache.$sortDropdown.val();
      location.search = decodeURIComponent(jQuery.param(Shopify.queryParams));
    }
  });

  return Collection;
})();

window.theme = window.theme || {};

theme.HeaderSection = (function() {
  var classes = {
    headerWrapperTransparent: 'header-wrapper--transparent'
  };

  function Header(container) {
    timber.drawersInit();
    theme.initCache();
    theme.fitNav();
    theme.resizeLogo();
    theme.searchModal();

    var $container = (this.$container = $(container));
    this.template = $container.attr('data-template');
    this.$headerWrapper = theme.cache.$siteHeader.closest(
      '[data-header-wrapper]'
    );

    // ajaxCart.init will run from Product.prototype when on the product page
    if (
      theme.settings.cartType === 'drawer' &&
      this.template.indexOf('product') === -1
    ) {
      ajaxCart.init({
        formSelector: '.add-to-cart__form',
        cartContainer: '#CartContainer',
        addToCartSelector: '.add-to-cart',
        enableQtySelectors: true,
        moneyFormat: theme.strings.moneyFormat
      });
    }

    theme.cache.$window.on('load', theme.resizeLogo);
    theme.cache.$window.on('resize', theme.debounce(theme.resizeLogo, 150));

    this.initSideBarDropDowns();
    this.updateHeaderTransparency();

    // Reorder & load events for all section
    // Only trigger when sections list contain slideshow
    $(document).on(
      'shopify:section:reorder shopify:section:load',
      this.updateHeaderTransparency.bind(this)
    );

    // setTimeout is added since we want to see the newest DOM structure
    // unLoad is triggered before the removal of the DOM
    $(document).on(
      'shopify:section:unload',
      function() {
        setTimeout(this.updateHeaderTransparency.bind(this));
      }.bind(this)
    );
//!!!
    var $header = $('.header-wrapper');

    if ($('body').hasClass('template-index') && $('site-header').data('transparent-header') == "true"){
      $(document).scroll(function() {
        var $scrollTop = $(document).scrollTop();
        var $transparentClass = 'header-wrapper--transparent';
        if ($scrollTop > 50) {
          $header.removeClass($transparentClass);
        }else{
          $header.addClass($transparentClass);
        }
      });
    }else{
      $('.main-content').css('margin-top', $header.height());
    }
  }

  Header.prototype = _.assignIn({}, Header.prototype, {
    onSelect: function() {
      this.handleDrawerOpenInEditor(event);
    },

    onDeselect: function() {
      timber.LeftDrawer.close(event);
    },

    handleDrawerOpenInEditor: function(event) {
      if (
        theme.cache.$siteNav.hasClass('site-nav--compress') ||
        theme.variables.bpSmall
      ) {
        setTimeout(function() {
          timber.LeftDrawer.drawerIsOpen = false;
          timber.LeftDrawer.open();
        }, 500);
      } else if (!theme.cache.$siteNav.hasClass('site-nav--compress')) {
        timber.LeftDrawer.drawerIsOpen = true;
        timber.LeftDrawer.close(event);
      }
    },

    initSideBarDropDowns: function() {
      var $toggleBtns = $('.mobile-nav__toggle-btn');
      // Setup aria attributes
      $toggleBtns.attr('aria-expanded', 'false');

      $toggleBtns.each(function() {
        var $button = $(this);
        $button.attr('aria-controls', $button.attr('data-aria-controls'));
      });

      $toggleBtns.on('click', function() {
        var $button = $(this);
        var currentlyExpanded = $button.attr('aria-expanded');
        var toggleState = false;
        // Updated aria-expanded value based on state pre-click
        if (currentlyExpanded === 'true') {
          $button.attr('aria-expanded', 'false');
        } else {
          $button.attr('aria-expanded', 'true');
          toggleState = true;
        }

        // Toggle that expands/collapses sublist
        $button
          .closest('.mobile-nav__has-sublist')
          .toggleClass('mobile-nav--expanded', toggleState)
          .next()
          .slideToggle();
      });
    },

    /**
     * Check whether the first section is slideshow
     * and enable transparency setting (header) is enabled
     */
    updateHeaderTransparency: function() {
      var $sectionsWrapper = theme.cache.$body.find('[data-sections-wrapper]');
      var $firstSection = $sectionsWrapper.find('[data-section-type]').first();

      this.$headerWrapper.removeClass(classes.headerWrapperTransparent);

      if (
        $firstSection.data('section-type') === 'slideshow-section' &&
        theme.cache.$siteHeader.data('transparent-header') === true
      ) {
        this.$headerWrapper.addClass(classes.headerWrapperTransparent);
      }
    }
  });

  return Header;
})();

window.theme = window.theme || {};

theme.FeaturedContentSection = (function() {
  function FeaturedContent() {
    theme.styleTextLinks();
  }

  return FeaturedContent;
})();

window.theme = window.theme || {};

theme.NewsletterSection = (function() {
  function Newsletter() {
    theme.styleTextLinks();
  }

  return Newsletter;
})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
  var classes = {
    headerWrapperTransparent: 'header-wrapper--transparent',
    isPaused: 'is-paused'
  };

  var selectors = {
    pause: '[data-pause]',
    headerWrapper: '[data-header-wrapper]'
  };

  function SlideshowSection(container) {
    theme.initCache();

    var $container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = '#Hero-' + sectionId;
    this.$slideshow = $(slideshow);
    this.autoplay = this.$slideshow.data('autoplay');
    this.$headerWrapper = theme.cache.$siteHeader.closest(
      selectors.headerWrapper
    );

    theme.slideshows[slideshow] = new theme.Slideshow(this.$slideshow);

    // remove header absolute display if slideshow is empty
    if (!this.$slideshow.hasClass('hero')) {
      this.$headerWrapper.removeClass(classes.headerWrapperTransparent);
    }

    if (Shopify.designMode) {
      // Fix the slideshow height in the iOS theme editor
      this.setSlideshowHeight(this.$slideshow);
    }

    $(".js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "bounceIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
      complete: function () {
          // Called after the entrance animation is executed.
      }
    });
  }

  SlideshowSection.prototype = _.assignIn({}, SlideshowSection.prototype, {
    onUnload: function() {
      this.$slideshow.unslick();
    },

    onBlockSelect: function(evt) {
      var $slide = $('.slide--' + evt.detail.blockId);
      var slideIndex = $slide.attr('index');

      // Go to selected slide, pause autoplay
      this.$slideshow.slickGoTo(slideIndex);

      if (this.autoplay) {
        this.$slideshow.slickPause();
      }
    },

    onBlockDeselect: function() {
      var $pauseButton = this.$slideshow.find(selectors.pause);

      if (this.autoplay && $pauseButton.hasClass(classes.isPaused)) {
        this.$slideshow.slickPlay();
      }
    },

    setSlideshowHeight: function($slideshow) {
      enquire.register(theme.variables.mediaQuerySmall, {
        match: function() {
          $slideshow.css('height', $(window.parent.document).height());
        },
        unmatch: function() {
          $slideshow.removeAttr('height');
        }
      });
    }
  });

  return SlideshowSection;
})();

window.theme = window.theme || {};

theme.PasswordHeader = (function() {
  function PasswordHeader() {
    this.init();
  }

  PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
    init: function() {
      $('.js-toggle-login-modal').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        closeOnBgClick: false,
        closeBtnInside: false,
        closeOnContentClick: false,
        tClose: password.strings.pageClose,
        removalDelay: 500,
        callbacks: {
          open: function() {
            window.setTimeout(function() {
              document.getElementById('password').focus();
            }, 50);
          },
          close: function() {
            window.setTimeout(function() {
              document.getElementById('email').focus();
            }, 50);
          }
        }
      });
      if ($('.storefront-password-form .errors').size()) {
        $('.js-toggle-login-modal').click();
      }
    }
  });

  return PasswordHeader;
})();

window.theme = window.theme || {};

theme.PasswordContent = (function() {
  function PasswordContent() {
    theme.styleTextLinks();
  }

  return PasswordContent;
})();

window.theme = window.theme || {};

theme.ProductRecommendations = (function() {
  function ProductRecommendations(container) {
    this.$container = $(container);

    var self = this;
    var baseUrl = this.$container.data('baseUrl');
    var productId = this.$container.data('productId');
    var recommendationsSectionUrl =
      baseUrl +
      '?section_id=product-recommendations&product_id=' +
      productId +
      '&limit=4';

    $.get(recommendationsSectionUrl).then(function(section) {
      var recommendationsMarkup = $(section).html();
      if (recommendationsMarkup.trim() !== '') {
        self.$container.html(recommendationsMarkup);
      }
    });
  }

  return ProductRecommendations;
})();

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  var errors = {
    addressNoResults: theme.strings.addressNoResults,
    addressQueryLimit: theme.strings.addressQueryLimit,
    addressError: theme.strings.addressError,
    authError: theme.strings.authError
  };

  var selectors = {
    section: '[data-section-type="map"]',
    map: '[data-map]',
    mapOverlay: '[data-map-overlay]'
  };

  var classes = {
    mapError: 'map-section--load-error',
    errorMsg: 'map-section__error errors text-center'
  };

  // Global function called by Google on auth errors.
  // Show an auto error message on all map instances.
  // eslint-disable-next-line camelcase, no-unused-vars
  window.gm_authFailure = function() {
    if (!Shopify.designMode) return;

    if (Shopify.designMode) {
      $(selectors.section).addClass(classes.mapError);
      $(selectors.map).remove();
      $(selectors.mapOverlay).after(
        '<div class="' +
          classes.errorMsg +
          '">' +
          theme.strings.authError +
          '</div>'
      );
    }
  };

  function Map(container) {
    this.$container = $(container);
    this.$map = this.$container.find(selectors.map);
    this.key = this.$map.data('api-key');

    if (typeof this.key !== 'string' || this.key === '') {
      return;
    }

    if (apiStatus === 'loaded') {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $('script[src*="' + this.key + '&"]');
      if ($script.length === 0) {
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + this.key
        ).then(function() {
          apiStatus = 'loaded';
          self.createMap();
        });
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + this.key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$map;

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: map.getCenter()
            });

            google.maps.event.addDomListener(window, 'resize', function() {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
              $map.removeAttr('style');
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = errors.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = errors.addressQueryLimit;
              break;
            case 'REQUEST_DENIED':
              errorMessage = errors.authError;
              break;
            default:
              errorMessage = errors.addressError;
              break;
          }

          // Show errors only to merchant in the editor.
          if (Shopify.designMode) {
            $map
              .parent()
              .addClass(classes.mapError)
              .html(
                '<div class="' +
                  classes.errorMsg +
                  '">' +
                  errorMessage +
                  '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (this.$map.length === 0) {
        return;
      }
      google.maps.event.clearListeners(this.map, 'resize');
    }
  });

  return Map;
})();

window.theme = window.theme || {};

theme.Search = (function() {
  function Search() {
    theme.equalHeights();
  }

  return Search;
})();


theme.variables = {
  productPageLoad     : false,
  productPageSticky   : true,

  // Breakpoints from src/stylesheets/global/variables.scss.liquid
  mediaQuerySmall     : 'screen and (max-width: 590px)',
  mediaQueryMedium    : 'screen and (min-width: 591px) and (max-width: 768px)',
  mediaQueryMediumUp  : 'screen and (min-width: 591px)',
  mediaQueryLarge     : 'screen and (min-width: 769px)',
  bpSmall             : false
};

theme.initCache = function() {
  theme.cache = {
    $window                 : $(window),
    $html                   : $('html'),
    $body                   : $('body'),
    $drawerRight            : $('.drawer--right'),

    $hero                   : $('#Hero'),
    $customSelect           : $('.js-selector'),

    $collectionImage        : $('.collection-hero__image'),

    $siteHeader             : $('.site-header'),
    $siteNav                : $('.site-nav'),
    $siteNavOpen            : $('.site-nav--open'),
    $cartBuggle             : $('.cart-link__bubble'),
    $logoWrapper            : $('.site-header__logo'),
    $logo                   : $('.site-header__logo img'),
    $toggleSearchModal      : $('.js-toggle-search-modal'),
    $searchBox              : $('.site-nav--search__bar'),

    $productImages          : $('.product-single__photos'),
    $productImagePhoto      : $('.product-single__photo'),

    $indentedRteImages      : $('.rte--indented-images'),

    $productGridRows        : $('.collage-grid__row'),
    $productGridPhotosLarge : $('.grid__item--large .grid-product__image-link'),

    // Equal height elements
    $productGridImages      : $('.grid-uniform .grid-product__image-wrapper'),

    $returnLink             : $('.return-link')
  };
};

theme.init = function() {
  theme.initCache();
  theme.setBreakpoints();
  theme.fitNav();
  theme.cartInit();
  theme.afterCartLoad();
  theme.checkoutIndicator();
  theme.returnLink();
  theme.styleTextLinks();
  theme.searchModal();
  theme.productCardImageLoadingAnimation();

  // Functions to run on load so image sizes can be calculated
  theme.cache.$window.on('load', theme.resizeLogo);
  theme.cache.$window.on('load', theme.articleImages);

  // Functions to re-run on resize
  theme.cache.$window.on('resize', theme.debounce(theme.resizeLogo, 150));
};

theme.returnLink = function() {
  if (!document.referrer || !theme.cache.$returnLink.length || !window.history.length) {
    return;
  }

  theme.cache.$returnLink.on('click', theme.backButton);
};

theme.backButton = function() {
  var referrerDomain = urlDomain(document.referrer);
  var shopDomain = urlDomain(document.url);

  if (shopDomain === referrerDomain) {
    history.back();
    return false;
  }

  function urlDomain(url) {
    var    a      = document.createElement('a');
           a.href = url;
    return a.hostname;
  }
};

theme.setBreakpoints = function() {
    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        if (theme.settings.gridType === 'collage') {
          theme.clearCollageGridHeights();
        }

        theme.variables.bpSmall = true;
      },
      unmatch: function() {
        theme.variables.bpSmall = false;
      }
    });

};

theme.fitNav = function() {
  // Measure children of site nav on load and resize.
  // If wider than parent, switch to mobile nav.
  controlNav();
  theme.cache.$window.on('load', controlNav);
  theme.cache.$window.on('resize', theme.debounce(controlNav, 150));

  function controlNav() {
    // Subtract 20 from width to account for inline-block spacing
    var navWidth = theme.cache.$siteNav.parent().outerWidth() - 20;
    var navItemWidth = 0;
    theme.cache.$siteNav.find('> li').each(function() {
      var $el = $(this);
      // Round up to be safe
      navItemWidth += Math.ceil($(this).width());
    });

    if (navItemWidth > navWidth) {
      theme.cache.$siteNav.addClass('site-nav--compress');
      theme.cache.$siteNav.parent().removeClass('large--three-quarters');
      theme.cache.$siteNavOpen.addClass('site-nav--open__display');
      theme.cache.$siteNavOpen.parent().removeClass('large--hide');
      //theme.cache.$logoWrapper.parent().removeClass('large--one-third').addClass('large--two-thirds');
      theme.cache.$logoWrapper.removeClass('large--left').addClass('text-center');
      theme.cache.$searchBox.hide();
    } else {
      theme.cache.$siteNav.removeClass('site-nav--compress');
      theme.cache.$siteNavOpen.removeClass('site-nav--open__display');
      theme.cache.$siteNavOpen.parent().addClass('large--hide');
      theme.cache.$searchBox.show();
    }

    theme.cache.$siteNav.addClass('site-nav--init');
    theme.cache.$siteNavOpen.addClass('site-nav--init');
  }
};

theme.resizeLogo = function() {
  // Using .each() as there can be a reversed logo too
  theme.cache.$logo.each(function() {
    var $el = $(this),
        logoWidthOnScreen = $el.width(),
        containerWidth = $el.closest('.grid__item').width();
    // If image exceeds container, let's make it smaller
    if (logoWidthOnScreen > containerWidth) {
      $el.css('maxWidth', containerWidth);
    }
    else {
      $el.removeAttr('style');
    }
  });
};

theme.sizeCartDrawerFooter = function() {
  // Stop if our drawer doesn't have a fixed footer
  if (!theme.cache.$drawerRight.hasClass('drawer--has-fixed-footer')) {
    return;
  }

  // Elements are reprinted regularly so selectors are not cached
  var $cartFooter = $('.ajaxcart__footer').removeAttr('style');
  var $cartInner = $('.ajaxcart__inner').removeAttr('style');
  var cartFooterHeight = $cartFooter.outerHeight();
  var cartDrawerTitleHeight = $('.drawer--right .drawer__header').outerHeight();
  var $cartDrawerInner = $('.drawer--right .drawer__inner');

  if(cartDrawerTitleHeight != 80) {
    $cartDrawerInner.css('top', cartDrawerTitleHeight);
  }

  $cartInner.css('bottom', cartFooterHeight);
  $cartFooter.css('height', cartFooterHeight);
};

theme.afterCartLoad = function() {
  theme.cache.$body.on('ajaxCart.afterCartLoad', function(evt, cart) {
    // Open cart drawer
    timber.RightDrawer.open();

    // Size the cart's fixed footer
    theme.sizeCartDrawerFooter();

    // Show cart bubble in nav if items exist
    if (cart.items.length > 0) {
      theme.cache.$cartBuggle.addClass('cart-link__bubble--visible');
    } else {
      theme.cache.$cartBuggle.removeClass('cart-link__bubble--visible');
    }
  });
};

theme.checkoutIndicator = function() {
  // Add a loading indicator on the cart checkout button (/cart and drawer)
  theme.cache.$body.on('click', '.cart__checkout', function() {
    $(this).addClass('btn--loading');
  });
};

theme.searchModal = function() {
  if (!theme.cache.$toggleSearchModal.length) {
    return;
  }

  theme.cache.$toggleSearchModal.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    tClose: theme.strings.zoomClose,
    alignTop: true,
    removalDelay: 500,
    focus: '.search-bar > input'
  });
}

theme.clearCollageGridHeights = function() {
  if (!theme.cache.$productGridRows.length) {
    return;
  };

  theme.cache.$productGridPhotosLarge.removeAttr('style');
};

theme.articleImages = function() {
  if (!theme.cache.$indentedRteImages.length) {
    return;
  }

  theme.cache.$indentedRteImages.find('img').each(function() {
    var $el = $(this);
    var attr = $el.attr('style');

    // Check if undefined or float: none
    if (!attr || attr == 'float: none;') {
      // Remove grid-breaking styles if image isn't wider than parent
      if ($el.width() < theme.cache.$indentedRteImages.width()) {
        $el.addClass('rte__no-indent');
      }
    }
  });
};

theme.styleTextLinks = function() {
  $('.rte').find('a:not(:has(img))').addClass('text-link');
};

theme.equalHeights = function() {
  var self = this;
  theme.cache.$window.on('load', resizeElements());

  theme.cache.$window.on(
    'resize',
    afterResize(
      function() {
        resizeElements();
      },
      250,
      'equal-heights'
    )
  );

  function resizeElements() {
    self.cache.$productGridImages.css('height', 'auto').equalHeights();
  }
};

theme.cartInit = function() {
  if (!theme.cookiesEnabled()) {
    theme.cache.$body.addClass('cart--no-cookies');
  }
};

theme.cookiesEnabled = function() {
  var cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled){
    document.cookie = 'testcookie';
    cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
  }
  return cookieEnabled;
}

theme.productCardImageLoadingAnimation = function() {
  var selectors = {
    image: '[data-image]',
    imageLink: '[data-image-link]',
  };

  var classes = {
    loadingAnimation: 'grid-product__image-link--loading',
    lazyloaded: '.lazyloaded'
  }

  $(document).on('lazyloaded', function (e) {
    var $target = $(e.target);

    if (!$target.is(selectors.image)) {
      return;
    }

    $target
      .closest(selectors.imageLink)
      .removeClass(classes.loadingAnimation);
  });


  // When the theme loads, lazysizes might load images before the "lazyloaded"
  // event listener has been attached. When this happens, the following function
  // hides the loading placeholders.
  $(selectors.image + classes.lazyloaded)
    .closest(selectors.imageLink)
    .removeClass(classes.loadingAnimation);
}

$(document).ready(function() {
  theme.init();
  var sections = new theme.Sections();

  setTimeout(function() {
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 500,
      offset: 100
    });
  }, 500);

  sections.register('product-template', theme.Product);
  sections.register('collection-template', theme.Collection);
  sections.register('header-section', theme.HeaderSection);
  sections.register('featured-content-section', theme.FeaturedContentSection);
  sections.register('newsletter-section', theme.NewsletterSection);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('password-header', theme.PasswordHeader);
  sections.register('password-content', theme.PasswordContent);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('map', theme.Maps);
  sections.register('search', theme.Search);
  sections.register('product-tabs-nectar-section', theme.ProductTabs);
  sections.register('full-width-overlay-section', theme.FullWidthOverlay);
  sections.register('featured-blog-slider', theme.FeaturedBlogSlider);
  sections.register('why-nectar-section', theme.WhyNectarSlider);
  sections.register('featured-recipes', theme.FeaturedRecipes);
});

/*
 * Run function after window resize
 * http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
 */
var afterResize = (function () {
  var t = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (t[uniqueId]) {
      clearTimeout(t[uniqueId]);
    }
    t[uniqueId] = setTimeout(callback, ms);
  };
})();

// Here the plugin page https://github.com/tsurule/morelines

!function(s){s.fn.moreLines=function(e){"use strict";return this.each(function(){var t=s(this),i=(t.find("p"),parseFloat(t.css("line-height"))),a=t.innerHeight(),n=s.extend({linecount:1,baseclass:"b-morelines_",basejsclass:"js-morelines_",classspecific:"section",buttontxtmore:"more lines",buttontxtless:"less lines",animationspeed:1},e),c=n.baseclass+n.classspecific+"_ellipsis",l=n.baseclass+n.classspecific+"_button",o=n.baseclass+n.classspecific+"_wrapper",h=n.basejsclass+n.classspecific+"_wrapper",r=s("<div>").addClass(o+" "+h).css({"max-width":t.css("width")}),m=i*n.linecount;if(t.wrap(r),t.parent().not(h)&&a>m){t.addClass(c).css({"min-height":m,"max-height":m,overflow:"hidden"});var p=s("<div>",{class:l,click:function(){t.toggleClass(c),s(this).toggleClass(l+"_active"),"none"!==t.css("max-height")?t.css({height:m,"max-height":""}).animate({height:a},n.animationspeed,function(){p.html(n.buttontxtless)}):t.animate({height:m},n.animationspeed,function(){p.html(n.buttontxtmore),t.css("max-height",m)})},html:n.buttontxtmore});t.after(p)}}),this}}(jQuery);

$(function() {
  $('.js-description_readmore').moreLines({
    linecount: 8, 
    baseclass: 'b-description',
    basejsclass: 'js-description',
    classspecific: '_readmore',    
    buttontxtmore: "read more",               
    buttontxtless: "read less",
    animationspeed: 250 
  });
});
