!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SmoothDnD=t():e.SmoothDnD=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerInstance="smooth-dnd-container-instance",t.containersInDraggable="smooth-dnd-containers-in-draggable",t.defaultGroupName="@@smooth-dnd-default-group@@",t.wrapperClass="smooth-dnd-draggable-wrapper",t.defaultGrabHandleClass="smooth-dnd-default-grap-handle",t.animationClass="animated",t.translationValue="__smooth_dnd_draggable_translation_value",t.visibilityValue="__smooth_dnd_draggable_visibility_value",t.ghostClass="smooth-dnd-ghost",t.containerClass="smooth-dnd-container",t.extraSizeForInsertion="smooth-dnd-extra-size-for-insertion",t.stretcherElementClass="smooth-dnd-stretcher-element",t.stretcherElementInstance="smooth-dnd-stretcher-instance",t.isDraggableDetached="smoth-dnd-is-draggable-detached",t.disbaleTouchActions="smooth-dnd-disable-touch-action",t.noUserSelectClass="smooth-dnd-no-user-select"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getIntersection=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}};var o=t.getIntersectionOnAxis=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},r=t.getContainerRect=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(l(e,"x")&&!a(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(l(e,"y")&&!a(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},i=(t.getScrollingAxis=function(e){var t=window.getComputedStyle(e),n=t.overflow;if("auto"===n||"scroll"===n)return"xy";var o=t["overflow-x"],r="auto"===o||"scroll"===o,i=t["overflow-y"];return(r?"x":"")+("auto"===i||"scroll"===i?"y":"")||null},t.isScrolling=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-"+t];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)}),a=t.isScrollingOrHidden=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-"+t];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},l=t.hasBiggerChild=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight};t.hasScrollBar=function(e,t){return l(e,t)&&i(e,t)},t.getVisibleRect=function(e,t){var n=e,i=t||r(e);for(n=e.parentElement;n;)l(n,"x")&&a(n,"x")&&(i=o(i,n.getBoundingClientRect(),"x")),l(n,"y")&&a(n,"y")&&(i=o(i,n.getBoundingClientRect(),"y")),n=n.parentElement;return i},t.listenScrollParent=function(e,t){var n=[];return setTimeout(function(){for(var o=e;o;)(i(o,"x")||i(o,"y"))&&(o.addEventListener("scroll",t),n.push(o)),o=o.parentElement;window.addEventListener("scroll",t)},10),{dispose:function(){n.forEach(function(e){e.removeEventListener("scroll",t)}),window.removeEventListener("scroll",t)}}},t.hasParent=function(e,t){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1},t.getParent=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},t.hasClass=function(e,t){return e.className.split(" ").map(function(e){return e}).indexOf(t)>-1},t.addClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},t.removeClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},t.debounce=function(e,t,n){var o=null;return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];o&&clearTimeout(o),n&&!o?e.call.apply(e,[void 0].concat(i)):o=setTimeout(function(){o=null,e.call.apply(e,[void 0].concat(i))},t)}},t.removeChildAt=function(e,t){return e.removeChild(e.children[t])},t.addChildAt=function(e,t,n){n>=e.children.lenght?e.appendChild(t):e.insertBefore(t,e.children[n])},t.isMobile=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},t.clearSelection=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domDropHandler=function(e){var t=e.element,n=e.draggables;e.layout,e.options;return function(e,i){var a=e.removedIndex,l=e.addedIndex,s=e.droppedElement,u=null;if(null!==a&&(u=(0,o.removeChildAt)(t,a),n.splice(a,1)),null!==l){var c=document.createElement("div");c.className=""+r.wrapperClass,c.appendChild(u.firstElementChild||s),c[r.containersInDraggable]=[],(0,o.addChildAt)(t,c,l),l>=n.length?n.push(c):n.splice(l,0,c)}i&&i(e)}},t.reactDropHandler=function(){return{handler:function(e){e.element,e.draggables,e.layout,e.options;return function(e,t){t&&t(e)}}}};var o=n(1),r=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){e[r.extraSizeForInsertion]=0;var l=n,s=function(e){return{get:function(t,n){var o=e[n];return t[o||n]},set:function(t,n,o){requestAnimationFrame(function(){t[e[n]]=e.setters[n]?e.setters[n](o):o})}}}("horizontal"===t?i:a),u={translation:0},c=null;window.addEventListener("resize",function(){p(e)}),setTimeout(function(){f()},10);var d=o.listenScrollParent(e,function(){p(e),c&&c()});function f(){p(e),function(e){var t=e.getBoundingClientRect();u.scaleX=(t.right-t.left)/e.offsetWidth,u.scaleY=(t.bottom-t.top)/e.offsetHeight}(e)}var g=void 0;function p(e){u.rect=o.getContainerRect(e),u.visibleRect=o.getVisibleRect(e,u.rect)}function m(e){return s.get(e,"size")*s.get(u,"scale")}function v(e){return s.get(e,"dragPosition")}function h(e,n){var o=u.visibleRect,r=o.left,i=o.top,a=o.right,l=o.bottom;l-i<2&&(l=i+30);var s=u.rect;return"vertical"===t?e>s.left&&e<s.right&&n>i&&n<l:e>r&&e<a&&n>s.top&&n<s.bottom}return{getSize:m,getContainerRectangles:function(){return{rect:u.rect,visibleRect:u.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:s.get(e,"begin"),end:s.get(e,"end")}},getBeginEndOfContainer:function(){var e=s.get(u.rect,"begin")+u.translation,t=s.get(u.rect,"end")+u.translation;return{begin:e,end:t}},getBeginEndOfContainerVisibleRect:function(){var e=s.get(u.visibleRect,"begin")+u.translation,t=s.get(u.visibleRect,"end")+u.translation;return{begin:e,end:t}},getBeginEnd:function(t){var n=function(e){return(s.get(e,"distanceToParent")+(e[r.translationValue]||0))*s.get(u,"scale")}(t)+(s.get(u.rect,"begin")+u.translation)-s.get(e,"scrollValue");return{begin:n,end:n+m(t)*s.get(u,"scale")}},getAxisValue:v,setTranslation:function(e,t){t?s.set(e.style,"translate",t):e.style.removeProperty("transform");e[r.translationValue]=t,e[r.containersInDraggable]&&setTimeout(function(){e[r.containersInDraggable].forEach(function(e){!function e(t){t.layout.invalidateRects();t.onTranslated();t.getChildContainers()&&t.getChildContainers().forEach(function(t){return e(t)})}(e)})},l+20)},getTranslation:function(e){return e[r.translationValue]},setVisibility:function(e,t){void 0!==e[r.visibilityValue]&&e[r.visibilityValue]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[r.visibilityValue]=t)},isVisible:function(e){return void 0===e[r.visibilityValue]||e[r.visibilityValue]},isInVisibleRect:h,dispose:function(){d&&d.dispose();g&&(g.parentNode.removeChild(g),g=null)},getContainerScale:function(){return{scaleX:u.scaleX,scaleY:u.scaleY}},setScrollListener:function(e){c=e},setSize:function(e,t){s.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var n=0,o=0;"horizontal"===t?(o=e,n=u.rect.top):(o=u.rect.left,n=e);return{top:n,left:o}},getScrollSize:function(e){return s.get(e,"scrollSize")},getScrollValue:function(e){return s.get(e,"scrollValue")},setScrollValue:function(e,t){return s.set(e,"scrollValue",t)},invalidate:f,invalidateRects:function(){p(e)},getPosition:function(e){return h(e.x,e.y)?v(e):null}}};var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),r=n(0);var i={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d("+e+"px, 0, 0)"}}},a={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,"+e+"px, 0)"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=!1,o=null,r=null,i=null,a=null;return{animate:function(l,s){i=l,a=s,(n=!0)&&function n(){null===o&&(o=requestAnimationFrame(function(l){null===r&&(r=l);var s=l-r;r=l;var u=s/1e3*a;(function(e,t,n){e&&("x"===t?e.scrollLeft+=n:e.scrollTop+=n)})(e,t,u="begin"===i?0-u:u),o=null,n()}))}()},stop:function(){n&&(cancelAnimationFrame(o),n=!1,r=null,o=null)}}};function i(e){var t={element:e,rect:(0,o.getVisibleRect)(e,e.getBoundingClientRect()),descendants:[],invalidate:n,axis:null};function n(){t.rect=(0,o.getVisibleRect)(e,e.getBoundingClientRect()),t.descendants.forEach(function(e){return e.invalidate()})}return e.addEventListener("scroll",function(){n()}),t}function a(e){return Object.assign(e,r(e.element,e.axis))}t.default=function(e){var t,n,r,l=(t=e.map(function(e){return e.element}),n=[],r=null,t.forEach(function(e){var t=e;for(r=null;t;){var a=(0,o.getScrollingAxis)(t);if(a&&!n.some(function(e){return e.element===t})){var l=i(t);r&&l.descendants.push(r),r=l,"xy"===a?(n.push(Object.assign({},l,{axis:"x"})),n.push(Object.assign({},l,{axis:"y"},{descendants:[]}))):n.push(Object.assign({},l,{axis:a}))}t=t.parentElement}}),n).map(a);return function(e){var t=e.draggableInfo,n=e.reset;if(l.length){if(n)return l.forEach(function(e){return e.stop()}),null;l.forEach(function(e){var n=function(e,t){var n=t.rect,o=n.left,r=n.right,i=n.top,a=n.bottom,l=e.x,s=e.y;if(l<o||l>r||s<i||s>a)return null;var u=void 0,c=void 0,d=void 0;return"x"===t.axis?(u=o,c=r,d=l):(u=i,c=a,d=s),c-d<100?{direction:"end",speedFactor:(100-(c-d))/100}:d-u<100?{direction:"begin",speedFactor:(100-(d-u))/100}:void 0}(t.mousePosition,e);n?e.animate(n.direction,1500*n.speedFactor):e.stop()})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addStyleToHead=void 0;var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={overflow:"hidden",display:"block"},s={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},u=(a(o={},"."+i.containerClass,{position:"relative"}),a(o,"."+i.containerClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.containerClass+".horizontal",{"white-space":"nowrap"}),a(o,"."+i.containerClass+".horizontal > ."+i.wrapperClass,s),a(o,"."+i.containerClass+".vertical > ."+i.wrapperClass,l),a(o,"."+i.wrapperClass,{}),a(o,"."+i.wrapperClass+".horizontal",s),a(o,"."+i.wrapperClass+".vertical",l),a(o,"."+i.wrapperClass+".animated",{transition:"transform ease"}),a(o,"."+i.ghostClass+" *",{"box-sizing":"border-box"}),a(o,"."+i.ghostClass+".animated",{transition:"all ease-in-out"}),a(o,"."+i.disbaleTouchActions+" *",{"touch-actions":"none","-ms-touch-actions":"none"}),a(o,"."+i.noUserSelectClass+" *",{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),o);t.addStyleToHead=function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=function e(t){return Object.keys(t).reduce(function(n,o){var i=t[o];return"object"===(void 0===i?"undefined":r(i))?""+n+o+"{"+e(i)+"}":""+n+o+":"+i+";"},"")}(u);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}},function(e,t,n){"use strict";var o;Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),(o=window.Node||window.Element)&&o.prototype&&null==o.prototype.firstElementChild&&Object.defineProperty(o.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=arguments.length>=2?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(6);var o,r=u(n(1)),i=u(n(0)),a=n(5),l=n(4),s=(o=l)&&o.__esModule?o:{default:o};function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var c=["mousedown","touchstart"],d=["mousemove","touchmove"],f=["mouseup","touchend"],g=null,p=null,m=null,v=null,h=[],b=!1,y=null,C=null,E=null,x=r.isMobile();function w(){c.forEach(function(e){window.document.addEventListener(e,O,{passive:!1})})}var S=function(){var e=void 0,t=void 0,n=void 0,o=null,r=1,i=5;function a(n){var o=I(n),a=o.clientX,l=o.clientY;if(t)(Math.abs(e.clientX-a)>i||Math.abs(e.clientY-l)>i)&&u();else if(Math.abs(e.clientX-a)>r||Math.abs(e.clientY-l)>r)return c()}function l(){u()}function s(){u()}function u(){clearTimeout(o),d.forEach(function(e){return window.document.removeEventListener(e,a)},{passive:!1}),f.forEach(function(e){return window.document.removeEventListener(e,l)},{passive:!1}),document.removeEventListener("drag",s,{passive:!1})}function c(){clearTimeout(o),u(),n()}return function(r,i,u){e=I(r),n=u,(t=i||(x?200:0))&&(o=setTimeout(c,t)),d.forEach(function(e){return window.document.addEventListener(e,a)},{passive:!1}),f.forEach(function(e){return window.document.addEventListener(e,l)},{passive:!1}),document.addEventListener("drag",s,{passive:!1})}}();function O(e){var t=I(e);if(!b&&(p=r.getParent(t.target,"."+i.wrapperClass))){var n=r.getParent(p,"."+i.containerClass),o=h.filter(function(e){return e.element===n})[0],a=o.getOptions().dragHandleSelector,l=o.getOptions().nonDragAreaSelector,s=!0;a&&!r.getParent(t.target,a)&&(s=!1),l&&r.getParent(t.target,l)&&(s=!1),s&&S(t,o.getOptions().dragBeginDelay,function(){r.clearSelection(),P(t),d.forEach(function(e){window.document.addEventListener(e,R,{passive:!1})}),f.forEach(function(e){window.document.addEventListener(e,D,{passive:!1})})})}}function D(){d.forEach(function(e){window.document.removeEventListener(e,R,{passive:!1})}),f.forEach(function(e){window.document.removeEventListener(e,D,{passive:!1})}),C({reset:!0}),v&&function(e){function t(){r.removeClass(m.ghost,"animated"),m.ghost.style.transitionDuration=null,document.body.removeChild(m.ghost),e()}function n(e,n,o){var i=e.top,a=e.left;r.addClass(m.ghost,"animated"),o&&r.addClass(m.ghost.firstElementChild.firstElementChild,o),m.ghost.style.transitionDuration=n+"ms",m.ghost.style.left=a+"px",m.ghost.style.top=i+"px",setTimeout(function(){t()},n+20)}if(v.targetElement){var o=h.filter(function(e){return e.element===v.targetElement})[0];!(d=o.getOptions()).shouldAnimateDrop||d.shouldAnimateDrop({sourceContainerProps:v.container.getOptions(),payload:v.payload})?n(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass):t()}else{var i=h.filter(function(e){return e===v.container})[0];if("move"===i.getOptions().behaviour&&i.getDragResult()){var a=i.getDragResult(),l=a.removedIndex,s=a.elementSize,u=i.layout;i.getTranslateCalculator({dragResult:{removedIndex:l,addedIndex:l,elementSize:s}});var c=l>0?u.getBeginEnd(i.draggables[l-1]).end:u.getBeginEndOfContainer().begin;n(u.getTopLeftOfElementBegin(c),i.getOptions().animationDuration,i.getOptions().dropClass)}else r.addClass(m.ghost,"animated"),m.ghost.style.transitionDuration=i.getOptions().animationDuration+"ms",m.ghost.style.opacity="0",m.ghost.style.transform="scale(0.90)",setTimeout(function(){t()},i.getOptions().animationDuration)}var d}(function(){r.removeClass(document.body,i.disbaleTouchActions),r.removeClass(document.body,i.noUserSelectClass),(g||[]).forEach(function(e){e.handleDrop(v)}),g=null,p=null,m=null,v=null,b=!1,null,E=null,y=null})}function I(e){return e.touches?e.touches[0]:e}function P(e){b=!0;var t=h.filter(function(e){return p.parentElement===e.element})[0];t.setDraggables(),t,E=t.getOptions().lockAxis?t.getOptions().lockAxis.toLowerCase():null,v=function(e){var t=h.filter(function(t){return e.parentElement===t.element})[0],n=t.draggables.indexOf(e);return{container:t,element:e,elementIndex:n,payload:t.getOptions().getChildPayload?t.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:t.getOptions().groupName}}(p),m=function(e,t,n){var o=t.x,a=t.y,l=n.getScale(),s=l.scaleX,u=void 0===s?1:s,c=l.scaleY,d=void 0===c?1:c,f=e.getBoundingClientRect(),g=f.left,p=f.top,m=f.right,v=f.bottom,h=g+(m-g)/2,b=p+(v-p)/2,y=document.createElement("div");y.style.boxSizing="border-box",y.style.position="fixed",y.style.pointerEvents="none",y.style.left=g+"px",y.style.top=p+"px",y.style.width=m-g+"px",y.style.height=v-p+"px",y.style.overflow="visible",y.className=i.ghostClass;var C=e.cloneNode(!0);return setTimeout(function(){n.getOptions().dragClass&&r.addClass(C.firstElementChild,n.getOptions().dragClass)}),r.addClass(C,n.getOptions().orientation),C.style.overflow="visible",C.style.width=(m-g)/u+"px",C.style.height=(v-p)/d+"px",C.style.transform="scale3d("+(u||1)+", "+(d||1)+", 1)",C.style.transformOrigin="0 0 0",C.style.margin="0px",y.appendChild(C),{ghost:y,centerDelta:{x:h-o,y:b-a},positionDelta:{left:g-o,top:p-a}}}(p,{x:e.clientX,y:e.clientY},v.container),v.position={x:e.clientX+m.centerDelta.x,y:e.clientY+m.centerDelta.y},v.mousePosition={x:e.clientX,y:e.clientY},document.body.appendChild(m.ghost),r.addClass(document.body,i.disbaleTouchActions),r.addClass(document.body,i.noUserSelectClass),t.getOptions().onDragStart&&t.getOptions().onDragStart(v.elementIndex,v.payload),g=h.filter(function(e){return e.isDragRelevant(t,v.payload)}),y=function(e){var t=e;return function(e){t.forEach(function(t){return t.handleDrag(e)}),C({draggableInfo:e})}}(g),C=function(e,t){return e.getOptions().autoScrollEnabled?(0,s.default)(t):function(){return null}}(t,g),g.forEach(function(e){return e.prepareDrag(e,g)}),y(v)}function R(e){e.preventDefault();var t=I(e);v?(E?"y"===E?(m.ghost.style.top=t.clientY+m.positionDelta.top+"px",v.position.y=t.clientY+m.centerDelta.y,v.mousePosition.y=t.clientY):"x"===E&&(m.ghost.style.left=t.clientX+m.positionDelta.left+"px",v.position.x=t.clientX+m.centerDelta.x,v.mousePosition.x=t.clientX):(m.ghost.style.left=t.clientX+m.positionDelta.left+"px",m.ghost.style.top=t.clientY+m.positionDelta.top+"px",v.position.x=t.clientX+m.centerDelta.x,v.position.y=t.clientY+m.centerDelta.y,v.mousePosition.x=t.clientX,v.mousePosition.y=t.clientY),y(v)):P(t)}(0,a.addStyleToHead)(),t.default=(w(),{register:function(e){h.push(e)},unregister:function(e){h.splice(h.indexOf(e),1)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(7)),r=s(n(3)),i=n(1),a=n(2),l=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var u={groupName:null,behaviour:"move",orientation:"vertical",getChildPayload:null,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:null,shouldAnimateDrop:null};function c(e,t,n){t?((0,i.addClass)(e,l.animationClass),e.style.transitionDuration=n+"ms"):((0,i.removeClass)(e,l.animationClass),e.style.removeProperty("transition-duration"))}function d(e){return e?e[l.containerInstance]:null}function f(e){if(L.wrapChild)return L.wrapChild(e);var t=document.createElement("div");return t.className=""+l.wrapperClass,e.parentElement.insertBefore(t,e),t.appendChild(e),t}function g(e){var t=[];return Array.prototype.map.call(e.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=n;(0,i.hasClass)(n,l.wrapperClass)||(o=f(n)),o[l.containersInDraggable]=[],o[l.translationValue]=0,t.push(o)}else e.removeChild(n)}),t}function p(e){var t=e.layout;return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function e(n,o,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i<r)return r;if(r===i){var l=t.getBeginEnd(n[r]),s=l.begin,u=l.end;return o>s&&o<=u?a?o<(u+s)/2?r:r+1:r:null}var c=Math.floor((i+r)/2),d=t.getBeginEnd(n[c]),f=d.begin,g=d.end;return o<f?e(n,o,r,c-1,a):o>g?e(n,o,c+1,i,a):a?o<(g+f)/2?c:c+1:c}(e,n,0,e.length-1,o)}}function m(e){var t=e.element,n=e.draggables,o=e.layout,r=e.options,i=function(e){var t=e.element,n=e.draggables,o=e.layout;return e.options,function(){n.forEach(function(e){c(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0),e[l.containersInDraggable]=[]}),t[l.stretcherElementInstance]&&(t[l.stretcherElementInstance].parentNode.removeChild(t[l.stretcherElementInstance]),t[l.stretcherElementInstance]=null)}}({element:t,draggables:n,layout:o,options:r}),s=(L.dropHandler||a.domDropHandler)({element:t,draggables:n,layout:o,options:r});return function(e,t){var n=t.addedIndex,o=t.removedIndex;if(i(),e.targetElement){var a={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload,droppedElement:e.element.firstElementChild};s(a,r.onDrop)}}}function v(e,t){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return Object.assign({},u,e)}(t),o=g(e,n.orientation,n.animationDuration);return(0,i.addClass)(e,l.containerClass+" "+n.orientation),{element:e,draggables:o,options:n,layout:(0,r.default)(e,n.orientation,n.animationDuration)}}function h(e,t){var n=function(e,t){for(var n=e.element;n;){var o=d(n.parentElement);if(o&&t.indexOf(o)>-1)return{container:o,draggable:n};n=n.parentElement}return null}(e,t);n&&(n.container.getChildContainers().push(e),e.setParentContainer(n.container),n.draggable[l.containersInDraggable].push(e))}function b(e){e.draggables;var t=e.element,n=e.options,o=null;return function(e){var r=e.draggableInfo,i=(e.dragResult,o);return null==o&&r.container.element===t&&"copy"!==n.behaviour&&(i=o=r.elementIndex),{removedIndex:i}}}function y(e){var t=e.draggables,n=e.layout;return function(e){e.draggableInfo;var o=e.dragResult;null!==o.removedIndex&&n.setVisibility(t[o.removedIndex],!1)}}function C(e){var t=e.element,n=e.layout;return function(e){var o=e.draggableInfo;return{pos:d(t).isPosInChildContainer()?null:n.getPosition(o.position)}}}function E(e){var t=e.element,n=!1;return function(e){e.draggableInfo;var o=e.dragResult;d(t).getParentContainer()&&n!==(null!==o.pos)&&(n=null!==o.pos,d(t).getParentContainer().onChildPositionCaptured(n))}}function x(e){var t=e.layout,n=null;return function(e){var o=e.draggableInfo;return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(o.element)}}}function w(e){var t=e.element;return function(e){var n=e.draggableInfo,o=e.dragResult;!function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!o.pos)}}function S(e){e.draggables,e.layout;return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function O(e){e.draggables;var t=e.layout,n=null;return function(e){var o=e.dragResult.addedIndex;if(o!==n){n=o;var r=t.getBeginEndOfContainer(),i=r.begin,a=r.end;return{shadowBeginEnd:{rect:t.getTopLeftOfElementBegin(i,a)}}}}}function D(e){var t=_(e);return function(e){var n=e.draggableInfo,o=e.dragResult;return n.invalidateShadow?t({draggableInfo:n,dragResult:o}):null}}function I(e){var t,n,o,r=(n=(t=e).draggables,o=p({layout:t.layout}),function(e){var t=e.dragResult,r=t.shadowBeginEnd,i=t.pos;if(!r){var a=o(n,i,!0);return null!==a?a:n.length}return r.begin+r.beginAdjustment<=i&&r.end>=i?null:i<r.begin+r.beginAdjustment?o(n,i):i>r.end?o(n,i)+1:n.length});return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=r({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function P(){var e=null;return function(t){var n=t.dragResult,o=n.addedIndex,r=n.shadowBeginEnd;o!==e&&null!==e&&r&&(r.beginAdjustment=0),e=o}}function R(e){var t=e.element,n=e.draggables,o=e.layout,r=e.options,i=null,a=!1;return function(e){var s=e.dragResult,u=s.addedIndex,c=s.removedIndex,d=s.elementSize;if(null===c)if(null!==u){if(!a){var f=o.getBeginEndOfContainer(),g=o.getScrollSize(t)>o.getSize(t)?f.begin+o.getScrollSize(t)-o.getScrollValue(t):f.end,p=n.length>0?o.getBeginEnd(n[n.length-1]).end-n[n.length-1][l.translationValue]:f.begin;if(p+d>g){(i=document.createElement("div")).className=l.stretcherElementClass+" "+r.orientation;var m=d+p-g;o.setSize(i.style,m+"px"),t.appendChild(i),t[l.stretcherElementInstance]=i}a=!0,setTimeout(function(){o.invalidateRects()},100)}}else{if(i){o.setTranslation(i,0);var v=i;i=null,t.removeChild(v),t[l.stretcherElementInstance]=null}a=!1,setTimeout(function(){o.invalidateRects()},100)}}}function T(e){e.element;var t=e.draggables,n=e.layout,o=null,r=null;return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize;if(a!==o||l!==r){for(var u=0;u<t.length;u++)if(u!==l){var c=t[u],d=0;null!==l&&l<u&&(d-=n.getSize(t[l])),null!==a&&a<=u&&(d+=s),n.setTranslation(c,d)}return o=a,r=l,{addedIndex:a,removedIndex:l}}}}function _(e){var t=e.draggables,n=e.layout,o=null;return function(e){var r=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize,u=i.pos,c=i.shadowBeginEnd;if(null!==u){if(null===a||!r.invalidateShadow&&a===o)return null;o&&(o=a);var d=a-1,f=0,g=null,p=null;if(d===l&&d--,d>-1){var m=n.getSize(t[d]);if(p=n.getBeginEnd(t[d]),s<m){var v=(m-s)/2;f=p.end-v}else f=p.end}else p={end:n.getBeginEndOfContainer().begin};var h=1e4,b=a;if(b===l&&b++,b<t.length){var y=n.getSize(t[b]);if(g=n.getBeginEnd(t[b]),s<y){var C=(y-s)/2;h=g.begin+C}else h=g.begin}else g={begin:n.getContainerRectangles().end};return{shadowBeginEnd:{begin:f,end:h,rect:p&&g?n.getTopLeftOfElementBegin(p.end,g.begin):null,beginAdjustment:c?c.beginAdjustment:0}}}return o=null,{shadowBeginEnd:null}}}function A(){var e=null;return function(t){var n=t.dragResult,o=n.pos,r=n.addedIndex,i=n.shadowBeginEnd;t.draggableInfo.invalidateShadow;if(null!==o){if(null!=r&&null===e){if(o<i.begin){var a=o-i.begin-5;i.beginAdjustment=a}e=r}}else e=null}}function z(e){var t=e.options,n=!1;return function(e){var o=!!e.dragResult.pos;if(o!==n){if(n=o,!o)return t.onDragLeave&&t.onDragLeave(),{dragLeft:!0};t.onDragEnter&&t.onDragEnter()}}}function B(e){return"drop-zone"===e.options.behaviour?M(e)(b,y,C,E,x,w,S,O,z):M(e)(b,y,C,E,x,w,D,I,P,R,T,_,A,z)}function M(e){return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=n.map(function(t){return t(e)}),i=null;return function(e){return i=r.reduce(function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))},i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function j(e){return function(t){var n=null,o=null,r=v(e,t),a=B(r),s=m(r),u=null,d=!1,p=[];function b(){null!==o&&(o.invalidateShadow=!0,n=a(o),o.invalidateShadow=!1)}function y(e){d=e,u&&(u.onChildPositionCaptured(e),o&&(n=a(o)))}function C(e,t,n){for(var o=g(t,n.orientation,n.animationDuration),r=0;r<o.length;r++)e[r]=o[r];for(var i=0;i<e.length-o.length;i++)e.pop()}return r.layout.setScrollListener(function(){b()}),{element:e,draggables:r.draggables,isDragRelevant:function(e){var t=e.element,n=e.options;return function(e,o){if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),o);var r=e.getOptions();return"copy"!==n.behaviour&&(0,i.getParent)(t,"."+l.wrapperClass)!==e.element&&(e.element===t||!(!r.groupName||r.groupName!==n.groupName))}}(r),getScale:r.layout.getContainerScale,layout:r.layout,getChildContainers:function(){return p},onChildPositionCaptured:y,dispose:function(e){var t;t=e.element,Array.prototype.map.call(t.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var n=e;(0,i.hasClass)(e,l.wrapperClass)&&(t.insertBefore(n,f.firstElementChild),t.removeChild(n))}})},prepareDrag:function(e,t){var n=e.element,o=r.draggables,i=e.getOptions();C(o,n,i),e.layout.invalidateRects(),h(e,t),o.forEach(function(e){return c(e,!0,i.animationDuration)})},isPosInChildContainer:function(){return d},handleDrag:function(e){return o=e,(n=a(e)).dragLeft&&"drop-zone"!==r.options.behaviour&&(n.dragLeft=!1,setTimeout(function(){n&&T(r)({dragResult:n})},20)),n},handleDrop:function(e){o=null,y(!1),a=B(r),s(e,n),n=null,u=null,p=[]},getDragResult:function(){return n},getTranslateCalculator:function(){return T(r).apply(void 0,arguments)},setParentContainer:function(e){u=e},getParentContainer:function(){return u},onTranslated:function(){b()},getOptions:function(){return r.options},setDraggables:function(){C(r.draggables,e,r.options)}}}}function L(e,t){var n=j(e)(t);return e[l.containerInstance]=n,o.default.register(n),{dispose:function(){o.default.unregister(n),n.layout.dispose(),n.dispose(n)}}}t.default=L},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropHandlers=t.constants=void 0;var o,r=n(8),i=(o=r)&&o.__esModule?o:{default:o},a=s(n(0)),l=s(n(2));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=i.default,t.constants=a,t.dropHandlers=l}])});