(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t(14),o=t.n(r),i=(t(20),t(3)),u=function(e){return Object(c.jsxs)("form",{onSubmit:e.addNewName,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNum,onChange:e.handleNumChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var n=e.person,t=e.deletePerson;return Object(c.jsxs)("p",{children:[n.name," ",n.num," ",Object(c.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]},n.name)},d=function(e){return Object(c.jsx)("div",{children:e.persons.map((function(n){return Object(c.jsx)(s,{person:n,deletePerson:e.deletePerson})}))})},j=t(4),l=t.n(j),h="/api/persons",b=function(){return l.a.get(h).then((function(e){return e.data}))},f=function(e){return l.a.post(h,e).then((function(e){return e.data}))},m=function(e){return l.a.delete("".concat(h,"/").concat(e))},O=function(e,n){return l.a.put("".concat(h,"/").concat(n),e).then((function(e){return e.data}))},p=function(e){var n=e.message,t=e.error;return 0===n.length?null:t?Object(c.jsx)("div",{className:"error",children:n}):Object(c.jsx)("div",{className:"notification",children:n})},x=function(e){return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:e.filter,onChange:e.handleFilterChange})]})},v=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),j=s[0],l=s[1],h=Object(a.useState)(""),v=Object(i.a)(h,2),g=v[0],w=v[1],N=Object(a.useState)(""),C=Object(i.a)(N,2),S=C[0],k=C[1],P=Object(a.useState)(""),y=Object(i.a)(P,2),T=y[0],D=y[1],E=Object(a.useState)(!1),F=Object(i.a)(E,2),J=F[0],L=F[1];Object(a.useEffect)((function(){b().then((function(e){r(e)}))}),[]);var B=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:T,error:J}),Object(c.jsx)(x,{value:S,handleFilterChange:function(e){k(e.target.value)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(u,{addNewName:function(e){e.preventDefault();var n,c={name:j,num:g},a=!1,o=-1;for(n=0;n<t.length;n++)t[n].name===c.name&&(a=!0,o=t[n].id);a&&o>=0?window.confirm("".concat(c.name," has already been added, replace the old number with a new one?"))&&O(c,o).then((function(e){r(t.map((function(n){return n.id!==o?n:e}))),w(""),l(""),D("".concat(c.name,"'s number has been updated")),setTimeout((function(){D("")}),3e3)})).catch((function(e){L(!0),D("".concat(c.name,"'s details has already been removed")),setTimeout((function(){D(""),L(!1)}),3e3),r(t.filter((function(e){return e.id!==o})))})):f(c).then((function(e){r(t.concat(e)),l(""),w(""),D("".concat(e.name," has been added")),setTimeout((function(){D("")}),5e3)})).catch((function(e){console.log("failed: ",e)}))},newName:j,handleNameChange:function(e){l(e.target.value)},newNum:g,handleNumChange:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(d,{persons:B,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&m(e.id).then(r(t.filter((function(n){return n.id!==e.id}))))}})]})};o.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d5bfa6f8.chunk.js.map