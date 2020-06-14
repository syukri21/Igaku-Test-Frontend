(this["webpackJsonpigaku-test-frontend"]=this["webpackJsonpigaku-test-frontend"]||[]).push([[8],{133:function(e,t,a){"use strict";var n=a(151),r=a(30),c=a(157),o=a.n(c),i=function(){function e(){Object(n.a)(this,e),this.apiUrl="http://ec2-18-191-129-34.us-east-2.compute.amazonaws.com:3030",this.token=void 0}return Object(r.a)(e,[{key:"getToken",value:function(){if(window){var e=localStorage.getItem("token");e&&(this.token=e)}return this.token}},{key:"setToken",value:function(e){window&&window.localStorage.setItem("token",e)}},{key:"fetch",value:function(e){var t={baseURL:this.apiUrl},a=localStorage.getItem("token");return a&&(t.headers={Authorization:"Bearer ".concat(a)}),o.a.create(t)(e)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();i.instance=void 0,t.a=i.getInstance()},291:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ke}));var n=a(0),r=a.n(n),c=a(271),o=a(285),i=a(287),l=a(288),s=a(273),d=a(272),u=a(283),m=a(284),h=a(274),p=a(124),f=a(246),g=a.n(f),b=a(247),v=a.n(b),E=a(277),k=a(281),S=a(280),O=a(276),w=a(278),C=a(279),y=a(244),R=a.n(y),j=a(243),T=a.n(j),x=a(294),I=a(282),N=a(43),D=a(19),G=a(136),U=a.n(G),A=a(137),L=a(46),W=a(133),z=Object(L.createProvider)({loading:!1,error:null,data:[]});function P(){return H.apply(this,arguments)}function H(){return(H=Object(A.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.getDispatch(),e.prev=1,t.getTodos("LOADING"),e.next=5,W.a.fetch({method:"GET",url:"/todos"});case 5:return a=e.sent,t.getTodos("SUCCESS",a.data),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.getTodos("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}z.addReducer("getTodos",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var B=z,F=Object(L.createProvider)({ids:[]});F.addReducer("handleIds",(function(e,t,a,n){return n}));var J=F,V=Object(L.createProvider)({loading:!1,error:null,data:{message:""}});function _(){return(_=Object(A.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=V.getDispatch(),e.prev=1,a.editTodo("LOADING"),e.next=5,W.a.fetch({method:"PATCH",url:"/todos",data:t});case 5:return n=e.sent,a.editTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.editTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}V.addReducer("editTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var q=a(36);function K(){var e=B.useGlobal(),t=Object(D.a)(e,1)[0],a=J.useGlobal(),n=Object(D.a)(a,2),r=n[0],c=n[1],o=Object(L.useState)(),i=Object(D.a)(o,2),l=i[0],s=i[1],d=Object(L.useState)(),u=Object(D.a)(d,2),m=u[0],h=u[1];function p(e){var t=new Set(r.ids);t.add(e);var a=Array.from(t);c({ids:a})}return{todosState:t,handleCheck:p,handleChangeCheck:function(e){return function(t){t.target.checked?p(e):function(e){var t=new Set(r.ids);t.delete(e);var a=Array.from(t);c({ids:a})}(e)}},editId:l,setEditId:s,handleChangeSwitch:function(e){h(Object(N.a)(Object(N.a)({},m),{},{status:e.target.checked}))},handleChangeTask:function(e){h(Object(N.a)(Object(N.a)({},m),{},{task:e.target.value}))},handleSubmitEdit:function(){l&&function(e){return _.apply(this,arguments)}({id:l,status:m.status,task:m.task}).then((function(){P().then((function(){Object(q.b)("SHOW",{message:"Success edit 1 item",severity:"success"}),s(null),h({})}))}))}}}var M=a(289),Q=Object(c.a)({table:{minWidth:650}});function X(){var e=Q(),t=K(),a=t.todosState,n=t.editId,c=t.handleChangeCheck,o=t.setEditId,i=t.handleSubmitEdit,l=t.handleChangeSwitch,d=t.handleChangeTask;return r.a.createElement(O.a,{component:"div"},r.a.createElement(E.a,{className:e.table,"aria-label":"simple table",size:"small"},r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(S.a,{size:"small",padding:"checkbox"}),r.a.createElement(S.a,null,"Task Name"),r.a.createElement(S.a,{align:"center",size:"small"},"Status"),r.a.createElement(S.a,{size:"small",padding:"checkbox"}))),r.a.createElement(k.a,null,a.data&&a.data.map((function(e){return r.a.createElement(C.a,{key:e.id},r.a.createElement(S.a,{padding:"checkbox",size:"small"},r.a.createElement(x.a,{color:"primary",onChange:c(e.id)})),r.a.createElement(S.a,{component:"th",scope:"row"},n===e.id?r.a.createElement(M.a,{defaultValue:e.task,name:"task-edit",id:"task-edit",fullWidth:!0,onChange:d}):e.task),r.a.createElement(S.a,{align:"center",size:"small"},n===e.id?r.a.createElement(I.a,{color:"primary",defaultChecked:e.status,name:"checkedB",onChange:l,inputProps:{"aria-label":"primary checkbox"}}):e.status?r.a.createElement(s.a,{color:"primary"},"active"):r.a.createElement(s.a,{color:"textPrimary"},"completed")),r.a.createElement(S.a,{padding:"checkbox",size:"small"},n===e.id?r.a.createElement(p.a,{color:"primary",onClick:i},r.a.createElement(T.a,null)):r.a.createElement(p.a,{color:"primary",onClick:function(){return o(e.id)}},r.a.createElement(R.a,null))))})))))}var Y=a(286),Z=a(298),$=a(299),ee=a(297),te=a(245),ae=a.n(te),ne=a(176),re=a(173),ce=Object(L.createProvider)();function oe(){return(oe=Object(A.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ce.getDispatch(),e.prev=1,a.createTodo("LOADING"),e.next=5,W.a.fetch({method:"POST",url:"/todos",data:t});case 5:return n=e.sent,a.createTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.createTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}ce.addReducer("createTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var ie={task:""},le=re.a().shape({task:re.c().required()});function se(){var e=Object(ne.a)({validationSchema:le,initialValues:ie,onSubmit:function(t){(function(e){return oe.apply(this,arguments)})(t).then((function(){P().then((function(){Object(q.b)("SHOW",{message:"Success add 1 item",severity:"success"}),e.resetForm({values:ie})}))}))}});return{formik:e}}var de=function(e){var t=se().formik;return n.createElement(Z.a,{fullWidth:!0,variant:"outlined"},n.createElement($.a,{htmlFor:"todo-input"},"What needs to be done?"),n.createElement(ee.a,{id:"task",name:"task",type:"text",onChange:t.handleChange,onKeyPress:function(e){13!==e.which&&13!==e.keyCode||t.handleSubmit()},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"},value:t.values.task,endAdornment:n.createElement(h.a,{onClick:function(e){e.preventDefault(),t.handleSubmit()},type:"button"},n.createElement(ae.a,null)),labelWidth:175}))},ue=a(99),me=Object(L.createProvider)({loading:!1,error:null,data:{message:""}});function he(){return(he=Object(A.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=me.getDispatch(),e.prev=1,a.deleteTodo("LOADING"),e.next=5,W.a.fetch({method:"DELETE",url:"/todos",data:t});case 5:return n=e.sent,a.deleteTodo("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),a.deleteTodo("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}me.addReducer("deleteTodo",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var pe=me,fe=Object(L.createProvider)({loading:!1,error:null,data:{id:0,firstName:"",lastName:"",email:"",password:"",created_at:new Date,updated_at:new Date}});function ge(){return(ge=Object(A.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fe.getDispatch(),e.prev=1,t.getUser("LOADING"),e.next=5,W.a.fetch({method:"GET",url:"/users/jwt"});case 5:return a=e.sent,t.getUser("SUCCESS",a.data),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.getUser("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}fe.addReducer("getUser",(function(e,t,a,n){switch(a){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var be=fe;function ve(){var e=J.useGlobal(),t=Object(D.a)(e,2),a=t[0],r=t[1],c=pe.useGlobal(),o=Object(D.a)(c,1)[0],i=be.useGlobal(),l=Object(D.a)(i,1)[0];return Object(n.useEffect)((function(){P().then((function(e){!function(){ge.apply(this,arguments)}()})).catch((function(){Object(q.b)("SHOW",{message:"Token Expired!",severity:"error"}),window.localStorage.clear(),window.location.reload()}))}),[]),{handleDelete:function(){var e;if(0===(null===(e=a.ids)||void 0===e?void 0:e.length))return Object(q.b)("SHOW",{message:"Choose one item!",severity:"warning"});(function(e){return he.apply(this,arguments)})({ids:a.ids}).then((function(){P().then((function(){var e;Object(q.b)("SHOW",{message:"".concat(null===(e=a.ids)||void 0===e?void 0:e.length," items deleted"),severity:"success"}),r({ids:[]})}))}))},todoDeleteState:o,deleteIdsState:a,user:l}}var Ee=Object(c.a)((function(e){return{root:{minWidth:275,padding:e.spacing(1)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},menuButton:{marginRight:e.spacing(2)},appbar:{flexGrow:1},appbarTitle:{flexGrow:1},todoWrap:{position:"relative"},background:{background:e.palette.primary.main,width:"100%",height:e.spacing(14),position:"absolute",top:0,zIndex:0},containerTodo:{position:"relative",zIndex:1,paddingTop:e.spacing(2)},cardHeader:{display:"flex",alignItems:"center"},fieldTodo:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},deleteWrapper:{display:"flex",justifyContent:"flex-end"}}})),ke=function(){var e,t=Ee(),a=Object(ue.f)(),r=ve(),c=r.handleDelete,f=r.todoDeleteState,b=r.deleteIdsState,E=r.user;return n.createElement(n.Fragment,null,n.createElement("div",{className:t.appbar},n.createElement(u.a,{position:"static"},n.createElement(m.a,null,n.createElement(p.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},n.createElement(g.a,null)),n.createElement(s.a,{variant:"h6",className:t.appbarTitle},E.data.firstName.charAt(0).toUpperCase()+E.data.firstName.substr(1)," Todo's"),n.createElement(h.a,{color:"inherit",onClick:function(e){window.localStorage.removeItem("token"),a.push("/login")}},"Log out")))),n.createElement("div",{className:t.todoWrap},n.createElement(d.a,{maxWidth:"md",className:t.containerTodo},n.createElement(o.a,{className:t.root},n.createElement(Y.a,{title:"To do List   ",className:t.cardHeader}),n.createElement(i.a,{className:t.fieldTodo},n.createElement(de,null)),n.createElement(l.a,null,n.createElement(B,null,n.createElement(X,null))),n.createElement(i.a,{className:t.deleteWrapper},n.createElement(h.a,{variant:"contained",color:"secondary",onClick:c,disabled:!!(f.loading||b.ids&&0===(null===(e=b.ids)||void 0===e?void 0:e.length)),startIcon:f.loading?null:n.createElement(v.a,null)},f.loading?"Loading...":"Delete")))),n.createElement("div",{className:t.background})))}}}]);
//# sourceMappingURL=8.e6c96bec.chunk.js.map