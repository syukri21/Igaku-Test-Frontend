(this["webpackJsonpigaku-test-frontend"]=this["webpackJsonpigaku-test-frontend"]||[]).push([[6],{133:function(e,r,t){"use strict";var a=t(151),o=t(34),n=t(157),i=t.n(n),s=function(){function e(){Object(a.a)(this,e),this.apiUrl="http://ec2-18-191-129-34.us-east-2.compute.amazonaws.com:3030",this.token=void 0}return Object(o.a)(e,[{key:"getToken",value:function(){if(window){var e=localStorage.getItem("token");e&&(this.token=e)}return this.token}},{key:"setToken",value:function(e){window&&window.localStorage.setItem("token",e)}},{key:"fetch",value:function(e){var r={baseURL:this.apiUrl},t=localStorage.getItem("token");return t&&(r.headers={Authorization:"Bearer ".concat(t)}),i.a.create(r)(e)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s.instance=void 0,r.a=s.getInstance()},242:function(e,r,t){"use strict";var a=t(1),o=t(2),n=t(0),i=(t(3),t(6)),s=t(16),c=t(7),l=t(52),p=t(17),u=t(276),m=n.forwardRef((function(e,r){var t=e.classes,c=e.className,m=e.color,d=void 0===m?"primary":m,f=e.component,h=void 0===f?"a":f,g=e.onBlur,b=e.onFocus,v=e.TypographyClasses,y=e.underline,w=void 0===y?"hover":y,O=e.variant,j=void 0===O?"inherit":O,x=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=Object(l.a)(),N=S.isFocusVisible,P=S.onBlurVisible,C=S.ref,k=n.useState(!1),E=k[0],T=k[1],z=Object(p.a)(r,C);return n.createElement(u.a,Object(a.a)({className:Object(i.a)(t.root,t["underline".concat(Object(s.a)(w))],c,E&&t.focusVisible,"button"===h&&t.button),classes:v,color:d,component:h,onBlur:function(e){E&&(P(),T(!1)),g&&g(e)},onFocus:function(e){N(e)&&T(!0),b&&b(e)},ref:z,variant:j},x))}));r.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},243:function(e,r,t){"use strict";var a=t(138);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t(0)),n=(0,a(t(139)).default)(o.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");r.default=n},249:function(e,r,t){"use strict";var a=t(22),o=t(1),n=(t(3),t(32));var i=function(e){var r=function(r){var t=e(r);return r.css?Object(o.a)(Object(o.a)({},Object(n.a)(t,e(Object(o.a)({theme:r.theme},r.css)))),function(e,r){var t={};return Object.keys(e).forEach((function(a){-1===r.indexOf(a)&&(t[a]=e[a])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(a.a)(e.filterProps)),r};var s=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=function(e){return r.reduce((function(r,t){var a=t(e);return a?Object(n.a)(r,a):r}),{})};return a.propTypes={},a.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),a},c=t(8),l=t(51);function p(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var u=function(e){var r=e.prop,t=e.cssProperty,a=void 0===t?e.prop:t,o=e.themeKey,n=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=p(e.theme,o)||{};return Object(l.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=p(i,e)||e,n&&(r=n(r))),!1===a?r:Object(c.a)({},a,r)}))};return i.propTypes={},i.filterProps=[r],i};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var d=s(u({prop:"border",themeKey:"borders",transform:m}),u({prop:"borderTop",themeKey:"borders",transform:m}),u({prop:"borderRight",themeKey:"borders",transform:m}),u({prop:"borderBottom",themeKey:"borders",transform:m}),u({prop:"borderLeft",themeKey:"borders",transform:m}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),f=s(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),h=s(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),g=s(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),b=s(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),v=s(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=u({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var O=u({prop:"width",transform:w}),j=u({prop:"maxWidth",transform:w}),x=u({prop:"minWidth",transform:w}),S=u({prop:"height",transform:w}),N=u({prop:"maxHeight",transform:w}),P=u({prop:"minHeight",transform:w}),C=(u({prop:"size",cssProperty:"width",transform:w}),u({prop:"size",cssProperty:"height",transform:w}),s(O,j,x,S,N,P,u({prop:"boxSizing"}))),k=t(130),E=s(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),T=t(2),z=t(0),R=t.n(z),F=t(6),A=t(33),q=t.n(A),I=t(126);function K(e,r){var t={};return Object.keys(e).forEach((function(a){-1===r.indexOf(a)&&(t[a]=e[a])})),t}var W=t(35),H=function(e){var r=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.name,n=Object(T.a)(t,["name"]);var i,s=a,c="function"===typeof r?function(e){return{root:function(t){return r(Object(o.a)({theme:e},t))}}}:{root:r},l=Object(I.a)(c,Object(o.a)({Component:e,name:a||e.displayName,classNamePrefix:s},n));r.filterProps&&(i=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var p=R.a.forwardRef((function(r,t){var a=r.children,n=r.className,s=r.clone,c=r.component,p=Object(T.a)(r,["children","className","clone","component"]),u=l(r),m=Object(F.a)(u.root,n),d=p;if(i&&(d=K(d,i)),s)return R.a.cloneElement(a,Object(o.a)({className:Object(F.a)(a.props.className,m)},d));if("function"===typeof a)return a(Object(o.a)({className:m},d));var f=c||e;return R.a.createElement(f,Object(o.a)({ref:t,className:m},d),a)}));return q()(p,e),p}}(e);return function(e,t){return r(e,Object(o.a)({defaultTheme:W.a},t))}},D=i(s(d,f,h,g,b,v,y,C,k.b,E)),B=H("div")(D,{name:"MuiBox"});r.a=B},250:function(e,r,t){"use strict";var a=t(1),o=t(2),n=t(0),i=(t(3),t(6)),s=t(7),c=t(100),l=Object(c.a)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=n.forwardRef((function(e,r){var t=e.alt,s=e.children,c=e.classes,p=e.className,u=e.component,m=void 0===u?"div":u,d=e.imgProps,f=e.sizes,h=e.src,g=e.srcSet,b=e.variant,v=void 0===b?"circle":b,y=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),w=null,O=function(e){var r=e.src,t=e.srcSet,a=n.useState(!1),o=a[0],i=a[1];return n.useEffect((function(){if(r||t){i(!1);var e=!0,a=new Image;return a.src=r,a.srcSet=t,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[r,t]),o}({src:h,srcSet:g}),j=h||g,x=j&&"error"!==O;return w=x?n.createElement("img",Object(a.a)({alt:t,src:h,srcSet:g,sizes:f,className:c.img},d)):null!=s?s:j&&t?t[0]:n.createElement(l,{className:c.fallback}),n.createElement(m,Object(a.a)({className:Object(i.a)(c.root,c.system,c[v],p,!x&&c.colorDefault),ref:r},y),w)}));r.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(p)},294:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return F}));var a=t(0),o=t.n(a),n=t(250),i=t(277),s=t(291),c=t(242),l=t(249),p=t(243),u=t.n(p),m=t(276),d=t(274),f=t(275),h=t(31),g=t(20),b=t(136),v=t.n(b),y=t(137),w=t(48),O=t(133),j=Object(w.createProvider)({loading:!1,error:null});function x(){return(x=Object(y.a)(v.a.mark((function e(r){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getDispatch(),e.prev=1,t.register("LOADING"),e.next=5,O.a.fetch({method:"POST",url:"/auth/register",data:r});case 5:return a=e.sent,t.register("SUCCESS",a.data),e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(1),t.register("ERROR"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}j.addReducer("register",(function(e,r,t,a){switch(t){case"LOADING":e.loading=!0;break;case"ERROR":e.loading=!1,e.error=a;break;case"SUCCESS":e.loading=!1,e.error=null,e.data=a}return e}));var S=j,N=t(176),P=t(173),C=t(4),k=t(38),E={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},T=P.a().shape({firstName:P.c().min(3).required("required *"),lastName:P.c().min(3).required("required *"),email:P.c().email().required("required *"),password:P.c().min(6).required("required *"),confirmPassword:P.c().oneOf([P.b("password")],"Passwords must match").required("required *")});function z(){var e=Object(C.f)(),r=S.useGlobal(),t=Object(g.a)(r,1)[0];return{formik:Object(N.a)({validationSchema:T,initialValues:E,onSubmit:function(r){(function(e){return x.apply(this,arguments)})(r).then((function(){return e.push("/login")})).catch((function(e){Object(k.b)("SHOW",{message:"Something Went Wrong!",severity:"error"})}))}}),registerState:t}}var R=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},textName:{display:"flex"},spacer:{width:e.spacing(4)}}})),F=function(e){var r=R(),t=z(),a=t.formik,p=t.registerState;return o.a.createElement(f.a,{component:"main",maxWidth:"xs"},o.a.createElement("div",{className:r.paper},o.a.createElement(n.a,{className:r.avatar},o.a.createElement(u.a,null)),o.a.createElement(m.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:r.form,noValidate:!0,autoComplete:"none",onSubmit:a.handleSubmit},o.a.createElement("div",{className:r.textName},o.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",onChange:a.handleChange,autoComplete:"none",autoFocus:!0,FormHelperTextProps:{style:{fontSize:10}},helperText:a.touched.firstName&&a.errors.firstName,error:!!a.errors.firstName&&a.touched.firstName}),o.a.createElement("div",{className:r.spacer}),o.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",onChange:a.handleChange,name:"lastName",autoComplete:"none",autoFocus:!0,FormHelperTextProps:{style:{fontSize:10}},helperText:a.touched.lastName&&a.errors.lastName,error:!!a.errors.lastName&&a.touched.lastName})),o.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",onChange:a.handleChange,label:"Email Address",name:"email",autoComplete:"none",FormHelperTextProps:{style:{fontSize:10}},autoFocus:!0,helperText:a.touched.email&&a.errors.email,error:!!a.errors.email&&a.touched.email}),o.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",onChange:a.handleChange,type:"password",id:"password",FormHelperTextProps:{style:{fontSize:10}},autoComplete:"none",helperText:a.touched.password&&a.errors.password,error:!!a.errors.password&&a.touched.password}),o.a.createElement(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",onChange:a.handleChange,id:"confirmPassword",autoComplete:"none",FormHelperTextProps:{style:{fontSize:10}},helperText:a.touched.confirmPassword&&a.errors.confirmPassword,error:!!a.errors.confirmPassword&&a.touched.confirmPassword}),o.a.createElement(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit,disabled:p.loading},p.loading?"Loading..":"Sign Up"),o.a.createElement(l.a,{component:"div",display:"flex",justifyContent:"flex-end"},o.a.createElement(h.b,{to:"/login"},o.a.createElement(c.a,{href:"#",variant:"body2"},"Sign In"))))))}}}]);
//# sourceMappingURL=6.79a85e2a.chunk.js.map