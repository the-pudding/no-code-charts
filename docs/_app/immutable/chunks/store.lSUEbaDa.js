import{C as M,at as T,ad as L,T as P,K as V,au as W,an as x,G as K,D as j,b as U,av as J,h as g,aw as q,g as D,z as b,i as k,d as h,j as z,ax as N,H as A,a as Q,R as X,f as Z,ay as ee,P as te,I as re,az as ne,c as ae,q as oe,o as se,k as ie,n as R,m as ue,V as ce,a6 as fe,a3 as le}from"./runtime.LSbEe0xc.js";import{a as de}from"./template.CntYxkml.js";function Le(e,t){if(t){const r=document.body;e.autofocus=!0,M(()=>{document.activeElement===r&&e.focus()})}}let H=!1;function _e(){H||(H=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function B(e){var t=P,r=V;T(null),L(null);try{return e()}finally{T(t),L(r)}}function ke(e,t,r,a=r){e.addEventListener(t,()=>B(r));const o=e.__on_r;o?e.__on_r=()=>{o(),a()}:e.__on_r=a,_e()}const Y=new Set,I=new Set;function pe(e,t,r,a){function o(n){if(a.capture||w.call(t,n),!n.cancelBubble)return B(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?M(()=>{t.addEventListener(e,o,a)}):t.addEventListener(e,o,a),o}function Se(e,t,r,a,o){var n={capture:a,passive:o},c=pe(e,t,r,n);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(e,c,n)})}function Ae(e){for(var t=0;t<e.length;t++)Y.add(e[t]);for(var r of I)r(e)}function w(e){var C;var t=this,r=t.ownerDocument,a=e.type,o=((C=e.composedPath)==null?void 0:C.call(e))||[],n=o[0]||e.target,c=0,v=e.__root;if(v){var d=o.indexOf(v);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var _=o.indexOf(t);if(_===-1)return;d<=_&&(c=d)}if(n=o[c]||e.target,n!==t){x(e,"currentTarget",{configurable:!0,get(){return n||r}});var S=P,f=V;T(null),L(null);try{for(var s,i=[];n!==null;){var l=n.assignedSlot||n.parentNode||n.host||null;try{var p=n["__"+a];if(p!==void 0&&!n.disabled)if(K(p)){var[G,...$]=p;G.apply(n,[e,...$])}else p.call(n,e)}catch(E){s?i.push(E):s=E}if(e.cancelBubble||l===t||l===null)break;n=l}if(s){for(let E of i)queueMicrotask(()=>{throw E});throw s}}finally{e.__root=t,delete e.currentTarget,T(S),L(f)}}}let u;function he(){u=void 0}function De(e){let t=null,r=g;var a;if(g){for(t=h,u===void 0&&(u=z(document.head));u!==null&&(u.nodeType!==8||u.data!==q);)u=D(u);u===null?b(!1):u=k(D(u))}g||(a=document.head.appendChild(j()));try{U(()=>e(a),J)}finally{r&&(b(!0),u=h,k(t))}}function Ne(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ve=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Re(e){return ve.includes(e)}const ye={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ie(e){return e=e.toLowerCase(),ye[e]??e}const be=["touchstart","touchmove"];function ge(e){return be.includes(e)}function Oe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function we(e,t){return F(e,t)}function Ve(e,t){N(),t.intro=t.intro??!1;const r=t.target,a=g,o=h;try{for(var n=z(r);n&&(n.nodeType!==8||n.data!==q);)n=D(n);if(!n)throw A;b(!0),k(n),Q();const c=F(e,{...t,anchor:n});if(h===null||h.nodeType!==8||h.data!==X)throw Z(),A;return b(!1),c}catch(c){if(c===A)return t.recover===!1&&ee(),N(),te(r),b(!1),we(e,t);throw c}finally{b(a),k(o),he()}}const y=new Map;function F(e,{target:t,anchor:r,props:a={},events:o,context:n,intro:c=!0}){N();var v=new Set,d=f=>{for(var s=0;s<f.length;s++){var i=f[s];if(!v.has(i)){v.add(i);var l=ge(i);t.addEventListener(i,w,{passive:l});var p=y.get(i);p===void 0?(document.addEventListener(i,w,{passive:l}),y.set(i,1)):y.set(i,p+1)}}};d(re(Y)),I.add(d);var _=void 0,S=ne(()=>{var f=r??t.appendChild(j());return ae(()=>{if(n){oe({});var s=ie;s.c=n}o&&(a.$$events=o),g&&de(f,null),_=e(f,a)||{},g&&(V.nodes_end=h),n&&se()}),()=>{var l;for(var s of v){t.removeEventListener(s,w);var i=y.get(s);--i===0?(document.removeEventListener(s,w),y.delete(s)):y.set(s,i)}I.delete(d),O.delete(_),f!==r&&((l=f.parentNode)==null||l.removeChild(f))}});return O.set(_,S),_}let O=new WeakMap;function Ce(e){const t=O.get(e);t&&t()}function Ee(e,t,r){if(e==null)return t(void 0),R;const a=ue(()=>e.subscribe(t,r));return a.unsubscribe?()=>a.unsubscribe():a}let m=!1;function He(e,t,r){const a=r[t]??(r[t]={store:null,source:ce(void 0),unsubscribe:R});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=R;else{var o=!0;a.unsubscribe=Ee(e,n=>{o?a.source.v=n:le(a.source,n)}),o=!1}return fe(a.source)}function Me(){const e={};return W(()=>{for(var t in e)e[t].unsubscribe()}),e}function Pe(e){var t=m;try{return m=!1,[e(),m]}finally{m=t}}export{Oe as a,He as b,_e as c,pe as d,Ae as e,Le as f,Re as g,Pe as h,Ne as i,Ve as j,De as k,ke as l,we as m,Ie as n,Se as o,Me as s,Ce as u};
