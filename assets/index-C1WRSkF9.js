var Fe=Object.defineProperty;var Ue=(t,e,r)=>e in t?Fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ye=(t,e,r)=>(Ue(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function m(){}function Ge(t){return t()}function Ee(){return Object.create(null)}function Ce(t){t.forEach(Ge)}function Be(t){return typeof t=="function"}function y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Je(t){return Object.keys(t).length===0}function Qe(t,...e){if(t==null){for(const l of e)l(void 0);return m}const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function R(t,e,r){t.$$.on_destroy.push(Qe(e,r))}function Ae(t){return t??""}function a(t,e){t.appendChild(e)}function O(t,e,r){t.insertBefore(e,r||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function N(){return D(" ")}function Pe(t,e,r,l){return t.addEventListener(e,r,l),()=>t.removeEventListener(e,r,l)}function n(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function We(t){return Array.from(t.childNodes)}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}let Ie;function Le(t){Ie=t}function Xe(t,e){const r=t.$$.callbacks[e.type];r&&r.slice().forEach(l=>l.call(this,e))}const se=[],De=[];let oe=[];const Oe=[],et=Promise.resolve();let Se=!1;function tt(){Se||(Se=!0,et.then(Ke))}function Te(t){oe.push(t)}const je=new Set;let re=0;function Ke(){if(re!==0)return;const t=Ie;do{try{for(;re<se.length;){const e=se[re];re++,Le(e),nt(e.$$)}}catch(e){throw se.length=0,re=0,e}for(Le(null),se.length=0,re=0;De.length;)De.pop()();for(let e=0;e<oe.length;e+=1){const r=oe[e];je.has(r)||(je.add(r),r())}oe.length=0}while(se.length);for(;Oe.length;)Oe.pop()();Se=!1,je.clear(),Le(t)}function nt(t){if(t.fragment!==null){t.update(),Ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Te)}}function rt(t){const e=[],r=[];oe.forEach(l=>t.indexOf(l)===-1?e.push(l):r.push(l)),r.forEach(l=>l()),oe=e}const Me=new Set;let lt;function v(t,e){t&&t.i&&(Me.delete(t),t.i(e))}function M(t,e,r,l){if(t&&t.o){if(Me.has(t))return;Me.add(t),lt.c.push(()=>{Me.delete(t),l&&(r&&t.d(1),l())}),t.o(e)}else l&&l()}function C(t){t&&t.c()}function k(t,e,r){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,r),Te(()=>{const o=t.$$.on_mount.map(Ge).filter(Be);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ce(o),t.$$.on_mount=[]}),s.forEach(Te)}function w(t,e){const r=t.$$;r.fragment!==null&&(rt(r.after_update),Ce(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(se.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,r,l,s,o,u=null,i=[-1]){const p=Ie;Le(t);const c=t.$$={fragment:null,ctx:[],props:o,update:m,not_equal:s,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:Ee(),dirty:i,skip_bound:!1,root:e.target||p.$$.root};u&&u(c.root);let d=!1;if(c.ctx=r?r(t,e.props||{},(h,$,...b)=>{const j=b.length?b[0]:$;return c.ctx&&s(c.ctx[h],c.ctx[h]=j)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](j),d&&st(t,h)),$}):[],c.update(),d=!0,Ce(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const h=We(e.target);c.fragment&&c.fragment.l(h),h.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&v(t.$$.fragment),k(t,e.target,e.anchor),Ke()}Le(p)}class T{constructor(){ye(this,"$$");ye(this,"$$set")}$destroy(){w(this,1),this.$destroy=m}$on(e,r){if(!Be(r))return m;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(r),()=>{const s=l.indexOf(r);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ot);const le=[];function Re(t,e=m){let r;const l=new Set;function s(i){if(y(t,i)&&(t=i,r)){const p=!le.length;for(const c of l)c[1](),le.push(c,t);if(p){for(let c=0;c<le.length;c+=2)le[c][0](le[c+1]);le.length=0}}}function o(i){s(i(t))}function u(i,p=m){const c=[i,p];return l.add(c),l.size===1&&(r=e(s,o)||m),i(t),()=>{l.delete(c),l.size===0&&r&&(r(),r=null)}}return{set:s,update:o,subscribe:u}}const Ye={AppName:"CoDe",ProjectNamePlaceholder:"Project name...",YouCanStartHere:"You can start here...",Constraints:"Constraints",Ideas:"Ideas",Idea:"Idea",Time:"Time",Space:"Space",TestCases:"Test Cases",Pseudocode:"Pseudocode",Code:"Code",ProjectDescription:"CoDe is a design canvas that captures the process of solving coding problem.",ProjectSubDescription:["A project by",", and this template is referenced from"],NamNguyen:"Nam Nguyen",NamNguyenGithub:"https://github.com/namvnngu",HiredInTechDomain:"hiredintech.com",HiredInTechLink:"https://hiredintech.com",SourceCode:"Source Code",ProjectSourceCodeLink:"https://github.com/namvnngu/co-de"},xe={en:Ye},F=function(){const t=navigator.language.split("-")[0],{subscribe:e,set:r}=Re(xe[t]??Ye);return{subscribe:e,setLang:function(l){const s=xe[l];if(!s)throw Error(`Could not find a resource given language ${l}`);r(s)}}}();function at(t){let e,r=t[0].AppName+"",l;return{c(){e=L("span"),l=D(r),n(e,"class","app-logo svelte-1r0akym")},m(s,o){O(s,e,o),a(e,l)},p(s,[o]){o&1&&r!==(r=s[0].AppName+"")&&q(l,r)},i:m,o:m,d(s){s&&I(e)}}}function it(t,e,r){let l;return R(t,F,s=>r(0,l=s)),[l]}class ut extends T{constructor(e){super(),S(this,e,it,at,y,{})}}function ct(t){let e,r;return{c(){e=f("svg"),r=f("path"),n(r,"d","M8.33333 1C5 1 1 4.33333 1 9.66667C1 15 5 19 10.3333 19C15.6667 19 19 15 19 11.6667C11.6667 16.3333 3.66667 8.33333 8.33333 1Z"),n(r,"fill","#252525"),n(r,"stroke","#252525"),n(r,"stroke-width","2"),n(r,"stroke-linecap","round"),n(r,"stroke-linejoin","round"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","20"),n(e,"height","20"),n(e,"viewBox","0 0 20 20"),n(e,"fill","none")},m(l,s){O(l,e,s),a(e,r)},p:m,i:m,o:m,d(l){l&&I(e)}}}class dt extends T{constructor(e){super(),S(this,e,null,ct,y,{})}}function ft(t){let e,r,l,s,o,u,i,p,c,d,h,$,b,j,x,z,Z,G,V,E,Y,B,H,K,P,A,g,_,ue,ve,U,ce,de,ee,fe,ke,J,pe,he,te,me,we,Q,ge,_e,ne,$e,be,W,X;return{c(){e=f("svg"),r=f("mask"),l=f("path"),s=f("path"),o=f("path"),u=f("path"),i=f("path"),p=f("mask"),c=f("path"),d=f("path"),h=f("path"),$=f("path"),b=f("path"),j=f("mask"),x=f("path"),z=f("path"),Z=f("path"),G=f("path"),V=f("path"),E=f("mask"),Y=f("path"),B=f("path"),H=f("path"),K=f("path"),P=f("path"),A=f("mask"),g=f("path"),_=f("path"),ue=f("path"),ve=f("path"),U=f("path"),ce=f("mask"),de=f("path"),ee=f("path"),fe=f("path"),ke=f("path"),J=f("path"),pe=f("mask"),he=f("path"),te=f("path"),me=f("path"),we=f("path"),Q=f("path"),ge=f("mask"),_e=f("path"),ne=f("path"),$e=f("path"),be=f("path"),W=f("path"),X=f("path"),n(l,"fill-rule","evenodd"),n(l,"clip-rule","evenodd"),n(l,"d","M10 1V2.35V1Z"),n(r,"id","path-1-inside-1_1_167"),n(r,"fill","white"),n(s,"fill-rule","evenodd"),n(s,"clip-rule","evenodd"),n(s,"d","M10 1V2.35V1Z"),n(s,"fill","#252525"),n(o,"d","M9.5 1V2.35H10.5V1H9.5ZM10.5 2.35V1H9.5V2.35H10.5Z"),n(o,"fill","#252525"),n(o,"mask","url(#path-1-inside-1_1_167)"),n(u,"d","M10 1V2.35V1Z"),n(u,"fill","#252525"),n(i,"d","M10 1V2.35"),n(i,"stroke","#252525"),n(i,"stroke-width","2"),n(i,"stroke-linecap","round"),n(i,"stroke-linejoin","round"),n(c,"fill-rule","evenodd"),n(c,"clip-rule","evenodd"),n(c,"d","M16.3643 3.63574L15.4094 4.5906L16.3639 3.63617L16.3643 3.63574Z"),n(p,"id","path-5-inside-2_1_167"),n(p,"fill","white"),n(d,"fill-rule","evenodd"),n(d,"clip-rule","evenodd"),n(d,"d","M16.3643 3.63574L15.4094 4.5906L16.3639 3.63617L16.3643 3.63574Z"),n(d,"fill","#252525"),n(h,"d","M16.3643 3.63574L16.718 3.98913L16.0107 3.28219L16.3643 3.63574ZM16.3639 3.63617L16.7174 3.98972L16.7176 3.98956L16.3639 3.63617ZM16.0107 3.28219L15.0559 4.23705L15.763 4.94415L16.7178 3.9893L16.0107 3.28219ZM15.763 4.94415L16.7174 3.98972L16.0103 3.28262L15.0559 4.23705L15.763 4.94415ZM16.7176 3.98956L16.718 3.98913L16.0106 3.28236L16.0101 3.28279L16.7176 3.98956Z"),n(h,"fill","#252525"),n(h,"mask","url(#path-5-inside-2_1_167)"),n($,"d","M16.3643 3.63574L15.4094 4.5906L16.3643 3.63574Z"),n($,"fill","#252525"),n(b,"d","M16.3643 3.63574L15.4094 4.5906"),n(b,"stroke","#252525"),n(b,"stroke-width","2"),n(b,"stroke-linecap","round"),n(b,"stroke-linejoin","round"),n(x,"fill-rule","evenodd"),n(x,"clip-rule","evenodd"),n(x,"d","M19 10H17.65H19Z"),n(j,"id","path-9-inside-3_1_167"),n(j,"fill","white"),n(z,"fill-rule","evenodd"),n(z,"clip-rule","evenodd"),n(z,"d","M19 10H17.65H19Z"),n(z,"fill","#252525"),n(Z,"d","M19 9.5H17.65V10.5H19V9.5ZM17.65 10.5H19V9.5H17.65V10.5Z"),n(Z,"fill","#252525"),n(Z,"mask","url(#path-9-inside-3_1_167)"),n(G,"d","M19 10H17.65H19Z"),n(G,"fill","#252525"),n(V,"d","M19 10H17.65"),n(V,"stroke","#252525"),n(V,"stroke-width","2"),n(V,"stroke-linecap","round"),n(V,"stroke-linejoin","round"),n(Y,"fill-rule","evenodd"),n(Y,"clip-rule","evenodd"),n(Y,"d","M16.3643 16.3643L15.4094 15.4095L16.3639 16.3639L16.3643 16.3643Z"),n(E,"id","path-13-inside-4_1_167"),n(E,"fill","white"),n(B,"fill-rule","evenodd"),n(B,"clip-rule","evenodd"),n(B,"d","M16.3643 16.3643L15.4094 15.4095L16.3639 16.3639L16.3643 16.3643Z"),n(B,"fill","#252525"),n(H,"d","M16.7178 16.0108L15.763 15.0559L15.0559 15.763L16.0107 16.7179L16.7178 16.0108ZM15.0559 15.763L16.0103 16.7175L16.7174 16.0104L15.763 15.0559L15.0559 15.763ZM16.0103 16.7175L16.0107 16.7179L16.7178 16.0108L16.7174 16.0104L16.0103 16.7175Z"),n(H,"fill","#252525"),n(H,"mask","url(#path-13-inside-4_1_167)"),n(K,"d","M16.3643 16.3643L15.4094 15.4095L16.3643 16.3643Z"),n(K,"fill","#252525"),n(P,"d","M16.3643 16.3643L15.4094 15.4095"),n(P,"stroke","#252525"),n(P,"stroke-width","2"),n(P,"stroke-linecap","round"),n(P,"stroke-linejoin","round"),n(g,"fill-rule","evenodd"),n(g,"clip-rule","evenodd"),n(g,"d","M10 19V17.65V19Z"),n(A,"id","path-17-inside-5_1_167"),n(A,"fill","white"),n(_,"fill-rule","evenodd"),n(_,"clip-rule","evenodd"),n(_,"d","M10 19V17.65V19Z"),n(_,"fill","#252525"),n(ue,"d","M10.5 19V17.65H9.5V19H10.5ZM9.5 17.65V19H10.5V17.65H9.5Z"),n(ue,"fill","#252525"),n(ue,"mask","url(#path-17-inside-5_1_167)"),n(ve,"d","M10 19V17.65V19Z"),n(ve,"fill","#252525"),n(U,"d","M10 19V17.65"),n(U,"stroke","#252525"),n(U,"stroke-width","2"),n(U,"stroke-linecap","round"),n(U,"stroke-linejoin","round"),n(de,"fill-rule","evenodd"),n(de,"clip-rule","evenodd"),n(de,"d","M3.63571 16.3643L4.59057 15.4095L3.63614 16.3639L3.63571 16.3643Z"),n(ce,"id","path-21-inside-6_1_167"),n(ce,"fill","white"),n(ee,"fill-rule","evenodd"),n(ee,"clip-rule","evenodd"),n(ee,"d","M3.63571 16.3643L4.59057 15.4095L3.63614 16.3639L3.63571 16.3643Z"),n(ee,"fill","#252525"),n(fe,"d","M3.63571 16.3643L3.28216 16.0108L3.9891 16.7181L3.63571 16.3643ZM3.63614 16.3639L3.98953 16.7176L3.98969 16.7175L3.63614 16.3639ZM3.98926 16.7179L4.94412 15.763L4.23702 15.0559L3.28216 16.0108L3.98926 16.7179ZM4.23702 15.0559L3.28259 16.0104L3.98969 16.7175L4.94412 15.763L4.23702 15.0559ZM3.28276 16.0102L3.28233 16.0106L3.9891 16.7181L3.98953 16.7176L3.28276 16.0102Z"),n(fe,"fill","#252525"),n(fe,"mask","url(#path-21-inside-6_1_167)"),n(ke,"d","M3.63571 16.3643L4.59057 15.4095L3.63571 16.3643Z"),n(ke,"fill","#252525"),n(J,"d","M3.63571 16.3643L4.59057 15.4095"),n(J,"stroke","#252525"),n(J,"stroke-width","2"),n(J,"stroke-linecap","round"),n(J,"stroke-linejoin","round"),n(he,"fill-rule","evenodd"),n(he,"clip-rule","evenodd"),n(he,"d","M1 10H2.35H1Z"),n(pe,"id","path-25-inside-7_1_167"),n(pe,"fill","white"),n(te,"fill-rule","evenodd"),n(te,"clip-rule","evenodd"),n(te,"d","M1 10H2.35H1Z"),n(te,"fill","#252525"),n(me,"d","M1 10.5H2.35V9.5H1V10.5ZM2.35 9.5H1V10.5H2.35V9.5Z"),n(me,"fill","#252525"),n(me,"mask","url(#path-25-inside-7_1_167)"),n(we,"d","M1 10H2.35H1Z"),n(we,"fill","#252525"),n(Q,"d","M1 10H2.35"),n(Q,"stroke","#252525"),n(Q,"stroke-width","2"),n(Q,"stroke-linecap","round"),n(Q,"stroke-linejoin","round"),n(_e,"fill-rule","evenodd"),n(_e,"clip-rule","evenodd"),n(_e,"d","M3.63571 3.63574L4.59057 4.5906L3.63614 3.63617L3.63571 3.63574Z"),n(ge,"id","path-29-inside-8_1_167"),n(ge,"fill","white"),n(ne,"fill-rule","evenodd"),n(ne,"clip-rule","evenodd"),n(ne,"d","M3.63571 3.63574L4.59057 4.5906L3.63614 3.63617L3.63571 3.63574Z"),n(ne,"fill","#252525"),n($e,"d","M3.28216 3.9893L4.23702 4.94415L4.94412 4.23705L3.98927 3.28219L3.28216 3.9893ZM4.94412 4.23705L3.98969 3.28262L3.28259 3.98972L4.23702 4.94415L4.94412 4.23705ZM3.98969 3.28262L3.98927 3.28219L3.28216 3.9893L3.28259 3.98972L3.98969 3.28262Z"),n($e,"fill","#252525"),n($e,"mask","url(#path-29-inside-8_1_167)"),n(be,"d","M3.63571 3.63574L4.59057 4.5906L3.63571 3.63574Z"),n(be,"fill","#252525"),n(W,"d","M3.63571 3.63574L4.59057 4.5906"),n(W,"stroke","#252525"),n(W,"stroke-width","2"),n(W,"stroke-linecap","round"),n(W,"stroke-linejoin","round"),n(X,"d","M10 15.1428C12.8401 15.1428 15.1429 12.8401 15.1429 9.99997C15.1429 7.15983 12.8401 4.85712 10 4.85712C7.15986 4.85712 4.85715 7.15983 4.85715 9.99997C4.85715 12.8401 7.15986 15.1428 10 15.1428Z"),n(X,"fill","#252525"),n(X,"stroke","#252525"),n(X,"stroke-width","2"),n(X,"stroke-linejoin","round"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","20"),n(e,"height","20"),n(e,"viewBox","0 0 20 20"),n(e,"fill","none")},m(He,qe){O(He,e,qe),a(e,r),a(r,l),a(e,s),a(e,o),a(e,u),a(e,i),a(e,p),a(p,c),a(e,d),a(e,h),a(e,$),a(e,b),a(e,j),a(j,x),a(e,z),a(e,Z),a(e,G),a(e,V),a(e,E),a(E,Y),a(e,B),a(e,H),a(e,K),a(e,P),a(e,A),a(A,g),a(e,_),a(e,ue),a(e,ve),a(e,U),a(e,ce),a(ce,de),a(e,ee),a(e,fe),a(e,ke),a(e,J),a(e,pe),a(pe,he),a(e,te),a(e,me),a(e,we),a(e,Q),a(e,ge),a(ge,_e),a(e,ne),a(e,$e),a(e,be),a(e,W),a(e,X)},p:m,i:m,o:m,d(He){He&&I(e)}}}class pt extends T{constructor(e){super(),S(this,e,null,ft,y,{})}}function ae(t){return localStorage.getItem(t)}function ie(t,e){try{return localStorage.setItem(t,e),!0}catch{return!1}}const Ve=window.matchMedia("(prefers-color-scheme: dark)"),ze=function(){const t=ae("theme"),e=t||ht();Ne(e);const{subscribe:r,set:l}=Re(e);function s(o){const u=o.matches?"DARK":"LIGHT";l(u),Ne(u)}return t||Ve.addEventListener("change",s),{subscribe:r,set:function(o){l(o),Ne(o),ie("theme",o),t||Ve.removeEventListener("change",s)}}}();function Ne(t){document.documentElement.classList.value&&(document.documentElement.classList.remove("light-mode"),document.documentElement.classList.remove("dark-mode")),t==="LIGHT"?document.documentElement.classList.add("light-mode"):t==="DARK"&&document.documentElement.classList.add("dark-mode")}function ht(){return Ve.matches?"DARK":"LIGHT"}function mt(t){let e,r,l,s,o,u,i,p,c;return l=new dt({}),u=new pt({}),{c(){e=L("button"),r=L("span"),C(l.$$.fragment),s=N(),o=L("span"),C(u.$$.fragment),n(r,"class","theme-toggle__option theme-toggle__dark-option svelte-1ns49v9"),n(o,"class","theme-toggle__option theme-toggle__light-option svelte-1ns49v9"),n(e,"class","theme-toggle svelte-1ns49v9")},m(d,h){O(d,e,h),a(e,r),k(l,r,null),a(e,s),a(e,o),k(u,o,null),i=!0,p||(c=Pe(e,"click",t[1]),p=!0)},p:m,i(d){i||(v(l.$$.fragment,d),v(u.$$.fragment,d),i=!0)},o(d){M(l.$$.fragment,d),M(u.$$.fragment,d),i=!1},d(d){d&&I(e),w(l),w(u),p=!1,c()}}}function gt(t,e,r){let l;return R(t,ze,o=>r(0,l=o)),[l,()=>ze.set(l==="DARK"?"LIGHT":"DARK")]}class _t extends T{constructor(e){super(),S(this,e,gt,mt,y,{})}}function $t(t){let e,r,l,s,o,u,i,p,c,d;return r=new ut({}),i=new _t({}),{c(){e=L("header"),C(r.$$.fragment),l=N(),s=L("input"),u=N(),C(i.$$.fragment),n(s,"type","text"),n(s,"title",t[0]),s.value=t[0],n(s,"class","project-name svelte-tw87dw"),n(s,"placeholder",o=t[1].ProjectNamePlaceholder),n(e,"class","header svelte-tw87dw")},m(h,$){O(h,e,$),k(r,e,null),a(e,l),a(e,s),a(e,u),k(i,e,null),p=!0,c||(d=Pe(s,"input",t[2]),c=!0)},p(h,[$]){(!p||$&1)&&n(s,"title",h[0]),(!p||$&1&&s.value!==h[0])&&(s.value=h[0]),(!p||$&2&&o!==(o=h[1].ProjectNamePlaceholder))&&n(s,"placeholder",o)},i(h){p||(v(r.$$.fragment,h),v(i.$$.fragment,h),p=!0)},o(h){M(r.$$.fragment,h),M(i.$$.fragment,h),p=!1},d(h){h&&I(e),w(r),w(i),c=!1,d()}}}function Lt(t,e,r){let l;R(t,F,u=>r(1,l=u));let s=ae("projectName")??"";function o(u){const i=u.target.value;r(0,s=i),ie("projectName",i)}return[s,l,o]}class vt extends T{constructor(e){super(),S(this,e,Lt,$t,y,{})}}function kt(t){let e,r,l,s,o,u,i,p,c;return{c(){e=L("section"),r=L("label"),l=D(t[1]),s=N(),o=L("textarea"),n(r,"for",t[0]),n(r,"class","text-area__title svelte-1sc1sgz"),n(o,"id",t[0]),o.value=t[2],n(o,"name",t[0]),n(o,"placeholder",u=t[4].YouCanStartHere),n(o,"class",i=Ae(`text-area__content ${t[3]==="code"?"text-area__content-code":""}`)+" svelte-1sc1sgz"),n(e,"class","text-area svelte-1sc1sgz")},m(d,h){O(d,e,h),a(e,r),a(r,l),a(e,s),a(e,o),p||(c=Pe(o,"input",t[5]),p=!0)},p(d,[h]){h&2&&q(l,d[1]),h&1&&n(r,"for",d[0]),h&1&&n(o,"id",d[0]),h&4&&(o.value=d[2]),h&1&&n(o,"name",d[0]),h&16&&u!==(u=d[4].YouCanStartHere)&&n(o,"placeholder",u),h&8&&i!==(i=Ae(`text-area__content ${d[3]==="code"?"text-area__content-code":""}`)+" svelte-1sc1sgz")&&n(o,"class",i)},i:m,o:m,d(d){d&&I(e),p=!1,c()}}}function wt(t,e,r){let l;R(t,F,c=>r(4,l=c));let{id:s}=e,{title:o}=e,{value:u=""}=e,{contentType:i="normal"}=e;function p(c){Xe.call(this,t,c)}return t.$$set=c=>{"id"in c&&r(0,s=c.id),"title"in c&&r(1,o=c.title),"value"in c&&r(2,u=c.value),"contentType"in c&&r(3,i=c.contentType)},[s,o,u,i,l,p]}class Ze extends T{constructor(e){super(),S(this,e,wt,kt,y,{id:0,title:1,value:2,contentType:3})}}function bt(t){let e,r;return e=new Ze({props:{id:"code",value:t[0],contentType:"code",title:`${t[1].Pseudocode} / ${t[1].Code}`}}),e.$on("input",t[2]),{c(){C(e.$$.fragment)},m(l,s){k(e,l,s),r=!0},p(l,[s]){const o={};s&1&&(o.value=l[0]),s&2&&(o.title=`${l[1].Pseudocode} / ${l[1].Code}`),e.$set(o)},i(l){r||(v(e.$$.fragment,l),r=!0)},o(l){M(e.$$.fragment,l),r=!1},d(l){w(e,l)}}}function Mt(t,e,r){let l;R(t,F,u=>r(1,l=u));let s=ae("code")??"";function o(u){const i=u.target.value;r(0,s=i),ie("code",i)}return[s,l,o]}class Ct extends T{constructor(e){super(),S(this,e,Mt,bt,y,{})}}function Zt(t){let e,r;return e=new Ze({props:{id:"ideas",value:t[0],title:t[1].Ideas}}),e.$on("input",t[2]),{c(){C(e.$$.fragment)},m(l,s){k(e,l,s),r=!0},p(l,[s]){const o={};s&1&&(o.value=l[0]),s&2&&(o.title=l[1].Ideas),e.$set(o)},i(l){r||(v(e.$$.fragment,l),r=!0)},o(l){M(e.$$.fragment,l),r=!1},d(l){w(e,l)}}}function Ht(t,e,r){let l;R(t,F,u=>r(1,l=u));let s=ae("ideas")??"";function o(u){const i=u.target.value;r(0,s=i),ie("ideas",i)}return[s,l,o]}class yt extends T{constructor(e){super(),S(this,e,Ht,Zt,y,{})}}function jt(t){let e,r;return e=new Ze({props:{id:"test-cases",value:t[0],title:t[1].TestCases}}),e.$on("input",t[2]),{c(){C(e.$$.fragment)},m(l,s){k(e,l,s),r=!0},p(l,[s]){const o={};s&1&&(o.value=l[0]),s&2&&(o.title=l[1].TestCases),e.$set(o)},i(l){r||(v(e.$$.fragment,l),r=!0)},o(l){M(e.$$.fragment,l),r=!1},d(l){w(e,l)}}}function Nt(t,e,r){let l;R(t,F,u=>r(1,l=u));let s=ae("testCases")??"";function o(u){const i=u.target.value;r(0,s=i),ie("testCases",i)}return[s,l,o]}class St extends T{constructor(e){super(),S(this,e,Nt,jt,y,{})}}function Tt(t){let e,r;return e=new Ze({props:{id:"constraints",value:t[0],title:t[1].Constraints}}),e.$on("input",t[2]),{c(){C(e.$$.fragment)},m(l,s){k(e,l,s),r=!0},p(l,[s]){const o={};s&1&&(o.value=l[0]),s&2&&(o.title=l[1].Constraints),e.$set(o)},i(l){r||(v(e.$$.fragment,l),r=!0)},o(l){M(e.$$.fragment,l),r=!1},d(l){w(e,l)}}}function Vt(t,e,r){let l;R(t,F,u=>r(1,l=u));let s=ae("constraints")??"";function o(u){const i=u.target.value;r(0,s=i),ie("constraints",i)}return[s,l,o]}class Pt extends T{constructor(e){super(),S(this,e,Vt,Tt,y,{})}}function It(t){let e,r,l,s,o,u,i,p,c;return r=new Pt({}),s=new yt({}),u=new St({}),p=new Ct({}),{c(){e=L("main"),C(r.$$.fragment),l=N(),C(s.$$.fragment),o=N(),C(u.$$.fragment),i=N(),C(p.$$.fragment),n(e,"class","body svelte-1xe7xti")},m(d,h){O(d,e,h),k(r,e,null),a(e,l),k(s,e,null),a(e,o),k(u,e,null),a(e,i),k(p,e,null),c=!0},p:m,i(d){c||(v(r.$$.fragment,d),v(s.$$.fragment,d),v(u.$$.fragment,d),v(p.$$.fragment,d),c=!0)},o(d){M(r.$$.fragment,d),M(s.$$.fragment,d),M(u.$$.fragment,d),M(p.$$.fragment,d),c=!1},d(d){d&&I(e),w(r),w(s),w(u),w(p)}}}class Et extends T{constructor(e){super(),S(this,e,null,It,y,{})}}function At(t){let e,r,l=t[0].ProjectDescription+"",s,o,u,i=t[0].ProjectSubDescription[0]+"",p,c,d,h=t[0].NamNguyen+"",$,b,j=t[0].ProjectSubDescription[1]+"",x,z,Z,G=t[0].HiredInTechDomain+"",V,E,Y,B,H,K=t[0].SourceCode+"",P,A;return{c(){e=L("footer"),r=L("p"),s=D(l),o=N(),u=L("p"),p=D(i),c=N(),d=L("a"),$=D(h),x=D(j),z=N(),Z=L("a"),V=D(G),Y=D("."),B=N(),H=L("a"),P=D(K),n(d,"href",b=t[0].NamNguyenGithub),n(d,"rel","noopener noreferrer"),n(d,"target","_blank"),n(d,"class","svelte-1me12fz"),n(Z,"href",E=t[0].HiredInTechLink),n(Z,"rel","noopener noreferrer"),n(Z,"target","_blank"),n(Z,"class","svelte-1me12fz"),n(H,"href",A=t[0].ProjectSourceCodeLink),n(H,"rel","noopener noreferrer"),n(H,"target","_blank"),n(H,"class","svelte-1me12fz"),n(e,"class","footer svelte-1me12fz")},m(g,_){O(g,e,_),a(e,r),a(r,s),a(e,o),a(e,u),a(u,p),a(u,c),a(u,d),a(d,$),a(u,x),a(u,z),a(u,Z),a(Z,V),a(u,Y),a(e,B),a(e,H),a(H,P)},p(g,[_]){_&1&&l!==(l=g[0].ProjectDescription+"")&&q(s,l),_&1&&i!==(i=g[0].ProjectSubDescription[0]+"")&&q(p,i),_&1&&h!==(h=g[0].NamNguyen+"")&&q($,h),_&1&&b!==(b=g[0].NamNguyenGithub)&&n(d,"href",b),_&1&&j!==(j=g[0].ProjectSubDescription[1]+"")&&q(x,j),_&1&&G!==(G=g[0].HiredInTechDomain+"")&&q(V,G),_&1&&E!==(E=g[0].HiredInTechLink)&&n(Z,"href",E),_&1&&K!==(K=g[0].SourceCode+"")&&q(P,K),_&1&&A!==(A=g[0].ProjectSourceCodeLink)&&n(H,"href",A)},i:m,o:m,d(g){g&&I(e)}}}function Dt(t,e,r){let l;return R(t,F,s=>r(0,l=s)),[l]}class Ot extends T{constructor(e){super(),S(this,e,Dt,At,y,{})}}function xt(t){let e,r,l,s,o,u;return e=new vt({}),l=new Et({}),o=new Ot({}),{c(){C(e.$$.fragment),r=N(),C(l.$$.fragment),s=N(),C(o.$$.fragment)},m(i,p){k(e,i,p),O(i,r,p),k(l,i,p),O(i,s,p),k(o,i,p),u=!0},p:m,i(i){u||(v(e.$$.fragment,i),v(l.$$.fragment,i),v(o.$$.fragment,i),u=!0)},o(i){M(e.$$.fragment,i),M(l.$$.fragment,i),M(o.$$.fragment,i),u=!1},d(i){i&&(I(r),I(s)),w(e,i),w(l,i),w(o,i)}}}class zt extends T{constructor(e){super(),S(this,e,null,xt,y,{})}}new zt({target:document.getElementById("app")});