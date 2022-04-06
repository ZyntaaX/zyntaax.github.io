"use strict";(self["webpackChunkportfolio_vuejs"]=self["webpackChunkportfolio_vuejs"]||[]).push([[998],{444:function(e,t,n){n.d(t,{BH:function(){return l},L:function(){return a},LL:function(){return b},X3:function(){return V},ZR:function(){return y},b$:function(){return h},eu:function(){return g},hl:function(){return m},m9:function(){return P},ne:function(){return A},pd:function(){return C},ru:function(){return d},tV:function(){return c},uI:function(){return f},vZ:function(){return I},w1:function(){return p},xO:function(){return E},xb:function(){return k},z$:function(){return u},zd:function(){return T}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(f=64)),r.push(n[l],n[u],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==u)throw Error();const f=t<<2|s>>4;if(r.push(f),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function g(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=v,Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?w(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new y(r,s,n);return a}}function w(e,t){return e.replace(_,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(S(n)&&S(o)){if(!I(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function T(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new O(e,t);return n.subscribe.bind(n)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=x(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class L{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new D(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new M(this._db.createObjectStore(e,t))}close(){this._db.close()}}class D{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new M(this._transaction.objectStore(e))}}class M{constructor(e){this._store=e}index(e){return new F(this._store.index(e))}createIndex(e,t,n){return new F(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return N(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return N(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return N(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return N(e,"Error clearing IndexedDB object store")}}class F{constructor(e){this._index=e}get(e){const t=this._index.get(e);return N(t,"Error reading from IndexedDB")}}function V(e,t,n){return new Promise(((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=e=>{r(new L(e.target.result))},o.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},o.onupgradeneeded=e=>{n(new L(o.result),e.oldVersion,e.newVersion,new D(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}}))}},947:function(e,t,n){
/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return h(e)||m(e,t)||g(e,t)||b()}function f(e){return d(e)||p(e)||g(e)||y()}function d(e){if(Array.isArray(e))return v(e)}function h(e){if(Array.isArray(e))return e}function p(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}function g(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Qc:function(){return Yn},fL:function(){return Zn},qv:function(){return Xn},vI:function(){return Kn},vc:function(){return Gn}});var w=function(){},_={},k={},I=null,S={mark:w,measure:w};try{"undefined"!==typeof window&&(_=window),"undefined"!==typeof document&&(k=document),"undefined"!==typeof MutationObserver&&(I=MutationObserver),"undefined"!==typeof performance&&(S=performance)}catch(Qn){}var E=_.navigator||{},T=E.userAgent,C=void 0===T?"":T,A=_,O=k,x=I,R=S,P=(A.document,!!O.documentElement&&!!O.head&&"function"===typeof O.addEventListener&&"function"===typeof O.createElement),N=~C.indexOf("MSIE")||~C.indexOf("Trident/"),L="___FONT_AWESOME___",D=16,M="fa",F="svg-inline--fa",V="data-fa-i2svg",U="data-fa-pseudo-element",j="data-fa-pseudo-element-pending",z="data-prefix",$="data-icon",B="fontawesome-i2svg",H="async",q=["HTML","HEAD","STYLE","SCRIPT"],W=function(){try{return!0}catch(Qn){return!1}}(),J={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},G={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},K={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Y={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},X=/fa[srltdbk\-\ ]/,Z="fa-layers-text",Q=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ee={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},te=[1,2,3,4,5,6,7,8,9,10],ne=te.concat([11,12,13,14,15,16,17,18,19,20]),re=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oe=[].concat(f(Object.keys(G)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(te.map((function(e){return"".concat(e,"x")}))).concat(ne.map((function(e){return"w-".concat(e)}))),se=A.FontAwesomeConfig||{};function ae(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ce(e){return""===e||"false"!==e&&("true"===e||e)}if(O&&"function"===typeof O.querySelector){var le=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];le.forEach((function(e){var t=u(e,2),n=t[0],r=t[1],i=ce(ae(n));void 0!==i&&null!==i&&(se[r]=i)}))}var ue={familyPrefix:M,styleDefault:"solid",replacementClass:F,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},fe=i(i({},ue),se);fe.autoReplaceSvg||(fe.observeMutations=!1);var de={};Object.keys(fe).forEach((function(e){Object.defineProperty(de,e,{enumerable:!0,set:function(t){fe[e]=t,he.forEach((function(e){return e(de)}))},get:function(){return fe[e]}})})),A.FontAwesomeConfig=de;var he=[];function pe(e){return he.push(e),function(){he.splice(he.indexOf(e),1)}}var me=D,ge={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ve(e){if(e&&P){var t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=O.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return O.head.insertBefore(t,r),e}}var ye="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function be(){var e=12,t="";while(e-- >0)t+=ye[62*Math.random()|0];return t}function we(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _e(e){return e.classList?we(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function ke(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ie(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(ke(e[n]),'" ')}),"").trim()}function Se(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function Ee(e){return e.size!==ge.size||e.x!==ge.x||e.y!==ge.y||e.rotate!==ge.rotate||e.flipX||e.flipY}function Te(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Ce(e){var t=e.transform,n=e.width,r=void 0===n?D:n,i=e.height,o=void 0===i?D:i,s=e.startCentered,a=void 0!==s&&s,c="";return c+=a&&N?"translate(".concat(t.x/me-r/2,"em, ").concat(t.y/me-o/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/me,"em), calc(-50% + ").concat(t.y/me,"em)) "):"translate(".concat(t.x/me,"em, ").concat(t.y/me,"em) "),c+="scale(".concat(t.size/me*(t.flipX?-1:1),", ").concat(t.size/me*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Ae=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function Oe(){var e=M,t=F,n=de.familyPrefix,r=de.replacementClass,i=Ae;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var xe=!1;function Re(){de.autoAddCss&&!xe&&(ve(Oe()),xe=!0)}var Pe={mixout:function(){return{dom:{css:Oe,insertCss:Re}}},hooks:function(){return{beforeDOMElementCreation:function(){Re()},beforeI2svg:function(){Re()}}}},Ne=A||{};Ne[L]||(Ne[L]={}),Ne[L].styles||(Ne[L].styles={}),Ne[L].hooks||(Ne[L].hooks={}),Ne[L].shims||(Ne[L].shims=[]);var Le=Ne[L],De=[],Me=function e(){O.removeEventListener("DOMContentLoaded",e),Fe=1,De.map((function(e){return e()}))},Fe=!1;function Ve(e){P&&(Fe?setTimeout(e,0):De.push(e))}function Ue(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,o=void 0===i?[]:i;return"string"===typeof e?ke(e):"<".concat(t," ").concat(Ie(r),">").concat(o.map(Ue).join(""),"</").concat(t,">")}function je(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}P&&(Fe=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Fe||O.addEventListener("DOMContentLoaded",Me));var ze=function(e,t){return function(n,r,i,o){return e.call(t,n,r,i,o)}},$e=function(e,t,n,r){var i,o,s,a=Object.keys(e),c=a.length,l=void 0!==r?ze(t,r):t;for(void 0===n?(i=1,s=e[a[0]]):(i=0,s=n);i<c;i++)o=a[i],s=l(s,e[o],o,e);return s};function Be(e){var t=[],n=0,r=e.length;while(n<r){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&i)<<10)+(1023&o)+65536):(t.push(i),n--)}else t.push(i)}return t}function He(e){var t=Be(e);return 1===t.length?t[0].toString(16):null}function qe(e,t){var n,r=e.length,i=e.charCodeAt(t);return i>=55296&&i<=56319&&r>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}function We(e){return Object.keys(e).reduce((function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Je(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,s=We(t);"function"!==typeof Le.hooks.addPack||o?Le.styles[e]=i(i({},Le.styles[e]||{}),s):Le.hooks.addPack(e,We(t)),"fas"===e&&Je("fa",t)}var Ge=Le.styles,Ke=Le.shims,Ye=Object.values(K),Xe=null,Ze={},Qe={},et={},tt={},nt={},rt=Object.keys(J);function it(e){return~oe.indexOf(e)}function ot(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r!==e||""===i||it(i)?null:i}var st=function(){var e=function(e){return $e(Ge,(function(t,n,r){return t[r]=$e(n,e,{}),t}),{})};Ze=e((function(e,t,n){if(t[3]&&(e[t[3]]=n),t[2]){var r=t[2].filter((function(e){return"number"===typeof e}));r.forEach((function(t){e[t.toString(16)]=n}))}return e})),Qe=e((function(e,t,n){if(e[n]=n,t[2]){var r=t[2].filter((function(e){return"string"===typeof e}));r.forEach((function(t){e[t]=n}))}return e})),nt=e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in Ge||de.autoFetchSvg,n=$e(Ke,(function(e,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||t||(i="fas"),"string"===typeof r&&(e.names[r]={prefix:i,iconName:o}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:o}),e}),{names:{},unicodes:{}});et=n.names,tt=n.unicodes,Xe=pt(de.styleDefault)};function at(e,t){return(Ze[e]||{})[t]}function ct(e,t){return(Qe[e]||{})[t]}function lt(e,t){return(nt[e]||{})[t]}function ut(e){return et[e]||{prefix:null,iconName:null}}function ft(e){var t=tt[e],n=at("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return Xe}pe((function(e){Xe=pt(e.styleDefault)})),st();var ht=function(){return{prefix:null,iconName:null,rest:[]}};function pt(e){var t=J[e],n=G[e]||G[t],r=e in Le.styles?e:null;return n||r||null}function mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipLookups,r=void 0!==n&&n,i=null,o=e.reduce((function(e,t){var n=ot(de.familyPrefix,t);if(Ge[t]?(t=Ye.includes(t)?Y[t]:t,i=t,e.prefix=t):rt.indexOf(t)>-1?(i=t,e.prefix=pt(t)):n?e.iconName=n:t!==de.replacementClass&&e.rest.push(t),!r&&e.prefix&&e.iconName){var o="fa"===i?ut(e.iconName):{},s=lt(e.prefix,e.iconName);o.prefix&&(i=null),e.iconName=o.iconName||s||e.iconName,e.prefix=o.prefix||e.prefix,"far"!==e.prefix||Ge["far"]||!Ge["fas"]||de.autoFetchSvg||(e.prefix="fas")}return e}),ht());return"fa"!==o.prefix&&"fa"!==i||(o.prefix=dt()||"fas"),o}var gt=function(){function e(){s(this,e),this.definitions={}}return c(e,[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=i(i({},e.definitions[t]||{}),o[t]),Je(t,o[t]);var n=K[t];n&&Je(n,o[t]),st()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,o=r.iconName,s=r.icon,a=s[2];e[i]||(e[i]={}),a.length>0&&a.forEach((function(t){"string"===typeof t&&(e[i][t]=s)})),e[i][o]=s})),e}}]),e}(),vt=[],yt={},bt={},wt=Object.keys(bt);function _t(e,t){var n=t.mixoutsTo;return vt=e,yt={},Object.keys(bt).forEach((function(e){-1===wt.indexOf(e)&&delete bt[e]})),vt.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"===typeof t[e]&&(n[e]=t[e]),"object"===o(t[e])&&Object.keys(t[e]).forEach((function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){var r=e.hooks();Object.keys(r).forEach((function(e){yt[e]||(yt[e]=[]),yt[e].push(r[e])}))}e.provides&&e.provides(bt)})),n}function kt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=yt[e]||[];return o.forEach((function(e){t=e.apply(null,[t].concat(r))})),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yt[e]||[];i.forEach((function(e){e.apply(null,n)}))}function St(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return bt[e]?bt[e].apply(null,t):void 0}function Et(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||dt();if(t)return t=lt(n,t)||t,je(Tt.definitions,n,t)||je(Le.styles,n,t)}var Tt=new gt,Ct=function(){de.autoReplaceSvg=!1,de.observeMutations=!1,It("noAuto")},At={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return P?(It("beforeI2svg",e),St("pseudoElements2svg",e),St("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot;!1===de.autoReplaceSvg&&(de.autoReplaceSvg=!0),de.observeMutations=!0,Ve((function(){Rt({autoReplaceSvgRoot:t}),It("watch",e)}))}},Ot={icon:function(e){if(null===e)return null;if("object"===o(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=pt(e[0]);return{prefix:n,iconName:lt(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(de.familyPrefix,"-"))>-1||e.match(X))){var r=mt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||dt(),iconName:lt(r.prefix,r.iconName)||r.iconName}}if("string"===typeof e){var i=dt();return{prefix:i,iconName:lt(i,e)||e}}}},xt={noAuto:Ct,config:de,dom:At,parse:Ot,library:Tt,findIconDefinition:Et,toHtml:Ue},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,n=void 0===t?O:t;(Object.keys(Le.styles).length>0||de.autoFetchSvg)&&P&&de.autoReplaceSvg&&xt.dom.i2svg({node:n})};function Pt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Ue(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(P){var t=O.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Nt(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,s=e.styles,a=e.transform;if(Ee(a)&&n.found&&!r.found){var c=n.width,l=n.height,u={x:c/l/2,y:.5};o["style"]=Se(i(i({},s),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Lt(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,s=e.symbol,a=!0===s?"".concat(t,"-").concat(de.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},o),{},{id:a}),children:r}]}]}function Dt(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,s=e.iconName,a=e.transform,c=e.symbol,l=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,p=void 0!==h&&h,m=r.found?r:n,g=m.width,v=m.height,y="fak"===o,b=[de.replacementClass,s?"".concat(de.familyPrefix,"-").concat(s):""].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),w={children:[],attributes:i(i({},d.attributes),{},{"data-prefix":o,"data-icon":s,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},_=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(w.attributes[V]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||be())},children:[l]}),delete w.attributes.title);var k=i(i({},w),{},{prefix:o,iconName:s,main:n,mask:r,maskId:u,transform:a,symbol:c,styles:i(i({},_),d.styles)}),I=r.found&&n.found?St("generateAbstractMask",k)||{children:[],attributes:{}}:St("generateAbstractIcon",k)||{children:[],attributes:{}},S=I.children,E=I.attributes;return k.children=S,k.attributes=E,c?Lt(k):Nt(k)}function Mt(e){var t=e.content,n=e.width,r=e.height,o=e.transform,s=e.title,a=e.extra,c=e.watchable,l=void 0!==c&&c,u=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(u[V]="");var f=i({},a.styles);Ee(o)&&(f["transform"]=Ce({transform:o,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f["transform"]);var d=Se(f);d.length>0&&(u["style"]=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Ft(e){var t=e.content,n=e.title,r=e.extra,o=i(i(i({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Se(r.styles);s.length>0&&(o["style"]=s);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Vt=Le.styles;function Ut(e){var t=e[0],n=e[1],r=e.slice(4),i=u(r,1),o=i[0],s=null;return s=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var jt={found:!1,width:512,height:512};function zt(e,t){W||de.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $t(e,t){var n=t;return"fa"===t&&null!==de.styleDefault&&(t=dt()),new Promise((function(r,o){St("missingIconAbstract");if("fa"===n){var s=ut(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Vt[t]&&Vt[t][e]){var a=Vt[t][e];return r(Ut(a))}zt(e,t),r(i(i({},jt),{},{icon:de.showMissingIcons&&e&&St("missingIconAbstract")||{}}))}))}var Bt=function(){},Ht=de.measurePerformance&&R&&R.mark&&R.measure?R:{mark:Bt,measure:Bt},qt='FA "6.1.0"',Wt=function(e){return Ht.mark("".concat(qt," ").concat(e," begins")),function(){return Jt(e)}},Jt=function(e){Ht.mark("".concat(qt," ").concat(e," ends")),Ht.measure("".concat(qt," ").concat(e),"".concat(qt," ").concat(e," begins"),"".concat(qt," ").concat(e," ends"))},Gt={begin:Wt,end:Jt},Kt=function(){};function Yt(e){var t=e.getAttribute?e.getAttribute(V):null;return"string"===typeof t}function Xt(e){var t=e.getAttribute?e.getAttribute(z):null,n=e.getAttribute?e.getAttribute($):null;return t&&n}function Zt(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(de.replacementClass)}function Qt(){if(!0===de.autoReplaceSvg)return on.replace;var e=on[de.autoReplaceSvg];return e||on.replace}function en(e){return O.createElementNS("http://www.w3.org/2000/svg",e)}function tn(e){return O.createElement(e)}function nn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ceFn,r=void 0===n?"svg"===e.tag?en:tn:n;if("string"===typeof e)return O.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach((function(t){i.setAttribute(t,e.attributes[t])}));var o=e.children||[];return o.forEach((function(e){i.appendChild(nn(e,{ceFn:r}))})),i}function rn(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var on={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(nn(e),t)})),null===t.getAttribute(V)&&de.keepOriginalSource){var n=O.createComment(rn(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~_e(t).indexOf(de.replacementClass))return on.replace(e);var r=new RegExp("".concat(de.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(e,t){return t===de.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(e){return Ue(e)})).join("\n");t.setAttribute(V,""),t.innerHTML=o}};function sn(e){e()}function an(e,t){var n="function"===typeof t?t:Kt;if(0===e.length)n();else{var r=sn;de.mutateApproach===H&&(r=A.requestAnimationFrame||sn),r((function(){var t=Qt(),r=Gt.begin("mutate");e.map(t),r(),n()}))}}var cn=!1;function ln(){cn=!0}function un(){cn=!1}var fn=null;function dn(e){if(x&&de.observeMutations){var t=e.treeCallback,n=void 0===t?Kt:t,r=e.nodeCallback,i=void 0===r?Kt:r,o=e.pseudoElementsCallback,s=void 0===o?Kt:o,a=e.observeMutationsRoot,c=void 0===a?O:a;fn=new x((function(e){if(!cn){var t=dt();we(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Yt(e.addedNodes[0])&&(de.searchPseudoElements&&s(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&de.searchPseudoElements&&s(e.target.parentNode),"attributes"===e.type&&Yt(e.target)&&~re.indexOf(e.attributeName))if("class"===e.attributeName&&Xt(e.target)){var r=mt(_e(e.target)),o=r.prefix,a=r.iconName;e.target.setAttribute(z,o||t),a&&e.target.setAttribute($,a)}else Zt(e.target)&&i(e.target)}))}})),P&&fn.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hn(){fn&&fn.disconnect()}function pn(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}function mn(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"",i=mt(_e(e));return i.prefix||(i.prefix=dt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=ct(i.prefix,e.innerText)||at(i.prefix,He(e.innerText))),i}function gn(e){var t=we(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return de.autoA11y&&(n?t["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||be()):(t["aria-hidden"]="true",t["focusable"]="false")),t}function vn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ge,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=mn(e),r=n.iconName,o=n.prefix,s=n.rest,a=gn(e),c=kt("parseNodeAttributes",{},e),l=t.styleParser?pn(e):[];return i({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:ge,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},c)}var bn=Le.styles;function wn(e){var t="nest"===de.autoReplaceSvg?yn(e,{styleParser:!1}):yn(e);return~t.extra.classes.indexOf(Z)?St("generateLayersText",e,t):St("generateSvgReplacementMutation",e,t)}function _n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!P)return Promise.resolve();var n=O.documentElement.classList,r=function(e){return n.add("".concat(B,"-").concat(e))},i=function(e){return n.remove("".concat(B,"-").concat(e))},o=de.autoFetchSvg?Object.keys(J):Object.keys(bn),s=[".".concat(Z,":not([").concat(V,"])")].concat(o.map((function(e){return".".concat(e,":not([").concat(V,"])")}))).join(", ");if(0===s.length)return Promise.resolve();var a=[];try{a=we(e.querySelectorAll(s))}catch(Qn){}if(!(a.length>0))return Promise.resolve();r("pending"),i("complete");var c=Gt.begin("onTree"),l=a.reduce((function(e,t){try{var n=wn(t);n&&e.push(n)}catch(Qn){W||"MissingIcon"===Qn.name&&console.error(Qn)}return e}),[]);return new Promise((function(e,n){Promise.all(l).then((function(n){an(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof t&&t(),c(),e()}))})).catch((function(e){c(),n(e)}))}))}function kn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;wn(e).then((function(e){e&&an([e],t)}))}function In(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:Et(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Et(o||{})),e(r,i(i({},n),{},{mask:o}))}}var Sn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?ge:n,o=t.symbol,s=void 0!==o&&o,a=t.mask,c=void 0===a?null:a,l=t.maskId,u=void 0===l?null:l,f=t.title,d=void 0===f?null:f,h=t.titleId,p=void 0===h?null:h,m=t.classes,g=void 0===m?[]:m,v=t.attributes,y=void 0===v?{}:v,b=t.styles,w=void 0===b?{}:b;if(e){var _=e.prefix,k=e.iconName,I=e.icon;return Pt(i({type:"icon"},e),(function(){return It("beforeDOMElementCreation",{iconDefinition:e,params:t}),de.autoA11y&&(d?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(p||be()):(y["aria-hidden"]="true",y["focusable"]="false")),Dt({icons:{main:Ut(I),mask:c?Ut(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:k,transform:i(i({},ge),r),symbol:s,title:d,maskId:u,titleId:p,extra:{attributes:y,styles:w,classes:g}})}))}},En={mixout:function(){return{icon:In(Sn)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_n,e.nodeCallback=kn,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?O:t,r=e.callback,i=void 0===r?function(){}:r;return _n(n,i)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.title,i=t.titleId,o=t.prefix,s=t.transform,a=t.symbol,c=t.mask,l=t.maskId,f=t.extra;return new Promise((function(t,d){Promise.all([$t(n,o),c.iconName?$t(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(c){var d=u(c,2),h=d[0],p=d[1];t([e,Dt({icons:{main:h,mask:p},prefix:o,iconName:n,transform:s,symbol:a,maskId:l,title:r,titleId:i,extra:f,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,a=Se(s);return a.length>0&&(r["style"]=a),Ee(o)&&(t=St("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(t||i.icon),{children:n,attributes:r}}}},Tn={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return Pt({type:"layer"},(function(){It("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(de.familyPrefix,"-layers")].concat(f(r)).join(" ")},children:n}]}))}}}},Cn={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,i=t.classes,o=void 0===i?[]:i,s=t.attributes,a=void 0===s?{}:s,c=t.styles,l=void 0===c?{}:c;return Pt({type:"counter",content:e},(function(){return It("beforeDOMElementCreation",{content:e,params:t}),Ft({content:e.toString(),title:r,extra:{attributes:a,styles:l,classes:["".concat(de.familyPrefix,"-layers-counter")].concat(f(o))}})}))}}}},An={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?ge:n,o=t.title,s=void 0===o?null:o,a=t.classes,c=void 0===a?[]:a,l=t.attributes,u=void 0===l?{}:l,d=t.styles,h=void 0===d?{}:d;return Pt({type:"text",content:e},(function(){return It("beforeDOMElementCreation",{content:e,params:t}),Mt({content:e,transform:i(i({},ge),r),title:s,extra:{attributes:u,styles:h,classes:["".concat(de.familyPrefix,"-layers-text")].concat(f(c))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,r=t.transform,i=t.extra,o=null,s=null;if(N){var a=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/a,s=c.height/a}return de.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Mt({content:e.innerHTML,width:o,height:s,transform:r,title:n,extra:i,watchable:!0})])}}},On=new RegExp('"',"ug"),xn=[1105920,1112319];function Rn(e){var t=e.replace(On,""),n=qe(t,0),r=n>=xn[0]&&n<=xn[1],i=2===t.length&&t[0]===t[1];return{value:He(i?t[0]:t),isSecondary:r||i}}function Pn(e,t){var n="".concat(j).concat(t.replace(":","-"));return new Promise((function(r,o){if(null!==e.getAttribute(n))return r();var s=we(e.children),a=s.filter((function(e){return e.getAttribute(U)===t}))[0],c=A.getComputedStyle(e,t),l=c.getPropertyValue("font-family").match(Q),u=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&"none"!==f&&""!==f){var d=c.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?G[l[2].toLowerCase()]:ee[u],p=Rn(d),m=p.value,g=p.isSecondary,v=l[0].startsWith("FontAwesome"),y=at(h,m),b=y;if(v){var w=ft(m);w.iconName&&w.prefix&&(y=w.iconName,h=w.prefix)}if(!y||g||a&&a.getAttribute(z)===h&&a.getAttribute($)===b)r();else{e.setAttribute(n,b),a&&e.removeChild(a);var _=vn(),k=_.extra;k.attributes[U]=t,$t(y,h).then((function(o){var s=Dt(i(i({},_),{},{icons:{main:o,mask:ht()},prefix:h,iconName:b,extra:k,watchable:!0})),a=O.createElement("svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=s.map((function(e){return Ue(e)})).join("\n"),e.removeAttribute(n),r()})).catch(o)}}else r()}))}function Nn(e){return Promise.all([Pn(e,"::before"),Pn(e,"::after")])}function Ln(e){return e.parentNode!==document.head&&!~q.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(U)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Dn(e){if(P)return new Promise((function(t,n){var r=we(e.querySelectorAll("*")).filter(Ln).map(Nn),i=Gt.begin("searchPseudoElements");ln(),Promise.all(r).then((function(){i(),un(),t()})).catch((function(){i(),un(),n()}))}))}var Mn={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Dn,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?O:t;de.searchPseudoElements&&Dn(n)}}},Fn=!1,Vn={mixout:function(){return{dom:{unwatch:function(){ln(),Fn=!0}}}},hooks:function(){return{bootstrap:function(){dn(kt("mutationObserverCallbacks",{}))},noAuto:function(){hn()},watch:function(e){var t=e.observeMutationsRoot;Fn?un():dn(kt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Un=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i;break}return e}),t)},jn={mixout:function(){return{parse:{transform:function(e){return Un(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Un(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(a," ").concat(c," ").concat(l)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:u,path:f};return{tag:"g",attributes:i({},d.outer),children:[{tag:"g",attributes:i({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:i(i({},t.icon.attributes),d.path)}]}]}}}},zn={x:0,y:0,width:"100%",height:"100%"};function $n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bn(e){return"g"===e.tag?e.children:[e]}var Hn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?mt(n.split(" ").map((function(e){return e.trim()}))):ht();return r.prefix||(r.prefix=dt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,s=e.maskId,a=e.transform,c=r.width,l=r.icon,u=o.width,f=o.icon,d=Te({transform:a,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:i(i({},zn),{},{fill:"white"})},p=l.children?{children:l.children.map($n)}:{},m={tag:"g",attributes:i({},d.inner),children:[$n(i({tag:l.tag,attributes:i(i({},l.attributes),d.path)},p))]},g={tag:"g",attributes:i({},d.outer),children:[m]},v="mask-".concat(s||be()),y="clip-".concat(s||be()),b={tag:"mask",attributes:i(i({},zn),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Bn(f)},b]};return t.push(w,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},zn)}),{children:t,attributes:n}}}},qn={provides:function(e){var t=!1;A.matchMedia&&(t=A.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:i(i({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=i(i({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:i(i({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:i(i({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:i(i({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:i(i({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:i(i({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Wn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e["symbol"]=r,e}}}},Jn=[Pe,En,Tn,Cn,An,Mn,Vn,jn,Hn,qn,Wn];_t(Jn,{mixoutsTo:xt});xt.noAuto;var Gn=xt.config,Kn=xt.library,Yn=(xt.dom,xt.parse),Xn=(xt.findIconDefinition,xt.toHtml,xt.icon),Zn=(xt.layer,xt.text);xt.counter},417:function(e,t,n){n.d(t,{hwn:function(){return i},zhw:function(){return r}});
/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var r={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},i={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"]}},436:function(e,t,n){n.d(t,{A35:function(){return i},IBq:function(){return r},Y$T:function(){return c},ahx:function(){return s},g82:function(){return u},ik8:function(){return l},nfZ:function(){return a},xHz:function(){return o}});
/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var r={prefix:"fas",iconName:"at",icon:[512,512,[],"40","M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"]},i={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"]},o={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"]},s={prefix:"fas",iconName:"code-commit",icon:[640,512,[],"f386","M476.8 288C461.1 361 397.4 416 320 416C242.6 416 178 361 163.2 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H163.2C178 150.1 242.6 96 320 96C397.4 96 461.1 150.1 476.8 224H608C625.7 224 640 238.3 640 256C640 273.7 625.7 288 608 288H476.8zM320 336C364.2 336 400 300.2 400 256C400 211.8 364.2 176 320 176C275.8 176 240 211.8 240 256C240 300.2 275.8 336 320 336z"]},a={prefix:"fas",iconName:"file-lines",icon:[384,512,[128462,61686,128441,"file-alt","file-text"],"f15c","M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"]},c={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},l={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},u={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]}},810:function(e,t,n){n.d(t,{GN:function(){return _}});var r=n(252),i=n(947),o="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function s(e,t){return t={exports:{}},e(t,t.exports),t.exports}var a=s((function(e){(function(t){var n=function(e,t,r){if(!l(t)||f(t)||d(t)||h(t)||c(t))return t;var i,o=0,s=0;if(u(t))for(i=[],s=t.length;o<s;o++)i.push(n(e,t[o],r));else for(var a in i={},t)Object.prototype.hasOwnProperty.call(t,a)&&(i[e(a,r)]=n(e,t[a],r));return i},r=function(e,t){t=t||{};var n=t.separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},o=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},s=function(e,t){return r(e,t).toLowerCase()},a=Object.prototype.toString,c=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},u=function(e){return"[object Array]"==a.call(e)},f=function(e){return"[object Date]"==a.call(e)},d=function(e){return"[object RegExp]"==a.call(e)},h=function(e){return"[object Boolean]"==a.call(e)},p=function(e){return e-=0,e===e},m=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!==typeof n?e:function(t,r){return n(t,e,r)}},g={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(e,t){return n(m(i,t),e)},decamelizeKeys:function(e,t){return n(m(s,t),e,t)},pascalizeKeys:function(e,t){return n(m(o,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(o)})),c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=a.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{})}function p(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var i=(e.children||[]).map((function(e){return m(e)})),o=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.class=p(r);break;case"style":t.style=h(r);break;default:t.attrs[n]=r}return t}),{attrs:{},class:{},style:{}}),s=(n.class,n.style),a=void 0===s?{}:s,c=f(n,["class","style"]);return(0,r.h)(e.tag,u({},t,{class:o.class,style:u({},o.style,a)},o.attrs,c),i)}var g=!1;try{g=!0}catch(k){}function v(){var e;!g&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function y(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function b(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},l(t,"fa-"+e.size,null!==e.size),l(t,"fa-rotate-"+e.rotation,null!==e.rotation),l(t,"fa-pull-"+e.pull,null!==e.pull),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}function w(e){return null===e?null:"object"===("undefined"===typeof e?"undefined":c(e))&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var _=(0,r.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,o=(0,r.Fl)((function(){return w(e.icon)})),s=(0,r.Fl)((function(){return y("classes",b(e))})),a=(0,r.Fl)((function(){return y("transform","string"===typeof e.transform?i.Qc.transform(e.transform):e.transform)})),c=(0,r.Fl)((function(){return y("mask",w(e.mask))})),l=(0,r.Fl)((function(){return(0,i.qv)(o.value,u({},s.value,a.value,c.value,{symbol:e.symbol,title:e.title}))}));(0,r.YP)(l,(function(e){if(!e)return v("Could not find one or more icon(s)",o.value,c.value)}),{immediate:!0});var f=(0,r.Fl)((function(){return l.value?m(l.value.abstract[0],{},n):null}));return function(){return f.value}}});(0,r.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,o=i.vc.familyPrefix,s=(0,r.Fl)((function(){return[o+"-layers"].concat(d(e.fixedWidth?[o+"-fw"]:[]))}));return function(){return(0,r.h)("div",{class:s.value},n.default?n.default():[])}}}),(0,r.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,o=i.vc.familyPrefix,s=(0,r.Fl)((function(){return y("classes",[].concat(d(e.counter?[o+"-layers-counter"]:[]),d(e.position?[o+"-layers-"+e.position]:[])))})),a=(0,r.Fl)((function(){return y("transform","string"===typeof e.transform?i.Qc.transform(e.transform):e.transform)})),c=(0,r.Fl)((function(){var t=(0,i.fL)(e.value.toString(),u({},a.value,s.value)),n=t.abstract;return e.counter&&(n[0].attributes.class=n[0].attributes.class.replace("fa-layers-text","")),n[0]})),l=(0,r.Fl)((function(){return m(c.value,{},n)}));return function(){return l.value}}})},262:function(e,t,n){n.d(t,{Bj:function(){return o},Fl:function(){return $e},IU:function(){return Ce},Jd:function(){return I},PG:function(){return Ie},SU:function(){return Ve},Um:function(){return we},WL:function(){return je},X$:function(){return C},X3:function(){return Te},XI:function(){return De},Xl:function(){return Ae},dq:function(){return Ne},iH:function(){return Le},j:function(){return E},lk:function(){return S},qj:function(){return be},qq:function(){return b},yT:function(){return Ee}});var r=n(577);let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return i=this,e()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,l=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let h=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++h,h<=m?u(this):w(this),this.fn()}finally{h<=m&&f(this),p=1<<--h,g=this.parent,_=t,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const k=[];function I(){k.push(_),_=!1}function S(){const e=k.pop();_=void 0===e||e}function E(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;T(r,i)}}function T(e,t){let n=!1;h<=m?l(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function C(e,t,n,i,o,s){const c=d.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(v)),(0,r._N)(e)&&l.push(c.get(y)));break;case"delete":(0,r.kJ)(e)||(l.push(c.get(v)),(0,r._N)(e)&&l.push(c.get(y)));break;case"set":(0,r._N)(e)&&l.push(c.get(v));break}if(1===l.length)l[0]&&A(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);A(a(e))}}function A(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),R=M(),P=M(!1,!0),N=M(!0),L=D();function D(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)E(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Ce(this)[t].apply(this,e);return S(),n}})),e}function M(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ge:me:t?pe:he).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(L,i))return Reflect.get(L,i,o);const a=Reflect.get(n,i,o);if((0,r.yk)(i)?x.has(i):O(i))return a;if(e||E(n,"get",i),t)return a;if(Ne(a)){const e=!s||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?_e(a):be(a):a}}const F=U(),V=U(!0);function U(e=!1){return function(t,n,i,o){let s=t[n];if(Se(s)&&Ne(s)&&!Ne(i))return!1;if(!e&&!Se(i)&&(Ee(i)||(i=Ce(i),s=Ce(s)),!(0,r.kJ)(t)&&Ne(s)&&!Ne(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?(0,r.aU)(i,s)&&C(t,"set",n,i,s):C(t,"add",n,i)),c}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&C(e,"delete",t,void 0,i),o}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&x.has(t)||E(e,"has",t),n}function $(e){return E(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const B={get:R,set:F,deleteProperty:j,has:z,ownKeys:$},H={get:N,set(e,t){return!0},deleteProperty(e,t){return!0}},q=(0,r.l7)({},B,{get:P,set:V}),W=e=>e,J=e=>Reflect.getPrototypeOf(e);function G(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);t!==o&&!n&&E(i,"get",t),!n&&E(i,"get",o);const{has:s}=J(i),a=r?W:n?xe:Oe;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function K(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return e!==i&&!t&&E(r,"has",e),!t&&E(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e["__v_raw"],!t&&E(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function X(e){e=Ce(e);const t=Ce(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function Z(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=J(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function Q(e){const t=Ce(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&C(t,"delete",e,void 0,o),s}function ee(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?W:e?xe:Oe;return!e&&E(s,"iterate",v),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ne(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),f=n?W:t?xe:Oe;return!t&&E(s,"iterate",l?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return G(this,e)},get size(){return Y(this)},has:K,add:X,set:Z,delete:Q,clear:ee,forEach:te(!1,!1)},t={get(e){return G(this,e,!1,!0)},get size(){return Y(this)},has:K,add:X,set:Z,delete:Q,clear:ee,forEach:te(!1,!0)},n={get(e){return G(this,e,!0)},get size(){return Y(this,!0)},has(e){return K.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return G(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return K.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)})),[e,n,t,r]}const[oe,se,ae,ce]=ie();function le(e,t){const n=t?e?ce:ae:e?se:oe;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const ue={get:le(!1,!1)},fe={get:le(!1,!0)},de={get:le(!0,!1)};const he=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return Se(e)?e:ke(e,!1,B,ue,he)}function we(e){return ke(e,!1,q,fe,pe)}function _e(e){return ke(e,!0,H,de,me)}function ke(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Ie(e){return Se(e)?Ie(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Te(e){return Ie(e)||Se(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Kn)(e)?be(e):e,xe=e=>(0,r.Kn)(e)?_e(e):e;function Re(e){_&&g&&(e=Ce(e),T(e.dep||(e.dep=a())))}function Pe(e,t){e=Ce(e),e.dep&&A(e.dep)}function Ne(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return Me(e,!1)}function De(e){return Me(e,!0)}function Me(e,t){return Ne(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Oe(e)}get value(){return Re(this),this._value}set value(e){e=this.__v_isShallow?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Oe(e),Pe(this,e))}}function Ve(e){return Ne(e)?e.value:e}const Ue={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Ie(e)?e:new Proxy(e,Ue)}class ze{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Pe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Re(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new ze(i,o,s||!o,n);return a}Promise.resolve()},252:function(e,t,n){n.d(t,{$d:function(){return s},Cn:function(){return z},FN:function(){return bn},Fl:function(){return Dn},HY:function(){return Pt},JJ:function(){return X},Ko:function(){return ln},P$:function(){return ce},Q6:function(){return pe},U2:function(){return ue},Uk:function(){return tn},Us:function(){return _t},WI:function(){return un},Wm:function(){return Xt},Y3:function(){return k},Y8:function(){return oe},YP:function(){return ee},_:function(){return Yt},aZ:function(){return me},dD:function(){return j},dG:function(){return an},f3:function(){return Z},h:function(){return Mn},iD:function(){return Bt},ic:function(){return xe},j4:function(){return Ht},kq:function(){return nn},nK:function(){return he},up:function(){return At},w5:function(){return $},wg:function(){return Vt},wy:function(){return ht}});var r=n(262),i=n(577);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const f=[];let d=0;const h=[];let p=null,m=0;const g=[];let v=null,y=0;const b=Promise.resolve();let w=null,_=null;function k(e){const t=w||b;return e?t.then(this?e.bind(this):e):t}function I(e){let t=d+1,n=f.length;while(t<n){const r=t+n>>>1,i=P(f[r]);i<e?t=r+1:n=r}return t}function S(e){f.length&&f.includes(e,l&&e.allowRecurse?d+1:d)||e===_||(null==e.id?f.push(e):f.splice(I(e.id),0,e),E())}function E(){l||u||(u=!0,w=b.then(N))}function T(e){const t=f.indexOf(e);t>d&&f.splice(t,1)}function C(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),E()}function A(e){C(e,p,h,m)}function O(e){C(e,v,g,y)}function x(e,t=null){if(h.length){for(_=t,p=[...new Set(h)],h.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,_=null,x(e,t)}}function R(e){if(g.length){const e=[...new Set(g)];if(g.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>P(e)-P(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const P=e=>null==e.id?1/0:e.id;function N(e){u=!1,l=!0,x(e),f.sort(((e,t)=>P(e)-P(t)));i.dG;try{for(d=0;d<f.length;d++){const e=f[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,f.length=0,R(e),l=!1,w=null,(f.length||h.length||g.length)&&N(e)}}new Set;new Map;function L(e,t,...n){const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s?o=n.map((e=>e.trim())):t&&(o=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&s(u,e,6,o);const f=r[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(f,e,6,o)}}function D(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=D(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,V=null;function U(e){const t=F;return F=e,V=e&&e.type.__scopeId||null,t}function j(e){V=e}function z(){V=null}function $(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const i=U(t),o=e(...n);return U(i),r._d&&zt(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function B(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:l,attrs:u,emit:f,render:d,renderCache:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=U(e);try{if(4&n.shapeFlag){const e=o||r;y=rn(d.call(e,e,h,s,m,p,g)),b=u}else{const e=t;0,y=rn(e.length>1?e(s,{attrs:u,slots:l,emit:f}):e(s,null)),b=t.props?u:H(u)}}catch(k){Mt.length=0,a(k,e,1),y=Xt(Lt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(b=q(b,c)),_=en(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,U(w),y}const H=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},q=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function W(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||J(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?J(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!M(l,n))return!0}}return!1}function J(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!M(n,o))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const K=e=>e.__isSuspense;function Y(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):O(e)}function X(e,t){if(yn){let n=yn.provides;const r=yn.parent&&yn.parent.provides;r===n&&(n=yn.provides=Object.create(r)),n[e]=t}else 0}function Z(e,t,n=!1){const r=yn||F;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Q={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const f=yn;let d,h,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ie(e):(0,i.mf)(e)?o(e,f,2):void 0))):d=(0,i.mf)(e)?t?()=>o(e,f,2):()=>{if(!f||!f.isUnmounted)return h&&h(),s(e,f,3,[g])}:i.dG,t&&a){const e=d;d=()=>ie(e())}let g=e=>{h=w.onStop=()=>{o(e,f,4)}};if(En)return g=i.dG,t?n&&s(t,f,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:Q;const y=()=>{if(w.active)if(t){const e=w.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(h&&h(),s(t,f,3,[e,v===Q?void 0:v,g]),v=e)}else w.run()};let b;y.allowRecurse=!!t,b="sync"===c?y:"post"===c?()=>wt(y,f&&f.suspense):()=>{!f||f.isMounted?A(y):y()};const w=new r.qq(d,b);return t?n?y():v=w.run():"post"===c?wt(w.run.bind(w),f&&f.suspense):w.run(),()=>{w.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,w)}}function ne(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=yn;wn(this);const c=te(o,s.bind(r),n);return a?wn(a):_n(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ie(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ie(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ie(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ie(e,t)}));else if((0,i.PO)(e))for(const n in e)ie(e[n],t);return e}function oe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ae((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const se=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:se,onEnter:se,onAfterEnter:se,onEnterCancelled:se,onBeforeLeave:se,onLeave:se,onAfterLeave:se,onLeaveCancelled:se,onBeforeAppear:se,onAppear:se,onAfterAppear:se,onAppearCancelled:se},setup(e,{slots:t}){const n=bn(),i=oe();let o;return()=>{const s=t.default&&pe(t.default(),!0);if(!s||!s.length)return;const a=(0,r.IU)(e),{mode:c}=a;const l=s[0];if(i.isLeaving)return fe(l);const u=de(l);if(!u)return fe(l);const f=ue(u,a,i,n);he(u,f);const d=n.subTree,h=d&&de(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(h&&h.type!==Lt&&(!Wt(u,h)||p)){const e=ue(h,a,i,n);if(he(h,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},fe(l);"in-out"===c&&u.type!==Lt&&(e.delayLeave=(e,t,n)=>{const r=le(i,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return l}}},ce=ae;function le(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,w=String(e.key),_=le(n,e),k=(e,t)=>{e&&s(e,r,9,t)},I={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const o=_[w];o&&Wt(e,o)&&o.el._leaveCb&&o.el._leaveCb(),k(r,[t])},enter(e){let t=l,r=u,o=f;if(!n.isMounted){if(!i)return;t=v||l,r=y||u,o=b||f}let s=!1;const a=e._enterCb=t=>{s||(s=!0,k(t?o:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();k(d,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),k(n?m:p,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,h?(h(t,s),h.length<=1&&s()):s()},clone(e){return ue(e,t,n,r)}};return I}function fe(e){if(ve(e))return e=en(e),e.children=null,e}function de(e){return ve(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Pt?(128&o.patchFlag&&r++,n=n.concat(pe(o.children,t))):(t||o.type!==Lt)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function me(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ge=e=>!!e.type.__asyncLoader;const ve=e=>e.type.__isKeepAlive;RegExp,RegExp;function ye(e,t){return(0,i.kJ)(e)?e.some((e=>ye(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function be(e,t){_e(e,"a",t)}function we(e,t){_e(e,"da",t)}function _e(e,t,n=yn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)ve(e.parent.vnode)&&ke(r,t,n,e),e=e.parent}}function ke(e,t,n,r){const o=Ee(t,e,r,!0);Pe((()=>{(0,i.Od)(r[t],o)}),n)}function Ie(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Se(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=yn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),wn(n);const o=s(t,n,e,i);return _n(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const Te=e=>(t,n=yn)=>(!En||"sp"===e)&&Ee(e,t,n),Ce=Te("bm"),Ae=Te("m"),Oe=Te("bu"),xe=Te("u"),Re=Te("bum"),Pe=Te("um"),Ne=Te("sp"),Le=Te("rtg"),De=Te("rtc");function Me(e,t=yn){Ee("ec",e,t)}let Fe=!0;function Ve(e){const t=$e(e),n=e.proxy,o=e.ctx;Fe=!1,t.beforeCreate&&je(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:f,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:k,render:I,renderTracked:S,renderTriggered:E,errorCaptured:T,serverPrefetch:C,expose:A,inheritAttrs:O,components:x,directives:R,filters:P}=t,N=null;if(f&&Ue(f,o,N,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Fe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)ze(l[r],o,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{X(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&je(d,e,"c"),L(Ce,h),L(Ae,p),L(Oe,m),L(xe,g),L(be,v),L(we,y),L(Me,T),L(De,S),L(Le,E),L(Re,w),L(Pe,k),L(Ne,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===i.dG&&(e.render=I),null!=O&&(e.inheritAttrs=O),x&&(e.components=x),R&&(e.directives=R)}function Ue(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=Je(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?Z(n.from||s,n.default,!0):Z(n.from||s):Z(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function je(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ze(e,t,n,r){const o=r.includes(".")?re(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&ee(o,n)}else if((0,i.mf)(e))ee(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>ze(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&ee(o,r,e)}else 0}function $e(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Be(c,e,s,!0))),Be(c,t,s)):c=t,o.set(t,c),c}function Be(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Be(e,o,n,!0),i&&i.forEach((t=>Be(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=He[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const He={data:qe,props:Ke,emits:Ke,methods:Ke,computed:Ke,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Ke,directives:Ke,watch:Ye,provide:qe,inject:We};function qe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function We(e,t){return Ke(Je(e),Je(t))}function Je(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Ke(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Ye(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function Xe(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Jt,1),e.propsDefaults=Object.create(null),Qe(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function Ze(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(s),[u]=e.propsOptions;let f=!1;if(!(o||c>0)||16&c){let r;Qe(e,t,s,a)&&(f=!0);for(const o in l)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=et(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],f=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const c=t[o];if(u)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,f=!0);else{const t=(0,i._A)(o);s[t]=et(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,f=!0)}}f&&(0,r.X$)(e,"set","$attrs")}function Qe(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let f;s&&(0,i.RI)(s,f=(0,i._A)(r))?a&&a.includes(f)?(c||(c={}))[f]=u:n[f]=u:M(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=et(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return l}function et(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(wn(o),r=i[n]=e.call(null,t),_n())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function tt(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=tt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let f=0;f<s.length;f++){0;const e=(0,i._A)(s[f]);nt(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(nt(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=ot(Boolean,r.type),n=ot(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function nt(e){return"$"!==e[0]}function rt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function it(e,t){return rt(e)===rt(t)}function ot(e,t){return(0,i.kJ)(t)?t.findIndex((t=>it(t,e))):(0,i.mf)(t)&&it(t,e)?0:-1}const st=e=>"_"===e[0]||"$stable"===e,at=e=>(0,i.kJ)(e)?e.map(rn):[rn(e)],ct=(e,t,n)=>{const r=$(((...e)=>at(t(...e))),n);return r._c=!1,r},lt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(st(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=ct(o,n,r);else if(null!=n){0;const e=at(n);t[o]=()=>e}}},ut=(e,t)=>{const n=at(t);e.slots.default=()=>n},ft=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):lt(t,e.slots={})}else e.slots={},t&&ut(e,t);(0,i.Nj)(e.slots,Jt,1)},dt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,lt(t,o)),a=t}else t&&(ut(e,t),a={default:1});if(s)for(const i in o)st(i)||i in a||delete o[i]};function ht(e,t){const n=F;if(null===n)return e;const r=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function pt(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),s(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}function mt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gt=0;function vt(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const o=mt(),s=new Set;let a=!1;const c=o.app={_uid:gt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Fn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,l){if(!a){const u=Xt(n,r);return u.appContext=o,s&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Pn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function yt(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>yt(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(ge(s)&&!a)return;const c=4&s.shapeFlag?Pn(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:f}=e;const d=t&&t.r,h=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==f&&((0,i.HD)(d)?(h[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(f))o(f,u,12,[l,h]);else{const t=(0,i.HD)(f),o=(0,r.dq)(f);if(t||o){const o=()=>{if(e.f){const n=t?h[f]:f.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?h[f]=[c]:(f.value=[c],e.k&&(h[e.k]=f.value))}else t?(h[f]=l,(0,i.RI)(p,f)&&(p[f]=l)):(0,r.dq)(f)&&(f.value=l,e.k&&(h[e.k]=l))};l?(o.id=-1,wt(o,n)):o()}else 0}}function bt(){}const wt=Y;function _t(e){return kt(e)}function kt(e,t){bt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:f,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wt(e,t)&&(r=Q(e),J(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:f}=t;switch(l){case Nt:b(e,t,n,r);break;case Lt:w(e,t,n,r);break;case Dt:null==e&&_(t,n,r,s);break;case Pt:D(e,t,n,r,i,o,s,a,c);break;default:1&f?E(e,t,n,r,i,o,s,a,c):6&f?M(e,t,n,r,i,o,s,a,c):(64&f||128&f)&&l.process(e,t,n,r,i,o,s,a,c,te)}null!=u&&i&&yt(u,e&&e.ref,o,t||e,!t)},b=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},w=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},k=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},E=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?C(t,n,r,i,o,s,a,c):P(e,t,i,o,s,a,c)},C=(e,t,n,r,s,l,u,f)=>{let h,p;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==g&&-1===w)h=e.el=g(e.el);else{if(h=e.el=c(e.type,l,v&&v.is,v),8&y?d(h,e.children):16&y&&O(e.children,h,null,r,s,l&&"foreignObject"!==m,u,f),_&&pt(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||a(h,t,null,v[t],l,e.children,r,s,Z);"value"in v&&a(h,"value",null,v.value),(p=v.onVnodeBeforeMount)&&cn(p,r,e)}A(h,e,e.scopeId,u,r)}_&&pt(e,null,r,"beforeMount");const k=(!s||s&&!s.pendingBranch)&&b&&!b.persisted;k&&b.beforeEnter(h),o(h,t,n),((p=v&&v.onVnodeMounted)||k||_)&&wt((()=>{p&&cn(p,r,e),k&&b.enter(h),_&&pt(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?on(e[l]):rn(e[l]);y(null,c,t,n,r,i,o,s,a)}},P=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:h}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&It(n,!1),(g=m.onVnodeBeforeUpdate)&&cn(g,n,t,e),h&&pt(t,e,n,"beforeUpdate"),n&&It(n,!0);const v=o&&"foreignObject"!==t.type;if(f?N(e.dynamicChildren,f,l,n,r,v,s):c||z(e,t,l,null,n,r,v,s,!1),u>0){if(16&u)L(l,t,p,m,n,r,o);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,o),4&u&&a(l,"style",p.style,m.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],u=m[s];u===c&&"value"!==s||a(l,s,c,u,o,e.children,n,r,Z)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=f||L(l,t,p,m,n,r,o);((g=m.onVnodeUpdated)||h)&&wt((()=>{g&&cn(g,n,t,e),h&&pt(t,e,n,"updated")}),r)},N=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Pt||!Wt(c,l)||70&c.shapeFlag)?h(c.el):n;y(c,l,u,null,r,i,o,s,!0)}},L=(e,t,n,r,o,s,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],f=n[l];u!==f&&"value"!==l&&a(e,l,f,u,c,t.children,o,s,Z)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,o,s,Z);"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,u)=>{const f=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(f,n,r),o(d,n,r),O(t.children,n,d,i,s,a,c,u)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&St(e,t,!0)):z(e,t,n,d,i,s,a,c,u)},M=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):F(t,n,r,i,o,s,c):V(e,t,c)},F=(e,t,n,r,i,o,s)=>{const a=e.component=vn(e,r,i);if(ve(e)&&(a.ctx.renderer=te),Tn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=Xt(Lt);w(null,e,t,n)}}else U(a,e,t,n,i,o,s)},V=(e,t,n)=>{const r=t.component=e.component;if(W(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,T(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:l,vnode:u}=e,f=n;0,It(e,!1),n?(n.el=u.el,j(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&cn(t,l,n,u),It(e,!0);const d=B(e);0;const p=e.subTree;e.subTree=d,y(p,d,h(p.el),Q(p),e,s,a),n.el=d.el,null===f&&G(e,d.el),o&&wt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&wt((()=>cn(t,l,n,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:f,parent:d}=e,h=ge(t);if(It(e,!1),u&&(0,i.ir)(u),!h&&(r=l&&l.onVnodeBeforeMount)&&cn(r,d,t),It(e,!0),c&&re){const n=()=>{e.subTree=B(e),re(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=B(e);0,y(null,r,n,o,e,s,a),t.el=r.el}if(f&&wt(f,s),!h&&(r=l&&l.onVnodeMounted)){const e=t;wt((()=>cn(r,d,e)),s)}256&t.shapeFlag&&e.a&&wt(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new r.qq(l,(()=>S(e.update)),e.scope),f=e.update=u.run.bind(u);f.id=e.uid,It(e,!0),f()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ze(e,t.props,i,n),dt(e,t.children,n),(0,r.Jd)(),x(void 0,e.update),(0,r.lk)()},z=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void H(l,f,n,r,i,o,s,a,c);if(256&h)return void $(l,f,n,r,i,o,s,a,c)}8&p?(16&u&&Z(l,i,o),f!==l&&d(n,f)):16&u?16&p?H(l,f,n,r,i,o,s,a,c):Z(l,i,o,!0):(8&u&&d(n,""),16&p&&O(f,n,r,i,o,s,a,c))},$=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,f=t.length,d=Math.min(u,f);let h;for(h=0;h<d;h++){const r=t[h]=l?on(t[h]):rn(t[h]);y(e[h],r,n,null,o,s,a,c,l)}u>f?Z(e,o,s,!0,!1,d):O(t,n,r,o,s,a,c,l,d)},H=(e,t,n,r,o,s,a,c,l)=>{let u=0;const f=t.length;let d=e.length-1,h=f-1;while(u<=d&&u<=h){const r=e[u],i=t[u]=l?on(t[u]):rn(t[u]);if(!Wt(r,i))break;y(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=h){const r=e[d],i=t[h]=l?on(t[h]):rn(t[h]);if(!Wt(r,i))break;y(r,i,n,null,o,s,a,c,l),d--,h--}if(u>d){if(u<=h){const e=h+1,i=e<f?t[e].el:r;while(u<=h)y(null,t[u]=l?on(t[u]):rn(t[u]),n,i,o,s,a,c,l),u++}}else if(u>h)while(u<=d)J(e[u],o,s,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=h;u++){const e=t[u]=l?on(t[u]):rn(t[u]);null!=e.key&&g.set(e.key,u)}let v,b=0;const w=h-m+1;let _=!1,k=0;const I=new Array(w);for(u=0;u<w;u++)I[u]=0;for(u=p;u<=d;u++){const r=e[u];if(b>=w){J(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=h;v++)if(0===I[v-m]&&Wt(r,t[v])){i=v;break}void 0===i?J(r,o,s,!0):(I[i-m]=u+1,i>=k?k=i:_=!0,y(r,t[i],n,null,o,s,a,c,l),b++)}const S=_?Et(I):i.Z6;for(v=S.length-1,u=w-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<f?t[e+1].el:r;0===I[u]?y(null,i,n,d,o,s,a,c,l):_&&(v<0||u!==S[v]?q(i,n,d,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Pt){o(s,t,n);for(let e=0;e<l.length;e++)q(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Dt)return void k(e,t,n);const f=2!==r&&1&u&&c;if(f)if(0===r)c.beforeEnter(s),o(s,t,n),wt((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},J=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:f,dirs:d}=e;if(null!=a&&yt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const h=1&u&&d,p=!ge(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&cn(m,t,e),6&u)X(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);h&&pt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(o!==Pt||f>0&&64&f)?Z(l,t,n,!1,!0):(o===Pt&&384&f||!i&&16&u)&&Z(c,t,n),r&&K(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&wt((()=>{m&&cn(m,t,e),h&&pt(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Pt)return void Y(n,r);if(t===Dt)return void I(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&wt(c,t),wt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)J(e[s],t,n,r,i)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),R(),t._vnode=e},te={p:y,um:J,m:q,r:K,mt:F,mc:O,pc:z,pbc:N,n:Q,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:vt(ee,ne)}}function It({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function St(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=on(o[i]),t.el=e.el),n||St(e,t))}}function Et(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Tt=e=>e.__isTeleport;const Ct="components";function At(e,t){return xt(Ct,e,!0,t)||e}const Ot=Symbol();function xt(e,t,n=!0,r=!1){const o=F||yn;if(o){const n=o.type;if(e===Ct){const e=Nn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Rt(o[e]||n[e],t)||Rt(o.appContext[e],t);return!s&&r?n:s}}function Rt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Pt=Symbol(void 0),Nt=Symbol(void 0),Lt=Symbol(void 0),Dt=Symbol(void 0),Mt=[];let Ft=null;function Vt(e=!1){Mt.push(Ft=e?null:[])}function Ut(){Mt.pop(),Ft=Mt[Mt.length-1]||null}let jt=1;function zt(e){jt+=e}function $t(e){return e.dynamicChildren=jt>0?Ft||i.Z6:null,Ut(),jt>0&&Ft&&Ft.push(e),e}function Bt(e,t,n,r,i,o){return $t(Yt(e,t,n,r,i,o,!0))}function Ht(e,t,n,r,i){return $t(Xt(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Wt(e,t){return e.type===t.type&&e.key===t.key}const Jt="__vInternal",Gt=({key:e})=>null!=e?e:null,Kt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Yt(e,t=null,n=null,r=0,o=null,s=(e===Pt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Kt(t),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(sn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),jt>0&&!a&&Ft&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Ft.push(l),l}const Xt=Zt;function Zt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Ot||(e=Lt),qt(e)){const r=en(e,t,!0);return n&&sn(r,n),r}if(Ln(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:K(e)?128:Tt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Yt(e,t,n,o,s,c,a,!0)}function Qt(e){return e?(0,r.X3)(e)||Jt in e?(0,i.l7)({},e):e:null}function en(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?an(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Kt(t)):[o,Kt(t)]:Kt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor};return l}function tn(e=" ",t=0){return Xt(Nt,null,e,t)}function nn(e="",t=!1){return t?(Vt(),Ht(Lt,null,e)):Xt(Lt,null,e)}function rn(e){return null==e||"boolean"===typeof e?Xt(Lt):(0,i.kJ)(e)?Xt(Pt,null,e.slice()):"object"===typeof e?on(e):Xt(Nt,null,String(e))}function on(e){return null===e.el||e.memo?e:en(e)}function sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Jt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function an(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function cn(e,t,n,r=null){s(e,t,7,[n,r])}function ln(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}function un(e,t,n={},r,i){if(F.isCE)return Xt("slot","default"===t?null:{name:t},r&&r());let o=e[t];o&&o._c&&(o._d=!1),Vt();const s=o&&fn(o(n)),a=Ht(Pt,{key:n.key||`_${t}`},s||(r?r():[]),s&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function fn(e){return e.some((e=>!qt(e)||e.type!==Lt&&!(e.type===Pt&&!fn(e.children))))?e:null}const dn=e=>e?kn(e)?Pn(e)||e.proxy:dn(e.parent):null,hn=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dn(e.parent),$root:e=>dn(e.root),$emit:e=>e.emit,$options:e=>$e(e),$forceUpdate:e=>()=>S(e.update),$nextTick:e=>k.bind(e.proxy),$watch:e=>ne.bind(e)}),pn={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let f;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((f=e.propsOptions[0])&&(0,i.RI)(f,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Fe&&(c[t]=0)}}const d=hn[t];let h,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(h=l.__cssModules)&&(h=h[t])?h:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==i.kT&&(0,i.RI)(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(hn,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const mn=mt();let gn=0;function vn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||mn,a={uid:gn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tt(o,s),emitsOptions:D(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let yn=null;const bn=()=>yn||F,wn=e=>{yn=e,e.scope.on()},_n=()=>{yn&&yn.scope.off(),yn=null};function kn(e){return 4&e.vnode.shapeFlag}let In,Sn,En=!1;function Tn(e,t=!1){En=t;const{props:n,children:r}=e.vnode,i=kn(e);Xe(e,n,i,t),ft(e,r);const o=i?Cn(e,t):void 0;return En=!1,o}function Cn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,pn));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Rn(e):null;wn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),_n(),(0,i.tI)(c)){if(c.then(_n,_n),t)return c.then((n=>{An(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else An(e,c,t)}else On(e,t)}function An(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),On(e,n)}function On(e,t,n){const o=e.type;if(!e.render){if(!t&&In&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=In(t,c)}}e.render=o.render||i.dG,Sn&&Sn(e)}wn(e),(0,r.Jd)(),Ve(e),(0,r.lk)(),_n()}function xn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Rn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=xn(e))},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in hn?hn[n](e):void 0}}))}function Nn(e){return(0,i.mf)(e)&&e.displayName||e.name}function Ln(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,En);function Mn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?qt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Xt(e,t,n))}Symbol("");const Fn="3.2.31"},963:function(e,t,n){n.d(t,{D2:function(){return ve},YZ:function(){return fe},iM:function(){return me},nr:function(){return re},ri:function(){return _e},uT:function(){return F}});var r=n(577),i=n(252);n(262);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?s.createElementNS(o,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const f=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);f.test(n)?e.setProperty((0,r.rs)(i),n.replace(f,""),"important"):e[i]=n}}const h=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<h.length;r++){const n=h[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let b=Date.now,w=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);w=!!(e&&Number(e[1])<=53)}let _=0;const k=Promise.resolve(),I=()=>{_=0},S=()=>_||(k.then(I),_=b());function E(e,t,n,r){e.addEventListener(t,n,r)}function T(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=O(t);if(r){const s=o[t]=x(r,i);E(e,n,s,a)}else s&&(T(e,n,s,a),o[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function O(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function x(e,t){const n=e=>{const r=e.timeStamp||b();(w||r>=n.attached-1)&&(0,i.$d)(R(e,n.value),t,5,[e])};return n.value=e,n.attached=S(),n}function R(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const P=/^on[a-z]/,N=(e,t,n,i,o=!1,s,a,c,f)=>{"class"===t?l(e,i,o):"style"===t?u(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,i,o))?y(e,t,i,s,a,c,f):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function L(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",M="animation",F=(e,{slots:t})=>(0,i.h)(i.P$,z(e),t);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},i.P$.props,V),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function z(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=$(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:k,onBeforeAppear:I=y,onAppear:S=b,onAppearCancelled:E=w}=t,T=(e,t,n)=>{q(e,t?f:c),q(e,t?u:a),n&&n()},C=(e,t)=>{q(e,p),q(e,h),t&&t()},A=e=>(t,n)=>{const r=e?S:b,o=()=>T(t,e,n);U(r,[t,o]),W((()=>{q(t,e?l:s),H(t,e?f:c),j(r)||G(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(y,[e]),H(e,s),H(e,a)},onBeforeAppear(e){U(I,[e]),H(e,l),H(e,u)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>C(e,t);H(e,d),Z(),H(e,h),W((()=>{q(e,d),H(e,p),j(_)||G(e,i,v,n)})),U(_,[e,n])},onEnterCancelled(e){T(e,!1),U(w,[e])},onAppearCancelled(e){T(e,!0),U(E,[e])},onLeaveCancelled(e){C(e),U(k,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let J=0;function G(e,t,n,r){const i=e._endId=++J,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=K(e,t);if(!s)return r();const l=s+"end";let u=0;const f=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&f()};setTimeout((()=>{u<c&&f()}),a+1),e.addEventListener(l,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(D+"Delay"),o=r(D+"Duration"),s=Y(i,o),a=r(M+"Delay"),c=r(M+"Duration"),l=Y(a,c);let u=null,f=0,d=0;t===D?s>0&&(u=D,f=s,d=o.length):t===M?l>0&&(u=M,f=l,d=c.length):(f=Math.max(s,l),u=f>0?s>l?D:M:null,d=u?u===D?o.length:c.length:0);const h=u===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:h}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Z(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Q(o);const s=i||o.props&&"number"===o.props.type;E(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=(0,r.He)(i)),e._assign(i)})),n&&E(e,"change",(()=>{e.value=e.value.trim()})),t||(E(e,"compositionstart",ee),E(e,"compositionend",te),E(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=Q(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ie={deep:!0,created(e,t,n){e._assign=Q(n),E(e,"change",(()=>{const t=e._modelValue,n=le(e),i=e.checked,o=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(ue(e,i))}))},mounted:oe,beforeUpdate(e,t,n){e._assign=Q(n),oe(e,t,n)}};function oe(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,ue(e,!0)))}const se={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=Q(n),E(e,"change",(()=>{e._assign(le(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=Q(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},ae={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=(0,r.DM)(t);E(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(le(e)):le(e)));e._assign(e.multiple?o?new Set(t):t:t[0])})),e._assign=Q(i)},mounted(e,{value:t}){ce(e,t)},beforeUpdate(e,t,n){e._assign=Q(n)},updated(e,{value:t}){ce(e,t)}};function ce(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=le(o);if(n)(0,r.kJ)(t)?o.selected=(0,r.hq)(t,s)>-1:o.selected=t.has(s);else if((0,r.WV)(le(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function le(e){return"_value"in e?e._value:e.value}function ue(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const fe={created(e,t,n){de(e,t,n,null,"created")},mounted(e,t,n){de(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){de(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){de(e,t,n,r,"updated")}};function de(e,t,n,r,i){let o;switch(e.tagName){case"SELECT":o=ae;break;case"TEXTAREA":o=re;break;default:switch(n.props&&n.props.type){case"checkbox":o=ie;break;case"radio":o=se;break;default:o=re}}const s=o[i];s&&s(e,t,n,r)}const he=["ctrl","shift","alt","meta"],pe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>he.some((n=>e[`${n}Key`]&&!t.includes(n)))},me=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=pe[t[e]];if(r&&r(n,t))return}return e(n,...r)},ge={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ve=(e,t)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return t.some((e=>e===i||ge[e]===i))?e(n):void 0};const ye=(0,r.l7)({patchProp:N},c);let be;function we(){return be||(be=(0,i.Us)(ye))}const _e=(...e)=>{const t=we().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ke(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function ke(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return h},DM:function(){return P},E9:function(){return re},F7:function(){return S},Gg:function(){return H},HD:function(){return D},He:function(){return te},Kn:function(){return F},NO:function(){return k},Nj:function(){return ee},Od:function(){return C},PO:function(){return $},Pq:function(){return a},RI:function(){return O},S0:function(){return B},W7:function(){return z},WV:function(){return m},Z6:function(){return w},_A:function(){return J},_N:function(){return R},aU:function(){return Z},dG:function(){return _},e1:function(){return o},fY:function(){return r},hR:function(){return X},hq:function(){return g},ir:function(){return Q},j5:function(){return l},kC:function(){return Y},kJ:function(){return x},kT:function(){return b},l7:function(){return T},mf:function(){return L},rs:function(){return K},tI:function(){return V},tR:function(){return E},yA:function(){return c},yk:function(){return M},zw:function(){return v}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function l(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||F(e)?e:void 0}const u=/;(?![^(]*\))/g,f=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(f);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(D(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=x(e),r=x(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>D(e)?e:null==e?"":x(e)||F(e)&&(e.toString===U||!L(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||x(t)||$(t)?t:String(t),b={},w=[],_=()=>{},k=()=>!1,I=/^on[^a-z]/,S=e=>I.test(e),E=e=>e.startsWith("onUpdate:"),T=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,O=(e,t)=>A.call(e,t),x=Array.isArray,R=e=>"[object Map]"===j(e),P=e=>"[object Set]"===j(e),N=e=>e instanceof Date,L=e=>"function"===typeof e,D=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&L(e.then)&&L(e.catch),U=Object.prototype.toString,j=e=>U.call(e),z=e=>j(e).slice(8,-1),$=e=>"[object Object]"===j(e),B=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,J=q((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,K=q((e=>e.replace(G,"-$1").toLowerCase())),Y=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),X=q((e=>e?`on${Y(e)}`:"")),Z=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},503:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(238),i="firebase",o="9.6.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},409:function(e,t,n){n.d(t,{v0:function(){return or},e5:function(){return st},w7:function(){return at}});var r=n(444),i=n(238);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n(333),a=n(463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),f=new s.Yd("@firebase/auth");function d(e,...t){f.logLevel<=s["in"].ERROR&&f.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const o=n.initialize({options:t});return o}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,o={}){return M(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw j(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);h(e,a)}}catch(o){if(o instanceof r.ZR)throw o;h(e,"network-request-failed")}}async function F(e,t,n,r,i={}){const o=await D(e,t,n,r,i);return"mfaPendingCredential"in o&&h(e,"multi-factor-auth-required",{_serverResponse:o}),o}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=W(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:B(q(o.auth_time)),issuedAtTime:B(q(o.iat)),expirationTime:B(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function J(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&K(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,$(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Q(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=V(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:I}=t;v(b&&I,e,"internal-error");const S=re.fromJSON(this.name,I);v("string"===typeof b,e,"internal-error"),ie(u,e.name),ie(f,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(h,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(y,e.name);const E=new oe({uid:b,auth:e,email:f,emailVerified:w,displayName:u,isAnonymous:_,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=oe._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function ke(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ee(e){return(0,r.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Re(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="http://localhost";class De extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new De(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ne(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Ve(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function je(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ze({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ze({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ve(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return je(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ze({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class He{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=$e(null!==(i=c["mode"])&&void 0!==i?i:null);v(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new He(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(){this.providerId=qe.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=He.parseLink(t);return v(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}qe.PROVIDER_ID="password",qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends Je{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch(t){return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ge.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ke.credential(t,n)}catch(r){return null}}}Ke.GOOGLE_SIGN_IN_METHOD="google.com",Ke.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Je{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Je{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=Qe(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Qe(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Qe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,et.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new et(e,t,n,r)}}function tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw et._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await G(e,tt(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=W(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&h(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r="signIn",i=await tt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ot(e,t){return it(Ee(e),t)}function st(e,t,n){return ot((0,r.m9)(e),qe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function lt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){const e=(0,r.z$)();return de(e)||ye(e)}const ht=1e3,pt=10;class mt extends ft{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dt()&&ke(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,pt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mt.type="LOCAL";const gt=mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ft{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vt.type="SESSION";const yt=vt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await bt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.receivers=[];class kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=_t("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function St(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function Tt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ct(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function At(){return Et()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="firebaseLocalStorageDb",xt=1,Rt="firebaseLocalStorage",Pt="fbase_key";class Nt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Dt(){const e=indexedDB.deleteDatabase(Ot);return new Nt(e).toPromise()}function Mt(){const e=indexedDB.open(Ot,xt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Pt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Dt(),t(await Mt()))}))}))}async function Ft(e,t,n){const r=Lt(e,!0).put({[Pt]:t,value:n});return new Nt(r).toPromise()}async function Vt(e,t){const n=Lt(e,!1).get(t),r=await new Nt(n).toPromise();return void 0===r?null:r.value}function Ut(e,t){const n=Lt(e,!0).delete(t);return new Nt(n).toPromise()}const jt=800,zt=3;class $t{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Mt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Et()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wt._getInstance(At()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tt(),!this.activeServiceWorker)return;this.sender=new kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ct()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Ft(e,ut,"1"),await Ut(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ft(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Vt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ut(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lt(e,!1).getAll();return new Nt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$t.type="LOCAL";const Bt=$t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function qt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Wt().appendChild(r)}))}function Gt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gt("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt="recaptcha";async function Yt(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Kt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await ct(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(e){this.providerId=Xt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,t){return Yt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ze._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Xt.credentialFromTaggedObject(t)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ze._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.PROVIDER_ID="phone",Xt.PHONE_SIGN_IN_METHOD="phone";class Qt extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function en(e){return it(e.auth,new Qt(e),e.bypassAuthState)}function tn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new Qt(e),e.bypassAuthState)}async function nn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),nt(n,new Qt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return en;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:h(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new O(2e3,1e4);class sn extends rn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,on.get())};e()}}sn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="pendingRedirect",cn=new Map;class ln extends rn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cn.get(this.auth._key());if(!e){try{const t=await un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cn.set(this.auth._key(),e)}return this.bypassAuthState||cn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(e,t){const n=dn(t),r=fn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function fn(e){return _(e._redirectPersistence)}function dn(e){return ce(an,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(e,t,n=!1){const r=Ee(e),i=Zt(r,t),o=new ln(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn=6e5;class mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!yn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(e))}saveEventToCache(e){this.cachedEventUids.add(gn(e)),this.lastProcessedEventTime=Date.now()}}function gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function yn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_n=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bn(e);for(const r of t)try{if(In(r))return}catch(n){}h(e,"unauthorized-domain")}function In(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!_n.test(n))return!1;if(wn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new O(3e4,6e4);function En(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Tn(e){return new Promise(((t,n)=>{var r,i,o;function s(){En(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{En(),n(p(e,"network-request-failed"))},timeout:Sn.get()})}if(null===(i=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=It().gapi)||void 0===o?void 0:o.load)){const t=Gt("iframefcb");return It()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Cn=null,e}))}let Cn=null;function An(e){return Cn=Cn||Tn(e),Cn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new O(5e3,15e3),xn="__/auth/iframe",Rn="emulator/auth/iframe",Pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,Rn):`https://${e.config.authDomain}/${xn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Nn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Dn(e){const t=await An(e),n=It().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Ln(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=It().setTimeout((()=>{r(i)}),On.get());function s(){It().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Vn=600,Un="_blank",jn="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $n(e,t,n,i=Fn,o=Vn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Mn),{width:i.toString(),height:o.toString(),top:s,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=he(u)?Un:n),fe(u)&&(t=t||jn,l.scrollbars="yes");const f=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==c)return Bn(t||"",c),new zn(null);const d=window.open(t||"",c,f);v(d,e,"popup-blocked");try{d.focus()}catch(h){}return new zn(d)}function Bn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="__/auth/handler",qn="emulator/auth/handler";function Wn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof We){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Je){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Jn(e)}?${(0,r.xO)(l).slice(1)}`}function Jn({config:e}){return e.emulator?x(e,qn):`https://${e.authDomain}/${Hn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="webStorageSupport";class Kn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yt,this._completeRedirectFn=hn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wn(e,t,n,S(),r);return $n(e,o,_t())}async _openRedirect(e,t,n,r){return await this._originValidation(e),St(Wn(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Dn(e),n=new mn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Gn,{type:Gn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Gn];void 0!==i&&t(!!i),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ye()}}const Yn=Kn;class Xn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Zn extends Xn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Zn(e)}_finalizeEnroll(e,t,n){return lt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qn{constructor(){}static assertion(e){return Zn._fromCredential(e)}}Qn.FACTOR_ID="phone";var er="@firebase/auth",tr="0.19.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ir(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Se(t,r,i);return I(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ee(e.getProvider("auth").getImmediate());return(e=>new nr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(er,tr,rr(e)),(0,i.KN)(er,tr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():k(e,{popupRedirectResolver:Yn,persistence:[Bt,gt,yt]})}ir("Browser")},857:function(e,t,n){n.d(t,{hJ:function(){return ot},PL:function(){return vt},ad:function(){return tt}});var r=n(238),i=n(463),o=n(333),s=n(444);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.6.9";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o.Yd("@firebase/firestore");function u(e,...t){if(l.logLevel<=o["in"].DEBUG){const n=t.map(h);l.debug(`Firestore (${c}): ${e}`,...n)}}function f(e,...t){if(l.logLevel<=o["in"].ERROR){const n=t.map(h);l.error(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(l.logLevel<=o["in"].WARN){const n=t.map(h);l.warn(`Firestore (${c}): ${e}`,...n)}}function h(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw f(t),new Error(t)}function m(e,t){e||p()}function g(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="ok",y="cancelled",b="unknown",w="invalid-argument",_="deadline-exceeded",k="not-found",I="permission-denied",S="unauthenticated",E="resource-exhausted",T="failed-precondition",C="aborted",A="out-of-range",O="unimplemented",x="internal",R="unavailable";class P extends s.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(a.UNAUTHENTICATED)))}shutdown(){}}class D{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(m("string"==typeof e.accessToken),new N(e.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class M{constructor(e,t,n){this.type="FirstParty",this.user=a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class F{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new M(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(m("string"==typeof e.token),new V(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class z{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new z("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof z&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends ${construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(w,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new B(t)}static emptyPath(){return new B([])}}const H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends ${construct(e,t,n){return new q(e,t,n)}static isValidIdentifier(e){return H.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(w,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(w,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(w,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new P(w,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(B.fromString(e))}static fromName(e){return new W(B.fromString(e).popFirst(5))}static empty(){return new W(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new B(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){if(!n)throw new P(w,`Function ${e}() cannot be called with an empty ${t}.`)}function G(e){if(W.isDocumentKey(e))throw new P(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function K(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function Y(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K(e);throw new P(w,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return null==e}function Z(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,te;function ne(e){if(void 0===e)return f("RPC_ERROR","HTTP error has no status"),b;switch(e){case 200:return v;case 400:return T;case 401:return S;case 403:return I;case 404:return k;case 409:return C;case 416:return A;case 429:return E;case 499:return y;case 500:return b;case 501:return O;case 503:return R;case 504:return _;default:return e>=200&&e<300?v:e>=400&&e<500?T:e>=500&&e<600?x:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(te=ee||(ee={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";class re extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,r,i){const o=this.p(e,t);u("RestConnection","Sending: ",o,n);const s={};return this.g(s,r,i),this.v(e,o,s,n).then((e=>(u("RestConnection","Received: ",e),e)),(t=>{throw d("RestConnection",`${e} failed with error: `,t,"url: ",o,"request:",n),t}))}T(e,t,n,r,i){return this.m(e,t,n,r,i)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=Q[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,r){const i=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new P(ne(e.status),"Request failed with error: "+e.statusText)}if(!o.ok)throw new P(ne(o.status),"Request failed with error: "+o.statusText);return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){return e<t?-1:e>t?1:0}function oe(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(w,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(w,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(w,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new se(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new se(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ue(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const fe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function de(e){if(m(!!e),"string"==typeof e){let t=0;const n=fe.exec(e);if(m(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:he(e.seconds),nanos:he(e.nanos)}}function he(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function pe(e){return"string"==typeof e?ue.fromBase64String(e):ue.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ge(e){const t=e.mapValue.fields.__previous_value__;return me(t)?ge(t):t}function ve(e){const t=de(e.mapValue.fields.__local_write_time__.timestampValue);return new se(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?me(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9:10:p()}function be(e,t){if(e===t)return!0;const n=ye(e);if(n!==ye(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ve(e).isEqual(ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=de(e.timestampValue),r=de(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return pe(e.bytesValue).isEqual(pe(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return he(e.geoPointValue.latitude)===he(t.geoPointValue.latitude)&&he(e.geoPointValue.longitude)===he(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return he(e.integerValue)===he(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=he(e.doubleValue),r=he(t.doubleValue);return n===r?Z(n)===Z(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return oe(e.arrayValue.values||[],t.arrayValue.values||[],be);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!be(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function we(e){return!!e&&"nullValue"in e}function _e(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ke(e){return!!e&&"mapValue"in e}function Ie(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return le(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ie(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ie(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ke(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ie(t)}setAll(e){let t=q.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ie(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ke(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ke(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){le(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Se(Ie(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,n,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ee(e,0,ae.min(),ae.min(),Se.empty(),0)}static newFoundDocument(e,t,n){return new Ee(e,1,t,ae.min(),n,0)}static newNoDocument(e,t){return new Ee(e,2,t,ae.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,ae.min(),Se.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function Ce(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Te(e,t,n,r,i,o,s)}class Ae{constructor(e,t){this.position=e,this.inclusive=t}}class Oe{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.$=null,this.S=null,this.startAt,this.endAt}}function Re(e){return!X(e.limit)&&"L"===e.limitType}function Pe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ne(e){for(const t of e.filters)if(t.N())return t.field;return null}function Le(e){const t=g(e);if(null===t.$){t.$=[];const e=Ne(t),n=Pe(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new Oe(e)),t.$.push(new Oe(q.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new Oe(q.keyField(),e))}}}return t.$}function De(e){const t=g(e);if(!t.S)if("F"===t.limitType)t.S=Ce(t.path,t.collectionGroup,Le(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Le(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Oe(i.field,t))}const n=t.endAt?new Ae(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Ae(t.startAt.position,!t.startAt.inclusive):null;t.S=Ce(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Me=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Fe=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Ve{constructor(e,t){this.databaseId=e,this.F=t}}function Ue(e){return m(!!e),ae.fromTimestamp(function(e){const t=de(e);return new se(t.seconds,t.nanos)}(e))}function je(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ze(e,t){const n=function(e){const t=B.fromString(e);return m(Je(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new P(w,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(w,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new W((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function $e(e,t){return je(e.databaseId,t)}function Be(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=$e(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=$e(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(_e(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NAN"}};if(we(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(_e(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NOT_NAN"}};if(we(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:We(e.field),op:qe(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:We(e.field),direction:He(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.F||X(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function He(e){return Me[e]}function qe(e){return Fe[e]}function We(e){return{fieldPath:e.canonicalString()}}function Je(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return new Ve(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new P(T,"The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.m(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===S&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(b,e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.T(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===S&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(b,e.toString())}))}terminate(){this.J=!0}}async function Ye(e,t){const n=g(e),r=Be(n.q,De(t));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=ze(e,t.name),i=Ue(t.updateTime),o=new Se({mapValue:{fields:t.fields}}),s=Ee.newFoundDocument(r,i,o);return n&&s.setHasCommittedMutations(),n?s.setHasCommittedMutations():s}(n.q,e.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map;function Ze(e){if(e._terminated)throw new P(T,"The client has already been terminated.");if(!Xe.has(e)){u("ComponentProvider","Initializing Datastore");const o=function(e){return new re(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new j(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=Ge(e._databaseId),a=function(e,t,n,r){return new Ke(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,o,s);Xe.set(e,a)}var t,n,r,i;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Xe.get(e)}class Qe{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new P(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new P(w,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qe({}),this._settingsFrozen=!1,e instanceof z?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(w,'"projectId" not provided in firebase.initializeApp.');return new z(e.options.projectId)}(e))}get app(){if(!this._app)throw new P(T,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(T,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qe(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"gapi":const t=e.client;return m(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new F(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new P(w,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Xe.get(e);t&&(u("ComponentProvider","Removing Datastore"),Xe.delete(e),t.terminate())}(this),Promise.resolve()}}function tt(e=(0,r.Mq)()){return(0,r.qX)(e,"firestore/lite").getImmediate()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new it(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class rt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rt(this.firestore,e,this._query)}}class it extends rt{constructor(e,t,n){super(e,t,new xe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new W(e))}withConverter(e){return new it(this.firestore,e,this._path)}}function ot(e,t,...n){if(e=(0,s.m9)(e),J("collection","path",t),e instanceof et){const r=B.fromString(t,...n);return G(r),new it(e,null,r)}{if(!(e instanceof nt||e instanceof it))throw new P(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return G(r),new it(e.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(e){this._byteString=e}static fromBase64String(e){try{return new at(ue.fromBase64String(e))}catch(e){throw new P(w,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new at(ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(w,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(w,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new RegExp("[~\\*/\\[\\]]");function ut(e,t,n){if(t.search(lt)>=0)throw ft(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new st(...t.split("."))._internalPath}catch(r){throw ft(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ft(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new P(w,a+e+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ht(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mt("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ht extends dt{data(){return super.data()}}class pt{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function mt(e,t){return"string"==typeof t?ut(e,t):t instanceof st?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends class{convertValue(e,t="none"){switch(ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){const n={};return le(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new ct(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ge(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ve(e));default:return null}}convertTimestamp(e){const t=de(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);m(Je(n));const r=new z(n.get(1),n.get(3)),i=new W(n.popFirst(5));return r.isEqual(t)||f(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new at(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}function vt(e){!function(e){if(Re(e)&&0===e.explicitOrderBy.length)throw new P(O,"limitToLast() queries require specifying at least one orderBy() clause")}((e=Y(e,rt))._query);const t=Ze(e.firestore),n=new gt(e.firestore);return Ye(t,e._query).then((t=>{const r=t.map((t=>new ht(e.firestore,n,t.key,t,e.converter)));return Re(e._query)&&r.reverse(),new pt(e,r)}))}!function(e){c=e}(`${r.Jn}_lite`),(0,r.Xd)(new i.wA("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new et(n,new D(e.getProvider("auth-internal")),new U(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r}),"PUBLIC")),(0,r.KN)("firestore-lite","3.4.6",""),(0,r.KN)("firestore-lite","3.4.6","esm2017")},153:function(e,t,n){n.d(t,{cF:function(){return B}});var r=n(238),i=n(444),o=n(463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends i.ZR{constructor(e,t){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new u("unknown",e)}function h(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function p(){return new u("canceled","User canceled the upload/download.")}function m(e){return new u("invalid-url","Invalid URL '"+e+"'.")}function g(e){return new u("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function v(e){return new u("invalid-argument",e)}function y(){return new u("app-deleted","The Firebase app was deleted.")}function b(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=w.makeFromUrl(e,t)}catch(r){return new w(e,"")}if(""===n.path)return n;throw g(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${f}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${v}`,"i"),b={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:h,indices:p,postModify:l},{regex:y,indices:b,postModify:l}];for(let s=0;s<_.length;s++){const t=_[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new w(e,i),t.postModify(n);break}}if(null==n)throw m(e);return n}}class _{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function f(t){i=setTimeout((()=>{i=null,e(h,c())}),t)}function d(){o&&clearTimeout(o)}function h(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||s;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),f(i)}let p=!1;function m(e){p||(p=!0,d(),l||(null!==i?(e||(a=2),clearTimeout(i),f(0)):e||(a=1)))}return f(0),o=setTimeout((()=>{s=!0,m(!0)}),n),m}function I(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return void 0!==e}function E(e,t,n,r){if(r<t)throw v(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw v(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(C||(C={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e,t,n,r,i,o,s,a,c,l,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new O(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===C.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===C.ABORT;return void e(!1,new O(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new O(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());S(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?y():p();r(e)}else{const e=h();r(e)}};this.canceled_?t(!1,new O(!1,null,!0)):this.backoffId_=k(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&I(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class O{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function x(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function R(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function P(e,t){t&&(e["X-Firebase-GMPID"]=t)}function N(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function L(e,t,n,r,i,o){const s=T(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return P(c,t),x(c,n),R(c,o),N(c,r),new A(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function M(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(e,t){this._service=e,this._location=t instanceof w?t:w.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new F(e,t)}get root(){const e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M(this._location.path)}get storage(){return this._service}get parent(){const e=D(this._location.path);if(null===e)return null;const t=new w(this._location.bucket,e);return new F(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw b(e)}}function V(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:w.makeFromBucketSpec(n,e)}class U{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?w.makeFromBucketSpec(r,this._host):V(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=V(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new F(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new _(y());{const i=L(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const j="@firebase/storage",z="0.9.3",$="storage";function B(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,$),o=n.getImmediate({identifier:t});return o}function H(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new U(n,i,o,t,r.Jn)}function q(){(0,r.Xd)(new o.wA($,H,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(j,z,""),(0,r.KN)(j,z,"esm2017")}q()},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},251:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(252),i=n(577),o=n(963);const s=["placeholder","type"],a=["src","alt"],c=["src","alt"],l=["src"],u={key:1,class:"button-icon"},f=["src","alt"],d=["for"],h={key:0,class:"required"},p={class:"bloc-error"};function m(e,t,n,m,g,v){return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)([v.classBorder,n.inputClass,"base-input"])},[(0,r._)("div",{class:(0,i.C_)([v.returnValueByLength(v.getValueLength,n.customStyle.inputBgFull,n.customStyle.inputBgEmpty,1),"bloc-input"])},[(0,r.wy)((0,r._)("input",(0,r.dG)({"onUpdate:modelValue":t[0]||(t[0]=e=>g.modelValue=e)},e.$attrs,{class:[n.labelInside?"input-label-inside":"input-label-outside","input"],placeholder:e.$attrs.placeholder?e.$attrs.placeholder:" ",type:g.showPassword?"text":n.inputType}),null,16,s),[[o.YZ,g.modelValue]]),v.getIconCheck&&!1===g.isValidate&&v.getValueLength>=1&&n.showIcon?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[1]||(t[1]=(0,o.iM)((e=>g.showErrorMessage=!g.showErrorMessage),["prevent"])),class:(0,i.C_)([v.returnValueByLength(v.getValueLength,n.customStyle.inputBgFull,n.customStyle.inputBgEmpty,1),"button-icon"]),type:"button"},[(0,r._)("img",{src:v.getIconCheck.src,alt:v.getIconCheck.alt},null,8,a)],2)):(0,r.kq)("",!0),v.getIconCheck&&!1!==g.isValidate&&v.getValueLength>=1&&n.showIcon?((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,i.C_)([v.returnValueByLength(v.getValueLength,n.customStyle.inputBgFull,n.customStyle.inputBgEmpty,1),"button-icon"])},[(0,r._)("img",{src:v.getIconCheck.src,alt:v.getIconCheck.alt},null,8,c)],2)):(0,r.kq)("",!0),(0,r._)("div",{class:(0,i.C_)([v.returnValueByLength(v.getValueLength,n.customStyle.inputBgFull,n.customStyle.inputBgEmpty,1),"bloc-button"])},[v.getIconEyes&&n.showIconPassword&&"password"===n.inputType?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[2]||(t[2]=(0,o.iM)((e=>g.showPassword=!g.showPassword),["prevent"])),class:"button-icon",type:"button"},[(0,r._)("img",{src:v.getIconEyes,alt:""},null,8,l)])):(0,r.kq)("",!0),n.icon?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("img",{src:n.icon.src,alt:n.icon.alt},null,8,f)])):(0,r.kq)("",!0)],2),e.$attrs.label&&!e.$attrs.placeholder?((0,r.wg)(),(0,r.iD)("label",{key:2,for:e.$attrs.name,class:(0,i.C_)([n.labelInside?"label-inside":"label-outside",n.customStyle.label])},[(0,r.Uk)((0,i.zw)(e.$attrs.label)+" ",1),n.isRequired?((0,r.wg)(),(0,r.iD)("span",h,"*")):(0,r.kq)("",!0)],10,d)):(0,r.kq)("",!0)],2),(0,r._)("div",p,[(0,r.Wm)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[g.showErrorMessage&&!1===g.isValidate&&n.errorMessage?((0,r.wg)(),(0,r.iD)("p",{key:0,class:(0,i.C_)([n.customStyle.errorMessage,"error-message"])},(0,i.zw)(n.errorMessage),3)):(0,r.kq)("",!0)])),_:1})])],2)}var g={name:"vue-base-input",model:{prop:"title",event:"change"},props:{value:{type:String},isValid:{type:Boolean,default:null},inputType:{type:String,default:"text"},inputClass:{type:String,default:""},isRequired:{type:Boolean,default:!1},showBorder:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},showIconPassword:{type:Boolean,default:!0},errorMessage:{type:String,default:""},icon:{type:[Object,String],default:null},urlIconValid:{type:[Object,String],default:null},urlIconFaild:{type:[Object,String],default:null},urlIconOpenEyes:{type:[Object,String],default:null},urlIconCloseEyes:{type:[Object,String],default:null},regex:{type:[Object,String],default:null,example:"^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,}$"},labelInside:{type:Boolean,default:!1},customStyle:{type:Object,default(){return{borderIsValid:"border-valid",borderIsDefault:"border-default",borderIsBad:"border-faild",errorMessage:"error-color",label:"label-color",inputBgFull:"bg-full",inputBgEmpty:"bg-empty"}}}},computed:{getValueLength(){return""!==this.modelValue&&null!==this.modelValue?this.modelValue?.length:""},getIconCheck(){return!1===this.isValidate?this.urlIconFaild:this.urlIconValid},getIconEyes(){return this.showPassword?this.urlIconOpenEyes:this.urlIconCloseEyes},classBorder(){return this.isValidate&&this.showBorder&&this.returnValueByLength(this.getValueLength,!0,!1,1)?this.customStyle.borderIsValid:!1===this.isValidate?this.customStyle.borderIsBad:this.customStyle.borderIsDefault}},mounted(){this.getValueLength>1&&this.update(this.modelValue)},watch:{modelValue(e){this.update(e)},regex(){this.update(this.modelValue)}},data(){return{modelValue:this.value,isValidate:this.isValid,showErrorMessage:!1,showPassword:!1}},methods:{callUpdateIsValid(e){this.isValidate=e,e||(this.showErrorMessage=!0)},callResetValue(){this.modelValue="",this.update("")},returnValueByLength(e,t,n,r){return e>=r?t:n},testRegex(e){if(null!==this.regex&&""!==this.regex){const t=new RegExp(this.regex);return t.test(e)}return!0},update(e){this.isRequired&&this.testRegex(e)&&e.length>=1?this.isValidate=!0:this.isRequired&&!this.testRegex(e)&&e.length>=1?(this.isValidate=!1,this.showErrorMessage=!0):!this.isRequired&&e.length>=1?(this.isValidate=!0,this.showErrorMessage=!1):(this.isValidate=null,this.showErrorMessage=!1),this.$emit("update:value",e),this.$emit("update:isValid",this.isValidate)}}},v=n(744);const y=(0,v.Z)(g,[["render",m]]);var b=y},119:function(e,t,n){n.d(t,{PO:function(){return q},p7:function(){return tt}});var r=n(252),i=n(262);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>o?Symbol(e):"_vr_"+e,a=s("rvlm"),c=s("rvd"),l=s("r"),u=s("rl"),f=s("rvl"),d="undefined"!==typeof window;function h(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function b(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function k(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(t.matched[r],n.matched[i])&&S(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function S(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,O;(function(e){e["pop"]="pop",e["push"]="push"})(A||(A={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(O||(O={}));function x(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const R=/^[^#]+#/;function P(e,t){return e.replace(R,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=N(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function V(e,t){F.set(e,t)}function U(e){const t=F.get(e);return F.delete(e),t}let j=()=>location.protocol+"//"+location.host;function z(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function $(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=z(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:A.pop,direction:u?u>0?O.forward:O.back:O.unknown})}))};function c(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function f(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function H(e){const{history:t,location:n}=window,r={value:z(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:j()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=p({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=p({},i.value,t.state,{forward:e,scroll:L()});o(s.current,s,!0);const a=p({},B(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function q(e){e=x(e);const t=H(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:P.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function W(e){return"string"===typeof e||e&&"object"===typeof e}function J(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=s("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function X(e,t){return p(new Error,{type:e,[K]:!0},t)}function Z(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let i=n.start?"^":"";const o=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const f=c||Q;if(f!==Q){s+=10;try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}let d=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},se=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function f(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function le(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=fe(e);a.aliasOf=r&&r.record;const l=me(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let f,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ce(t,n,l),r?r.alias.push(f):(d=d||f,d!==f&&d.alias.push(f),i&&e.name&&!he(f)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,c(f)}return d?()=>{s(d)}:g}function s(e){if(J(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!he(e)&&r.set(e.record.name,e)}function l(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=p(ue(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=p({},t.params,e.params),o=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:l,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function he(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ve=/#/g,ye=/&/g,be=/\//g,we=/=/g,_e=/\?/g,ke=/\+/g,Ie=/%5B/g,Se=/%5D/g,Ee=/%5E/g,Te=/%60/g,Ce=/%7B/g,Ae=/%7C/g,Oe=/%7D/g,xe=/%20/g;function Re(e){return encodeURI(""+e).replace(Ae,"|").replace(Ie,"[").replace(Se,"]")}function Pe(e){return Re(e).replace(Ce,"{").replace(Oe,"}").replace(Ee,"^")}function Ne(e){return Re(e).replace(ke,"%2B").replace(xe,"+").replace(ve,"%23").replace(ye,"%26").replace(Te,"`").replace(Ce,"{").replace(Oe,"}").replace(Ee,"^")}function Le(e){return Ne(e).replace(we,"%3D")}function De(e){return Re(e).replace(ve,"%23").replace(_e,"%3F")}function Me(e){return null==e?"":De(e).replace(be,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ve(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ke," "),n=e.indexOf("="),o=Fe(n<0?e:e.slice(0,n)),s=n<0?null:Fe(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Ne(e))):[r&&Ne(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function ze(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Be(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push($e(c,n,r,o,e))}else{let a=s();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=h(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&$e(c,n,r,o,e)()}))))}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(I.bind(null,r));if(s>-1)return s;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(I.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ke(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&S(n.params,o.value.params)));function f(n={}){return Ge(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:f}}const We=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,i.qj)(qe(e)),{options:o}=(0,r.f3)(l),s=(0,r.Fl)((()=>({[Xe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Je=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(f),s=(0,r.Fl)((()=>e.route||o.value)),l=(0,r.f3)(c,0),u=(0,r.Fl)((()=>s.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(f,s);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&I(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const l=o.props[e.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,h=e=>{e.component.isUnmounted&&(o.instances[c]=null)},m=(0,r.h)(a,p({},f,t,{onVnodeUnmounted:h,ref:d}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=le(e.routes,e),n=e.parseQuery||Ve,o=e.stringifyQuery||Ue,s=e.history;const a=ze(),c=ze(),h=ze(),v=(0,i.XI)(G);let y=G;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=m.bind(null,(e=>""+e)),I=m.bind(null,Me),S=m.bind(null,Fe);function E(e,n){let r,i;return J(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function O(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=p({},r||v.value),"string"===typeof e){const i=b(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return p(i,o,{params:S(o.params),hash:Fe(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:b(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:I(e.params)}),r.params=I(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=_(S(a.params));const l=w(o,p({},e,{hash:Pe(c),path:a.path})),u=s.createHref(l);return p({fullPath:l,hash:c,query:o===Ue?je(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?b(n,e,v.value.path):p({},e)}function P(e,t){if(y!==e)return X(8,{from:t,to:e})}function N(e){return z(e)}function F(e){return N(p(R(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function z(e,t){const n=y=x(e),r=v.value,i=e.state,s=e.force,a=!0===e.replace,c=j(n);if(c)return z(p(R(c),{state:i,force:s,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!s&&k(o,r,n)&&(u=X(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):B(l,r)).catch((e=>Z(e)?Z(e,2)?e:re(e):te(e,l,r))).then((e=>{if(e){if(Z(e,2))return z(p(R(e.to),{state:i,force:s,replace:a}),t||l)}else e=q(l,r,!0,a,i);return H(l,r,e),e}))}function $(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,o]=rt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const s=$.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of a.list())n.push($e(r,e,t));return n.push(s),nt(n)})).then((()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(o,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push($e(r,e,t));return n.push(s),nt(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of h.list())r(e,t,n)}function q(e,t,n,r,i){const o=P(e,t);if(o)return o;const a=t===G,c=d?history.state:{};n&&(r||a?s.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),v.value=e,ie(e,t,n,a),re()}let W;function K(){W=s.listen(((e,t,n)=>{const r=x(e),i=j(r);if(i)return void z(p(i,{replace:!0}),r).catch(g);y=r;const o=v.value;d&&V(M(o.fullPath,n.delta),L()),B(r,o).catch((e=>Z(e,12)?e:Z(e,2)?(z(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===A.pop&&s.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),te(e,r,o)))).then((e=>{e=e||q(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===A.pop&&Z(e,20)&&s.go(-1,!1)),H(r,o,e)})).catch(g)}))}let Y,Q=ze(),ee=ze();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Y&&v.value!==G?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function re(e){return Y||(Y=!e,K(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ie(t,n,i,o){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!i&&U(M(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>s(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const oe=e=>s.go(e);let se;const ae=new Set,ce={currentRoute:v,addRoute:E,removeRoute:T,hasRoute:O,getRoutes:C,resolve:x,options:e,push:N,replace:F,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:a.add,beforeResolve:c.add,afterEach:h.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!se&&v.value===G&&(se=!0,N(s.location).catch((e=>{0})));const n={};for(const i in G)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(f,v);const o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=G,W&&W(),v.value=G,se=!1,Y=!1),o()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>I(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>I(e,a)))||i.push(a))}return[n,r,i]}},238:function(e,t,n){n.d(t,{Jn:function(){return W},KN:function(){return K},Mq:function(){return G},Xd:function(){return z},ZF:function(){return J},qX:function(){return $}});var r=n(463),i=n(333),o=n(444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.19",u=new i.Yd("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",k="@firebase/installations",I="@firebase/installations-compat",S="@firebase/messaging",E="@firebase/messaging-compat",T="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",O="@firebase/remote-config-compat",x="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",L="firebase",D="9.6.9",M="[DEFAULT]",F={[c]:"fire-core",[f]:"fire-core-compat",[h]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[k]:"fire-iid",[I]:"fire-iid-compat",[S]:"fire-fcm",[E]:"fire-fcm-compat",[T]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[O]:"fire-rc-compat",[x]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,U=new Map;function j(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of V.values())j(n,e);return!0}function $(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new o.LL("app","Firebase",B);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=D;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=V.get(i);if(s){if((0,o.vZ)(e,s.options)&&(0,o.vZ)(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new q(e,n,a);return V.set(i,c),c}function G(e=M){const t=V.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function K(e,t,n){var i;let o=null!==(i=F[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}z(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y="firebase-heartbeat-database",X=1,Z="firebase-heartbeat-store";let Q=null;function ee(){return Q||(Q=(0,o.X3)(Y,X,((e,t)=>{switch(t){case 0:e.createObjectStore(Z)}})).catch((e=>{throw H.create("storage-open",{originalErrorMessage:e.message})}))),Q}async function te(e){try{const t=await ee();return t.transaction(Z).objectStore(Z).get(re(e))}catch(t){throw H.create("storage-get",{originalErrorMessage:t.message})}}async function ne(e,t){try{const n=await ee(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(t,re(e)),r.complete}catch(n){throw H.create("storage-set",{originalErrorMessage:n.message})}}function re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=1024,oe=2592e6;class se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=ce(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ae(){const e=new Date;return e.toISOString().substring(0,10)}function ce(e,t=ie){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ue(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){z(new r.wA("platform-logger",(e=>new s(e)),"PRIVATE")),z(new r.wA("heartbeat",(e=>new se(e)),"PRIVATE")),K(c,l,e),K(c,l,"esm2017"),K("fire-js","")}fe("")},463:function(e,t,n){n.d(t,{H0:function(){return l},wA:function(){return i}});var r=n(444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Yd:function(){return l},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.dead221f.js.map