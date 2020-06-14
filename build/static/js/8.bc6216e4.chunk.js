(this["webpackJsonpigaku-test-frontend"]=this["webpackJsonpigaku-test-frontend"]||[]).push([[8],{291:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ke}));var n=a(0),r=a.n(n),c=a(271),o=a(285),l=a(287),i=a(288),d=a(273),s=a(272),u=a(283),m=a(284),p=a(274),h=a(153),g=a(246),f=a.n(g),b=a(247),E=a.n(b),v=a(277),k=a(281),O=a(280),S=a(276),C=a(278),w=a(279),R=a(244),j=a.n(R),y=a(243),T=a.n(y),x=a(294),N=a(282),D=a(44),I=a(20),G=a(163),W=a.n(G),A=a(164),L=a(47),U=a(48),P=Object(L.createProvider)({loading:!1,error:null,data:[]});function z(){return H.apply(this,arguments)}function H(){return(H=Object(A.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.getDispatch(),e.prev=1,t.getTodos("LOADING"),e.next=5,U.a.fetch({method:"GET",url:"/todos"});case 5:return a=e.sent,t.getTodos("SUCCESS",a.data),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.getTodos("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}P.addReducer("getTodos",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var B=P,F=Object(L.createProvider)({ids:[]});F.addReducer("handleIds",(function(e,t,a,n){return n}));var J=F,V=Object(L.createProvider)({loading:!1,error:null,data:{message:""}});function _(){return(_=Object(A.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=V.getDispatch(),e.prev=1,a.editTodo("LOADING"),e.next=5,U.a.fetch({method:"PATCH",url:"/todos",data:t});case 5:return n=e.sent,a.editTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.editTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}V.addReducer("editTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var q=a(37);function K(){var e=B.useGlobal(),t=Object(I.a)(e,1)[0],a=J.useGlobal(),n=Object(I.a)(a,2),r=n[0],c=n[1],o=Object(L.useState)(),l=Object(I.a)(o,2),i=l[0],d=l[1],s=Object(L.useState)(),u=Object(I.a)(s,2),m=u[0],p=u[1];function h(e){var t=new Set(r.ids);t.add(e);var a=Array.from(t);c({ids:a})}return{todosState:t,handleCheck:h,handleChangeCheck:function(e){return function(t){t.target.checked?h(e):function(e){var t=new Set(r.ids);t.delete(e);var a=Array.from(t);c({ids:a})}(e)}},editId:i,setEditId:d,handleChangeSwitch:function(e){p(Object(D.a)(Object(D.a)({},m),{},{status:e.target.checked}))},handleChangeTask:function(e){p(Object(D.a)(Object(D.a)({},m),{},{task:e.target.value}))},handleSubmitEdit:function(){i&&function(e){return _.apply(this,arguments)}({id:i,status:m.status,task:m.task}).then((function(){z().then((function(){Object(q.b)("SHOW",{message:"Success edit 1 item",severity:"success"}),d(null),p({})}))}))}}}var M=a(289),Q=Object(c.a)({table:{minWidth:650}});function X(){var e=Q(),t=K(),a=t.todosState,n=t.editId,c=t.handleChangeCheck,o=t.setEditId,l=t.handleSubmitEdit,i=t.handleChangeSwitch,s=t.handleChangeTask;return r.a.createElement(S.a,{component:"div"},r.a.createElement(v.a,{className:e.table,"aria-label":"simple table",size:"small"},r.a.createElement(C.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{size:"small",padding:"checkbox"}),r.a.createElement(O.a,null,"Task Name"),r.a.createElement(O.a,{align:"center",size:"small"},"Status"),r.a.createElement(O.a,{size:"small",padding:"checkbox"}))),r.a.createElement(k.a,null,a.data&&a.data.map((function(e){return r.a.createElement(w.a,{key:e.id},r.a.createElement(O.a,{padding:"checkbox",size:"small"},r.a.createElement(x.a,{color:"primary",onChange:c(e.id)})),r.a.createElement(O.a,{component:"th",scope:"row"},n===e.id?r.a.createElement(M.a,{defaultValue:e.task,name:"task-edit",id:"task-edit",fullWidth:!0,onChange:s}):e.task),r.a.createElement(O.a,{align:"center",size:"small"},n===e.id?r.a.createElement(N.a,{color:"primary",defaultChecked:e.status,name:"checkedB",onChange:i,inputProps:{"aria-label":"primary checkbox"}}):e.status?r.a.createElement(d.a,{color:"primary"},"active"):r.a.createElement(d.a,{color:"textPrimary"},"completed")),r.a.createElement(O.a,{padding:"checkbox",size:"small"},n===e.id?r.a.createElement(h.a,{color:"primary",onClick:l},r.a.createElement(T.a,null)):r.a.createElement(h.a,{color:"primary",onClick:function(){return o(e.id)}},r.a.createElement(j.a,null))))})))))}var Y=a(286),Z=a(298),$=a(299),ee=a(297),te=a(245),ae=a.n(te),ne=a(201),re=a(198),ce=Object(L.createProvider)();function oe(){return(oe=Object(A.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ce.getDispatch(),e.prev=1,a.createTodo("LOADING"),e.next=5,U.a.fetch({method:"POST",url:"/todos",data:t});case 5:return n=e.sent,a.createTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.createTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}ce.addReducer("createTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var le={task:""},ie=re.a().shape({task:re.c().min(6).required()});function de(){var e=Object(ne.a)({validationSchema:ie,initialValues:le,onSubmit:function(t){(function(e){return oe.apply(this,arguments)})(t).then((function(){z().then((function(){Object(q.b)("SHOW",{message:"Success add 1 item",severity:"success"}),e.resetForm({values:le})}))}))}});return{formik:e}}var se=function(e){var t=de().formik;return n.createElement(Z.a,{fullWidth:!0,variant:"outlined"},n.createElement($.a,{htmlFor:"todo-input"},"What needs to be done?"),n.createElement(ee.a,{id:"task",name:"task",type:"text",onChange:t.handleChange,onKeyPress:function(e){13!==e.which&&13!==e.keyCode||t.handleSubmit()},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"},value:t.values.task,endAdornment:n.createElement(p.a,{onClick:function(e){e.preventDefault(),t.handleSubmit()},type:"button"},n.createElement(ae.a,null)),labelWidth:175}))},ue=a(128),me=Object(L.createProvider)({loading:!1,error:null,data:{message:""}});function pe(){return(pe=Object(A.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=me.getDispatch(),e.prev=1,a.deleteTodo("LOADING"),e.next=5,U.a.fetch({method:"DELETE",url:"/todos",data:t});case 5:return n=e.sent,a.deleteTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.deleteTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}me.addReducer("deleteTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var he=me,ge=Object(L.createProvider)({loading:!1,error:null,data:{id:0,firstName:"",lastName:"",email:"",password:"",created_at:new Date,updated_at:new Date}});function fe(){return(fe=Object(A.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ge.getDispatch(),e.prev=1,t.getUser("LOADING"),e.next=5,U.a.fetch({method:"GET",url:"/users/jwt"});case 5:return a=e.sent,t.getUser("SUCCESS",a.data),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.getUser("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}ge.addReducer("getUser",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var be=ge;function Ee(){var e=J.useGlobal(),t=Object(I.a)(e,2),a=t[0],r=t[1],c=he.useGlobal(),o=Object(I.a)(c,1)[0],l=be.useGlobal(),i=Object(I.a)(l,1)[0];return Object(n.useEffect)((function(){z().then((function(e){!function(){fe.apply(this,arguments)}()})).catch((function(){Object(q.b)("SHOW",{message:"Token Expired!",severity:"error"}),window.localStorage.clear(),window.location.reload()}))}),[]),{handleDelete:function(){var e;if(0===(null===(e=a.ids)||void 0===e?void 0:e.length))return Object(q.b)("SHOW",{message:"Choose one item!",severity:"warning"});(function(e){return pe.apply(this,arguments)})({ids:a.ids}).then((function(){z().then((function(){var e;Object(q.b)("SHOW",{message:"".concat(null===(e=a.ids)||void 0===e?void 0:e.length," items deleted"),severity:"success"}),r({ids:[]})}))}))},todoDeleteState:o,deleteIdsState:a,user:i}}var ve=Object(c.a)((function(e){return{root:{minWidth:275,padding:e.spacing(1)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},menuButton:{marginRight:e.spacing(2)},appbar:{flexGrow:1},appbarTitle:{flexGrow:1},todoWrap:{position:"relative"},background:{background:e.palette.primary.main,width:"100%",height:e.spacing(14),position:"absolute",top:0,zIndex:0},containerTodo:{position:"relative",zIndex:1,paddingTop:e.spacing(2)},cardHeader:{display:"flex",alignItems:"center"},fieldTodo:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},deleteWrapper:{display:"flex",justifyContent:"flex-end"}}})),ke=function(){var e,t=ve(),a=Object(ue.g)(),r=Ee(),c=r.handleDelete,g=r.todoDeleteState,b=r.deleteIdsState,v=r.user;return n.createElement(n.Fragment,null,n.createElement("div",{className:t.appbar},n.createElement(u.a,{position:"static"},n.createElement(m.a,null,n.createElement(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},n.createElement(f.a,null)),n.createElement(d.a,{variant:"h6",className:t.appbarTitle},v.data.firstName.charAt(0).toUpperCase()+v.data.firstName.substr(1)," Todo's"),n.createElement(p.a,{color:"inherit",onClick:function(e){window.localStorage.removeItem("token"),a.push("/login")}},"Log out")))),n.createElement("div",{className:t.todoWrap},n.createElement(s.a,{maxWidth:"md",className:t.containerTodo},n.createElement(o.a,{className:t.root},n.createElement(Y.a,{title:"To do List   ",className:t.cardHeader}),n.createElement(l.a,{className:t.fieldTodo},n.createElement(se,null)),n.createElement(i.a,null,n.createElement(B,null,n.createElement(X,null))),n.createElement(l.a,{className:t.deleteWrapper},n.createElement(p.a,{variant:"contained",color:"secondary",onClick:c,disabled:!!(g.loading||b.ids&&0===(null===(e=b.ids)||void 0===e?void 0:e.length)),startIcon:g.loading?null:n.createElement(E.a,null)},g.loading?"Loading...":"Delete")))),n.createElement("div",{className:t.background})))}}}]);
//# sourceMappingURL=8.bc6216e4.chunk.js.map