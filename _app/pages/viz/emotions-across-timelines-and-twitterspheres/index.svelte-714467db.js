var t=Object.defineProperty,a=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(a,e,l)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,r=(t,r)=>{for(var o in r||(r={}))a.call(r,o)&&n(t,o,r[o]);if(e)for(var o of e(r))l.call(r,o)&&n(t,o,r[o]);return t};import{S as o,i as s,s as c,L as i,c as h,a as f,d,b as u,f as g,M as m,t as p,g as v,E as y,O as $,h as x,k as E,n as b,K as w,I as k,P as _,Q as D,R as I,T as O,U as V,V as j,W as C,X as L,Y as S,Z as z,F as M,_ as P,$ as N,a0 as T,a1 as Y,a2 as A,a3 as B,a4 as H,a5 as U,a6 as W,a7 as X,a8 as q,e as F,j as K,m as Q,o as R,a9 as Z,aa as G,v as J,r as tt,w as at,ab as et,ac as lt,x as nt,C as rt,ad as ot,ae as st,af as ct}from"../../../chunks/vendor-2b4be118.js";import{b as it}from"../../../chunks/paths-45dac81d.js";import{P as ht}from"../../../chunks/PageIntro-b8332cb2.js";function ft(t,a,e){const l=t.slice();return l[28]=a[e],l[30]=e,l}function dt(t,a,e){const l=t.slice();return l[31]=a[e],l}function ut(t){let a,e,l,n,r=[],o=new Map,s=t[4];const c=t=>t[31].key;for(let i=0;i<s.length;i+=1){let a=dt(t,s,i),e=c(a);o.set(e,r[i]=gt(e,a))}let p=t[12],v=[];for(let i=0;i<p.length;i+=1)v[i]=mt(ft(t,p,i));let y=t[9]&&pt(t);return{c(){a=i("g");for(let t=0;t<r.length;t+=1)r[t].c();e=i("g");for(let t=0;t<v.length;t+=1)v[t].c();n=i("g"),y&&y.c(),this.h()},l(t){a=h(t,"g",{transform:!0},1);var l=f(a);for(let a=0;a<r.length;a+=1)r[a].l(l);l.forEach(d),e=h(t,"g",{transform:!0},1);var o=f(e);for(let a=0;a<v.length;a+=1)v[a].l(o);o.forEach(d),n=h(t,"g",{transform:!0},1);var s=f(n);y&&y.l(s),s.forEach(d),this.h()},h(){u(a,"transform",`translate(${t[14].left}, ${t[14].top})`),u(e,"transform",l="translate("+t[14].left+", "+(t[3]+t[14].top)+")"),u(n,"transform",`translate(${t[14].left}, ${t[14].top})`)},m(t,l){g(t,a,l);for(let e=0;e<r.length;e+=1)r[e].m(a,null);g(t,e,l);for(let a=0;a<v.length;a+=1)v[a].m(e,null);g(t,n,l),y&&y.m(n,null)},p(t,i){if(232592&i[0]&&(s=t[4],r=m(r,i,c,1,t,s,o,a,T,gt,null,dt)),4136&i[0]){let a;for(p=t[12],a=0;a<p.length;a+=1){const l=ft(t,p,a);v[a]?v[a].p(l,i):(v[a]=mt(l),v[a].c(),v[a].m(e,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=p.length}8&i[0]&&l!==(l="translate("+t[14].left+", "+(t[3]+t[14].top)+")")&&u(e,"transform",l),t[9]?y?y.p(t,i):(y=pt(t),y.c(),y.m(n,null)):y&&(y.d(1),y=null)},d(t){t&&d(a);for(let a=0;a<r.length;a+=1)r[a].d();t&&d(e),w(v,t),t&&d(n),y&&y.d()}}}function gt(t,a){let e,l,n,r,o;function s(){return a[24](a[31])}function c(...t){return a[25](a[31],...t)}return{key:t,first:null,c(){e=i("path"),this.h()},l(t){e=h(t,"path",{class:!0,d:!0,fill:!0},1),f(e).forEach(d),this.h()},h(){u(e,"class","stream svelte-69jg0c"),u(e,"d",l=a[11](a[31])),u(e,"fill",n=a[10](a[31].key)),M(e,"notOver",a[7]&&a[7]!==a[31].key),this.first=e},m(t,l){g(t,e,l),r||(o=[P(e,"mouseover",s),P(e,"mouseout",a[16]),P(e,"mousemove",c)],r=!0)},p(t,r){a=t,2064&r[0]&&l!==(l=a[11](a[31]))&&u(e,"d",l),1040&r[0]&&n!==(n=a[10](a[31].key))&&u(e,"fill",n),144&r[0]&&M(e,"notOver",a[7]&&a[7]!==a[31].key)},d(t){t&&d(e),r=!1,N(o)}}}function mt(t){let a,e,l,n,r,o,s=$((t[30]>0&&t[28].getMonth()===t[12][t[30]-1].getMonth()?"%d %b":"%b")+" %Y")(t[28])+"";return{c(){a=i("g"),e=i("line"),n=i("text"),r=p(s),this.h()},l(t){a=h(t,"g",{transform:!0},1);var l=f(a);e=h(l,"line",{stroke:!0,y2:!0,class:!0},1),f(e).forEach(d),n=h(l,"text",{"dominant-baseline":!0,fill:!0,"text-anchor":!0,y:!0,"font-size":!0},1);var o=f(n);r=v(o,s),o.forEach(d),l.forEach(d),this.h()},h(){u(e,"stroke","#DEE2E6"),u(e,"y2",l=-t[3]),u(e,"class","pe-none"),u(n,"dominant-baseline","hanging"),u(n,"fill","currentColor"),u(n,"text-anchor","middle"),u(n,"y",6),u(n,"font-size","10px"),u(a,"transform",o="translate("+t[5](t[28])+",0)")},m(t,l){g(t,a,l),y(a,e),y(a,n),y(n,r)},p(t,n){8&n[0]&&l!==(l=-t[3])&&u(e,"y2",l),4096&n[0]&&s!==(s=$((t[30]>0&&t[28].getMonth()===t[12][t[30]-1].getMonth()?"%d %b":"%b")+" %Y")(t[28])+"")&&x(r,s),4128&n[0]&&o!==(o="translate("+t[5](t[28])+",0)")&&u(a,"transform",o)},d(t){t&&d(a)}}}function pt(t){let a,e,l,n,r,o,s,c,m,w,k,_,D,I,O,V,j,C,L,S,z,M,P,N,T,Y=$("%Y-%m-%d")(t[9].data[0])+"",A=t[9].data[1].get(t[7])+"";return{c(){a=i("line"),n=i("line"),m=i("text"),w=p(t[7]),k=p(" "),_=i("tspan"),D=p(Y),I=E(),L=i("text"),S=i("tspan"),z=p(A),this.h()},l(e){a=h(e,"line",{class:!0,x1:!0,x2:!0,y2:!0},1),f(a).forEach(d),n=h(e,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0},1),f(n).forEach(d),m=h(e,"text",{"text-anchor":!0,"font-size":!0,dx:!0,x:!0,y:!0,class:!0},1);var l=f(m);w=v(l,t[7]),k=v(l," "),_=h(l,"tspan",{class:!0},1);var r=f(_);D=v(r,Y),r.forEach(d),I=b(l),l.forEach(d),L=h(e,"text",{"text-anchor":!0,"font-size":!0,dx:!0,x:!0,y:!0,class:!0},1);var o=f(L);S=h(o,"tspan",{class:!0},1);var s=f(S);z=v(s,A),s.forEach(d),o.forEach(d),this.h()},h(){u(a,"class","dateStamp svelte-69jg0c"),u(a,"x1",e=t[5](t[8])),u(a,"x2",l=t[5](t[8])),u(a,"y2",t[3]),u(n,"class","dateStampSelected svelte-69jg0c"),u(n,"x1",r=t[5](t[8])),u(n,"x2",o=t[5](t[8])),u(n,"y1",s=t[6](t[9][0])),u(n,"y2",c=t[6](t[9][1])),u(_,"class","fw-bold"),u(m,"text-anchor",O=t[5](t[8])>t[2]/2?"end":"start"),u(m,"font-size","10"),u(m,"dx",V=t[5](t[8])>t[2]/2?-3:3),u(m,"x",j=t[5](t[8])),u(m,"y",C=t[6](t[9][1])),u(m,"class","outline svelte-69jg0c"),u(S,"class","fw-bold"),u(L,"text-anchor",M=t[5](t[8])>t[2]/2?"end":"start"),u(L,"font-size","10"),u(L,"dx",P=t[5](t[8])>t[2]/2?-3:3),u(L,"x",N=t[5](t[8])),u(L,"y",T=t[6](t[9][1])+13),u(L,"class","outline svelte-69jg0c")},m(t,e){g(t,a,e),g(t,n,e),g(t,m,e),y(m,w),y(m,k),y(m,_),y(_,D),y(m,I),g(t,L,e),y(L,S),y(S,z)},p(t,i){288&i[0]&&e!==(e=t[5](t[8]))&&u(a,"x1",e),288&i[0]&&l!==(l=t[5](t[8]))&&u(a,"x2",l),8&i[0]&&u(a,"y2",t[3]),288&i[0]&&r!==(r=t[5](t[8]))&&u(n,"x1",r),288&i[0]&&o!==(o=t[5](t[8]))&&u(n,"x2",o),576&i[0]&&s!==(s=t[6](t[9][0]))&&u(n,"y1",s),576&i[0]&&c!==(c=t[6](t[9][1]))&&u(n,"y2",c),128&i[0]&&x(w,t[7]),512&i[0]&&Y!==(Y=$("%Y-%m-%d")(t[9].data[0])+"")&&x(D,Y),292&i[0]&&O!==(O=t[5](t[8])>t[2]/2?"end":"start")&&u(m,"text-anchor",O),292&i[0]&&V!==(V=t[5](t[8])>t[2]/2?-3:3)&&u(m,"dx",V),288&i[0]&&j!==(j=t[5](t[8]))&&u(m,"x",j),576&i[0]&&C!==(C=t[6](t[9][1]))&&u(m,"y",C),640&i[0]&&A!==(A=t[9].data[1].get(t[7])+"")&&x(z,A),292&i[0]&&M!==(M=t[5](t[8])>t[2]/2?"end":"start")&&u(L,"text-anchor",M),292&i[0]&&P!==(P=t[5](t[8])>t[2]/2?-3:3)&&u(L,"dx",P),288&i[0]&&N!==(N=t[5](t[8]))&&u(L,"x",N),576&i[0]&&T!==(T=t[6](t[9][1])+13)&&u(L,"y",T)},d(t){t&&d(a),t&&d(n),t&&d(m),t&&d(L)}}}function vt(t){let a,e=t[4].length&&t[0]&&t[1]&&ut(t);return{c(){a=i("svg"),e&&e.c(),this.h()},l(t){a=h(t,"svg",{width:!0,height:!0},1);var l=f(a);e&&e.l(l),l.forEach(d),this.h()},h(){u(a,"width",t[0]),u(a,"height",t[1])},m(t,l){g(t,a,l),e&&e.m(a,null)},p(t,l){t[4].length&&t[0]&&t[1]?e?e.p(t,l):(e=ut(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null),1&l[0]&&u(a,"width",t[0]),2&l[0]&&u(a,"height",t[1])},i:k,o:k,d(t){t&&d(a),e&&e.d()}}}function yt(t,a,e){let l,n,r,o,s,c,i,h,f,d,u,{data:g=[]}=a,{width:m}=a,{height:p}=a,{groupColors:v}=a,{view:y="stackOffsetNone"}=a;const $={stackOffsetNone:Y,stackOffsetSplit:function(t,a){let e=t.length;if(!e)return;const l=.1*L(t,(t=>L(t,(t=>t[1]-t[0]))));for(let n,r=1,o=t[a[0]],s=o.length;r<e;++r){n=o,o=t[a[r]];const e=L(n,(t=>t[1]));for(let t=0;t<s;++t)o[t][1]+=o[t][0]=e+l}}},x=_("brushExtent");D(t,x,(t=>e(23,u=t)));const E={top:20,right:0,bottom:20,left:0};let b,w,k;function M(t){e(7,b=t)}function P(t,a){e(8,w=A.round(c.invert(t.offsetX))),e(9,k=a.filter((t=>t.data[0].setHours(0,0,0,0)===w.setHours(0,0,0,0)))[0])}return t.$$set=t=>{"data"in t&&e(18,g=t.data),"width"in t&&e(0,m=t.width),"height"in t&&e(1,p=t.height),"groupColors"in t&&e(19,v=t.groupColors),"view"in t&&e(20,y=t.view)},t.$$.update=()=>{1&t.$$.dirty[0]&&e(2,l=m-E.left-E.right),2&t.$$.dirty[0]&&e(3,n=p-E.top-E.bottom),262144&t.$$.dirty[0]&&e(21,r=[...new Set(g.map((t=>t.Category)))]),262144&t.$$.dirty[0]&&e(22,o=I(g,(t=>I(t,(t=>t[0].frequency),(t=>t.Category))),(t=>t.date))),7340032&t.$$.dirty[0]&&e(4,s=O().keys(r).value(((t,a)=>t[1].has(a)?t[1].get(a):0)).offset($[y])(o)),8388612&t.$$.dirty[0]&&e(5,c=V().domain(u).range([0,l])),24&t.$$.dirty[0]&&e(6,i=j().domain([C(s,(t=>C(t,(t=>t[0])))),L(s,(t=>L(t,(t=>t[1]))))]).range([n,0])),524288&t.$$.dirty[0]&&e(10,h=S().domain(v.map((t=>t.category))).range(v.map((t=>t.color.formatHex())))),96&t.$$.dirty[0]&&e(11,f=z().x((t=>c(t.data[0]))).y0((t=>i(t[0]))).y1((t=>i(t[1])))),32&t.$$.dirty[0]&&e(12,d=c.ticks())},[m,p,l,n,s,c,i,b,w,k,h,f,d,x,E,M,function(){e(7,b=null),e(9,k=null),e(8,w=null)},P,g,v,y,r,o,u,t=>M(t.key),(t,a)=>P(a,t)]}class $t extends o{constructor(t){super(),s(this,t,yt,vt,c,{data:18,width:0,height:1,groupColors:19,view:20},[-1,-1])}}function xt(t,a,e){const l=t.slice();return l[18]=a[e],l}function Et(t,a,e){const l=t.slice();return l[21]=a[e],l}function bt(t){let a,e,l,n,r,o,s=t[6],c=[];for(let i=0;i<s.length;i+=1)c[i]=wt(Et(t,s,i));let m=t[7],p=[];for(let i=0;i<m.length;i+=1)p[i]=kt(xt(t,m,i));return{c(){a=i("g");for(let t=0;t<c.length;t+=1)c[t].c();e=i("g");for(let t=0;t<p.length;t+=1)p[t].c();l=i("g"),n=i("path"),o=i("g"),this.h()},l(t){a=h(t,"g",{transform:!0},1);var r=f(a);for(let a=0;a<c.length;a+=1)c[a].l(r);r.forEach(d),e=h(t,"g",{transform:!0},1);var s=f(e);for(let a=0;a<p.length;a+=1)p[a].l(s);s.forEach(d),l=h(t,"g",{transform:!0},1);var i=f(l);n=h(i,"path",{d:!0,class:!0},1),f(n).forEach(d),i.forEach(d),o=h(t,"g",{},1),f(o).forEach(d),this.h()},h(){u(a,"transform","translate("+t[8].left+", "+t[8].top+")"),u(e,"transform","translate("+t[8].left+", "+(t[9]+t[8].top)+")"),u(n,"d",r=t[10](t[0])),u(n,"class","evolution svelte-pjrhgz"),u(l,"transform","translate("+t[8].left+","+t[8].top+")")},m(r,s){g(r,a,s);for(let t=0;t<c.length;t+=1)c[t].m(a,null);g(r,e,s);for(let t=0;t<p.length;t+=1)p[t].m(e,null);g(r,l,s),y(l,n),g(r,o,s),t[12](o)},p(t,l){if(104&l){let e;for(s=t[6],e=0;e<s.length;e+=1){const n=Et(t,s,e);c[e]?c[e].p(n,l):(c[e]=wt(n),c[e].c(),c[e].m(a,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}if(656&l){let a;for(m=t[7],a=0;a<m.length;a+=1){const n=xt(t,m,a);p[a]?p[a].p(n,l):(p[a]=kt(n),p[a].c(),p[a].m(e,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=m.length}1&l&&r!==(r=t[10](t[0]))&&u(n,"d",r)},d(n){n&&d(a),w(c,n),n&&d(e),w(p,n),n&&d(l),n&&d(o),t[12](null)}}}function wt(t){let a,e,l,n,r,o=B("~s")(t[21])+"";return{c(){a=i("g"),e=i("line"),l=i("text"),n=p(o),this.h()},l(t){a=h(t,"g",{class:!0,opacity:!0,transform:!0},1);var r=f(a);e=h(r,"line",{stroke:!0,x2:!0},1),f(e).forEach(d),l=h(r,"text",{"dominant-baseline":!0,"text-anchor":!0,fill:!0,x:!0,"font-size":!0},1);var s=f(l);n=v(s,o),s.forEach(d),r.forEach(d),this.h()},h(){u(e,"stroke","#DEE2E6"),u(e,"x2",t[3]),u(l,"dominant-baseline","middle"),u(l,"text-anchor","end"),u(l,"fill","currentColor"),u(l,"x","-5"),u(l,"font-size","10px"),u(a,"class","tick"),u(a,"opacity","1"),u(a,"transform",r="translate(0,"+t[5](t[21])+")")},m(t,r){g(t,a,r),y(a,e),y(a,l),y(l,n)},p(t,l){8&l&&u(e,"x2",t[3]),64&l&&o!==(o=B("~s")(t[21])+"")&&x(n,o),96&l&&r!==(r="translate(0,"+t[5](t[21])+")")&&u(a,"transform",r)},d(t){t&&d(a)}}}function kt(t){let a,e,l,n,r,o=$("%b %Y")(t[18])+"";return{c(){a=i("g"),e=i("line"),l=i("text"),n=p(o),this.h()},l(t){a=h(t,"g",{transform:!0},1);var r=f(a);e=h(r,"line",{stroke:!0,y2:!0},1),f(e).forEach(d),l=h(r,"text",{"dominant-baseline":!0,fill:!0,"text-anchor":!0,y:!0,"font-size":!0},1);var s=f(l);n=v(s,o),s.forEach(d),r.forEach(d),this.h()},h(){u(e,"stroke","#DEE2E6"),u(e,"y2",-t[9]),u(l,"dominant-baseline","hanging"),u(l,"fill","currentColor"),u(l,"text-anchor","middle"),u(l,"y",6),u(l,"font-size","10px"),u(a,"transform",r="translate("+t[4](t[18])+",0)")},m(t,r){g(t,a,r),y(a,e),y(a,l),y(l,n)},p(t,e){128&e&&o!==(o=$("%b %Y")(t[18])+"")&&x(n,o),144&e&&r!==(r="translate("+t[4](t[18])+",0)")&&u(a,"transform",r)},d(t){t&&d(a)}}}function _t(t){let a,e=t[0].length&&t[1]&&Dt&&bt(t);return{c(){a=i("svg"),e&&e.c(),this.h()},l(t){a=h(t,"svg",{width:!0,height:!0},1);var l=f(a);e&&e.l(l),l.forEach(d),this.h()},h(){u(a,"width",t[1]),u(a,"height",Dt)},m(t,l){g(t,a,l),e&&e.m(a,null)},p(t,[l]){t[0].length&&t[1]&&Dt?e?e.p(t,l):(e=bt(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null),2&l&&u(a,"width",t[1])},i:k,o:k,d(t){t&&d(a),e&&e.d()}}}const Dt=100;function It(t,a,e){let l,n,r,o,s,c,{data:i=[]}=a,{width:h=0}=a;const f={top:10,right:0,bottom:20,left:30},d=_("brushExtent"),u=_("brushExtentDefault"),g=Dt-f.top-f.bottom;let m,p=H().x((t=>n(t.x))).y((t=>r(t.y)));const v=A.every(1);function y(t){t.selection||d.set(u)}function $(t){const a=t.selection;if(!t.sourceEvent||!a)return;const[e,l]=a.map((t=>v.round(n.invert(t))));X(this).call(c.move,l>e?[e,l].map(n):null),d.set([e,l])}return t.$$set=t=>{"data"in t&&e(0,i=t.data),"width"in t&&e(1,h=t.width)},t.$$.update=()=>{2&t.$$.dirty&&e(3,l=h-f.left-f.right),9&t.$$.dirty&&e(4,n=V().domain(U(i,(t=>t.x))).range([0,l])),1&t.$$.dirty&&e(5,r=j().domain([0,L(i,(t=>t.y))]).range([g,0])),32&t.$$.dirty&&e(6,o=r.ticks(4)),16&t.$$.dirty&&e(7,s=n.ticks()),2&t.$$.dirty&&e(11,c=W().extent([[f.left,f.top],[h-f.right,Dt-f.bottom]]).on("brush",$).on("end",y)),2052&t.$$.dirty&&m&&X(m).call(c)},[i,h,m,l,n,r,o,s,f,g,p,c,function(t){q[t?"unshift":"push"]((()=>{m=t,e(2,m)}))}]}class Ot extends o{constructor(t){super(),s(this,t,It,_t,c,{data:0,width:1})}}function Vt(t,a,e){const l=t.slice();return l[22]=a[e],l}function jt(t,a,e){const l=t.slice();return l[25]=a[e],l}function Ct(t){let a,e,l,n=t[25]+"";return{c(){a=F("option"),e=p(n),l=E(),this.h()},l(t){a=h(t,"OPTION",{value:!0});var r=f(a);e=v(r,n),l=b(r),r.forEach(d),this.h()},h(){a.__value=t[25],a.value=a.__value},m(t,n){g(t,a,n),y(a,e),y(a,l)},p:k,d(t){t&&d(a)}}}function Lt(t){let a,e,l,n=t[22]+"";return{c(){a=F("option"),e=p(n),l=E(),this.h()},l(t){a=h(t,"OPTION",{value:!0});var r=f(a);e=v(r,n),l=b(r),r.forEach(d),this.h()},h(){a.__value=t[22],a.value=a.__value},m(t,n){g(t,a,n),y(a,e),y(a,l)},p:k,d(t){t&&d(a)}}}function St(t){let a,e,l,n,r,o,s,c,i,m,$,x,k,_,D,I,O,V,j,C,L,S,z,M,T,Y,A,B,H,U,W,X,q,et,lt,nt,rt,st,ct,it,ft,dt,ut,gt,mt,pt,vt,yt,xt,Et,bt,wt;e=new ht({props:{title:t[0].title}});let kt=t[8],_t=[];for(let h=0;h<kt.length;h+=1)_t[h]=Ct(jt(t,kt,h));let Dt=t[9],It=[];for(let h=0;h<Dt.length;h+=1)It[h]=Lt(Vt(t,Dt,h));return ct=new $t({props:{width:t[4],height:t[5],data:t[7],groupColors:t[10],view:t[6]}}),xt=new Ot({props:{width:t[4],data:t[3]}}),{c(){a=F("div"),K(e.$$.fragment),l=E(),n=F("div"),r=F("div"),o=F("div"),s=F("div"),c=F("div"),i=F("label"),m=p("Language"),$=E(),x=F("select");for(let t=0;t<_t.length;t+=1)_t[t].c();k=E(),_=F("div"),D=F("div"),I=F("label"),O=p("Macro category"),V=E(),j=F("select");for(let t=0;t<It.length;t+=1)It[t].c();C=E(),L=F("div"),S=F("label"),z=p("View"),M=E(),T=F("div"),Y=F("input"),A=E(),B=F("label"),H=p("Stack"),U=E(),W=F("input"),X=E(),q=F("label"),et=p("Split"),lt=E(),nt=F("div"),rt=F("div"),st=F("div"),K(ct.$$.fragment),dt=E(),ut=F("div"),gt=F("div"),mt=F("p"),pt=F("small"),vt=p("Valid tweets"),yt=E(),K(xt.$$.fragment),this.h()},l(t){a=h(t,"DIV",{class:!0});var u=f(a);Q(e.$$.fragment,u),u.forEach(d),l=b(t),n=h(t,"DIV",{class:!0});var g=f(n);r=h(g,"DIV",{class:!0});var p=f(r);o=h(p,"DIV",{class:!0});var y=f(o);s=h(y,"DIV",{class:!0});var E=f(s);c=h(E,"DIV",{class:!0});var w=f(c);i=h(w,"LABEL",{for:!0,class:!0});var P=f(i);m=v(P,"Language"),P.forEach(d),$=b(w),x=h(w,"SELECT",{class:!0,id:!0,"aria-label":!0});var N=f(x);for(let a=0;a<_t.length;a+=1)_t[a].l(N);N.forEach(d),w.forEach(d),E.forEach(d),k=b(y),_=h(y,"DIV",{class:!0});var F=f(_);D=h(F,"DIV",{class:!0});var K=f(D);I=h(K,"LABEL",{for:!0,class:!0});var R=f(I);O=v(R,"Macro category"),R.forEach(d),V=b(K),j=h(K,"SELECT",{class:!0,id:!0,"aria-label":!0});var Z=f(j);for(let a=0;a<It.length;a+=1)It[a].l(Z);Z.forEach(d),K.forEach(d),F.forEach(d),C=b(y),L=h(y,"DIV",{class:!0});var G=f(L);S=h(G,"LABEL",{for:!0,class:!0});var J=f(S);z=v(J,"View"),J.forEach(d),M=b(G),T=h(G,"DIV",{class:!0,role:!0});var tt=f(T);Y=h(tt,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0,value:!0}),A=b(tt),B=h(tt,"LABEL",{class:!0,for:!0});var at=f(B);H=v(at,"Stack"),at.forEach(d),U=b(tt),W=h(tt,"INPUT",{type:!0,class:!0,name:!0,id:!0,autocomplete:!0,value:!0}),X=b(tt),q=h(tt,"LABEL",{class:!0,for:!0});var ot=f(q);et=v(ot,"Split"),ot.forEach(d),tt.forEach(d),G.forEach(d),y.forEach(d),lt=b(p),nt=h(p,"DIV",{class:!0});var it=f(nt);rt=h(it,"DIV",{class:!0});var ht=f(rt);st=h(ht,"DIV",{class:!0});var ft=f(st);Q(ct.$$.fragment,ft),ft.forEach(d),ht.forEach(d),it.forEach(d),dt=b(p),ut=h(p,"DIV",{class:!0});var $t=f(ut);gt=h($t,"DIV",{class:!0});var Et=f(gt);mt=h(Et,"P",{class:!0});var bt=f(mt);pt=h(bt,"SMALL",{});var wt=f(pt);vt=v(wt,"Valid tweets"),wt.forEach(d),bt.forEach(d),yt=b(Et),Q(xt.$$.fragment,Et),Et.forEach(d),$t.forEach(d),p.forEach(d),g.forEach(d),this.h()},h(){u(a,"class","container"),u(i,"for","language"),u(i,"class","form-label"),u(x,"class","form-select"),u(x,"id","language"),u(x,"aria-label","Language"),void 0===t[1]&&ot((()=>t[13].call(x))),u(c,"class","mb-3"),u(s,"class","col-md-3"),u(I,"for","macroCategory"),u(I,"class","form-label"),u(j,"class","form-select"),u(j,"id","macroCategory"),u(j,"aria-label","macroCategory"),void 0===t[2]&&ot((()=>t[14].call(j))),u(D,"class","mb-3"),u(_,"class","col-md-4"),u(S,"for","options"),u(S,"class","form-label w-100"),u(Y,"type","radio"),u(Y,"class","btn-check"),u(Y,"name","options"),u(Y,"id","option1"),u(Y,"autocomplete","off"),Y.__value="stackOffsetNone",Y.value=Y.__value,t[16][0].push(Y),u(B,"class","btn btn-secondary"),u(B,"for","option1"),u(W,"type","radio"),u(W,"class","btn-check"),u(W,"name","options"),u(W,"id","option2"),u(W,"autocomplete","off"),W.__value="stackOffsetSplit",W.value=W.__value,t[16][0].push(W),u(q,"class","btn btn-secondary"),u(q,"for","option2"),u(T,"class","btn-group"),u(T,"role","group"),u(L,"class","col-md-auto ms-auto"),u(o,"class","row border-bottom py-2"),u(st,"class","w-100 h-100"),ot((()=>t[18].call(st))),u(rt,"class","col-12"),u(nt,"class","row flex-grow-1 flex-shrink-1 overflow-hidden"),ot((()=>t[19].call(nt))),u(mt,"class","text-muted mb-0"),u(gt,"class","col-12"),u(ut,"class","row py-2 border-top"),u(r,"class","container h-100 d-flex flex-column"),u(n,"class","bg-light w-100 containerViz svelte-11zrb3w")},m(h,f){g(h,a,f),R(e,a,null),g(h,l,f),g(h,n,f),y(n,r),y(r,o),y(o,s),y(s,c),y(c,i),y(i,m),y(c,$),y(c,x);for(let t=0;t<_t.length;t+=1)_t[t].m(x,null);Z(x,t[1]),y(o,k),y(o,_),y(_,D),y(D,I),y(I,O),y(D,V),y(D,j);for(let t=0;t<It.length;t+=1)It[t].m(j,null);Z(j,t[2]),y(o,C),y(o,L),y(L,S),y(S,z),y(L,M),y(L,T),y(T,Y),Y.checked=Y.__value===t[6],y(T,A),y(T,B),y(B,H),y(T,U),y(T,W),W.checked=W.__value===t[6],y(T,X),y(T,q),y(q,et),y(r,lt),y(r,nt),y(nt,rt),y(rt,st),R(ct,st,null),it=G(st,t[18].bind(st)),ft=G(nt,t[19].bind(nt)),y(r,dt),y(r,ut),y(ut,gt),y(gt,mt),y(mt,pt),y(pt,vt),y(gt,yt),R(xt,gt,null),Et=!0,bt||(wt=[P(x,"change",t[13]),P(j,"change",t[14]),P(Y,"change",t[15]),P(W,"change",t[17])],bt=!0)},p(t,[a]){const l={};if(1&a&&(l.title=t[0].title),e.$set(l),256&a){let e;for(kt=t[8],e=0;e<kt.length;e+=1){const l=jt(t,kt,e);_t[e]?_t[e].p(l,a):(_t[e]=Ct(l),_t[e].c(),_t[e].m(x,null))}for(;e<_t.length;e+=1)_t[e].d(1);_t.length=kt.length}if(258&a&&Z(x,t[1]),512&a){let e;for(Dt=t[9],e=0;e<Dt.length;e+=1){const l=Vt(t,Dt,e);It[e]?It[e].p(l,a):(It[e]=Lt(l),It[e].c(),It[e].m(j,null))}for(;e<It.length;e+=1)It[e].d(1);It.length=Dt.length}516&a&&Z(j,t[2]),64&a&&(Y.checked=Y.__value===t[6]),64&a&&(W.checked=W.__value===t[6]);const n={};16&a&&(n.width=t[4]),32&a&&(n.height=t[5]),128&a&&(n.data=t[7]),64&a&&(n.view=t[6]),ct.$set(n);const r={};16&a&&(r.width=t[4]),8&a&&(r.data=t[3]),xt.$set(r)},i(t){Et||(J(e.$$.fragment,t),J(ct.$$.fragment,t),J(xt.$$.fragment,t),Et=!0)},o(t){tt(e.$$.fragment,t),tt(ct.$$.fragment,t),tt(xt.$$.fragment,t),Et=!1},d(r){r&&d(a),at(e),r&&d(l),r&&d(n),w(_t,r),w(It,r),t[16][0].splice(t[16][0].indexOf(Y),1),t[16][0].splice(t[16][0].indexOf(W),1),at(ct),it(),ft(),at(xt),bt=!1,N(wt)}}}async function zt({page:t,fetch:a}){const e=it+t.path,l=await a(`${e}/data.json`),n=await a(`${e}.json`),r=await n.json();return{props:{emotions:(await l.json()).emotions,info:r.data}}}function Mt(t,a,e){let l,n,o,s,c,{emotions:i}=a,{info:h}=a,f=Object.keys(i),d=f[0],u=["all",...new Set(i[d].evolution.map((t=>t.Macrocategory)))],g=u[0];new Set(i[d].evolution.map((t=>t.Category)));const m=et([...i.ar.evolution,...i.fr.evolution],(t=>t.Macrocategory),(t=>t.Category)).map(((t,a)=>{const e=st[a],l=1/t[1].length;return t[1].map(((t,a)=>({category:t[0],color:lt(e).brighter(a*l)})))})).flat();let p="stackOffsetNone";return t.$$set=t=>{"emotions"in t&&e(11,i=t.emotions),"info"in t&&e(0,h=t.info)},t.$$.update=()=>{2054&t.$$.dirty&&e(7,l=i[d].evolution.map((t=>r(r({},t),{date:new Date(t.date)}))).filter((t=>"all"===g||g===t.Macrocategory))),2050&t.$$.dirty&&e(3,n=i[d].valid.map((t=>({y:t.value,x:new Date(t.Date)})))),8&t.$$.dirty&&nt("brushExtentDefault",U(n,(t=>t.x))),8&t.$$.dirty&&e(12,o=rt(U(n,(t=>t.x)))),4096&t.$$.dirty&&nt("brushExtent",o)},[h,d,g,n,s,c,p,l,f,u,m,i,o,function(){d=ct(this),e(1,d),e(8,f)},function(){g=ct(this),e(2,g),e(9,u)},function(){p=this.__value,e(6,p)},[[]],function(){p=this.__value,e(6,p)},function(){s=this.clientWidth,e(4,s)},function(){c=this.clientHeight,e(5,c)}]}export default class extends o{constructor(t){super(),s(this,t,Mt,St,c,{emotions:11,info:0})}}export{zt as load};
