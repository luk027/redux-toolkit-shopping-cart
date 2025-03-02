var _v=Object.defineProperty;var Rv=(t,r,i)=>r in t?_v(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var nu=(t,r,i)=>Rv(t,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function ei(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tu={exports:{}},zo={},ru={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Tv(){if(_p)return ge;_p=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function y(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,v={};function S(j,H,ie){this.props=j,this.context=H,this.refs=v,this.updater=ie||E}S.prototype.isReactComponent={},S.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},S.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function _(){}_.prototype=S.prototype;function C(j,H,ie){this.props=j,this.context=H,this.refs=v,this.updater=ie||E}var O=C.prototype=new _;O.constructor=C,x(O,S.prototype),O.isPureReactComponent=!0;var P=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function I(j,H,ie){var te,he={},ye=null,Se=null;if(H!=null)for(te in H.ref!==void 0&&(Se=H.ref),H.key!==void 0&&(ye=""+H.key),H)D.call(H,te)&&!T.hasOwnProperty(te)&&(he[te]=H[te]);var xe=arguments.length-2;if(xe===1)he.children=ie;else if(1<xe){for(var Ee=Array(xe),Qe=0;Qe<xe;Qe++)Ee[Qe]=arguments[Qe+2];he.children=Ee}if(j&&j.defaultProps)for(te in xe=j.defaultProps,xe)he[te]===void 0&&(he[te]=xe[te]);return{$$typeof:t,type:j,key:ye,ref:Se,props:he,_owner:N.current}}function A(j,H){return{$$typeof:t,type:j.type,key:H,ref:j.ref,props:j.props,_owner:j._owner}}function $(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function W(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ie){return H[ie]})}var G=/\/+/g;function J(j,H){return typeof j=="object"&&j!==null&&j.key!=null?W(""+j.key):H.toString(36)}function Z(j,H,ie,te,he){var ye=typeof j;(ye==="undefined"||ye==="boolean")&&(j=null);var Se=!1;if(j===null)Se=!0;else switch(ye){case"string":case"number":Se=!0;break;case"object":switch(j.$$typeof){case t:case r:Se=!0}}if(Se)return Se=j,he=he(Se),j=te===""?"."+J(Se,0):te,P(he)?(ie="",j!=null&&(ie=j.replace(G,"$&/")+"/"),Z(he,H,ie,"",function(Qe){return Qe})):he!=null&&($(he)&&(he=A(he,ie+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(G,"$&/")+"/")+j)),H.push(he)),1;if(Se=0,te=te===""?".":te+":",P(j))for(var xe=0;xe<j.length;xe++){ye=j[xe];var Ee=te+J(ye,xe);Se+=Z(ye,H,ie,Ee,he)}else if(Ee=y(j),typeof Ee=="function")for(j=Ee.call(j),xe=0;!(ye=j.next()).done;)ye=ye.value,Ee=te+J(ye,xe++),Se+=Z(ye,H,ie,Ee,he);else if(ye==="object")throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Se}function se(j,H,ie){if(j==null)return j;var te=[],he=0;return Z(j,te,"","",function(ye){return H.call(ie,ye,he++)}),te}function ce(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(ie){(j._status===0||j._status===-1)&&(j._status=1,j._result=ie)},function(ie){(j._status===0||j._status===-1)&&(j._status=2,j._result=ie)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var pe={current:null},B={transition:null},ee={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function K(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:se,forEach:function(j,H,ie){se(j,function(){H.apply(this,arguments)},ie)},count:function(j){var H=0;return se(j,function(){H++}),H},toArray:function(j){return se(j,function(H){return H})||[]},only:function(j){if(!$(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},ge.Component=S,ge.Fragment=i,ge.Profiler=s,ge.PureComponent=C,ge.StrictMode=a,ge.Suspense=p,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ge.act=K,ge.cloneElement=function(j,H,ie){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var te=x({},j.props),he=j.key,ye=j.ref,Se=j._owner;if(H!=null){if(H.ref!==void 0&&(ye=H.ref,Se=N.current),H.key!==void 0&&(he=""+H.key),j.type&&j.type.defaultProps)var xe=j.type.defaultProps;for(Ee in H)D.call(H,Ee)&&!T.hasOwnProperty(Ee)&&(te[Ee]=H[Ee]===void 0&&xe!==void 0?xe[Ee]:H[Ee])}var Ee=arguments.length-2;if(Ee===1)te.children=ie;else if(1<Ee){xe=Array(Ee);for(var Qe=0;Qe<Ee;Qe++)xe[Qe]=arguments[Qe+2];te.children=xe}return{$$typeof:t,type:j.type,key:he,ref:ye,props:te,_owner:Se}},ge.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},ge.createElement=I,ge.createFactory=function(j){var H=I.bind(null,j);return H.type=j,H},ge.createRef=function(){return{current:null}},ge.forwardRef=function(j){return{$$typeof:h,render:j}},ge.isValidElement=$,ge.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:ce}},ge.memo=function(j,H){return{$$typeof:m,type:j,compare:H===void 0?null:H}},ge.startTransition=function(j){var H=B.transition;B.transition={};try{j()}finally{B.transition=H}},ge.unstable_act=K,ge.useCallback=function(j,H){return pe.current.useCallback(j,H)},ge.useContext=function(j){return pe.current.useContext(j)},ge.useDebugValue=function(){},ge.useDeferredValue=function(j){return pe.current.useDeferredValue(j)},ge.useEffect=function(j,H){return pe.current.useEffect(j,H)},ge.useId=function(){return pe.current.useId()},ge.useImperativeHandle=function(j,H,ie){return pe.current.useImperativeHandle(j,H,ie)},ge.useInsertionEffect=function(j,H){return pe.current.useInsertionEffect(j,H)},ge.useLayoutEffect=function(j,H){return pe.current.useLayoutEffect(j,H)},ge.useMemo=function(j,H){return pe.current.useMemo(j,H)},ge.useReducer=function(j,H,ie){return pe.current.useReducer(j,H,ie)},ge.useRef=function(j){return pe.current.useRef(j)},ge.useState=function(j){return pe.current.useState(j)},ge.useSyncExternalStore=function(j,H,ie){return pe.current.useSyncExternalStore(j,H,ie)},ge.useTransition=function(){return pe.current.useTransition()},ge.version="18.3.1",ge}var Rp;function Xa(){return Rp||(Rp=1,ru.exports=Tv()),ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Nv(){if(Tp)return zo;Tp=1;var t=Xa(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var b,w={},y=null,E=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(E=p.ref);for(b in p)a.call(p,b)&&!c.hasOwnProperty(b)&&(w[b]=p[b]);if(h&&h.defaultProps)for(b in p=h.defaultProps,p)w[b]===void 0&&(w[b]=p[b]);return{$$typeof:r,type:h,key:y,ref:E,props:w,_owner:s.current}}return zo.Fragment=i,zo.jsx=d,zo.jsxs=d,zo}var Np;function zv(){return Np||(Np=1,tu.exports=Nv()),tu.exports}var U=zv(),k=Xa();const Ce=ei(k);var ga={},ou={exports:{}},un={},iu={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Dv(){return zp||(zp=1,function(t){function r(B,ee){var K=B.length;B.push(ee);e:for(;0<K;){var j=K-1>>>1,H=B[j];if(0<s(H,ee))B[j]=ee,B[K]=H,K=j;else break e}}function i(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var ee=B[0],K=B.pop();if(K!==ee){B[0]=K;e:for(var j=0,H=B.length,ie=H>>>1;j<ie;){var te=2*(j+1)-1,he=B[te],ye=te+1,Se=B[ye];if(0>s(he,K))ye<H&&0>s(Se,he)?(B[j]=Se,B[ye]=K,j=ye):(B[j]=he,B[te]=K,j=te);else if(ye<H&&0>s(Se,K))B[j]=Se,B[ye]=K,j=ye;else break e}}return ee}function s(B,ee){var K=B.sortIndex-ee.sortIndex;return K!==0?K:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],m=[],b=1,w=null,y=3,E=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(B){for(var ee=i(m);ee!==null;){if(ee.callback===null)a(m);else if(ee.startTime<=B)a(m),ee.sortIndex=ee.expirationTime,r(p,ee);else break;ee=i(m)}}function P(B){if(v=!1,O(B),!x)if(i(p)!==null)x=!0,ce(D);else{var ee=i(m);ee!==null&&pe(P,ee.startTime-B)}}function D(B,ee){x=!1,v&&(v=!1,_(I),I=-1),E=!0;var K=y;try{for(O(ee),w=i(p);w!==null&&(!(w.expirationTime>ee)||B&&!W());){var j=w.callback;if(typeof j=="function"){w.callback=null,y=w.priorityLevel;var H=j(w.expirationTime<=ee);ee=t.unstable_now(),typeof H=="function"?w.callback=H:w===i(p)&&a(p),O(ee)}else a(p);w=i(p)}if(w!==null)var ie=!0;else{var te=i(m);te!==null&&pe(P,te.startTime-ee),ie=!1}return ie}finally{w=null,y=K,E=!1}}var N=!1,T=null,I=-1,A=5,$=-1;function W(){return!(t.unstable_now()-$<A)}function G(){if(T!==null){var B=t.unstable_now();$=B;var ee=!0;try{ee=T(!0,B)}finally{ee?J():(N=!1,T=null)}}else N=!1}var J;if(typeof C=="function")J=function(){C(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=G,J=function(){se.postMessage(null)}}else J=function(){S(G,0)};function ce(B){T=B,N||(N=!0,J())}function pe(B,ee){I=S(function(){B(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||E||(x=!0,ce(D))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return i(p)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var K=y;y=ee;try{return B()}finally{y=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=y;y=B;try{return ee()}finally{y=K}},t.unstable_scheduleCallback=function(B,ee,K){var j=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?j+K:j):K=j,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=K+H,B={id:b++,callback:ee,priorityLevel:B,startTime:K,expirationTime:H,sortIndex:-1},K>j?(B.sortIndex=K,r(m,B),i(p)===null&&B===i(m)&&(v?(_(I),I=-1):v=!0,pe(P,K-j))):(B.sortIndex=H,r(p,B),x||E||(x=!0,ce(D))),B},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(B){var ee=y;return function(){var K=y;y=ee;try{return B.apply(this,arguments)}finally{y=K}}}}(au)),au}var Dp;function Mv(){return Dp||(Dp=1,iu.exports=Dv()),iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function jv(){if(Mp)return un;Mp=1;var t=Xa(),r=Mv();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(s[e]=n,e=0;e<n.length;e++)a.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function y(e){return p.call(w,e)?!0:p.call(b,e)?!1:m.test(e)?w[e]=!0:(b[e]=!0,!1)}function E(e,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x(e,n,o,l){if(n===null||typeof n>"u"||E(e,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function v(e,n,o,l,u,f,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=f,this.removeEmptyString=g}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new v(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];S[n]=new v(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new v(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new v(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new v(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new v(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(_,C);S[n]=new v(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(_,C);S[n]=new v(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(_,C);S[n]=new v(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,n,o,l){var u=S.hasOwnProperty(n)?S[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(x(n,o,u,l)&&(o=null),l||u===null?y(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,n,o):e.setAttribute(n,o))))}var P=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),W=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,j;function H(e){if(j===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);j=n&&n[1]||""}return`
`+j+e}var ie=!1;function te(e,n){if(!e||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(q){var l=q}Reflect.construct(e,[],n)}else{try{n.call()}catch(q){l=q}e.call(n.prototype)}else{try{throw Error()}catch(q){l=q}e()}}catch(q){if(q&&l&&typeof q.stack=="string"){for(var u=q.stack.split(`
`),f=l.stack.split(`
`),g=u.length-1,R=f.length-1;1<=g&&0<=R&&u[g]!==f[R];)R--;for(;1<=g&&0<=R;g--,R--)if(u[g]!==f[R]){if(g!==1||R!==1)do if(g--,R--,0>R||u[g]!==f[R]){var z=`
`+u[g].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=g&&0<=R);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?H(e):""}function he(e){switch(e.tag){case 5:return H(e.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case N:return"Portal";case A:return"Profiler";case I:return"StrictMode";case J:return"Suspense";case Z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case W:return(e.displayName||"Context")+".Consumer";case $:return(e._context.displayName||"Context")+".Provider";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}function Se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e){var n=Ee(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ir(e){e._valueTracker||(e._valueTracker=Qe(e))}function Hr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return e&&(l=Ee(e)?e.checked?"true":"false":e.value),e=l,e!==o?(n.setValue(e),!0):!1}function ut(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ct(e,n){var o=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Te(e,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=xe(n.value!=null?n.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wr(e,n){n=n.checked,n!=null&&O(e,"checked",n,!1)}function Ft(e,n){Wr(e,n);var o=xe(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cl(e,n.type,o):n.hasOwnProperty("defaultValue")&&cl(e,n.type,xe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ic(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function cl(e,n,o){(n!=="number"||ut(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Qr=Array.isArray;function ar(e,n,o,l){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+xe(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function fl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Qr(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:xe(o)}}function Ac(e,n){var o=xe(n.value),l=xe(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function Fc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,l,u)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vr(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dg=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Dg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Kr[n]=Kr[e]})});function Uc(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+n).trim():n+"px"}function Bc(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Uc(o,n[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var Mg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,n){if(n){if(Mg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function hl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,lr=null,sr=null;function Hc(e){if(e=yo(e)){if(typeof yl!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ni(n),yl(e.stateNode,e.type,n))}}function Wc(e){lr?sr?sr.push(e):sr=[e]:lr=e}function Qc(){if(lr){var e=lr,n=sr;if(sr=lr=null,Hc(e),n)for(e=0;e<n.length;e++)Hc(n[e])}}function Vc(e,n){return e(n)}function Kc(){}var vl=!1;function Xc(e,n,o){if(vl)return e(n,o);vl=!0;try{return Vc(e,n,o)}finally{vl=!1,(lr!==null||sr!==null)&&(Kc(),Qc())}}function Xr(e,n){var o=e.stateNode;if(o===null)return null;var l=Ni(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var bl=!1;if(h)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{bl=!1}function jg(e,n,o,l,u,f,g,R,z){var q=Array.prototype.slice.call(arguments,3);try{n.apply(o,q)}catch(V){this.onError(V)}}var Gr=!1,ui=null,ci=!1,xl=null,Ig={onError:function(e){Gr=!0,ui=e}};function Lg(e,n,o,l,u,f,g,R,z){Gr=!1,ui=null,jg.apply(Ig,arguments)}function Ag(e,n,o,l,u,f,g,R,z){if(Lg.apply(this,arguments),Gr){if(Gr){var q=ui;Gr=!1,ui=null}else throw Error(i(198));ci||(ci=!0,xl=q)}}function $t(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function Yc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gc(e){if($t(e)!==e)throw Error(i(188))}function Fg(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,l=n;;){var u=o.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===o)return Gc(u),e;if(f===l)return Gc(u),n;f=f.sibling}throw Error(i(188))}if(o.return!==l.return)o=u,l=f;else{for(var g=!1,R=u.child;R;){if(R===o){g=!0,o=u,l=f;break}if(R===l){g=!0,l=u,o=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===o){g=!0,o=f,l=u;break}if(R===l){g=!0,l=f,o=u;break}R=R.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function Jc(e){return e=Fg(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Zc(e);if(n!==null)return n;e=e.sibling}return null}var ef=r.unstable_scheduleCallback,nf=r.unstable_cancelCallback,$g=r.unstable_shouldYield,qg=r.unstable_requestPaint,Le=r.unstable_now,Ug=r.unstable_getCurrentPriorityLevel,wl=r.unstable_ImmediatePriority,tf=r.unstable_UserBlockingPriority,fi=r.unstable_NormalPriority,Bg=r.unstable_LowPriority,rf=r.unstable_IdlePriority,di=null,An=null;function Hg(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:Vg,Wg=Math.log,Qg=Math.LN2;function Vg(e){return e>>>=0,e===0?32:31-(Wg(e)/Qg|0)|0}var pi=64,hi=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes,g=o&268435455;if(g!==0){var R=g&~u;R!==0?l=Jr(R):(f&=g,f!==0&&(l=Jr(f)))}else g=o&~u,g!==0?l=Jr(g):f!==0&&(l=Jr(f));if(l===0)return 0;if(n!==0&&n!==l&&!(n&u)&&(u=l&-l,f=n&-n,u>=f||u===16&&(f&4194240)!==0))return n;if(l&4&&(l|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)o=31-Sn(n),u=1<<o,l|=e[o],n&=~u;return l}function Kg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xg(e,n){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes;0<f;){var g=31-Sn(f),R=1<<g,z=u[g];z===-1?(!(R&o)||R&l)&&(u[g]=Kg(R,n)):z<=n&&(e.expiredLanes|=R),f&=~R}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function of(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Sl(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function Zr(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Sn(n),e[n]=o}function Yg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Sn(o),f=1<<u;n[u]=0,l[u]=-1,e[u]=-1,o&=~f}}function El(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var l=31-Sn(o),u=1<<l;u&n|e[l]&n&&(e[l]|=n),o&=~u}}var ke=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,Ol,sf,uf,cf,Cl=!1,gi=[],ft=null,dt=null,pt=null,eo=new Map,no=new Map,ht=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(e,n){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(n.pointerId)}}function to(e,n,o,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=yo(n),n!==null&&Ol(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Jg(e,n,o,l,u){switch(n){case"focusin":return ft=to(ft,e,n,o,l,u),!0;case"dragenter":return dt=to(dt,e,n,o,l,u),!0;case"mouseover":return pt=to(pt,e,n,o,l,u),!0;case"pointerover":var f=u.pointerId;return eo.set(f,to(eo.get(f)||null,e,n,o,l,u)),!0;case"gotpointercapture":return f=u.pointerId,no.set(f,to(no.get(f)||null,e,n,o,l,u)),!0}return!1}function df(e){var n=qt(e.target);if(n!==null){var o=$t(n);if(o!==null){if(n=o.tag,n===13){if(n=Yc(o),n!==null){e.blockedOn=n,cf(e.priority,function(){sf(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=_l(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);ml=l,o.target.dispatchEvent(l),ml=null}else return n=yo(o),n!==null&&Ol(n),e.blockedOn=o,!1;n.shift()}return!0}function pf(e,n,o){yi(e)&&o.delete(n)}function Zg(){Cl=!1,ft!==null&&yi(ft)&&(ft=null),dt!==null&&yi(dt)&&(dt=null),pt!==null&&yi(pt)&&(pt=null),eo.forEach(pf),no.forEach(pf)}function ro(e,n){e.blockedOn===n&&(e.blockedOn=null,Cl||(Cl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zg)))}function oo(e){function n(u){return ro(u,e)}if(0<gi.length){ro(gi[0],e);for(var o=1;o<gi.length;o++){var l=gi[o];l.blockedOn===e&&(l.blockedOn=null)}}for(ft!==null&&ro(ft,e),dt!==null&&ro(dt,e),pt!==null&&ro(pt,e),eo.forEach(n),no.forEach(n),o=0;o<ht.length;o++)l=ht[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<ht.length&&(o=ht[0],o.blockedOn===null);)df(o),o.blockedOn===null&&ht.shift()}var ur=P.ReactCurrentBatchConfig,vi=!0;function ey(e,n,o,l){var u=ke,f=ur.transition;ur.transition=null;try{ke=1,Pl(e,n,o,l)}finally{ke=u,ur.transition=f}}function ny(e,n,o,l){var u=ke,f=ur.transition;ur.transition=null;try{ke=4,Pl(e,n,o,l)}finally{ke=u,ur.transition=f}}function Pl(e,n,o,l){if(vi){var u=_l(e,n,o,l);if(u===null)Wl(e,n,l,bi,o),ff(e,l);else if(Jg(u,e,n,o,l))l.stopPropagation();else if(ff(e,l),n&4&&-1<Gg.indexOf(e)){for(;u!==null;){var f=yo(u);if(f!==null&&lf(f),f=_l(e,n,o,l),f===null&&Wl(e,n,l,bi,o),f===u)break;u=f}u!==null&&l.stopPropagation()}else Wl(e,n,l,null,o)}}var bi=null;function _l(e,n,o,l){if(bi=null,e=gl(l),e=qt(e),e!==null)if(n=$t(e),n===null)e=null;else if(o=n.tag,o===13){if(e=Yc(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bi=e,null}function hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ug()){case wl:return 1;case tf:return 4;case fi:case Bg:return 16;case rf:return 536870912;default:return 16}default:return 16}}var mt=null,Rl=null,xi=null;function mf(){if(xi)return xi;var e,n=Rl,o=n.length,l,u="value"in mt?mt.value:mt.textContent,f=u.length;for(e=0;e<o&&n[e]===u[e];e++);var g=o-e;for(l=1;l<=g&&n[o-l]===u[f-l];l++);return xi=u.slice(e,1<l?1-l:void 0)}function wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function gf(){return!1}function fn(e){function n(o,l,u,f,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(o=e[R],this[R]=o?o(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ki:gf,this.isPropagationStopped=gf,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=fn(cr),io=K({},cr,{view:0,detail:0}),ty=fn(io),Nl,zl,ao,Si=K({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(Nl=e.screenX-ao.screenX,zl=e.screenY-ao.screenY):zl=Nl=0,ao=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),yf=fn(Si),ry=K({},Si,{dataTransfer:0}),oy=fn(ry),iy=K({},io,{relatedTarget:0}),Dl=fn(iy),ay=K({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=fn(ay),sy=K({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=fn(sy),cy=K({},cr,{data:0}),vf=fn(cy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=py[e])?!!n[e]:!1}function Ml(){return hy}var my=K({},io,{key:function(e){if(e.key){var n=fy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gy=fn(my),yy=K({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=fn(yy),vy=K({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),by=fn(vy),xy=K({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=fn(xy),ky=K({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=fn(ky),Ey=[9,13,27,32],jl=h&&"CompositionEvent"in window,lo=null;h&&"documentMode"in document&&(lo=document.documentMode);var Oy=h&&"TextEvent"in window&&!lo,xf=h&&(!jl||lo&&8<lo&&11>=lo),wf=" ",kf=!1;function Sf(e,n){switch(e){case"keyup":return Ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Cy(e,n){switch(e){case"compositionend":return Ef(n);case"keypress":return n.which!==32?null:(kf=!0,wf);case"textInput":return e=n.data,e===wf&&kf?null:e;default:return null}}function Py(e,n){if(fr)return e==="compositionend"||!jl&&Sf(e,n)?(e=mf(),xi=Rl=mt=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xf&&n.locale!=="ko"?null:n.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_y[e.type]:n==="textarea"}function Cf(e,n,o,l){Wc(l),n=_i(n,"onChange"),0<n.length&&(o=new Tl("onChange","change",null,o,l),e.push({event:o,listeners:n}))}var so=null,uo=null;function Ry(e){Hf(e,0)}function Ei(e){var n=gr(e);if(Hr(n))return e}function Ty(e,n){if(e==="change")return n}var Pf=!1;if(h){var Il;if(h){var Ll="oninput"in document;if(!Ll){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Ll=typeof _f.oninput=="function"}Il=Ll}else Il=!1;Pf=Il&&(!document.documentMode||9<document.documentMode)}function Rf(){so&&(so.detachEvent("onpropertychange",Tf),uo=so=null)}function Tf(e){if(e.propertyName==="value"&&Ei(uo)){var n=[];Cf(n,uo,e,gl(e)),Xc(Ry,n)}}function Ny(e,n,o){e==="focusin"?(Rf(),so=n,uo=o,so.attachEvent("onpropertychange",Tf)):e==="focusout"&&Rf()}function zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(uo)}function Dy(e,n){if(e==="click")return Ei(n)}function My(e,n){if(e==="input"||e==="change")return Ei(n)}function jy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:jy;function co(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(n,u)||!En(e[u],n[u]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,n){var o=Nf(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=n&&l>=n)return{node:o,offset:n-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nf(o)}}function Df(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Df(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mf(){for(var e=window,n=ut();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=ut(e.document)}return n}function Al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Iy(e){var n=Mf(),o=e.focusedElem,l=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Df(o.ownerDocument.documentElement,o)){if(l!==null&&Al(o)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,f=Math.min(l.start,u);l=l.end===void 0?f:Math.min(l.end,u),!e.extend&&f>l&&(u=l,l=f,f=u),u=zf(o,f);var g=zf(o,l);u&&g&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),f>l?(e.addRange(n),e.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ly=h&&"documentMode"in document&&11>=document.documentMode,dr=null,Fl=null,fo=null,$l=!1;function jf(e,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$l||dr==null||dr!==ut(l)||(l=dr,"selectionStart"in l&&Al(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=_i(Fl,"onSelect"),0<l.length&&(n=new Tl("onSelect","select",null,n,o),e.push({event:n,listeners:l}),n.target=dr)))}function Oi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var pr={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},ql={},If={};h&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Ci(e){if(ql[e])return ql[e];if(!pr[e])return e;var n=pr[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in If)return ql[e]=n[o];return e}var Lf=Ci("animationend"),Af=Ci("animationiteration"),Ff=Ci("animationstart"),$f=Ci("transitionend"),qf=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,n){qf.set(e,n),c(n,[e])}for(var Ul=0;Ul<Uf.length;Ul++){var Bl=Uf[Ul],Ay=Bl.toLowerCase(),Fy=Bl[0].toUpperCase()+Bl.slice(1);gt(Ay,"on"+Fy)}gt(Lf,"onAnimationEnd"),gt(Af,"onAnimationIteration"),gt(Ff,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt($f,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Bf(e,n,o){var l=e.type||"unknown-event";e.currentTarget=o,Ag(l,n,void 0,e),e.currentTarget=null}function Hf(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var g=l.length-1;0<=g;g--){var R=l[g],z=R.instance,q=R.currentTarget;if(R=R.listener,z!==f&&u.isPropagationStopped())break e;Bf(u,R,q),f=z}else for(g=0;g<l.length;g++){if(R=l[g],z=R.instance,q=R.currentTarget,R=R.listener,z!==f&&u.isPropagationStopped())break e;Bf(u,R,q),f=z}}}if(ci)throw e=xl,ci=!1,xl=null,e}function _e(e,n){var o=n[Gl];o===void 0&&(o=n[Gl]=new Set);var l=e+"__bubble";o.has(l)||(Wf(n,e,2,!1),o.add(l))}function Hl(e,n,o){var l=0;n&&(l|=4),Wf(o,e,l,n)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[Pi]){e[Pi]=!0,a.forEach(function(o){o!=="selectionchange"&&($y.has(o)||Hl(o,!1,e),Hl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pi]||(n[Pi]=!0,Hl("selectionchange",!1,n))}}function Wf(e,n,o,l){switch(hf(n)){case 1:var u=ey;break;case 4:u=ny;break;default:u=Pl}o=u.bind(null,n,o,e),u=void 0,!bl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function Wl(e,n,o,l,u){var f=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var R=l.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var z=g.tag;if((z===3||z===4)&&(z=g.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;g=g.return}for(;R!==null;){if(g=qt(R),g===null)return;if(z=g.tag,z===5||z===6){l=f=g;continue e}R=R.parentNode}}l=l.return}Xc(function(){var q=f,V=gl(o),X=[];e:{var Q=qf.get(e);if(Q!==void 0){var ne=Tl,oe=e;switch(e){case"keypress":if(wi(o)===0)break e;case"keydown":case"keyup":ne=gy;break;case"focusin":oe="focus",ne=Dl;break;case"focusout":oe="blur",ne=Dl;break;case"beforeblur":case"afterblur":ne=Dl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=by;break;case Lf:case Af:case Ff:ne=ly;break;case $f:ne=wy;break;case"scroll":ne=ty;break;case"wheel":ne=Sy;break;case"copy":case"cut":case"paste":ne=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=bf}var ae=(n&4)!==0,Ae=!ae&&e==="scroll",L=ae?Q!==null?Q+"Capture":null:Q;ae=[];for(var M=q,F;M!==null;){F=M;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,L!==null&&(Y=Xr(M,L),Y!=null&&ae.push(mo(M,Y,F)))),Ae)break;M=M.return}0<ae.length&&(Q=new ne(Q,oe,null,o,V),X.push({event:Q,listeners:ae}))}}if(!(n&7)){e:{if(Q=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",Q&&o!==ml&&(oe=o.relatedTarget||o.fromElement)&&(qt(oe)||oe[Vn]))break e;if((ne||Q)&&(Q=V.window===V?V:(Q=V.ownerDocument)?Q.defaultView||Q.parentWindow:window,ne?(oe=o.relatedTarget||o.toElement,ne=q,oe=oe?qt(oe):null,oe!==null&&(Ae=$t(oe),oe!==Ae||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=q),ne!==oe)){if(ae=yf,Y="onMouseLeave",L="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ae=bf,Y="onPointerLeave",L="onPointerEnter",M="pointer"),Ae=ne==null?Q:gr(ne),F=oe==null?Q:gr(oe),Q=new ae(Y,M+"leave",ne,o,V),Q.target=Ae,Q.relatedTarget=F,Y=null,qt(V)===q&&(ae=new ae(L,M+"enter",oe,o,V),ae.target=F,ae.relatedTarget=Ae,Y=ae),Ae=Y,ne&&oe)n:{for(ae=ne,L=oe,M=0,F=ae;F;F=hr(F))M++;for(F=0,Y=L;Y;Y=hr(Y))F++;for(;0<M-F;)ae=hr(ae),M--;for(;0<F-M;)L=hr(L),F--;for(;M--;){if(ae===L||L!==null&&ae===L.alternate)break n;ae=hr(ae),L=hr(L)}ae=null}else ae=null;ne!==null&&Qf(X,Q,ne,ae,!1),oe!==null&&Ae!==null&&Qf(X,Ae,oe,ae,!0)}}e:{if(Q=q?gr(q):window,ne=Q.nodeName&&Q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Q.type==="file")var le=Ty;else if(Of(Q))if(Pf)le=My;else{le=zy;var fe=Ny}else(ne=Q.nodeName)&&ne.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(le=Dy);if(le&&(le=le(e,q))){Cf(X,le,o,V);break e}fe&&fe(e,Q,q),e==="focusout"&&(fe=Q._wrapperState)&&fe.controlled&&Q.type==="number"&&cl(Q,"number",Q.value)}switch(fe=q?gr(q):window,e){case"focusin":(Of(fe)||fe.contentEditable==="true")&&(dr=fe,Fl=q,fo=null);break;case"focusout":fo=Fl=dr=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,jf(X,o,V);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":jf(X,o,V)}var de;if(jl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else fr?Sf(e,o)&&(me="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(xf&&o.locale!=="ko"&&(fr||me!=="onCompositionStart"?me==="onCompositionEnd"&&fr&&(de=mf()):(mt=V,Rl="value"in mt?mt.value:mt.textContent,fr=!0)),fe=_i(q,me),0<fe.length&&(me=new vf(me,e,null,o,V),X.push({event:me,listeners:fe}),de?me.data=de:(de=Ef(o),de!==null&&(me.data=de)))),(de=Oy?Cy(e,o):Py(e,o))&&(q=_i(q,"onBeforeInput"),0<q.length&&(V=new vf("onBeforeInput","beforeinput",null,o,V),X.push({event:V,listeners:q}),V.data=de))}Hf(X,n)})}function mo(e,n,o){return{instance:e,listener:n,currentTarget:o}}function _i(e,n){for(var o=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=Xr(e,o),f!=null&&l.unshift(mo(e,f,u)),f=Xr(e,n),f!=null&&l.push(mo(e,f,u))),e=e.return}return l}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qf(e,n,o,l,u){for(var f=n._reactName,g=[];o!==null&&o!==l;){var R=o,z=R.alternate,q=R.stateNode;if(z!==null&&z===l)break;R.tag===5&&q!==null&&(R=q,u?(z=Xr(o,f),z!=null&&g.unshift(mo(o,z,R))):u||(z=Xr(o,f),z!=null&&g.push(mo(o,z,R)))),o=o.return}g.length!==0&&e.push({event:n,listeners:g})}var qy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(qy,`
`).replace(Uy,"")}function Ri(e,n,o){if(n=Vf(n),Vf(e)!==n&&o)throw Error(i(425))}function Ti(){}var Ql=null,Vl=null;function Kl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(e){return Kf.resolve(null).then(e).catch(Wy)}:Xl;function Wy(e){setTimeout(function(){throw e})}function Yl(e,n){var o=n,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),oo(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);oo(n)}function yt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Fn="__reactFiber$"+mr,go="__reactProps$"+mr,Vn="__reactContainer$"+mr,Gl="__reactEvents$"+mr,Qy="__reactListeners$"+mr,Vy="__reactHandles$"+mr;function qt(e){var n=e[Fn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Vn]||o[Fn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=Xf(e);e!==null;){if(o=e[Fn])return o;e=Xf(e)}return n}e=o,o=e.parentNode}return null}function yo(e){return e=e[Fn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ni(e){return e[go]||null}var Jl=[],yr=-1;function vt(e){return{current:e}}function Re(e){0>yr||(e.current=Jl[yr],Jl[yr]=null,yr--)}function Oe(e,n){yr++,Jl[yr]=e.current,e.current=n}var bt={},Ge=vt(bt),rn=vt(!1),Ut=bt;function vr(e,n){var o=e.type.contextTypes;if(!o)return bt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in o)u[f]=n[f];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function on(e){return e=e.childContextTypes,e!=null}function zi(){Re(rn),Re(Ge)}function Yf(e,n,o){if(Ge.current!==bt)throw Error(i(168));Oe(Ge,n),Oe(rn,o)}function Gf(e,n,o){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(i(108,Se(e)||"Unknown",u));return K({},o,l)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Ut=Ge.current,Oe(Ge,e),Oe(rn,rn.current),!0}function Jf(e,n,o){var l=e.stateNode;if(!l)throw Error(i(169));o?(e=Gf(e,n,Ut),l.__reactInternalMemoizedMergedChildContext=e,Re(rn),Re(Ge),Oe(Ge,e)):Re(rn),Oe(rn,o)}var Kn=null,Mi=!1,Zl=!1;function Zf(e){Kn===null?Kn=[e]:Kn.push(e)}function Ky(e){Mi=!0,Zf(e)}function xt(){if(!Zl&&Kn!==null){Zl=!0;var e=0,n=ke;try{var o=Kn;for(ke=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}Kn=null,Mi=!1}catch(u){throw Kn!==null&&(Kn=Kn.slice(e+1)),ef(wl,xt),u}finally{ke=n,Zl=!1}}return null}var br=[],xr=0,ji=null,Ii=0,yn=[],vn=0,Bt=null,Xn=1,Yn="";function Ht(e,n){br[xr++]=Ii,br[xr++]=ji,ji=e,Ii=n}function ed(e,n,o){yn[vn++]=Xn,yn[vn++]=Yn,yn[vn++]=Bt,Bt=e;var l=Xn;e=Yn;var u=32-Sn(l)-1;l&=~(1<<u),o+=1;var f=32-Sn(n)+u;if(30<f){var g=u-u%5;f=(l&(1<<g)-1).toString(32),l>>=g,u-=g,Xn=1<<32-Sn(n)+u|o<<u|l,Yn=f+e}else Xn=1<<f|o<<u|l,Yn=e}function es(e){e.return!==null&&(Ht(e,1),ed(e,1,0))}function ns(e){for(;e===ji;)ji=br[--xr],br[xr]=null,Ii=br[--xr],br[xr]=null;for(;e===Bt;)Bt=yn[--vn],yn[vn]=null,Yn=yn[--vn],yn[vn]=null,Xn=yn[--vn],yn[vn]=null}var dn=null,pn=null,Ne=!1,On=null;function nd(e,n){var o=kn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function td(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,dn=e,pn=yt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,dn=e,pn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Bt!==null?{id:Xn,overflow:Yn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=kn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,dn=e,pn=null,!0):!1;default:return!1}}function ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(Ne){var n=pn;if(n){var o=n;if(!td(e,n)){if(ts(e))throw Error(i(418));n=yt(o.nextSibling);var l=dn;n&&td(e,n)?nd(l,o):(e.flags=e.flags&-4097|2,Ne=!1,dn=e)}}else{if(ts(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ne=!1,dn=e}}}function rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function Li(e){if(e!==dn)return!1;if(!Ne)return rd(e),Ne=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Kl(e.type,e.memoizedProps)),n&&(n=pn)){if(ts(e))throw od(),Error(i(418));for(;n;)nd(e,n),n=yt(n.nextSibling)}if(rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){pn=yt(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}pn=null}}else pn=dn?yt(e.stateNode.nextSibling):null;return!0}function od(){for(var e=pn;e;)e=yt(e.nextSibling)}function wr(){pn=dn=null,Ne=!1}function os(e){On===null?On=[e]:On.push(e)}var Xy=P.ReactCurrentBatchConfig;function vo(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,e));var u=l,f=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(g){var R=u.refs;g===null?delete R[f]:R[f]=g},n._stringRef=f,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ai(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function id(e){var n=e._init;return n(e._payload)}function ad(e){function n(L,M){if(e){var F=L.deletions;F===null?(L.deletions=[M],L.flags|=16):F.push(M)}}function o(L,M){if(!e)return null;for(;M!==null;)n(L,M),M=M.sibling;return null}function l(L,M){for(L=new Map;M!==null;)M.key!==null?L.set(M.key,M):L.set(M.index,M),M=M.sibling;return L}function u(L,M){return L=_t(L,M),L.index=0,L.sibling=null,L}function f(L,M,F){return L.index=F,e?(F=L.alternate,F!==null?(F=F.index,F<M?(L.flags|=2,M):F):(L.flags|=2,M)):(L.flags|=1048576,M)}function g(L){return e&&L.alternate===null&&(L.flags|=2),L}function R(L,M,F,Y){return M===null||M.tag!==6?(M=Xs(F,L.mode,Y),M.return=L,M):(M=u(M,F),M.return=L,M)}function z(L,M,F,Y){var le=F.type;return le===T?V(L,M,F.props.children,Y,F.key):M!==null&&(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&id(le)===M.type)?(Y=u(M,F.props),Y.ref=vo(L,M,F),Y.return=L,Y):(Y=sa(F.type,F.key,F.props,null,L.mode,Y),Y.ref=vo(L,M,F),Y.return=L,Y)}function q(L,M,F,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==F.containerInfo||M.stateNode.implementation!==F.implementation?(M=Ys(F,L.mode,Y),M.return=L,M):(M=u(M,F.children||[]),M.return=L,M)}function V(L,M,F,Y,le){return M===null||M.tag!==7?(M=Jt(F,L.mode,Y,le),M.return=L,M):(M=u(M,F),M.return=L,M)}function X(L,M,F){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Xs(""+M,L.mode,F),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case D:return F=sa(M.type,M.key,M.props,null,L.mode,F),F.ref=vo(L,null,M),F.return=L,F;case N:return M=Ys(M,L.mode,F),M.return=L,M;case ce:var Y=M._init;return X(L,Y(M._payload),F)}if(Qr(M)||ee(M))return M=Jt(M,L.mode,F,null),M.return=L,M;Ai(L,M)}return null}function Q(L,M,F,Y){var le=M!==null?M.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:R(L,M,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case D:return F.key===le?z(L,M,F,Y):null;case N:return F.key===le?q(L,M,F,Y):null;case ce:return le=F._init,Q(L,M,le(F._payload),Y)}if(Qr(F)||ee(F))return le!==null?null:V(L,M,F,Y,null);Ai(L,F)}return null}function ne(L,M,F,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(F)||null,R(M,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return L=L.get(Y.key===null?F:Y.key)||null,z(M,L,Y,le);case N:return L=L.get(Y.key===null?F:Y.key)||null,q(M,L,Y,le);case ce:var fe=Y._init;return ne(L,M,F,fe(Y._payload),le)}if(Qr(Y)||ee(Y))return L=L.get(F)||null,V(M,L,Y,le,null);Ai(M,Y)}return null}function oe(L,M,F,Y){for(var le=null,fe=null,de=M,me=M=0,We=null;de!==null&&me<F.length;me++){de.index>me?(We=de,de=null):We=de.sibling;var be=Q(L,de,F[me],Y);if(be===null){de===null&&(de=We);break}e&&de&&be.alternate===null&&n(L,de),M=f(be,M,me),fe===null?le=be:fe.sibling=be,fe=be,de=We}if(me===F.length)return o(L,de),Ne&&Ht(L,me),le;if(de===null){for(;me<F.length;me++)de=X(L,F[me],Y),de!==null&&(M=f(de,M,me),fe===null?le=de:fe.sibling=de,fe=de);return Ne&&Ht(L,me),le}for(de=l(L,de);me<F.length;me++)We=ne(de,L,me,F[me],Y),We!==null&&(e&&We.alternate!==null&&de.delete(We.key===null?me:We.key),M=f(We,M,me),fe===null?le=We:fe.sibling=We,fe=We);return e&&de.forEach(function(Rt){return n(L,Rt)}),Ne&&Ht(L,me),le}function ae(L,M,F,Y){var le=ee(F);if(typeof le!="function")throw Error(i(150));if(F=le.call(F),F==null)throw Error(i(151));for(var fe=le=null,de=M,me=M=0,We=null,be=F.next();de!==null&&!be.done;me++,be=F.next()){de.index>me?(We=de,de=null):We=de.sibling;var Rt=Q(L,de,be.value,Y);if(Rt===null){de===null&&(de=We);break}e&&de&&Rt.alternate===null&&n(L,de),M=f(Rt,M,me),fe===null?le=Rt:fe.sibling=Rt,fe=Rt,de=We}if(be.done)return o(L,de),Ne&&Ht(L,me),le;if(de===null){for(;!be.done;me++,be=F.next())be=X(L,be.value,Y),be!==null&&(M=f(be,M,me),fe===null?le=be:fe.sibling=be,fe=be);return Ne&&Ht(L,me),le}for(de=l(L,de);!be.done;me++,be=F.next())be=ne(de,L,me,be.value,Y),be!==null&&(e&&be.alternate!==null&&de.delete(be.key===null?me:be.key),M=f(be,M,me),fe===null?le=be:fe.sibling=be,fe=be);return e&&de.forEach(function(Pv){return n(L,Pv)}),Ne&&Ht(L,me),le}function Ae(L,M,F,Y){if(typeof F=="object"&&F!==null&&F.type===T&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case D:e:{for(var le=F.key,fe=M;fe!==null;){if(fe.key===le){if(le=F.type,le===T){if(fe.tag===7){o(L,fe.sibling),M=u(fe,F.props.children),M.return=L,L=M;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&id(le)===fe.type){o(L,fe.sibling),M=u(fe,F.props),M.ref=vo(L,fe,F),M.return=L,L=M;break e}o(L,fe);break}else n(L,fe);fe=fe.sibling}F.type===T?(M=Jt(F.props.children,L.mode,Y,F.key),M.return=L,L=M):(Y=sa(F.type,F.key,F.props,null,L.mode,Y),Y.ref=vo(L,M,F),Y.return=L,L=Y)}return g(L);case N:e:{for(fe=F.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===F.containerInfo&&M.stateNode.implementation===F.implementation){o(L,M.sibling),M=u(M,F.children||[]),M.return=L,L=M;break e}else{o(L,M);break}else n(L,M);M=M.sibling}M=Ys(F,L.mode,Y),M.return=L,L=M}return g(L);case ce:return fe=F._init,Ae(L,M,fe(F._payload),Y)}if(Qr(F))return oe(L,M,F,Y);if(ee(F))return ae(L,M,F,Y);Ai(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,M!==null&&M.tag===6?(o(L,M.sibling),M=u(M,F),M.return=L,L=M):(o(L,M),M=Xs(F,L.mode,Y),M.return=L,L=M),g(L)):o(L,M)}return Ae}var kr=ad(!0),ld=ad(!1),Fi=vt(null),$i=null,Sr=null,is=null;function as(){is=Sr=$i=null}function ls(e){var n=Fi.current;Re(Fi),e._currentValue=n}function ss(e,n,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===o)break;e=e.return}}function Er(e,n){$i=e,is=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(an=!0),e.firstContext=null)}function bn(e){var n=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:n,next:null},Sr===null){if($i===null)throw Error(i(308));Sr=e,$i.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return n}var Wt=null;function us(e){Wt===null?Wt=[e]:Wt.push(e)}function sd(e,n,o,l){var u=n.interleaved;return u===null?(o.next=o,us(n)):(o.next=u.next,u.next=o),n.interleaved=o,Gn(e,l)}function Gn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var wt=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ud(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kt(e,n,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ve&2){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Gn(e,o)}return u=l.interleaved,u===null?(n.next=n,us(l)):(n.next=u.next,u.next=n),l.interleaved=n,Gn(e,o)}function qi(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,El(e,o)}}function cd(e,n){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?u=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?u=f=n:f=f.next=n}else u=f=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Ui(e,n,o,l){var u=e.updateQueue;wt=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,q=z.next;z.next=null,g===null?f=q:g.next=q,g=z;var V=e.alternate;V!==null&&(V=V.updateQueue,R=V.lastBaseUpdate,R!==g&&(R===null?V.firstBaseUpdate=q:R.next=q,V.lastBaseUpdate=z))}if(f!==null){var X=u.baseState;g=0,V=q=z=null,R=f;do{var Q=R.lane,ne=R.eventTime;if((l&Q)===Q){V!==null&&(V=V.next={eventTime:ne,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var oe=e,ae=R;switch(Q=n,ne=o,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){X=oe.call(ne,X,Q);break e}X=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,Q=typeof oe=="function"?oe.call(ne,X,Q):oe,Q==null)break e;X=K({},X,Q);break e;case 2:wt=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,Q=u.effects,Q===null?u.effects=[R]:Q.push(R))}else ne={eventTime:ne,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},V===null?(q=V=ne,z=X):V=V.next=ne,g|=Q;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,u.lastBaseUpdate=Q,u.shared.pending=null}}while(!0);if(V===null&&(z=X),u.baseState=z,u.firstBaseUpdate=q,u.lastBaseUpdate=V,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else f===null&&(u.shared.lanes=0);Kt|=g,e.lanes=g,e.memoizedState=X}}function fd(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var bo={},$n=vt(bo),xo=vt(bo),wo=vt(bo);function Qt(e){if(e===bo)throw Error(i(174));return e}function fs(e,n){switch(Oe(wo,n),Oe(xo,e),Oe($n,bo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=dl(n,e)}Re($n),Oe($n,n)}function Or(){Re($n),Re(xo),Re(wo)}function dd(e){Qt(wo.current);var n=Qt($n.current),o=dl(n,e.type);n!==o&&(Oe(xo,e),Oe($n,o))}function ds(e){xo.current===e&&(Re($n),Re(xo))}var Me=vt(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ps=[];function hs(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Hi=P.ReactCurrentDispatcher,ms=P.ReactCurrentBatchConfig,Vt=0,je=null,$e=null,Be=null,Wi=!1,ko=!1,So=0,Yy=0;function Je(){throw Error(i(321))}function gs(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!En(e[o],n[o]))return!1;return!0}function ys(e,n,o,l,u,f){if(Vt=f,je=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hi.current=e===null||e.memoizedState===null?ev:nv,e=o(l,u),ko){f=0;do{if(ko=!1,So=0,25<=f)throw Error(i(301));f+=1,Be=$e=null,n.updateQueue=null,Hi.current=tv,e=o(l,u)}while(ko)}if(Hi.current=Ki,n=$e!==null&&$e.next!==null,Vt=0,Be=$e=je=null,Wi=!1,n)throw Error(i(300));return e}function vs(){var e=So!==0;return So=0,e}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?je.memoizedState=Be=e:Be=Be.next=e,Be}function xn(){if($e===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=Be===null?je.memoizedState:Be.next;if(n!==null)Be=n,$e=e;else{if(e===null)throw Error(i(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Be===null?je.memoizedState=Be=e:Be=Be.next=e}return Be}function Eo(e,n){return typeof n=="function"?n(e):n}function bs(e){var n=xn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=$e,u=l.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}l.baseQueue=u=f,o.pending=null}if(u!==null){f=u.next,l=l.baseState;var R=g=null,z=null,q=f;do{var V=q.lane;if((Vt&V)===V)z!==null&&(z=z.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),l=q.hasEagerState?q.eagerState:e(l,q.action);else{var X={lane:V,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};z===null?(R=z=X,g=l):z=z.next=X,je.lanes|=V,Kt|=V}q=q.next}while(q!==null&&q!==f);z===null?g=l:z.next=R,En(l,n.memoizedState)||(an=!0),n.memoizedState=l,n.baseState=g,n.baseQueue=z,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do f=u.lane,je.lanes|=f,Kt|=f,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function xs(e){var n=xn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,f=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);En(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),o.lastRenderedState=f}return[f,l]}function pd(){}function hd(e,n){var o=je,l=xn(),u=n(),f=!En(l.memoizedState,u);if(f&&(l.memoizedState=u,an=!0),l=l.queue,ws(yd.bind(null,o,l,e),[e]),l.getSnapshot!==n||f||Be!==null&&Be.memoizedState.tag&1){if(o.flags|=2048,Oo(9,gd.bind(null,o,l,u,n),void 0,null),He===null)throw Error(i(349));Vt&30||md(o,n,u)}return u}function md(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function gd(e,n,o,l){n.value=o,n.getSnapshot=l,vd(n)&&bd(e)}function yd(e,n,o){return o(function(){vd(n)&&bd(e)})}function vd(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!En(e,o)}catch{return!0}}function bd(e){var n=Gn(e,1);n!==null&&Rn(n,e,1,-1)}function xd(e){var n=qn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},n.queue=e,e=e.dispatch=Zy.bind(null,je,e),[n.memoizedState,e]}function Oo(e,n,o,l){return e={tag:e,create:n,destroy:o,deps:l,next:null},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,n.lastEffect=e)),e}function wd(){return xn().memoizedState}function Qi(e,n,o,l){var u=qn();je.flags|=e,u.memoizedState=Oo(1|n,o,void 0,l===void 0?null:l)}function Vi(e,n,o,l){var u=xn();l=l===void 0?null:l;var f=void 0;if($e!==null){var g=$e.memoizedState;if(f=g.destroy,l!==null&&gs(l,g.deps)){u.memoizedState=Oo(n,o,f,l);return}}je.flags|=e,u.memoizedState=Oo(1|n,o,f,l)}function kd(e,n){return Qi(8390656,8,e,n)}function ws(e,n){return Vi(2048,8,e,n)}function Sd(e,n){return Vi(4,2,e,n)}function Ed(e,n){return Vi(4,4,e,n)}function Od(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cd(e,n,o){return o=o!=null?o.concat([e]):null,Vi(4,4,Od.bind(null,n,e),o)}function ks(){}function Pd(e,n){var o=xn();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&gs(n,l[1])?l[0]:(o.memoizedState=[e,n],e)}function _d(e,n){var o=xn();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&gs(n,l[1])?l[0]:(e=e(),o.memoizedState=[e,n],e)}function Rd(e,n,o){return Vt&21?(En(o,n)||(o=of(),je.lanes|=o,Kt|=o,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,an=!0),e.memoizedState=o)}function Gy(e,n){var o=ke;ke=o!==0&&4>o?o:4,e(!0);var l=ms.transition;ms.transition={};try{e(!1),n()}finally{ke=o,ms.transition=l}}function Td(){return xn().memoizedState}function Jy(e,n,o){var l=Ct(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Nd(e))zd(n,o);else if(o=sd(e,n,o,l),o!==null){var u=tn();Rn(o,e,l,u),Dd(o,n,l)}}function Zy(e,n,o){var l=Ct(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))zd(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,o);if(u.hasEagerState=!0,u.eagerState=R,En(R,g)){var z=n.interleaved;z===null?(u.next=u,us(n)):(u.next=z.next,z.next=u),n.interleaved=u;return}}catch{}finally{}o=sd(e,n,u,l),o!==null&&(u=tn(),Rn(o,e,l,u),Dd(o,n,l))}}function Nd(e){var n=e.alternate;return e===je||n!==null&&n===je}function zd(e,n){ko=Wi=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Dd(e,n,o){if(o&4194240){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,El(e,o)}}var Ki={readContext:bn,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ev={readContext:bn,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:kd,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Qi(4194308,4,Od.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Qi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Qi(4,2,e,n)},useMemo:function(e,n){var o=qn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var l=qn();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Jy.bind(null,je,e),[l.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:xd,useDebugValue:ks,useDeferredValue:function(e){return qn().memoizedState=e},useTransition:function(){var e=xd(!1),n=e[0];return e=Gy.bind(null,e[1]),qn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var l=je,u=qn();if(Ne){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),He===null)throw Error(i(349));Vt&30||md(l,n,o)}u.memoizedState=o;var f={value:o,getSnapshot:n};return u.queue=f,kd(yd.bind(null,l,f,e),[e]),l.flags|=2048,Oo(9,gd.bind(null,l,f,o,n),void 0,null),o},useId:function(){var e=qn(),n=He.identifierPrefix;if(Ne){var o=Yn,l=Xn;o=(l&~(1<<32-Sn(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=So++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Yy++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},nv={readContext:bn,useCallback:Pd,useContext:bn,useEffect:ws,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:Ed,useMemo:_d,useReducer:bs,useRef:wd,useState:function(){return bs(Eo)},useDebugValue:ks,useDeferredValue:function(e){var n=xn();return Rd(n,$e.memoizedState,e)},useTransition:function(){var e=bs(Eo)[0],n=xn().memoizedState;return[e,n]},useMutableSource:pd,useSyncExternalStore:hd,useId:Td,unstable_isNewReconciler:!1},tv={readContext:bn,useCallback:Pd,useContext:bn,useEffect:ws,useImperativeHandle:Cd,useInsertionEffect:Sd,useLayoutEffect:Ed,useMemo:_d,useReducer:xs,useRef:wd,useState:function(){return xs(Eo)},useDebugValue:ks,useDeferredValue:function(e){var n=xn();return $e===null?n.memoizedState=e:Rd(n,$e.memoizedState,e)},useTransition:function(){var e=xs(Eo)[0],n=xn().memoizedState;return[e,n]},useMutableSource:pd,useSyncExternalStore:hd,useId:Td,unstable_isNewReconciler:!1};function Cn(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function Ss(e,n,o,l){n=e.memoizedState,o=o(l,n),o=o==null?n:K({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Xi={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var l=tn(),u=Ct(e),f=Jn(l,u);f.payload=n,o!=null&&(f.callback=o),n=kt(e,f,u),n!==null&&(Rn(n,e,u,l),qi(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var l=tn(),u=Ct(e),f=Jn(l,u);f.tag=1,f.payload=n,o!=null&&(f.callback=o),n=kt(e,f,u),n!==null&&(Rn(n,e,u,l),qi(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=tn(),l=Ct(e),u=Jn(o,l);u.tag=2,n!=null&&(u.callback=n),n=kt(e,u,l),n!==null&&(Rn(n,e,l,o),qi(n,e,l))}};function Md(e,n,o,l,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,g):n.prototype&&n.prototype.isPureReactComponent?!co(o,l)||!co(u,f):!0}function jd(e,n,o){var l=!1,u=bt,f=n.contextType;return typeof f=="object"&&f!==null?f=bn(f):(u=on(n)?Ut:Ge.current,l=n.contextTypes,f=(l=l!=null)?vr(e,u):bt),n=new n(o,f),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xi,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=f),n}function Id(e,n,o,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==e&&Xi.enqueueReplaceState(n,n.state,null)}function Es(e,n,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},cs(e);var f=n.contextType;typeof f=="object"&&f!==null?u.context=bn(f):(f=on(n)?Ut:Ge.current,u.context=vr(e,f)),u.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ss(e,n,f,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Xi.enqueueReplaceState(u,u.state,null),Ui(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,n){try{var o="",l=n;do o+=he(l),l=l.return;while(l);var u=o}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:n,stack:u,digest:null}}function Os(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function Cs(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,n,o){o=Jn(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){ta||(ta=!0,qs=l),Cs(e,n)},o}function Ad(e,n,o){o=Jn(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){Cs(e,n)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Cs(e,n),typeof l!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function Fd(e,n,o){var l=e.pingCache;if(l===null){l=e.pingCache=new rv;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),e=yv.bind(null,e,n,o),n.then(e,e))}function $d(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qd(e,n,o,l,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Jn(-1,1),n.tag=2,kt(o,n,1))),o.lanes|=1),e)}var ov=P.ReactCurrentOwner,an=!1;function nn(e,n,o,l){n.child=e===null?ld(n,null,o,l):kr(n,e.child,o,l)}function Ud(e,n,o,l,u){o=o.render;var f=n.ref;return Er(n,u),l=ys(e,n,o,l,f,u),o=vs(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Zn(e,n,u)):(Ne&&o&&es(n),n.flags|=1,nn(e,n,l,u),n.child)}function Bd(e,n,o,l,u){if(e===null){var f=o.type;return typeof f=="function"&&!Ks(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=f,Hd(e,n,f,l,u)):(e=sa(o.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!(e.lanes&u)){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(g,l)&&e.ref===n.ref)return Zn(e,n,u)}return n.flags|=1,e=_t(f,l),e.ref=n.ref,e.return=n,n.child=e}function Hd(e,n,o,l,u){if(e!==null){var f=e.memoizedProps;if(co(f,l)&&e.ref===n.ref)if(an=!1,n.pendingProps=l=f,(e.lanes&u)!==0)e.flags&131072&&(an=!0);else return n.lanes=e.lanes,Zn(e,n,u)}return Ps(e,n,o,l,u)}function Wd(e,n,o){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(_r,hn),hn|=o;else{if(!(o&1073741824))return e=f!==null?f.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Oe(_r,hn),hn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:o,Oe(_r,hn),hn|=l}else f!==null?(l=f.baseLanes|o,n.memoizedState=null):l=o,Oe(_r,hn),hn|=l;return nn(e,n,u,o),n.child}function Qd(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Ps(e,n,o,l,u){var f=on(o)?Ut:Ge.current;return f=vr(n,f),Er(n,u),o=ys(e,n,o,l,f,u),l=vs(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Zn(e,n,u)):(Ne&&l&&es(n),n.flags|=1,nn(e,n,o,u),n.child)}function Vd(e,n,o,l,u){if(on(o)){var f=!0;Di(n)}else f=!1;if(Er(n,u),n.stateNode===null)Gi(e,n),jd(n,o,l),Es(n,o,l,u),l=!0;else if(e===null){var g=n.stateNode,R=n.memoizedProps;g.props=R;var z=g.context,q=o.contextType;typeof q=="object"&&q!==null?q=bn(q):(q=on(o)?Ut:Ge.current,q=vr(n,q));var V=o.getDerivedStateFromProps,X=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function";X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(R!==l||z!==q)&&Id(n,g,l,q),wt=!1;var Q=n.memoizedState;g.state=Q,Ui(n,l,g,u),z=n.memoizedState,R!==l||Q!==z||rn.current||wt?(typeof V=="function"&&(Ss(n,o,V,l),z=n.memoizedState),(R=wt||Md(n,o,R,l,Q,z,q))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=z),g.props=l,g.state=z,g.context=q,l=R):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,ud(e,n),R=n.memoizedProps,q=n.type===n.elementType?R:Cn(n.type,R),g.props=q,X=n.pendingProps,Q=g.context,z=o.contextType,typeof z=="object"&&z!==null?z=bn(z):(z=on(o)?Ut:Ge.current,z=vr(n,z));var ne=o.getDerivedStateFromProps;(V=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(R!==X||Q!==z)&&Id(n,g,l,z),wt=!1,Q=n.memoizedState,g.state=Q,Ui(n,l,g,u);var oe=n.memoizedState;R!==X||Q!==oe||rn.current||wt?(typeof ne=="function"&&(Ss(n,o,ne,l),oe=n.memoizedState),(q=wt||Md(n,o,q,l,Q,oe,z)||!1)?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,oe,z),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,oe,z)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||R===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=oe),g.props=l,g.state=oe,g.context=z,l=q):(typeof g.componentDidUpdate!="function"||R===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),l=!1)}return _s(e,n,o,l,f,u)}function _s(e,n,o,l,u,f){Qd(e,n);var g=(n.flags&128)!==0;if(!l&&!g)return u&&Jf(n,o,!1),Zn(e,n,f);l=n.stateNode,ov.current=n;var R=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&g?(n.child=kr(n,e.child,null,f),n.child=kr(n,null,R,f)):nn(e,n,R,f),n.memoizedState=l.state,u&&Jf(n,o,!0),n.child}function Kd(e){var n=e.stateNode;n.pendingContext?Yf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Yf(e,n.context,!1),fs(e,n.containerInfo)}function Xd(e,n,o,l,u){return wr(),os(u),n.flags|=256,nn(e,n,o,l),n.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,n,o){var l=n.pendingProps,u=Me.current,f=!1,g=(n.flags&128)!==0,R;if((R=g)||(R=e!==null&&e.memoizedState===null?!1:(u&2)!==0),R?(f=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Oe(Me,u&1),e===null)return rs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(g=l.children,e=l.fallback,f?(l=n.mode,f=n.child,g={mode:"hidden",children:g},!(l&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=ua(g,l,0,null),e=Jt(e,l,o,null),f.return=n,e.return=n,f.sibling=e,n.child=f,n.child.memoizedState=Ts(o),n.memoizedState=Rs,e):Ns(n,g));if(u=e.memoizedState,u!==null&&(R=u.dehydrated,R!==null))return iv(e,n,g,l,R,u,o);if(f){f=l.fallback,g=n.mode,u=e.child,R=u.sibling;var z={mode:"hidden",children:l.children};return!(g&1)&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=z,n.deletions=null):(l=_t(u,z),l.subtreeFlags=u.subtreeFlags&14680064),R!==null?f=_t(R,f):(f=Jt(f,g,o,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,g=e.child.memoizedState,g=g===null?Ts(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=e.childLanes&~o,n.memoizedState=Rs,l}return f=e.child,e=f.sibling,l=_t(f,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=o),l.return=n,l.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=l,n.memoizedState=null,l}function Ns(e,n){return n=ua({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Yi(e,n,o,l){return l!==null&&os(l),kr(n,e.child,null,o),e=Ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function iv(e,n,o,l,u,f,g){if(o)return n.flags&256?(n.flags&=-257,l=Os(Error(i(422))),Yi(e,n,g,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(f=l.fallback,u=n.mode,l=ua({mode:"visible",children:l.children},u,0,null),f=Jt(f,u,g,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,n.mode&1&&kr(n,e.child,null,g),n.child.memoizedState=Ts(g),n.memoizedState=Rs,f);if(!(n.mode&1))return Yi(e,n,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var R=l.dgst;return l=R,f=Error(i(419)),l=Os(f,l,void 0),Yi(e,n,g,l)}if(R=(g&e.childLanes)!==0,an||R){if(l=He,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|g)?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,Gn(e,u),Rn(l,e,u,-1))}return Vs(),l=Os(Error(i(421))),Yi(e,n,g,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=vv.bind(null,e),u._reactRetry=n,null):(e=f.treeContext,pn=yt(u.nextSibling),dn=n,Ne=!0,On=null,e!==null&&(yn[vn++]=Xn,yn[vn++]=Yn,yn[vn++]=Bt,Xn=e.id,Yn=e.overflow,Bt=n),n=Ns(n,l.children),n.flags|=4096,n)}function Gd(e,n,o){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ss(e.return,n,o)}function zs(e,n,o,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=o,f.tailMode=u)}function Jd(e,n,o){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(nn(e,n,l.children,o),l=Me.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,o,n);else if(e.tag===19)Gd(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Oe(Me,l),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&Bi(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),zs(n,!1,u,o,f);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bi(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}zs(n,!0,o,null,f);break;case"together":zs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Zn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Kt|=n.lanes,!(o&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=_t(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=_t(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function av(e,n,o){switch(n.tag){case 3:Kd(n),wr();break;case 5:dd(n);break;case 1:on(n.type)&&Di(n);break;case 4:fs(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;Oe(Fi,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Oe(Me,Me.current&1),n.flags|=128,null):o&n.child.childLanes?Yd(e,n,o):(Oe(Me,Me.current&1),e=Zn(e,n,o),e!==null?e.sibling:null);Oe(Me,Me.current&1);break;case 19:if(l=(o&n.childLanes)!==0,e.flags&128){if(l)return Jd(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Oe(Me,Me.current),l)break;return null;case 22:case 23:return n.lanes=0,Wd(e,n,o)}return Zn(e,n,o)}var Zd,Ds,ep,np;Zd=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ds=function(){},ep=function(e,n,o,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Qt($n.current);var f=null;switch(o){case"input":u=ct(e,u),l=ct(e,l),f=[];break;case"select":u=K({},u,{value:void 0}),l=K({},l,{value:void 0}),f=[];break;case"textarea":u=fl(e,u),l=fl(e,l),f=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ti)}pl(o,l);var g;o=null;for(q in u)if(!l.hasOwnProperty(q)&&u.hasOwnProperty(q)&&u[q]!=null)if(q==="style"){var R=u[q];for(g in R)R.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(s.hasOwnProperty(q)?f||(f=[]):(f=f||[]).push(q,null));for(q in l){var z=l[q];if(R=u!=null?u[q]:void 0,l.hasOwnProperty(q)&&z!==R&&(z!=null||R!=null))if(q==="style")if(R){for(g in R)!R.hasOwnProperty(g)||z&&z.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in z)z.hasOwnProperty(g)&&R[g]!==z[g]&&(o||(o={}),o[g]=z[g])}else o||(f||(f=[]),f.push(q,o)),o=z;else q==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,R=R?R.__html:void 0,z!=null&&R!==z&&(f=f||[]).push(q,z)):q==="children"?typeof z!="string"&&typeof z!="number"||(f=f||[]).push(q,""+z):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(s.hasOwnProperty(q)?(z!=null&&q==="onScroll"&&_e("scroll",e),f||R===z||(f=[])):(f=f||[]).push(q,z))}o&&(f=f||[]).push("style",o);var q=f;(n.updateQueue=q)&&(n.flags|=4)}},np=function(e,n,o,l){o!==l&&(n.flags|=4)};function Co(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,n}function lv(e,n,o){var l=n.pendingProps;switch(ns(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return on(n.type)&&zi(),Ze(n),null;case 3:return l=n.stateNode,Or(),Re(rn),Re(Ge),hs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Li(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,On!==null&&(Hs(On),On=null))),Ds(e,n),Ze(n),null;case 5:ds(n);var u=Qt(wo.current);if(o=n.type,e!==null&&n.stateNode!=null)ep(e,n,o,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Ze(n),null}if(e=Qt($n.current),Li(n)){l=n.stateNode,o=n.type;var f=n.memoizedProps;switch(l[Fn]=n,l[go]=f,e=(n.mode&1)!==0,o){case"dialog":_e("cancel",l),_e("close",l);break;case"iframe":case"object":case"embed":_e("load",l);break;case"video":case"audio":for(u=0;u<po.length;u++)_e(po[u],l);break;case"source":_e("error",l);break;case"img":case"image":case"link":_e("error",l),_e("load",l);break;case"details":_e("toggle",l);break;case"input":Te(l,f),_e("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},_e("invalid",l);break;case"textarea":Lc(l,f),_e("invalid",l)}pl(o,f),u=null;for(var g in f)if(f.hasOwnProperty(g)){var R=f[g];g==="children"?typeof R=="string"?l.textContent!==R&&(f.suppressHydrationWarning!==!0&&Ri(l.textContent,R,e),u=["children",R]):typeof R=="number"&&l.textContent!==""+R&&(f.suppressHydrationWarning!==!0&&Ri(l.textContent,R,e),u=["children",""+R]):s.hasOwnProperty(g)&&R!=null&&g==="onScroll"&&_e("scroll",l)}switch(o){case"input":ir(l),Ic(l,f,!0);break;case"textarea":ir(l),Fc(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=Ti)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=g.createElement(o,{is:l.is}):(e=g.createElement(o),o==="select"&&(g=e,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):e=g.createElementNS(e,o),e[Fn]=n,e[go]=l,Zd(e,n,!1,!1),n.stateNode=e;e:{switch(g=hl(o,l),o){case"dialog":_e("cancel",e),_e("close",e),u=l;break;case"iframe":case"object":case"embed":_e("load",e),u=l;break;case"video":case"audio":for(u=0;u<po.length;u++)_e(po[u],e);u=l;break;case"source":_e("error",e),u=l;break;case"img":case"image":case"link":_e("error",e),_e("load",e),u=l;break;case"details":_e("toggle",e),u=l;break;case"input":Te(e,l),u=ct(e,l),_e("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=K({},l,{value:void 0}),_e("invalid",e);break;case"textarea":Lc(e,l),u=fl(e,l),_e("invalid",e);break;default:u=l}pl(o,u),R=u;for(f in R)if(R.hasOwnProperty(f)){var z=R[f];f==="style"?Bc(e,z):f==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&qc(e,z)):f==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Vr(e,z):typeof z=="number"&&Vr(e,""+z):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(s.hasOwnProperty(f)?z!=null&&f==="onScroll"&&_e("scroll",e):z!=null&&O(e,f,z,g))}switch(o){case"input":ir(e),Ic(e,l,!1);break;case"textarea":ir(e),Fc(e);break;case"option":l.value!=null&&e.setAttribute("value",""+xe(l.value));break;case"select":e.multiple=!!l.multiple,f=l.value,f!=null?ar(e,!!l.multiple,f,!1):l.defaultValue!=null&&ar(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ti)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)np(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(o=Qt(wo.current),Qt($n.current),Li(n)){if(l=n.stateNode,o=n.memoizedProps,l[Fn]=n,(f=l.nodeValue!==o)&&(e=dn,e!==null))switch(e.tag){case 3:Ri(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(l.nodeValue,o,(e.mode&1)!==0)}f&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Fn]=n,n.stateNode=l}return Ze(n),null;case 13:if(Re(Me),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&pn!==null&&n.mode&1&&!(n.flags&128))od(),wr(),n.flags|=98560,f=!1;else if(f=Li(n),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Fn]=n}else wr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ze(n),f=!1}else On!==null&&(Hs(On),On=null),f=!0;if(!f)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||Me.current&1?qe===0&&(qe=3):Vs())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return Or(),Ds(e,n),e===null&&ho(n.stateNode.containerInfo),Ze(n),null;case 10:return ls(n.type._context),Ze(n),null;case 17:return on(n.type)&&zi(),Ze(n),null;case 19:if(Re(Me),f=n.memoizedState,f===null)return Ze(n),null;if(l=(n.flags&128)!==0,g=f.rendering,g===null)if(l)Co(f,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(g=Bi(e),g!==null){for(n.flags|=128,Co(f,!1),l=g.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)f=o,e=l,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,e=g.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Oe(Me,Me.current&1|2),n.child}e=e.sibling}f.tail!==null&&Le()>Rr&&(n.flags|=128,l=!0,Co(f,!1),n.lanes=4194304)}else{if(!l)if(e=Bi(g),e!==null){if(n.flags|=128,l=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Co(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ne)return Ze(n),null}else 2*Le()-f.renderingStartTime>Rr&&o!==1073741824&&(n.flags|=128,l=!0,Co(f,!1),n.lanes=4194304);f.isBackwards?(g.sibling=n.child,n.child=g):(o=f.last,o!==null?o.sibling=g:n.child=g,f.last=g)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Le(),n.sibling=null,o=Me.current,Oe(Me,l?o&1|2:o&1),n):(Ze(n),null);case 22:case 23:return Qs(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?hn&1073741824&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function sv(e,n){switch(ns(n),n.tag){case 1:return on(n.type)&&zi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Or(),Re(rn),Re(Ge),hs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ds(n),null;case 13:if(Re(Me),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Re(Me),null;case 4:return Or(),null;case 10:return ls(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var Ji=!1,en=!1,uv=typeof WeakSet=="function"?WeakSet:Set,re=null;function Pr(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ie(e,n,l)}else o.current=null}function Ms(e,n,o){try{o()}catch(l){Ie(e,n,l)}}var tp=!1;function cv(e,n){if(Ql=vi,e=Mf(),Al(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,R=-1,z=-1,q=0,V=0,X=e,Q=null;n:for(;;){for(var ne;X!==o||u!==0&&X.nodeType!==3||(R=g+u),X!==f||l!==0&&X.nodeType!==3||(z=g+l),X.nodeType===3&&(g+=X.nodeValue.length),(ne=X.firstChild)!==null;)Q=X,X=ne;for(;;){if(X===e)break n;if(Q===o&&++q===u&&(R=g),Q===f&&++V===l&&(z=g),(ne=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ne}o=R===-1||z===-1?null:{start:R,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vl={focusedElem:e,selectionRange:o},vi=!1,re=n;re!==null;)if(n=re,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,re=e;else for(;re!==null;){n=re;try{var oe=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,Ae=oe.memoizedState,L=n.stateNode,M=L.getSnapshotBeforeUpdate(n.elementType===n.type?ae:Cn(n.type,ae),Ae);L.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var F=n.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Y){Ie(n,n.return,Y)}if(e=n.sibling,e!==null){e.return=n.return,re=e;break}re=n.return}return oe=tp,tp=!1,oe}function Po(e,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var f=u.destroy;u.destroy=void 0,f!==void 0&&Ms(n,o,f)}u=u.next}while(u!==l)}}function Zi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function js(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function rp(e){var n=e.alternate;n!==null&&(e.alternate=null,rp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fn],delete n[go],delete n[Gl],delete n[Qy],delete n[Vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ti));else if(l!==4&&(e=e.child,e!==null))for(Is(e,n,o),e=e.sibling;e!==null;)Is(e,n,o),e=e.sibling}function Ls(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ls(e,n,o),e=e.sibling;e!==null;)Ls(e,n,o),e=e.sibling}var Ve=null,Pn=!1;function St(e,n,o){for(o=o.child;o!==null;)ap(e,n,o),o=o.sibling}function ap(e,n,o){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(di,o)}catch{}switch(o.tag){case 5:en||Pr(o,n);case 6:var l=Ve,u=Pn;Ve=null,St(e,n,o),Ve=l,Pn=u,Ve!==null&&(Pn?(e=Ve,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ve.removeChild(o.stateNode));break;case 18:Ve!==null&&(Pn?(e=Ve,o=o.stateNode,e.nodeType===8?Yl(e.parentNode,o):e.nodeType===1&&Yl(e,o),oo(e)):Yl(Ve,o.stateNode));break;case 4:l=Ve,u=Pn,Ve=o.stateNode.containerInfo,Pn=!0,St(e,n,o),Ve=l,Pn=u;break;case 0:case 11:case 14:case 15:if(!en&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var f=u,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Ms(o,n,g),u=u.next}while(u!==l)}St(e,n,o);break;case 1:if(!en&&(Pr(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(R){Ie(o,n,R)}St(e,n,o);break;case 21:St(e,n,o);break;case 22:o.mode&1?(en=(l=en)||o.memoizedState!==null,St(e,n,o),en=l):St(e,n,o);break;default:St(e,n,o)}}function lp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new uv),n.forEach(function(l){var u=bv.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function _n(e,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var f=e,g=n,R=g;e:for(;R!==null;){switch(R.tag){case 5:Ve=R.stateNode,Pn=!1;break e;case 3:Ve=R.stateNode.containerInfo,Pn=!0;break e;case 4:Ve=R.stateNode.containerInfo,Pn=!0;break e}R=R.return}if(Ve===null)throw Error(i(160));ap(f,g,u),Ve=null,Pn=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(q){Ie(u,n,q)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)sp(n,e),n=n.sibling}function sp(e,n){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_n(n,e),Un(e),l&4){try{Po(3,e,e.return),Zi(3,e)}catch(ae){Ie(e,e.return,ae)}try{Po(5,e,e.return)}catch(ae){Ie(e,e.return,ae)}}break;case 1:_n(n,e),Un(e),l&512&&o!==null&&Pr(o,o.return);break;case 5:if(_n(n,e),Un(e),l&512&&o!==null&&Pr(o,o.return),e.flags&32){var u=e.stateNode;try{Vr(u,"")}catch(ae){Ie(e,e.return,ae)}}if(l&4&&(u=e.stateNode,u!=null)){var f=e.memoizedProps,g=o!==null?o.memoizedProps:f,R=e.type,z=e.updateQueue;if(e.updateQueue=null,z!==null)try{R==="input"&&f.type==="radio"&&f.name!=null&&Wr(u,f),hl(R,g);var q=hl(R,f);for(g=0;g<z.length;g+=2){var V=z[g],X=z[g+1];V==="style"?Bc(u,X):V==="dangerouslySetInnerHTML"?qc(u,X):V==="children"?Vr(u,X):O(u,V,X,q)}switch(R){case"input":Ft(u,f);break;case"textarea":Ac(u,f);break;case"select":var Q=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?ar(u,!!f.multiple,ne,!1):Q!==!!f.multiple&&(f.defaultValue!=null?ar(u,!!f.multiple,f.defaultValue,!0):ar(u,!!f.multiple,f.multiple?[]:"",!1))}u[go]=f}catch(ae){Ie(e,e.return,ae)}}break;case 6:if(_n(n,e),Un(e),l&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,f=e.memoizedProps;try{u.nodeValue=f}catch(ae){Ie(e,e.return,ae)}}break;case 3:if(_n(n,e),Un(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{oo(n.containerInfo)}catch(ae){Ie(e,e.return,ae)}break;case 4:_n(n,e),Un(e);break;case 13:_n(n,e),Un(e),u=e.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||($s=Le())),l&4&&lp(e);break;case 22:if(V=o!==null&&o.memoizedState!==null,e.mode&1?(en=(q=en)||V,_n(n,e),en=q):_n(n,e),Un(e),l&8192){if(q=e.memoizedState!==null,(e.stateNode.isHidden=q)&&!V&&e.mode&1)for(re=e,V=e.child;V!==null;){for(X=re=V;re!==null;){switch(Q=re,ne=Q.child,Q.tag){case 0:case 11:case 14:case 15:Po(4,Q,Q.return);break;case 1:Pr(Q,Q.return);var oe=Q.stateNode;if(typeof oe.componentWillUnmount=="function"){l=Q,o=Q.return;try{n=l,oe.props=n.memoizedProps,oe.state=n.memoizedState,oe.componentWillUnmount()}catch(ae){Ie(l,o,ae)}}break;case 5:Pr(Q,Q.return);break;case 22:if(Q.memoizedState!==null){fp(X);continue}}ne!==null?(ne.return=Q,re=ne):fp(X)}V=V.sibling}e:for(V=null,X=e;;){if(X.tag===5){if(V===null){V=X;try{u=X.stateNode,q?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(R=X.stateNode,z=X.memoizedProps.style,g=z!=null&&z.hasOwnProperty("display")?z.display:null,R.style.display=Uc("display",g))}catch(ae){Ie(e,e.return,ae)}}}else if(X.tag===6){if(V===null)try{X.stateNode.nodeValue=q?"":X.memoizedProps}catch(ae){Ie(e,e.return,ae)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;V===X&&(V=null),X=X.return}V===X&&(V=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:_n(n,e),Un(e),l&4&&lp(e);break;case 21:break;default:_n(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(op(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Vr(u,""),l.flags&=-33);var f=ip(e);Ls(e,f,u);break;case 3:case 4:var g=l.stateNode.containerInfo,R=ip(e);Is(e,R,g);break;default:throw Error(i(161))}}catch(z){Ie(e,e.return,z)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fv(e,n,o){re=e,up(e)}function up(e,n,o){for(var l=(e.mode&1)!==0;re!==null;){var u=re,f=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Ji;if(!g){var R=u.alternate,z=R!==null&&R.memoizedState!==null||en;R=Ji;var q=en;if(Ji=g,(en=z)&&!q)for(re=u;re!==null;)g=re,z=g.child,g.tag===22&&g.memoizedState!==null?dp(u):z!==null?(z.return=g,re=z):dp(u);for(;f!==null;)re=f,up(f),f=f.sibling;re=u,Ji=R,en=q}cp(e)}else u.subtreeFlags&8772&&f!==null?(f.return=u,re=f):cp(e)}}function cp(e){for(;re!==null;){var n=re;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:en||Zi(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!en)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Cn(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&fd(n,f,l);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}fd(n,g,o)}break;case 5:var R=n.stateNode;if(o===null&&n.flags&4){o=R;var z=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var q=n.alternate;if(q!==null){var V=q.memoizedState;if(V!==null){var X=V.dehydrated;X!==null&&oo(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}en||n.flags&512&&js(n)}catch(Q){Ie(n,n.return,Q)}}if(n===e){re=null;break}if(o=n.sibling,o!==null){o.return=n.return,re=o;break}re=n.return}}function fp(e){for(;re!==null;){var n=re;if(n===e){re=null;break}var o=n.sibling;if(o!==null){o.return=n.return,re=o;break}re=n.return}}function dp(e){for(;re!==null;){var n=re;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Zi(4,n)}catch(z){Ie(n,o,z)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(z){Ie(n,u,z)}}var f=n.return;try{js(n)}catch(z){Ie(n,f,z)}break;case 5:var g=n.return;try{js(n)}catch(z){Ie(n,g,z)}}}catch(z){Ie(n,n.return,z)}if(n===e){re=null;break}var R=n.sibling;if(R!==null){R.return=n.return,re=R;break}re=n.return}}var dv=Math.ceil,ea=P.ReactCurrentDispatcher,As=P.ReactCurrentOwner,wn=P.ReactCurrentBatchConfig,ve=0,He=null,Fe=null,Ke=0,hn=0,_r=vt(0),qe=0,_o=null,Kt=0,na=0,Fs=0,Ro=null,ln=null,$s=0,Rr=1/0,et=null,ta=!1,qs=null,Et=null,ra=!1,Ot=null,oa=0,To=0,Us=null,ia=-1,aa=0;function tn(){return ve&6?Le():ia!==-1?ia:ia=Le()}function Ct(e){return e.mode&1?ve&2&&Ke!==0?Ke&-Ke:Xy.transition!==null?(aa===0&&(aa=of()),aa):(e=ke,e!==0||(e=window.event,e=e===void 0?16:hf(e.type)),e):1}function Rn(e,n,o,l){if(50<To)throw To=0,Us=null,Error(i(185));Zr(e,o,l),(!(ve&2)||e!==He)&&(e===He&&(!(ve&2)&&(na|=o),qe===4&&Pt(e,Ke)),sn(e,l),o===1&&ve===0&&!(n.mode&1)&&(Rr=Le()+500,Mi&&xt()))}function sn(e,n){var o=e.callbackNode;Xg(e,n);var l=mi(e,e===He?Ke:0);if(l===0)o!==null&&nf(o),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(o!=null&&nf(o),n===1)e.tag===0?Ky(hp.bind(null,e)):Zf(hp.bind(null,e)),Hy(function(){!(ve&6)&&xt()}),o=null;else{switch(af(l)){case 1:o=wl;break;case 4:o=tf;break;case 16:o=fi;break;case 536870912:o=rf;break;default:o=fi}o=kp(o,pp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function pp(e,n){if(ia=-1,aa=0,ve&6)throw Error(i(327));var o=e.callbackNode;if(Tr()&&e.callbackNode!==o)return null;var l=mi(e,e===He?Ke:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=la(e,l);else{n=l;var u=ve;ve|=2;var f=gp();(He!==e||Ke!==n)&&(et=null,Rr=Le()+500,Yt(e,n));do try{mv();break}catch(R){mp(e,R)}while(!0);as(),ea.current=f,ve=u,Fe!==null?n=0:(He=null,Ke=0,n=qe)}if(n!==0){if(n===2&&(u=kl(e),u!==0&&(l=u,n=Bs(e,u))),n===1)throw o=_o,Yt(e,0),Pt(e,l),sn(e,Le()),o;if(n===6)Pt(e,l);else{if(u=e.current.alternate,!(l&30)&&!pv(u)&&(n=la(e,l),n===2&&(f=kl(e),f!==0&&(l=f,n=Bs(e,f))),n===1))throw o=_o,Yt(e,0),Pt(e,l),sn(e,Le()),o;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Gt(e,ln,et);break;case 3:if(Pt(e,l),(l&130023424)===l&&(n=$s+500-Le(),10<n)){if(mi(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){tn(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Xl(Gt.bind(null,e,ln,et),n);break}Gt(e,ln,et);break;case 4:if(Pt(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var g=31-Sn(l);f=1<<g,g=n[g],g>u&&(u=g),l&=~f}if(l=u,l=Le()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*dv(l/1960))-l,10<l){e.timeoutHandle=Xl(Gt.bind(null,e,ln,et),l);break}Gt(e,ln,et);break;case 5:Gt(e,ln,et);break;default:throw Error(i(329))}}}return sn(e,Le()),e.callbackNode===o?pp.bind(null,e):null}function Bs(e,n){var o=Ro;return e.current.memoizedState.isDehydrated&&(Yt(e,n).flags|=256),e=la(e,n),e!==2&&(n=ln,ln=o,n!==null&&Hs(n)),e}function Hs(e){ln===null?ln=e:ln.push.apply(ln,e)}function pv(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],f=u.getSnapshot;u=u.value;try{if(!En(f(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pt(e,n){for(n&=~Fs,n&=~na,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Sn(n),l=1<<o;e[o]=-1,n&=~l}}function hp(e){if(ve&6)throw Error(i(327));Tr();var n=mi(e,0);if(!(n&1))return sn(e,Le()),null;var o=la(e,n);if(e.tag!==0&&o===2){var l=kl(e);l!==0&&(n=l,o=Bs(e,l))}if(o===1)throw o=_o,Yt(e,0),Pt(e,n),sn(e,Le()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Gt(e,ln,et),sn(e,Le()),null}function Ws(e,n){var o=ve;ve|=1;try{return e(n)}finally{ve=o,ve===0&&(Rr=Le()+500,Mi&&xt())}}function Xt(e){Ot!==null&&Ot.tag===0&&!(ve&6)&&Tr();var n=ve;ve|=1;var o=wn.transition,l=ke;try{if(wn.transition=null,ke=1,e)return e()}finally{ke=l,wn.transition=o,ve=n,!(ve&6)&&xt()}}function Qs(){hn=_r.current,Re(_r)}function Yt(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,By(o)),Fe!==null)for(o=Fe.return;o!==null;){var l=o;switch(ns(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&zi();break;case 3:Or(),Re(rn),Re(Ge),hs();break;case 5:ds(l);break;case 4:Or();break;case 13:Re(Me);break;case 19:Re(Me);break;case 10:ls(l.type._context);break;case 22:case 23:Qs()}o=o.return}if(He=e,Fe=e=_t(e.current,null),Ke=hn=n,qe=0,_o=null,Fs=na=Kt=0,ln=Ro=null,Wt!==null){for(n=0;n<Wt.length;n++)if(o=Wt[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,f=o.pending;if(f!==null){var g=f.next;f.next=u,l.next=g}o.pending=l}Wt=null}return e}function mp(e,n){do{var o=Fe;try{if(as(),Hi.current=Ki,Wi){for(var l=je.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Wi=!1}if(Vt=0,Be=$e=je=null,ko=!1,So=0,As.current=null,o===null||o.return===null){qe=1,_o=n,Fe=null;break}e:{var f=e,g=o.return,R=o,z=n;if(n=Ke,R.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var q=z,V=R,X=V.tag;if(!(V.mode&1)&&(X===0||X===11||X===15)){var Q=V.alternate;Q?(V.updateQueue=Q.updateQueue,V.memoizedState=Q.memoizedState,V.lanes=Q.lanes):(V.updateQueue=null,V.memoizedState=null)}var ne=$d(g);if(ne!==null){ne.flags&=-257,qd(ne,g,R,f,n),ne.mode&1&&Fd(f,q,n),n=ne,z=q;var oe=n.updateQueue;if(oe===null){var ae=new Set;ae.add(z),n.updateQueue=ae}else oe.add(z);break e}else{if(!(n&1)){Fd(f,q,n),Vs();break e}z=Error(i(426))}}else if(Ne&&R.mode&1){var Ae=$d(g);if(Ae!==null){!(Ae.flags&65536)&&(Ae.flags|=256),qd(Ae,g,R,f,n),os(Cr(z,R));break e}}f=z=Cr(z,R),qe!==4&&(qe=2),Ro===null?Ro=[f]:Ro.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var L=Ld(f,z,n);cd(f,L);break e;case 1:R=z;var M=f.type,F=f.stateNode;if(!(f.flags&128)&&(typeof M.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Et===null||!Et.has(F)))){f.flags|=65536,n&=-n,f.lanes|=n;var Y=Ad(f,R,n);cd(f,Y);break e}}f=f.return}while(f!==null)}vp(o)}catch(le){n=le,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function gp(){var e=ea.current;return ea.current=Ki,e===null?Ki:e}function Vs(){(qe===0||qe===3||qe===2)&&(qe=4),He===null||!(Kt&268435455)&&!(na&268435455)||Pt(He,Ke)}function la(e,n){var o=ve;ve|=2;var l=gp();(He!==e||Ke!==n)&&(et=null,Yt(e,n));do try{hv();break}catch(u){mp(e,u)}while(!0);if(as(),ve=o,ea.current=l,Fe!==null)throw Error(i(261));return He=null,Ke=0,qe}function hv(){for(;Fe!==null;)yp(Fe)}function mv(){for(;Fe!==null&&!$g();)yp(Fe)}function yp(e){var n=wp(e.alternate,e,hn);e.memoizedProps=e.pendingProps,n===null?vp(e):Fe=n,As.current=null}function vp(e){var n=e;do{var o=n.alternate;if(e=n.return,n.flags&32768){if(o=sv(o,n),o!==null){o.flags&=32767,Fe=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Fe=null;return}}else if(o=lv(o,n,hn),o!==null){Fe=o;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=e}while(n!==null);qe===0&&(qe=5)}function Gt(e,n,o){var l=ke,u=wn.transition;try{wn.transition=null,ke=1,gv(e,n,o,l)}finally{wn.transition=u,ke=l}return null}function gv(e,n,o,l){do Tr();while(Ot!==null);if(ve&6)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var f=o.lanes|o.childLanes;if(Yg(e,f),e===He&&(Fe=He=null,Ke=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ra||(ra=!0,kp(fi,function(){return Tr(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=wn.transition,wn.transition=null;var g=ke;ke=1;var R=ve;ve|=4,As.current=null,cv(e,o),sp(o,e),Iy(Vl),vi=!!Ql,Vl=Ql=null,e.current=o,fv(o),qg(),ve=R,ke=g,wn.transition=f}else e.current=o;if(ra&&(ra=!1,Ot=e,oa=u),f=e.pendingLanes,f===0&&(Et=null),Hg(o.stateNode),sn(e,Le()),n!==null)for(l=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ta)throw ta=!1,e=qs,qs=null,e;return oa&1&&e.tag!==0&&Tr(),f=e.pendingLanes,f&1?e===Us?To++:(To=0,Us=e):To=0,xt(),null}function Tr(){if(Ot!==null){var e=af(oa),n=wn.transition,o=ke;try{if(wn.transition=null,ke=16>e?16:e,Ot===null)var l=!1;else{if(e=Ot,Ot=null,oa=0,ve&6)throw Error(i(331));var u=ve;for(ve|=4,re=e.current;re!==null;){var f=re,g=f.child;if(re.flags&16){var R=f.deletions;if(R!==null){for(var z=0;z<R.length;z++){var q=R[z];for(re=q;re!==null;){var V=re;switch(V.tag){case 0:case 11:case 15:Po(8,V,f)}var X=V.child;if(X!==null)X.return=V,re=X;else for(;re!==null;){V=re;var Q=V.sibling,ne=V.return;if(rp(V),V===q){re=null;break}if(Q!==null){Q.return=ne,re=Q;break}re=ne}}}var oe=f.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var Ae=ae.sibling;ae.sibling=null,ae=Ae}while(ae!==null)}}re=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,re=g;else e:for(;re!==null;){if(f=re,f.flags&2048)switch(f.tag){case 0:case 11:case 15:Po(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,re=L;break e}re=f.return}}var M=e.current;for(re=M;re!==null;){g=re;var F=g.child;if(g.subtreeFlags&2064&&F!==null)F.return=g,re=F;else e:for(g=M;re!==null;){if(R=re,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:Zi(9,R)}}catch(le){Ie(R,R.return,le)}if(R===g){re=null;break e}var Y=R.sibling;if(Y!==null){Y.return=R.return,re=Y;break e}re=R.return}}if(ve=u,xt(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(di,e)}catch{}l=!0}return l}finally{ke=o,wn.transition=n}}return!1}function bp(e,n,o){n=Cr(o,n),n=Ld(e,n,1),e=kt(e,n,1),n=tn(),e!==null&&(Zr(e,1,n),sn(e,n))}function Ie(e,n,o){if(e.tag===3)bp(e,e,o);else for(;n!==null;){if(n.tag===3){bp(n,e,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Et===null||!Et.has(l))){e=Cr(o,e),e=Ad(n,e,1),n=kt(n,e,1),e=tn(),n!==null&&(Zr(n,1,e),sn(n,e));break}}n=n.return}}function yv(e,n,o){var l=e.pingCache;l!==null&&l.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&o,He===e&&(Ke&o)===o&&(qe===4||qe===3&&(Ke&130023424)===Ke&&500>Le()-$s?Yt(e,0):Fs|=o),sn(e,n)}function xp(e,n){n===0&&(e.mode&1?(n=hi,hi<<=1,!(hi&130023424)&&(hi=4194304)):n=1);var o=tn();e=Gn(e,n),e!==null&&(Zr(e,n,o),sn(e,o))}function vv(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),xp(e,o)}function bv(e,n){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),xp(e,o)}var wp;wp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||rn.current)an=!0;else{if(!(e.lanes&o)&&!(n.flags&128))return an=!1,av(e,n,o);an=!!(e.flags&131072)}else an=!1,Ne&&n.flags&1048576&&ed(n,Ii,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Gi(e,n),e=n.pendingProps;var u=vr(n,Ge.current);Er(n,o),u=ys(null,n,l,e,u,o);var f=vs();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,on(l)?(f=!0,Di(n)):f=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,cs(n),u.updater=Xi,n.stateNode=u,u._reactInternals=n,Es(n,l,e,o),n=_s(null,n,l,!0,f,o)):(n.tag=0,Ne&&f&&es(n),nn(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Gi(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=wv(l),e=Cn(l,e),u){case 0:n=Ps(null,n,l,e,o);break e;case 1:n=Vd(null,n,l,e,o);break e;case 11:n=Ud(null,n,l,e,o);break e;case 14:n=Bd(null,n,l,Cn(l.type,e),o);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Cn(l,u),Ps(e,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Cn(l,u),Vd(e,n,l,u,o);case 3:e:{if(Kd(n),e===null)throw Error(i(387));l=n.pendingProps,f=n.memoizedState,u=f.element,ud(e,n),Ui(n,l,null,o);var g=n.memoizedState;if(l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){u=Cr(Error(i(423)),n),n=Xd(e,n,l,o,u);break e}else if(l!==u){u=Cr(Error(i(424)),n),n=Xd(e,n,l,o,u);break e}else for(pn=yt(n.stateNode.containerInfo.firstChild),dn=n,Ne=!0,On=null,o=ld(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(wr(),l===u){n=Zn(e,n,o);break e}nn(e,n,l,o)}n=n.child}return n;case 5:return dd(n),e===null&&rs(n),l=n.type,u=n.pendingProps,f=e!==null?e.memoizedProps:null,g=u.children,Kl(l,u)?g=null:f!==null&&Kl(l,f)&&(n.flags|=32),Qd(e,n),nn(e,n,g,o),n.child;case 6:return e===null&&rs(n),null;case 13:return Yd(e,n,o);case 4:return fs(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=kr(n,null,l,o):nn(e,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Cn(l,u),Ud(e,n,l,u,o);case 7:return nn(e,n,n.pendingProps,o),n.child;case 8:return nn(e,n,n.pendingProps.children,o),n.child;case 12:return nn(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,f=n.memoizedProps,g=u.value,Oe(Fi,l._currentValue),l._currentValue=g,f!==null)if(En(f.value,g)){if(f.children===u.children&&!rn.current){n=Zn(e,n,o);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var R=f.dependencies;if(R!==null){g=f.child;for(var z=R.firstContext;z!==null;){if(z.context===l){if(f.tag===1){z=Jn(-1,o&-o),z.tag=2;var q=f.updateQueue;if(q!==null){q=q.shared;var V=q.pending;V===null?z.next=z:(z.next=V.next,V.next=z),q.pending=z}}f.lanes|=o,z=f.alternate,z!==null&&(z.lanes|=o),ss(f.return,o,n),R.lanes|=o;break}z=z.next}}else if(f.tag===10)g=f.type===n.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(i(341));g.lanes|=o,R=g.alternate,R!==null&&(R.lanes|=o),ss(g,o,n),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===n){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}nn(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Er(n,o),u=bn(u),l=l(u),n.flags|=1,nn(e,n,l,o),n.child;case 14:return l=n.type,u=Cn(l,n.pendingProps),u=Cn(l.type,u),Bd(e,n,l,u,o);case 15:return Hd(e,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Cn(l,u),Gi(e,n),n.tag=1,on(l)?(e=!0,Di(n)):e=!1,Er(n,o),jd(n,l,u),Es(n,l,u,o),_s(null,n,l,!0,e,o);case 19:return Jd(e,n,o);case 22:return Wd(e,n,o)}throw Error(i(156,n.tag))};function kp(e,n){return ef(e,n)}function xv(e,n,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,o,l){return new xv(e,n,o,l)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wv(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===G)return 11;if(e===se)return 14}return 2}function _t(e,n){var o=e.alternate;return o===null?(o=kn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function sa(e,n,o,l,u,f){var g=2;if(l=e,typeof e=="function")Ks(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case T:return Jt(o.children,u,f,n);case I:g=8,u|=8;break;case A:return e=kn(12,o,n,u|2),e.elementType=A,e.lanes=f,e;case J:return e=kn(13,o,n,u),e.elementType=J,e.lanes=f,e;case Z:return e=kn(19,o,n,u),e.elementType=Z,e.lanes=f,e;case pe:return ua(o,u,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:g=10;break e;case W:g=9;break e;case G:g=11;break e;case se:g=14;break e;case ce:g=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=kn(g,o,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Jt(e,n,o,l){return e=kn(7,e,l,n),e.lanes=o,e}function ua(e,n,o,l){return e=kn(22,e,l,n),e.elementType=pe,e.lanes=o,e.stateNode={isHidden:!1},e}function Xs(e,n,o){return e=kn(6,e,null,n),e.lanes=o,e}function Ys(e,n,o){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kv(e,n,o,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Gs(e,n,o,l,u,f,g,R,z){return e=new kv(e,n,o,R,z),n===1?(n=1,f===!0&&(n|=8)):n=0,f=kn(3,null,null,n),e.current=f,f.stateNode=e,f.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(f),e}function Sv(e,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:e,containerInfo:n,implementation:o}}function Sp(e){if(!e)return bt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(on(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(on(o))return Gf(e,o,n)}return n}function Ep(e,n,o,l,u,f,g,R,z){return e=Gs(o,l,!0,e,u,f,g,R,z),e.context=Sp(null),o=e.current,l=tn(),u=Ct(o),f=Jn(l,u),f.callback=n??null,kt(o,f,u),e.current.lanes=u,Zr(e,u,l),sn(e,l),e}function ca(e,n,o,l){var u=n.current,f=tn(),g=Ct(u);return o=Sp(o),n.context===null?n.context=o:n.pendingContext=o,n=Jn(f,g),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=kt(u,n,g),e!==null&&(Rn(e,u,g,f),qi(e,u,g)),g}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Op(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Js(e,n){Op(e,n),(e=e.alternate)&&Op(e,n)}var Cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zs(e){this._internalRoot=e}da.prototype.render=Zs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));ca(e,n,null,null)},da.prototype.unmount=Zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xt(function(){ca(null,e,null,null)}),n[Vn]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var n=uf();e={blockedOn:null,target:e,priority:n};for(var o=0;o<ht.length&&n!==0&&n<ht[o].priority;o++);ht.splice(o,0,e),o===0&&df(e)}};function eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Ev(e,n,o,l,u){if(u){if(typeof l=="function"){var f=l;l=function(){var q=fa(g);f.call(q)}}var g=Ep(n,l,e,0,null,!1,!1,"",Pp);return e._reactRootContainer=g,e[Vn]=g.current,ho(e.nodeType===8?e.parentNode:e),Xt(),g}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var R=l;l=function(){var q=fa(z);R.call(q)}}var z=Gs(e,0,!1,null,null,!1,!1,"",Pp);return e._reactRootContainer=z,e[Vn]=z.current,ho(e.nodeType===8?e.parentNode:e),Xt(function(){ca(n,z,o,l)}),z}function ha(e,n,o,l,u){var f=o._reactRootContainer;if(f){var g=f;if(typeof u=="function"){var R=u;u=function(){var z=fa(g);R.call(z)}}ca(n,g,e,u)}else g=Ev(o,n,e,u,l);return fa(g)}lf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Jr(n.pendingLanes);o!==0&&(El(n,o|1),sn(n,Le()),!(ve&6)&&(Rr=Le()+500,xt()))}break;case 13:Xt(function(){var l=Gn(e,1);if(l!==null){var u=tn();Rn(l,e,1,u)}}),Js(e,1)}},Ol=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var o=tn();Rn(n,e,134217728,o)}Js(e,134217728)}},sf=function(e){if(e.tag===13){var n=Ct(e),o=Gn(e,n);if(o!==null){var l=tn();Rn(o,e,n,l)}Js(e,n)}},uf=function(){return ke},cf=function(e,n){var o=ke;try{return ke=e,n()}finally{ke=o}},yl=function(e,n,o){switch(n){case"input":if(Ft(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==e&&l.form===e.form){var u=Ni(l);if(!u)throw Error(i(90));Hr(l),Ft(l,u)}}}break;case"textarea":Ac(e,o);break;case"select":n=o.value,n!=null&&ar(e,!!o.multiple,n,!1)}},Vc=Ws,Kc=Xt;var Ov={usingClientEntryPoint:!1,Events:[yo,gr,Ni,Wc,Qc,Ws]},No={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cv={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{di=ma.inject(Cv),An=ma}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov,un.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eu(n))throw Error(i(200));return Sv(e,n,null,o)},un.createRoot=function(e,n){if(!eu(e))throw Error(i(299));var o=!1,l="",u=Cp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Gs(e,1,!1,null,null,o,!1,l,u),e[Vn]=n.current,ho(e.nodeType===8?e.parentNode:e),new Zs(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Jc(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return Xt(e)},un.hydrate=function(e,n,o){if(!pa(n))throw Error(i(200));return ha(null,e,n,!0,o)},un.hydrateRoot=function(e,n,o){if(!eu(e))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,u=!1,f="",g=Cp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=Ep(n,null,e,1,o??null,u,!1,f,g),e[Vn]=n.current,ho(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new da(n)},un.render=function(e,n,o){if(!pa(n))throw Error(i(200));return ha(null,e,n,!1,o)},un.unmountComponentAtNode=function(e){if(!pa(e))throw Error(i(40));return e._reactRootContainer?(Xt(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1},un.unstable_batchedUpdates=Ws,un.unstable_renderSubtreeIntoContainer=function(e,n,o,l){if(!pa(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ha(e,n,o,!1,l)},un.version="18.3.1-next-f1338f8080-20240426",un}var jp;function Jh(){if(jp)return ou.exports;jp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),ou.exports=jv(),ou.exports}var Ip;function Iv(){if(Ip)return ga;Ip=1;var t=Jh();return ga.createRoot=t.createRoot,ga.hydrateRoot=t.hydrateRoot,ga}var Lv=Iv(),Do={},Lp;function Av(){if(Lp)return Do;Lp=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.parse=d,Do.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function d(y,E){const x=new c,v=y.length;if(v<2)return x;const S=(E==null?void 0:E.decode)||b;let _=0;do{const C=y.indexOf("=",_);if(C===-1)break;const O=y.indexOf(";",_),P=O===-1?v:O;if(C>P){_=y.lastIndexOf(";",C-1)+1;continue}const D=h(y,_,C),N=p(y,C,D),T=y.slice(D,N);if(x[T]===void 0){let I=h(y,C+1,P),A=p(y,P,I);const $=S(y.slice(I,A));x[T]=$}_=P+1}while(_<v);return x}function h(y,E,x){do{const v=y.charCodeAt(E);if(v!==32&&v!==9)return E}while(++E<x);return x}function p(y,E,x){for(;E>x;){const v=y.charCodeAt(--E);if(v!==32&&v!==9)return E+1}return x}function m(y,E,x){const v=(x==null?void 0:x.encode)||encodeURIComponent;if(!t.test(y))throw new TypeError(`argument name is invalid: ${y}`);const S=v(E);if(!r.test(S))throw new TypeError(`argument val is invalid: ${E}`);let _=y+"="+S;if(!x)return _;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);_+="; Max-Age="+x.maxAge}if(x.domain){if(!i.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);_+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);_+="; Path="+x.path}if(x.expires){if(!w(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);_+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(_+="; HttpOnly"),x.secure&&(_+="; Secure"),x.partitioned&&(_+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return _}function b(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function w(y){return s.call(y)==="[object Date]"}return Do}Av();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ap="popstate";function Fv(t={}){function r(a,s){let{pathname:c,search:d,hash:h}=a.location;return Du("",{pathname:c,search:d,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(a,s){return typeof s=="string"?s:Qo(s)}return qv(r,i,null,t)}function De(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function jn(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function $v(){return Math.random().toString(36).substring(2,10)}function Fp(t,r){return{usr:t.state,key:t.key,idx:r}}function Du(t,r,i=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?$r(r):r,state:i,key:r&&r.key||a||$v()}}function Qo({pathname:t="/",search:r="",hash:i=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function $r(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substring(i),t=t.substring(0,i));let a=t.indexOf("?");a>=0&&(r.search=t.substring(a),t=t.substring(0,a)),t&&(r.pathname=t)}return r}function qv(t,r,i,a={}){let{window:s=document.defaultView,v5Compat:c=!1}=a,d=s.history,h="POP",p=null,m=b();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function b(){return(d.state||{idx:null}).idx}function w(){h="POP";let S=b(),_=S==null?null:S-m;m=S,p&&p({action:h,location:v.location,delta:_})}function y(S,_){h="PUSH";let C=Du(v.location,S,_);m=b()+1;let O=Fp(C,m),P=v.createHref(C);try{d.pushState(O,"",P)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(P)}c&&p&&p({action:h,location:v.location,delta:1})}function E(S,_){h="REPLACE";let C=Du(v.location,S,_);m=b();let O=Fp(C,m),P=v.createHref(C);d.replaceState(O,"",P),c&&p&&p({action:h,location:v.location,delta:0})}function x(S){let _=s.location.origin!=="null"?s.location.origin:s.location.href,C=typeof S=="string"?S:Qo(S);return C=C.replace(/ $/,"%20"),De(_,`No window.location.(origin|href) available to create URL for href: ${C}`),new URL(C,_)}let v={get action(){return h},get location(){return t(s,d)},listen(S){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(Ap,w),p=S,()=>{s.removeEventListener(Ap,w),p=null}},createHref(S){return r(s,S)},createURL:x,encodeLocation(S){let _=x(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(S){return d.go(S)}};return v}function Zh(t,r,i="/"){return Uv(t,r,i,!1)}function Uv(t,r,i,a){let s=typeof r=="string"?$r(r):r,c=jt(s.pathname||"/",i);if(c==null)return null;let d=em(t);Bv(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=e0(c);h=Jv(d[p],m,a)}return h}function em(t,r=[],i=[],a=""){let s=(c,d,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};p.relativePath.startsWith("/")&&(De(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let m=it([a,p.relativePath]),b=i.concat(p);c.children&&c.children.length>0&&(De(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),em(c.children,r,b,m)),!(c.path==null&&!c.index)&&r.push({path:m,score:Yv(m,c.index),routesMeta:b})};return t.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))s(c,d);else for(let p of nm(c.path))s(c,d,p)}),r}function nm(t){let r=t.split("/");if(r.length===0)return[];let[i,...a]=r,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return s?[c,""]:[c];let d=nm(a.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),s&&h.push(...d),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function Bv(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:Gv(r.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Hv=/^:[\w-]+$/,Wv=3,Qv=2,Vv=1,Kv=10,Xv=-2,$p=t=>t==="*";function Yv(t,r){let i=t.split("/"),a=i.length;return i.some($p)&&(a+=Xv),r&&(a+=Qv),i.filter(s=>!$p(s)).reduce((s,c)=>s+(Hv.test(c)?Wv:c===""?Vv:Kv),a)}function Gv(t,r){return t.length===r.length&&t.slice(0,-1).every((a,s)=>a===r[s])?t[t.length-1]-r[r.length-1]:0}function Jv(t,r,i=!1){let{routesMeta:a}=t,s={},c="/",d=[];for(let h=0;h<a.length;++h){let p=a[h],m=h===a.length-1,b=c==="/"?r:r.slice(c.length)||"/",w=Ma({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},b),y=p.route;if(!w&&m&&i&&!a[a.length-1].route.index&&(w=Ma({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!w)return null;Object.assign(s,w.params),d.push({params:s,pathname:it([c,w.pathname]),pathnameBase:o0(it([c,w.pathnameBase])),route:y}),w.pathnameBase!=="/"&&(c=it([c,w.pathnameBase]))}return d}function Ma(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,a]=Zv(t.path,t.caseSensitive,t.end),s=r.match(i);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:a.reduce((m,{paramName:b,isOptional:w},y)=>{if(b==="*"){let x=h[y]||"";d=c.slice(0,c.length-x.length).replace(/(.)\/+$/,"$1")}const E=h[y];return w&&!E?m[b]=void 0:m[b]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:t}}function Zv(t,r=!1,i=!0){jn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),a]}function e0(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return jn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function jt(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,a=t.charAt(i);return a&&a!=="/"?null:t.slice(i)||"/"}function n0(t,r="/"){let{pathname:i,search:a="",hash:s=""}=typeof t=="string"?$r(t):t;return{pathname:i?i.startsWith("/")?i:t0(i,r):r,search:i0(a),hash:a0(s)}}function t0(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function lu(t,r,i,a){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function r0(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function ec(t){let r=r0(t);return r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase)}function nc(t,r,i,a=!1){let s;typeof t=="string"?s=$r(t):(s={...t},De(!s.pathname||!s.pathname.includes("?"),lu("?","pathname","search",s)),De(!s.pathname||!s.pathname.includes("#"),lu("#","pathname","hash",s)),De(!s.search||!s.search.includes("#"),lu("#","search","hash",s)));let c=t===""||s.pathname==="",d=c?"/":s.pathname,h;if(d==null)h=i;else{let w=r.length-1;if(!a&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),w-=1;s.pathname=y.join("/")}h=w>=0?r[w]:"/"}let p=n0(s,h),m=d&&d!=="/"&&d.endsWith("/"),b=(c||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||b)&&(p.pathname+="/"),p}var it=t=>t.join("/").replace(/\/\/+/g,"/"),o0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,a0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function l0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var tm=["POST","PUT","PATCH","DELETE"];new Set(tm);var s0=["GET",...tm];new Set(s0);var qr=k.createContext(null);qr.displayName="DataRouter";var Ya=k.createContext(null);Ya.displayName="DataRouterState";var rm=k.createContext({isTransitioning:!1});rm.displayName="ViewTransition";var u0=k.createContext(new Map);u0.displayName="Fetchers";var c0=k.createContext(null);c0.displayName="Await";var Ln=k.createContext(null);Ln.displayName="Navigation";var ni=k.createContext(null);ni.displayName="Location";var Qn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Qn.displayName="Route";var tc=k.createContext(null);tc.displayName="RouteError";function f0(t,{relative:r}={}){De(Ur(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=k.useContext(Ln),{hash:s,pathname:c,search:d}=ti(t,{relative:r}),h=c;return i!=="/"&&(h=c==="/"?i:it([i,c])),a.createHref({pathname:h,search:d,hash:s})}function Ur(){return k.useContext(ni)!=null}function At(){return De(Ur(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(ni).location}var om="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function im(t){k.useContext(Ln).static||k.useLayoutEffect(t)}function am(){let{isDataRoute:t}=k.useContext(Qn);return t?E0():d0()}function d0(){De(Ur(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(qr),{basename:r,navigator:i}=k.useContext(Ln),{matches:a}=k.useContext(Qn),{pathname:s}=At(),c=JSON.stringify(ec(a)),d=k.useRef(!1);return im(()=>{d.current=!0}),k.useCallback((p,m={})=>{if(jn(d.current,om),!d.current)return;if(typeof p=="number"){i.go(p);return}let b=nc(p,JSON.parse(c),s,m.relative==="path");t==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:it([r,b.pathname])),(m.replace?i.replace:i.push)(b,m.state,m)},[r,i,c,s,t])}k.createContext(null);function ti(t,{relative:r}={}){let{matches:i}=k.useContext(Qn),{pathname:a}=At(),s=JSON.stringify(ec(i));return k.useMemo(()=>nc(t,JSON.parse(s),a,r==="path"),[t,s,a,r])}function p0(t,r){return lm(t,r)}function lm(t,r,i,a){var _;De(Ur(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(Ln),{matches:c}=k.useContext(Qn),d=c[c.length-1],h=d?d.params:{},p=d?d.pathname:"/",m=d?d.pathnameBase:"/",b=d&&d.route;{let C=b&&b.path||"";sm(p,!b||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let w=At(),y;if(r){let C=typeof r=="string"?$r(r):r;De(m==="/"||((_=C.pathname)==null?void 0:_.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),y=C}else y=w;let E=y.pathname||"/",x=E;if(m!=="/"){let C=m.replace(/^\//,"").split("/");x="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Zh(t,{pathname:x});jn(b||v!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),jn(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=v0(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:it([m,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:it([m,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),c,i,a);return r&&S?k.createElement(ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function h0(){let t=S0(),r=l0(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},r),i?k.createElement("pre",{style:s},i):null,d)}var m0=k.createElement(h0,null),g0=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?k.createElement(Qn.Provider,{value:this.props.routeContext},k.createElement(tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y0({routeContext:t,match:r,children:i}){let a=k.useContext(qr);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(Qn.Provider,{value:t},i)}function v0(t,r=[],i=null,a=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let s=t,c=i==null?void 0:i.errors;if(c!=null){let p=s.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);De(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let d=!1,h=-1;if(i)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:b,errors:w}=i,y=m.route.loader&&!b.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||y){d=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((p,m,b)=>{let w,y=!1,E=null,x=null;i&&(w=c&&m.route.id?c[m.route.id]:void 0,E=m.route.errorElement||m0,d&&(h<0&&b===0?(sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,x=null):h===b&&(y=!0,x=m.route.hydrateFallbackElement||null)));let v=r.concat(s.slice(0,b+1)),S=()=>{let _;return w?_=E:y?_=x:m.route.Component?_=k.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,k.createElement(y0,{match:m,routeContext:{outlet:p,matches:v,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?k.createElement(g0,{location:i.location,revalidation:i.revalidation,component:E,error:w,children:S(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):S()},null)}function rc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b0(t){let r=k.useContext(qr);return De(r,rc(t)),r}function x0(t){let r=k.useContext(Ya);return De(r,rc(t)),r}function w0(t){let r=k.useContext(Qn);return De(r,rc(t)),r}function oc(t){let r=w0(t),i=r.matches[r.matches.length-1];return De(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function k0(){return oc("useRouteId")}function S0(){var a;let t=k.useContext(tc),r=x0("useRouteError"),i=oc("useRouteError");return t!==void 0?t:(a=r.errors)==null?void 0:a[i]}function E0(){let{router:t}=b0("useNavigate"),r=oc("useNavigate"),i=k.useRef(!1);return im(()=>{i.current=!0}),k.useCallback(async(s,c={})=>{jn(i.current,om),i.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:r,...c}))},[t,r])}var qp={};function sm(t,r,i){!r&&!qp[t]&&(qp[t]=!0,jn(!1,i))}k.memo(O0);function O0({routes:t,future:r,state:i}){return lm(t,void 0,i,r)}function Up({to:t,replace:r,state:i,relative:a}){De(Ur(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=k.useContext(Ln);jn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=k.useContext(Qn),{pathname:d}=At(),h=am(),p=nc(t,ec(c),d,a==="path"),m=JSON.stringify(p);return k.useEffect(()=>{h(JSON.parse(m),{replace:r,state:i,relative:a})},[h,m,a,r,i]),null}function Mu(t){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function C0({basename:t="/",children:r=null,location:i,navigationType:a="POP",navigator:s,static:c=!1}){De(!Ur(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:d,navigator:s,static:c,future:{}}),[d,s,c]);typeof i=="string"&&(i=$r(i));let{pathname:p="/",search:m="",hash:b="",state:w=null,key:y="default"}=i,E=k.useMemo(()=>{let x=jt(p,d);return x==null?null:{location:{pathname:x,search:m,hash:b,state:w,key:y},navigationType:a}},[d,p,m,b,w,y,a]);return jn(E!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:k.createElement(Ln.Provider,{value:h},k.createElement(ni.Provider,{children:r,value:E}))}function P0({children:t,location:r}){return p0(ju(t),r)}function ju(t,r=[]){let i=[];return k.Children.forEach(t,(a,s)=>{if(!k.isValidElement(a))return;let c=[...r,s];if(a.type===k.Fragment){i.push.apply(i,ju(a.props.children,c));return}De(a.type===Mu,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=ju(a.props.children,c)),i.push(d)}),i}var _a="get",Ra="application/x-www-form-urlencoded";function Ga(t){return t!=null&&typeof t.tagName=="string"}function _0(t){return Ga(t)&&t.tagName.toLowerCase()==="button"}function R0(t){return Ga(t)&&t.tagName.toLowerCase()==="form"}function T0(t){return Ga(t)&&t.tagName.toLowerCase()==="input"}function N0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function z0(t,r){return t.button===0&&(!r||r==="_self")&&!N0(t)}var ya=null;function D0(){if(ya===null)try{new FormData(document.createElement("form"),0),ya=!1}catch{ya=!0}return ya}var M0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function su(t){return t!=null&&!M0.has(t)?(jn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ra}"`),null):t}function j0(t,r){let i,a,s,c,d;if(R0(t)){let h=t.getAttribute("action");a=h?jt(h,r):null,i=t.getAttribute("method")||_a,s=su(t.getAttribute("enctype"))||Ra,c=new FormData(t)}else if(_0(t)||T0(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||h.getAttribute("action");if(a=p?jt(p,r):null,i=t.getAttribute("formmethod")||h.getAttribute("method")||_a,s=su(t.getAttribute("formenctype"))||su(h.getAttribute("enctype"))||Ra,c=new FormData(h,t),!D0()){let{name:m,type:b,value:w}=t;if(b==="image"){let y=m?`${m}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else m&&c.append(m,w)}}else{if(Ga(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_a,a=null,s=Ra,d=t}return c&&s==="text/plain"&&(d=c,c=void 0),{action:a,method:i.toLowerCase(),encType:s,formData:c,body:d}}function ic(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}async function I0(t,r){if(t.id in r)return r[t.id];try{let i=await import(t.module);return r[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function L0(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function A0(t,r,i){let a=await Promise.all(t.map(async s=>{let c=r.routes[s.route.id];if(c){let d=await I0(c,i);return d.links?d.links():[]}return[]}));return U0(a.flat(1).filter(L0).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Bp(t,r,i,a,s,c){let d=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var b;return i[m].pathname!==p.pathname||((b=i[m].route.path)==null?void 0:b.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?r.filter((p,m)=>d(p,m)||h(p,m)):c==="data"?r.filter((p,m)=>{var w;let b=a.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((w=i[0])==null?void 0:w.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function F0(t,r){return $0(t.map(i=>{let a=r.routes[i.route.id];if(!a)return[];let s=[a.module];return a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function $0(t){return[...new Set(t)]}function q0(t){let r={},i=Object.keys(t).sort();for(let a of i)r[a]=t[a];return r}function U0(t,r){let i=new Set;return new Set(r),t.reduce((a,s)=>{let c=JSON.stringify(q0(s));return i.has(c)||(i.add(c),a.push({key:c,link:s})),a},[])}function B0(t){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function H0(){let t=k.useContext(qr);return ic(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function W0(){let t=k.useContext(Ya);return ic(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ac=k.createContext(void 0);ac.displayName="FrameworkContext";function um(){let t=k.useContext(ac);return ic(t,"You must render this element inside a <HydratedRouter> element"),t}function Q0(t,r){let i=k.useContext(ac),[a,s]=k.useState(!1),[c,d]=k.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:b,onTouchStart:w}=r,y=k.useRef(null);k.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let v=_=>{_.forEach(C=>{d(C.isIntersecting)})},S=new IntersectionObserver(v,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[t]),k.useEffect(()=>{if(a){let v=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(v)}}},[a]);let E=()=>{s(!0)},x=()=>{s(!1),d(!1)};return i?t!=="intent"?[c,y,{}]:[c,y,{onFocus:Mo(h,E),onBlur:Mo(p,x),onMouseEnter:Mo(m,E),onMouseLeave:Mo(b,x),onTouchStart:Mo(w,E)}]:[!1,y,{}]}function Mo(t,r){return i=>{t&&t(i),i.defaultPrevented||r(i)}}function V0({page:t,...r}){let{router:i}=H0(),a=k.useMemo(()=>Zh(i.routes,t,i.basename),[i.routes,t,i.basename]);return a?k.createElement(X0,{page:t,matches:a,...r}):null}function K0(t){let{manifest:r,routeModules:i}=um(),[a,s]=k.useState([]);return k.useEffect(()=>{let c=!1;return A0(t,r,i).then(d=>{c||s(d)}),()=>{c=!0}},[t,r,i]),a}function X0({page:t,matches:r,...i}){let a=At(),{manifest:s,routeModules:c}=um(),{loaderData:d,matches:h}=W0(),p=k.useMemo(()=>Bp(t,r,h,s,a,"data"),[t,r,h,s,a]),m=k.useMemo(()=>Bp(t,r,h,s,a,"assets"),[t,r,h,s,a]),b=k.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let E=new Set,x=!1;if(r.forEach(S=>{var C;let _=s.routes[S.route.id];!_||!_.hasLoader||(!p.some(O=>O.route.id===S.route.id)&&S.route.id in d&&((C=c[S.route.id])!=null&&C.shouldRevalidate)||_.hasClientLoader?x=!0:E.add(S.route.id))}),E.size===0)return[];let v=B0(t);return x&&E.size>0&&v.searchParams.set("_routes",r.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[v.pathname+v.search]},[d,a,s,p,r,t,c]),w=k.useMemo(()=>F0(m,s),[m,s]),y=K0(m);return k.createElement(k.Fragment,null,b.map(E=>k.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),w.map(E=>k.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),y.map(({key:E,link:x})=>k.createElement("link",{key:E,...x})))}function Y0(...t){return r=>{t.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cm&&(window.__reactRouterVersion="7.1.3")}catch{}function G0({basename:t,children:r,window:i}){let a=k.useRef();a.current==null&&(a.current=Fv({window:i,v5Compat:!0}));let s=a.current,[c,d]=k.useState({action:s.action,location:s.location}),h=k.useCallback(p=>{k.startTransition(()=>d(p))},[d]);return k.useLayoutEffect(()=>s.listen(h),[s,h]),k.createElement(C0,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s})}var fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dm=k.forwardRef(function({onClick:r,discover:i="render",prefetch:a="none",relative:s,reloadDocument:c,replace:d,state:h,target:p,to:m,preventScrollReset:b,viewTransition:w,...y},E){let{basename:x}=k.useContext(Ln),v=typeof m=="string"&&fm.test(m),S,_=!1;if(typeof m=="string"&&v&&(S=m,cm))try{let A=new URL(window.location.href),$=m.startsWith("//")?new URL(A.protocol+m):new URL(m),W=jt($.pathname,x);$.origin===A.origin&&W!=null?m=W+$.search+$.hash:_=!0}catch{jn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=f0(m,{relative:s}),[O,P,D]=Q0(a,y),N=n1(m,{replace:d,state:h,target:p,preventScrollReset:b,relative:s,viewTransition:w});function T(A){r&&r(A),A.defaultPrevented||N(A)}let I=k.createElement("a",{...y,...D,href:S||C,onClick:_||c?r:T,ref:Y0(E,P),target:p,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?k.createElement(k.Fragment,null,I,k.createElement(V0,{page:C})):I});dm.displayName="Link";var J0=k.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:a="",end:s=!1,style:c,to:d,viewTransition:h,children:p,...m},b){let w=ti(d,{relative:m.relative}),y=At(),E=k.useContext(Ya),{navigator:x,basename:v}=k.useContext(Ln),S=E!=null&&a1(w)&&h===!0,_=x.encodeLocation?x.encodeLocation(w).pathname:w.pathname,C=y.pathname,O=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(C=C.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&v&&(O=jt(O,v)||O);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let D=C===_||!s&&C.startsWith(_)&&C.charAt(P)==="/",N=O!=null&&(O===_||!s&&O.startsWith(_)&&O.charAt(_.length)==="/"),T={isActive:D,isPending:N,isTransitioning:S},I=D?r:void 0,A;typeof a=="function"?A=a(T):A=[a,D?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let $=typeof c=="function"?c(T):c;return k.createElement(dm,{...m,"aria-current":I,className:A,ref:b,style:$,to:d,viewTransition:h},typeof p=="function"?p(T):p)});J0.displayName="NavLink";var Z0=k.forwardRef(({discover:t="render",fetcherKey:r,navigate:i,reloadDocument:a,replace:s,state:c,method:d=_a,action:h,onSubmit:p,relative:m,preventScrollReset:b,viewTransition:w,...y},E)=>{let x=o1(),v=i1(h,{relative:m}),S=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&fm.test(h),C=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let P=O.nativeEvent.submitter,D=(P==null?void 0:P.getAttribute("formmethod"))||d;x(P||O.currentTarget,{fetcherKey:r,method:D,navigate:i,replace:s,state:c,relative:m,preventScrollReset:b,viewTransition:w})};return k.createElement("form",{ref:E,method:S,action:v,onSubmit:a?p:C,...y,"data-discover":!_&&t==="render"?"true":void 0})});Z0.displayName="Form";function e1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pm(t){let r=k.useContext(qr);return De(r,e1(t)),r}function n1(t,{target:r,replace:i,state:a,preventScrollReset:s,relative:c,viewTransition:d}={}){let h=am(),p=At(),m=ti(t,{relative:c});return k.useCallback(b=>{if(z0(b,r)){b.preventDefault();let w=i!==void 0?i:Qo(p)===Qo(m);h(t,{replace:w,state:a,preventScrollReset:s,relative:c,viewTransition:d})}},[p,h,m,i,a,r,t,s,c,d])}var t1=0,r1=()=>`__${String(++t1)}__`;function o1(){let{router:t}=pm("useSubmit"),{basename:r}=k.useContext(Ln),i=k0();return k.useCallback(async(a,s={})=>{let{action:c,method:d,encType:h,formData:p,body:m}=j0(a,r);if(s.navigate===!1){let b=s.fetcherKey||r1();await t.fetch(b,i,s.action||c,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||d,formEncType:s.encType||h,flushSync:s.flushSync})}else await t.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||d,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:i,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,r,i])}function i1(t,{relative:r}={}){let{basename:i}=k.useContext(Ln),a=k.useContext(Qn);De(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),c={...ti(t||".",{relative:r})},d=At();if(t==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(b=>b==="")){h.delete("index"),p.filter(w=>w).forEach(w=>h.append("index",w));let b=h.toString();c.search=b?`?${b}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:it([i,c.pathname])),Qo(c)}function a1(t,r={}){let i=k.useContext(rm);De(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=pm("useViewTransitionState"),s=ti(t,{relative:r.relative});if(!i.isTransitioning)return!1;let c=jt(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=jt(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Ma(s.pathname,d)!=null||Ma(s.pathname,c)!=null}new TextEncoder;var l1=Jh();const Lr=ei(l1);var uu={exports:{}},cu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function s1(){if(Hp)return cu;Hp=1;var t=Xa();function r(p,m){return p===m&&(p!==0||1/p===1/m)||p!==p&&m!==m}var i=typeof Object.is=="function"?Object.is:r,a=t.useSyncExternalStore,s=t.useRef,c=t.useEffect,d=t.useMemo,h=t.useDebugValue;return cu.useSyncExternalStoreWithSelector=function(p,m,b,w,y){var E=s(null);if(E.current===null){var x={hasValue:!1,value:null};E.current=x}else x=E.current;E=d(function(){function S(D){if(!_){if(_=!0,C=D,D=w(D),y!==void 0&&x.hasValue){var N=x.value;if(y(N,D))return O=N}return O=D}if(N=O,i(C,D))return N;var T=w(D);return y!==void 0&&y(N,T)?(C=D,N):(C=D,O=T)}var _=!1,C,O,P=b===void 0?null:b;return[function(){return S(m())},P===null?void 0:function(){return S(P())}]},[m,b,w,y]);var v=a(p,E[0],E[1]);return c(function(){x.hasValue=!0,x.value=v},[v]),h(v),v},cu}var Wp;function u1(){return Wp||(Wp=1,uu.exports=s1()),uu.exports}var c1=u1();function hm(t){t()}function f1(){let t=null,r=null;return{clear(){t=null,r=null},notify(){hm(()=>{let i=t;for(;i;)i.callback(),i=i.next})},get(){const i=[];let a=t;for(;a;)i.push(a),a=a.next;return i},subscribe(i){let a=!0;const s=r={callback:i,next:null,prev:r};return s.prev?s.prev.next=s:t=s,function(){!a||t===null||(a=!1,s.next?s.next.prev=s.prev:r=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var Qp={notify(){},get:()=>[]};function d1(t,r){let i,a=Qp,s=0,c=!1;function d(v){b();const S=a.subscribe(v);let _=!1;return()=>{_||(_=!0,S(),w())}}function h(){a.notify()}function p(){x.onStateChange&&x.onStateChange()}function m(){return c}function b(){s++,i||(i=t.subscribe(p),a=f1())}function w(){s--,i&&s===0&&(i(),i=void 0,a.clear(),a=Qp)}function y(){c||(c=!0,b())}function E(){c&&(c=!1,w())}const x={addNestedSub:d,notifyNestedSubs:h,handleChangeWrapper:p,isSubscribed:m,trySubscribe:y,tryUnsubscribe:E,getListeners:()=>a};return x}var p1=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h1=p1(),m1=()=>typeof navigator<"u"&&navigator.product==="ReactNative",g1=m1(),y1=()=>h1||g1?k.useLayoutEffect:k.useEffect,v1=y1();function Vp(t,r){return t===r?t!==0||r!==0||1/t===1/r:t!==t&&r!==r}function Bo(t,r){if(Vp(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;const i=Object.keys(t),a=Object.keys(r);if(i.length!==a.length)return!1;for(let s=0;s<i.length;s++)if(!Object.prototype.hasOwnProperty.call(r,i[s])||!Vp(t[i[s]],r[i[s]]))return!1;return!0}var fu=Symbol.for("react-redux-context"),du=typeof globalThis<"u"?globalThis:{};function b1(){if(!k.createContext)return{};const t=du[fu]??(du[fu]=new Map);let r=t.get(k.createContext);return r||(r=k.createContext(null),t.set(k.createContext,r)),r}var It=b1();function x1(t){const{children:r,context:i,serverState:a,store:s}=t,c=k.useMemo(()=>{const p=d1(s);return{store:s,subscription:p,getServerState:a?()=>a:void 0}},[s,a]),d=k.useMemo(()=>s.getState(),[s]);v1(()=>{const{subscription:p}=c;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),d!==s.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[c,d]);const h=i||It;return k.createElement(h.Provider,{value:c},r)}var w1=x1;function lc(t=It){return function(){return k.useContext(t)}}var mm=lc();function gm(t=It){const r=t===It?mm:lc(t),i=()=>{const{store:a}=r();return a};return Object.assign(i,{withTypes:()=>i}),i}var ym=gm();function k1(t=It){const r=t===It?ym:gm(t),i=()=>r().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var ri=k1(),S1=(t,r)=>t===r;function E1(t=It){const r=t===It?mm:lc(t),i=(a,s={})=>{const{equalityFn:c=S1}=typeof s=="function"?{equalityFn:s}:s,d=r(),{store:h,subscription:p,getServerState:m}=d;k.useRef(!0);const b=k.useCallback({[a.name](y){return a(y)}}[a.name],[a]),w=c1.useSyncExternalStoreWithSelector(p.addNestedSub,h.getState,m||h.getState,b,c);return k.useDebugValue(w),w};return Object.assign(i,{withTypes:()=>i}),i}var ja=E1(),O1=hm;function Xe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var C1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Kp=C1,pu=()=>Math.random().toString(36).substring(7).split("").join("."),P1={INIT:`@@redux/INIT${pu()}`,REPLACE:`@@redux/REPLACE${pu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pu()}`},Ia=P1;function Hn(t){if(typeof t!="object"||t===null)return!1;let r=t;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r||Object.getPrototypeOf(t)===null}function sc(t,r,i){if(typeof t!="function")throw new Error(Xe(2));if(typeof r=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof r=="function"&&typeof i>"u"&&(i=r,r=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Xe(1));return i(sc)(t,r)}let a=t,s=r,c=new Map,d=c,h=0,p=!1;function m(){d===c&&(d=new Map,c.forEach((S,_)=>{d.set(_,S)}))}function b(){if(p)throw new Error(Xe(3));return s}function w(S){if(typeof S!="function")throw new Error(Xe(4));if(p)throw new Error(Xe(5));let _=!0;m();const C=h++;return d.set(C,S),function(){if(_){if(p)throw new Error(Xe(6));_=!1,m(),d.delete(C),c=null}}}function y(S){if(!Hn(S))throw new Error(Xe(7));if(typeof S.type>"u")throw new Error(Xe(8));if(typeof S.type!="string")throw new Error(Xe(17));if(p)throw new Error(Xe(9));try{p=!0,s=a(s,S)}finally{p=!1}return(c=d).forEach(C=>{C()}),S}function E(S){if(typeof S!="function")throw new Error(Xe(10));a=S,y({type:Ia.REPLACE})}function x(){const S=w;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(Xe(11));function C(){const P=_;P.next&&P.next(b())}return C(),{unsubscribe:S(C)}},[Kp](){return this}}}return y({type:Ia.INIT}),{dispatch:y,subscribe:w,getState:b,replaceReducer:E,[Kp]:x}}function _1(t){Object.keys(t).forEach(r=>{const i=t[r];if(typeof i(void 0,{type:Ia.INIT})>"u")throw new Error(Xe(12));if(typeof i(void 0,{type:Ia.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function uc(t){const r=Object.keys(t),i={};for(let c=0;c<r.length;c++){const d=r[c];typeof t[d]=="function"&&(i[d]=t[d])}const a=Object.keys(i);let s;try{_1(i)}catch(c){s=c}return function(d={},h){if(s)throw s;let p=!1;const m={};for(let b=0;b<a.length;b++){const w=a[b],y=i[w],E=d[w],x=y(E,h);if(typeof x>"u")throw h&&h.type,new Error(Xe(14));m[w]=x,p=p||x!==E}return p=p||a.length!==Object.keys(d).length,p?m:d}}function La(...t){return t.length===0?r=>r:t.length===1?t[0]:t.reduce((r,i)=>(...a)=>r(i(...a)))}function R1(...t){return r=>(i,a)=>{const s=r(i,a);let c=()=>{throw new Error(Xe(15))};const d={getState:s.getState,dispatch:(p,...m)=>c(p,...m)},h=t.map(p=>p(d));return c=La(...h)(s.dispatch),{...s,dispatch:c}}}function vm(t){return Hn(t)&&"type"in t&&typeof t.type=="string"}var cc=Symbol.for("immer-nothing"),Ho=Symbol.for("immer-draftable"),cn=Symbol.for("immer-state");function Ye(t,...r){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var tr=Object.getPrototypeOf;function Wn(t){return!!t&&!!t[cn]}function In(t){var r;return t?bm(t)||Array.isArray(t)||!!t[Ho]||!!((r=t.constructor)!=null&&r[Ho])||oi(t)||ii(t):!1}var T1=Object.prototype.constructor.toString();function bm(t){if(!t||typeof t!="object")return!1;const r=tr(t);if(r===null)return!0;const i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===T1}function N1(t){return Wn(t)||Ye(15,t),t[cn].base_}function Vo(t,r){rr(t)===0?Reflect.ownKeys(t).forEach(i=>{r(i,t[i],t)}):t.forEach((i,a)=>r(a,i,t))}function rr(t){const r=t[cn];return r?r.type_:Array.isArray(t)?1:oi(t)?2:ii(t)?3:0}function Ko(t,r){return rr(t)===2?t.has(r):Object.prototype.hasOwnProperty.call(t,r)}function hu(t,r){return rr(t)===2?t.get(r):t[r]}function xm(t,r,i){const a=rr(t);a===2?t.set(r,i):a===3?t.add(i):t[r]=i}function z1(t,r){return t===r?t!==0||1/t===1/r:t!==t&&r!==r}function oi(t){return t instanceof Map}function ii(t){return t instanceof Set}function Zt(t){return t.copy_||t.base_}function Iu(t,r){if(oi(t))return new Map(t);if(ii(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const i=bm(t);if(r===!0||r==="class_only"&&!i){const a=Object.getOwnPropertyDescriptors(t);delete a[cn];let s=Reflect.ownKeys(a);for(let c=0;c<s.length;c++){const d=s[c],h=a[d];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(a[d]={configurable:!0,writable:!0,enumerable:h.enumerable,value:t[d]})}return Object.create(tr(t),a)}else{const a=tr(t);if(a!==null&&i)return{...t};const s=Object.create(a);return Object.assign(s,t)}}function fc(t,r=!1){return Ja(t)||Wn(t)||!In(t)||(rr(t)>1&&(t.set=t.add=t.clear=t.delete=D1),Object.freeze(t),r&&Object.entries(t).forEach(([i,a])=>fc(a,!0))),t}function D1(){Ye(2)}function Ja(t){return Object.isFrozen(t)}var Lu={};function or(t){const r=Lu[t];return r||Ye(0,t),r}function M1(t,r){Lu[t]||(Lu[t]=r)}var Xo;function wm(){return Xo}function j1(t,r){return{drafts_:[],parent_:t,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Xp(t,r){r&&(or("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=r)}function Au(t){Fu(t),t.drafts_.forEach(I1),t.drafts_=null}function Fu(t){t===Xo&&(Xo=t.parent_)}function Yp(t){return Xo=j1(Xo,t)}function I1(t){const r=t[cn];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function Gp(t,r){r.unfinalizedDrafts_=r.drafts_.length;const i=r.drafts_[0];return t!==void 0&&t!==i?(i[cn].modified_&&(Au(r),Ye(4)),In(t)&&(t=Aa(r,t),r.parent_||Fa(r,t)),r.patches_&&or("Patches").generateReplacementPatches_(i[cn].base_,t,r.patches_,r.inversePatches_)):t=Aa(r,i,[]),Au(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),t!==cc?t:void 0}function Aa(t,r,i){if(Ja(r))return r;const a=r[cn];if(!a)return Vo(r,(s,c)=>Jp(t,a,r,s,c,i)),r;if(a.scope_!==t)return r;if(!a.modified_)return Fa(t,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const s=a.copy_;let c=s,d=!1;a.type_===3&&(c=new Set(s),s.clear(),d=!0),Vo(c,(h,p)=>Jp(t,a,s,h,p,i,d)),Fa(t,s,!1),i&&t.patches_&&or("Patches").generatePatches_(a,i,t.patches_,t.inversePatches_)}return a.copy_}function Jp(t,r,i,a,s,c,d){if(Wn(s)){const h=c&&r&&r.type_!==3&&!Ko(r.assigned_,a)?c.concat(a):void 0,p=Aa(t,s,h);if(xm(i,a,p),Wn(p))t.canAutoFreeze_=!1;else return}else d&&i.add(s);if(In(s)&&!Ja(s)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Aa(t,s),(!r||!r.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,a)&&Fa(t,s)}}function Fa(t,r,i=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&fc(r,i)}function L1(t,r){const i=Array.isArray(t),a={type_:i?1:0,scope_:r?r.scope_:wm(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=a,c=dc;i&&(s=[a],c=Yo);const{revoke:d,proxy:h}=Proxy.revocable(s,c);return a.draft_=h,a.revoke_=d,h}var dc={get(t,r){if(r===cn)return t;const i=Zt(t);if(!Ko(i,r))return A1(t,i,r);const a=i[r];return t.finalized_||!In(a)?a:a===mu(t.base_,r)?(gu(t),t.copy_[r]=qu(a,t)):a},has(t,r){return r in Zt(t)},ownKeys(t){return Reflect.ownKeys(Zt(t))},set(t,r,i){const a=km(Zt(t),r);if(a!=null&&a.set)return a.set.call(t.draft_,i),!0;if(!t.modified_){const s=mu(Zt(t),r),c=s==null?void 0:s[cn];if(c&&c.base_===i)return t.copy_[r]=i,t.assigned_[r]=!1,!0;if(z1(i,s)&&(i!==void 0||Ko(t.base_,r)))return!0;gu(t),$u(t)}return t.copy_[r]===i&&(i!==void 0||r in t.copy_)||Number.isNaN(i)&&Number.isNaN(t.copy_[r])||(t.copy_[r]=i,t.assigned_[r]=!0),!0},deleteProperty(t,r){return mu(t.base_,r)!==void 0||r in t.base_?(t.assigned_[r]=!1,gu(t),$u(t)):delete t.assigned_[r],t.copy_&&delete t.copy_[r],!0},getOwnPropertyDescriptor(t,r){const i=Zt(t),a=Reflect.getOwnPropertyDescriptor(i,r);return a&&{writable:!0,configurable:t.type_!==1||r!=="length",enumerable:a.enumerable,value:i[r]}},defineProperty(){Ye(11)},getPrototypeOf(t){return tr(t.base_)},setPrototypeOf(){Ye(12)}},Yo={};Vo(dc,(t,r)=>{Yo[t]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}});Yo.deleteProperty=function(t,r){return Yo.set.call(this,t,r,void 0)};Yo.set=function(t,r,i){return dc.set.call(this,t[0],r,i,t[0])};function mu(t,r){const i=t[cn];return(i?Zt(i):t)[r]}function A1(t,r,i){var s;const a=km(r,i);return a?"value"in a?a.value:(s=a.get)==null?void 0:s.call(t.draft_):void 0}function km(t,r){if(!(r in t))return;let i=tr(t);for(;i;){const a=Object.getOwnPropertyDescriptor(i,r);if(a)return a;i=tr(i)}}function $u(t){t.modified_||(t.modified_=!0,t.parent_&&$u(t.parent_))}function gu(t){t.copy_||(t.copy_=Iu(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var F1=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(r,i,a)=>{if(typeof r=="function"&&typeof i!="function"){const c=i;i=r;const d=this;return function(p=c,...m){return d.produce(p,b=>i.call(this,b,...m))}}typeof i!="function"&&Ye(6),a!==void 0&&typeof a!="function"&&Ye(7);let s;if(In(r)){const c=Yp(this),d=qu(r,void 0);let h=!0;try{s=i(d),h=!1}finally{h?Au(c):Fu(c)}return Xp(c,a),Gp(s,c)}else if(!r||typeof r!="object"){if(s=i(r),s===void 0&&(s=r),s===cc&&(s=void 0),this.autoFreeze_&&fc(s,!0),a){const c=[],d=[];or("Patches").generateReplacementPatches_(r,s,c,d),a(c,d)}return s}else Ye(1,r)},this.produceWithPatches=(r,i)=>{if(typeof r=="function")return(d,...h)=>this.produceWithPatches(d,p=>r(p,...h));let a,s;return[this.produce(r,i,(d,h)=>{a=d,s=h}),a,s]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){In(t)||Ye(8),Wn(t)&&(t=$1(t));const r=Yp(this),i=qu(t,void 0);return i[cn].isManual_=!0,Fu(r),i}finishDraft(t,r){const i=t&&t[cn];(!i||!i.isManual_)&&Ye(9);const{scope_:a}=i;return Xp(a,r),Gp(void 0,a)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,r){let i;for(i=r.length-1;i>=0;i--){const s=r[i];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}i>-1&&(r=r.slice(i+1));const a=or("Patches").applyPatches_;return Wn(t)?a(t,r):this.produce(t,s=>a(s,r))}};function qu(t,r){const i=oi(t)?or("MapSet").proxyMap_(t,r):ii(t)?or("MapSet").proxySet_(t,r):L1(t,r);return(r?r.scope_:wm()).drafts_.push(i),i}function $1(t){return Wn(t)||Ye(10,t),Sm(t)}function Sm(t){if(!In(t)||Ja(t))return t;const r=t[cn];let i;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,i=Iu(t,r.scope_.immer_.useStrictShallowCopy_)}else i=Iu(t,!0);return Vo(i,(a,s)=>{xm(i,a,Sm(s))}),r&&(r.finalized_=!1),i}function q1(){const r="replace",i="add",a="remove";function s(y,E,x,v){switch(y.type_){case 0:case 2:return d(y,E,x,v);case 1:return c(y,E,x,v);case 3:return h(y,E,x,v)}}function c(y,E,x,v){let{base_:S,assigned_:_}=y,C=y.copy_;C.length<S.length&&([S,C]=[C,S],[x,v]=[v,x]);for(let O=0;O<S.length;O++)if(_[O]&&C[O]!==S[O]){const P=E.concat([O]);x.push({op:r,path:P,value:w(C[O])}),v.push({op:r,path:P,value:w(S[O])})}for(let O=S.length;O<C.length;O++){const P=E.concat([O]);x.push({op:i,path:P,value:w(C[O])})}for(let O=C.length-1;S.length<=O;--O){const P=E.concat([O]);v.push({op:a,path:P})}}function d(y,E,x,v){const{base_:S,copy_:_}=y;Vo(y.assigned_,(C,O)=>{const P=hu(S,C),D=hu(_,C),N=O?Ko(S,C)?r:i:a;if(P===D&&N===r)return;const T=E.concat(C);x.push(N===a?{op:N,path:T}:{op:N,path:T,value:D}),v.push(N===i?{op:a,path:T}:N===a?{op:i,path:T,value:w(P)}:{op:r,path:T,value:w(P)})})}function h(y,E,x,v){let{base_:S,copy_:_}=y,C=0;S.forEach(O=>{if(!_.has(O)){const P=E.concat([C]);x.push({op:a,path:P,value:O}),v.unshift({op:i,path:P,value:O})}C++}),C=0,_.forEach(O=>{if(!S.has(O)){const P=E.concat([C]);x.push({op:i,path:P,value:O}),v.unshift({op:a,path:P,value:O})}C++})}function p(y,E,x,v){x.push({op:r,path:[],value:E===cc?void 0:E}),v.push({op:r,path:[],value:y})}function m(y,E){return E.forEach(x=>{const{path:v,op:S}=x;let _=y;for(let D=0;D<v.length-1;D++){const N=rr(_);let T=v[D];typeof T!="string"&&typeof T!="number"&&(T=""+T),(N===0||N===1)&&(T==="__proto__"||T==="constructor")&&Ye(19),typeof _=="function"&&T==="prototype"&&Ye(19),_=hu(_,T),typeof _!="object"&&Ye(18,v.join("/"))}const C=rr(_),O=b(x.value),P=v[v.length-1];switch(S){case r:switch(C){case 2:return _.set(P,O);case 3:Ye(16);default:return _[P]=O}case i:switch(C){case 1:return P==="-"?_.push(O):_.splice(P,0,O);case 2:return _.set(P,O);case 3:return _.add(O);default:return _[P]=O}case a:switch(C){case 1:return _.splice(P,1);case 2:return _.delete(P);case 3:return _.delete(x.value);default:return delete _[P]}default:Ye(17,S)}}),y}function b(y){if(!In(y))return y;if(Array.isArray(y))return y.map(b);if(oi(y))return new Map(Array.from(y.entries()).map(([x,v])=>[x,b(v)]));if(ii(y))return new Set(Array.from(y).map(b));const E=Object.create(tr(y));for(const x in y)E[x]=b(y[x]);return Ko(y,Ho)&&(E[Ho]=y[Ho]),E}function w(y){return Wn(y)?b(y):y}M1("Patches",{applyPatches_:m,generatePatches_:s,generateReplacementPatches_:p})}var gn=new F1,ai=gn.produce,Em=gn.produceWithPatches.bind(gn);gn.setAutoFreeze.bind(gn);gn.setUseStrictShallowCopy.bind(gn);var Zp=gn.applyPatches.bind(gn);gn.createDraft.bind(gn);gn.finishDraft.bind(gn);function U1(t,r=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(r)}function B1(t,r=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(r)}function H1(t,r="expected all items to be functions, instead received the following types: "){if(!t.every(i=>typeof i=="function")){const i=t.map(a=>typeof a=="function"?`function ${a.name||"unnamed"}()`:typeof a).join(", ");throw new TypeError(`${r}[${i}]`)}}var eh=t=>Array.isArray(t)?t:[t];function W1(t){const r=Array.isArray(t[0])?t[0]:t;return H1(r,"createSelector expects all input-selectors to be functions, but received the following types: "),r}function Q1(t,r){const i=[],{length:a}=t;for(let s=0;s<a;s++)i.push(t[s].apply(null,r));return i}var V1=class{constructor(t){this.value=t}deref(){return this.value}},K1=typeof WeakRef<"u"?WeakRef:V1,X1=0,nh=1;function va(){return{s:X1,v:void 0,o:null,p:null}}function $a(t,r={}){let i=va();const{resultEqualityCheck:a}=r;let s,c=0;function d(){var w;let h=i;const{length:p}=arguments;for(let y=0,E=p;y<E;y++){const x=arguments[y];if(typeof x=="function"||typeof x=="object"&&x!==null){let v=h.o;v===null&&(h.o=v=new WeakMap);const S=v.get(x);S===void 0?(h=va(),v.set(x,h)):h=S}else{let v=h.p;v===null&&(h.p=v=new Map);const S=v.get(x);S===void 0?(h=va(),v.set(x,h)):h=S}}const m=h;let b;if(h.s===nh)b=h.v;else if(b=t.apply(null,arguments),c++,a){const y=((w=s==null?void 0:s.deref)==null?void 0:w.call(s))??s;y!=null&&a(y,b)&&(b=y,c!==0&&c--),s=typeof b=="object"&&b!==null||typeof b=="function"?new K1(b):b}return m.s=nh,m.v=b,b}return d.clearCache=()=>{i=va(),d.resetResultsCount()},d.resultsCount=()=>c,d.resetResultsCount=()=>{c=0},d}function Y1(t,...r){const i=typeof t=="function"?{memoize:t,memoizeOptions:r}:t,a=(...s)=>{let c=0,d=0,h,p={},m=s.pop();typeof m=="object"&&(p=m,m=s.pop()),U1(m,`createSelector expects an output function after the inputs, but received: [${typeof m}]`);const b={...i,...p},{memoize:w,memoizeOptions:y=[],argsMemoize:E=$a,argsMemoizeOptions:x=[],devModeChecks:v={}}=b,S=eh(y),_=eh(x),C=W1(s),O=w(function(){return c++,m.apply(null,arguments)},...S),P=E(function(){d++;const N=Q1(C,arguments);return h=O.apply(null,N),h},..._);return Object.assign(P,{resultFunc:m,memoizedResultFunc:O,dependencies:C,dependencyRecomputations:()=>d,resetDependencyRecomputations:()=>{d=0},lastResult:()=>h,recomputations:()=>c,resetRecomputations:()=>{c=0},memoize:w,argsMemoize:E})};return Object.assign(a,{withTypes:()=>a}),a}var pc=Y1($a),G1=Object.assign((t,r=pc)=>{B1(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const i=Object.keys(t),a=i.map(c=>t[c]);return r(a,(...c)=>c.reduce((d,h,p)=>(d[i[p]]=h,d),{}))},{withTypes:()=>G1});function Om(t){return({dispatch:i,getState:a})=>s=>c=>typeof c=="function"?c(i,a,t):s(c)}var J1=Om(),Z1=Om,eb=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?La:La.apply(null,arguments)},nb=t=>t&&typeof t.match=="function";function Dn(t,r){function i(...a){if(r){let s=r(...a);if(!s)throw new Error(Mn(0));return{type:t,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:t,payload:a[0]}}return i.toString=()=>`${t}`,i.type=t,i.match=a=>vm(a)&&a.type===t,i}var Cm=class Fo extends Array{constructor(...r){super(...r),Object.setPrototypeOf(this,Fo.prototype)}static get[Symbol.species](){return Fo}concat(...r){return super.concat.apply(this,r)}prepend(...r){return r.length===1&&Array.isArray(r[0])?new Fo(...r[0].concat(this)):new Fo(...r.concat(this))}};function th(t){return In(t)?ai(t,()=>{}):t}function rh(t,r,i){return t.has(r)?t.get(r):t.set(r,i(r)).get(r)}function tb(t){return typeof t=="boolean"}var rb=()=>function(r){const{thunk:i=!0,immutableCheck:a=!0,serializableCheck:s=!0,actionCreatorCheck:c=!0}=r??{};let d=new Cm;return i&&(tb(i)?d.push(J1):d.push(Z1(i.extraArgument))),d},nr="RTK_autoBatch",jo=()=>t=>({payload:t,meta:{[nr]:!0}}),oh=t=>r=>{setTimeout(r,t)},ob=(t={type:"raf"})=>r=>(...i)=>{const a=r(...i);let s=!0,c=!1,d=!1;const h=new Set,p=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:oh(10):t.type==="callback"?t.queueNotification:oh(t.timeout),m=()=>{d=!1,c&&(c=!1,h.forEach(b=>b()))};return Object.assign({},a,{subscribe(b){const w=()=>s&&b(),y=a.subscribe(w);return h.add(b),()=>{y(),h.delete(b)}},dispatch(b){var w;try{return s=!((w=b==null?void 0:b.meta)!=null&&w[nr]),c=!s,c&&(d||(d=!0,p(m))),a.dispatch(b)}finally{s=!0}}})},ib=t=>function(i){const{autoBatch:a=!0}=i??{};let s=new Cm(t);return a&&s.push(ob(typeof a=="object"?a:void 0)),s};function ab(t){const r=rb(),{reducer:i=void 0,middleware:a,devTools:s=!0,preloadedState:c=void 0,enhancers:d=void 0}=t;let h;if(typeof i=="function")h=i;else if(Hn(i))h=uc(i);else throw new Error(Mn(1));let p;typeof a=="function"?p=a(r):p=r();let m=La;s&&(m=eb({trace:!1,...typeof s=="object"&&s}));const b=R1(...p),w=ib(b);let y=typeof d=="function"?d(w):w();const E=m(...y);return sc(h,c,E)}function Pm(t){const r={},i=[];let a;const s={addCase(c,d){const h=typeof c=="string"?c:c.type;if(!h)throw new Error(Mn(28));if(h in r)throw new Error(Mn(29));return r[h]=d,s},addMatcher(c,d){return i.push({matcher:c,reducer:d}),s},addDefaultCase(c){return a=c,s}};return t(s),[r,i,a]}function lb(t){return typeof t=="function"}function sb(t,r){let[i,a,s]=Pm(r),c;if(lb(t))c=()=>th(t());else{const h=th(t);c=()=>h}function d(h=c(),p){let m=[i[p.type],...a.filter(({matcher:b})=>b(p)).map(({reducer:b})=>b)];return m.filter(b=>!!b).length===0&&(m=[s]),m.reduce((b,w)=>{if(w)if(Wn(b)){const E=w(b,p);return E===void 0?b:E}else{if(In(b))return ai(b,y=>w(y,p));{const y=w(b,p);if(y===void 0){if(b===null)return b;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return b},h)}return d.getInitialState=c,d}var _m=(t,r)=>nb(t)?t.match(r):t(r);function lt(...t){return r=>t.some(i=>_m(i,r))}function Wo(...t){return r=>t.every(i=>_m(i,r))}function Za(t,r){if(!t||!t.meta)return!1;const i=typeof t.meta.requestId=="string",a=r.indexOf(t.meta.requestStatus)>-1;return i&&a}function li(t){return typeof t[0]=="function"&&"pending"in t[0]&&"fulfilled"in t[0]&&"rejected"in t[0]}function hc(...t){return t.length===0?r=>Za(r,["pending"]):li(t)?lt(...t.map(r=>r.pending)):hc()(t[0])}function Fr(...t){return t.length===0?r=>Za(r,["rejected"]):li(t)?lt(...t.map(r=>r.rejected)):Fr()(t[0])}function el(...t){const r=i=>i&&i.meta&&i.meta.rejectedWithValue;return t.length===0?Wo(Fr(...t),r):li(t)?Wo(Fr(...t),r):el()(t[0])}function Lt(...t){return t.length===0?r=>Za(r,["fulfilled"]):li(t)?lt(...t.map(r=>r.fulfilled)):Lt()(t[0])}function Uu(...t){return t.length===0?r=>Za(r,["pending","fulfilled","rejected"]):li(t)?lt(...t.flatMap(r=>[r.pending,r.rejected,r.fulfilled])):Uu()(t[0])}var ub="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",mc=(t=21)=>{let r="",i=t;for(;i--;)r+=ub[Math.random()*64|0];return r},cb=["name","message","stack","code"],yu=class{constructor(t,r){nu(this,"_type");this.payload=t,this.meta=r}},ih=class{constructor(t,r){nu(this,"_type");this.payload=t,this.meta=r}},fb=t=>{if(typeof t=="object"&&t!==null){const r={};for(const i of cb)typeof t[i]=="string"&&(r[i]=t[i]);return r}return{message:String(t)}},ah=(()=>{function t(r,i,a){const s=Dn(r+"/fulfilled",(p,m,b,w)=>({payload:p,meta:{...w||{},arg:b,requestId:m,requestStatus:"fulfilled"}})),c=Dn(r+"/pending",(p,m,b)=>({payload:void 0,meta:{...b||{},arg:m,requestId:p,requestStatus:"pending"}})),d=Dn(r+"/rejected",(p,m,b,w,y)=>({payload:w,error:(a&&a.serializeError||fb)(p||"Rejected"),meta:{...y||{},arg:b,requestId:m,rejectedWithValue:!!w,requestStatus:"rejected",aborted:(p==null?void 0:p.name)==="AbortError",condition:(p==null?void 0:p.name)==="ConditionError"}}));function h(p){return(m,b,w)=>{const y=a!=null&&a.idGenerator?a.idGenerator(p):mc(),E=new AbortController;let x,v;function S(C){v=C,E.abort()}const _=async function(){var P,D;let C;try{let N=(P=a==null?void 0:a.condition)==null?void 0:P.call(a,p,{getState:b,extra:w});if(pb(N)&&(N=await N),N===!1||E.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((I,A)=>{x=()=>{A({name:"AbortError",message:v||"Aborted"})},E.signal.addEventListener("abort",x)});m(c(y,p,(D=a==null?void 0:a.getPendingMeta)==null?void 0:D.call(a,{requestId:y,arg:p},{getState:b,extra:w}))),C=await Promise.race([T,Promise.resolve(i(p,{dispatch:m,getState:b,extra:w,requestId:y,signal:E.signal,abort:S,rejectWithValue:(I,A)=>new yu(I,A),fulfillWithValue:(I,A)=>new ih(I,A)})).then(I=>{if(I instanceof yu)throw I;return I instanceof ih?s(I.payload,y,p,I.meta):s(I,y,p)})])}catch(N){C=N instanceof yu?d(null,y,p,N.payload,N.meta):d(N,y,p)}finally{x&&E.signal.removeEventListener("abort",x)}return a&&!a.dispatchConditionRejection&&d.match(C)&&C.meta.condition||m(C),C}();return Object.assign(_,{abort:S,requestId:y,arg:p,unwrap(){return _.then(db)}})}}return Object.assign(h,{pending:c,rejected:d,fulfilled:s,settled:lt(d,s),typePrefix:r})}return t.withTypes=()=>t,t})();function db(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function pb(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var hb=Symbol.for("rtk-slice-createasyncthunk");function mb(t,r){return`${t}/${r}`}function gb({creators:t}={}){var i;const r=(i=t==null?void 0:t.asyncThunk)==null?void 0:i[hb];return function(s){const{name:c,reducerPath:d=c}=s;if(!c)throw new Error(Mn(11));const h=(typeof s.reducers=="function"?s.reducers(vb()):s.reducers)||{},p=Object.keys(h),m={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},b={addCase(O,P){const D=typeof O=="string"?O:O.type;if(!D)throw new Error(Mn(12));if(D in m.sliceCaseReducersByType)throw new Error(Mn(13));return m.sliceCaseReducersByType[D]=P,b},addMatcher(O,P){return m.sliceMatchers.push({matcher:O,reducer:P}),b},exposeAction(O,P){return m.actionCreators[O]=P,b},exposeCaseReducer(O,P){return m.sliceCaseReducersByName[O]=P,b}};p.forEach(O=>{const P=h[O],D={reducerName:O,type:mb(c,O),createNotation:typeof s.reducers=="function"};xb(P)?kb(D,P,b,r):bb(D,P,b)});function w(){const[O={},P=[],D=void 0]=typeof s.extraReducers=="function"?Pm(s.extraReducers):[s.extraReducers],N={...O,...m.sliceCaseReducersByType};return sb(s.initialState,T=>{for(let I in N)T.addCase(I,N[I]);for(let I of m.sliceMatchers)T.addMatcher(I.matcher,I.reducer);for(let I of P)T.addMatcher(I.matcher,I.reducer);D&&T.addDefaultCase(D)})}const y=O=>O,E=new Map;let x;function v(O,P){return x||(x=w()),x(O,P)}function S(){return x||(x=w()),x.getInitialState()}function _(O,P=!1){function D(T){let I=T[O];return typeof I>"u"&&P&&(I=S()),I}function N(T=y){const I=rh(E,P,()=>new WeakMap);return rh(I,T,()=>{const A={};for(const[$,W]of Object.entries(s.selectors??{}))A[$]=yb(W,T,S,P);return A})}return{reducerPath:O,getSelectors:N,get selectors(){return N(D)},selectSlice:D}}const C={name:c,reducer:v,actions:m.actionCreators,caseReducers:m.sliceCaseReducersByName,getInitialState:S,..._(d),injectInto(O,{reducerPath:P,...D}={}){const N=P??d;return O.inject({reducerPath:N,reducer:v},D),{...C,..._(N,!0)}}};return C}}function yb(t,r,i,a){function s(c,...d){let h=r(c);return typeof h>"u"&&a&&(h=i()),t(h,...d)}return s.unwrapped=t,s}var zt=gb();function vb(){function t(r,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:r,...i}}return t.withTypes=()=>t,{reducer(r){return Object.assign({[r.name](...i){return r(...i)}}[r.name],{_reducerDefinitionType:"reducer"})},preparedReducer(r,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:r,reducer:i}},asyncThunk:t}}function bb({type:t,reducerName:r,createNotation:i},a,s){let c,d;if("reducer"in a){if(i&&!wb(a))throw new Error(Mn(17));c=a.reducer,d=a.prepare}else c=a;s.addCase(t,c).exposeCaseReducer(r,c).exposeAction(r,d?Dn(t,d):Dn(t))}function xb(t){return t._reducerDefinitionType==="asyncThunk"}function wb(t){return t._reducerDefinitionType==="reducerWithPrepare"}function kb({type:t,reducerName:r},i,a,s){if(!s)throw new Error(Mn(18));const{payloadCreator:c,fulfilled:d,pending:h,rejected:p,settled:m,options:b}=i,w=s(t,c,b);a.exposeAction(r,w),d&&a.addCase(w.fulfilled,d),h&&a.addCase(w.pending,h),p&&a.addCase(w.rejected,p),m&&a.addMatcher(w.settled,m),a.exposeCaseReducer(r,{fulfilled:d||ba,pending:h||ba,rejected:p||ba,settled:m||ba})}function ba(){}function Mn(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Rm=zt({name:"userData",initialState:{user:{},isLoggedIn:!1},reducers:{signIn:(t,r)=>{t.user={...t.user,...r.payload},t.isLoggedIn=!0},signOut:t=>{t.user={},t.isLoggedIn=!1}}}),Sb=t=>t.userData.isLoggedIn,Eb=t=>t.userData.user.name,{signIn:Ob,signOut:Cb}=Rm.actions,Pb=Rm.reducer;function _b(){const[t,r]=k.useState(""),[i,a]=k.useState(""),s=ri(),c=d=>{d.preventDefault(),s(Ob({name:t,password:i}))};return U.jsx("div",{className:"center",children:U.jsxs("div",{className:"signin",children:[U.jsx("h1",{style:{padding:"10px"},children:"🛒Welcome"}),U.jsxs("form",{onSubmit:c,name:"signin_form",children:[U.jsx("input",{type:"text",value:t,required:!0,placeholder:"Enter your name",onChange:d=>r(d.target.value)}),U.jsx("input",{type:"password",value:i,required:!0,placeholder:"Enter your Password",onChange:d=>a(d.target.value)}),U.jsx("button",{type:"submit",children:"Sign in"})]})]})})}var vu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var lh;function Rb(){return lh||(lh=1,function(t){(function(){var r={}.hasOwnProperty;function i(){for(var c="",d=0;d<arguments.length;d++){var h=arguments[d];h&&(c=s(c,a(h)))}return c}function a(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return i.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var d="";for(var h in c)r.call(c,h)&&c[h]&&(d=s(d,h));return d}function s(c,d){return d?c?c+" "+d:c+d:c}t.exports?(i.default=i,t.exports=i):window.classNames=i})()}(vu)),vu.exports}var Tb=Rb();const we=ei(Tb),Nb=["as","disabled"];function zb(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}function Db(t){return!t||t.trim()==="#"}function gc({tagName:t,disabled:r,href:i,target:a,rel:s,role:c,onClick:d,tabIndex:h=0,type:p}){t||(i!=null||a!=null||s!=null?t="a":t="button");const m={tagName:t};if(t==="button")return[{type:p||"button",disabled:r},m];const b=y=>{if((r||t==="a"&&Db(i))&&y.preventDefault(),r){y.stopPropagation();return}d==null||d(y)},w=y=>{y.key===" "&&(y.preventDefault(),b(y))};return t==="a"&&(i||(i="#"),r&&(i=void 0)),[{role:c??"button",disabled:void 0,tabIndex:r?void 0:h,href:i,target:t==="a"?a:void 0,"aria-disabled":r||void 0,rel:t==="a"?s:void 0,onClick:b,onKeyDown:w},m]}const Tm=k.forwardRef((t,r)=>{let{as:i,disabled:a}=t,s=zb(t,Nb);const[c,{tagName:d}]=gc(Object.assign({tagName:i,disabled:a},s));return U.jsx(d,Object.assign({},s,c,{ref:r}))});Tm.displayName="Button";const Mb=["xxl","xl","lg","md","sm","xs"],jb="xs",yc=k.createContext({prefixes:{},breakpoints:Mb,minBreakpoint:jb});function Pe(t,r){const{prefixes:i}=k.useContext(yc);return t||i[r]||r}function Ib(){const{breakpoints:t}=k.useContext(yc);return t}function Lb(){const{minBreakpoint:t}=k.useContext(yc);return t}const qa=k.forwardRef(({as:t,bsPrefix:r,variant:i="primary",size:a,active:s=!1,disabled:c=!1,className:d,...h},p)=>{const m=Pe(r,"btn"),[b,{tagName:w}]=gc({tagName:t,disabled:c,...h}),y=w;return U.jsx(y,{...b,...h,ref:p,disabled:c,className:we(d,m,s&&"active",i&&`${m}-${i}`,a&&`${m}-${a}`,h.href&&c&&"disabled")})});qa.displayName="Button";const vc=k.forwardRef(({bsPrefix:t,fluid:r=!1,as:i="div",className:a,...s},c)=>{const d=Pe(t,"container"),h=typeof r=="string"?`-${r}`:"-fluid";return U.jsx(i,{ref:c,...s,className:we(a,r?`${d}${h}`:d)})});vc.displayName="Container";var bu={exports:{}},xu,sh;function Ab(){if(sh)return xu;sh=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xu=t,xu}var wu,uh;function Fb(){if(uh)return wu;uh=1;var t=Ab();function r(){}function i(){}return i.resetWarningCache=r,wu=function(){function a(d,h,p,m,b,w){if(w!==t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function s(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:i,resetWarningCache:r};return c.PropTypes=c,c},wu}var ch;function $b(){return ch||(ch=1,bu.exports=Fb()()),bu.exports}var qb=$b();const ku=ei(qb);function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var a in i)({}).hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},Bu.apply(null,arguments)}function Nm(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)!==-1)continue;i[a]=t[a]}return i}function fh(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Ub(t){var r=Bb(t,"string");return typeof r=="symbol"?r:String(r)}function Bb(t,r){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var a=i.call(t,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Hb(t,r,i){var a=k.useRef(t!==void 0),s=k.useState(r),c=s[0],d=s[1],h=t!==void 0,p=a.current;return a.current=h,!h&&p&&c!==r&&d(r),[h?t:c,k.useCallback(function(m){for(var b=arguments.length,w=new Array(b>1?b-1:0),y=1;y<b;y++)w[y-1]=arguments[y];i&&i.apply(void 0,[m].concat(w)),d(m)},[i])]}function zm(t,r){return Object.keys(r).reduce(function(i,a){var s,c=i,d=c[fh(a)],h=c[a],p=Nm(c,[fh(a),a].map(Ub)),m=r[a],b=Hb(h,d,t[m]),w=b[0],y=b[1];return Bu({},p,(s={},s[a]=w,s[m]=y,s))},t)}function Hu(t,r){return Hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,a){return i.__proto__=a,i},Hu(t,r)}function Wb(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,Hu(t,r)}var Qb=Function.prototype.bind.call(Function.prototype.call,[].slice);function er(t,r){return Qb(t.querySelectorAll(r))}function Vb(){const[,t]=k.useReducer(r=>r+1,0);return t}const dh=t=>!t||typeof t=="function"?t:r=>{t.current=r};function Kb(t,r){const i=dh(t),a=dh(r);return s=>{i&&i(s),a&&a(s)}}function nl(t,r){return k.useMemo(()=>Kb(t,r),[t,r])}const bc=k.createContext(null);bc.displayName="NavContext";const Ua=k.createContext(null),xc=(t,r=null)=>t!=null?String(t):r||null,Dm=k.createContext(null),Xb="data-rr-ui-",Yb="rrUi";function tl(t){return`${Xb}${t}`}function Gb(t){return`${Yb}${t}`}function Jb(t){const r=k.useRef(t);return k.useEffect(()=>{r.current=t},[t]),r}function rt(t){const r=Jb(t);return k.useCallback(function(...i){return r.current&&r.current(...i)},[r])}const Zb=["as","active","eventKey"];function ex(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}function Mm({key:t,onClick:r,active:i,id:a,role:s,disabled:c}){const d=k.useContext(Ua),h=k.useContext(bc),p=k.useContext(Dm);let m=i;const b={role:s};if(h){!s&&h.role==="tablist"&&(b.role="tab");const w=h.getControllerId(t??null),y=h.getControlledId(t??null);b[tl("event-key")]=t,b.id=w||a,m=i==null&&t!=null?h.activeKey===t:i,(m||!(p!=null&&p.unmountOnExit)&&!(p!=null&&p.mountOnEnter))&&(b["aria-controls"]=y)}return b.role==="tab"&&(b["aria-selected"]=m,m||(b.tabIndex=-1),c&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=rt(w=>{c||(r==null||r(w),t!=null&&d&&!w.isPropagationStopped()&&d(t,w))}),[b,{isActive:m}]}const jm=k.forwardRef((t,r)=>{let{as:i=Tm,active:a,eventKey:s}=t,c=ex(t,Zb);const[d,h]=Mm(Object.assign({key:xc(s,c.href),active:a},c));return d[tl("active")]=h.isActive,U.jsx(i,Object.assign({},c,d,{ref:r}))});jm.displayName="NavItem";const nx=["as","onSelect","activeKey","role","onKeyDown"];function tx(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}const ph=()=>{},hh=tl("event-key"),Im=k.forwardRef((t,r)=>{let{as:i="div",onSelect:a,activeKey:s,role:c,onKeyDown:d}=t,h=tx(t,nx);const p=Vb(),m=k.useRef(!1),b=k.useContext(Ua),w=k.useContext(Dm);let y,E;w&&(c=c||"tablist",s=w.activeKey,y=w.getControlledId,E=w.getControllerId);const x=k.useRef(null),v=O=>{const P=x.current;if(!P)return null;const D=er(P,`[${hh}]:not([aria-disabled=true])`),N=P.querySelector("[aria-selected=true]");if(!N||N!==document.activeElement)return null;const T=D.indexOf(N);if(T===-1)return null;let I=T+O;return I>=D.length&&(I=0),I<0&&(I=D.length-1),D[I]},S=(O,P)=>{O!=null&&(a==null||a(O,P),b==null||b(O,P))},_=O=>{if(d==null||d(O),!w)return;let P;switch(O.key){case"ArrowLeft":case"ArrowUp":P=v(-1);break;case"ArrowRight":case"ArrowDown":P=v(1);break;default:return}P&&(O.preventDefault(),S(P.dataset[Gb("EventKey")]||null,O),m.current=!0,p())};k.useEffect(()=>{if(x.current&&m.current){const O=x.current.querySelector(`[${hh}][aria-selected=true]`);O==null||O.focus()}m.current=!1});const C=nl(r,x);return U.jsx(Ua.Provider,{value:S,children:U.jsx(bc.Provider,{value:{role:c,activeKey:xc(s),getControlledId:y||ph,getControllerId:E||ph},children:U.jsx(i,Object.assign({},h,{onKeyDown:_,ref:C,role:c}))})})});Im.displayName="Nav";const rx=Object.assign(Im,{Item:jm}),Br=k.createContext(null);Br.displayName="NavbarContext";const wc=k.createContext(null);wc.displayName="CardHeaderContext";const Lm=k.forwardRef(({className:t,bsPrefix:r,as:i="div",...a},s)=>(r=Pe(r,"nav-item"),U.jsx(i,{ref:s,className:we(t,r),...a})));Lm.displayName="NavItem";function ox(){const t=k.useRef(!0),r=k.useRef(()=>t.current);return k.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),r.current}function ix(t){const r=k.useRef(null);return k.useEffect(()=>{r.current=t}),r.current}const ax=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",lx=typeof document<"u",mh=lx||ax?k.useLayoutEffect:k.useEffect,sx=["onKeyDown"];function ux(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}function cx(t){return!t||t.trim()==="#"}const Am=k.forwardRef((t,r)=>{let{onKeyDown:i}=t,a=ux(t,sx);const[s]=gc(Object.assign({tagName:"a"},a)),c=rt(d=>{s.onKeyDown(d),i==null||i(d)});return cx(a.href)||a.role==="button"?U.jsx("a",Object.assign({ref:r},a,s,{onKeyDown:c})):U.jsx("a",Object.assign({ref:r},a,{onKeyDown:i}))});Am.displayName="Anchor";const Fm=k.forwardRef(({bsPrefix:t,className:r,as:i=Am,active:a,eventKey:s,disabled:c=!1,...d},h)=>{t=Pe(t,"nav-link");const[p,m]=Mm({key:xc(s,d.href),active:a,disabled:c,...d});return U.jsx(i,{...d,...p,ref:h,disabled:c,className:we(r,t,c&&"disabled",m.isActive&&"active")})});Fm.displayName="NavLink";const $m=k.forwardRef((t,r)=>{const{as:i="div",bsPrefix:a,variant:s,fill:c=!1,justify:d=!1,navbar:h,navbarScroll:p,className:m,activeKey:b,...w}=zm(t,{activeKey:"onSelect"}),y=Pe(a,"nav");let E,x,v=!1;const S=k.useContext(Br),_=k.useContext(wc);return S?(E=S.bsPrefix,v=h??!0):_&&({cardHeaderBsPrefix:x}=_),U.jsx(rx,{as:i,ref:r,activeKey:b,className:we(m,{[y]:!v,[`${E}-nav`]:v,[`${E}-nav-scroll`]:v&&p,[`${x}-${s}`]:!!x,[`${y}-${s}`]:!!s,[`${y}-fill`]:c,[`${y}-justified`]:d}),...w})});$m.displayName="Nav";const fx=Object.assign($m,{Item:Lm,Link:Fm}),qm=k.forwardRef(({bsPrefix:t,className:r,as:i,...a},s)=>{t=Pe(t,"navbar-brand");const c=i||(a.href?"a":"span");return U.jsx(c,{...a,ref:s,className:we(r,t)})});qm.displayName="NavbarBrand";function kc(t){return t&&t.ownerDocument||document}function dx(t){var r=kc(t);return r&&r.defaultView||window}function px(t,r){return dx(t).getComputedStyle(t,r)}var hx=/([A-Z])/g;function mx(t){return t.replace(hx,"-$1").toLowerCase()}var gx=/^ms-/;function xa(t){return mx(t).replace(gx,"-ms-")}var yx=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function vx(t){return!!(t&&yx.test(t))}function at(t,r){var i="",a="";if(typeof r=="string")return t.style.getPropertyValue(xa(r))||px(t).getPropertyValue(xa(r));Object.keys(r).forEach(function(s){var c=r[s];!c&&c!==0?t.style.removeProperty(xa(s)):vx(s)?a+=s+"("+c+") ":i+=xa(s)+": "+c+";"}),a&&(i+="transform: "+a+";"),t.style.cssText+=";"+i}const gh={disabled:!1},Um=Ce.createContext(null);var bx=function(r){return r.scrollTop},$o="unmounted",Dt="exited",Nn="entering",ot="entered",Go="exiting",st=function(t){Wb(r,t);function r(a,s){var c;c=t.call(this,a,s)||this;var d=s,h=d&&!d.isMounting?a.enter:a.appear,p;return c.appearStatus=null,a.in?h?(p=Dt,c.appearStatus=Nn):p=ot:a.unmountOnExit||a.mountOnEnter?p=$o:p=Dt,c.state={status:p},c.nextCallback=null,c}r.getDerivedStateFromProps=function(s,c){var d=s.in;return d&&c.status===$o?{status:Dt}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(s){var c=null;if(s!==this.props){var d=this.state.status;this.props.in?d!==Nn&&d!==ot&&(c=Nn):(d===Nn||d===ot)&&(c=Go)}this.updateStatus(!1,c)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var s=this.props.timeout,c,d,h;return c=d=h=s,s!=null&&typeof s!="number"&&(c=s.exit,d=s.enter,h=s.appear!==void 0?s.appear:d),{exit:c,enter:d,appear:h}},i.updateStatus=function(s,c){if(s===void 0&&(s=!1),c!==null)if(this.cancelNextCallback(),c===Nn){if(this.props.unmountOnExit||this.props.mountOnEnter){var d=this.props.nodeRef?this.props.nodeRef.current:Lr.findDOMNode(this);d&&bx(d)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Dt&&this.setState({status:$o})},i.performEnter=function(s){var c=this,d=this.props.enter,h=this.context?this.context.isMounting:s,p=this.props.nodeRef?[h]:[Lr.findDOMNode(this),h],m=p[0],b=p[1],w=this.getTimeouts(),y=h?w.appear:w.enter;if(!s&&!d||gh.disabled){this.safeSetState({status:ot},function(){c.props.onEntered(m)});return}this.props.onEnter(m,b),this.safeSetState({status:Nn},function(){c.props.onEntering(m,b),c.onTransitionEnd(y,function(){c.safeSetState({status:ot},function(){c.props.onEntered(m,b)})})})},i.performExit=function(){var s=this,c=this.props.exit,d=this.getTimeouts(),h=this.props.nodeRef?void 0:Lr.findDOMNode(this);if(!c||gh.disabled){this.safeSetState({status:Dt},function(){s.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:Go},function(){s.props.onExiting(h),s.onTransitionEnd(d.exit,function(){s.safeSetState({status:Dt},function(){s.props.onExited(h)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(s,c){c=this.setNextCallback(c),this.setState(s,c)},i.setNextCallback=function(s){var c=this,d=!0;return this.nextCallback=function(h){d&&(d=!1,c.nextCallback=null,s(h))},this.nextCallback.cancel=function(){d=!1},this.nextCallback},i.onTransitionEnd=function(s,c){this.setNextCallback(c);var d=this.props.nodeRef?this.props.nodeRef.current:Lr.findDOMNode(this),h=s==null&&!this.props.addEndListener;if(!d||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var p=this.props.nodeRef?[this.nextCallback]:[d,this.nextCallback],m=p[0],b=p[1];this.props.addEndListener(m,b)}s!=null&&setTimeout(this.nextCallback,s)},i.render=function(){var s=this.state.status;if(s===$o)return null;var c=this.props,d=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var h=Nm(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ce.createElement(Um.Provider,{value:null},typeof d=="function"?d(s,h):Ce.cloneElement(Ce.Children.only(d),h))},r}(Ce.Component);st.contextType=Um;st.propTypes={};function Nr(){}st.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Nr,onEntering:Nr,onEntered:Nr,onExit:Nr,onExiting:Nr,onExited:Nr};st.UNMOUNTED=$o;st.EXITED=Dt;st.ENTERING=Nn;st.ENTERED=ot;st.EXITING=Go;function xx(t){return t.code==="Escape"||t.keyCode===27}function wx(){const t=k.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}function rl(t){if(!t||typeof t=="function")return null;const{major:r}=wx();return r>=19?t.props.ref:t.ref}const ol=!!(typeof window<"u"&&window.document&&window.document.createElement);var Wu=!1,Qu=!1;try{var Su={get passive(){return Wu=!0},get once(){return Qu=Wu=!0}};ol&&(window.addEventListener("test",Su,Su),window.removeEventListener("test",Su,!0))}catch{}function kx(t,r,i,a){if(a&&typeof a!="boolean"&&!Qu){var s=a.once,c=a.capture,d=i;!Qu&&s&&(d=i.__once||function h(p){this.removeEventListener(r,h,c),i.call(this,p)},i.__once=d),t.addEventListener(r,d,Wu?a:c)}t.addEventListener(r,i,a)}function Sx(t,r,i,a){var s=a&&typeof a!="boolean"?a.capture:a;t.removeEventListener(r,i,s),i.__once&&t.removeEventListener(r,i.__once,s)}function Ba(t,r,i,a){return kx(t,r,i,a),function(){Sx(t,r,i,a)}}function Ex(t,r,i,a){if(a===void 0&&(a=!0),t){var s=document.createEvent("HTMLEvents");s.initEvent(r,i,a),t.dispatchEvent(s)}}function Ox(t){var r=at(t,"transitionDuration")||"",i=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*i}function Cx(t,r,i){i===void 0&&(i=5);var a=!1,s=setTimeout(function(){a||Ex(t,"transitionend",!0)},r+i),c=Ba(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(s),c()}}function Px(t,r,i,a){i==null&&(i=Ox(t)||0);var s=Cx(t,i,a),c=Ba(t,"transitionend",r);return function(){s(),c()}}function yh(t,r){const i=at(t,r)||"",a=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*a}function Sc(t,r){const i=yh(t,"transitionDuration"),a=yh(t,"transitionDelay"),s=Px(t,c=>{c.target===t&&(s(),r(c))},i+a)}function Io(...t){return t.filter(r=>r!=null).reduce((r,i)=>{if(typeof i!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return r===null?i:function(...s){r.apply(this,s),i.apply(this,s)}},null)}function Bm(t){t.offsetHeight}const vh=t=>!t||typeof t=="function"?t:r=>{t.current=r};function _x(t,r){const i=vh(t),a=vh(r);return s=>{i&&i(s),a&&a(s)}}function Rx(t,r){return k.useMemo(()=>_x(t,r),[t,r])}function Tx(t){return t&&"setState"in t?Lr.findDOMNode(t):t??null}const Ec=Ce.forwardRef(({onEnter:t,onEntering:r,onEntered:i,onExit:a,onExiting:s,onExited:c,addEndListener:d,children:h,childRef:p,...m},b)=>{const w=k.useRef(null),y=Rx(w,p),E=N=>{y(Tx(N))},x=N=>T=>{N&&w.current&&N(w.current,T)},v=k.useCallback(x(t),[t]),S=k.useCallback(x(r),[r]),_=k.useCallback(x(i),[i]),C=k.useCallback(x(a),[a]),O=k.useCallback(x(s),[s]),P=k.useCallback(x(c),[c]),D=k.useCallback(x(d),[d]);return U.jsx(st,{ref:b,...m,onEnter:v,onEntered:_,onEntering:S,onExit:C,onExited:P,onExiting:O,addEndListener:D,nodeRef:w,children:typeof h=="function"?(N,T)=>h(N,{...T,ref:E}):Ce.cloneElement(h,{ref:E})})}),Nx={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function zx(t,r){const i=`offset${t[0].toUpperCase()}${t.slice(1)}`,a=r[i],s=Nx[t];return a+parseInt(at(r,s[0]),10)+parseInt(at(r,s[1]),10)}const Dx={[Dt]:"collapse",[Go]:"collapsing",[Nn]:"collapsing",[ot]:"collapse show"},Mx=Ce.forwardRef(({onEnter:t,onEntering:r,onEntered:i,onExit:a,onExiting:s,className:c,children:d,dimension:h="height",in:p=!1,timeout:m=300,mountOnEnter:b=!1,unmountOnExit:w=!1,appear:y=!1,getDimensionValue:E=zx,...x},v)=>{const S=typeof h=="function"?h():h,_=k.useMemo(()=>Io(N=>{N.style[S]="0"},t),[S,t]),C=k.useMemo(()=>Io(N=>{const T=`scroll${S[0].toUpperCase()}${S.slice(1)}`;N.style[S]=`${N[T]}px`},r),[S,r]),O=k.useMemo(()=>Io(N=>{N.style[S]=null},i),[S,i]),P=k.useMemo(()=>Io(N=>{N.style[S]=`${E(S,N)}px`,Bm(N)},a),[a,E,S]),D=k.useMemo(()=>Io(N=>{N.style[S]=null},s),[S,s]);return U.jsx(Ec,{ref:v,addEndListener:Sc,...x,"aria-expanded":x.role?p:null,onEnter:_,onEntering:C,onEntered:O,onExit:P,onExiting:D,childRef:rl(d),in:p,timeout:m,mountOnEnter:b,unmountOnExit:w,appear:y,children:(N,T)=>Ce.cloneElement(d,{...T,className:we(c,d.props.className,Dx[N],S==="width"&&"collapse-horizontal")})})}),Hm=k.forwardRef(({children:t,bsPrefix:r,...i},a)=>{r=Pe(r,"navbar-collapse");const s=k.useContext(Br);return U.jsx(Mx,{in:!!(s&&s.expanded),...i,children:U.jsx("div",{ref:a,className:r,children:t})})});Hm.displayName="NavbarCollapse";function jx(t){const r=k.useRef(t);return k.useEffect(()=>{r.current=t},[t]),r}function il(t){const r=jx(t);return k.useCallback(function(...i){return r.current&&r.current(...i)},[r])}const Wm=k.forwardRef(({bsPrefix:t,className:r,children:i,label:a="Toggle navigation",as:s="button",onClick:c,...d},h)=>{t=Pe(t,"navbar-toggler");const{onToggle:p,expanded:m}=k.useContext(Br)||{},b=il(w=>{c&&c(w),p&&p()});return s==="button"&&(d.type="button"),U.jsx(s,{...d,ref:h,onClick:b,"aria-label":a,className:we(r,t,!m&&"collapsed"),children:i||U.jsx("span",{className:`${t}-icon`})})});Wm.displayName="NavbarToggle";const Ix=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Lx=typeof document<"u",Ax=Lx||Ix?k.useLayoutEffect:k.useEffect,Vu=new WeakMap,bh=(t,r)=>{if(!t||!r)return;const i=Vu.get(r)||new Map;Vu.set(r,i);let a=i.get(t);return a||(a=r.matchMedia(t),a.refCount=0,i.set(a.media,a)),a};function Fx(t,r=typeof window>"u"?void 0:window){const i=bh(t,r),[a,s]=k.useState(()=>i?i.matches:!1);return Ax(()=>{let c=bh(t,r);if(!c)return s(!1);let d=Vu.get(r);const h=()=>{s(c.matches)};return c.refCount++,c.addListener(h),h(),()=>{c.removeListener(h),c.refCount--,c.refCount<=0&&(d==null||d.delete(c.media)),c=void 0}},[t]),a}function $x(t){const r=Object.keys(t);function i(h,p){return h===p?p:h?`${h} and ${p}`:p}function a(h){return r[Math.min(r.indexOf(h)+1,r.length-1)]}function s(h){const p=a(h);let m=t[p];return typeof m=="number"?m=`${m-.2}px`:m=`calc(${m} - 0.2px)`,`(max-width: ${m})`}function c(h){let p=t[h];return typeof p=="number"&&(p=`${p}px`),`(min-width: ${p})`}function d(h,p,m){let b;typeof h=="object"?(b=h,m=p,p=!0):(p=p||!0,b={[h]:p});let w=k.useMemo(()=>Object.entries(b).reduce((y,[E,x])=>((x==="up"||x===!0)&&(y=i(y,c(E))),(x==="down"||x===!0)&&(y=i(y,s(E))),y),""),[JSON.stringify(b)]);return Fx(w,m)}return d}const qx=$x({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Eu(t){t===void 0&&(t=kc());try{var r=t.activeElement;return!r||!r.nodeName?null:r}catch{return t.body}}function xh(t,r){if(t.contains)return t.contains(r);if(t.compareDocumentPosition)return t===r||!!(t.compareDocumentPosition(r)&16)}function Ux(t){const r=k.useRef(t);return r.current=t,r}function Bx(t){const r=Ux(t);k.useEffect(()=>()=>r.current(),[])}function Hx(t=document){const r=t.defaultView;return Math.abs(r.innerWidth-t.documentElement.clientWidth)}const wh=tl("modal-open");class Oc{constructor({ownerDocument:r,handleContainerOverflow:i=!0,isRTL:a=!1}={}){this.handleContainerOverflow=i,this.isRTL=a,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return Hx(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const i={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();r.style={overflow:s.style.overflow,[a]:s.style[a]},r.scrollBarWidth&&(i[a]=`${parseInt(at(s,a)||"0",10)+r.scrollBarWidth}px`),s.setAttribute(wh,""),at(s,i)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const i=this.getElement();i.removeAttribute(wh),Object.assign(i.style,r.style)}add(r){let i=this.modals.indexOf(r);return i!==-1||(i=this.modals.length,this.modals.push(r),this.setModalAttributes(r),i!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),i}remove(r){const i=this.modals.indexOf(r);i!==-1&&(this.modals.splice(i,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const Qm=k.createContext(ol?window:void 0);Qm.Provider;function Cc(){return k.useContext(Qm)}const Ou=(t,r)=>ol?t==null?(r||kc()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Wx(t,r){const i=Cc(),[a,s]=k.useState(()=>Ou(t,i==null?void 0:i.document));if(!a){const c=Ou(t);c&&s(c)}return k.useEffect(()=>{},[r,a]),k.useEffect(()=>{const c=Ou(t);c!==a&&s(c)},[t,a]),a}function Qx({children:t,in:r,onExited:i,mountOnEnter:a,unmountOnExit:s}){const c=k.useRef(null),d=k.useRef(r),h=rt(i);k.useEffect(()=>{r?d.current=!0:h(c.current)},[r,h]);const p=nl(c,t.ref),m=k.cloneElement(t,{ref:p});return r?m:s||!d.current&&a?null:m}const Vx=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Kx(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}function Xx(t){let{onEnter:r,onEntering:i,onEntered:a,onExit:s,onExiting:c,onExited:d,addEndListener:h,children:p}=t,m=Kx(t,Vx);const b=k.useRef(null),w=nl(b,rl(p)),y=P=>D=>{P&&b.current&&P(b.current,D)},E=k.useCallback(y(r),[r]),x=k.useCallback(y(i),[i]),v=k.useCallback(y(a),[a]),S=k.useCallback(y(s),[s]),_=k.useCallback(y(c),[c]),C=k.useCallback(y(d),[d]),O=k.useCallback(y(h),[h]);return Object.assign({},m,{nodeRef:b},r&&{onEnter:E},i&&{onEntering:x},a&&{onEntered:v},s&&{onExit:S},c&&{onExiting:_},d&&{onExited:C},h&&{addEndListener:O},{children:typeof p=="function"?(P,D)=>p(P,Object.assign({},D,{ref:w})):k.cloneElement(p,{ref:w})})}const Yx=["component"];function Gx(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}const Jx=k.forwardRef((t,r)=>{let{component:i}=t,a=Gx(t,Yx);const s=Xx(a);return U.jsx(i,Object.assign({ref:r},s))});function Zx({in:t,onTransition:r}){const i=k.useRef(null),a=k.useRef(!0),s=rt(r);return mh(()=>{if(!i.current)return;let c=!1;return s({in:t,element:i.current,initial:a.current,isStale:()=>c}),()=>{c=!0}},[t,s]),mh(()=>(a.current=!1,()=>{a.current=!0}),[]),i}function ew({children:t,in:r,onExited:i,onEntered:a,transition:s}){const[c,d]=k.useState(!r);r&&c&&d(!1);const h=Zx({in:!!r,onTransition:m=>{const b=()=>{m.isStale()||(m.in?a==null||a(m.element,m.initial):(d(!0),i==null||i(m.element)))};Promise.resolve(s(m)).then(b,w=>{throw m.in||d(!0),w})}}),p=nl(h,t.ref);return c&&!r?null:k.cloneElement(t,{ref:p})}function kh(t,r,i){return t?U.jsx(Jx,Object.assign({},i,{component:t})):r?U.jsx(ew,Object.assign({},i,{transition:r})):U.jsx(Qx,Object.assign({},i))}const nw=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function tw(t,r){if(t==null)return{};var i={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}let Cu;function rw(t){return Cu||(Cu=new Oc({ownerDocument:t==null?void 0:t.document})),Cu}function ow(t){const r=Cc(),i=t||rw(r),a=k.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>i.add(a.current),remove:()=>i.remove(a.current),isTopModal:()=>i.isTopModal(a.current),setDialogRef:k.useCallback(s=>{a.current.dialog=s},[]),setBackdropRef:k.useCallback(s=>{a.current.backdrop=s},[])})}const Vm=k.forwardRef((t,r)=>{let{show:i=!1,role:a="dialog",className:s,style:c,children:d,backdrop:h=!0,keyboard:p=!0,onBackdropClick:m,onEscapeKeyDown:b,transition:w,runTransition:y,backdropTransition:E,runBackdropTransition:x,autoFocus:v=!0,enforceFocus:S=!0,restoreFocus:_=!0,restoreFocusOptions:C,renderDialog:O,renderBackdrop:P=Te=>U.jsx("div",Object.assign({},Te)),manager:D,container:N,onShow:T,onHide:I=()=>{},onExit:A,onExited:$,onExiting:W,onEnter:G,onEntering:J,onEntered:Z}=t,se=tw(t,nw);const ce=Cc(),pe=Wx(N),B=ow(D),ee=ox(),K=ix(i),[j,H]=k.useState(!i),ie=k.useRef(null);k.useImperativeHandle(r,()=>B,[B]),ol&&!K&&i&&(ie.current=Eu(ce==null?void 0:ce.document)),i&&j&&H(!1);const te=rt(()=>{if(B.add(),Qe.current=Ba(document,"keydown",xe),Ee.current=Ba(document,"focus",()=>setTimeout(ye),!0),T&&T(),v){var Te,Wr;const Ft=Eu((Te=(Wr=B.dialog)==null?void 0:Wr.ownerDocument)!=null?Te:ce==null?void 0:ce.document);B.dialog&&Ft&&!xh(B.dialog,Ft)&&(ie.current=Ft,B.dialog.focus())}}),he=rt(()=>{if(B.remove(),Qe.current==null||Qe.current(),Ee.current==null||Ee.current(),_){var Te;(Te=ie.current)==null||Te.focus==null||Te.focus(C),ie.current=null}});k.useEffect(()=>{!i||!pe||te()},[i,pe,te]),k.useEffect(()=>{j&&he()},[j,he]),Bx(()=>{he()});const ye=rt(()=>{if(!S||!ee()||!B.isTopModal())return;const Te=Eu(ce==null?void 0:ce.document);B.dialog&&Te&&!xh(B.dialog,Te)&&B.dialog.focus()}),Se=rt(Te=>{Te.target===Te.currentTarget&&(m==null||m(Te),h===!0&&I())}),xe=rt(Te=>{p&&xx(Te)&&B.isTopModal()&&(b==null||b(Te),Te.defaultPrevented||I())}),Ee=k.useRef(),Qe=k.useRef(),ir=(...Te)=>{H(!0),$==null||$(...Te)};if(!pe)return null;const Hr=Object.assign({role:a,ref:B.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},se,{style:c,className:s,tabIndex:-1});let ut=O?O(Hr):U.jsx("div",Object.assign({},Hr,{children:k.cloneElement(d,{role:"document"})}));ut=kh(w,y,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!i,onExit:A,onExiting:W,onExited:ir,onEnter:G,onEntering:J,onEntered:Z,children:ut});let ct=null;return h&&(ct=P({ref:B.setBackdropRef,onClick:Se}),ct=kh(E,x,{in:!!i,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ct})),U.jsx(U.Fragment,{children:Lr.createPortal(U.jsxs(U.Fragment,{children:[ct,ut]}),pe)})});Vm.displayName="Modal";const iw=Object.assign(Vm,{Manager:Oc}),aw={[Nn]:"show",[ot]:"show"},Km=k.forwardRef(({className:t,children:r,transitionClasses:i={},onEnter:a,...s},c)=>{const d={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},h=k.useCallback((p,m)=>{Bm(p),a==null||a(p,m)},[a]);return U.jsx(Ec,{ref:c,addEndListener:Sc,...d,onEnter:h,childRef:rl(r),children:(p,m)=>k.cloneElement(r,{...m,className:we("fade",t,r.props.className,aw[p],i[p])})})});Km.displayName="Fade";const Xm=k.forwardRef(({className:t,bsPrefix:r,as:i="div",...a},s)=>(r=Pe(r,"offcanvas-body"),U.jsx(i,{ref:s,className:we(t,r),...a})));Xm.displayName="OffcanvasBody";const lw={[Nn]:"show",[ot]:"show"},Ym=k.forwardRef(({bsPrefix:t,className:r,children:i,in:a=!1,mountOnEnter:s=!1,unmountOnExit:c=!1,appear:d=!1,...h},p)=>(t=Pe(t,"offcanvas"),U.jsx(Ec,{ref:p,addEndListener:Sc,in:a,mountOnEnter:s,unmountOnExit:c,appear:d,...h,childRef:rl(i),children:(m,b)=>k.cloneElement(i,{...b,className:we(r,i.props.className,(m===Nn||m===Go)&&`${t}-toggling`,lw[m])})})));Ym.displayName="OffcanvasToggling";const Gm=k.createContext({onHide(){}}),sw={"aria-label":ku.string,onClick:ku.func,variant:ku.oneOf(["white"])},Pc=k.forwardRef(({className:t,variant:r,"aria-label":i="Close",...a},s)=>U.jsx("button",{ref:s,type:"button",className:we("btn-close",r&&`btn-close-${r}`,t),"aria-label":i,...a}));Pc.displayName="CloseButton";Pc.propTypes=sw;const uw=k.forwardRef(({closeLabel:t="Close",closeVariant:r,closeButton:i=!1,onHide:a,children:s,...c},d)=>{const h=k.useContext(Gm),p=il(()=>{h==null||h.onHide(),a==null||a()});return U.jsxs("div",{ref:d,...c,children:[s,i&&U.jsx(Pc,{"aria-label":t,variant:r,onClick:p})]})}),Jm=k.forwardRef(({bsPrefix:t,className:r,closeLabel:i="Close",closeButton:a=!1,...s},c)=>(t=Pe(t,"offcanvas-header"),U.jsx(uw,{ref:c,...s,className:we(r,t),closeLabel:i,closeButton:a})));Jm.displayName="OffcanvasHeader";const _c=t=>k.forwardRef((r,i)=>U.jsx("div",{...r,ref:i,className:we(r.className,t)})),cw=_c("h5"),Zm=k.forwardRef(({className:t,bsPrefix:r,as:i=cw,...a},s)=>(r=Pe(r,"offcanvas-title"),U.jsx(i,{ref:s,className:we(t,r),...a})));Zm.displayName="OffcanvasTitle";function fw(t,r){return t.classList?t.classList.contains(r):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" ")!==-1}function dw(t,r){t.classList?t.classList.add(r):fw(t,r)||(typeof t.className=="string"?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r))}function Sh(t,r){return t.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function pw(t,r){t.classList?t.classList.remove(r):typeof t.className=="string"?t.className=Sh(t.className,r):t.setAttribute("class",Sh(t.className&&t.className.baseVal||"",r))}const zr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class eg extends Oc{adjustAndStore(r,i,a){const s=i.style[r];i.dataset[r]=s,at(i,{[r]:`${parseFloat(at(i,r))+a}px`})}restore(r,i){const a=i.dataset[r];a!==void 0&&(delete i.dataset[r],at(i,{[r]:a}))}setContainerStyle(r){super.setContainerStyle(r);const i=this.getElement();if(dw(i,"modal-open"),!r.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";er(i,zr.FIXED_CONTENT).forEach(c=>this.adjustAndStore(a,c,r.scrollBarWidth)),er(i,zr.STICKY_CONTENT).forEach(c=>this.adjustAndStore(s,c,-r.scrollBarWidth)),er(i,zr.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(s,c,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const i=this.getElement();pw(i,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";er(i,zr.FIXED_CONTENT).forEach(c=>this.restore(a,c)),er(i,zr.STICKY_CONTENT).forEach(c=>this.restore(s,c)),er(i,zr.NAVBAR_TOGGLER).forEach(c=>this.restore(s,c))}}let Pu;function hw(t){return Pu||(Pu=new eg(t)),Pu}function mw(t){return U.jsx(Ym,{...t})}function gw(t){return U.jsx(Km,{...t})}const ng=k.forwardRef(({bsPrefix:t,className:r,children:i,"aria-labelledby":a,placement:s="start",responsive:c,show:d=!1,backdrop:h=!0,keyboard:p=!0,scroll:m=!1,onEscapeKeyDown:b,onShow:w,onHide:y,container:E,autoFocus:x=!0,enforceFocus:v=!0,restoreFocus:S=!0,restoreFocusOptions:_,onEntered:C,onExit:O,onExiting:P,onEnter:D,onEntering:N,onExited:T,backdropClassName:I,manager:A,renderStaticNode:$=!1,...W},G)=>{const J=k.useRef();t=Pe(t,"offcanvas");const[Z,se]=k.useState(!1),ce=il(y),pe=qx(c||"xs","up");k.useEffect(()=>{se(c?d&&!pe:d)},[d,c,pe]);const B=k.useMemo(()=>({onHide:ce}),[ce]);function ee(){return A||(m?(J.current||(J.current=new eg({handleContainerOverflow:!1})),J.current):hw())}const K=(te,...he)=>{te&&(te.style.visibility="visible"),D==null||D(te,...he)},j=(te,...he)=>{te&&(te.style.visibility=""),T==null||T(...he)},H=k.useCallback(te=>U.jsx("div",{...te,className:we(`${t}-backdrop`,I)}),[I,t]),ie=te=>U.jsx("div",{...te,...W,className:we(r,c?`${t}-${c}`:t,`${t}-${s}`),"aria-labelledby":a,children:i});return U.jsxs(U.Fragment,{children:[!Z&&(c||$)&&ie({}),U.jsx(Gm.Provider,{value:B,children:U.jsx(iw,{show:Z,ref:G,backdrop:h,container:E,keyboard:p,autoFocus:x,enforceFocus:v&&!m,restoreFocus:S,restoreFocusOptions:_,onEscapeKeyDown:b,onShow:w,onHide:ce,onEnter:K,onEntering:N,onEntered:C,onExit:O,onExiting:P,onExited:j,manager:ee(),transition:mw,backdropTransition:gw,renderBackdrop:H,renderDialog:ie})})]})});ng.displayName="Offcanvas";const qo=Object.assign(ng,{Body:Xm,Header:Jm,Title:Zm}),tg=k.forwardRef(({onHide:t,...r},i)=>{const a=k.useContext(Br),s=il(()=>{a==null||a.onToggle==null||a.onToggle(),t==null||t()});return U.jsx(qo,{ref:i,show:!!(a!=null&&a.expanded),...r,renderStaticNode:!0,onHide:s})});tg.displayName="NavbarOffcanvas";const rg=k.forwardRef(({className:t,bsPrefix:r,as:i="span",...a},s)=>(r=Pe(r,"navbar-text"),U.jsx(i,{ref:s,className:we(t,r),...a})));rg.displayName="NavbarText";const og=k.forwardRef((t,r)=>{const{bsPrefix:i,expand:a=!0,variant:s="light",bg:c,fixed:d,sticky:h,className:p,as:m="nav",expanded:b,onToggle:w,onSelect:y,collapseOnSelect:E=!1,...x}=zm(t,{expanded:"onToggle"}),v=Pe(i,"navbar"),S=k.useCallback((...O)=>{y==null||y(...O),E&&b&&(w==null||w(!1))},[y,E,b,w]);x.role===void 0&&m!=="nav"&&(x.role="navigation");let _=`${v}-expand`;typeof a=="string"&&(_=`${_}-${a}`);const C=k.useMemo(()=>({onToggle:()=>w==null?void 0:w(!b),bsPrefix:v,expanded:!!b,expand:a}),[v,b,a,w]);return U.jsx(Br.Provider,{value:C,children:U.jsx(Ua.Provider,{value:S,children:U.jsx(m,{ref:r,...x,className:we(p,v,a&&_,s&&`${v}-${s}`,c&&`bg-${c}`,h&&`sticky-${h}`,d&&`fixed-${d}`)})})})});og.displayName="Navbar";const wa=Object.assign(og,{Brand:qm,Collapse:Hm,Offcanvas:tg,Text:rg,Toggle:Wm});var ig={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Eh=Ce.createContext&&Ce.createContext(ig),yw=["attr","size","title"];function vw(t,r){if(t==null)return{};var i=bw(t,r),a,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(s=0;s<c.length;s++)a=c[s],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function bw(t,r){if(t==null)return{};var i={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;i[a]=t[a]}return i}function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},Ha.apply(this,arguments)}function Oh(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,a)}return i}function Wa(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Oh(Object(i),!0).forEach(function(a){xw(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Oh(Object(i)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function xw(t,r,i){return r=ww(r),r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function ww(t){var r=kw(t,"string");return typeof r=="symbol"?r:r+""}function kw(t,r){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var a=i.call(t,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function ag(t){return t&&t.map((r,i)=>Ce.createElement(r.tag,Wa({key:i},r.attr),ag(r.child)))}function al(t){return r=>Ce.createElement(Sw,Ha({attr:Wa({},t.attr)},r),ag(t.child))}function Sw(t){var r=i=>{var{attr:a,size:s,title:c}=t,d=vw(t,yw),h=s||i.size||"1em",p;return i.className&&(p=i.className),t.className&&(p=(p?p+" ":"")+t.className),Ce.createElement("svg",Ha({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,d,{className:p,style:Wa(Wa({color:t.color||i.color},i.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Ce.createElement("title",null,c),t.children)};return Eh!==void 0?Ce.createElement(Eh.Consumer,null,i=>r(i)):r(ig)}function Ew(t){return al({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(t)}const lg=zt({name:"cart",initialState:{cartItems:[]},reducers:{addItem:(t,r)=>{const i=r.payload.id;if(t.cartItems.find(s=>s.id===i))alert("Item is already in the cart!");else{const s=r.payload;s.quantity=1,t.cartItems.push(s)}},removeItem:(t,r)=>{t.cartItems=t.cartItems.filter(i=>i.id!==r.payload)},incrementItenCounter:(t,r)=>{t.cartItems=t.cartItems.map(i=>(i.id==r.payload&&i.quantity++,i))},decrementItenCounter:(t,r)=>{t.cartItems=t.cartItems.map(i=>(i.id==r.payload&&i.quantity>1&&i.quantity--,i)).filter(i=>i.quantity!==0)}}}),Ow=t=>t.cart.cartItems,{addItem:Cw,removeItem:Pw,incrementItenCounter:_w,decrementItenCounter:Rw}=lg.actions,Tw=lg.reducer;function Nw(t){return al({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},child:[]},{tag:"path",attr:{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},child:[]}]})(t)}function zw(t){return al({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},child:[]},{tag:"path",attr:{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},child:[]}]})(t)}function Dw(t){return al({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"},child:[]}]})(t)}const Mw=({show:t,onHide:r})=>{let i=ri(),a=ja(Eb),s=ja(Ow),c=0;return s.map(d=>c+=d.price*d.quantity),U.jsxs(qo,{show:t,onHide:r,placement:"end",style:{width:"auto"},children:[U.jsx(qo.Header,{closeButton:!0,children:U.jsxs(qo.Title,{children:[`${a}'s`," Cart"]})}),U.jsx(qo.Body,{children:s.map(d=>U.jsx("div",{className:"rounded mb-3 shadow p-1 bg-light text-dark",style:{backgroundColor:"yellow"},children:U.jsxs("div",{className:"row",children:[U.jsx("div",{className:"col",children:U.jsx("img",{src:d.image,alt:d.caterory,className:"rounded",style:{height:"100px",width:"100px"}})}),U.jsx("div",{className:"col-8",children:U.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[U.jsxs("div",{children:[U.jsx("b",{children:"Item:"})," ",d.title,"."]}),U.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[U.jsx("div",{children:U.jsx("span",{className:"badge",style:{backgroundColor:"#491d90"},children:d.category})}),U.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"},children:[U.jsx("div",{id:"counterBtn",children:U.jsx(Nw,{onClick:()=>i(Rw(d.id))})}),U.jsx("div",{children:d.quantity}),U.jsx("div",{id:"counterBtn",onClick:()=>i(_w(d.id)),children:U.jsx(zw,{})})]})]}),U.jsx("hr",{style:{color:"#491d90"}}),U.jsxs("h6",{children:["$",d.price*d.quantity]})]})}),U.jsx("div",{className:"col-1",onClick:()=>i(Pw(d.id)),children:U.jsx(Dw,{style:{color:"#491d90",cursor:"pointer"}})})]})},d.id))}),U.jsxs("div",{style:{width:"100%",backgroundColor:"#491d90",padding:"10px",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[U.jsx("div",{children:U.jsxs("h4",{children:["Total Amount: $",c.toFixed(2)]})}),U.jsx("div",{children:U.jsx("button",{type:"button",class:"btn btn-light",children:U.jsx("b",{children:"Checkout"})})})]})]})};function jw(){const t=ri(),[r,i]=k.useState(!1),a=()=>i(!1),s=()=>i(!0),c=()=>{t(Cb())};return U.jsx(wa,{expand:"lg",className:"bg-body-tertiary",sticky:"top",children:U.jsxs(vc,{fluid:!0,children:[U.jsx(wa.Brand,{href:"#",style:{color:"#491d90",fontWeight:"bolder",fontSize:"30px"},children:"Redux-Toolkit"}),U.jsx(wa.Toggle,{"aria-controls":"navbarScroll"}),U.jsxs(wa.Collapse,{id:"navbarScroll",children:[U.jsx(fx,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0}),U.jsx(qa,{variant:"primary",onClick:s,style:{backgroundColor:"#491d90",border:"none"},children:U.jsx(Ew,{})}),U.jsx(Mw,{show:r,onHide:a}),"   ",U.jsx(qa,{variant:"outline-danger",onClick:c,children:"LogOut"})]})]})})}var sg=(t=>(t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected",t))(sg||{});function Iw(t){return{status:t,isUninitialized:t==="uninitialized",isLoading:t==="pending",isSuccess:t==="fulfilled",isError:t==="rejected"}}var Ch=Hn;function ug(t,r){if(t===r||!(Ch(t)&&Ch(r)||Array.isArray(t)&&Array.isArray(r)))return r;const i=Object.keys(r),a=Object.keys(t);let s=i.length===a.length;const c=Array.isArray(r)?[]:{};for(const d of i)c[d]=ug(t[d],r[d]),s&&(s=t[d]===c[d]);return s?t:c}function Ar(t){let r=0;for(const i in t)r++;return r}var Ph=t=>[].concat(...t);function Lw(t){return new RegExp("(^|:)//").test(t)}function Aw(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Qa(t){return t!=null}function Fw(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var $w=t=>t.replace(/\/$/,""),qw=t=>t.replace(/^\//,"");function Uw(t,r){if(!t)return r;if(!r)return t;if(Lw(r))return r;const i=t.endsWith("/")||!r.startsWith("?")?"/":"";return t=$w(t),r=qw(r),`${t}${i}${r}`}function Bw(t,r,i){return t.has(r)?t.get(r):t.set(r,i).get(r)}var _h=(...t)=>fetch(...t),Hw=t=>t.status>=200&&t.status<=299,Ww=t=>/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"");function Rh(t){if(!Hn(t))return t;const r={...t};for(const[i,a]of Object.entries(r))a===void 0&&delete r[i];return r}function Qw({baseUrl:t,prepareHeaders:r=w=>w,fetchFn:i=_h,paramsSerializer:a,isJsonContentType:s=Ww,jsonContentType:c="application/json",jsonReplacer:d,timeout:h,responseHandler:p,validateStatus:m,...b}={}){return typeof fetch>"u"&&i===_h&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(y,E,x)=>{const{getState:v,extra:S,endpoint:_,forced:C,type:O}=E;let P,{url:D,headers:N=new Headers(b.headers),params:T=void 0,responseHandler:I=p??"json",validateStatus:A=m??Hw,timeout:$=h,...W}=typeof y=="string"?{url:y}:y,G,J=E.signal;$&&(G=new AbortController,E.signal.addEventListener("abort",G.abort),J=G.signal);let Z={...b,signal:J,...W};N=new Headers(Rh(N)),Z.headers=await r(N,{getState:v,arg:y,extra:S,endpoint:_,forced:C,type:O,extraOptions:x})||N;const se=te=>typeof te=="object"&&(Hn(te)||Array.isArray(te)||typeof te.toJSON=="function");if(!Z.headers.has("content-type")&&se(Z.body)&&Z.headers.set("content-type",c),se(Z.body)&&s(Z.headers)&&(Z.body=JSON.stringify(Z.body,d)),T){const te=~D.indexOf("?")?"&":"?",he=a?a(T):new URLSearchParams(Rh(T));D+=te+he}D=Uw(t,D);const ce=new Request(D,Z);P={request:new Request(D,Z)};let B,ee=!1,K=G&&setTimeout(()=>{ee=!0,G.abort()},$);try{B=await i(ce)}catch(te){return{error:{status:ee?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(te)},meta:P}}finally{K&&clearTimeout(K),G==null||G.signal.removeEventListener("abort",G.abort)}const j=B.clone();P.response=j;let H,ie="";try{let te;if(await Promise.all([w(B,I).then(he=>H=he,he=>te=he),j.text().then(he=>ie=he,()=>{})]),te)throw te}catch(te){return{error:{status:"PARSING_ERROR",originalStatus:B.status,data:ie,error:String(te)},meta:P}}return A(B,H)?{data:H,meta:P}:{error:{status:B.status,data:H},meta:P}};async function w(y,E){if(typeof E=="function")return E(y);if(E==="content-type"&&(E=s(y.headers)?"json":"text"),E==="json"){const x=await y.text();return x.length?JSON.parse(x):null}return y.text()}}var Th=class{constructor(t,r=void 0){this.value=t,this.meta=r}},ll=Dn("__rtkq/focused"),Rc=Dn("__rtkq/unfocused"),sl=Dn("__rtkq/online"),Tc=Dn("__rtkq/offline"),_u=!1;function Vw(t,r){function i(){const a=()=>t(ll()),s=()=>t(Rc()),c=()=>t(sl()),d=()=>t(Tc()),h=()=>{window.document.visibilityState==="visible"?a():s()};return _u||typeof window<"u"&&window.addEventListener&&(window.addEventListener("visibilitychange",h,!1),window.addEventListener("focus",a,!1),window.addEventListener("online",c,!1),window.addEventListener("offline",d,!1),_u=!0),()=>{window.removeEventListener("focus",a),window.removeEventListener("visibilitychange",h),window.removeEventListener("online",c),window.removeEventListener("offline",d),_u=!1}}return i()}function cg(t){return t.type==="query"}function Kw(t){return t.type==="mutation"}function Nc(t,r,i,a,s,c){return Xw(t)?t(r,i,a,s).filter(Qa).map(Ku).map(c):Array.isArray(t)?t.map(Ku).map(c):[]}function Xw(t){return typeof t=="function"}function Ku(t){return typeof t=="string"?{type:t}:t}function Yw(t,r){return t.catch(r)}var Jo=Symbol("forceQueryFn"),Xu=t=>typeof t[Jo]=="function";function Gw({serializeQueryArgs:t,queryThunk:r,mutationThunk:i,api:a,context:s}){const c=new Map,d=new Map,{unsubscribeQueryResult:h,removeMutationResult:p,updateSubscriptionOptions:m}=a.internalActions;return{buildInitiateQuery:x,buildInitiateMutation:v,getRunningQueryThunk:b,getRunningMutationThunk:w,getRunningQueriesThunk:y,getRunningMutationsThunk:E};function b(S,_){return C=>{var D;const O=s.endpointDefinitions[S],P=t({queryArgs:_,endpointDefinition:O,endpointName:S});return(D=c.get(C))==null?void 0:D[P]}}function w(S,_){return C=>{var O;return(O=d.get(C))==null?void 0:O[_]}}function y(){return S=>Object.values(c.get(S)||{}).filter(Qa)}function E(){return S=>Object.values(d.get(S)||{}).filter(Qa)}function x(S,_){const C=(O,{subscribe:P=!0,forceRefetch:D,subscriptionOptions:N,[Jo]:T,...I}={})=>(A,$)=>{var H;const W=t({queryArgs:O,endpointDefinition:_,endpointName:S}),G=r({...I,type:"query",subscribe:P,forceRefetch:D,subscriptionOptions:N,endpointName:S,originalArgs:O,queryCacheKey:W,[Jo]:T}),J=a.endpoints[S].select(O),Z=A(G),se=J($()),{requestId:ce,abort:pe}=Z,B=se.requestId!==ce,ee=(H=c.get(A))==null?void 0:H[W],K=()=>J($()),j=Object.assign(T?Z.then(K):B&&!ee?Promise.resolve(se):Promise.all([ee,Z]).then(K),{arg:O,requestId:ce,subscriptionOptions:N,queryCacheKey:W,abort:pe,async unwrap(){const ie=await j;if(ie.isError)throw ie.error;return ie.data},refetch:()=>A(C(O,{subscribe:!1,forceRefetch:!0})),unsubscribe(){P&&A(h({queryCacheKey:W,requestId:ce}))},updateSubscriptionOptions(ie){j.subscriptionOptions=ie,A(m({endpointName:S,requestId:ce,queryCacheKey:W,options:ie}))}});if(!ee&&!B&&!T){const ie=Bw(c,A,{});ie[W]=j,j.then(()=>{delete ie[W],Ar(ie)||c.delete(A)})}return j};return C}function v(S){return(_,{track:C=!0,fixedCacheKey:O}={})=>(P,D)=>{const N=i({type:"mutation",endpointName:S,originalArgs:_,track:C,fixedCacheKey:O}),T=P(N),{requestId:I,abort:A,unwrap:$}=T,W=Yw(T.unwrap().then(se=>({data:se})),se=>({error:se})),G=()=>{P(p({requestId:I,fixedCacheKey:O}))},J=Object.assign(W,{arg:T.arg,requestId:I,abort:A,unwrap:$,reset:G}),Z=d.get(P)||{};return d.set(P,Z),Z[I]=J,J.then(()=>{delete Z[I],Ar(Z)||d.delete(P)}),O&&(Z[O]=J,J.then(()=>{Z[O]===J&&(delete Z[O],Ar(Z)||d.delete(P))})),J}}}function Nh(t){return t}function Jw({reducerPath:t,baseQuery:r,context:{endpointDefinitions:i},serializeQueryArgs:a,api:s,assertTagType:c}){const d=(C,O,P,D)=>(N,T)=>{const I=i[C],A=a({queryArgs:O,endpointDefinition:I,endpointName:C});if(N(s.internalActions.queryResultPatched({queryCacheKey:A,patches:P})),!D)return;const $=s.endpoints[C].select(O)(T()),W=Nc(I.providesTags,$.data,void 0,O,{},c);N(s.internalActions.updateProvidedBy({queryCacheKey:A,providedTags:W}))},h=(C,O,P,D=!0)=>(N,T)=>{const A=s.endpoints[C].select(O)(T()),$={patches:[],inversePatches:[],undo:()=>N(s.util.patchQueryData(C,O,$.inversePatches,D))};if(A.status==="uninitialized")return $;let W;if("data"in A)if(In(A.data)){const[G,J,Z]=Em(A.data,P);$.patches.push(...J),$.inversePatches.push(...Z),W=G}else W=P(A.data),$.patches.push({op:"replace",path:[],value:W}),$.inversePatches.push({op:"replace",path:[],value:A.data});return $.patches.length===0||N(s.util.patchQueryData(C,O,$.patches,D)),$},p=(C,O,P)=>D=>D(s.endpoints[C].initiate(O,{subscribe:!1,forceRefetch:!0,[Jo]:()=>({data:P})})),m=async(C,{signal:O,abort:P,rejectWithValue:D,fulfillWithValue:N,dispatch:T,getState:I,extra:A})=>{const $=i[C.endpointName];try{let W=Nh,G;const J={signal:O,abort:P,dispatch:T,getState:I,extra:A,endpoint:C.endpointName,type:C.type,forced:C.type==="query"?b(C,I()):void 0,queryCacheKey:C.type==="query"?C.queryCacheKey:void 0},Z=C.type==="query"?C[Jo]:void 0;if(Z?G=Z():$.query?(G=await r($.query(C.originalArgs),J,$.extraOptions),$.transformResponse&&(W=$.transformResponse)):G=await $.queryFn(C.originalArgs,J,$.extraOptions,se=>r(se,J,$.extraOptions)),typeof process<"u",G.error)throw new Th(G.error,G.meta);return N(await W(G.data,G.meta,C.originalArgs),{fulfilledTimeStamp:Date.now(),baseQueryMeta:G.meta,[nr]:!0})}catch(W){let G=W;if(G instanceof Th){let J=Nh;$.query&&$.transformErrorResponse&&(J=$.transformErrorResponse);try{return D(await J(G.value,G.meta,C.originalArgs),{baseQueryMeta:G.meta,[nr]:!0})}catch(Z){G=Z}}throw console.error(G),G}};function b(C,O){var I,A,$;const P=(A=(I=O[t])==null?void 0:I.queries)==null?void 0:A[C.queryCacheKey],D=($=O[t])==null?void 0:$.config.refetchOnMountOrArgChange,N=P==null?void 0:P.fulfilledTimeStamp,T=C.forceRefetch??(C.subscribe&&D);return T?T===!0||(Number(new Date)-Number(N))/1e3>=T:!1}const w=ah(`${t}/executeQuery`,m,{getPendingMeta(){return{startedTimeStamp:Date.now(),[nr]:!0}},condition(C,{getState:O}){var $,W,G;const P=O(),D=(W=($=P[t])==null?void 0:$.queries)==null?void 0:W[C.queryCacheKey],N=D==null?void 0:D.fulfilledTimeStamp,T=C.originalArgs,I=D==null?void 0:D.originalArgs,A=i[C.endpointName];return Xu(C)?!0:(D==null?void 0:D.status)==="pending"?!1:b(C,P)||cg(A)&&((G=A==null?void 0:A.forceRefetch)!=null&&G.call(A,{currentArg:T,previousArg:I,endpointState:D,state:P}))?!0:!N},dispatchConditionRejection:!0}),y=ah(`${t}/executeMutation`,m,{getPendingMeta(){return{startedTimeStamp:Date.now(),[nr]:!0}}}),E=C=>"force"in C,x=C=>"ifOlderThan"in C,v=(C,O,P)=>(D,N)=>{const T=E(P)&&P.force,I=x(P)&&P.ifOlderThan,A=(W=!0)=>{const G={forceRefetch:W,isPrefetch:!0};return s.endpoints[C].initiate(O,G)},$=s.endpoints[C].select(O)(N());if(T)D(A());else if(I){const W=$==null?void 0:$.fulfilledTimeStamp;if(!W){D(A());return}(Number(new Date)-Number(new Date(W)))/1e3>=I&&D(A())}else D(A(!1))};function S(C){return O=>{var P,D;return((D=(P=O==null?void 0:O.meta)==null?void 0:P.arg)==null?void 0:D.endpointName)===C}}function _(C,O){return{matchPending:Wo(hc(C),S(O)),matchFulfilled:Wo(Lt(C),S(O)),matchRejected:Wo(Fr(C),S(O))}}return{queryThunk:w,mutationThunk:y,prefetch:v,updateQueryData:h,upsertQueryData:p,patchQueryData:d,buildMatchThunkActions:_}}function fg(t,r,i,a){return Nc(i[t.meta.arg.endpointName][r],Lt(t)?t.payload:void 0,el(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,a)}function ka(t,r,i){const a=t[r];a&&i(a)}function Zo(t){return("arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)??t.requestId}function zh(t,r,i){const a=t[Zo(r)];a&&i(a)}var Lo={};function Zw({reducerPath:t,queryThunk:r,mutationThunk:i,serializeQueryArgs:a,context:{endpointDefinitions:s,apiUid:c,extractRehydrationInfo:d,hasRehydrationInfo:h},assertTagType:p,config:m}){const b=Dn(`${t}/resetApiState`);function w(N,T,I,A){var $;N[$=T.queryCacheKey]??(N[$]={status:"uninitialized",endpointName:T.endpointName}),ka(N,T.queryCacheKey,W=>{W.status="pending",W.requestId=I&&W.requestId?W.requestId:A.requestId,T.originalArgs!==void 0&&(W.originalArgs=T.originalArgs),W.startedTimeStamp=A.startedTimeStamp})}function y(N,T,I,A){ka(N,T.arg.queryCacheKey,$=>{if($.requestId!==T.requestId&&!A)return;const{merge:W}=s[T.arg.endpointName];if($.status="fulfilled",W)if($.data!==void 0){const{fulfilledTimeStamp:G,arg:J,baseQueryMeta:Z,requestId:se}=T;let ce=ai($.data,pe=>W(pe,I,{arg:J.originalArgs,baseQueryMeta:Z,fulfilledTimeStamp:G,requestId:se}));$.data=ce}else $.data=I;else $.data=s[T.arg.endpointName].structuralSharing??!0?ug(Wn($.data)?N1($.data):$.data,I):I;delete $.error,$.fulfilledTimeStamp=T.fulfilledTimeStamp})}const E=zt({name:`${t}/queries`,initialState:Lo,reducers:{removeQueryResult:{reducer(N,{payload:{queryCacheKey:T}}){delete N[T]},prepare:jo()},cacheEntriesUpserted:{reducer(N,T){for(const I of T.payload){const{queryDescription:A,value:$}=I;w(N,A,!0,{arg:A,requestId:T.meta.requestId,startedTimeStamp:T.meta.timestamp}),y(N,{arg:A,requestId:T.meta.requestId,fulfilledTimeStamp:T.meta.timestamp,baseQueryMeta:{}},$,!0)}},prepare:N=>({payload:N.map(A=>{const{endpointName:$,arg:W,value:G}=A,J=s[$];return{queryDescription:{type:"query",endpointName:$,originalArgs:A.arg,queryCacheKey:a({queryArgs:W,endpointDefinition:J,endpointName:$})},value:G}}),meta:{[nr]:!0,requestId:mc(),timestamp:Date.now()}})},queryResultPatched:{reducer(N,{payload:{queryCacheKey:T,patches:I}}){ka(N,T,A=>{A.data=Zp(A.data,I.concat())})},prepare:jo()}},extraReducers(N){N.addCase(r.pending,(T,{meta:I,meta:{arg:A}})=>{const $=Xu(A);w(T,A,$,I)}).addCase(r.fulfilled,(T,{meta:I,payload:A})=>{const $=Xu(I.arg);y(T,I,A,$)}).addCase(r.rejected,(T,{meta:{condition:I,arg:A,requestId:$},error:W,payload:G})=>{ka(T,A.queryCacheKey,J=>{if(!I){if(J.requestId!==$)return;J.status="rejected",J.error=G??W}})}).addMatcher(h,(T,I)=>{const{queries:A}=d(I);for(const[$,W]of Object.entries(A))((W==null?void 0:W.status)==="fulfilled"||(W==null?void 0:W.status)==="rejected")&&(T[$]=W)})}}),x=zt({name:`${t}/mutations`,initialState:Lo,reducers:{removeMutationResult:{reducer(N,{payload:T}){const I=Zo(T);I in N&&delete N[I]},prepare:jo()}},extraReducers(N){N.addCase(i.pending,(T,{meta:I,meta:{requestId:A,arg:$,startedTimeStamp:W}})=>{$.track&&(T[Zo(I)]={requestId:A,status:"pending",endpointName:$.endpointName,startedTimeStamp:W})}).addCase(i.fulfilled,(T,{payload:I,meta:A})=>{A.arg.track&&zh(T,A,$=>{$.requestId===A.requestId&&($.status="fulfilled",$.data=I,$.fulfilledTimeStamp=A.fulfilledTimeStamp)})}).addCase(i.rejected,(T,{payload:I,error:A,meta:$})=>{$.arg.track&&zh(T,$,W=>{W.requestId===$.requestId&&(W.status="rejected",W.error=I??A)})}).addMatcher(h,(T,I)=>{const{mutations:A}=d(I);for(const[$,W]of Object.entries(A))((W==null?void 0:W.status)==="fulfilled"||(W==null?void 0:W.status)==="rejected")&&$!==(W==null?void 0:W.requestId)&&(T[$]=W)})}}),v=zt({name:`${t}/invalidation`,initialState:Lo,reducers:{updateProvidedBy:{reducer(N,T){var $,W;const{queryCacheKey:I,providedTags:A}=T.payload;for(const G of Object.values(N))for(const J of Object.values(G)){const Z=J.indexOf(I);Z!==-1&&J.splice(Z,1)}for(const{type:G,id:J}of A){const Z=($=N[G]??(N[G]={}))[W=J||"__internal_without_id"]??($[W]=[]);Z.includes(I)||Z.push(I)}},prepare:jo()}},extraReducers(N){N.addCase(E.actions.removeQueryResult,(T,{payload:{queryCacheKey:I}})=>{for(const A of Object.values(T))for(const $ of Object.values(A)){const W=$.indexOf(I);W!==-1&&$.splice(W,1)}}).addMatcher(h,(T,I)=>{var $,W;const{provided:A}=d(I);for(const[G,J]of Object.entries(A))for(const[Z,se]of Object.entries(J)){const ce=($=T[G]??(T[G]={}))[W=Z||"__internal_without_id"]??($[W]=[]);for(const pe of se)ce.includes(pe)||ce.push(pe)}}).addMatcher(lt(Lt(r),el(r)),(T,I)=>{const A=fg(I,"providesTags",s,p),{queryCacheKey:$}=I.meta.arg;v.caseReducers.updateProvidedBy(T,v.actions.updateProvidedBy({queryCacheKey:$,providedTags:A}))})}}),S=zt({name:`${t}/subscriptions`,initialState:Lo,reducers:{updateSubscriptionOptions(N,T){},unsubscribeQueryResult(N,T){},internal_getRTKQSubscriptions(){}}}),_=zt({name:`${t}/internalSubscriptions`,initialState:Lo,reducers:{subscriptionsUpdated:{reducer(N,T){return Zp(N,T.payload)},prepare:jo()}}}),C=zt({name:`${t}/config`,initialState:{online:Fw(),focused:Aw(),middlewareRegistered:!1,...m},reducers:{middlewareRegistered(N,{payload:T}){N.middlewareRegistered=N.middlewareRegistered==="conflict"||c!==T?"conflict":!0}},extraReducers:N=>{N.addCase(sl,T=>{T.online=!0}).addCase(Tc,T=>{T.online=!1}).addCase(ll,T=>{T.focused=!0}).addCase(Rc,T=>{T.focused=!1}).addMatcher(h,T=>({...T}))}}),O=uc({queries:E.reducer,mutations:x.reducer,provided:v.reducer,subscriptions:_.reducer,config:C.reducer}),P=(N,T)=>O(b.match(T)?void 0:N,T),D={...C.actions,...E.actions,...S.actions,..._.actions,...x.actions,...v.actions,resetApiState:b};return{reducer:P,actions:D}}var Mt=Symbol.for("RTKQ/skipToken"),dg={status:"uninitialized"},Dh=ai(dg,()=>{}),Mh=ai(dg,()=>{});function ek({serializeQueryArgs:t,reducerPath:r,createSelector:i}){const a=w=>Dh,s=w=>Mh;return{buildQuerySelector:h,buildMutationSelector:p,selectInvalidatedBy:m,selectCachedArgsForQuery:b};function c(w){return{...w,...Iw(w.status)}}function d(w){return w[r]}function h(w,y){return E=>{if(E===Mt)return i(a,c);const x=t({queryArgs:E,endpointDefinition:y,endpointName:w});return i(S=>{var _,C;return((C=(_=d(S))==null?void 0:_.queries)==null?void 0:C[x])??Dh},c)}}function p(){return w=>{let y;return typeof w=="object"?y=Zo(w)??Mt:y=w,i(y===Mt?s:v=>{var S,_;return((_=(S=d(v))==null?void 0:S.mutations)==null?void 0:_[y])??Mh},c)}}function m(w,y){const E=w[r],x=new Set;for(const v of y.filter(Qa).map(Ku)){const S=E.provided[v.type];if(!S)continue;let _=(v.id!==void 0?S[v.id]:Ph(Object.values(S)))??[];for(const C of _)x.add(C)}return Ph(Array.from(x.values()).map(v=>{const S=E.queries[v];return S?[{queryCacheKey:v,endpointName:S.endpointName,originalArgs:S.originalArgs}]:[]}))}function b(w,y){return Object.values(w[r].queries).filter(E=>(E==null?void 0:E.endpointName)===y&&E.status!=="uninitialized").map(E=>E.originalArgs)}}var Dr=WeakMap?new WeakMap:void 0,jh=({endpointName:t,queryArgs:r})=>{let i="";const a=Dr==null?void 0:Dr.get(r);if(typeof a=="string")i=a;else{const s=JSON.stringify(r,(c,d)=>(d=typeof d=="bigint"?{$bigint:d.toString()}:d,d=Hn(d)?Object.keys(d).sort().reduce((h,p)=>(h[p]=d[p],h),{}):d,d));Hn(r)&&(Dr==null||Dr.set(r,s)),i=s}return`${t}(${i})`};function nk(...t){return function(i){const a=$a(m=>{var b;return(b=i.extractRehydrationInfo)==null?void 0:b.call(i,m,{reducerPath:i.reducerPath??"api"})}),s={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...i,extractRehydrationInfo:a,serializeQueryArgs(m){let b=jh;if("serializeQueryArgs"in m.endpointDefinition){const w=m.endpointDefinition.serializeQueryArgs;b=y=>{const E=w(y);return typeof E=="string"?E:jh({...y,queryArgs:E})}}else i.serializeQueryArgs&&(b=i.serializeQueryArgs);return b(m)},tagTypes:[...i.tagTypes||[]]},c={endpointDefinitions:{},batch(m){m()},apiUid:mc(),extractRehydrationInfo:a,hasRehydrationInfo:$a(m=>a(m)!=null)},d={injectEndpoints:p,enhanceEndpoints({addTagTypes:m,endpoints:b}){if(m)for(const w of m)s.tagTypes.includes(w)||s.tagTypes.push(w);if(b)for(const[w,y]of Object.entries(b))typeof y=="function"?y(c.endpointDefinitions[w]):Object.assign(c.endpointDefinitions[w]||{},y);return d}},h=t.map(m=>m.init(d,s,c));function p(m){const b=m.endpoints({query:w=>({...w,type:"query"}),mutation:w=>({...w,type:"mutation"})});for(const[w,y]of Object.entries(b)){if(m.overrideExisting!==!0&&w in c.endpointDefinitions){if(m.overrideExisting==="throw")throw new Error(Mn(39));continue}c.endpointDefinitions[w]=y;for(const E of h)E.injectEndpoint(w,y)}return d}return d.injectEndpoints({endpoints:i.endpoints})}}function Tt(t,...r){return Object.assign(t,...r)}var tk=({api:t,queryThunk:r,internalState:i})=>{const a=`${t.reducerPath}/subscriptions`;let s=null,c=null;const{updateSubscriptionOptions:d,unsubscribeQueryResult:h}=t.internalActions,p=(E,x)=>{var S,_,C;if(d.match(x)){const{queryCacheKey:O,requestId:P,options:D}=x.payload;return(S=E==null?void 0:E[O])!=null&&S[P]&&(E[O][P]=D),!0}if(h.match(x)){const{queryCacheKey:O,requestId:P}=x.payload;return E[O]&&delete E[O][P],!0}if(t.internalActions.removeQueryResult.match(x))return delete E[x.payload.queryCacheKey],!0;if(r.pending.match(x)){const{meta:{arg:O,requestId:P}}=x,D=E[_=O.queryCacheKey]??(E[_]={});return D[`${P}_running`]={},O.subscribe&&(D[P]=O.subscriptionOptions??D[P]??{}),!0}let v=!1;if(r.fulfilled.match(x)||r.rejected.match(x)){const O=E[x.meta.arg.queryCacheKey]||{},P=`${x.meta.requestId}_running`;v||(v=!!O[P]),delete O[P]}if(r.rejected.match(x)){const{meta:{condition:O,arg:P,requestId:D}}=x;if(O&&P.subscribe){const N=E[C=P.queryCacheKey]??(E[C]={});N[D]=P.subscriptionOptions??N[D]??{},v=!0}}return v},m=()=>i.currentSubscriptions,y={getSubscriptions:m,getSubscriptionCount:E=>{const v=m()[E]??{};return Ar(v)},isRequestSubscribed:(E,x)=>{var S;const v=m();return!!((S=v==null?void 0:v[E])!=null&&S[x])}};return(E,x)=>{if(s||(s=JSON.parse(JSON.stringify(i.currentSubscriptions))),t.util.resetApiState.match(E))return s=i.currentSubscriptions={},c=null,[!0,!1];if(t.internalActions.internal_getRTKQSubscriptions.match(E))return[!1,y];const v=p(i.currentSubscriptions,E);let S=!0;if(v){c||(c=setTimeout(()=>{const O=JSON.parse(JSON.stringify(i.currentSubscriptions)),[,P]=Em(s,()=>O);x.next(t.internalActions.subscriptionsUpdated(P)),s=O,c=null},500));const _=typeof E.type=="string"&&!!E.type.startsWith(a),C=r.rejected.match(E)&&E.meta.condition&&!!E.meta.arg.subscribe;S=!_&&!C}return[S,!1]}};function rk(t){for(const r in t)return!1;return!0}var ok=2147483647/1e3-1,ik=({reducerPath:t,api:r,queryThunk:i,context:a,internalState:s})=>{const{removeQueryResult:c,unsubscribeQueryResult:d,cacheEntriesUpserted:h}=r.internalActions,p=lt(d.match,i.fulfilled,i.rejected,h.match);function m(E){const x=s.currentSubscriptions[E];return!!x&&!rk(x)}const b={},w=(E,x,v)=>{var S;if(p(E)){const _=x.getState()[t];let C;if(h.match(E))C=E.payload.map(O=>O.queryDescription.queryCacheKey);else{const{queryCacheKey:O}=d.match(E)?E.payload:E.meta.arg;C=[O]}for(const O of C)y(O,(S=_.queries[O])==null?void 0:S.endpointName,x,_.config)}if(r.util.resetApiState.match(E))for(const[_,C]of Object.entries(b))C&&clearTimeout(C),delete b[_];if(a.hasRehydrationInfo(E)){const _=x.getState()[t],{queries:C}=a.extractRehydrationInfo(E);for(const[O,P]of Object.entries(C))y(O,P==null?void 0:P.endpointName,x,_.config)}};function y(E,x,v,S){const _=a.endpointDefinitions[x],C=(_==null?void 0:_.keepUnusedDataFor)??S.keepUnusedDataFor;if(C===1/0)return;const O=Math.max(0,Math.min(C,ok));if(!m(E)){const P=b[E];P&&clearTimeout(P),b[E]=setTimeout(()=>{m(E)||v.dispatch(c({queryCacheKey:E})),delete b[E]},O*1e3)}}return w},Ih=new Error("Promise never resolved before cacheEntryRemoved."),ak=({api:t,reducerPath:r,context:i,queryThunk:a,mutationThunk:s,internalState:c})=>{const d=Uu(a),h=Uu(s),p=Lt(a,s),m={};function b(v,S,_){const C=m[v];C!=null&&C.valueResolved&&(C.valueResolved({data:S,meta:_}),delete C.valueResolved)}function w(v){const S=m[v];S&&(delete m[v],S.cacheEntryRemoved())}const y=(v,S,_)=>{const C=E(v);function O(P,D,N,T){const I=_[r].queries[D],A=S.getState()[r].queries[D];!I&&A&&x(P,T,D,S,N)}if(a.pending.match(v))O(v.meta.arg.endpointName,C,v.meta.requestId,v.meta.arg.originalArgs);else if(t.internalActions.cacheEntriesUpserted.match(v))for(const{queryDescription:P,value:D}of v.payload){const{endpointName:N,originalArgs:T,queryCacheKey:I}=P;O(N,I,v.meta.requestId,T),b(I,D,{})}else if(s.pending.match(v))S.getState()[r].mutations[C]&&x(v.meta.arg.endpointName,v.meta.arg.originalArgs,C,S,v.meta.requestId);else if(p(v))b(C,v.payload,v.meta.baseQueryMeta);else if(t.internalActions.removeQueryResult.match(v)||t.internalActions.removeMutationResult.match(v))w(C);else if(t.util.resetApiState.match(v))for(const P of Object.keys(m))w(P)};function E(v){return d(v)?v.meta.arg.queryCacheKey:h(v)?v.meta.arg.fixedCacheKey??v.meta.requestId:t.internalActions.removeQueryResult.match(v)?v.payload.queryCacheKey:t.internalActions.removeMutationResult.match(v)?Zo(v.payload):""}function x(v,S,_,C,O){const P=i.endpointDefinitions[v],D=P==null?void 0:P.onCacheEntryAdded;if(!D)return;const N={},T=new Promise(J=>{N.cacheEntryRemoved=J}),I=Promise.race([new Promise(J=>{N.valueResolved=J}),T.then(()=>{throw Ih})]);I.catch(()=>{}),m[_]=N;const A=t.endpoints[v].select(P.type==="query"?S:_),$=C.dispatch((J,Z,se)=>se),W={...C,getCacheEntry:()=>A(C.getState()),requestId:O,extra:$,updateCachedData:P.type==="query"?J=>C.dispatch(t.util.updateQueryData(v,S,J)):void 0,cacheDataLoaded:I,cacheEntryRemoved:T},G=D(S,W);Promise.resolve(G).catch(J=>{if(J!==Ih)throw J})}return y},lk=({api:t,context:{apiUid:r},reducerPath:i})=>(a,s)=>{t.util.resetApiState.match(a)&&s.dispatch(t.internalActions.middlewareRegistered(r))},sk=({reducerPath:t,context:r,context:{endpointDefinitions:i},mutationThunk:a,queryThunk:s,api:c,assertTagType:d,refetchQuery:h,internalState:p})=>{const{removeQueryResult:m}=c.internalActions,b=lt(Lt(a),el(a)),w=lt(Lt(a,s),Fr(a,s));let y=[];const E=(S,_)=>{b(S)?v(fg(S,"invalidatesTags",i,d),_):w(S)?v([],_):c.util.invalidateTags.match(S)&&v(Nc(S.payload,void 0,void 0,void 0,void 0,d),_)};function x(S){var _,C;for(const O in S.queries)if(((_=S.queries[O])==null?void 0:_.status)==="pending")return!0;for(const O in S.mutations)if(((C=S.mutations[O])==null?void 0:C.status)==="pending")return!0;return!1}function v(S,_){const C=_.getState(),O=C[t];if(y.push(...S),O.config.invalidationBehavior==="delayed"&&x(O))return;const P=y;if(y=[],P.length===0)return;const D=c.util.selectInvalidatedBy(C,P);r.batch(()=>{const N=Array.from(D.values());for(const{queryCacheKey:T}of N){const I=O.queries[T],A=p.currentSubscriptions[T]??{};I&&(Ar(A)===0?_.dispatch(m({queryCacheKey:T})):I.status!=="uninitialized"&&_.dispatch(h(I)))}})}return E},uk=({reducerPath:t,queryThunk:r,api:i,refetchQuery:a,internalState:s})=>{const c={},d=(y,E)=>{(i.internalActions.updateSubscriptionOptions.match(y)||i.internalActions.unsubscribeQueryResult.match(y))&&p(y.payload,E),(r.pending.match(y)||r.rejected.match(y)&&y.meta.condition)&&p(y.meta.arg,E),(r.fulfilled.match(y)||r.rejected.match(y)&&!y.meta.condition)&&h(y.meta.arg,E),i.util.resetApiState.match(y)&&b()};function h({queryCacheKey:y},E){const x=E.getState()[t],v=x.queries[y],S=s.currentSubscriptions[y];if(!v||v.status==="uninitialized")return;const{lowestPollingInterval:_,skipPollingIfUnfocused:C}=w(S);if(!Number.isFinite(_))return;const O=c[y];O!=null&&O.timeout&&(clearTimeout(O.timeout),O.timeout=void 0);const P=Date.now()+_;c[y]={nextPollTimestamp:P,pollingInterval:_,timeout:setTimeout(()=>{(x.config.focused||!C)&&E.dispatch(a(v)),h({queryCacheKey:y},E)},_)}}function p({queryCacheKey:y},E){const v=E.getState()[t].queries[y],S=s.currentSubscriptions[y];if(!v||v.status==="uninitialized")return;const{lowestPollingInterval:_}=w(S);if(!Number.isFinite(_)){m(y);return}const C=c[y],O=Date.now()+_;(!C||O<C.nextPollTimestamp)&&h({queryCacheKey:y},E)}function m(y){const E=c[y];E!=null&&E.timeout&&clearTimeout(E.timeout),delete c[y]}function b(){for(const y of Object.keys(c))m(y)}function w(y={}){let E=!1,x=Number.POSITIVE_INFINITY;for(let v in y)y[v].pollingInterval&&(x=Math.min(y[v].pollingInterval,x),E=y[v].skipPollingIfUnfocused||E);return{lowestPollingInterval:x,skipPollingIfUnfocused:E}}return d},ck=({api:t,context:r,queryThunk:i,mutationThunk:a})=>{const s=hc(i,a),c=Fr(i,a),d=Lt(i,a),h={};return(m,b)=>{var w,y;if(s(m)){const{requestId:E,arg:{endpointName:x,originalArgs:v}}=m.meta,S=r.endpointDefinitions[x],_=S==null?void 0:S.onQueryStarted;if(_){const C={},O=new Promise((T,I)=>{C.resolve=T,C.reject=I});O.catch(()=>{}),h[E]=C;const P=t.endpoints[x].select(S.type==="query"?v:E),D=b.dispatch((T,I,A)=>A),N={...b,getCacheEntry:()=>P(b.getState()),requestId:E,extra:D,updateCachedData:S.type==="query"?T=>b.dispatch(t.util.updateQueryData(x,v,T)):void 0,queryFulfilled:O};_(v,N)}}else if(d(m)){const{requestId:E,baseQueryMeta:x}=m.meta;(w=h[E])==null||w.resolve({data:m.payload,meta:x}),delete h[E]}else if(c(m)){const{requestId:E,rejectedWithValue:x,baseQueryMeta:v}=m.meta;(y=h[E])==null||y.reject({error:m.payload??m.error,isUnhandledError:!x,meta:v}),delete h[E]}}},fk=({reducerPath:t,context:r,api:i,refetchQuery:a,internalState:s})=>{const{removeQueryResult:c}=i.internalActions,d=(p,m)=>{ll.match(p)&&h(m,"refetchOnFocus"),sl.match(p)&&h(m,"refetchOnReconnect")};function h(p,m){const b=p.getState()[t],w=b.queries,y=s.currentSubscriptions;r.batch(()=>{for(const E of Object.keys(y)){const x=w[E],v=y[E];if(!v||!x)continue;(Object.values(v).some(_=>_[m]===!0)||Object.values(v).every(_=>_[m]===void 0)&&b.config[m])&&(Ar(v)===0?p.dispatch(c({queryCacheKey:E})):x.status!=="uninitialized"&&p.dispatch(a(x)))}})}return d};function dk(t){const{reducerPath:r,queryThunk:i,api:a,context:s}=t,{apiUid:c}=s,d={invalidateTags:Dn(`${r}/invalidateTags`)},h=w=>w.type.startsWith(`${r}/`),p=[lk,ik,sk,uk,ak,ck];return{middleware:w=>{let y=!1;const x={...t,internalState:{currentSubscriptions:{}},refetchQuery:b,isThisApiSliceAction:h},v=p.map(C=>C(x)),S=tk(x),_=fk(x);return C=>O=>{if(!vm(O))return C(O);y||(y=!0,w.dispatch(a.internalActions.middlewareRegistered(c)));const P={...w,next:C},D=w.getState(),[N,T]=S(O,P,D);let I;if(N?I=C(O):I=T,w.getState()[r]&&(_(O,P,D),h(O)||s.hasRehydrationInfo(O)))for(const A of v)A(O,P,D);return I}},actions:d};function b(w){return t.api.endpoints[w.endpointName].initiate(w.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Lh=Symbol(),pk=({createSelector:t=pc}={})=>({name:Lh,init(r,{baseQuery:i,tagTypes:a,reducerPath:s,serializeQueryArgs:c,keepUnusedDataFor:d,refetchOnMountOrArgChange:h,refetchOnFocus:p,refetchOnReconnect:m,invalidationBehavior:b},w){q1();const y=B=>B;Object.assign(r,{reducerPath:s,endpoints:{},internalActions:{onOnline:sl,onOffline:Tc,onFocus:ll,onFocusLost:Rc},util:{}});const{queryThunk:E,mutationThunk:x,patchQueryData:v,updateQueryData:S,upsertQueryData:_,prefetch:C,buildMatchThunkActions:O}=Jw({baseQuery:i,reducerPath:s,context:w,api:r,serializeQueryArgs:c,assertTagType:y}),{reducer:P,actions:D}=Zw({context:w,queryThunk:E,mutationThunk:x,serializeQueryArgs:c,reducerPath:s,assertTagType:y,config:{refetchOnFocus:p,refetchOnReconnect:m,refetchOnMountOrArgChange:h,keepUnusedDataFor:d,reducerPath:s,invalidationBehavior:b}});Tt(r.util,{patchQueryData:v,updateQueryData:S,upsertQueryData:_,prefetch:C,resetApiState:D.resetApiState,upsertQueryEntries:D.cacheEntriesUpserted}),Tt(r.internalActions,D);const{middleware:N,actions:T}=dk({reducerPath:s,context:w,queryThunk:E,mutationThunk:x,api:r,assertTagType:y});Tt(r.util,T),Tt(r,{reducer:P,middleware:N});const{buildQuerySelector:I,buildMutationSelector:A,selectInvalidatedBy:$,selectCachedArgsForQuery:W}=ek({serializeQueryArgs:c,reducerPath:s,createSelector:t});Tt(r.util,{selectInvalidatedBy:$,selectCachedArgsForQuery:W});const{buildInitiateQuery:G,buildInitiateMutation:J,getRunningMutationThunk:Z,getRunningMutationsThunk:se,getRunningQueriesThunk:ce,getRunningQueryThunk:pe}=Gw({queryThunk:E,mutationThunk:x,api:r,serializeQueryArgs:c,context:w});return Tt(r.util,{getRunningMutationThunk:Z,getRunningMutationsThunk:se,getRunningQueryThunk:pe,getRunningQueriesThunk:ce}),{name:Lh,injectEndpoint(B,ee){var j;const K=r;(j=K.endpoints)[B]??(j[B]={}),cg(ee)?Tt(K.endpoints[B],{name:B,select:I(B,ee),initiate:G(B,ee)},O(E,B)):Kw(ee)&&Tt(K.endpoints[B],{name:B,select:A(),initiate:J(B)},O(x,B))}}}});function Ru(t){return t.replace(t[0],t[0].toUpperCase())}function hk(t){return t.type==="query"}function mk(t){return t.type==="mutation"}function Sa(t,...r){return Object.assign(t,...r)}var Mr=WeakMap?new WeakMap:void 0,gk=({endpointName:t,queryArgs:r})=>{let i="";const a=Mr==null?void 0:Mr.get(r);if(typeof a=="string")i=a;else{const s=JSON.stringify(r,(c,d)=>(d=typeof d=="bigint"?{$bigint:d.toString()}:d,d=Hn(d)?Object.keys(d).sort().reduce((h,p)=>(h[p]=d[p],h),{}):d,d));Hn(r)&&(Mr==null||Mr.set(r,s)),i=s}return`${t}(${i})`},Tu=Symbol();function Ah(t,r,i,a){const s=k.useMemo(()=>({queryArgs:t,serialized:typeof t=="object"?r({queryArgs:t,endpointDefinition:i,endpointName:a}):t}),[t,r,i,a]),c=k.useRef(s);return k.useEffect(()=>{c.current.serialized!==s.serialized&&(c.current=s)},[s]),c.current.serialized===s.serialized?c.current.queryArgs:t}function Nu(t){const r=k.useRef(t);return k.useEffect(()=>{Bo(r.current,t)||(r.current=t)},[t]),Bo(r.current,t)?r.current:t}var yk=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vk=yk(),bk=()=>typeof navigator<"u"&&navigator.product==="ReactNative",xk=bk(),wk=()=>vk||xk?k.useLayoutEffect:k.useEffect,kk=wk(),Sk=t=>t.isUninitialized?{...t,isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:sg.pending}:t;function Ek({api:t,moduleOptions:{batch:r,hooks:{useDispatch:i,useSelector:a,useStore:s},unstable__sideEffectsInRender:c,createSelector:d},serializeQueryArgs:h,context:p}){const m=c?x=>x():k.useEffect;return{buildQueryHooks:y,buildMutationHook:E,usePrefetch:w};function b(x,v,S){if(v!=null&&v.endpointName&&x.isUninitialized){const{endpointName:N}=v,T=p.endpointDefinitions[N];S!==Mt&&h({queryArgs:v.originalArgs,endpointDefinition:T,endpointName:N})===h({queryArgs:S,endpointDefinition:T,endpointName:N})&&(v=void 0)}let _=x.isSuccess?x.data:v==null?void 0:v.data;_===void 0&&(_=x.data);const C=_!==void 0,O=x.isLoading,P=(!v||v.isLoading||v.isUninitialized)&&!C&&O,D=x.isSuccess||C&&(O&&!(v!=null&&v.isError)||x.isUninitialized);return{...x,data:_,currentData:x.data,isFetching:O,isLoading:P,isSuccess:D}}function w(x,v){const S=i(),_=Nu(v);return k.useCallback((C,O)=>S(t.util.prefetch(x,C,{..._,...O})),[x,S,_])}function y(x){const v=(C,{refetchOnReconnect:O,refetchOnFocus:P,refetchOnMountOrArgChange:D,skip:N=!1,pollingInterval:T=0,skipPollingIfUnfocused:I=!1}={})=>{const{initiate:A}=t.endpoints[x],$=i(),W=k.useRef(void 0);if(!W.current){const K=$(t.internalActions.internal_getRTKQSubscriptions());W.current=K}const G=Ah(N?Mt:C,gk,p.endpointDefinitions[x],x),J=Nu({refetchOnReconnect:O,refetchOnFocus:P,pollingInterval:T,skipPollingIfUnfocused:I}),Z=k.useRef(!1),se=k.useRef(void 0);let{queryCacheKey:ce,requestId:pe}=se.current||{},B=!1;ce&&pe&&(B=W.current.isRequestSubscribed(ce,pe));const ee=!B&&Z.current;return m(()=>{Z.current=B}),m(()=>{ee&&(se.current=void 0)},[ee]),m(()=>{var H;const K=se.current;if(G===Mt){K==null||K.unsubscribe(),se.current=void 0;return}const j=(H=se.current)==null?void 0:H.subscriptionOptions;if(!K||K.arg!==G){K==null||K.unsubscribe();const ie=$(A(G,{subscriptionOptions:J,forceRefetch:D}));se.current=ie}else J!==j&&K.updateSubscriptionOptions(J)},[$,A,D,G,J,ee]),k.useEffect(()=>()=>{var K;(K=se.current)==null||K.unsubscribe(),se.current=void 0},[]),k.useMemo(()=>({refetch:()=>{var K;if(!se.current)throw new Error(Mn(38));return(K=se.current)==null?void 0:K.refetch()}}),[])},S=({refetchOnReconnect:C,refetchOnFocus:O,pollingInterval:P=0,skipPollingIfUnfocused:D=!1}={})=>{const{initiate:N}=t.endpoints[x],T=i(),[I,A]=k.useState(Tu),$=k.useRef(void 0),W=Nu({refetchOnReconnect:C,refetchOnFocus:O,pollingInterval:P,skipPollingIfUnfocused:D});m(()=>{var ce,pe;const se=(ce=$.current)==null?void 0:ce.subscriptionOptions;W!==se&&((pe=$.current)==null||pe.updateSubscriptionOptions(W))},[W]);const G=k.useRef(W);m(()=>{G.current=W},[W]);const J=k.useCallback(function(se,ce=!1){let pe;return r(()=>{var B;(B=$.current)==null||B.unsubscribe(),$.current=pe=T(N(se,{subscriptionOptions:G.current,forceRefetch:!ce})),A(se)}),pe},[T,N]),Z=k.useCallback(()=>{var se,ce;(se=$.current)!=null&&se.queryCacheKey&&T(t.internalActions.removeQueryResult({queryCacheKey:(ce=$.current)==null?void 0:ce.queryCacheKey}))},[T]);return k.useEffect(()=>()=>{var se;(se=$==null?void 0:$.current)==null||se.unsubscribe()},[]),k.useEffect(()=>{I!==Tu&&!$.current&&J(I,!0)},[I,J]),k.useMemo(()=>[J,I,{reset:Z}],[J,I,Z])},_=(C,{skip:O=!1,selectFromResult:P}={})=>{const{select:D}=t.endpoints[x],N=Ah(O?Mt:C,h,p.endpointDefinitions[x],x),T=k.useRef(void 0),I=k.useMemo(()=>d([D(N),(J,Z)=>Z,J=>N],b,{memoizeOptions:{resultEqualityCheck:Bo}}),[D,N]),A=k.useMemo(()=>P?d([I],P,{devModeChecks:{identityFunctionCheck:"never"}}):I,[I,P]),$=a(J=>A(J,T.current),Bo),W=s(),G=I(W.getState(),T.current);return kk(()=>{T.current=G},[G]),$};return{useQueryState:_,useQuerySubscription:v,useLazyQuerySubscription:S,useLazyQuery(C){const[O,P,{reset:D}]=S(C),N=_(P,{...C,skip:P===Tu}),T=k.useMemo(()=>({lastArg:P}),[P]);return k.useMemo(()=>[O,{...N,reset:D},T],[O,N,D,T])},useQuery(C,O){const P=v(C,O),D=_(C,{selectFromResult:C===Mt||O!=null&&O.skip?void 0:Sk,...O}),{data:N,status:T,isLoading:I,isSuccess:A,isError:$,error:W}=D;return k.useDebugValue({data:N,status:T,isLoading:I,isSuccess:A,isError:$,error:W}),k.useMemo(()=>({...D,...P}),[D,P])}}}function E(x){return({selectFromResult:v,fixedCacheKey:S}={})=>{const{select:_,initiate:C}=t.endpoints[x],O=i(),[P,D]=k.useState();k.useEffect(()=>()=>{P!=null&&P.arg.fixedCacheKey||P==null||P.reset()},[P]);const N=k.useCallback(function(j){const H=O(C(j,{fixedCacheKey:S}));return D(H),H},[O,C,S]),{requestId:T}=P||{},I=k.useMemo(()=>_({fixedCacheKey:S,requestId:P==null?void 0:P.requestId}),[S,P,_]),A=k.useMemo(()=>v?d([I],v):I,[v,I]),$=a(A,Bo),W=S==null?P==null?void 0:P.arg.originalArgs:void 0,G=k.useCallback(()=>{r(()=>{P&&D(void 0),S&&O(t.internalActions.removeMutationResult({requestId:T,fixedCacheKey:S}))})},[O,S,P,T]),{endpointName:J,data:Z,status:se,isLoading:ce,isSuccess:pe,isError:B,error:ee}=$;k.useDebugValue({endpointName:J,data:Z,status:se,isLoading:ce,isSuccess:pe,isError:B,error:ee});const K=k.useMemo(()=>({...$,originalArgs:W,reset:G}),[$,W,G]);return k.useMemo(()=>[N,K],[N,K])}}}var Ok=Symbol(),Ck=({batch:t=O1,hooks:r={useDispatch:ri,useSelector:ja,useStore:ym},createSelector:i=pc,unstable__sideEffectsInRender:a=!1,...s}={})=>({name:Ok,init(c,{serializeQueryArgs:d},h){const p=c,{buildQueryHooks:m,buildMutationHook:b,usePrefetch:w}=Ek({api:c,moduleOptions:{batch:t,hooks:r,unstable__sideEffectsInRender:a,createSelector:i},serializeQueryArgs:d,context:h});return Sa(p,{usePrefetch:w}),Sa(h,{batch:t}),{injectEndpoint(y,E){if(hk(E)){const{useQuery:x,useLazyQuery:v,useLazyQuerySubscription:S,useQueryState:_,useQuerySubscription:C}=m(y);Sa(p.endpoints[y],{useQuery:x,useLazyQuery:v,useLazyQuerySubscription:S,useQueryState:_,useQuerySubscription:C}),c[`use${Ru(y)}Query`]=x,c[`useLazy${Ru(y)}Query`]=v}else if(mk(E)){const x=b(y);Sa(p.endpoints[y],{useMutation:x}),c[`use${Ru(y)}Mutation`]=x}}}}}),Pk=nk(pk(),Ck());const Va=Pk({reducerPath:"productApi",baseQuery:Qw({baseUrl:"https://fakestoreapi.com/"}),endpoints:t=>({getProducts:t.query({query:()=>"products/"})})}),{useGetProductsQuery:_k}=Va,zc=k.forwardRef(({className:t,bsPrefix:r,as:i="div",...a},s)=>(r=Pe(r,"card-body"),U.jsx(i,{ref:s,className:we(t,r),...a})));zc.displayName="CardBody";const pg=k.forwardRef(({className:t,bsPrefix:r,as:i="div",...a},s)=>(r=Pe(r,"card-footer"),U.jsx(i,{ref:s,className:we(t,r),...a})));pg.displayName="CardFooter";const hg=k.forwardRef(({bsPrefix:t,className:r,as:i="div",...a},s)=>{const c=Pe(t,"card-header"),d=k.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return U.jsx(wc.Provider,{value:d,children:U.jsx(i,{ref:s,...a,className:we(r,c)})})});hg.displayName="CardHeader";const mg=k.forwardRef(({bsPrefix:t,className:r,variant:i,as:a="img",...s},c)=>{const d=Pe(t,"card-img");return U.jsx(a,{ref:c,className:we(i?`${d}-${i}`:d,r),...s})});mg.displayName="CardImg";const gg=k.forwardRef(({className:t,bsPrefix:r,as:i="div",...a},s)=>(r=Pe(r,"card-img-overlay"),U.jsx(i,{ref:s,className:we(t,r),...a})));gg.displayName="CardImgOverlay";const yg=k.forwardRef(({className:t,bsPrefix:r,as:i="a",...a},s)=>(r=Pe(r,"card-link"),U.jsx(i,{ref:s,className:we(t,r),...a})));yg.displayName="CardLink";const Rk=_c("h6"),vg=k.forwardRef(({className:t,bsPrefix:r,as:i=Rk,...a},s)=>(r=Pe(r,"card-subtitle"),U.jsx(i,{ref:s,className:we(t,r),...a})));vg.displayName="CardSubtitle";const bg=k.forwardRef(({className:t,bsPrefix:r,as:i="p",...a},s)=>(r=Pe(r,"card-text"),U.jsx(i,{ref:s,className:we(t,r),...a})));bg.displayName="CardText";const Tk=_c("h5"),xg=k.forwardRef(({className:t,bsPrefix:r,as:i=Tk,...a},s)=>(r=Pe(r,"card-title"),U.jsx(i,{ref:s,className:we(t,r),...a})));xg.displayName="CardTitle";const wg=k.forwardRef(({bsPrefix:t,className:r,bg:i,text:a,border:s,body:c=!1,children:d,as:h="div",...p},m)=>{const b=Pe(t,"card");return U.jsx(h,{ref:m,...p,className:we(r,b,i&&`bg-${i}`,a&&`text-${a}`,s&&`border-${s}`),children:c?U.jsx(zc,{children:d}):d})});wg.displayName="Card";const jr=Object.assign(wg,{Img:mg,Title:xg,Subtitle:vg,Body:zc,Link:yg,Text:bg,Header:hg,Footer:pg,ImgOverlay:gg}),Nk=t=>{const r=ri(),{title:i,image:a,price:s,description:c,category:d,rating:h}=t,p=()=>{const m={...t};r(Cw(m))};return U.jsxs(jr,{style:{width:"18rem",padding:"6px"},className:"shadow",children:[U.jsx(jr.Img,{variant:"top",src:a,style:{height:"180px",padding:"4px",objectFit:"contain"}}),U.jsxs(jr.Body,{children:[U.jsxs(jr.Title,{children:["$",s]}),U.jsxs(jr.Subtitle,{className:"my-2 text-muted",children:["Rating: ",h.rate]}),U.jsxs(jr.Subtitle,{className:"my-2 text-muted",children:["Category: ",d]}),U.jsx(qa,{id:"p-btn",onClick:p,style:{width:"-webkit-fill-available"},children:"Add to cart"})]})]})},kg=k.forwardRef(({bsPrefix:t,className:r,as:i="div",...a},s)=>{const c=Pe(t,"row"),d=Ib(),h=Lb(),p=`${c}-cols`,m=[];return d.forEach(b=>{const w=a[b];delete a[b];let y;w!=null&&typeof w=="object"?{cols:y}=w:y=w;const E=b!==h?`-${b}`:"";y!=null&&m.push(`${p}${E}-${y}`)}),U.jsx(i,{ref:s,...a,className:we(r,c,...m)})});kg.displayName="Row";const zk=()=>{const{data:t,error:r,isLoading:i}=_k();let a,s="";return r?s="Oh no, there was an error!":i?s="Loading...":a=t,U.jsxs("div",{className:"bg-light",children:[U.jsx(jw,{}),U.jsx("h3",{children:s}),U.jsx(vc,{style:{paddingTop:"20px"},children:U.jsx(kg,{style:{gap:"14px",display:"flex",justifyContent:"center",alignItems:"center"},children:a==null?void 0:a.map(c=>U.jsx(Nk,{...c},c.id))})})]})};function Dk(){const t=ja(Sb);return U.jsx(G0,{children:U.jsxs(P0,{children:[U.jsx(Mu,{exact:!0,path:"/",element:t?U.jsx(zk,{}):U.jsx(Up,{to:"/signin"})}),U.jsx(Mu,{path:"signin",element:t?U.jsx(Up,{to:"/"}):U.jsx(_b,{})})]})})}var Ao={},Ea={},Oa={},Fh;function Mk(){if(Fh)return Oa;Fh=1,Oa.__esModule=!0,Oa.default=s;function t(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(h){return typeof h}:t=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(c)}function r(){}var i={getItem:r,setItem:r,removeItem:r};function a(c){if((typeof self>"u"?"undefined":t(self))!=="object"||!(c in self))return!1;try{var d=self[c],h="redux-persist ".concat(c," test");d.setItem(h,"test"),d.getItem(h),d.removeItem(h)}catch{return!1}return!0}function s(c){var d="".concat(c,"Storage");return a(d)?self[d]:i}return Oa}var $h;function jk(){if($h)return Ea;$h=1,Ea.__esModule=!0,Ea.default=i;var t=r(Mk());function r(a){return a&&a.__esModule?a:{default:a}}function i(a){var s=(0,t.default)(a);return{getItem:function(d){return new Promise(function(h,p){h(s.getItem(d))})},setItem:function(d,h){return new Promise(function(p,m){p(s.setItem(d,h))})},removeItem:function(d){return new Promise(function(h,p){h(s.removeItem(d))})}}}return Ea}var qh;function Ik(){if(qh)return Ao;qh=1,Ao.__esModule=!0,Ao.default=void 0;var t=r(jk());function r(a){return a&&a.__esModule?a:{default:a}}var i=(0,t.default)("local");return Ao.default=i,Ao}var Lk=Ik();const Ak=ei(Lk);var Dc="persist:",Sg="persist/FLUSH",Mc="persist/REHYDRATE",Eg="persist/PAUSE",Og="persist/PERSIST",Cg="persist/PURGE",Pg="persist/REGISTER",Fk=-1;function Ta(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ta=function(i){return typeof i}:Ta=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ta(t)}function Uh(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,a)}return i}function $k(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Uh(i,!0).forEach(function(a){qk(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Uh(i).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function qk(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Uk(t,r,i,a){a.debug;var s=$k({},i);return t&&Ta(t)==="object"&&Object.keys(t).forEach(function(c){c!=="_persist"&&r[c]===i[c]&&(s[c]=t[c])}),s}function Bk(t){var r=t.blacklist||null,i=t.whitelist||null,a=t.transforms||[],s=t.throttle||0,c="".concat(t.keyPrefix!==void 0?t.keyPrefix:Dc).concat(t.key),d=t.storage,h;t.serialize===!1?h=function(D){return D}:typeof t.serialize=="function"?h=t.serialize:h=Hk;var p=t.writeFailHandler||null,m={},b={},w=[],y=null,E=null,x=function(D){Object.keys(D).forEach(function(N){_(N)&&m[N]!==D[N]&&w.indexOf(N)===-1&&w.push(N)}),Object.keys(m).forEach(function(N){D[N]===void 0&&_(N)&&w.indexOf(N)===-1&&m[N]!==void 0&&w.push(N)}),y===null&&(y=setInterval(v,s)),m=D};function v(){if(w.length===0){y&&clearInterval(y),y=null;return}var P=w.shift(),D=a.reduce(function(N,T){return T.in(N,P,m)},m[P]);if(D!==void 0)try{b[P]=h(D)}catch(N){console.error("redux-persist/createPersistoid: error serializing state",N)}else delete b[P];w.length===0&&S()}function S(){Object.keys(b).forEach(function(P){m[P]===void 0&&delete b[P]}),E=d.setItem(c,h(b)).catch(C)}function _(P){return!(i&&i.indexOf(P)===-1&&P!=="_persist"||r&&r.indexOf(P)!==-1)}function C(P){p&&p(P)}var O=function(){for(;w.length!==0;)v();return E||Promise.resolve()};return{update:x,flush:O}}function Hk(t){return JSON.stringify(t)}function Wk(t){var r=t.transforms||[],i="".concat(t.keyPrefix!==void 0?t.keyPrefix:Dc).concat(t.key),a=t.storage;t.debug;var s;return t.deserialize===!1?s=function(d){return d}:typeof t.deserialize=="function"?s=t.deserialize:s=Qk,a.getItem(i).then(function(c){if(c)try{var d={},h=s(c);return Object.keys(h).forEach(function(p){d[p]=r.reduceRight(function(m,b){return b.out(m,p,h)},s(h[p]))}),d}catch(p){throw p}else return})}function Qk(t){return JSON.parse(t)}function Vk(t){var r=t.storage,i="".concat(t.keyPrefix!==void 0?t.keyPrefix:Dc).concat(t.key);return r.removeItem(i,Kk)}function Kk(t){}function Bh(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,a)}return i}function nt(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Bh(i,!0).forEach(function(a){Xk(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Bh(i).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function Xk(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Yk(t,r){if(t==null)return{};var i=Gk(t,r),a,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(s=0;s<c.length;s++)a=c[s],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function Gk(t,r){if(t==null)return{};var i={},a=Object.keys(t),s,c;for(c=0;c<a.length;c++)s=a[c],!(r.indexOf(s)>=0)&&(i[s]=t[s]);return i}var Jk=5e3;function Zk(t,r){var i=t.version!==void 0?t.version:Fk;t.debug;var a=t.stateReconciler===void 0?Uk:t.stateReconciler,s=t.getStoredState||Wk,c=t.timeout!==void 0?t.timeout:Jk,d=null,h=!1,p=!0,m=function(w){return w._persist.rehydrated&&d&&!p&&d.update(w),w};return function(b,w){var y=b||{},E=y._persist,x=Yk(y,["_persist"]),v=x;if(w.type===Og){var S=!1,_=function(I,A){S||(w.rehydrate(t.key,I,A),S=!0)};if(c&&setTimeout(function(){!S&&_(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},c),p=!1,d||(d=Bk(t)),E)return nt({},r(v,w),{_persist:E});if(typeof w.rehydrate!="function"||typeof w.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return w.register(t.key),s(t).then(function(T){var I=t.migrate||function(A,$){return Promise.resolve(A)};I(T,i).then(function(A){_(A)},function(A){_(void 0,A)})},function(T){_(void 0,T)}),nt({},r(v,w),{_persist:{version:i,rehydrated:!1}})}else{if(w.type===Cg)return h=!0,w.result(Vk(t)),nt({},r(v,w),{_persist:E});if(w.type===Sg)return w.result(d&&d.flush()),nt({},r(v,w),{_persist:E});if(w.type===Eg)p=!0;else if(w.type===Mc){if(h)return nt({},v,{_persist:nt({},E,{rehydrated:!0})});if(w.key===t.key){var C=r(v,w),O=w.payload,P=a!==!1&&O!==void 0?a(O,b,C,t):C,D=nt({},P,{_persist:nt({},E,{rehydrated:!0})});return m(D)}}}if(!E)return r(b,w);var N=r(v,w);return N===v?b:m(nt({},N,{_persist:E}))}}function Hh(t){return tS(t)||nS(t)||eS()}function eS(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function nS(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function tS(t){if(Array.isArray(t)){for(var r=0,i=new Array(t.length);r<t.length;r++)i[r]=t[r];return i}}function Wh(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,a)}return i}function Yu(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Wh(i,!0).forEach(function(a){rS(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Wh(i).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function rS(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}var _g={registry:[],bootstrapped:!1},oS=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_g,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case Pg:return Yu({},r,{registry:[].concat(Hh(r.registry),[i.key])});case Mc:var a=r.registry.indexOf(i.key),s=Hh(r.registry);return s.splice(a,1),Yu({},r,{registry:s,bootstrapped:s.length===0});default:return r}};function iS(t,r,i){var a=sc(oS,_g,void 0),s=function(p){a.dispatch({type:Pg,key:p})},c=function(p,m,b){var w={type:Mc,payload:m,err:b,key:p};t.dispatch(w),a.dispatch(w)},d=Yu({},a,{purge:function(){var p=[];return t.dispatch({type:Cg,result:function(b){p.push(b)}}),Promise.all(p)},flush:function(){var p=[];return t.dispatch({type:Sg,result:function(b){p.push(b)}}),Promise.all(p)},pause:function(){t.dispatch({type:Eg})},persist:function(){t.dispatch({type:Og,register:s,rehydrate:c})}});return d.persist(),d}const aS=uc({userData:Pb,[Va.reducerPath]:Va.reducer,cart:Tw}),lS={key:"root",storage:Ak},sS=Zk(lS,aS),jc=ab({reducer:sS,middleware:t=>t({serializableCheck:!1}).concat(Va.middleware)});Vw(jc.dispatch);function Na(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Na=function(i){return typeof i}:Na=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Na(t)}function uS(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function cS(t,r){for(var i=0;i<r.length;i++){var a=r[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function fS(t,r,i){return cS(t.prototype,r),t}function dS(t,r){return r&&(Na(r)==="object"||typeof r=="function")?r:za(t)}function Gu(t){return Gu=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},Gu(t)}function za(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pS(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&Ju(t,r)}function Ju(t,r){return Ju=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a},Ju(t,r)}function Da(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}var Rg=function(t){pS(r,t);function r(){var i,a;uS(this,r);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return a=dS(this,(i=Gu(r)).call.apply(i,[this].concat(c))),Da(za(a),"state",{bootstrapped:!1}),Da(za(a),"_unsubscribe",void 0),Da(za(a),"handlePersistorState",function(){var h=a.props.persistor,p=h.getState(),m=p.bootstrapped;m&&(a.props.onBeforeLift?Promise.resolve(a.props.onBeforeLift()).finally(function(){return a.setState({bootstrapped:!0})}):a.setState({bootstrapped:!0}),a._unsubscribe&&a._unsubscribe())}),a}return fS(r,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),r}(k.PureComponent);Da(Rg,"defaultProps",{children:null,loading:null});function Ue(t,r){r===void 0&&(r={});var i=r.insertAt;if(t&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}Ue(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Bn=function(){return Bn=Object.assign||function(t){for(var r,i=1,a=arguments.length;i<a;i++)for(var s in r=arguments[i])Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);return t},Bn.apply(this,arguments)};function Ka(t){return Ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ka(t)}var hS=/^\s+/,mS=/\s+$/;function ue(t,r){if(r=r||{},(t=t||"")instanceof ue)return t;if(!(this instanceof ue))return new ue(t,r);var i=function(a){var s={r:0,g:0,b:0},c=1,d=null,h=null,p=null,m=!1,b=!1;typeof a=="string"&&(a=function(x){x=x.replace(hS,"").replace(mS,"").toLowerCase();var v,S=!1;if(Zu[x])x=Zu[x],S=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(v=Tn.rgb.exec(x))?{r:v[1],g:v[2],b:v[3]}:(v=Tn.rgba.exec(x))?{r:v[1],g:v[2],b:v[3],a:v[4]}:(v=Tn.hsl.exec(x))?{h:v[1],s:v[2],l:v[3]}:(v=Tn.hsla.exec(x))?{h:v[1],s:v[2],l:v[3],a:v[4]}:(v=Tn.hsv.exec(x))?{h:v[1],s:v[2],v:v[3]}:(v=Tn.hsva.exec(x))?{h:v[1],s:v[2],v:v[3],a:v[4]}:(v=Tn.hex8.exec(x))?{r:mn(v[1]),g:mn(v[2]),b:mn(v[3]),a:Gh(v[4]),format:S?"name":"hex8"}:(v=Tn.hex6.exec(x))?{r:mn(v[1]),g:mn(v[2]),b:mn(v[3]),format:S?"name":"hex"}:(v=Tn.hex4.exec(x))?{r:mn(v[1]+""+v[1]),g:mn(v[2]+""+v[2]),b:mn(v[3]+""+v[3]),a:Gh(v[4]+""+v[4]),format:S?"name":"hex8"}:(v=Tn.hex3.exec(x))?{r:mn(v[1]+""+v[1]),g:mn(v[2]+""+v[2]),b:mn(v[3]+""+v[3]),format:S?"name":"hex"}:!1}(a)),Ka(a)=="object"&&(tt(a.r)&&tt(a.g)&&tt(a.b)?(w=a.r,y=a.g,E=a.b,s={r:255*ze(w,255),g:255*ze(y,255),b:255*ze(E,255)},m=!0,b=String(a.r).substr(-1)==="%"?"prgb":"rgb"):tt(a.h)&&tt(a.s)&&tt(a.v)?(d=Uo(a.s),h=Uo(a.v),s=function(x,v,S){x=6*ze(x,360),v=ze(v,100),S=ze(S,100);var _=Math.floor(x),C=x-_,O=S*(1-v),P=S*(1-C*v),D=S*(1-(1-C)*v),N=_%6,T=[S,P,O,O,D,S][N],I=[D,S,S,P,O,O][N],A=[O,O,D,S,S,P][N];return{r:255*T,g:255*I,b:255*A}}(a.h,d,h),m=!0,b="hsv"):tt(a.h)&&tt(a.s)&&tt(a.l)&&(d=Uo(a.s),p=Uo(a.l),s=function(x,v,S){var _,C,O;function P(T,I,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?T+6*(I-T)*A:A<.5?I:A<2/3?T+(I-T)*(2/3-A)*6:T}if(x=ze(x,360),v=ze(v,100),S=ze(S,100),v===0)_=C=O=S;else{var D=S<.5?S*(1+v):S+v-S*v,N=2*S-D;_=P(N,D,x+1/3),C=P(N,D,x),O=P(N,D,x-1/3)}return{r:255*_,g:255*C,b:255*O}}(a.h,d,p),m=!0,b="hsl"),a.hasOwnProperty("a")&&(c=a.a));var w,y,E;return c=Tg(c),{ok:m,format:a.format||b,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:c}}(t);this._originalInput=t,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||i.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Qh(t,r,i){t=ze(t,255),r=ze(r,255),i=ze(i,255);var a,s,c=Math.max(t,r,i),d=Math.min(t,r,i),h=(c+d)/2;if(c==d)a=s=0;else{var p=c-d;switch(s=h>.5?p/(2-c-d):p/(c+d),c){case t:a=(r-i)/p+(r<i?6:0);break;case r:a=(i-t)/p+2;break;case i:a=(t-r)/p+4}a/=6}return{h:a,s,l:h}}function Vh(t,r,i){t=ze(t,255),r=ze(r,255),i=ze(i,255);var a,s,c=Math.max(t,r,i),d=Math.min(t,r,i),h=c,p=c-d;if(s=c===0?0:p/c,c==d)a=0;else{switch(c){case t:a=(r-i)/p+(r<i?6:0);break;case r:a=(i-t)/p+2;break;case i:a=(t-r)/p+4}a/=6}return{h:a,s,v:h}}function Kh(t,r,i,a){var s=[zn(Math.round(t).toString(16)),zn(Math.round(r).toString(16)),zn(Math.round(i).toString(16))];return a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Xh(t,r,i,a){return[zn(Ng(a)),zn(Math.round(t).toString(16)),zn(Math.round(r).toString(16)),zn(Math.round(i).toString(16))].join("")}function gS(t,r){r=r===0?0:r||10;var i=ue(t).toHsl();return i.s-=r/100,i.s=ul(i.s),ue(i)}function yS(t,r){r=r===0?0:r||10;var i=ue(t).toHsl();return i.s+=r/100,i.s=ul(i.s),ue(i)}function vS(t){return ue(t).desaturate(100)}function bS(t,r){r=r===0?0:r||10;var i=ue(t).toHsl();return i.l+=r/100,i.l=ul(i.l),ue(i)}function xS(t,r){r=r===0?0:r||10;var i=ue(t).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-r/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-r/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-r/100*255))),ue(i)}function wS(t,r){r=r===0?0:r||10;var i=ue(t).toHsl();return i.l-=r/100,i.l=ul(i.l),ue(i)}function kS(t,r){var i=ue(t).toHsl(),a=(i.h+r)%360;return i.h=a<0?360+a:a,ue(i)}function SS(t){var r=ue(t).toHsl();return r.h=(r.h+180)%360,ue(r)}function Yh(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ue(t).toHsl(),a=[ue(t)],s=360/r,c=1;c<r;c++)a.push(ue({h:(i.h+c*s)%360,s:i.s,l:i.l}));return a}function ES(t){var r=ue(t).toHsl(),i=r.h;return[ue(t),ue({h:(i+72)%360,s:r.s,l:r.l}),ue({h:(i+216)%360,s:r.s,l:r.l})]}function OS(t,r,i){r=r||6,i=i||30;var a=ue(t).toHsl(),s=360/i,c=[ue(t)];for(a.h=(a.h-(s*r>>1)+720)%360;--r;)a.h=(a.h+s)%360,c.push(ue(a));return c}function CS(t,r){r=r||6;for(var i=ue(t).toHsv(),a=i.h,s=i.s,c=i.v,d=[],h=1/r;r--;)d.push(ue({h:a,s,v:c})),c=(c+h)%1;return d}ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,i,a=this.toRgb();return t=a.r/255,r=a.g/255,i=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(t){return this._a=Tg(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Vh(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Vh(this._r,this._g,this._b),r=Math.round(360*t.h),i=Math.round(100*t.s),a=Math.round(100*t.v);return this._a==1?"hsv("+r+", "+i+"%, "+a+"%)":"hsva("+r+", "+i+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=Qh(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Qh(this._r,this._g,this._b),r=Math.round(360*t.h),i=Math.round(100*t.s),a=Math.round(100*t.l);return this._a==1?"hsl("+r+", "+i+"%, "+a+"%)":"hsla("+r+", "+i+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return Kh(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(r,i,a,s,c){var d=[zn(Math.round(r).toString(16)),zn(Math.round(i).toString(16)),zn(Math.round(a).toString(16)),zn(Ng(s))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ze(this._r,255))+"%",g:Math.round(100*ze(this._g,255))+"%",b:Math.round(100*ze(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ze(this._r,255))+"%, "+Math.round(100*ze(this._g,255))+"%, "+Math.round(100*ze(this._b,255))+"%)":"rgba("+Math.round(100*ze(this._r,255))+"%, "+Math.round(100*ze(this._g,255))+"%, "+Math.round(100*ze(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(PS[Kh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+Xh(this._r,this._g,this._b,this._a),i=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var s=ue(t);i="#"+Xh(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+i+")"},toString:function(t){var r=!!t;t=t||this._format;var i=!1,a=this._a<1&&this._a>=0;return r||!a||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ue(this.toString())},_applyModification:function(t,r){var i=t.apply(null,[this].concat([].slice.call(r)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(bS,arguments)},brighten:function(){return this._applyModification(xS,arguments)},darken:function(){return this._applyModification(wS,arguments)},desaturate:function(){return this._applyModification(gS,arguments)},saturate:function(){return this._applyModification(yS,arguments)},greyscale:function(){return this._applyModification(vS,arguments)},spin:function(){return this._applyModification(kS,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(OS,arguments)},complement:function(){return this._applyCombination(SS,arguments)},monochromatic:function(){return this._applyCombination(CS,arguments)},splitcomplement:function(){return this._applyCombination(ES,arguments)},triad:function(){return this._applyCombination(Yh,[3])},tetrad:function(){return this._applyCombination(Yh,[4])}},ue.fromRatio=function(t,r){if(Ka(t)=="object"){var i={};for(var a in t)t.hasOwnProperty(a)&&(i[a]=a==="a"?t[a]:Uo(t[a]));t=i}return ue(t,r)},ue.equals=function(t,r){return!(!t||!r)&&ue(t).toRgbString()==ue(r).toRgbString()},ue.random=function(){return ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ue.mix=function(t,r,i){i=i===0?0:i||50;var a=ue(t).toRgb(),s=ue(r).toRgb(),c=i/100;return ue({r:(s.r-a.r)*c+a.r,g:(s.g-a.g)*c+a.g,b:(s.b-a.b)*c+a.b,a:(s.a-a.a)*c+a.a})},ue.readability=function(t,r){var i=ue(t),a=ue(r);return(Math.max(i.getLuminance(),a.getLuminance())+.05)/(Math.min(i.getLuminance(),a.getLuminance())+.05)},ue.isReadable=function(t,r,i){var a,s,c=ue.readability(t,r);switch(s=!1,(a=function(d){var h,p;return h=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(d.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:h,size:p}}(i)).level+a.size){case"AAsmall":case"AAAlarge":s=c>=4.5;break;case"AAlarge":s=c>=3;break;case"AAAsmall":s=c>=7}return s},ue.mostReadable=function(t,r,i){var a,s,c,d,h=null,p=0;s=(i=i||{}).includeFallbackColors,c=i.level,d=i.size;for(var m=0;m<r.length;m++)(a=ue.readability(t,r[m]))>p&&(p=a,h=ue(r[m]));return ue.isReadable(t,h,{level:c,size:d})||!s?h:(i.includeFallbackColors=!1,ue.mostReadable(t,["#fff","#000"],i))};var Zu=ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},PS=ue.hexNames=function(t){var r={};for(var i in t)t.hasOwnProperty(i)&&(r[t[i]]=i);return r}(Zu);function Tg(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ze(t,r){(function(a){return typeof a=="string"&&a.indexOf(".")!=-1&&parseFloat(a)===1})(t)&&(t="100%");var i=function(a){return typeof a=="string"&&a.indexOf("%")!=-1}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),i&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function ul(t){return Math.min(1,Math.max(0,t))}function mn(t){return parseInt(t,16)}function zn(t){return t.length==1?"0"+t:""+t}function Uo(t){return t<=1&&(t=100*t+"%"),t}function Ng(t){return Math.round(255*parseFloat(t)).toString(16)}function Gh(t){return mn(t)/255}var Nt,Ca,Pa,Tn=(Ca="[\\s|\\(]+("+(Nt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Nt+")[,|\\s]+("+Nt+")\\s*\\)?",Pa="[\\s|\\(]+("+Nt+")[,|\\s]+("+Nt+")[,|\\s]+("+Nt+")[,|\\s]+("+Nt+")\\s*\\)?",{CSS_UNIT:new RegExp(Nt),rgb:new RegExp("rgb"+Ca),rgba:new RegExp("rgba"+Pa),hsl:new RegExp("hsl"+Ca),hsla:new RegExp("hsla"+Pa),hsv:new RegExp("hsv"+Ca),hsva:new RegExp("hsva"+Pa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function tt(t){return!!Tn.CSS_UNIT.exec(t)}var _S=function(t,r){var i=(typeof t=="string"?parseInt(t):t)||0;if(i>=-5&&i<=5){var a=i,s=parseFloat(r),c=s+a*(s/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:r}},RS=function(t,r){var i=t||{},a="";switch(r){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="20px";break;default:a=void 0}var s={};if(i.fontSize){var c=i.fontSize;s=function(d,h){var p={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&h.indexOf(m)<0&&(p[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(m=Object.getOwnPropertySymbols(d);b<m.length;b++)h.indexOf(m[b])<0&&Object.prototype.propertyIsEnumerable.call(d,m[b])&&(p[m[b]]=d[m[b]])}return p}(i,["fontSize"]),a=c}return{fontSize:a,styles:s}},TS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},NS=function(t){var r=t.className,i=t.text,a=t.textColor,s=t.staticText,c=t.style;return i?Ce.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:Bn(Bn(Bn({},s&&TS),a&&{color:a,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},zg="rgb(50, 205, 50)";function zS(t,r){r===void 0&&(r=0);var i=[];return function a(s,c){return c===void 0&&(c=0),i.push.apply(i,s),i.length<c&&a(i,c),i.slice(0,c)}(t,r)}Ue(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ue(zg).toRgb();Array.from({length:4},function(t,r){return"--atom-phase".concat(r+1,"-rgb")});Ue(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var Ir=Array.from({length:4},function(t,r){return"--commet-phase".concat(r+1,"-color")}),DS=function(t){var r,i=RS(t==null?void 0:t.style,t==null?void 0:t.size),a=i.styles,s=i.fontSize,c=t==null?void 0:t.easing,d=_S(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,h=function(p){var m={};if(p instanceof Array){for(var b=zS(p,Ir.length),w=0;w<b.length&&!(w>=4);w++)m[Ir[w]]=b[w];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var y=0;y<Ir.length;y++)m[Ir[y]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <Commet /> indicator cannot be processed. Using default instead!")),y=0;y<Ir.length;y++)m[Ir[y]]=zg}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:"");return Ce.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:Bn(Bn(Bn(Bn(Bn({},s&&{fontSize:s}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),h),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b commet-indicator"},Ce.createElement("span",{className:"rli-d-i-b commet-box"},Ce.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Ce.createElement("span",{className:"rli-d-i-b  commetball-box"})),Ce.createElement("span",{className:"rli-d-i-b commet-box"},Ce.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Ce.createElement("span",{className:"rli-d-i-b commetball-box"})),Ce.createElement(NS,{className:"commet-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};Ue(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-phase".concat(r+1,"-color")});function zu(t){return t&&t.Math===Math&&t}Ue(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);zu(typeof window=="object"&&window)||zu(typeof self=="object"&&self)||zu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,r){return"--OP-dotted-phase".concat(r+1,"-color")});Ue(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-spokes-phase".concat(r+1,"-color")});Ue(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});Ue(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});Ue(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--four-square-phase".concat(r+1,"-color")});Ue(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--mosaic-phase".concat(r+1,"-color")});Ue(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--riple-phase".concat(r+1,"-color")});Ue(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-pulsate-phase".concat(r+1,"-color")});Ue(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});Ue(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bob-phase".concat(r+1,"-color")});Ue(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bounce-phase".concat(r+1,"-color")});Ue(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--shape-phase".concat(r+1,"-color")});Ue(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--trophySpin-phase".concat(r+1,"-color")});Ue(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--slab-phase".concat(r+1,"-color")});Ue(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--life-line-phase".concat(r+1,"-color")});const MS=()=>U.jsx("center",{style:{paddingTop:"30vh"},children:U.jsx(DS,{color:"#491d90",size:"large"})}),jS=iS(jc);Lv.createRoot(document.getElementById("root")).render(U.jsx(k.StrictMode,{children:U.jsx(w1,{store:jc,children:U.jsx(Rg,{loading:U.jsx(MS,{}),persistor:jS,children:U.jsx(Dk,{})})})}));
