"use strict";(self["webpackChunkaugest"]=self["webpackChunkaugest"]||[]).push([[154],{2625:function(t,e,n){n.r(e),n.d(e,{default:function(){return Bl}});var r=n(9812),s=n(5893),i=n(4220);const o={class:"line-content-center"},a=(0,r._)("label",null,"日期：",-1),c={class:"line-content-center"},u=(0,r._)("label",null,"期限：",-1),l={class:"line-content-center"},h=(0,r._)("label",null,"不重复",-1),d=(0,r._)("label",null,null,-1),f=(0,r._)("label",null,"每天",-1),g=(0,r._)("label",null,"每周",-1),m=(0,r._)("label",null,"每月",-1),p=(0,r._)("label",null,"每年",-1),y=(0,r._)("label",null,"艾宾豪斯记忆法",-1),v={class:"line-content-center"},w={class:"line-content-center"},_=(0,r._)("label",null,"紧急",-1),E=(0,r._)("label",null,"重要",-1),b={class:"line-content-center left"},T={class:"card-content main-content",style:{"text-align":"left"},ref:"fqtMain"},C={class:"calendar-list"},S=["onClick"],I={key:0,class:"date"},D={key:1,class:"date"},A={key:2,class:"date"},k={key:3,class:"date"},N=["id"],x=["onClick"],M=["onPointerdown"],R=["id"],L={class:"list-item",style:{display:"flex","justify-content":"center"}},O={class:"axes x"},P=(0,r._)("div",{style:{"background-color":"#F96635"}},"重要",-1),V=[P],F={class:"axes y"},U=(0,r._)("div",{style:{"background-color":"#f9A822"}},"紧急",-1),B=[U];function j(t,e,n,P,U,j){const $=(0,r.up)("calender"),q=(0,r.up)("svg-icon"),z=(0,r.up)("my-model");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(z,{show:U.modal_show.addPlanShow,modalKey:"addPlanShow"},{default:(0,r.w5)((()=>[(0,r._)("div",o,[a,(0,r.Wm)($,{language:"EN",type:"input",style:{width:"150px"},class:"form-input",modelValue:U.management.date,"onUpdate:modelValue":e[0]||(e[0]=t=>U.management.date=t)},null,8,["modelValue"]),(0,r.Wm)(q,{class:(0,s.C_)({"text-button":!0,action:j.compareDate(U.management.date)}),name:"today",size:"16",onClick:e[1]||(e[1]=t=>j.getManagementDate())},null,8,["class"]),(0,r.Wm)(q,{class:(0,s.C_)({"text-button":!0,action:j.compareDate(U.management.date,1)}),name:"tomorrow",size:"16",onClick:e[2]||(e[2]=t=>j.getManagementDate(1))},null,8,["class"])]),(0,r._)("div",c,[u,(0,r.Wm)($,{language:"EN",type:"datetime",style:{width:"150px"},class:"form-input",modelValue:U.management.deadline,"onUpdate:modelValue":e[3]||(e[3]=t=>U.management.deadline=t)},null,8,["modelValue"]),(0,r.Wm)(q,{class:"text-button",name:"delete02",size:"16",onClick:e[4]||(e[4]=t=>U.management.deadline=null)})]),(0,r._)("div",l,[(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"0","onUpdate:modelValue":e[5]||(e[5]=t=>U.management.repeat=t)},null,512),[[i.G2,U.management.repeat]]),h,d,(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"1","onUpdate:modelValue":e[6]||(e[6]=t=>U.management.repeat=t),checked:""},null,512),[[i.G2,U.management.repeat]]),f,(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"7","onUpdate:modelValue":e[7]||(e[7]=t=>U.management.repeat=t)},null,512),[[i.G2,U.management.repeat]]),g,(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"30","onUpdate:modelValue":e[8]||(e[8]=t=>U.management.repeat=t)},null,512),[[i.G2,U.management.repeat]]),m,(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"-1","onUpdate:modelValue":e[9]||(e[9]=t=>U.management.repeat=t)},null,512),[[i.G2,U.management.repeat]]),p,(0,r.wy)((0,r._)("input",{class:"form-input",type:"radio",name:"repeat",value:"-2","onUpdate:modelValue":e[10]||(e[10]=t=>U.management.repeat=t)},null,512),[[i.G2,U.management.repeat]]),y]),(0,r._)("div",v,[(0,r.wy)((0,r._)("textarea",{placeholder:"做什么呢...",rows:"5","onUpdate:modelValue":e[11]||(e[11]=t=>U.management.content=t)},null,512),[[i.nr,U.management.content]])]),(0,r._)("div",w,[_,(0,r.wy)((0,r._)("input",{type:"checkbox",class:"circle form-input","onUpdate:modelValue":e[12]||(e[12]=t=>U.management.urgent=t),checked:""},null,512),[[i.e8,U.management.urgent]]),E,(0,r.wy)((0,r._)("input",{type:"checkbox",class:"circle form-input","onUpdate:modelValue":e[13]||(e[13]=t=>U.management.important=t)},null,512),[[i.e8,U.management.important]])]),(0,r._)("div",b,[(0,r._)("button",{class:"fill",onClick:e[14]||(e[14]=t=>j.addManagement())},(0,s.zw)(U.updateIndex?"修改计划":"新增计划"),1)])])),_:1},8,["show"]),(0,r._)("div",T,[(0,r._)("div",C,[(0,r.Wm)(q,{name:"arrow-left",className:"date-item",onClick:j.preWeek},null,8,["onClick"]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(U.currentWeek,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"date-item",onClick:e=>j.toDate(j.getFormattedDate(t))},[j.getFormattedDate(t)==j.getFormattedDate(U.today)?((0,r.wg)(),(0,r.iD)("div",I,[(0,r.Wm)(q,{name:"today"})])):j.getFormattedDate(t)==j.getFormattedDate(U.today,1)?((0,r.wg)(),(0,r.iD)("div",D,[(0,r.Wm)(q,{name:"tomorrow"})])):j.getFormattedDate(t)==j.getFormattedDate(U.today,-1)?((0,r.wg)(),(0,r.iD)("div",A,[(0,r.Wm)(q,{name:"yesterday"})])):((0,r.wg)(),(0,r.iD)("div",k,(0,s.zw)(t.getDate()),1))],8,S)))),128)),(0,r.Wm)(q,{name:"arrow-right",className:"date-item",onClick:j.nextWeek},null,8,["onClick"]),(0,r.Wm)(q,{name:"letter-plus01",className:"date-item",onClick:e[15]||(e[15]=t=>j.showAddPlan())}),(0,r.Wm)(q,{name:"refresh02",class:"update-icon",className:"date-item",onClick:e[16]||(e[16]=t=>j.getCurManagementData(U.currentDate))}),(0,r.Wm)(q,{name:"upload01",className:"date-item",onClick:j.saveJson},null,8,["onClick"])]),(0,r.Uk)(" "+(0,s.zw)(U.currentDate)+" ",1),(0,r._)("div",{class:(0,s.C_)({"quadrant-container":!0,draging:U.draged})},[(0,r.wy)((0,r._)("div",{class:(0,s.C_)(j.dragedManagementClass),ref:"dragedManagement"},[(0,r.Wm)(q,{name:"dot01",size:"16",className:"dot",style:(0,s.j5)(j.dragedDotColor)},null,8,["style"]),(0,r.Uk)(" "+(0,s.zw)(U.dragedManagement?U.dragedManagement.content:""),1)],2),[[i.F8,U.draged]]),((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(4,(t=>(0,r._)("div",{class:"quadrant-box",id:`quadrantList${t}`},[(0,r._)("div",{class:(0,s.C_)(["quadrant-list"]),onClick:e=>j.showAddPlan(t)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(U.currentManagementList[t-1],(n=>((0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["list-item","item-"+(t-1)]),onClick:e[19]||(e[19]=(0,i.iM)((()=>{}),["stop"])),onPointerdown:t=>j.listItemDown(t,n)},[(0,r._)("div",{class:"content",style:(0,s.j5)({textDecoration:j.itemFinished(n)?"line-through":"none"})},[(0,r.Wm)(q,{name:"dot01",size:"16",className:"dot",style:(0,s.j5)({color:U.fourColors[t-1]})},null,8,["style"]),(0,r.Uk)(" "+(0,s.zw)(n.content),1)],4),(0,r._)("div",{id:`planIndex${n.index}`,class:"line-content-center"},[(0,r.Wm)(q,{name:"flag01",size:"16",className:"dot",style:(0,s.j5)({color:U.fourColors[t-1]}),onClick:[e[17]||(e[17]=(0,i.iM)((()=>{}),["stop"])),t=>j.finishItem(n)]},null,8,["style","onClick"]),(0,r.Wm)(q,{name:"delete02",size:"16",className:"dot",style:(0,s.j5)({color:U.fourColors[t-1]}),onClick:[e[18]||(e[18]=(0,i.iM)((()=>{}),["stop"])),t=>j.deleteItem(n)]},null,8,["style","onClick"])],8,R)],42,M)))),256)),(0,r.wy)((0,r._)("div",L,[(0,r._)("div",{class:(0,s.C_)(["list-add-button-"+(t-1)])},"+",2)],512),[[i.F8,!1]])],8,x)],8,N))),64)),(0,r.wy)((0,r._)("div",O,V,512),[[i.F8,!0]]),(0,r.wy)((0,r._)("div",F,B,512),[[i.F8,!0]])],2)],512)],64)}n(7658);var $=n(27);n(1439),n(7585),n(5315),n(2801);
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
const q=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},z=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw new G;const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class G extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H=function(t){const e=q(t);return K.encodeByteArray(e,!0)},W=function(t){return H(t).replace(/\./g,"")},Q=function(t){try{return K.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */
function X(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const Y=()=>X().__FIREBASE_DEFAULTS__,J=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},Z=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Q(t[1]);return e&&JSON.parse(e)},tt=()=>{try{return Y()||J()||Z()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},et=t=>{var e,n;return null===(n=null===(e=tt())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},nt=t=>{const e=et(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rt=()=>{var t;return null===(t=tt())||void 0===t?void 0:t.config};
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
class st{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function it(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[W(JSON.stringify(n)),W(JSON.stringify(o)),a].join(".")}
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
 */function ot(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function at(){var t;const e=null===(t=tt())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function ct(){return!at()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ut(){try{return"object"===typeof indexedDB}catch(t){return!1}}function lt(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const ht="FirebaseError";class dt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=ht,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}}class ft{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?gt(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new dt(r,o,n);return a}}function gt(t,e){return t.replace(mt,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const mt=/\{\$([^}]+)}/g;
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
 */function pt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(yt(n)&&yt(i)){if(!pt(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yt(t){return null!==t&&"object"===typeof t}
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
function vt(t){return t&&t._delegate?t._delegate:t}class wt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const _t="[DEFAULT]";
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
 */class Et{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new st;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(Tt(t))try{this.getOrInitializeService({instanceIdentifier:_t})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=_t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=_t){return this.instances.has(t)}getOptions(t=_t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:bt(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=_t){return this.component?this.component.multipleInstances?t:_t:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function bt(t){return t===_t?void 0:t}function Tt(t){return"EAGER"===t.instantiationMode}
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
 */class Ct{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Et(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
const St=[];var It;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(It||(It={}));const Dt={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},At=It.INFO,kt={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},Nt=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=kt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class xt{constructor(t){this.name=t,this._logLevel=At,this._logHandler=Nt,this._userLogHandler=null,St.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?Dt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const Mt=(t,e)=>e.some((e=>t instanceof e));let Rt,Lt;function Ot(){return Rt||(Rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pt(){return Lt||(Lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vt=new WeakMap,Ft=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,jt=new WeakMap;function $t(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(Wt(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&Vt.set(e,t)})).catch((()=>{})),jt.set(e,t),e}function qt(t){if(Ft.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));Ft.set(t,e)}let zt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Ft.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Ut.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function Kt(t){zt=t(zt)}function Gt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Pt().includes(t)?function(...e){return t.apply(Qt(this),e),Wt(Vt.get(this))}:function(...e){return Wt(t.apply(Qt(this),e))}:function(e,...n){const r=t.call(Qt(this),e,...n);return Ut.set(r,e.sort?e.sort():[e]),Wt(r)}}function Ht(t){return"function"===typeof t?Gt(t):(t instanceof IDBTransaction&&qt(t),Mt(t,Ot())?new Proxy(t,zt):t)}function Wt(t){if(t instanceof IDBRequest)return $t(t);if(Bt.has(t))return Bt.get(t);const e=Ht(t);return e!==t&&(Bt.set(t,e),jt.set(e,t)),e}const Qt=t=>jt.get(t);function Xt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Wt(o.result),t.oldVersion,t.newVersion,Wt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Yt=["get","getKey","getAll","getAllKeys","count"],Jt=["put","add","delete","clear"],Zt=new Map;function te(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(Zt.get(e))return Zt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Jt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Yt.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return Zt.set(e,i),i}Kt((t=>({...t,get:(e,n,r)=>te(e,n)||t.get(e,n,r),has:(e,n)=>!!te(e,n)||t.has(e,n)})));
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
class ee{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(ne(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function ne(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const re="@firebase/app",se="0.10.10",ie=new xt("@firebase/app"),oe="@firebase/app-compat",ae="@firebase/analytics-compat",ce="@firebase/analytics",ue="@firebase/app-check-compat",le="@firebase/app-check",he="@firebase/auth",de="@firebase/auth-compat",fe="@firebase/database",ge="@firebase/database-compat",me="@firebase/functions",pe="@firebase/functions-compat",ye="@firebase/installations",ve="@firebase/installations-compat",we="@firebase/messaging",_e="@firebase/messaging-compat",Ee="@firebase/performance",be="@firebase/performance-compat",Te="@firebase/remote-config",Ce="@firebase/remote-config-compat",Se="@firebase/storage",Ie="@firebase/storage-compat",De="@firebase/firestore",Ae="@firebase/vertexai-preview",ke="@firebase/firestore-compat",Ne="firebase",xe="10.13.1",Me="[DEFAULT]",Re={[re]:"fire-core",[oe]:"fire-core-compat",[ce]:"fire-analytics",[ae]:"fire-analytics-compat",[le]:"fire-app-check",[ue]:"fire-app-check-compat",[he]:"fire-auth",[de]:"fire-auth-compat",[fe]:"fire-rtdb",[ge]:"fire-rtdb-compat",[me]:"fire-fn",[pe]:"fire-fn-compat",[ye]:"fire-iid",[ve]:"fire-iid-compat",[we]:"fire-fcm",[_e]:"fire-fcm-compat",[Ee]:"fire-perf",[be]:"fire-perf-compat",[Te]:"fire-rc",[Ce]:"fire-rc-compat",[Se]:"fire-gcs",[Ie]:"fire-gcs-compat",[De]:"fire-fst",[ke]:"fire-fst-compat",[Ae]:"fire-vertex","fire-js":"fire-js",[Ne]:"fire-js-all"},Le=new Map,Oe=new Map,Pe=new Map;function Ve(t,e){try{t.container.addComponent(e)}catch(n){ie.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fe(t){const e=t.name;if(Pe.has(e))return ie.debug(`There were multiple attempts to register component ${e}.`),!1;Pe.set(e,t);for(const n of Le.values())Ve(n,t);for(const n of Oe.values())Ve(n,t);return!0}function Ue(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Be={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},je=new ft("app","Firebase",Be);
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
class $e{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
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
const qe=xe;function ze(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:Me,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!==typeof s||!s)throw je.create("bad-app-name",{appName:String(s)});if(n||(n=rt()),!n)throw je.create("no-options");const i=Le.get(s);if(i){if(pt(n,i.options)&&pt(r,i.config))return i;throw je.create("duplicate-app",{appName:s})}const o=new Ct(s);for(const c of Pe.values())o.addComponent(c);const a=new $e(n,r,o);return Le.set(s,a),a}function Ke(t=Me){const e=Le.get(t);if(!e&&t===Me&&rt())return ze();if(!e)throw je.create("no-app",{appName:t});return e}function Ge(t,e,n){var r;let s=null!==(r=Re[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ie.warn(t.join(" "))}Fe(new wt(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const He="firebase-heartbeat-database",We=1,Qe="firebase-heartbeat-store";let Xe=null;function Ye(){return Xe||(Xe=Xt(He,We,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qe)}catch(n){console.warn(n)}}}}).catch((t=>{throw je.create("idb-open",{originalErrorMessage:t.message})}))),Xe}async function Je(t){try{const e=await Ye(),n=e.transaction(Qe),r=await n.objectStore(Qe).get(tn(t));return await n.done,r}catch(e){if(e instanceof dt)ie.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});ie.warn(t.message)}}}async function Ze(t,e){try{const n=await Ye(),r=n.transaction(Qe,"readwrite"),s=r.objectStore(Qe);await s.put(e,tn(t)),await r.done}catch(n){if(n instanceof dt)ie.warn(n.message);else{const t=je.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});ie.warn(t.message)}}}function tn(t){return`${t.name}!${t.options.appId}`}
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
 */const en=1024,nn=2592e6;class rn{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new an(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),s=sn();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((t=>t.date===s)))return;return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=nn})),this._storage.overwrite(this._heartbeatsCache)}catch(n){ie.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=sn(),{heartbeatsToSend:n,unsentEntries:r}=on(this._heartbeatsCache.heartbeats),s=W(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ie.warn(e),""}}}function sn(){const t=new Date;return t.toISOString().substring(0,10)}function on(t,e=en){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),cn(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class an{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ut()&&lt().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Je(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function cn(t){return W(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function un(t){Fe(new wt("platform-logger",(t=>new ee(t)),"PRIVATE")),Fe(new wt("heartbeat",(t=>new rn(t)),"PRIVATE")),Ge(re,se,t),Ge(re,se,"esm2017"),Ge("fire-js","")}un("");var ln,hn,dn="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},fn={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function i(t,e){var n=a;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function o(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},r.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)s(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){s(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){s(this,r),i=0;break}}this.h=i,this.o+=e},r.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var a={};function c(t){return-128<=t&&128>t?i(t,(function(t){return new o([0|t],0>t?-1:0)})):new o([0|t],0>t?-1:0)}function u(t){if(isNaN(t)||!isFinite(t))return h;if(0>t)return p(u(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new o(e,0)}function l(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return p(l(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=u(Math.pow(e,8)),r=h,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=u(Math.pow(e,i)),r=r.j(i).add(u(o))):(r=r.j(n),r=r.add(u(o)))}return r}var h=c(0),d=c(1),f=c(16777216);function g(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function m(t){return-1==t.h}function p(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new o(n,~t.h).add(d)}function y(t,e){return t.add(p(e))}function v(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function w(t,e){this.g=t,this.h=e}function _(t,e){if(g(e))throw Error("division by zero");if(g(t))return new w(h,h);if(m(t))return e=_(p(t),e),new w(p(e.g),p(e.h));if(m(e))return e=_(t,p(e)),new w(p(e.g),e.h);if(30<t.g.length){if(m(t)||m(e))throw Error("slowDivide_ only works with positive integers.");for(var n=d,r=e;0>=r.l(t);)n=E(n),r=E(r);var s=b(n,1),i=b(r,1);for(r=b(r,2),n=b(n,2);!g(r);){var o=i.add(r);0>=o.l(t)&&(s=s.add(n),i=o),r=b(r,1),n=b(n,1)}return e=y(t,s.j(e)),new w(s,e)}for(s=h;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=u(n),o=i.j(e);m(o)||0<o.l(t);)n-=r,i=u(n),o=i.j(e);g(i)&&(i=d),s=s.add(i),t=y(t,o)}return new w(s,t)}function E(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new o(n,t.h)}function b(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new o(s,t.h)}t=o.prototype,t.m=function(){if(m(this))return-p(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(g(this))return"0";if(m(this))return"-"+p(this).toString(t);for(var e=u(Math.pow(t,6)),n=this,r="";;){var s=_(n,e).g;n=y(n,s.j(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,g(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=y(this,t),m(t)?-1:g(t)?0:1},t.abs=function(){return m(this)?p(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.i(s))+(65535&t.i(s)),a=(i>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=a>>>16,i&=65535,a&=65535,n[s]=a<<16|i}return new o(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(g(this)||g(t))return h;if(m(this))return m(t)?p(this).j(p(t)):p(p(this).j(t));if(m(t))return p(this.j(p(t)));if(0>this.l(f)&&0>t.l(f))return u(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.i(r)>>>16,a=65535&this.i(r),c=t.i(s)>>>16,l=65535&t.i(s);n[2*r+2*s]+=a*l,v(n,2*r+2*s),n[2*r+2*s+1]+=i*l,v(n,2*r+2*s+1),n[2*r+2*s+1]+=a*c,v(n,2*r+2*s+1),n[2*r+2*s+2]+=i*c,v(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new o(n,0)},t.A=function(t){return _(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new o(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new o(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new o(n,this.h^t.h)},r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hn=fn.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=l,ln=fn.Integer=o}).apply("undefined"!==typeof dn?dn:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var gn,mn,pn,yn,vn,wn,_n,En,bn,Tn="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Cn={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Tn&&Tn];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function s(t,n){if(n)t:{var s=r;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}t=t[t.length-1],i=s[t],n=n(i),n!=i&&null!=n&&e(s,t,{configurable:!0,writable:!0,value:n})}}function i(t,e){t instanceof String&&(t+="");var n=0,r=!1,s={next:function(){if(!r&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}s("Array.prototype.values",(function(t){return t||function(){return i(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function h(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function d(t,e,n){return d=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:h,d.apply(null,arguments)}function f(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function g(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function m(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function p(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}class y{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function v(t){return/^[\s\xa0]*$/.test(t)}function w(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function _(t){return _[" "](t),t}_[" "]=function(){};var E=-1!=w().indexOf("Gecko")&&!(-1!=w().toLowerCase().indexOf("webkit")&&-1==w().indexOf("Edge"))&&!(-1!=w().indexOf("Trident")||-1!=w().indexOf("MSIE"))&&-1==w().indexOf("Edge");function b(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function T(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function C(t){const e={};for(const n in t)e[n]=t[n];return e}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<S.length;e++)n=S[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function D(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function A(t){a.setTimeout((()=>{throw t}),0)}function k(){var t=O;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class N{constructor(){this.h=this.g=null}add(t,e){const n=x.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var x=new y((()=>new M),(t=>t.reset()));class M{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let R,L=!1,O=new N,P=()=>{const t=a.Promise.resolve(void 0);R=()=>{t.then(V)}};var V=()=>{for(var t;t=k();){try{t.h.call(t.g)}catch(n){A(n)}var e=x;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}L=!1};function F(){this.s=this.s,this.C=this.C}function U(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},U.prototype.h=function(){this.defaultPrevented=!0};var B=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function j(t,e){if(U.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(E){t:{try{_(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&j.aa.h.call(this)}}g(j,U);var $={2:"touch",3:"pen",4:"mouse"};j.prototype.h=function(){j.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),z=0;function K(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++z,this.da=this.fa=!1}function G(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function H(t){this.src=t,this.g={},this.h=0}function W(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(G(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Q(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}H.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Q(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new K(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var X="closure_lm_"+(1e6*Math.random()|0),Y={};function J(t,e,n,r,s){if(r&&r.once)return et(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)J(t,e[i],n,r,s);return null}return n=ct(n),t&&t[q]?t.K(e,n,u(r)?!!r.capture:!!r,s):Z(t,e,n,!1,r,s)}function Z(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=u(s)?!!s.capture:!!s,a=ot(t);if(a||(t[X]=a=new H(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=tt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)B||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(st(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function tt(){function t(n){return e.call(t.src,t.listener,n)}const e=it;return t}function et(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)et(t,e[i],n,r,s);return null}return n=ct(n),t&&t[q]?t.L(e,n,u(r)?!!r.capture:!!r,s):Z(t,e,n,!0,r,s)}function nt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)nt(t,e[i],n,r,s);else r=u(r)?!!r.capture:!!r,n=ct(n),t&&t[q]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Q(i,n,r,s),-1<n&&(G(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Q(e,n,r,s)),(n=-1<t?e[t]:null)&&rt(n))}function rt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[q])W(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(st(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ot(e))?(W(n,t),0==n.h&&(n.src=null,e[X]=null)):G(t)}}}function st(t){return t in Y?Y[t]:Y[t]="on"+t}function it(t,e){if(t.da)t=!0;else{e=new j(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&rt(t),t=n.call(r,e)}return t}function ot(t){return t=t[X],t instanceof H?t:null}var at="__closure_events_fn_"+(1e9*Math.random()>>>0);function ct(t){return"function"===typeof t?t:(t[at]||(t[at]=function(e){return t.handleEvent(e)}),t[at])}function ut(){F.call(this),this.i=new H(this),this.M=this,this.F=null}function lt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new U(e,t);else if(e instanceof U)e.target=e.target||t;else{var s=e;e=new U(r,t),I(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ht(o,r,!0,e)&&s}if(o=e.g=t,s=ht(o,r,!0,e)&&s,s=ht(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ht(o,r,!1,e)&&s}function ht(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&W(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}function dt(t,e,n){if("function"===typeof t)n&&(t=d(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=d(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function ft(t){t.g=dt((()=>{t.g=null,t.i&&(t.i=!1,ft(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}g(ut,F),ut.prototype[q]=!0,ut.prototype.removeEventListener=function(t,e,n,r){nt(this,t,e,n,r)},ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)G(n[r]);delete e.g[t],e.h--}}this.F=null},ut.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ut.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class gt extends F{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(t){F.call(this),this.h=t,this.g={}}g(mt,F);var pt=[];function yt(t){b(t.g,(function(t,e){this.g.hasOwnProperty(e)&&rt(t)}),t),t.g={}}mt.prototype.N=function(){mt.aa.N.call(this),yt(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=a.JSON.stringify,wt=a.JSON.parse,_t=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Et(){}function bt(t){return t.h||(t.h=t.i())}function Tt(){}Et.prototype.h=null;var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function St(){U.call(this,"d")}function It(){U.call(this,"c")}g(St,U),g(It,U);var Dt={},At=null;function kt(){return At=At||new ut}function Nt(t){U.call(this,Dt.La,t)}function xt(t){const e=kt();lt(e,new Nt(e))}function Mt(t,e){U.call(this,Dt.STAT_EVENT,t),this.stat=e}function Rt(t){const e=kt();lt(e,new Mt(e,t))}function Lt(t,e){U.call(this,Dt.Ma,t),this.size=e}function Ot(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Pt(){this.g=!0}function Vt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Ft(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Ut(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+jt(t,n)+(r?" "+r:"")}))}function Bt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function jt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return vt(n)}catch(a){return e}}Dt.La="serverreachability",g(Nt,U),Dt.STAT_EVENT="statevent",g(Mt,U),Dt.Ma="timingevent",g(Lt,U),Pt.prototype.xa=function(){this.g=!1},Pt.prototype.info=function(){};var $t,qt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Kt(){}function Gt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ht}function Ht(){this.i=null,this.g="",this.h=!1}g(Kt,Et),Kt.prototype.g=function(){return new XMLHttpRequest},Kt.prototype.i=function(){return{}},$t=new Kt;var Wt={},Qt={};function Xt(t,e,n){t.L=1,t.v=Se(_e(e)),t.m=n,t.P=!0,Yt(t,null)}function Yt(t,e){t.F=Date.now(),te(t),t.A=_e(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Fe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Ht,t.g=qn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new gt(d(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(pt[0]=s.toString()),s=pt);for(var i=0;i<s.length;i++){var o=J(n,s[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?C(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xt(),Vt(t.i,t.u,t.A,t.l,t.R,t.m)}function Jt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Zt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Qt:(n=Number(e.substring(n,r)),isNaN(n)?Wt:(r+=1,r+n>e.length?Qt:(e=e.slice(r,r+n),t.C=r+n,e)))}function te(t){t.S=Date.now()+t.I,ee(t,t.I)}function ee(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ot(d(t.ba,t),e)}function ne(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function re(t){0==t.j.G||t.J||Fn(t.j,t)}function se(t){ne(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,yt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ie(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||le(n.h,t)))if(!t.K&&le(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Vn(n),Sn(n)}Ln(n),Rt(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ot(d(n.Za,n),6e3));if(1>=ue(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Bn(n,11)}else if((t.K||n.g==t)&&Vn(n),!v(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=u[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(he(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Ce(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){de(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(ne(a),te(a)),r.g=o}else Rn(r);0<n.i.length&&An(n)}else"stop"!=u[0]&&"close"!=u[0]||Bn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Bn(n,7):fn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}xt(4)}catch(u){}}Gt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==cn(t)?e.j():this.Y(t)},Gt.prototype.Y=function(t){try{if(t==this.g)t:{const d=cn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||un(this.g)))){this.J||4!=d||7==e||xt(8==e||0>=f?3:2),ne(this);var n=this.g.Z();this.X=n;e:if(Jt(this)){var r=un(this.g);t="";var s=r.length,i=4==cn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){se(this),re(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(i&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Ft(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Rt(12),se(this),re(this);break t}Ut(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ie(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=Zt(this,o),t==Qt){4==d&&(this.s=4,Rt(14),n=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}if(t==Wt){this.s=4,Rt(15),Ut(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ut(this.i,this.l,t,null),ie(this,t)}if(Jt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Rt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),On(h),h.M=!0,Rt(11))}}else Ut(this.i,this.l,o,"[Invalid Chunked Response]"),se(this),re(this)}else Ut(this.i,this.l,o,null),ie(this,o);4==d&&se(this),this.o&&!this.J&&(4==d?Fn(this.j,this):(this.o=!1,te(this)))}else ln(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),se(this),re(this)}}}catch(d){}},Gt.prototype.cancel=function(){this.J=!0,se(this)},Gt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Bt(this.i,this.A),2!=this.L&&(xt(),Rt(17)),se(this),this.s=2,re(this)):ee(this,this.S-t)};var oe=class{constructor(t,e){this.g=t,this.map=e}};function ae(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ce(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ue(t){return t.h?1:t.g?t.g.size:0}function le(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function he(t,e){t.g?t.g.add(e):t.h=e}function de(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function fe(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return m(t.i)}function ge(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function me(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=me(t),r=ge(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}ae.prototype.cancel=function(){if(this.i=fe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ye=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function we(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof we){this.h=t.h,Ee(this,t.j),this.o=t.o,this.g=t.g,be(this,t.s),this.l=t.l;var e=t.i,n=new Le;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Te(this,n),this.m=t.m}else t&&(e=String(t).match(ye))?(this.h=!1,Ee(this,e[1]||"",!0),this.o=Ie(e[2]||""),this.g=Ie(e[3]||"",!0),be(this,e[4]),this.l=Ie(e[5]||"",!0),Te(this,e[6]||"",!0),this.m=Ie(e[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}function _e(t){return new we(t)}function Ee(t,e,n){t.j=n?Ie(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Te(t,e,n){e instanceof Le?(t.i=e,Be(t.i,t.h)):(n||(e=De(e,Me)),t.i=new Le(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Se(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ie(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function De(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ae),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ae(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}we.prototype.toString=function(){var t=[],e=this.j;e&&t.push(De(e,ke,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(De(e,ke,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(De(n,"/"==n.charAt(0)?xe:Ne,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",De(n,Re)),t.join("")};var ke=/[#\/\?@]/g,Ne=/[#\?:]/g,xe=/[#\?]/g,Me=/[#\?@]/g,Re=/#/g;function Le(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oe(t){t.g||(t.g=new Map,t.h=0,t.i&&ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Pe(t,e){Oe(t),e=Ue(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ve(t,e){return Oe(t),e=Ue(t,e),t.g.has(e)}function Fe(t,e,n){Pe(t,e),0<n.length&&(t.i=null,t.g.set(Ue(t,e),m(n)),t.h+=n.length)}function Ue(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Be(t,e){e&&!t.j&&(Oe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Pe(this,e),Fe(this,n,t))}),t)),t.j=e}function je(t,e){const n=new Pt;if(a.Image){const r=new Image;r.onload=f(qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=f(qe,n,"TestLoadImage: error",!1,e,r),r.onabort=f(qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=f(qe,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function $e(t,e){const n=new Pt,r=new AbortController,s=setTimeout((()=>{r.abort(),qe(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(s),t.ok?qe(n,"TestPingServer: ok",!0,e):qe(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(s),qe(n,"TestPingServer: error",!1,e)}))}function qe(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function ze(){this.g=new _t}function Ke(t,e,n){const r=n||"";try{pe(t,(function(t,n){let s=t;u(t)&&(s=vt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ge(t){this.l=t.Ub||null,this.j=t.eb||!1}function He(t,e){ut.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function We(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Qe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Xe(t)}function Xe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ye(t){let e="";return b(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Je(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ye(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ce(t,e,n))}function Ze(t){ut.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Le.prototype,t.add=function(t,e){Oe(this),this.i=null,t=Ue(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Oe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Oe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},t.V=function(t){Oe(this);let e=[];if("string"===typeof t)Ve(this,t)&&(e=e.concat(this.g.get(Ue(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Oe(this),this.i=null,t=Ue(this,t),Ve(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")},g(Ge,Et),Ge.prototype.g=function(){return new He(this.l,this.j)},Ge.prototype.i=function(t){return function(){return t}}({}),g(He,ut),t=He.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Xe(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;We(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qe(this):Xe(this),3==this.readyState&&We(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Qe(this))},t.Qa=function(t){this.g&&(this.response=t,Qe(this))},t.ga=function(){this.g&&Qe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(He.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),g(Ze,ut);var tn=/^https?$/i,en=["POST","PUT"];function nn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,rn(t),on(t)}function rn(t){t.A||(t.A=!0,lt(t,"complete"),lt(t,"error"))}function sn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=cn(t)||2!=t.Z()))if(t.u&&4==cn(t))dt(t.Ea,0,t);else if(lt(t,"readystatechange"),4==cn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.D).match(ye)[1]||null;!s&&a.self&&a.self.location&&(s=a.self.location.protocol.slice(0,-1)),r=!tn.test(s?s.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var i=2<cn(t)?t.g.statusText:""}catch(c){i=""}t.l=i+" ["+t.Z()+"]",rn(t)}}finally{on(t)}}}function on(t,e){if(t.g){an(t);const r=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||lt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function an(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function cn(t){return t.g?t.g.readyState:0}function un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Dn){return null}}function ln(t){const e={};t=(t.g&&2<=cn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(v(t[r]))continue;var n=D(t[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}T(e,(function(t){return t.join(", ")}))}function hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dn(t){this.Aa=0,this.i=[],this.j=new Pt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,t),this.cb=hn("retryDelaySeedMs",1e4,t),this.Wa=hn("forwardChannelMaxRetries",2,t),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ae(t&&t.concurrentRequestLimit),this.Da=new ze,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function fn(t){if(In(t),3==t.G){var e=t.U++,n=_e(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),xn(t,n),e=new Gt(t,t.j,e),e.L=2,e.v=Se(_e(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=qn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),te(e)}jn(t)}function Sn(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function In(t){Sn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Vn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function An(t){if(!ce(t.h)&&!t.s){t.s=!0;var e=t.Ga;R||P(),L||(R(),L=!0),O.add(e,t),t.B=0}}function kn(t,e){return!(ue(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Ot(d(t.Ga,t,e),Un(t,t.B)),t.B++,!0))}function Nn(t,e){var n;n=e?e.l:t.U++;const r=_e(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.T),xn(t,r),t.m&&t.o&&Je(r,t.m,t.o),n=new Gt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Mn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),he(t.h,n),Xt(n,r,e)}function xn(t,e){t.H&&b(t.H,(function(t,n){Ce(e,n,t)})),t.l&&pe({},(function(t,n){Ce(e,n,t)}))}function Mn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?d(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{Ke(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Rn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;R||P(),L||(R(),L=!0),O.add(e,t),t.v=0}}function Ln(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ot(d(t.Fa,t),Un(t,t.v)),t.v++,!0)}function On(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Pn(t){t.g=new Gt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=_e(t.qa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.T),Ce(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Ce(e,"TO",t.ja),Ce(e,"TYPE","xmlhttp"),xn(t,e),t.m&&t.o&&Je(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Se(_e(e)),n.m=null,n.P=!0,Yt(n,t)}function Vn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Fn(t,e){var n=null;if(t.g==e){Vn(t),On(t),t.g=null;var r=2}else{if(!le(t.h,e))return;n=e.D,de(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;r=kt(),lt(r,new Lt(r,n)),An(t)}else Rn(t);else if(s=e.s,3==s||0==s&&0<e.X||!(1==r&&kn(t,e)||2==r&&Ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Un(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=d(t.fb,t),r=t.Xa;const e=!r;r=new we(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ee(r,"https"),Se(r),e?je(r.toString(),n):$e(r.toString(),n)}else Rt(2);t.G=0,t.l&&t.l.sa(e),jn(t),In(t)}function jn(t){if(t.G=0,t.ka=[],t.l){const e=fe(t.h);0==e.length&&0==t.i.length||(p(t.ka,e),p(t.ka,t.i),t.h.i.length=0,m(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof we?_e(n):new we(n);if(""!=r.g)e&&(r.g=e+"."+r.g),be(r,r.s);else{var s=a.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new we(null);r&&Ee(i,r),e&&(i.g=e),s&&be(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.ya,n&&e&&Ce(r,n,e),Ce(r,"VER",t.la),xn(t,r),r}function qn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new Ze(new Ge({eb:n})):new Ze(t.pa),e.Ha(t.J),e}function zn(){}function Kn(){}function Gn(t,e){ut.call(this),this.g=new dn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!v(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!v(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Hn(t){St.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){It.call(this),this.status=1}function Qn(t){this.g=t}t=Ze.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$t.g(),this.v=this.o?bt(this.o):bt($t),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(i){return void nn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(en,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{an(this),this.u=!0,this.g.send(t),this.u=!1}catch(i){nn(this,i)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),on(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sn(this):this.bb())},t.bb=function(){sn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=dn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){Rt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),An(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Gt(this,this.j,t);let i=this.o;if(this.S&&(i?(i=C(i),I(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Mn(this,s,e),n=_e(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),xn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ye(i)))+"&"+e:this.m&&Je(n,this.m,i)),he(this.h,s),this.Ua&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.T=!0,Xt(s,n,null)):Xt(s,n,e),this.G=2}}else 3==this.G&&(t?Nn(this,t):0==this.i.length||ce(this.h)||Nn(this))},t.Fa=function(){if(this.u=null,Pn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ot(d(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Sn(this),Pn(this))},t.Za=function(){null!=this.C&&(this.C=null,Sn(this),Ln(this),Rt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=zn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Kn.prototype.g=function(t,e){return new Gn(t,e)},g(Gn,ut),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){fn(this.g)},Gn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=vt(t),t=n);e.i.push(new oe(e.Ya++,t)),3==e.G&&An(e)},Gn.prototype.N=function(){this.g.l=null,delete this.j,fn(this.g),delete this.g,Gn.aa.N.call(this)},g(Hn,St),g(Wn,It),g(Qn,zn),Qn.prototype.ua=function(){lt(this.g,"a")},Qn.prototype.ta=function(t){lt(this.g,new Hn(t))},Qn.prototype.sa=function(t){lt(this.g,new Wn)},Qn.prototype.ra=function(){lt(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,bn=Cn.createWebChannelTransport=function(){return new Kn},En=Cn.getStatEventTarget=function(){return kt()},_n=Cn.Event=Dt,wn=Cn.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qt.NO_ERROR=0,qt.TIMEOUT=8,qt.HTTP_ERROR=6,vn=Cn.ErrorCode=qt,zt.COMPLETE="complete",yn=Cn.EventType=zt,Tt.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",ut.prototype.listen=ut.prototype.K,pn=Cn.WebChannel=Tt,mn=Cn.FetchXmlHttpFactory=Ge,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,gn=Cn.XhrIo=Ze}).apply("undefined"!==typeof Tn?Tn:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const Sn="@firebase/firestore";
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
 */class In{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}In.UNAUTHENTICATED=new In(null),In.GOOGLE_CREDENTIALS=new In("google-credentials-uid"),In.FIRST_PARTY=new In("first-party-uid"),In.MOCK_USER=new In("mock-user");
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
let Dn="10.13.1";
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
 */const An=new xt("@firebase/firestore");function kn(){return An.logLevel}function Nn(t,...e){if(An.logLevel<=It.DEBUG){const n=e.map(Rn);An.debug(`Firestore (${Dn}): ${t}`,...n)}}function xn(t,...e){if(An.logLevel<=It.ERROR){const n=e.map(Rn);An.error(`Firestore (${Dn}): ${t}`,...n)}}function Mn(t,...e){if(An.logLevel<=It.WARN){const n=e.map(Rn);An.warn(`Firestore (${Dn}): ${t}`,...n)}}function Rn(t){if("string"==typeof t)return t;try{
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function Ln(t="Unexpected state"){const e=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function On(t,e){t||Ln()}function Pn(t,e){return t}
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
 */const Vn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fn extends dt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Un{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Bn{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(In.UNAUTHENTICATED)))}shutdown(){}}class $n{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class qn{constructor(t){this.t=t,this.currentUser=In.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Nn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Nn("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Nn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(On("string"==typeof e.accessToken),new Bn(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return On(null===t||"string"==typeof t),new In(t)}}class zn{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=In.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kn{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new zn(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(In.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hn{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Nn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Nn("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Nn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Nn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(On("string"==typeof t.token),this.R=t.token,new Gn(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Wn(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Qn{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Wn(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Xn(t,e){return t<e?-1:t>e?1:0}function Yn(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class Jn{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Fn(Vn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Fn(Vn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Fn(Vn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Fn(Vn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Jn.fromMillis(Date.now())}static fromDate(t){return Jn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Jn(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Xn(this.nanoseconds,t.nanoseconds):Xn(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Zn{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Zn(t)}static min(){return new Zn(new Jn(0,0))}static max(){return new Zn(new Jn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class tr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ln(),void 0===n?n=t.length-e:n>t.length-e&&Ln(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class er extends tr{construct(t,e,n){return new er(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Fn(Vn.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new er(e)}static emptyPath(){return new er([])}}const nr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rr extends tr{construct(t,e,n){return new rr(t,e,n)}static isValidIdentifier(t){return nr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rr(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Fn(Vn.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Fn(Vn.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Fn(Vn.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Fn(Vn.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rr(e)}static emptyPath(){return new rr([])}}
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
 */class sr{constructor(t){this.path=t}static fromPath(t){return new sr(er.fromString(t))}static fromName(t){return new sr(er.fromString(t).popFirst(5))}static empty(){return new sr(er.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===er.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return er.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new sr(new er(t.slice()))}}
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
 */class ir{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ir.UNKNOWN_ID=-1;function or(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Zn.fromTimestamp(1e9===r?new Jn(n+1,0):new Jn(n,r));return new cr(s,sr.empty(),e)}function ar(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new cr(Zn.min(),sr.empty(),-1)}static max(){return new cr(Zn.max(),sr.empty(),-1)}}function ur(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=sr.comparator(t.documentKey,e.documentKey),0!==n?n:Xn(t.largestBatchId,e.largestBatchId))}
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
 */const lr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function dr(t){if(t.code!==Vn.FAILED_PRECONDITION||t.message!==lr)throw t;Nn("LocalStore","Unexpectedly lost primary lease")}
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
 */class fr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ln(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new fr(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof fr?e:fr.resolve(e)}catch(t){return fr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):fr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):fr.reject(e)}static resolve(t){return new fr(((e,n)=>{e(t)}))}static reject(t){return new fr(((e,n)=>{n(t)}))}static waitFor(t){return new fr(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=fr.resolve(!1);for(const n of t)e=e.next((t=>t?fr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new fr(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new fr(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
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
 */function gr(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mr(t){return"IndexedDbTransactionError"===t.name}
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
 */
class pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function yr(t){return null==t}function vr(t){return 0===t&&1/t==-1/0}function wr(t){return"number"==typeof t&&Number.isInteger(t)&&!vr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */pr.oe=-1;const _r=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Er=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],br=Er,Tr=[...br,"indexConfiguration","indexState","indexEntries"];
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
function Cr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ir(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Dr{constructor(t,e){this.comparator=t,this.root=e||kr.EMPTY}insert(t,e){return new Dr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kr.BLACK,null,null))}remove(t){return new Dr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ar(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ar(this.root,t,this.comparator,!0)}}class Ar{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kr{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:kr.RED,this.left=null!=r?r:kr.EMPTY,this.right=null!=s?s:kr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new kr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return kr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return kr.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ln();if(this.right.isRed())throw Ln();const t=this.left.check();if(t!==this.right.check())throw Ln();return t+(this.isRed()?0:1)}}kr.EMPTY=null,kr.RED=!0,kr.BLACK=!1,kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ln()}get value(){throw Ln()}get color(){throw Ln()}get left(){throw Ln()}get right(){throw Ln()}copy(t,e,n,r,s){return this}insert(t,e,n){return new kr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Nr{constructor(t){this.comparator=t,this.data=new Dr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xr(this.data.getIterator())}getIteratorFrom(t){return new xr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Nr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Nr(this.comparator);return e.data=t,e}}class xr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Mr{constructor(t){this.fields=t,t.sort(rr.comparator)}static empty(){return new Mr([])}unionWith(t){let e=new Nr(rr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Yn(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Rr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Lr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Rr("Invalid base64 string: "+t):t}}(t);return new Lr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Lr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xn(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Lr.EMPTY_BYTE_STRING=new Lr("");const Or=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(On(!!t),"string"==typeof t){let e=0;const n=Or.exec(t);if(On(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vr(t.seconds),nanos:Vr(t.nanos)}}function Vr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Fr(t){return"string"==typeof t?Lr.fromBase64String(t):Lr.fromUint8Array(t)}
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
 */function Ur(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Br(t){const e=t.mapValue.fields.__previous_value__;return Ur(e)?Br(e):e}function jr(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Jn(e.seconds,e.nanos)}
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
 */class $r{constructor(t,e,n,r,s,i,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class qr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ur(t)?4:os(t)?9007199254740991:ss(t)?10:11:Ln()}function Gr(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jr(t).isEqual(jr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Pr(t.timestampValue),r=Pr(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Fr(t.bytesValue).isEqual(Fr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vr(t.geoPointValue.latitude)===Vr(e.geoPointValue.latitude)&&Vr(t.geoPointValue.longitude)===Vr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vr(t.integerValue)===Vr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vr(t.doubleValue),r=Vr(e.doubleValue);return n===r?vr(n)===vr(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Yn(t.arrayValue.values||[],e.arrayValue.values||[],Gr);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Cr(n)!==Cr(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Gr(n[s],r[s])))return!1;return!0}(t,e);default:return Ln()}}function Hr(t,e){return void 0!==(t.values||[]).find((t=>Gr(t,e)))}function Wr(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return Xn(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xn(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vr(t.integerValue||t.doubleValue),r=Vr(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Qr(t.timestampValue,e.timestampValue);case 4:return Qr(jr(t),jr(e));case 5:return Xn(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Fr(t),r=Fr(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Xn(n[s],r[s]);if(0!==t)return t}return Xn(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xn(Vr(t.latitude),Vr(e.latitude));return 0!==n?n:Xn(Vr(t.longitude),Vr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xr(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=Xn((null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0,(null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0);return 0!==l?l:Xr(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===zr.mapValue&&e===zr.mapValue)return 0;if(t===zr.mapValue)return 1;if(e===zr.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Xn(r[o],i[o]);if(0!==t)return t;const e=Wr(n[r[o]],s[i[o]]);if(0!==e)return e}return Xn(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Ln()}}function Qr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xn(t,e);const n=Pr(t),r=Pr(e),s=Xn(n.seconds,r.seconds);return 0!==s?s:Xn(n.nanos,r.nanos)}function Xr(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Wr(n[s],r[s]);if(t)return t}return Xn(n.length,r.length)}function Yr(t){return Jr(t)}function Jr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Pr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Fr(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return sr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Jr(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Jr(t.fields[s])}`;return n+"}"}(t.mapValue):Ln()}function Zr(t){return!!t&&"integerValue"in t}function ts(t){return!!t&&"arrayValue"in t}function es(t){return!!t&&"nullValue"in t}function ns(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rs(t){return!!t&&"mapValue"in t}function ss(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=is(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function os(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class as{constructor(t){this.value=t}static empty(){return new as({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!rs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=is(e)}setAll(t){let e=rr.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=is(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());rs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];rs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Sr(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new as(is(this.value))}}function cs(t){const e=[];return Sr(t.fields,((t,n)=>{const r=new rr([t]);if(rs(n)){const t=cs(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Mr(e)
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
 */}class us{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new us(t,0,Zn.min(),Zn.min(),Zn.min(),as.empty(),0)}static newFoundDocument(t,e,n,r){return new us(t,1,e,Zn.min(),n,r,0)}static newNoDocument(t,e){return new us(t,2,e,Zn.min(),Zn.min(),as.empty(),0)}static newUnknownDocument(t,e){return new us(t,3,e,Zn.min(),Zn.min(),as.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Zn.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=as.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=as.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Zn.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof us&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new us(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ls{constructor(t,e){this.position=t,this.inclusive=e}}function hs(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?sr.comparator(sr.fromName(o.referenceValue),n.key):Wr(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function ds(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gr(t.position[n],e.position[n]))return!1;return!0}
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
 */class fs{constructor(t,e="asc"){this.field=t,this.dir=e}}function gs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class ms{}class ps extends ms{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Cs(t,e,n):"array-contains"===e?new As(t,n):"in"===e?new ks(t,n):"not-in"===e?new Ns(t,n):"array-contains-any"===e?new xs(t,n):new ps(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ss(t,n):new Is(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Wr(e,this.value)):null!==e&&Kr(this.value)===Kr(e)&&this.matchesComparison(Wr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ln()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ys extends ms{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ys(t,e)}matches(t){return vs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vs(t){return"and"===t.op}function ws(t){return _s(t)&&vs(t)}function _s(t){for(const e of t.filters)if(e instanceof ys)return!1;return!0}function Es(t){if(t instanceof ps)return t.field.canonicalString()+t.op.toString()+Yr(t.value);if(ws(t))return t.filters.map((t=>Es(t))).join(",");{const e=t.filters.map((t=>Es(t))).join(",");return`${t.op}(${e})`}}function bs(t,e){return t instanceof ps?function(t,e){return e instanceof ps&&t.op===e.op&&t.field.isEqual(e.field)&&Gr(t.value,e.value)}(t,e):t instanceof ys?function(t,e){return e instanceof ys&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&bs(n,e.filters[r])),!0)}(t,e):void Ln()}function Ts(t){return t instanceof ps?function(t){return`${t.field.canonicalString()} ${t.op} ${Yr(t.value)}`}(t):t instanceof ys?function(t){return t.op.toString()+" {"+t.getFilters().map(Ts).join(" ,")+"}"}(t):"Filter"}class Cs extends ps{constructor(t,e,n){super(t,e,n),this.key=sr.fromName(n.referenceValue)}matches(t){const e=sr.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ss extends ps{constructor(t,e){super(t,"in",e),this.keys=Ds("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Is extends ps{constructor(t,e){super(t,"not-in",e),this.keys=Ds("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ds(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>sr.fromName(t.referenceValue)))}class As extends ps{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ts(e)&&Hr(e.arrayValue,this.value)}}class ks extends ps{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hr(this.value.arrayValue,e)}}class Ns extends ps{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hr(this.value.arrayValue,e)}}class xs extends ps{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hr(this.value.arrayValue,t)))}}
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
 */class Ms{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ue=null}}function Rs(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ms(t,e,n,r,s,i,o)}function Ls(t){const e=Pn(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Es(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Yr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Yr(t))).join(",")),e.ue=t}return e.ue}function Os(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ds(t.startAt,e.startAt)&&ds(t.endAt,e.endAt)}function Ps(t){return sr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Vs{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fs(t,e,n,r,s,i,o,a){return new Vs(t,e,n,r,s,i,o,a)}function Us(t){return new Vs(t)}function Bs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function js(t){return null!==t.collectionGroup}function $s(t){const e=Pn(t);if(null===e.ce){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Nr(rr.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new fs(r,n))})),t.has(rr.keyField().canonicalString())||e.ce.push(new fs(rr.keyField(),n))}return e.ce}function qs(t){const e=Pn(t);return e.le||(e.le=zs(e,$s(t))),e.le}function zs(t,e){if("F"===t.limitType)return Rs(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new fs(t.field,e)}));const n=t.endAt?new ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ls(t.startAt.position,t.startAt.inclusive):null;return Rs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ks(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gs(t,e){return Os(qs(t),qs(e))&&t.limitType===e.limitType}function Hs(t){return`${Ls(qs(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ts(t))).join(", ")}]`),yr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Yr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Yr(t))).join(",")),`Target(${e})`}(qs(t))}; limitType=${t.limitType})`}function Qs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):sr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of $s(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=hs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,$s(t),e))&&!(t.endAt&&!function(t,e,n){const r=hs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,$s(t),e))}(t,e)}function Xs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ys(t){return(e,n)=>{let r=!1;for(const s of $s(t)){const t=Js(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Js(t,e,n){const r=t.field.isKeyField()?sr.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Wr(r,s):Ln()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ln()}}
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
 */class Zs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Sr(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Ir(this.inner)}size(){return this.innerSize}}
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
 */const ti=new Dr(sr.comparator);function ei(){return ti}const ni=new Dr(sr.comparator);function ri(...t){let e=ni;for(const n of t)e=e.insert(n.key,n);return e}function si(t){let e=ni;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ii(){return ai()}function oi(){return ai()}function ai(){return new Zs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ci=new Dr(sr.comparator),ui=new Nr(sr.comparator);function li(...t){let e=ui;for(const n of t)e=e.add(n);return e}const hi=new Nr(Xn);function di(){return hi}
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
 */function fi(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vr(e)?"-0":e}}function gi(t){return{integerValue:""+t}}function mi(t,e){return wr(e)?gi(e):fi(t,e)}
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
 */class pi{constructor(){this._=void 0}}function yi(t,e,n){return t instanceof _i?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ur(e)&&(e=Br(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ei?bi(t,e):t instanceof Ti?Ci(t,e):function(t,e){const n=wi(t,e),r=Ii(n)+Ii(t.Pe);return Zr(n)&&Zr(t.Pe)?gi(r):fi(t.serializer,r)}(t,e)}function vi(t,e,n){return t instanceof Ei?bi(t,e):t instanceof Ti?Ci(t,e):n}function wi(t,e){return t instanceof Si?function(t){return Zr(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class _i extends pi{}class Ei extends pi{constructor(t){super(),this.elements=t}}function bi(t,e){const n=Di(e);for(const r of t.elements)n.some((t=>Gr(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ti extends pi{constructor(t){super(),this.elements=t}}function Ci(t,e){let n=Di(e);for(const r of t.elements)n=n.filter((t=>!Gr(t,r)));return{arrayValue:{values:n}}}class Si extends pi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ii(t){return Vr(t.integerValue||t.doubleValue)}function Di(t){return ts(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function Ai(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ei&&e instanceof Ei||t instanceof Ti&&e instanceof Ti?Yn(t.elements,e.elements,Gr):t instanceof Si&&e instanceof Si?Gr(t.Pe,e.Pe):t instanceof _i&&e instanceof _i}(t.transform,e.transform)}class ki{constructor(t,e){this.version=t,this.transformResults=e}}class Ni{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ni}static exists(t){return new Ni(void 0,t)}static updateTime(t){return new Ni(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xi(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Mi{}function Ri(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new qi(t.key,Ni.none()):new Fi(t.key,t.data,Ni.none());{const n=t.data,r=as.empty();let s=new Nr(rr.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ui(t.key,r,new Mr(s.toArray()),Ni.none())}}function Li(t,e,n){t instanceof Fi?function(t,e,n){const r=t.value.clone(),s=ji(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ui?function(t,e,n){if(!xi(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ji(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Bi(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof Fi?function(t,e,n,r){if(!xi(t.precondition,e))return n;const s=t.value.clone(),i=$i(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ui?function(t,e,n,r){if(!xi(t.precondition,e))return n;const s=$i(t.fieldTransforms,r,e),i=e.data;return i.setAll(Bi(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return xi(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Pi(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=wi(r.transform,t||null);null!=s&&(null===n&&(n=as.empty()),n.set(r.field,s))}return n||null}function Vi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Yn(t,e,((t,e)=>Ai(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fi extends Mi{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ui extends Mi{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bi(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ji(t,e,n){const r=new Map;On(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,vi(o,a,n[s]))}return r}function $i(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,yi(t,i,e))}return r}class qi extends Mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zi extends Mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Ki{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Li(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Oi(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Oi(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oi();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Ri(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Zn.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),li())}isEqual(t){return this.batchId===t.batchId&&Yn(this.mutations,t.mutations,((t,e)=>Vi(t,e)))&&Yn(this.baseMutations,t.baseMutations,((t,e)=>Vi(t,e)))}}class Gi{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){On(t.mutations.length===n.length);let r=function(){return ci}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Gi(t,e,n,r)}}
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
 */class Hi{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
class Wi{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Qi,Xi;function Yi(t){switch(t){default:return Ln();case Vn.CANCELLED:case Vn.UNKNOWN:case Vn.DEADLINE_EXCEEDED:case Vn.RESOURCE_EXHAUSTED:case Vn.INTERNAL:case Vn.UNAVAILABLE:case Vn.UNAUTHENTICATED:return!1;case Vn.INVALID_ARGUMENT:case Vn.NOT_FOUND:case Vn.ALREADY_EXISTS:case Vn.PERMISSION_DENIED:case Vn.FAILED_PRECONDITION:case Vn.ABORTED:case Vn.OUT_OF_RANGE:case Vn.UNIMPLEMENTED:case Vn.DATA_LOSS:return!0}}function Ji(t){if(void 0===t)return xn("GRPC error has no .code"),Vn.UNKNOWN;switch(t){case Qi.OK:return Vn.OK;case Qi.CANCELLED:return Vn.CANCELLED;case Qi.UNKNOWN:return Vn.UNKNOWN;case Qi.DEADLINE_EXCEEDED:return Vn.DEADLINE_EXCEEDED;case Qi.RESOURCE_EXHAUSTED:return Vn.RESOURCE_EXHAUSTED;case Qi.INTERNAL:return Vn.INTERNAL;case Qi.UNAVAILABLE:return Vn.UNAVAILABLE;case Qi.UNAUTHENTICATED:return Vn.UNAUTHENTICATED;case Qi.INVALID_ARGUMENT:return Vn.INVALID_ARGUMENT;case Qi.NOT_FOUND:return Vn.NOT_FOUND;case Qi.ALREADY_EXISTS:return Vn.ALREADY_EXISTS;case Qi.PERMISSION_DENIED:return Vn.PERMISSION_DENIED;case Qi.FAILED_PRECONDITION:return Vn.FAILED_PRECONDITION;case Qi.ABORTED:return Vn.ABORTED;case Qi.OUT_OF_RANGE:return Vn.OUT_OF_RANGE;case Qi.UNIMPLEMENTED:return Vn.UNIMPLEMENTED;case Qi.DATA_LOSS:return Vn.DATA_LOSS;default:return Ln()}}(Xi=Qi||(Qi={}))[Xi.OK=0]="OK",Xi[Xi.CANCELLED=1]="CANCELLED",Xi[Xi.UNKNOWN=2]="UNKNOWN",Xi[Xi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xi[Xi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xi[Xi.NOT_FOUND=5]="NOT_FOUND",Xi[Xi.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xi[Xi.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xi[Xi.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xi[Xi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xi[Xi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xi[Xi.ABORTED=10]="ABORTED",Xi[Xi.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xi[Xi.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xi[Xi.INTERNAL=13]="INTERNAL",Xi[Xi.UNAVAILABLE=14]="UNAVAILABLE",Xi[Xi.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
let Zi=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function to(){return new TextEncoder}
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
 */const eo=new ln([4294967295,4294967295],0);function no(t){const e=to().encode(t),n=new hn;return n.update(e),new Uint8Array(n.digest())}function ro(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ln([n,r],0),new ln([s,i],0)]}class so{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new io(`Invalid padding: ${e}`);if(n<0)throw new io(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new io(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new io(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ln.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(ln.fromNumber(n)));return 1===r.compare(eo)&&(r=new ln([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=no(t),[n,r]=ro(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new so(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Ie)return;const e=no(t),[n,r]=ro(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class oo{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ao.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new oo(Zn.min(),r,new Dr(Xn),ei(),li())}}class ao{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ao(n,e,li(),li(),li())}}
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
 */class co{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class uo{constructor(t,e){this.targetId=t,this.me=e}}class lo{constructor(t,e,n=Lr.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ho{constructor(){this.fe=0,this.ge=mo(),this.pe=Lr.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=li(),e=li(),n=li();return this.ge.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ln()}})),new ao(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=mo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,On(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fo{constructor(t){this.Le=t,this.Be=new Map,this.ke=ei(),this.qe=go(),this.Qe=new Dr(Xn)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:Ln()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Ps(s))if(0===n){const t=new sr(s.path);this.Ue(e,t,us.newNoDocument(t,Zn.min()))}else On(1===n);else{const r=this.Ye(e);if(r!==n){const n=this.Ze(t),s=n?this.Xe(n,t,r):1;if(0!==s){this.je(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==Zi||Zi.et(function(t,e,n,r,s){var i,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
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
 */(r,t.me,this.Le.tt(),n,s))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Fr(n).toUint8Array()}catch(t){if(t instanceof Rr)return Mn("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new so(i,r,s)}catch(t){return Mn(t instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.Ue(e,n,null),r++)})),r}rt(t){const e=new Map;this.Be.forEach(((n,r)=>{const s=this.Je(r);if(s){if(n.current&&Ps(s.target)){const e=new sr(s.target.path);null!==this.ke.get(e)||this.it(r,e)||this.Ue(r,e,us.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=li();this.qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new oo(t,e,this.Qe,this.ke,n);return this.ke=ei(),this.qe=go(),this.Qe=new Dr(Xn),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ho,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Nr(Xn),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||Nn("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ho),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function go(){return new Dr(sr.comparator)}function mo(){return new Dr(sr.comparator)}const po=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),vo=(()=>{const t={and:"AND",or:"OR"};return t})();class wo{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function _o(t,e){return t.useProto3Json||yr(e)?e:{value:e}}function Eo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bo(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function To(t,e){return Eo(t,e.toTimestamp())}function Co(t){return On(!!t),Zn.fromTimestamp(function(t){const e=Pr(t);return new Jn(e.seconds,e.nanos)}(t))}function So(t,e){return Io(t,e).canonicalString()}function Io(t,e){const n=function(t){return new er(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Do(t){const e=er.fromString(t);return On(Xo(e)),e}function Ao(t,e){return So(t.databaseId,e.path)}function ko(t,e){const n=Do(e);if(n.get(1)!==t.databaseId.projectId)throw new Fn(Vn.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Fn(Vn.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new sr(Ro(n))}function No(t,e){return So(t.databaseId,e)}function xo(t){const e=Do(t);return 4===e.length?er.emptyPath():Ro(e)}function Mo(t){return new er(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ro(t){return On(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Lo(t,e,n){return{name:Ao(t,e),fields:n.value.mapValue.fields}}function Oo(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ln()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(On(void 0===e||"string"==typeof e),Lr.fromBase64String(e||"")):(On(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Lr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vn.UNKNOWN:Ji(t.code);return new Fn(e,t.message||"")}(o);n=new lo(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ko(t,r.document.name),i=Co(r.document.updateTime),o=r.document.createTime?Co(r.document.createTime):Zn.min(),a=new as({mapValue:{fields:r.document.fields}}),c=us.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new co(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ko(t,r.document),i=r.readTime?Co(r.readTime):Zn.min(),o=us.newNoDocument(s,i),a=r.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ko(t,r.document),i=r.removedTargetIds||[];n=new co([],i,s,null)}else{if(!("filter"in e))return Ln();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new Wi(r,s),o=t.targetId;n=new uo(o,i)}}return n}function Po(t,e){let n;if(e instanceof Fi)n={update:Lo(t,e.key,e.value)};else if(e instanceof qi)n={delete:Ao(t,e.key)};else if(e instanceof Ui)n={update:Lo(t,e.key,e.data),updateMask:Qo(e.fieldMask)};else{if(!(e instanceof zi))return Ln();n={verify:Ao(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _i)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ei)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ti)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Si)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw Ln()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:To(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ln()}(t,e.precondition)),n}function Vo(t,e){return t&&t.length>0?(On(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Co(t.updateTime):Co(e);return n.isEqual(Zn.min())&&(n=Co(e)),new ki(n,t.transformResults||[])}(t,e)))):[]}function Fo(t,e){return{documents:[No(t,e.path)]}}function Uo(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=No(t,s);const i=function(t){if(0!==t.length)return Wo(ys.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Go(t.field),direction:qo(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_o(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:s}}function Bo(t){let e=xo(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){On(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=$o(t);return e instanceof ys&&ws(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new fs(Ho(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ls(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ls(n,e)}(n.endAt)),Fs(e,s,o,i,a,"F",c,u)}function jo(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ln()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function $o(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ho(t.unaryFilter.field);return ps.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ho(t.unaryFilter.field);return ps.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ho(t.unaryFilter.field);return ps.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ho(t.unaryFilter.field);return ps.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ln()}}(t):void 0!==t.fieldFilter?function(t){return ps.create(Ho(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ln()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ys.create(t.compositeFilter.filters.map((t=>$o(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ln()}}(t.compositeFilter.op))}(t):Ln()}function qo(t){return po[t]}function zo(t){return yo[t]}function Ko(t){return vo[t]}function Go(t){return{fieldPath:t.canonicalString()}}function Ho(t){return rr.fromServerFormat(t.fieldPath)}function Wo(t){return t instanceof ps?function(t){if("=="===t.op){if(ns(t.value))return{unaryFilter:{field:Go(t.field),op:"IS_NAN"}};if(es(t.value))return{unaryFilter:{field:Go(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ns(t.value))return{unaryFilter:{field:Go(t.field),op:"IS_NOT_NAN"}};if(es(t.value))return{unaryFilter:{field:Go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Go(t.field),op:zo(t.op),value:t.value}}}(t):t instanceof ys?function(t){const e=t.getFilters().map((t=>Wo(t)));return 1===e.length?e[0]:{compositeFilter:{op:Ko(t.op),filters:e}}}(t):Ln()}function Qo(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xo(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Yo{constructor(t,e,n,r,s=Zn.min(),i=Zn.min(),o=Lr.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Yo(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yo(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Jo{constructor(t){this.ct=t}}function Zo(t){const e=Bo({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ks(e,e.limit,"L"):e}
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
 */class ta{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(Vr(t.integerValue));else if("doubleValue"in t){const n=Vr(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),vr(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Pr(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Fr(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?os(t)?this.dt(e,Number.MAX_SAFE_INTEGER):ss(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):Ln()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const r of Object.keys(n))this.Vt(r,e),this.Tt(n[r],e)}wt(t,e){var n,r;const s=t.fields||{};this.dt(e,53);const i="value",o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(e,15),e.At(Vr(o)),this.Vt(i,e),this.Tt(s[i],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const r of n)this.Tt(r,e)}yt(t,e){this.dt(e,37),sr.fromName(t).path.forEach((t=>{this.dt(e,60),this.Dt(t,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}ta.vt=new ta;
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
class ea{constructor(){this.un=new na}addToCollectionParentIndex(t,e){return this.un.add(e),fr.resolve()}getCollectionParents(t,e){return fr.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return fr.resolve()}deleteFieldIndex(t,e){return fr.resolve()}deleteAllFieldIndexes(t){return fr.resolve()}createTargetIndexes(t,e){return fr.resolve()}getDocumentsMatchingTarget(t,e){return fr.resolve(null)}getIndexType(t,e){return fr.resolve(0)}getFieldIndexes(t,e){return fr.resolve([])}getNextCollectionGroupToUpdate(t){return fr.resolve(null)}getMinOffset(t,e){return fr.resolve(cr.min())}getMinOffsetFromCollectionGroup(t,e){return fr.resolve(cr.min())}updateCollectionGroup(t,e,n){return fr.resolve()}updateIndexEntries(t,e){return fr.resolve()}}class na{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Nr(er.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Nr(er.comparator)).toArray()}}
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
 */new Uint8Array(0);class ra{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ra(t,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ra.DEFAULT_COLLECTION_PERCENTILE=10,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ra.DEFAULT=new ra(41943040,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ra.DISABLED=new ra(-1,0,0);
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
class sa{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new sa(0)}static kn(){return new sa(-1)}}
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
class ia{constructor(){this.changes=new Zs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,us.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?fr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */
class oa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class aa{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Oi(n.mutation,t,Mr.empty(),Jn.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,li()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=li()){const r=ii();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=ri();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ii();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,li())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=ei();const i=ai(),o=function(){return ai()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ui)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Oi(o.mutation,e,o.mutation.getFieldMask(),Jn.now())):i.set(e.key,Mr.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new oa(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ai();let r=new Dr(((t,e)=>t-e)),s=li();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Mr.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||li()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=oi();c.forEach((t=>{if(!s.has(t)){const r=Ri(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return fr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return sr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):js(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):fr.resolve(ii());let o=-1,a=s;return i.next((e=>fr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?fr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,li()))).next((t=>({batchId:o,changes:si(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new sr(e)).next((t=>{let e=ri();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=ri();return this.indexManager.getCollectionParents(t,s).next((o=>fr.forEach(o,(o=>{const a=function(t,e){return new Vs(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,us.newInvalidDocument(r)))}));let n=ri();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&Oi(i.mutation,r,Mr.empty(),Jn.now()),Qs(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class ca{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return fr.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Co(t.createTime)}}(e)),fr.resolve()}getNamedQuery(t,e){return fr.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(t){return{name:t.name,query:Zo(t.bundledQuery),readTime:Co(t.readTime)}}(e)),fr.resolve()}}
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
 */class ua{constructor(){this.overlays=new Dr(sr.comparator),this.Ir=new Map}getOverlay(t,e){return fr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ii();return fr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),fr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),fr.resolve()}getOverlaysForCollection(t,e,n){const r=ii(),s=e.length+1,i=new sr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return fr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Dr(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ii(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ii(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return fr.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Hi(e,n));let s=this.Ir.get(e);void 0===s&&(s=li(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class la{constructor(){this.sessionToken=Lr.EMPTY_BYTE_STRING}getSessionToken(t){return fr.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,fr.resolve()}}
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
 */class ha{constructor(){this.Tr=new Nr(da.Er),this.dr=new Nr(da.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new da(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new da(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new sr(new er([])),n=new da(e,t),r=new da(e,t+1),s=[];return this.dr.forEachInRange([n,r],(t=>{this.Vr(t),s.push(t.key)})),s}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new sr(new er([])),n=new da(e,t),r=new da(e,t+1);let s=li();return this.dr.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new da(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class da{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return sr.comparator(t.key,e.key)||Xn(t.wr,e.wr)}static Ar(t,e){return Xn(t.wr,e.wr)||sr.comparator(t.key,e.key)}}
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
 */class fa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Nr(da.Er)}checkEmpty(t){return fr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ki(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.br=this.br.add(new da(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return fr.resolve(i)}lookupMutationBatch(t,e){return fr.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return fr.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return fr.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return fr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new da(e,0),r=new da(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],(t=>{const e=this.Dr(t.wr);s.push(e)})),fr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Nr(Xn);return e.forEach((t=>{const e=new da(t,0),r=new da(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,r],(t=>{n=n.add(t.wr)}))})),fr.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;sr.isDocumentKey(s)||(s=s.child(""));const i=new da(new sr(s),0);let o=new Nr(Xn);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.wr)),!0)}),i),fr.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){On(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return fr.forEach(e.mutations,(r=>{const s=new da(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new da(e,0),r=this.br.firstAfterOrEqual(n);return fr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,fr.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class ga{constructor(t){this.Mr=t,this.docs=function(){return new Dr(sr.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return fr.resolve(n?n.document.mutableCopy():us.newInvalidDocument(e))}getEntries(t,e){let n=ei();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():us.newInvalidDocument(t))})),fr.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=ei();const i=e.path,o=new sr(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||ur(ar(o),n)<=0||(r.has(o.key)||Qs(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return fr.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Ln()}Or(t,e){return fr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ma(this)}getSize(t){return fr.resolve(this.size)}}class ma extends ia{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)})),fr.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
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
 */class pa{constructor(t){this.persistence=t,this.Nr=new Zs((t=>Ls(t)),Os),this.lastRemoteSnapshotVersion=Zn.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ha,this.targetCount=0,this.kr=sa.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),fr.resolve()}getLastRemoteSnapshotVersion(t){return fr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return fr.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),fr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),fr.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new sa(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,fr.resolve()}updateTargetData(t,e){return this.Kn(e),fr.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,fr.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),fr.waitFor(s).next((()=>r))}getTargetCount(t){return fr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return fr.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),fr.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),fr.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),fr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return fr.resolve(n)}containsKey(t,e){return fr.resolve(this.Br.containsKey(e))}}
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
 */class ya{constructor(t,e){this.qr={},this.overlays={},this.Qr=new pr(0),this.Kr=!1,this.Kr=!0,this.$r=new la,this.referenceDelegate=t(this),this.Ur=new pa(this),this.indexManager=new ea,this.remoteDocumentCache=function(t){return new ga(t)}((t=>this.referenceDelegate.Wr(t))),this.serializer=new Jo(e),this.Gr=new ca(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ua,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new fa(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){Nn("MemoryPersistence","Starting transaction:",t);const r=new va(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((t=>this.referenceDelegate.jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Hr(t,e){return fr.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class va extends hr{constructor(t){super(),this.currentSequenceNumber=t}}class wa{constructor(t){this.persistence=t,this.Jr=new ha,this.Yr=null}static Zr(t){return new wa(t)}get Xr(){if(this.Yr)return this.Yr;throw Ln()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),fr.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),fr.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),fr.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fr.forEach(this.Xr,(n=>{const r=sr.fromPath(n);return this.ei(t,r).next((t=>{t||e.removeEntry(r,Zn.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return fr.or([()=>fr.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
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
class _a{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=li(),r=li();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new _a(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ea{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class ba{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ct()?8:gr(ot())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.Zi(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new Ea;return this.Xi(t,e,n).next((r=>{if(s.result=r,this.zi)return this.es(t,e,n,r.size)}))})).next((()=>s.result))}es(t,e,n,r){return n.documentReadCount<this.ji?(kn()<=It.DEBUG&&Nn("QueryEngine","SDK will not create cache indexes for query:",Ws(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),fr.resolve()):(kn()<=It.DEBUG&&Nn("QueryEngine","Query:",Ws(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(kn()<=It.DEBUG&&Nn("QueryEngine","The SDK decides to create cache indexes for query:",Ws(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qs(e))):fr.resolve())}Yi(t,e){if(Bs(e))return fr.resolve(null);let n=qs(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ks(e,null,"F"),n=qs(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=li(...r);return this.Ji.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.ts(e,r);return this.ns(e,i,s,n.readTime)?this.Yi(t,Ks(e,null,"F")):this.rs(t,i,e,n)}))))})))))}Zi(t,e,n,r){return Bs(e)||r.isEqual(Zn.min())?fr.resolve(null):this.Ji.getDocuments(t,n).next((s=>{const i=this.ts(e,s);return this.ns(e,i,n,r)?fr.resolve(null):(kn()<=It.DEBUG&&Nn("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ws(e)),this.rs(t,i,e,or(r,-1)).next((t=>t)))}))}ts(t,e){let n=new Nr(Ys(t));return e.forEach(((e,r)=>{Qs(t,r)&&(n=n.add(r))})),n}ns(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,n){return kn()<=It.DEBUG&&Nn("QueryEngine","Using full collection scan to execute query:",Ws(e)),this.Ji.getDocumentsMatchingQuery(t,e,cr.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Ta{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Dr(Xn),this._s=new Zs((t=>Ls(t)),Os),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new aa(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function Ca(t,e,n,r){return new Ta(t,e,n,r)}async function Sa(t,e){const n=Pn(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=li();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Ia(t,e){const n=Pn(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=fr.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);On(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=li();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Da(t){const e=Pn(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Aa(t,e){const n=Pn(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(Lr.EMPTY_BYTE_STRING,Zn.min()).withLastLimboFreeSnapshotVersion(Zn.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Ur.updateTargetData(t,u))}));let a=ei(),c=li();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ka(t,i,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!r.isEqual(Zn.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return fr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=s,t)))}function ka(t,e,n){let r=li(),s=li();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ei();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Zn.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Nn("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Ps:r,Is:s}}))}function Na(t,e){const n=Pn(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function xa(t,e){const n=Pn(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ur.getTargetData(t,e).next((s=>s?(r=s,fr.resolve(r)):n.Ur.allocateTargetId(t).next((s=>(r=new Yo(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.os.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}async function Ma(t,e,n){const r=Pn(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!mr(t))throw t;Nn("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ra(t,e,n){const r=Pn(t);let s=Zn.min(),i=li();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=Pn(t),s=r._s.get(n);return void 0!==s?fr.resolve(r.os.get(s)):r.Ur.getTargetData(e,n)}(r,t,qs(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.ss.getDocumentsMatchingQuery(t,e,n?s:Zn.min(),n?i:li()))).next((t=>(La(r,Xs(e),t),{documents:t,Ts:i})))))}function La(t,e,n){let r=t.us.get(e)||Zn.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.us.set(e,r)}class Oa{constructor(){this.activeTargetIds=di()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pa{constructor(){this.so=new Oa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Oa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Va{_o(t){}shutdown(){}}
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
 */class Fa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Nn("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Nn("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ua=null;function Ba(){return null===Ua?Ua=function(){return 268435456+Math.round(2147483648*Math.random())}():Ua++,"0x"+Ua.toString(16)
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
 */}const ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class $a{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
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
 */const qa="WebChannelConnection";class za extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(t,e,n,r,s){const i=Ba(),o=this.xo(t,e.toUriEncodedString());Nn("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,s),this.No(t,o,a,n).then((e=>(Nn("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw Mn("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,r,s,i){return this.Mo(t,e,n,r,s)}Oo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=ja[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Ba();return new Promise(((i,o)=>{const a=new gn;a.setWithCredentials(!0),a.listenOnce(yn.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case vn.NO_ERROR:const e=a.getResponseJson();Nn(qa,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case vn.TIMEOUT:Nn(qa,`RPC '${t}' ${s} timed out`),o(new Fn(Vn.DEADLINE_EXCEEDED,"Request time out"));break;case vn.HTTP_ERROR:const n=a.getStatus();if(Nn(qa,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vn).indexOf(e)>=0?e:Vn.UNKNOWN}(e.status);o(new Fn(t,e.message))}else o(new Fn(Vn.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fn(Vn.UNAVAILABLE,"Connection failed."));break;default:Ln()}}finally{Nn(qa,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);Nn(qa,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const r=Ba(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=bn(),o=En(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new mn({})),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Nn(qa,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=i.createWebChannel(u,a);let h=!1,d=!1;const f=new $a({Io:e=>{d?Nn(qa,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Nn(qa,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Nn(qa,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},To:()=>l.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(l,pn.EventType.OPEN,(()=>{d||(Nn(qa,`RPC '${t}' stream ${r} transport opened.`),f.yo())})),g(l,pn.EventType.CLOSE,(()=>{d||(d=!0,Nn(qa,`RPC '${t}' stream ${r} transport closed`),f.So())})),g(l,pn.EventType.ERROR,(e=>{d||(d=!0,Mn(qa,`RPC '${t}' stream ${r} transport errored:`,e),f.So(new Fn(Vn.UNAVAILABLE,"The operation could not be completed")))})),g(l,pn.EventType.MESSAGE,(e=>{var n;if(!d){const s=e.data[0];On(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Nn(qa,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Qi[t];if(void 0!==e)return Ji(e)}(e),s=o.message;void 0===n&&(n=Vn.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.So(new Fn(n,s)),l.close()}else Nn(qa,`RPC '${t}' stream ${r} received:`,s),f.bo(s)}})),g(o,_n.STAT_EVENT,(e=>{e.stat===wn.PROXY?Nn(qa,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===wn.NOPROXY&&Nn(qa,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}
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
 */function Ka(){return"undefined"!=typeof document?document:null}
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
 */function Ga(t){return new wo(t,!0)}
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
 */class Ha{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&Nn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
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
 */class Wa{constructor(t,e,n,r,s,i,o,a){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ha(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===Vn.RESOURCE_EXHAUSTED?(xn(e.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===Vn.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new Fn(Vn.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return Nn("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(Nn("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qa extends Wa{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Oo(this.serializer,t),n=function(t){if(!("targetChange"in t))return Zn.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Zn.min():e.readTime?Co(e.readTime):Zn.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Mo(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Ps(r)?{documents:Fo(t,r)}:{query:Uo(t,r)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=bo(t,e.resumeToken);const r=_o(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Zn.min())>0){n.readTime=Eo(t,e.snapshotVersion.toTimestamp());const r=_o(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=jo(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Mo(this.serializer),e.removeTarget=t,this.a_(e)}}class Xa extends Wa{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return On(!!t.streamToken),this.lastStreamToken=t.streamToken,On(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){On(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Vo(t.writeResults,t.commitTime),n=Co(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Mo(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Po(this.serializer,t)))};this.a_(e)}}
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
 */class Ya extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new Fn(Vn.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Mo(t,Io(e,n),r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fn(Vn.UNKNOWN,t.toString())}))}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Lo(t,Io(e,n),r,i,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fn(Vn.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Ja{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xn(e),this.D_=!1):Nn("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
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
 */class Za{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o((t=>{n.enqueueAndForget((async()=>{cc(this)&&(Nn("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Pn(t);e.L_.add(4),await ec(e),e.q_.set("Unknown"),e.L_.delete(4),await tc(e)}(this))}))})),this.q_=new Ja(n,r)}}async function tc(t){if(cc(t))for(const e of t.B_)await e(!0)}async function ec(t){for(const e of t.B_)await e(!1)}function nc(t,e){const n=Pn(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ac(n)?oc(n):Dc(n).r_()&&sc(n,e))}function rc(t,e){const n=Pn(t),r=Dc(n);n.N_.delete(e),r.r_()&&ic(n,e),0===n.N_.size&&(r.r_()?r.o_():cc(n)&&n.q_.set("Unknown"))}function sc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Zn.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dc(t).A_(e)}function ic(t,e){t.Q_.xe(e),Dc(t).R_(e)}function oc(t){t.Q_=new fo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Dc(t).start(),t.q_.v_()}function ac(t){return cc(t)&&!Dc(t).n_()&&t.N_.size>0}function cc(t){return 0===Pn(t).L_.size}function uc(t){t.Q_=void 0}async function lc(t){t.q_.set("Online")}async function hc(t){t.N_.forEach(((e,n)=>{sc(t,e)}))}async function dc(t,e){uc(t),ac(t)?(t.q_.M_(e),oc(t)):t.q_.set("Unknown")}async function fc(t,e,n){if(t.q_.set("Online"),e instanceof lo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.N_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.N_.delete(r),t.Q_.removeTarget(r))}(t,e)}catch(n){Nn("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gc(t,n)}else if(e instanceof co?t.Q_.Ke(e):e instanceof uo?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Zn.min()))try{const e=await Da(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.N_.get(r);s&&t.N_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.N_.get(e);if(!r)return;t.N_.set(e,r.withResumeToken(Lr.EMPTY_BYTE_STRING,r.snapshotVersion)),ic(t,e);const s=new Yo(r.target,e,n,r.sequenceNumber);sc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Nn("RemoteStore","Failed to raise snapshot:",e),await gc(t,e)}}async function gc(t,e,n){if(!mr(e))throw e;t.L_.add(1),await ec(t),t.q_.set("Offline"),n||(n=()=>Da(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Nn("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await tc(t)}))}function mc(t,e){return e().catch((n=>gc(t,n,e)))}async function pc(t){const e=Pn(t),n=Ac(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yc(e);)try{const t=await Na(e.localStore,r);if(null===t){0===e.O_.length&&n.o_();break}r=t.batchId,vc(e,t)}catch(t){await gc(e,t)}wc(e)&&_c(e)}function yc(t){return cc(t)&&t.O_.length<10}function vc(t,e){t.O_.push(e);const n=Ac(t);n.r_()&&n.V_&&n.m_(e.mutations)}function wc(t){return cc(t)&&!Ac(t).n_()&&t.O_.length>0}function _c(t){Ac(t).start()}async function Ec(t){Ac(t).p_()}async function bc(t){const e=Ac(t);for(const n of t.O_)e.m_(n.mutations)}async function Tc(t,e,n){const r=t.O_.shift(),s=Gi.from(r,e,n);await mc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await pc(t)}async function Cc(t,e){e&&Ac(t).V_&&await async function(t,e){if(function(t){return Yi(t)&&t!==Vn.ABORTED}(e.code)){const n=t.O_.shift();Ac(t).s_(),await mc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await pc(t)}}(t,e),wc(t)&&_c(t)}async function Sc(t,e){const n=Pn(t);n.asyncQueue.verifyOperationInProgress(),Nn("RemoteStore","RemoteStore received new credentials");const r=cc(n);n.L_.add(3),await ec(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await tc(n)}async function Ic(t,e){const n=Pn(t);e?(n.L_.delete(2),await tc(n)):e||(n.L_.add(2),await ec(n),n.q_.set("Unknown"))}function Dc(t){return t.K_||(t.K_=function(t,e,n){const r=Pn(t);return r.w_(),new Qa(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Eo:lc.bind(null,t),Ro:hc.bind(null,t),mo:dc.bind(null,t),d_:fc.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),ac(t)?oc(t):t.q_.set("Unknown")):(await t.K_.stop(),uc(t))}))),t.K_}function Ac(t){return t.U_||(t.U_=function(t,e,n){const r=Pn(t);return r.w_(),new Xa(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ec.bind(null,t),mo:Cc.bind(null,t),f_:bc.bind(null,t),g_:Tc.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await pc(t)):(await t.U_.stop(),t.O_.length>0&&(Nn("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
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
 */}class kc{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new kc(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fn(Vn.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nc(t,e){if(xn("AsyncQueue",`${e}: ${t}`),mr(t))return new Fn(Vn.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class xc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||sr.comparator(e.key,n.key):(t,e)=>sr.comparator(t.key,e.key),this.keyedMap=ri(),this.sortedSet=new Dr(this.comparator)}static emptySet(t){return new xc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new xc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Mc{constructor(){this.W_=new Dr(sr.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Ln():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Rc{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Rc(t,e,xc.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Lc{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Oc{constructor(){this.queries=Pc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=Pn(t),r=n.queries;n.queries=Pc(),r.forEach(((t,n)=>{for(const r of n.j_)r.onError(e)}))}(this,new Fn(Vn.ABORTED,"Firestore shutting down"))}}function Pc(){return new Zs((t=>Hs(t)),Gs)}async function Vc(t,e){const n=Pn(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Lc,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Nc(t,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&jc(n)}async function Fc(t,e){const n=Pn(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.j_.indexOf(e);t>=0&&(i.j_.splice(t,1),0===i.j_.length?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Uc(t,e){const n=Pn(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(s)&&(r=!0);e.z_=s}}r&&jc(n)}function Bc(t,e,n){const r=Pn(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function jc(t){t.Y_.forEach((t=>{t.next()}))}var $c,qc;(qc=$c||($c={})).ea="default",qc.Cache="cache";class zc{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Rc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=Rc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==$c.Cache}}
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
class Kc{constructor(t){this.key=t}}class Gc{constructor(t){this.key=t}}class Hc{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=li(),this.mutatedKeys=li(),this.Aa=Ys(t),this.Ra=new xc(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Mc,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Qs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ra:i,fa:n,ns:o,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const i=t.fa.G_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ln()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),r=null!=r&&r;const o=e&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==i.length||c?{snapshot:new Rc(this.query,t.Ra,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=li(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Gc(t))})),this.da.forEach((n=>{t.has(n)||e.push(new Kc(n))})),e}ba(t){this.Ta=t.Ts,this.da=li();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Rc.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Wc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qc{constructor(t){this.key=t,this.va=!1}}class Xc{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new Zs((t=>Hs(t)),Gs),this.Ma=new Map,this.xa=new Set,this.Oa=new Dr(sr.comparator),this.Na=new Map,this.La=new ha,this.Ba={},this.ka=new Map,this.qa=sa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Yc(t,e,n=!0){const r=wu(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Zc(r,e,n,!0),s}async function Jc(t,e){const n=wu(t);await Zc(n,e,!0,!1)}async function Zc(t,e,n,r){const s=await xa(t.localStore,qs(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await tu(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&nc(t.remoteStore,s),a}async function tu(t,e,n,r,s){t.Ka=(e,n,r)=>async function(t,e,n,r){let s=e.view.ma(n);s.ns&&(s=await Ra(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return fu(t,e.targetId,a.wa),a.snapshot}(t,e,n,r);const i=await Ra(t.localStore,e,!0),o=new Hc(e,i.Ts),a=o.ma(i.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);fu(t,n,u.wa);const l=new Wc(e,n,o);return t.Fa.set(e,l),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function eu(t,e,n){const r=Pn(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((t=>!Gs(t,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ma(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rc(r.remoteStore,s.targetId),hu(r,s.targetId)})).catch(dr)):(hu(r,s.targetId),await Ma(r.localStore,s.targetId,!0))}async function nu(t,e){const n=Pn(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rc(n.remoteStore,r.targetId))}async function ru(t,e,n){const r=_u(t);try{const t=await function(t,e){const n=Pn(t),r=Jn.now(),s=e.reduce(((t,e)=>t.add(e.key)),li());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ei(),c=li();return n.cs.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Pi(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ui(t.key,e,cs(e.value.mapValue),Ni.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:si(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ba[t.currentUser.toKey()];r||(r=new Dr(Xn)),r=r.insert(e,n),t.Ba[t.currentUser.toKey()]=r}(r,t.batchId,n),await pu(r,t.changes),await pc(r.remoteStore)}catch(t){const e=Nc(t,"Failed to persist write");n.reject(e)}}async function su(t,e){const n=Pn(t);try{const t=await Aa(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Na.get(e);r&&(On(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?On(r.va):t.removedDocuments.size>0&&(On(r.va),r.va=!1))})),await pu(n,t,e)}catch(t){await dr(t)}}function iu(t,e,n){const r=Pn(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fa.forEach(((n,r)=>{const s=r.view.Z_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Pn(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.j_)s.Z_(e)&&(r=!0)})),r&&jc(n)}(r.eventManager,e),t.length&&r.Ca.d_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ou(t,e,n){const r=Pn(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let t=new Dr(sr.comparator);t=t.insert(i,us.newNoDocument(i,Zn.min()));const n=li().add(i),s=new oo(Zn.min(),new Map,new Dr(Xn),t,n);await su(r,s),r.Oa=r.Oa.remove(i),r.Na.delete(e),mu(r)}else await Ma(r.localStore,e,!1).then((()=>hu(r,e,n))).catch(dr)}async function au(t,e){const n=Pn(t),r=e.batch.batchId;try{const t=await Ia(n.localStore,e);lu(n,r,null),uu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pu(n,t)}catch(t){await dr(t)}}async function cu(t,e,n){const r=Pn(t);try{const t=await function(t,e){const n=Pn(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(On(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);lu(r,e,n),uu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pu(r,t)}catch(n){await dr(n)}}function uu(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function lu(t,e,n){const r=Pn(t);let s=r.Ba[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||du(t,e)}))}function du(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(rc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mu(t))}function fu(t,e,n){for(const r of n)r instanceof Kc?(t.La.addReference(r.key,e),gu(t,r)):r instanceof Gc?(Nn("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||du(t,r.key)):Ln()}function gu(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Nn("SyncEngine","New document in limbo: "+n),t.xa.add(r),mu(t))}function mu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new sr(er.fromString(e)),r=t.qa.next();t.Na.set(r,new Qc(n)),t.Oa=t.Oa.insert(n,r),nc(t.remoteStore,new Yo(qs(Us(n.path)),r,"TargetPurposeLimboResolution",pr.oe))}}async function pu(t,e,n){const r=Pn(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((t,a)=>{o.push(r.Ka(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=_a.Wi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Ca.d_(s),await async function(t,e){const n=Pn(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>fr.forEach(e,(e=>fr.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>fr.forEach(e.Ui,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!mr(t))throw t;Nn("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.os.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(t,s)}}}(r.localStore,i))}async function yu(t,e){const n=Pn(t);if(!n.currentUser.isEqual(e)){Nn("SyncEngine","User change. New user:",e.toKey());const t=await Sa(n.localStore,e);n.currentUser=e,function(t,e){t.ka.forEach((t=>{t.forEach((t=>{t.reject(new Fn(Vn.CANCELLED,e))}))})),t.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await pu(n,t.hs)}}function vu(t,e){const n=Pn(t),r=n.Na.get(e);if(r&&r.va)return li().add(r.key);{let t=li();const r=n.Ma.get(e);if(!r)return t;for(const e of r){const r=n.Fa.get(e);t=t.unionWith(r.view.Va)}return t}}function wu(t){const e=Pn(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=su.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ou.bind(null,e),e.Ca.d_=Uc.bind(null,e.eventManager),e.Ca.$a=Bc.bind(null,e.eventManager),e}function _u(t){const e=Pn(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=au.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cu.bind(null,e),e}class Eu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ga(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ca(this.persistence,new ba,t.initialUser,this.serializer)}createPersistence(t){return new ya(wa.Zr,this.serializer)}createSharedClientState(t){return new Pa}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>iu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yu.bind(null,this.syncEngine),await Ic(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Oc}()}createDatastore(t){const e=Ga(t.databaseInfo.databaseId),n=function(t){return new za(t)}(t.databaseInfo);return function(t,e,n,r){return new Ya(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new Za(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>iu(this.syncEngine,t,0)),function(){return Fa.D()?new Fa:new Va}())}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Xc(t,e,n,r,s,i);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=Pn(t);Nn("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await ec(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}
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
class Tu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):xn("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Cu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=In.UNAUTHENTICATED,this.clientId=Qn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Nn("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Nn("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fn(Vn.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Nc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Su(t,e){t.asyncQueue.verifyOperationInProgress(),Nn("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Sa(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Iu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Au(t);Nn("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Sc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Sc(e.remoteStore,n))),t._onlineComponents=e}function Du(t){return"FirebaseError"===t.name?t.code===Vn.FAILED_PRECONDITION||t.code===Vn.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Au(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Nn("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Du(n))throw n;Mn("Error using user provided cache. Falling back to memory cache: "+n),await Su(t,new Eu)}}else Nn("FirestoreClient","Using default OfflineComponentProvider"),await Su(t,new Eu);return t._offlineComponents}async function ku(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Nn("FirestoreClient","Using user provided OnlineComponentProvider"),await Iu(t,t._uninitializedComponentsProvider._online)):(Nn("FirestoreClient","Using default OnlineComponentProvider"),await Iu(t,new bu))),t._onlineComponents}function Nu(t){return ku(t).then((t=>t.syncEngine))}async function xu(t){const e=await ku(t),n=e.eventManager;return n.onListen=Yc.bind(null,e.syncEngine),n.onUnlisten=eu.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Jc.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nu.bind(null,e.syncEngine),n}function Mu(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Tu({next:i=>{e.enqueueAndForget((()=>Fc(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Fn(Vn.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Fn(Vn.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new zc(Us(n.path),i,{includeMetadataChanges:!0,_a:!0});return Vc(t,o)}(await xu(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function Ru(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const Lu=new Map;
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
 */function Ou(t,e,n){if(!n)throw new Fn(Vn.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pu(t,e,n,r){if(!0===e&&!0===r)throw new Fn(Vn.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vu(t){if(!sr.isDocumentKey(t))throw new Fn(Vn.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ln()}function Uu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fn(Vn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new Fn(Vn.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Bu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Fn(Vn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fn(Vn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ru(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Fn(Vn.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Fn(Vn.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Fn(Vn.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ju{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fn(Vn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Fn(Vn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new jn;switch(t.type){case"firstParty":return new Kn(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Fn(Vn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Lu.get(t);e&&(Nn("ComponentProvider","Removing Datastore"),Lu.delete(t),e.terminate())}(this),Promise.resolve()}}function $u(t,e,n,r={}){var s;const i=(t=Uu(t,ju))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&Mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=In.MOCK_USER;else{e=it(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Fn(Vn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new In(i)}t._authCredentials=new $n(new Bn(e,n))}}
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
 */class qu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qu(this.firestore,t,this._query)}}class zu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ku(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zu(this.firestore,t,this._key)}}class Ku extends qu{constructor(t,e,n){super(t,e,Us(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zu(this.firestore,null,new sr(t))}withConverter(t){return new Ku(this.firestore,t,this._path)}}function Gu(t,e,...n){if(t=vt(t),1===arguments.length&&(e=Qn.newId()),Ou("doc","path",e),t instanceof ju){const r=er.fromString(e,...n);return Vu(r),new zu(t,null,new sr(r))}{if(!(t instanceof zu||t instanceof Ku))throw new Fn(Vn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(er.fromString(e,...n));return Vu(r),new zu(t.firestore,t instanceof Ku?t.converter:null,new sr(r))}}
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
class Hu{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ha(this,"async_queue_retry"),this.Eu=()=>{const t=Ka();t&&Nn("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const t=Ka();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=Ka();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise((()=>{}));const e=new Un;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.uu.push(t),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!mr(t))throw t;Nn("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(t){const e=this.au.then((()=>(this.Pu=!0,t().catch((t=>{this.hu=t,this.Pu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw xn("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Pu=!1,t))))));return this.au=e,e}enqueueAfterDelay(t,e,n){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const r=kc.createAndSchedule(this,t,e,n,(t=>this.Vu(t)));return this.lu.push(r),r}du(){this.hu&&Ln()}verifyOperationInProgress(){}async mu(){let t;do{t=this.au,await t}while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then((()=>{this.lu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.lu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.mu()}))}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class Wu extends ju{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Hu}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yu(this),this._firestoreClient.terminate()}}function Qu(t,e){const n="object"==typeof t?t:Ke(),r="string"==typeof t?t:e||"(default)",s=Ue(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=nt("firestore");t&&$u(s,...t)}return s}function Xu(t){return t._firestoreClient||Yu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yu(t){var e,n,r;const s=t._freezeSettings(),i=function(t,e,n,r){return new $r(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ru(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Cu(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
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
class Ju{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ju(Lr.fromBase64String(t))}catch(t){throw new Fn(Vn.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ju(Lr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Zu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Fn(Vn.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class tl{constructor(t){this._methodName=t}}
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
 */class el{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Fn(Vn.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Fn(Vn.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xn(this._lat,t._lat)||Xn(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nl{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
 */const rl=/^__.*__$/;class sl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ui(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fi(t,this.data,e,this.fieldTransforms)}}function il(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ln()}}class ol{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new ol(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Du:!1});return r.vu(t),r}Cu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Du:!1});return r.yu(),r}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return yl(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(0===t.length)throw this.Mu("Document fields must not be empty");if(il(this.wu)&&rl.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class al{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ga(t)}Nu(t,e,n,r=!1){return new ol({wu:t,methodName:e,Ou:n,path:rr.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cl(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new al(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ul(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);fl("Data must be an object, but it was:",o,r);const a=hl(r,o);let c,u;if(i.merge)c=new Mr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=gl(e,r,n);if(!o.contains(s))throw new Fn(Vn.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);vl(t,s)||t.push(s)}c=new Mr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new sl(new as(a),c,u)}function ll(t,e){if(dl(t=vt(t)))return fl("Unsupported field value:",e,t),hl(t,e);if(t instanceof tl)return function(t,e){if(!il(e.wu))throw e.Mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&4!==e.wu)throw e.Mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=ll(s,e.Fu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=vt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mi(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Jn.fromDate(t);return{timestampValue:Eo(e.serializer,n)}}if(t instanceof Jn){const n=new Jn(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Eo(e.serializer,n)}}if(t instanceof el)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ju)return{bytesValue:bo(e.serializer,t._byteString)};if(t instanceof zu){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:So(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof nl)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Mu("VectorValues must only contain numeric values.");return fi(e.serializer,t)}))}}}}}}(t,e);throw e.Mu(`Unsupported field value: ${Fu(t)}`)}(t,e)}function hl(t,e){const n={};return Ir(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,((t,r)=>{const s=ll(r,e.bu(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function dl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Jn||t instanceof el||t instanceof Ju||t instanceof zu||t instanceof tl||t instanceof nl)}function fl(t,e,n){if(!dl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Fu(n);throw"an object"===r?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function gl(t,e,n){if((e=vt(e))instanceof Zu)return e._internalPath;if("string"==typeof e)return pl(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ml=new RegExp("[~\\*/\\[\\]]");function pl(t,e,n){if(e.search(ml)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch(r){throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Fn(Vn.INVALID_ARGUMENT,a+t+c)}function vl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class wl{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new _l(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(El("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class _l extends wl{data(){return super.data()}}function El(t,e){return"string"==typeof e?pl(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}
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
 */class bl{convertValue(t,e="none"){switch(Kr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Ln()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Sr(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const s=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>Vr(t.doubleValue)));return new nl(s)}convertGeoPoint(t){return new el(Vr(t.latitude),Vr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Br(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jr(t));default:return null}}convertTimestamp(t){const e=Pr(t);return new Jn(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=er.fromString(t);On(Xo(n));const r=new qr(n.get(1),n.get(3)),s=new sr(n.popFirst(5));return r.isEqual(e)||xn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function Tl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class Cl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sl extends wl{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(El("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Il extends Sl{data(t={}){return super.data(t)}}
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
function Dl(t){t=Uu(t,zu);const e=Uu(t.firestore,Wu);return Mu(Xu(e),t._key).then((n=>xl(e,t,n)))}class Al extends bl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ju(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zu(this.firestore,null,e)}}function kl(t,e,n){t=Uu(t,zu);const r=Uu(t.firestore,Wu),s=Tl(t.converter,e,n);return Nl(r,[ul(cl(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Ni.none())])}function Nl(t,e){return function(t,e){const n=new Un;return t.asyncQueue.enqueueAndForget((async()=>ru(await Nu(t),e,n))),n.promise}(Xu(t),e)}function xl(t,e,n){const r=n.docs.get(e._key),s=new Al(t);return new Sl(t,s,e._key,r,new Cl(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */new WeakMap;
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
 */!function(t,e=!0){!function(t){Dn=t}(qe),Fe(new wt("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new Wu(new qn(t.getProvider("auth-internal")),new Hn(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Fn(Vn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),Ge(Sn,"4.7.1",t),Ge(Sn,"4.7.1","esm2017")}();var Ml="firebase",Rl="10.13.1";
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
Ge(Ml,Rl,"app");const Ll={apiKey:"AIzaSyCp_0J-Ejp3Ra_jhl0bpA05Z40pEba5LpI",authDomain:"superrabbithero-d28ad.firebaseapp.com",projectId:"superrabbithero-d28ad",storageBucket:"superrabbithero-d28ad.appspot.com",messagingSenderId:"1001601054901",appId:"1:1001601054901:web:750109108e47d5d1b466fc",measurementId:"G-4Z4MT2MJXC"},Ol=ze(Ll),Pl=Qu(Ol);var Vl={computed:{compareDate(){return(t,e=0)=>{if(t){const n=t.split("/"),r=new Date(Number(n[0]),Number(n[1])-1,Number(n[2])),s=new Date;return s.setDate(s.getDate()+e),`${r.getYear()}${r.getMonth()}${r.getDate()}`==`${s.getYear()}${s.getMonth()}${s.getDate()}`}return!1}},dragedManagementClass(){let t={"list-item":!0,draged:this.draged};const e=[2,0,3,1];if(this.dragedManagement){const n=this.dragedManagement.urgent?1:0,r=this.dragedManagement.important?1:0,s=e[2*r+n],i=`item-${s}`;t[i]=!0}return t},dragedDotColor(){const t=[2,0,3,1];if(this.dragedManagement){const e=this.dragedManagement.urgent?1:0,n=this.dragedManagement.important?1:0,r=t[2*n+e];return{color:this.fourColors[r]}}},itemFinished(){return t=>t.finishedDate.includes(this.currentDate)}},components:{calender:$.Z},data(){return{fourColors:["#f9A822","#F96635","#2bbaa5","#93d3a2"],currentWeek:[],today:null,currentDate:null,currentManagementList:[[],[],[],[]],modal_show:{addPlanShow:!1},management:{date:null,deadline:null,repeat:0,content:"",urgent:!1,important:!1,repeatDate:[],finishedDate:[]},managementList:[],updateIndex:null,dragedManagement:null,draged:!1,drag2Index:null,pressTimer:null,disx:null,disy:null,ifNeedSave:!1}},mounted(){this.fetchJson(),console.log(this.managementList),this.getWeekDate(),this.toDate(this.getFormattedDate(this.today)),window.addEventListener("beforeunload",this.handleBeforeUnload)},unmounted(){window.removeEventListener("beforeunload",this.handleBeforeUnload)},methods:{listItemDown(t,e){const n=`planIndex${e.index}`,r=document.getElementById(n);r.contains(t.target)||(document.addEventListener("pointerup",this.listItemUp),document.addEventListener("pointermove",this.listItemMove),this.dragedManagement=e,this.pressTimer=setTimeout((()=>{this.draged=!0;const e=t.target;this.disx=t.pageX-e.offsetLeft,this.disy=t.pageY-e.offsetTop;const n=this.$refs.dragedManagement;n.style.left=t.pageX-this.disx+"px",n.style.top=t.pageY-this.disy+"px",clearTimeout(this.pressTimer),this.pressTimer=null}),500))},listItemMove(){if(this.draged){const t=document.getElementById("quadrantList4").getBoundingClientRect(),e=t.left,n=t.top;let r=4;event.clientX<e?r=event.clientY<n?1:3:event.clientY<n&&(r=2),this.drag2Index=r;const s=this.$refs.dragedManagement;s.style.left=event.pageX-this.disx+"px",s.style.top=event.pageY-this.disy+"px"}},listItemUp(t){if(this.pressTimer&&(clearTimeout(this.pressTimer),this.showAddPlan(this.dragedManagement),this.updateIndex=this.dragedManagement.index,this.dragedManagement=null),null!=this.dragedManagement){switch(this.drag2Index){case 1:this.dragedManagement.urgent=!0,this.dragedManagement.important=!1;break;case 2:this.dragedManagement.urgent=!0,this.dragedManagement.important=!0;break;case 3:this.dragedManagement.urgent=!1,this.dragedManagement.important=!1;break;case 4:this.dragedManagement.urgent=!1,this.dragedManagement.important=!0;break}this.updateManagement(this.dragedManagement)}this.draged=!1,this.dragedManagement=null,this.drag2Index=null,this.getCurManagementData(this.currentDate),document.removeEventListener("pointerup",this.listItemUp),document.removeEventListener("pointermove",this.listItemMove)},deleteItem(t){this.deleteManagement(t),this.getCurManagementData(this.currentDate)},finishItem(t){let e=null;t.finishedDate.forEach(((t,n)=>{this.currentDate!=t||(e=n)})),console.log(e),null==e?t.finishedDate.push(this.currentDate):t.finishedDate.splice(e,1),this.updateManagement(t),this.getCurManagementData(this.currentDate)},updateManagement(t){const e=t.index;delete t.index,this.managementList[e]=t,this.ifNeedSave=!0},deleteManagement(t){const e=t.index;this.managementList.splice(e,1),this.ifNeedSave=!0},toDate(t){this.getCurManagementData(t),this.currentDate=t},compare2Date(t,e){const n=new Date(t.split("T")[0]),r=new Date(e.split("T")[0]),s=n.getTime(),i=r.getTime();return s<i?-1:s>i?1:0},daysBetween(t,e){let n=t.split("/");const r=new Date(Number(n[0]),Number(n[1])-1,Number(n[2]));n=e.split("/");const s=new Date(Number(n[0]),Number(n[1])-1,Number(n[2])),i=864e5;return Math.round(Math.abs((r-s)/i))},getCurManagementData(t){this.currentManagementList=[[],[],[],[]],this.managementList.forEach(((e,n)=>{if(0==this.compare2Date(t,e.date))this.pushCurManagement(n,e);else if(1==this.compare2Date(t,e.date)){const r=Number(e.repeat);r>0&&this.daysBetween(t,e.date)%r==0?this.pushCurManagement(n,e):-1==r?t.split("/")[1]==e.date.split("/")[1]&&t.split("/")[2]==e.date.split("/")[2]&&this.pushCurManagement(n,e):-2==r&&e.repeatDate.includes(t)&&this.pushCurManagement(n,e)}}))},pushCurManagement(t,e){const n=[2,0,3,1],r=e.urgent?1:0,s=e.important?1:0;e.index=t,this.currentManagementList[n[2*s+r]].push(e)},getDate(t){const e=t.split("/"),n=new Date(Number(e[0]),Number(e[1])-1,Number(e[2]));return n},getFormattedDate(t,e=null){const n=new Date(t);e&&n.setDate(n.getDate()+e);const r=n.getFullYear(),s=n.getMonth()+1,i=n.getDate();return`${r}/${s}/${i}`},initManagementDate(){this.updateIndex=null,this.management={date:null,deadline:null,repeat:0,content:"",urgent:!1,important:!1,repeatDate:[],finishedDate:[]}},addManagement(){const t=this.management;if(t.date&&t.content){if(-2==t.repeat){const e=this.getDate(t.date),n=[0,1,3,7,14,29,59];t.repeatDate=[],n.forEach((n=>{t.repeatDate.push(this.getFormattedDate(e,n))}))}this.updateIndex?(this.managementList[this.updateIndex]=this.management,this.$toast.show("修改成功","success"),this.updateIndex=null,this.modal_show.addPlanShow=!1):(this.managementList.push(this.management),this.$toast.show("添加成功","success"),this.modal_show.addPlanShow=!1)}else this.$toast.show("时间或内容不得为空","error");console.log(this.managementList),this.ifNeedSave=!0},getManagementDate(t=0){const e=new Date;e.setDate(e.getDate()+t),this.management.date=`${e.getYear()+1900}/${e.getMonth()+1>10?"":0}${e.getMonth()+1}/${e.getDate()>10?"":0}${e.getDate()}`},showAddPlan(t=null){if(!this.draged){if(null==t)this.initManagementDate();else if([1,2,3,4].includes(t))switch(this.initManagementDate(),t){case 1:this.management.urgent=!0,this.management.important=!1;break;case 2:this.management.urgent=!0,this.management.important=!0;break;case 3:this.management.urgent=!1,this.management.important=!1;break;case 4:this.management.urgent=!1,this.management.important=!0;break}else this.management=t;this.modal_show.addPlanShow=!0}},preWeek(){const t=new Date(this.currentWeek[0]);t.setDate(t.getDate()-7),this.getWeekDate(t)},nextWeek(){const t=new Date(this.currentWeek[0]);t.setDate(t.getDate()+7),this.getWeekDate(t)},getWeekDate(t=null){const e=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()-e),n};this.today=new Date,t=t?new Date(t):e(this.today,this.today.getDay());for(var n=0;n<7;n++)this.currentWeek[n]=e(t,-n)},async fetchJson(){try{const t=Gu(Pl,"jsonfiles","managementjson"),e=await Dl(t);e.exists()?(this.managementList=e.data().tasks,this.getCurManagementData(this.currentDate),console.log("Document data:",this.jsonData)):console.log("No such document!")}catch(t){console.error("Error fetching document:",t)}},async saveJson(){const t=this.managementList;try{await kl(Gu(Pl,"jsonfiles","managementjson"),{tasks:t}),this.ifNeedSave=!1,console.log("Document successfully written!")}catch(e){console.error("Error writing document:",e)}},handleBeforeUnload(t){if(this.ifNeedSave){const e="你有未保存的更改，是否保存并离开";return t.returnValue=e,e}},confirmLeave(t,e,n){if(this.ifNeedSave){const t=window.confirm("你有未保存的更改，确定要离开吗？");t?n():n(!1)}else n()}},beforeRouteLeave(t,e,n){this.confirmLeave(t,e,n)}},Fl=n(8998);const Ul=(0,Fl.Z)(Vl,[["render",j]]);var Bl=Ul}}]);
//# sourceMappingURL=154.d3747aa0.js.map