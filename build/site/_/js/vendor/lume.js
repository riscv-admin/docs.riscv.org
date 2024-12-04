!function(){"use strict";const e=Symbol("defaultState"),n=Symbol("delegatesFocus"),t=Symbol("firstRender"),o=Symbol("focusTarget"),s=Symbol("hasDynamicTemplate"),r=Symbol("ids"),i=Symbol("nativeInternals"),a=Symbol("raiseChangeEvents"),c=Symbol("render"),l=Symbol("renderChanges"),d=Symbol("rendered"),g=Symbol("rendering"),u=Symbol("setState"),m=Symbol("shadowRoot"),h=Symbol("shadowRootMode"),p=Symbol("state"),b=Symbol("stateEffects"),f=Symbol("template"),y={tabindex:"tabIndex"},v={tabIndex:"tabindex"};function S(e){if(e===HTMLElement)return[];const n=Object.getPrototypeOf(e.prototype).constructor;let t=n.observedAttributes;t||(t=S(n));const o=Object.getOwnPropertyNames(e.prototype).filter((n=>{const t=Object.getOwnPropertyDescriptor(e.prototype,n);return t&&"function"==typeof t.set})).map((e=>function(e){let n=v[e];if(!n){const t=/([A-Z])/g;n=e.replace(t,"-$1").toLowerCase(),v[e]=n}return n}(e))).filter((e=>t.indexOf(e)<0));return t.concat(o)}const w={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0},x=Symbol("state"),k=Symbol("raiseChangeEventsInNextRender"),z=Symbol("changedSinceLastRender");function E(e,n){const t={};for(const r in n)o=n[r],s=e[r],(o instanceof Date&&s instanceof Date?o.getTime()===s.getTime():o===s)||(t[r]=!0);var o,s;return t}const T=new Map,L=Symbol("shadowIdProxy"),C=Symbol("proxyElement"),I={get(e,n){const t=e[C][m];return t&&"string"==typeof n?t.getElementById(n):null}},D=function(e){return class extends e{attributeChangedCallback(e,n,t){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,n,t),t!==n&&!this[g]){const n=function(e){let n=y[e];if(!n){const t=/-([a-z])/g;n=e.replace(t,(e=>e[1].toUpperCase())),y[e]=n}return n}(e);if(n in this){const o=w[e]?function(e,n){return"boolean"==typeof n?n:"string"==typeof n&&(""===n||e.toLowerCase()===n.toLowerCase())}(e,t):t;this[n]=o}}}static get observedAttributes(){return S(this)}}}(function(n){class o extends n{constructor(){super(),this[t]=void 0,this[a]=!1,this[z]=null,this[u](this[e])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[l]()}get[e](){return super[e]||{}}[c](e){super[c]&&super[c](e)}[l](){void 0===this[t]&&(this[t]=!0);const e=this[z];if(this[t]||e){const n=this[a];this[a]=this[k],this[k]=!1,this[g]=!0,this[c](e),this[g]=!1,this[z]=null,this[d](e),this[t]=!1,this[a]=n}}[d](e){super[d]&&super[d](e)}async[u](e){this[g]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.\nSee https://elix.org/documentation/ReactiveMixin.`);const{state:n,changed:o}=function(e,n){const t=Object.assign({},e[x]),o={};let s=n;for(;;){const n=E(t,s);if(0===Object.keys(n).length)break;Object.assign(t,s),Object.assign(o,n),s=e[b](t,n)}return{state:t,changed:o}}(this,e);if(this[x]&&0===Object.keys(o).length)return;Object.freeze(n),this[x]=n,this[a]&&(this[k]=!0);const s=void 0===this[t]||null!==this[z];this[z]=Object.assign(this[z]||{},o),this.isConnected&&!s&&(await Promise.resolve(),this[l]())}get[p](){return this[x]}[b](e,n){return super[b]?super[b](e,n):{}}}return"true"===new URLSearchParams(location.search).get("elixdebug")&&Object.defineProperty(o.prototype,"state",{get(){return this[p]}}),o}((O=HTMLElement,class extends O{get[r](){if(!this[L]){const e={[C]:this};this[L]=new Proxy(e,I)}return this[L]}[c](e){if(super[c]&&super[c](e),void 0===this[m]){const e=function(e){let n=e[s]?void 0:T.get(e.constructor);if(void 0===n){if(n=e[f],n&&!(n instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${e.constructor.name} must return an HTMLTemplateElement.`;e[s]||T.set(e.constructor,n||null)}return n}(this);if(e){const t=this.attachShadow({delegatesFocus:this[n],mode:this[h]}),o=document.importNode(e.content,!0);t.append(o),this[m]=t}else this[m]=null}}get[h](){return"open"}})));var O;const P=Symbol("checkSize"),R=Symbol("closestAvailableItemIndex"),A=Symbol("contentSlot"),j=e,M=Symbol("defaultTabIndex"),$=n,U=Symbol("effectEndTarget"),N=t,_=o,q=Symbol("getItemText"),F=Symbol("goDown"),H=Symbol("goEnd"),W=Symbol("goFirst"),B=Symbol("goLast"),Z=Symbol("goLeft"),G=Symbol("goNext"),J=Symbol("goPrevious"),K=Symbol("goRight"),Q=Symbol("goStart"),V=Symbol("goToItemWithPrefix"),X=Symbol("goUp"),Y=s,ee=r,ne=Symbol("inputDelegate"),te=Symbol("itemsDelegate"),oe=Symbol("keydown"),se=Symbol("mouseenter"),re=Symbol("mouseleave"),ie=i,ae=a,ce=c,le=l,de=Symbol("renderDataToElement"),ge=d,ue=g,me=Symbol("scrollTarget"),he=u,pe=m,be=h,fe=Symbol("startEffect"),ye=p,ve=b,Se=Symbol("swipeDown"),we=Symbol("swipeDownComplete"),xe=Symbol("swipeLeft"),ke=Symbol("swipeLeftTransitionEnd"),ze=Symbol("swipeRight"),Ee=Symbol("swipeRightTransitionEnd"),Te=Symbol("swipeUp"),Le=Symbol("swipeUpComplete"),Ce=Symbol("swipeStart"),Ie=Symbol("swipeTarget"),De=Symbol("tap"),Oe=f,Pe=Symbol("toggleSelectedFlag");"true"===new URLSearchParams(location.search).get("elixdebug")&&(window.elix={internal:{checkSize:P,closestAvailableItemIndex:R,contentSlot:A,defaultState:j,defaultTabIndex:M,delegatesFocus:$,effectEndTarget:U,firstRender:N,focusTarget:_,getItemText:q,goDown:F,goEnd:H,goFirst:W,goLast:B,goLeft:Z,goNext:G,goPrevious:J,goRight:K,goStart:Q,goToItemWithPrefix:V,goUp:X,hasDynamicTemplate:Y,ids:ee,inputDelegate:ne,itemsDelegate:te,keydown:oe,mouseenter:se,mouseleave:re,nativeInternals:ie,event:event,raiseChangeEvents:ae,render:ce,renderChanges:le,renderDataToElement:de,rendered:ge,rendering:ue,scrollTarget:me,setState:he,shadowRoot:pe,shadowRootMode:be,startEffect:fe,state:ye,stateEffects:ve,swipeDown:Se,swipeDownComplete:we,swipeLeft:xe,swipeLeftTransitionEnd:ke,swipeRight:ze,swipeRightTransitionEnd:Ee,swipeUp:Te,swipeUpComplete:Le,swipeStart:Ce,swipeTarget:Ie,tap:De,template:Oe,toggleSelectedFlag:Pe}});const Re=(e,...n)=>Ae.html(e,...n).content,Ae={html(e,...n){const t=document.createElement("template");return t.innerHTML=String.raw(e,...n),t}};var je={exports:{}},Me={exports:{}},$e=Object.freeze({__proto__:null,reflectAttribute:(e,n,t)=>{t?e.setAttribute(n,"boolean"==typeof t?"":t):e.removeAttribute(n)},delegateAttribute:(e,n,t,o)=>{o?(n.setAttribute(t,"boolean"==typeof o?"":o),e.removeAttribute(t)):n.removeAttribute(t)},replaceDefaultSlot:(e,n)=>{const t=e.querySelector("slot:not([name])");t&&t.replaceWith(n)},removeSlot:(e,n)=>{const t=e.querySelector(`slot[name="${n}"]`);t&&t.remove()},dispatchCustomEvent:(e,n,t)=>{const o=e.tagName.split("-")[0].toLowerCase(),s=new CustomEvent(o+"-"+n,t);return e.dispatchEvent(s),s}});Me.exports=function(e){var n=e.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})})),t}($e),je.exports=Me.exports;const Ue=new DOMParser,Ne=new Map;class _e extends D{constructor(){super(),this._iconSets=[{name:"sds",resolver:e=>`https://api.lightningdesignsystem.com/sds/icons/foundation/${e}.svg`}]}get[j](){return Object.assign(super[j],{set:"sds"})}get symbol(){return this[ye].symbol}set symbol(e){this[he]({symbol:e})}get set(){return this[ye].set}set set(e){this[he]({set:e})}get src(){return this[ye].src}set src(e){this[he]({src:e})}get ariaLabel(){return this[ye].ariaLabel}set ariaLabel(e){this[he]({ariaLabel:e})}get prefetch(){return this[ye].prefetch}set prefetch(e){this[he]({prefetch:e})}registerIconSet(e){e.forEach((e=>{this._iconSets.push({name:e.name,resolver:e.resolver,mutator:e.mutator})}))}unregisterIconSet(e){this._iconSets=this._iconSets.filter((n=>n.name!==e))}getIconSet(e){return this._iconSets.filter((n=>n.name===e))[0]}getIconUrl(e,n){return e&&n?e.resolver(n):this[ye].src}getSymbolParams(e){const n=this.getIconSet(this[ye].set);return{set:n,url:this.getIconUrl(n,e)}}async fetchIcon(e){if(Ne.has(e))return Ne.get(e);{const n=await fetch(e).then((async n=>{if(n.ok){const t=document.createElement("div");t.innerHTML=await n.text();const o=t.firstElementChild;return{url:e,svg:o&&"svg"===o.tagName.toLowerCase()?o.outerHTML:""}}throw Error()}));return Ne.set(e,n),n}}async prefetchIcons(e){const n=e.split(",").map((e=>e.trim()));return await Promise.all(n.map((async e=>{try{const{url:n}=this.getSymbolParams(e);return await this.fetchIcon(n)}catch{throw Error(`Unable to prefetch the symbol "${e}". Double check your symbol exists and use comma separated values.`)}})))}async createIcon(){const{set:e,url:n}=this.getSymbolParams(this[ye].symbol);if(!n||!e)throw Error(`Unable to create an icon using set ${this[ye].set} and URL ${n}. Double check your registered set names and paths.`);{const t=this.shadowRoot.querySelector("slot")||this.shadowRoot.querySelector("svg");try{const o=await this.fetchIcon(n);let s=Ue.parseFromString(o.svg,"text/html").body.querySelector("svg");e&&e.mutator&&!this[ye].src&&(s=e.mutator(s)),s.setAttribute("aria-hidden","true"),t.replaceWith(s)}catch{throw Error(`Error creating icon using ${n}`)}}}[ce](e){super[ce](e);const n=this.shadowRoot,t=n.querySelector("slot");if(t&&t.assignedElements().length>0||!e.src&&!e.symbol||this.createIcon(),e.prefetch&&this.prefetchIcons(this[ye].prefetch),e.ariaLabel){const{ariaLabel:e}=this[ye],t=n.querySelector('[part~="icon"]');e&&(t.setAttribute("role","img"),je.exports.delegateAttribute(this,t,"aria-label",e))}}get[Oe](){return Ae.html`
      <style>
        ${"/***************************************\n * This file is automatically generated.\n * Please do not edit this file. Source file is common.css\n ***************************************/\n\n/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved\nLicensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */\n\n/**\n * Normalize box sizing to border box for all browsers.\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--sds-s-heading-font-weight);\n  margin-block-start: var(--sds-s-heading-spacing-block-start, var(--sds-s-heading-spacing-block));\n  margin-block-end: var(--sds-s-heading-spacing-block-end, var(--sds-s-heading-spacing-block));\n}\n\np {\n  margin-block-start: var(--sds-s-content-spacing-block-start, var(--sds-s-content-spacing-block));\n  margin-block-end: var(--sds-s-content-spacing-block-end, var(--sds-s-content-spacing-block));\n}\n\nol,\nul {\n  list-style: none;\n  padding: 0;\n  margin-block-start: var(--sds-s-content-spacing-block-start, var(--sds-s-content-spacing-block));\n  margin-block-end: var(--sds-s-content-spacing-block-end, var(--sds-s-content-spacing-block));\n}\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  appearance: button;\n  cursor: pointer;\n}\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\ninput:focus,\nbutton:focus,\nselect:focus,\ntextarea:focus {\n  outline-offset: 0;\n}\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: var(--sds-g-font-family-monospace);\n}\n\nimg,\n[type='image'] {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  border-style: none;\n}\n"}
        ${"/***************************************\n * This file is automatically generated.\n * Please do not edit this file. Source file is icon.css\n ***************************************/\n\n/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved\n  Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */\n\n:host {\n  /**\n   * Establish independent formatting context, we don't want ancestor rules affecting our layout.\n   * This assumes there will not be a direct, child inline-level element.\n   * See https://www.w3.org/TR/css-display-3/#establish-an-independent-formatting-context\n   */\n  display: inline-flex;\n}\n\n[part~='boundary'] {\n  padding-block-start: var(--sds-c-icon-spacing-block-start, var(--sds-c-icon-spacing));\n  padding-block-end: var(--sds-c-icon-spacing-block-end, var(--sds-c-icon-spacing));\n  padding-inline-start: var(--sds-c-icon-spacing-inline-start, var(--sds-c-icon-spacing));\n  padding-inline-end: var(--sds-c-icon-spacing-inline-end, var(--sds-c-icon-spacing));\n  border-radius: var(--sds-c-icon-radius-border);\n  border-width: var(--sds-c-icon-sizing-border, 1px);\n  border-style: solid;\n  border-color: var(--sds-c-icon-color-border, transparent);\n  background-color: var(--sds-c-icon-color-background);\n}\n\n[part~='icon'] {\n  display: flex; /* See line #5 */\n  height: var(--sds-c-icon-sizing-height, var(--sds-c-icon-sizing));\n  width: var(--sds-c-icon-sizing-width, var(--sds-c-icon-sizing));\n  color: var(--sds-c-icon-color-foreground);\n}\n\n/**\n * Normalize svgs and control width/height with Styling Hooks\n */\nsvg {\n  width: 100%;\n  height: 100%;\n}\n"}
      </style>
      ${'<div part="boundary">\n  <div part="icon">\n    <slot></slot>\n  </div>\n</div>\n'}
    `}}var qe=class extends _e{constructor(){super(),this.registerIconSet([{name:"classic",resolver:e=>`/lume/lume-icons/0.1.47/classic/${e}.svg`}]),this.set="default"}get[Oe](){const e=super[Oe];return e.content.append(Re`
      <style>
       ${"/* LUME NORMALIZE */\n/* Setting the default font size so the rem values are predictable */\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  font-family: var(--lume-g-font-family);\n  font-size: var(--lume-g-font-size-base);\n  line-height: 1.5;\n  color: var(--lume-g-color-neutral-40);\n}\n\n* {\n  box-sizing: border-box;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n/* Separated these 3 any-link pseudo selectors in 3 different section\n * because we cannot use a single section with commas\n */\n:-webkit-any-link {\n  text-decoration: none;\n}\n\n:-moz-any-link {\n  text-decoration: none;\n}\n\n:any-link {\n  text-decoration: none;\n}\n\na {\n  text-decoration: none;\n  background-color: transparent;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nblockquote {\n  color: var(--lume-g-color-neutral-40);\n  padding: 10px 20px;\n  margin: 10px 0;\n  border-left: 3px solid var(--lume-g-color-neutral-65);\n}\n\ncode {\n  font-family: var(--lume-g-font-family-code);\n  padding: 2px 4px;\n  color: var(--lume-g-color-neutral-40);\n  background-color: var(--lume-g-color-neutral-95);\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nfieldset label {\n  display: inline-block;\n}\n\nfieldset label:first-child {\n  margin-top: 0;\n}\n\nfieldset legend {\n  font-size: var(--lume-g-font-size-6);\n  margin: 0 0 10px;\n  padding: 0;\n  font-weight: 300;\n  color: var(--lume-g-color-neutral-40);\n  width: 100%;\n  border-bottom: 1px solid var(--lume-g-color-neutral-80);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: var(--lume-g-font-family);\n  font-weight: 700;\n}\n\nh1 {\n  font-size: var(--lume-g-font-size-10);\n}\n\nh2 {\n  font-size: var(--lume-g-font-size-9);\n}\n\nh3 {\n  font-size: var(--lume-g-font-size-8);\n}\n\nh4 {\n  font-size: var(--lume-g-font-size-7);\n}\n\nh5 {\n  font-size: var(--lume-g-font-size-5);\n}\n\nh6 {\n  font-size: var(--lume-g-font-size-4);\n}\n\nh1,\nh2,\nh3 {\n  margin: 20px 0 10px;\n  color: var(--lume-g-color-neutral-30);\n}\n\nh4,\nh5,\nh6,\np {\n  margin: 10px 0;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--lume-g-color-neutral-80);\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  border: 0;\n}\n\npre {\n  padding: 9.5px;\n  margin: 0 0 10px;\n  background-color: var(--lume-g-color-neutral-95);\n  border: 1px solid var(--lume-g-color-neutral-70);\n  word-break: break-all;\n  word-wrap: break-word;\n  line-height: 1.42;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nlume-button + lume-button {\n  margin-inline-start: var(--lume-c-button-spacing-sibling-inline-start, 0.5rem);\n}\n"}
       ${":host {\n  --sds-c-icon-spacing-block-start: var(--lume-c-icon-spacing-block-start);\n  --sds-c-icon-spacing: var(--lume-c-icon-spacing);\n  --sds-c-icon-spacing-block-end: var(--lume-c-icon-spacing-block-end);\n  --sds-c-icon-spacing: var(--lume-c-icon-spacing);\n  --sds-c-icon-spacing-inline-start: var(--lume-c-icon-spacing-inline-start);\n  --sds-c-icon-spacing: var(--lume-c-icon-spacing);\n  --sds-c-icon-spacing-inline-end: var(--lume-c-icon-spacing-inline-end);\n  --sds-c-icon-spacing: var(--lume-c-icon-spacing);\n  --sds-c-icon-radius-border: var(--lume-c-icon-radius-border);\n  --sds-c-icon-sizing-border: var(--lume-c-icon-sizing-border);\n  --sds-c-icon-color-border: var(--lume-c-icon-color-border);\n  --sds-c-icon-color-background: var(--lume-c-icon-color-background);\n  --sds-c-icon-sizing-height: var(--lume-c-icon-sizing-height);\n  --sds-c-icon-sizing: var(--lume-c-icon-sizing);\n  --sds-c-icon-sizing-width: var(--lume-c-icon-sizing-width);\n  --sds-c-icon-sizing: var(--lume-c-icon-sizing);\n  --sds-c-icon-color-foreground: var(--lume-c-icon-color-foreground);\n}\n"}
       ${'[part~="icon"] {\n  fill: currentColor;\n}\n'}
      </style>
    `),e}};(()=>{const e=window.customElements;e.get("lume-icon")||e.define("lume-icon",qe)})()}();