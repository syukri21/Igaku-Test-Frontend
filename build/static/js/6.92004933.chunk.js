(this["webpackJsonpigaku-test-frontend"]=this["webpackJsonpigaku-test-frontend"]||[]).push([[6],{134:function(e,a,t){"use strict";var n=t(151),r=t(30),i=t(157),o=t.n(i),c=function(){function e(){Object(n.a)(this,e),this.apiUrl="http://ec2-18-191-129-34.us-east-2.compute.amazonaws.com:3030",this.token=void 0}return Object(r.a)(e,[{key:"getToken",value:function(){if(window){var e=localStorage.getItem("token");e&&(this.token=e)}return this.token}},{key:"setToken",value:function(e){window&&window.localStorage.setItem("token",e)}},{key:"fetch",value:function(e){var a={baseURL:this.apiUrl},t=localStorage.getItem("token");return t&&(a.headers={Authorization:"Bearer ".concat(t)}),o.a.create(a)(e)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();c.instance=void 0,a.a=c.getInstance()},240:function(e,a,t){"use strict";var n=t(138);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=(0,n(t(139)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");a.default=i},292:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return q}));var n=t(0),r=t.n(n),i=t(295),o=t(274),c=t(289),l=t(275),s=t(65),u=t(290),d=t(240),m=t.n(d),p=t(273),h=t(271),f=t(272),g=t(19),v=t(136),b=t.n(v),k=t(137),w=t(46),S=t(134),y=Object(w.createProvider)({loading:!1,error:null,data:{accessToken:"",email:"",expiresIn:""}});function E(){return(E=Object(k.a)(b.a.mark((function e(a){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.getDispatch(),e.prev=1,t.login("LOADING"),e.next=5,S.a.fetch({method:"POST",url:"/auth/login",data:a});case 5:return n=e.sent,t.login("SUCCESS",n.data),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.login("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}y.addReducer("login",(function(e,a,t,n){switch(t){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=n;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=n}return e}));var O=y,x=t(173),C=t(176),j=t(36),T=t(99),I=x.a().shape({email:x.c().email().required("required*"),password:x.c().min(6,"Minimal 6 character.").required("required*")}),z={email:"",password:""};function R(){var e=O.useGlobal(),a=Object(g.a)(e,1)[0],t=Object(T.f)();return{loginState:a,formik:Object(C.a)({validationSchema:I,initialValues:z,onSubmit:function(e){(function(e){return E.apply(this,arguments)})(e).then((function(e){t.push("/todo")})).catch((function(e){Object(j.b)("SHOW",{message:"Email or Password wrong!",severity:"error"})}))}}),history:t}}var P=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),q=function(){var e,a=P(),t=R(),n=t.loginState,d=t.formik;return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement(i.a,{className:a.avatar},r.a.createElement(m.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:d.handleSubmit},r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:d.handleChange,error:!!d.errors.email&&d.touched.email,helperText:d.touched.email&&d.errors.email,FormHelperTextProps:{style:{fontSize:10}}}),r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:d.handleChange,helperText:d.touched.email&&d.errors.email,error:d.touched.email&&!!d.errors.email,FormHelperTextProps:{style:{fontSize:10}}}),r.a.createElement(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:n.loading},(null===(e=n.data)||void 0===e?void 0:e.accessToken)||n.loading?"Loading...":"Sign In"),r.a.createElement(u.a,{component:"div",display:"flex",justifyContent:"flex-end"},r.a.createElement(s.a,{to:"/register"},r.a.createElement(l.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))))))}}}]);
//# sourceMappingURL=6.92004933.chunk.js.map