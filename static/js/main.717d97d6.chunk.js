(this.webpackJsonpsortingviz=this.webpackJsonpsortingviz||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),r=a.n(s),o=a(11),c=a.n(o),l=(a(38),a.p,a(39),a(23)),u=a.n(l),i=a(25),m=a(14),d=(a(41),a(62)),b=a(63),y=a(61),g=Object(y.a)((function(e){return{root:{width:"70vw"}}}));var C=function(e){var t=g(),a=Object(s.useState)([]),r=Object(m.a)(a,2),o=r[0],c=r[1],l=Object(s.useState)(!1),y=Object(m.a)(l,2),C=y[0],h=y[1],j=Object(s.useState)(75),k=Object(m.a)(j,2),f=k[0],N=k[1],p=Object(s.useState)(""),O=Object(m.a)(p,2),x=O[0],B=O[1],E=Object(s.useState)(!1),v=Object(m.a)(E,2),w=v[0],S=v[1],q=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function z(){if(!C){B("");for(var e=[],t=0;t<f;t++)e.push(Math.floor(991*Math.random()+10));c(e),console.log(o);for(var a=0;a<o.length;a++)document.getElementsByClassName("bars")[a].style.backgroundColor="aquamarine"}}var M=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n,s,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=2;break}return e.abrupt("return");case 2:B(""),h(!0),a=0,n=0,s=0;case 6:if(!(s<f-1)){e.next=27;break}r=0;case 8:if(!(r<f-1-s)){e.next=21;break}return document.getElementsByClassName("bars")[r].style.backgroundColor="royalblue",document.getElementsByClassName("bars")[r+1].style.backgroundColor="royalblue",e.next=13,q(1e3/f);case 13:return o[r]>o[r+1]?(t=o[r],o[r]=o[r+1],document.getElementsByClassName("bars")[r].style.backgroundColor="red",document.getElementsByClassName("bars")[r].style.height="".concat(o[r+1]/2,"px"),o[r+1]=t,document.getElementsByClassName("bars")[r+1].style.backgroundColor="red",document.getElementsByClassName("bars")[r+1].style.height="".concat(t/2,"px"),n=r+1,a=r):(document.getElementsByClassName("bars")[r].style.backgroundColor="aquamarine",document.getElementsByClassName("bars")[r+1].style.backgroundColor="aquamarine"),e.next=16,q(2e3/f);case 16:"blue"!==document.getElementsByClassName("bars")[a].style.backgroundColor&&(document.getElementsByClassName("bars")[a].style.backgroundColor="aquamarine"),"blue"!==document.getElementsByClassName("bars")[n].style.backgroundColor&&(document.getElementsByClassName("bars")[n].style.backgroundColor="aquamarine");case 18:r++,e.next=8;break;case 21:for(c=f-1;c>=f-s-1;c--)document.getElementsByClassName("bars")[c].style.backgroundColor="blue";return e.next=24,q(75);case 24:s++,e.next=6;break;case 27:document.getElementsByClassName("bars")[0].style.backgroundColor="blue",h(!1),B("Array is Sorted.");case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){z()}),[f]),Object(n.jsxs)("div",{className:"window",children:[Object(n.jsx)("h1",{className:"heading",children:"SortingViz"}),Object(n.jsx)("div",{className:"buttons",children:Object(n.jsxs)(d.a,{mt:2,children:[Object(n.jsx)(b.a,{className:t.button,variant:"contained",onClick:z,style:C?{opacity:"0.5"}:{opacity:"1"},children:"Generate New Array"}),Object(n.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function e(){if(!C){var t=prompt("Please enter the array size between 10 and 150");console.log("as: "+t),(null==t||0==t.length||t<10||t>150)&&e(),N(t),z();for(var a=0;a<o.length;a++)document.getElementsByClassName("bars")[a].style.backgroundColor="aquamarine"}},style:C?{opacity:"0.5"}:{opacity:"1"},children:"Change Array Size"}),Object(n.jsx)(b.a,{color:"primary",variant:"contained",onClick:M,style:C?{opacity:"0.5"}:{opacity:"1"},children:"Sort"}),Object(n.jsx)(b.a,{onClick:function(){w?(S(!1),document.getElementsByClassName("array-container")[0].style.backgroundColor="white",document.getElementsByClassName("window")[0].style.backgroundColor="white",document.getElementsByClassName("heading")[0].style.color="black",document.getElementsByClassName("dark")[0].style.color="black"):(S(!0),document.getElementsByClassName("array-container")[0].style.backgroundColor="black",document.getElementsByClassName("window")[0].style.backgroundColor="black",document.getElementsByClassName("heading")[0].style.color="white",document.getElementsByClassName("dark")[0].style.color="white")},className:"dark",color:"primary",children:w?"Light Mode":"Dark Mode"})]})}),Object(n.jsx)("p",{children:x}),Object(n.jsx)("div",{className:"array-container",children:o.map((function(e){return Object(n.jsx)("div",{className:"bars",style:{height:"".concat(e/2,"px"),width:"".concat(30/o.length,"vw")}})}))})]})};var h=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(C,{})})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),r(e),o(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),j()}},[[46,1,2]]]);
//# sourceMappingURL=main.717d97d6.chunk.js.map