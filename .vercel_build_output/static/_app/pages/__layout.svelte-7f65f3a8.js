import{S as D,i as V,s as k,e as p,t as y,k as x,c as v,a as g,g as E,d as m,n as b,b as i,f as C,D as c,E as w,F as G,j as N,m as S,G as F,o as J,H as L,I as M,J as P,x as H,u as q,v as z}from"../chunks/vendor-efc230f4.js";function B(h){let t,a,r,n,o,f,$,d,u,s;return{c(){t=p("nav"),a=p("div"),r=p("a"),n=y("Home"),o=x(),f=p("a"),$=y("About"),d=x(),u=p("a"),s=y("Contact"),this.h()},l(e){t=v(e,"NAV",{class:!0});var l=g(t);a=v(l,"DIV",{class:!0});var _=g(a);r=v(_,"A",{href:!0,class:!0});var A=g(r);n=E(A,"Home"),A.forEach(m),o=b(_),f=v(_,"A",{href:!0,class:!0});var I=g(f);$=E(I,"About"),I.forEach(m),d=b(_),u=v(_,"A",{href:!0,class:!0});var j=g(u);s=E(j,"Contact"),j.forEach(m),_.forEach(m),l.forEach(m),this.h()},h(){i(r,"href","/"),i(r,"class","mx-5"),i(f,"href","/about"),i(f,"class","mx-5"),i(u,"href","/contact"),i(u,"class","mx-5"),i(a,"class","p-2 bg-yellow-400 text-white font-bold rounded-xl shadow-md"),i(t,"class","w-full flex justify-center")},m(e,l){C(e,t,l),c(t,a),c(a,r),c(r,n),c(a,o),c(a,f),c(f,$),c(a,d),c(a,u),c(u,s)},p:w,i:w,o:w,d(e){e&&m(t)}}}class K extends D{constructor(t){super();V(this,t,null,B,k,{})}}function O(h){let t,a,r,n,o,f,$,d;a=new K({});const u=h[1].default,s=G(u,h,h[0],null);return{c(){t=p("div"),N(a.$$.fragment),r=x(),n=p("div"),o=p("img"),$=x(),s&&s.c(),this.h()},l(e){t=v(e,"DIV",{class:!0});var l=g(t);S(a.$$.fragment,l),r=b(l),n=v(l,"DIV",{class:!0});var _=g(n);o=v(_,"IMG",{src:!0,alt:!0}),_.forEach(m),$=b(l),s&&s.l(l),l.forEach(m),this.h()},h(){F(o.src,f="/logo.png")||i(o,"src",f),i(o,"alt","Logo Pokedex"),i(n,"class","w-full flex justify-center my-5"),i(t,"class","p-8 max-w-6xl mx-auto")},m(e,l){C(e,t,l),J(a,t,null),c(t,r),c(t,n),c(n,o),c(t,$),s&&s.m(t,null),d=!0},p(e,[l]){s&&s.p&&(!d||l&1)&&L(s,u,e,e[0],d?P(u,e[0],l,null):M(e[0]),null)},i(e){d||(H(a.$$.fragment,e),H(s,e),d=!0)},o(e){q(a.$$.fragment,e),q(s,e),d=!1},d(e){e&&m(t),z(a),s&&s.d(e)}}}function Q(h,t,a){let{$$slots:r={},$$scope:n}=t;return h.$$set=o=>{"$$scope"in o&&a(0,n=o.$$scope)},[n,r]}class T extends D{constructor(t){super();V(this,t,Q,O,k,{})}}export{T as default};