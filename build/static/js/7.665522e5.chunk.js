(this["webpackJsonpigaku-test-frontend"]=this["webpackJsonpigaku-test-frontend"]||[]).push([[7],{134:function(e,a,r){"use strict";var t=r(151),n=r(30),o=r(157),i=r.n(o),s=function(){function e(){Object(t.a)(this,e),this.apiUrl="http://ec2-18-191-129-34.us-east-2.compute.amazonaws.com:3030",this.token=void 0}return Object(n.a)(e,[{key:"getToken",value:function(){if(window){var e=localStorage.getItem("token");e&&(this.token=e)}return this.token}},{key:"setToken",value:function(e){window&&window.localStorage.setItem("token",e)}},{key:"fetch",value:function(e){var a={baseURL:this.apiUrl},r=localStorage.getItem("token");return r&&(a.headers={Authorization:"Bearer ".concat(r)}),i.a.create(a)(e)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s.instance=void 0,a.a=s.getInstance()},242:function(e,a,r){"use strict";var t=r(138);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(r(0)),o=(0,t(r(139)).default)(n.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");a.default=o},293:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return z}));var t=r(0),n=r.n(t),o=r(295),i=r(274),s=r(289),l=r(275),c=r(290),m=r(242),u=r.n(m),d=r(273),p=r(271),f=r(272),h=r(65),g=r(19),v=r(136),w=r.n(v),b=r(137),N=r(46),S=r(134),y=Object(N.createProvider)({loading:!1,error:null});function C(){return(C=Object(b.a)(w.a.mark((function e(a){var r,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.getDispatch(),e.prev=1,r.register("LOADING"),e.next=5,S.a.fetch({method:"POST",url:"/auth/register",data:a});case 5:return t=e.sent,r.register("SUCCESS",t.data),e.abrupt("return",t.data);case 10:throw e.prev=10,e.t0=e.catch(1),r.register("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}y.addReducer("register",(function(e,a,r,t){switch(r){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=t;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=t}return e}));var E=y,k=r(176),x=r(173),P=r(99),O=r(36),q={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},T=x.a().shape({firstName:x.c().min(3).required("required *"),lastName:x.c().min(3).required("required *"),email:x.c().email().required("required *"),password:x.c().min(6).required("required *"),confirmPassword:x.c().oneOf([x.b("password")],"Passwords must match").required("required *")});function j(){var e=Object(P.f)(),a=E.useGlobal(),r=Object(g.a)(a,1)[0];return{formik:Object(k.a)({validationSchema:T,initialValues:q,onSubmit:function(a){(function(e){return C.apply(this,arguments)})(a).then((function(){return e.push("/login")})).catch((function(e){Object(O.b)("SHOW",{message:"Something Went Wrong!",severity:"error"})}))}}),registerState:r}}var W=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},textName:{display:"flex"},spacer:{width:e.spacing(4)}}})),z=function(e){var a=W(),r=j(),t=r.formik,m=r.registerState;return n.a.createElement(f.a,{component:"main",maxWidth:"xs"},n.a.createElement("div",{className:a.paper},n.a.createElement(o.a,{className:a.avatar},n.a.createElement(u.a,null)),n.a.createElement(d.a,{component:"h1",variant:"h5"},"Sign up"),n.a.createElement("form",{className:a.form,noValidate:!0,autoComplete:"none",onSubmit:t.handleSubmit},n.a.createElement("div",{className:a.textName},n.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",onChange:t.handleChange,autoComplete:"none",autoFocus:!0,FormHelperTextProps:{style:{fontSize:10}},helperText:t.touched.firstName&&t.errors.firstName,error:!!t.errors.firstName&&t.touched.firstName}),n.a.createElement("div",{className:a.spacer}),n.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",onChange:t.handleChange,name:"lastName",autoComplete:"none",autoFocus:!0,FormHelperTextProps:{style:{fontSize:10}},helperText:t.touched.lastName&&t.errors.lastName,error:!!t.errors.lastName&&t.touched.lastName})),n.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",onChange:t.handleChange,label:"Email Address",name:"email",autoComplete:"none",FormHelperTextProps:{style:{fontSize:10}},autoFocus:!0,helperText:t.touched.email&&t.errors.email,error:!!t.errors.email&&t.touched.email}),n.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",onChange:t.handleChange,type:"password",id:"password",FormHelperTextProps:{style:{fontSize:10}},autoComplete:"none",helperText:t.touched.password&&t.errors.password,error:!!t.errors.password&&t.touched.password}),n.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",onChange:t.handleChange,id:"confirmPassword",autoComplete:"none",FormHelperTextProps:{style:{fontSize:10}},helperText:t.touched.confirmPassword&&t.errors.confirmPassword,error:!!t.errors.confirmPassword&&t.touched.confirmPassword}),n.a.createElement(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:m.loading},m.loading?"Loading..":"Sign Up"),n.a.createElement(c.a,{component:"div",display:"flex",justifyContent:"flex-end"},n.a.createElement(h.a,{to:"/login"},n.a.createElement(l.a,{href:"#",variant:"body2"},"Sign In"))))))}}}]);
//# sourceMappingURL=7.665522e5.chunk.js.map