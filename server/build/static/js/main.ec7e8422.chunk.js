(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{131:function(e,t,n){e.exports=n(162)},137:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),u=n(24),i=n(43),s=n(18),l=n(109),d=n(207),p=n(205),m=n(206),f=n(56),b=n(14),v=n(13),h=n.n(v),j=n(20),O=n(82),E=n(201),g=n(107),x=n(202),y=n(203),w=n(204),D=n(200),T=(n(137),n(192)),k=n(211),C=n(210),_=n(209),I=n(197),S=n(199),P=n(3),F=n(110),A=Object(T.a)({Checkbox:{padding:12},TextField:{maxWidth:500,margin:0},TextField__input:{textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:50,padding:0},Tooltip:{fontSize:16}}),U=function(e){var t=e.todoList,n=e.handleTodoChange,c=e.updateTodo,o=e.deleteTodo,u=A();Object(a.useEffect)((function(){var e=function(e){e.preventDefault(),e.stopPropagation()},n=function(e){"Tab"===e.key&&(e.preventDefault(),e.stopPropagation())};if(t.some((function(e){return e.duplicate})))return document.addEventListener("mousedown",e),document.addEventListener("keydown",n),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",n)}}),[t]);var i=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Created: ".concat(Object(F.a)(e.createdDate,"MM/dd/yyyy"))),r.a.createElement("p",null,"Due: ".concat(Object(F.a)(e.dueDate,"MM/dd/yyyy"))))};return r.a.createElement("ul",{className:"TodoList"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:Object(P.a)("TodoList__li",e.finished&&"TodoList__li--finished"),onClick:function(n){return function(e,n){t.some((function(e){return e.duplicate}))||c(Object(b.a)(Object(b.a)({},n),{},{finished:!n.finished}))}(0,e)}},r.a.createElement(k.a,{title:"Complete",classes:{tooltip:u.Tooltip}},r.a.createElement(C.a,{id:e.content,classes:{root:u.Checkbox},name:"todo",color:"secondary",checked:e.finished})),r.a.createElement(k.a,{key:e.id,title:i(e),placement:"right",classes:{tooltip:u.Tooltip},arrow:!0},r.a.createElement("form",{className:"TodoList__li__form",onSubmit:function(t){return function(e,t){e.preventDefault(),t.duplicate||c(t).then((function(e){document.activeElement.blur()})).catch(console.log)}(t,e)}},r.a.createElement(_.a,{classes:{root:u.TextField},value:e.content,error:e.duplicate,onChange:function(t){return function(e,t){n(t.id,{content:e.target.value})}(t,e)},onClick:function(e){return e.stopPropagation()},style:{width:"".concat(e.content.length+5,"ch")},InputProps:{disableUnderline:!e.duplicate,classes:{input:u.TextField__input}}}))),r.a.createElement(k.a,{title:"Delete",classes:{tooltip:u.Tooltip}},r.a.createElement(I.a,{color:"primary","aria-label":"delete",onClick:function(t){return function(e,t){e.stopPropagation(),o(t)}(t,e)}},r.a.createElement(S.a,null))))})))},L=(n(142),n(212)),N=n(108),K=n(23),M=n(208),W=Object(T.a)({TextField:{width:"calc(100vw - 136px)",maxWidth:"500px"},TextField__input:{textAlign:"center",fullWidth:!0},KeyboardDatePicker:{width:"calc((100vw - 136px) / 2)",maxWidth:"250px",minWidth:150},KeyboardDatePicker__inputAdornment:{display:"none"}}),J=function(e){var t=e.todoForm,n=e.addTodo,a=e.handleTodoFormChange,c=W(),o=function(e,t,a){e.length>0&&!a&&n({content:e,dueDate:t})},u=function(e){"Enter"===e.key&&o(t.content,t.dueDate,t.error)};return r.a.createElement("form",{className:"TodoInputForm",onSubmit:o},r.a.createElement(L.a,{error:t.error},r.a.createElement(_.a,{classes:{root:c.TextField},margin:"normal",type:"text",name:"todoTextField",placeholder:"Enter Todo...",value:t.content,onChange:function(e){a({content:e.target.value})},onKeyDown:u,InputProps:{classes:{input:c.TextField__input}},inputProps:{className:"TodoForm__input"},error:t.error,helperText:t.error&&"Duplicate todo"})),r.a.createElement(L.a,{error:t.error},r.a.createElement(K.a,{utils:N.a},r.a.createElement(M.a,{margin:"normal",label:"Due Date",format:"MM/dd/yy",value:t.dueDate,error:t.error,onChange:function(e){a({dueDate:Object(O.a)(e)})},onKeyDown:u,classes:{root:c.KeyboardDatePicker},KeyboardButtonProps:{"aria-label":"change date"},inputProps:{className:"TodoForm__input"}}))))},q=(n(143),n(42)),z=n.n(q),B=null,G={getAll:function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/api/todos");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(j.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:B}},e.next=3,z.a.post("/api/todos",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(j.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:B}},e.next=3,z.a.put("".concat("/api/todos","/").concat(t.id),t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(j.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.delete("".concat("/api/todos","/").concat(t.id));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){B="bearer ".concat(e)}},H=function(e){var t=e.user,n=e.setUser,c=Object(a.useState)([]),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Object(a.useState)({content:"",dueDate:Object(O.a)(new Date),error:!1}),d=Object(u.a)(l,2),p=d[0],m=d[1];Object(a.useEffect)((function(){t&&function(){var e=Object(j.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAll();case 2:n=e.sent,s(_(v(n.filter((function(e){return e.user.username===t.username})))));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);var v=function(e){return e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{dueDate:Object(E.a)(e.dueDate),createdDate:Object(E.a)(e.createdDate)})}))},T=function(e,t){return e.id!==t.id&&e.content===t.content&&Object(g.a)(e.dueDate,t.dueDate)},k=function(e){return i.some((function(t){return T(e,t)}))},C=function(e){return i.findIndex((function(t){return T(e,t)}))},_=function(e){var t=e.filter((function(e){return e.finished})).sort((function(e,t){return Object(x.a)(e.dueDate,t.dueDate)||Object(x.a)(e.createdDate,t.createdDate)})),n=e.filter((function(e){return!e.finished})).sort((function(e,t){return Object(x.a)(e.dueDate,t.dueDate)||Object(x.a)(e.createdDate,t.createdDate)}));return[].concat(Object(f.a)(t),Object(f.a)(n))},I=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.remove(t);case 3:F(),s((function(e){return e.filter((function(e){return e.id!==t.id}))})),s((function(e){var t=Object(f.a)(e),n=t.findIndex((function(e){return T(e,Object(b.a)(Object(b.a)({},p),{},{id:-1}))||t.some((function(t){return T(e,t)}))}));if(-1!==n){var a=t.findIndex((function(e){return T(e,t[n])}));t[n].duplicate=!0,-1===a?m((function(e){return Object(b.a)(Object(b.a)({},e),{},{error:!0})})):t[a].duplicate=!0}return t})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n(null),console.error(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(b.a)(Object(b.a)({},t),{},{finished:!1}),e.prev=1,e.next=4,G.create(a);case 4:r=e.sent,s((function(e){return _(v([].concat(Object(f.a)(e),[r])))})),L(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.response),n(null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.update(t);case 3:return a=e.sent,s((function(e){var t=e.map((function(e){return e.id===a.id?a:e}));return _(v(t))})),e.abrupt("return",Promise.resolve("success"));case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0.response),n(null),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){s((function(e){return e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{duplicate:!1})}))})),m((function(e){return Object(b.a)(Object(b.a)({},e),{},{error:!1})}))},A=function(){var e=Object(j.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,m((function(e){var a=Object(b.a)(Object(b.a)({},e),t);return n=Object(b.a)(Object(b.a)({},a),{},{id:-1}),k(n)&&(a=Object(b.a)(Object(b.a)({},a),{},{error:!0})),a}));case 3:k(n)&&(a=C(n),s((function(e){return e.map((function(e,t){return t===a?Object(b.a)(Object(b.a)({},e),{},{duplicate:!0}):e}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){m({content:"",dueDate:Object(O.a)(new Date),error:!1})};return r.a.createElement("div",{className:"Todo"},r.a.createElement(y.a,null,r.a.createElement(U,{todoList:i,handleTodoChange:function(e,t){F(),s((function(n){var a=Object(f.a)(n),r=a.findIndex((function(t){return t.id===e})),c=Object(b.a)(Object(b.a)({},a[r]),t);(a[r]=Object(b.a)({},c),k(c))&&(a[C(c)].duplicate=!0,a[r].duplicate=!0);return a}))},updateTodo:P,deleteTodo:I}),r.a.createElement(J,{addTodo:S,todoForm:p,handleTodoFormChange:A}),r.a.createElement(w.a,{container:!0,justify:"center"},r.a.createElement(D.a,{variant:"contained",color:"secondary",onClick:function(){window.localStorage.removeItem("loggedInTodoAppUser"),n(null)}},"Log Out"))))},Q={login:function(){var e=Object(j.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/api/login",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0.response));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){var t=e.setUser,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),p=d[0],m=d[1],f=Object(a.useState)(!0),b=Object(u.a)(f,2),v=b[0],O=b[1],E=Object(a.useState)(!0),g=Object(u.a)(E,2),x=g[0],y=g[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInTodoAppUser");if(e){var n=JSON.parse(e);t(n),G.setToken(n.token)}}),[t]);var T=function(){var e=Object(j.a)(h.a.mark((function e(n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),O(!0),y(!0),e.prev=3,e.next=6,Q.login({username:o,password:p});case 6:a=e.sent,window.localStorage.setItem("loggedInTodoAppUser",JSON.stringify(a)),G.setToken(a.token),s(""),m(""),t({username:o}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),"invalid username"===(r=e.t0.data.error)?O(!1):"invalid password"===r&&y(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:T},r.a.createElement(w.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:8},r.a.createElement(w.a,{container:!0,item:!0,direction:"column",justify:"center",alignItems:"center",spacing:1},r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(_.a,{error:!v,helperText:!v&&"Invalid Username",label:"Username",value:o,onChange:function(e){s(e.target.value)}})),r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(_.a,{error:!x,helperText:!x&&"Invalid Password",type:"password",label:"Password",value:p,onChange:function(e){m(e.target.value)}}))),r.a.createElement(w.a,{container:!0,item:!0,direction:"column",justify:"center",alignItems:"center",spacing:2},r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(D.a,{type:"submit",variant:"contained",color:"secondary"},"Login")),r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(i.b,{to:"/create-account",style:{textDecoration:"none"}},r.a.createElement(D.a,{variant:"text",color:"primary"},"Create Account"))))))},V={createAccount:function(){var e=Object(j.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/api/users",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0.response));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},X=function(e){e.setIsAuthenticated;var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),d=l[0],p=l[1],m=Object(a.useState)(null),f=Object(u.a)(m,2),b=f[0],v=f[1],O=function(){var e=Object(j.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,V.createAccount({username:c,password:d});case 4:n=e.sent,console.log("user",n,"created!"),o(""),p(""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),(a=e.t0.data.error)&&(a.includes("expected `username` to be unique")?v("Username taken"):a.includes("Path `username` is required")&&v("Username required")),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:O},r.a.createElement(w.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:3},r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(_.a,{error:Boolean(b),label:b||"Username",value:c,onChange:function(e){o(e.target.value)}})),r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(_.a,{type:"password",label:"Password",value:d,onChange:function(e){p(e.target.value)}})),r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(D.a,{type:"submit",variant:"contained",color:"secondary"},"Create Account")),r.a.createElement(w.a,{md:!0,item:!0},r.a.createElement(i.b,{to:"/login",style:{textDecoration:"none"}},r.a.createElement(D.a,{variant:"text",color:"primary"},"Login")))))},Y=Object(T.a)({root:{height:"calc(100vh - 16px)",display:"flex",flexDirection:"column",justifyContent:"center"}}),Z=function(e){var t=e.setUser,n=Y();return r.a.createElement(y.a,{maxWidth:"sm",classes:{root:n.root}},r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},r.a.createElement(R,{setUser:t})),r.a.createElement(s.b,{path:"/create-account"},r.a.createElement(X,null)))))},$=Object(l.a)({palette:{primary:{main:p.a[300]},secondary:{main:m.a[300]}}}),ee=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(d.a,{theme:$},r.a.createElement(i.a,null,r.a.createElement(s.a,{to:n?"/todos":"/login"}),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},r.a.createElement(Z,{setUser:c})),r.a.createElement(s.b,{path:"/todos"},r.a.createElement(H,{user:n,setUser:c})))))};o.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.ec7e8422.chunk.js.map