(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n(6),c=n.n(s),o=n(2);n(13);var u=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Author: Bryant Davis"}),Object(r.jsx)("a",{href:"mailto:bryant.davis@hotmail.com",children:"Email"})]})};n(14);var i=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"RESTy"})})},l=n(3),j=n.n(l),b=n(4);n(16);var h=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),l=i[0],h=i[1],d=Object(a.useState)("Content-Type: application/json"),O=Object(o.a)(d,2),x=O[0],p=O[1],f=Object(a.useState)(void 0),v=Object(o.a)(f,2),m=v[0],S=v[1];function g(){return(g=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.methods||!e.urls){t.next=9;break}return t.next=3,c(e.urls);case 3:return t.next=5,e.setUrls(null);case 5:return t.next=7,h(e.methods);case 7:return t.next=9,e.setMethods(null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(s),n=t.target,r=n.name,a=n.value,"url"!==r){e.next=8;break}return e.next=6,c(a);case 6:e.next=21;break;case 8:if("header"!==r){e.next=13;break}return e.next=11,p(a);case 11:e.next=21;break;case 13:if("body"!==r){e.next=18;break}return e.next=16,S(a);case 16:e.next=21;break;case 18:if("GET"!==t.target.value&&"POST"!==t.target.value&&"PUT"!==t.target.value&&"DELETE"!==t.target.value){e.next=21;break}return e.next=21,h(a);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(b.a)(j.a.mark((function t(n){var r,a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch(s,{mode:"cors",headers:{"Content-Type":"application/json"},method:l,body:m});case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,e.results(a),S(void 0),(c=JSON.parse(localStorage.getItem("method"))).push({url:s,method:l}),localStorage.setItem("method",JSON.stringify(c)),e.setStorage(!0),console.log(c);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){g.apply(this,arguments)}(),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:["URL:",Object(r.jsx)("input",{type:"text",name:"url",onChange:E,defaultValue:s}),Object(r.jsx)("br",{}),"HEADERS: ",Object(r.jsx)("textarea",{type:"text",name:"header",value:x,onChange:E}),"BODY: ",Object(r.jsx)("textarea",{type:"text",name:"body",value:m,onChange:E}),Object(r.jsxs)("select",{name:"crud",onChange:E,children:[Object(r.jsx)("option",{value:l,children:e.methods}),Object(r.jsx)("option",{value:"POST",children:"POST"}),Object(r.jsx)("option",{value:"GET",children:"GET"}),Object(r.jsx)("option",{value:"DELETE",children:"DELETE"}),Object(r.jsx)("option",{value:"PUT",children:"PUT"})]}),Object(r.jsx)("button",{onClick:E,name:"method",value:"POST",children:"POST"}),Object(r.jsx)("button",{onClick:E,name:"method",value:"PUT",children:"PUT"}),Object(r.jsx)("button",{onClick:E,name:"method",value:"GET",children:"GET"}),Object(r.jsx)("button",{onClick:E,name:"method",value:"DELETE",children:"DELETE"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",children:"GO"})]}),Object(r.jsxs)("h3",{children:[s," ",l]})]})},d=n(7),O=n.n(d);var x=function(e){var t,n=e.results;return n&&(t=Object(r.jsx)(O.a,{id:"json-pretty",data:n})),Object(r.jsx)("ul",{children:t})};var p=function(e){var t=e.storage,n=e.isStorage,a=e.setMethod,s=e.setUrl,c="No History";function o(e){var t=e.target.innerText.split(":"),n=t[1].split(" ")[0],r=t[2].split(" ")[1]+t[3]+t[4];a(n),s(r)}return n&&(c=t("method").map((function(e){return Object(r.jsxs)("button",{onClick:o,children:["Method:",e.method," Url: ",e.url]})}))),Object(r.jsx)("ul",{id:"ul",children:c})};var f=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!0),l=Object(o.a)(c,2),j=l[0],b=l[1],d=Object(a.useState)(""),O=Object(o.a)(d,2),f=O[0],v=O[1],m=Object(a.useState)(""),S=Object(o.a)(m,2),g=S[0],E=S[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{}),Object(r.jsx)(h,{results:s,setStorage:b,methods:f,setMethods:v,urls:g,setUrls:E}),Object(r.jsx)(x,{results:n}),Object(r.jsx)(p,{storage:function(e){return JSON.parse(localStorage.getItem(e))},isStorage:j,setMethod:v,setUrl:E}),Object(r.jsx)(u,{})]})};c.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.24ed851d.chunk.js.map