import"../chunks/disclose-version.Bg9kRutz.js";import{h as B,a as le,d as ee,b as fe,E as ge,c as be,j as ye,D as _e,z as ce,i as de,K as we,aA as pe,p as xe,w as Ce,e as ke,an as f,r as v,am as C,v as h,t as E,a6 as i,ah as A,u as te,o as Z,q as Q,n as ae,a3 as ne,ar as J,aB as De,aC as Ie}from"../chunks/runtime.nKgyQSMo.js";import{a as Se,b as n,t as w,d as D,e as je}from"../chunks/template.DM2p0hny.js";import{s as oe,p as O,a as ue}from"../chunks/props.Cca2BxJd.js";import{a as S,e as Te}from"../chunks/store.D2uAQHf6.js";import{e as W,i as q,a as Ee,s as Re,b as Pe}from"../chunks/attributes.RdiwjXHh.js";import{c as se}from"../chunks/svelte-component.DWR3YfCP.js";import{t as Ne,c as Me}from"../chunks/copy.DeSvqfmV.js";import{s as me}from"../chunks/snippet.CWU4WCWQ.js";import{b as Oe,i as V}from"../chunks/this.PNZHwDAi.js";import{h as he}from"../chunks/html.81yaOLRh.js";function re(a,e,o,t,s,c){let p=B;B&&le();var r,d,l=null;B&&ee.nodeType===1&&(l=ee,le());var g=B?ee:a,u;fe(()=>{const m=e()||null;var k=m==="svg"?pe:null;m!==r&&(u&&(m===null?xe(u,()=>{u=null,d=null}):m===d?Ce(u):ke(u)),m&&m!==d&&(u=be(()=>{if(l=B?l:k?document.createElementNS(k,m):document.createElement(m),Se(l,l),t){var b=B?ye(l):l.appendChild(_e());B&&(b===null?ce(!1):de(b)),t(l,b)}we.nodes_end=l,g.before(l)})),r=m,r&&(d=r))},ge),p&&(ce(!0),de(g))}var Ae=w('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function Le(a){var e=Ae();n(a,e)}var Fe=w('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-o47y6s"> <p>background image</p> <div class="svelte-o47y6s"></div></section>');function Ue(a){var e=Fe();n(a,e)}var Be=w('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function We(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=Be(),t=f(v(o),2);W(t,17,()=>e,q,(s,c)=>{let p=()=>i(c).tag,r=()=>i(c).text;var d=D(),l=C(d);re(l,p,!1,(g,u)=>{var m=je();E(()=>S(m,r())),n(u,m)}),n(s,d)}),h(o),n(a,o)}var qe=w("<p> </p>");function He(a,e){var o=qe(),t=v(o);h(o),E(()=>S(t,`I am component A and my favorite number is ${e.number??""}.`)),n(a,o)}var ze=w("<p> </p>");function Ge(a,e){var o=ze(),t=v(o);h(o),E(()=>S(t,`I am component B and my name is ${e.name??""}.`)),n(a,o)}var Ke=w('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Ve(a){const e={A:He,B:Ge},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var t=Ke(),s=f(v(t),2);W(s,17,()=>o,q,(c,p)=>{var r=D();const d=A(()=>e[i(p).component]);var l=C(r);se(l,()=>i(d),(g,u)=>{u(g,oe(()=>i(p)))}),n(c,r)}),h(t),n(a,t)}var Je=w("<div><!></div>");function Ze(a,e){Q(e,!0);let o=O(e,"root",3,null),t=O(e,"top",3,0),s=O(e,"bottom",3,0),c=O(e,"increments",3,100),p=O(e,"value",15,void 0),r=[],d=[],l=[],g=[],u;function m(){let y=0,x=0;for(let _=0;_<r.length;(_+=1)-1)r[_]>y&&(y=r[_],x=_);y>0?p(x):p(void 0)}function k(y,x){const _=T=>{T[0].isIntersecting;const U=T[0].intersectionRatio;r[x]=U,m()},P=t()?t()*-1:0,R=s()?s()*-1:0,L=`${P}px 0px ${R}px 0px`,F={root:o(),rootMargin:L,threshold:d};g[x]&&g[x].disconnect();const N=new IntersectionObserver(_,F);N.observe(y),g[x]=N}function b(){l.length&&l.forEach(k)}te(()=>{for(let y=0;y<c()+1;(y+=1)-1)d.push(y/c());l=u.querySelectorAll(":scope > *:not(iframe)"),b()}),te(()=>{t(),s(),b()});var j=Je(),I=v(j);me(I,()=>e.children??ae),h(j),Oe(j,y=>u=y,()=>u),n(a,j),Z()}var Qe=w('<div class="step svelte-12sq0x6"><p class="svelte-12sq0x6"> </p></div>'),Xe=w('<section id="scrolly"><h2 class="svelte-12sq0x6">Scrolly <span> </span></h2> <div class="spacer svelte-12sq0x6"></div> <!> <div class="spacer svelte-12sq0x6"></div></section>');function Ye(a){let e=J(void 0);var o=Xe(),t=v(o),s=f(v(t)),c=v(s,!0);h(s),h(t);var p=f(t,4);Ze(p,{get value(){return i(e)},set value(r){ne(e,ue(r))},children:(r,d)=>{var l=D(),g=C(l);W(g,16,()=>[0,1,2,3,4],q,(u,m,k)=>{var b=Qe();const j=A(()=>i(e)===k);var I=v(b),y=v(I,!0);h(I),h(b),E(()=>{Ne(b,"active",i(j)),S(y,m)}),n(u,b)}),n(r,l)},$$slots:{default:!0}}),De(2),h(o),E(()=>S(c,i(e)||"-")),n(a,o)}const $e='{"headline":"How to recreate our charts without code","byline":"<a href=https://pudding.cool/author/jan-diehm/>Jan Diehm</a>","intro":[{"type":"text","value":"One of the most common questions we get at The Pudding is some variation of “How did you make that?” or “What tools or programs did you use?”"},{"type":"text","value":"I love getting these types of questions because they are prompted by excitement and inspiration. But, then when we answer them — usually with something like “all of our projects are coded from scratch” — you can immediately feel the creative spark dim and deflate."},{"type":"text","value":"While the type of projects we publish at The Pudding require a lot of technical skill, the individual pieces of them aren’t as intimidating and insurmountable as you think."},{"type":"text","value":"I’m going to walk you through no-code examples of how to make some of the charts from our latest pieces."}],"charts":[{"title":"Strip Plot","iconID":"strip","codeTools":"<a href=https://svelte.dev/>Svelte</a>, <a href=https://d3js.org/>D3.js</a>, <a href=https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API>Canvas</a>","noCodeTools":"<a href=https://workspace.google.com/products/sheets/>Google Sheets</a>/<a href=https://www.microsoft.com/en-us/microsoft-365/excel>Excel</a>/other spreadsheet software","beforeImage":"country-radio_NOCODE.jpg","afterImage":"country-radio_CODE.jpg","publicationURL":"https://pudding.cool/2023/05/country-radio/","publicationHeadline":"They Won’t Play a Lady-O on Country Radio","noCodeURL":"https://docs.google.com/spreadsheets/d/1MMaiKiuRgvjHMjTxFgw-u76ogNacyfFzsTs7po2-eso/edit?gid=200262389#gid=200262389","videoURL":"https://www.youtube.com/embed/cZOXjrVNpWE?si=7H_rywUCmHdV2SRe","assets":"<a href=https://docs.google.com/spreadsheets/d/1MMaiKiuRgvjHMjTxFgw-u76ogNacyfFzsTs7po2-eso/edit?gid=200262389#gid=200262389>Data</a>, <a href=https://docs.google.com/spreadsheets/d/1MMaiKiuRgvjHMjTxFgw-u76ogNacyfFzsTs7po2-eso/edit?gid=887163399#gid=887163399>Example</a>","text":[{"type":"text","value":"Often I’ll end up making no-code charts as the last step of a project when I’m converting what we’ve built in code to work in a social media post. But, this strip plot originally started out in a <a href=https://docs.google.com/spreadsheets/d/1MMaiKiuRgvjHMjTxFgw-u76ogNacyfFzsTs7po2-eso/edit?gid=1965092185#gid=1965092185>spreadsheet</a>, and that informed what I wanted to do in code. If you’re interested in making charts in spreadsheets, check out <a href=https://policyviz.com/>PolicyViz’s</a> <a href=https://www.youtube.com/c/JonSchwabish>Jonathan Schwabish</a>, who is pushing the limits of what you can do in Google Sheets and Excel."}]},{"title":"Bubble Chart","iconID":"bubble","codeTools":"<a href=https://svelte.dev/>Svelte</a>, <a href=https://d3js.org/>D3.js</a>, <a href=https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API>Canvas</a>","noCodeTools":"<a href=https://app.flourish.studio/>Flourish</a> (bubble chart)","beforeImage":"love-songs_NOCODE.jpg","afterImage":"love-songs_CODE.jpg","publicationURL":"https://pudding.cool/2024/11/love-songs/","publicationHeadline":"Is the Love Song Dying?","noCodeURL":"https://public.flourish.studio/visualisation/20264655/","videoURL":"https://www.youtube.com/embed/J4WuZxvMnVI?si=f80TApPHEUxBLX1a","assets":"<a href=https://github.com/the-pudding/pop-love-songs/blob/main/src/data/pop-love-songs-data-through-september-2023.json>Data</a>, <a href=https://public.flourish.studio/visualisation/20264655/>Example</a>","text":[{"type":"text","value":"When I first started out doing data visualizations, I made a lot of them manually in Illustrator, which meant using the scatterplot tool to create proportional circles and then moving them around by hand to make bubble charts. Extremely hacky and terribly inefficient, but hey, it got the job done! Luckily, today there are charting tools like <a href=https://www.datawrapper.de/>Datawrapper</a> and <a href=https://flourish.studio/>Flourish</a> that make it a lot easier to whip up interactive and responsive <a href=https://public.flourish.studio/visualisation/20264655/>bubble (and other!) charts</a>. Our team uses these tools to build rapid prototypes and export SVG charts for further refinement."}]},{"title":"Stacked Bars","iconID":"stackedbar","codeTools":"<a href=https://svelte.dev/>Svelte</a>, <a href=https://d3js.org/>D3.js</a>, <a href=https://layercake.graphics/>Layercake</a>","noCodeTools":"<a href=https://app.flourish.studio/>Flourish</a> (story)","beforeImage":"fanfic_NOCODE.jpg","afterImage":"fanfic_CODE.jpg","publicationURL":"https://pudding.cool/2024/10/fanfic/","publicationHeadline":"Who Gets Shipped and Why?","noCodeURL":"https://public.flourish.studio/story/2713680/","videoURL":"https://www.youtube.com/embed/xpIjUKygtuI?si=vAfSVEo46Lam7KlF","assets":"<a href=https://github.com/the-pudding/fanfic/blob/main/src/data/CANON/CANON_percentRelType.csv>Data</a>, <a href=https://public.flourish.studio/story/2713680/>Example</a>","text":[{"type":"text","value":"The Pudding is known for scrollytelling, where graphics animate in place as you scroll down the page. <a href=https://pudding.cool/author/russell-samora/>Russell</a> built a library for it (<a href=https://github.com/russellsamora/scrollama>Scrollama</a>) and created a <a href=https://github.com/the-pudding/svelte-starter/blob/main/src/components/helpers/Scrolly.svelte>component</a> for it in our <a href=https://github.com/the-pudding/svelte-starter>Svelte starter template</a>. But, you don’t need to know how to code to pull off the same effect — you can do it in consecutive social images (like <a href=https://www.instagram.com/p/DA6FBkXxn_7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA>this</a>, modeled after <a href=https://pudding.cool/2024/10/fanfic/>this</a>), or by building a tapper story in Flourish (like <a href=https://public.flourish.studio/story/2713680/>this</a>). Note: if you have a Publisher or Enterprise license for Flourish you can make scrollytelling stories."}]},{"title":"Bar Chart Grid","iconID":"percentbar","codeTools":"<a href=https://svelte.dev/>Svelte</a>","noCodeTools":"<a href=https://www.figma.com/>Figma</a>","beforeImage":"nba-colors_NOCODE.jpg","afterImage":"nba-colors_CODE.jpg","publicationURL":"https://pudding.cool/2024/10/nba-uniforms/","publicationHeadline":"Colors of the Court","noCodeURL":"https://www.figma.com/design/tmkyPoWx3qjGb5Qa6usGys/The-Pudding-No-Code-Charts?node-id=0-1&t=nLamNPHnfJPDsfdT-1","videoURL":"https://www.youtube.com/embed/hNCWD7bOsZc?si=cauqxKuTmKWUroe2","assets":"<a href=https://www.figma.com/design/tmkyPoWx3qjGb5Qa6usGys/The-Pudding-No-Code-Charts?node-id=0-1&t=pvYmTVPUGB88cu76-1>Example</a>","text":[{"type":"text","value":"Bar charts often get dismissed as “basic” — they’re just rectangles, right? But, in this case, “just rectangles” works to our advantage. Using <a href=https://help.figma.com/hc/en-us/articles/5731482952599-Add-auto-layout-to-a-design>Figma’s auto layout feature</a>, you can quickly make complex gridded layouts that are perfect for making charts that are based on boxes: bar charts (like <a href=https://www.figma.com/design/tmkyPoWx3qjGb5Qa6usGys/The-Pudding-No-Code-Charts?node-id=0-1&t=nLamNPHnfJPDsfdT-1>this</a>), waffle charts, pictograms, treemaps, strip plots, heatmaps, etc. I’ve even used it to make dot plots before! You can also check out <a href=https://www.figma.com/community/tag/chart/plugins>chart plugins</a> for Figma, including <a href=https://www.figma.com/community/plugin/736737028247625415/datavizer>Datavizer</a>, built by our former colleague <a href=https://wattenberger.com/>Amelia Wattenberger</a>."}]}]}';var et=w("<p><!></p>"),tt=w("<section><!></section>");function at(a,e){Q(e,!0);var o=D(),t=C(o);W(t,17,()=>e.body,q,(s,c)=>{let p=()=>i(c).section,r=()=>i(c).content;var d=tt();const l=A(()=>p().toLowerCase().replace(/[^a-z0-9]/g,"")),g=A(()=>e.components[p()]);var u=v(d);V(u,()=>i(g),m=>{var k=D(),b=C(k);se(b,()=>i(g),(j,I)=>{I(j,oe(r))}),n(m,k)},m=>{var k=D(),b=C(k);W(b,17,r,q,(I,y)=>{let x=()=>i(y).type,_=()=>i(y).value;var P=D();const R=A(()=>e.components[x()]),L=A(()=>typeof _()=="string");var F=C(P);V(F,()=>i(R),N=>{var T=D(),U=C(T);se(U,()=>i(R),(H,M)=>{M(H,oe(_))}),n(N,T)},N=>{var T=D(),U=C(T);V(U,()=>x()==="text",H=>{var M=et(),X=v(M);he(X,_),h(M),n(H,M)},H=>{var M=D(),X=C(M);V(X,()=>i(L),Y=>{var z=D(),$=C(z);re($,x,!1,(K,ie)=>{var G=D(),ve=C(G);he(ve,_),n(ie,G)}),n(Y,z)},Y=>{var z=D(),$=C(z);re($,x,!1,(K,ie)=>{let G;E(()=>G=Ee(K,G,{..._()},void 0,K.namespaceURI===pe,K.nodeName.includes("-")))}),n(Y,z)},!0),n(H,M)},!0),n(N,T)}),n(I,P)}),n(m,k)}),h(d),E(()=>Re(d,"id",i(l))),n(s,d)}),n(a,o),Z()}var ot=w('<p> </p> <progress max="100"></progress>',1);function st(a,e){let o=O(e,"label",3,"A"),t=O(e,"value",3,0);var s=ot(),c=C(s),p=v(c,!0);h(c);var r=f(c,2);E(()=>{S(p,o()),Pe(r,t())}),n(a,s)}var rt=w('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function nt(a,e){Q(e,!0);const{body:o}=Me,t={Test:st};var s=rt(),c=f(v(s),2),p=v(c),r=v(p,!0);E(()=>S(r,$e.replace(/\t/g," "))),h(p),h(c);var d=f(c,2);at(d,{components:t,body:o}),h(s),n(a,s),Z()}var it=w('<div class="person svelte-1ltx6da"><p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p></div>'),lt=(a,e)=>Ie(e),ct=(a,e)=>e.random(Math.floor(Math.random()*10)),dt=w('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-1ltx6da">count++</button> <p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p> <p class="svelte-1ltx6da"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-1ltx6da">Random</button>  <h3>Snippets</h3> <div class="people svelte-1ltx6da"></div>',1);function ht(a,e){Q(e,!0);const o=(P,R=ae)=>{var L=it(),F=v(L),N=v(F,!0);h(F);var T=f(F,2),U=v(T,!0);h(T),h(L),E(()=>{S(N,R().name),S(U,R().age)}),n(P,L)};O(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let s=J(0),c=A(()=>i(s)*2),p=A(()=>i(s)*2),r=J(0);te(()=>{ne(r,i(s)*2)});var d=dt(),l=f(C(d),4);l.__click=[lt,s];var g=f(l,2),u=v(g);h(g);var m=f(g,2),k=v(m);h(m);var b=f(m,2),j=v(b);h(b);var I=f(b,4),y=v(I);me(y,()=>e.children??ae),h(I);var x=f(I,4);x.__click=[ct,e];var _=f(x,4);W(_,21,()=>t,q,(P,R)=>{o(P,()=>i(R))}),h(_),E(()=>{S(u,`${i(s)??""} doubled is ${i(c)??""} (derived)`),S(k,`${i(s)??""} doubled is ${i(p)??""} (derived by)`),S(j,`${i(s)??""} doubled is ${i(r)??""} ($effect)`)}),n(a,d),Z()}Te(["click"]);var pt=w('<div id="demo" class="svelte-m1ilu3"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!></div>');function ut(a){let e=J(0);function o(u){console.log(u)}var t=pt(),s=f(v(t),2);ht(s,{get value(){return i(e)},set value(u){ne(e,ue(u))},random:o});var c=f(s,2);Le(c);var p=f(c,2);Ue(p);var r=f(p,2);We(r);var d=f(r,2);Ve(d);var l=f(d,2);nt(l,{});var g=f(l,2);Ye(g),h(t),n(a,t)}function Dt(a){ut(a)}export{Dt as component};
