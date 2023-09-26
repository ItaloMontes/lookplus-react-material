"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[8885],{22903:function(e,r,i){var n=i(19860),s=i(49709),l=i(38743),a=i(90891),t=i(89535),o=i(46417);r.Z=function(e){var r=e.title,i=e.link,c=e.icon,d=(0,n.Z)();return(0,o.jsx)(s.Z,{title:r||"Reference",placement:"left",children:(0,o.jsxs)(l.Z,{disableRipple:!0,children:[!c&&(0,o.jsx)(t.Z,{component:a.Z,href:i,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0",children:(0,o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&(0,o.jsx)(t.Z,{component:a.Z,href:i,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:c})]})})}},89535:function(e,r,i){var n=i(1413),s=i(45987),l=i(19860),a=i(63585),t=i(46417),o=["color","outline","size","sx"];r.Z=function(e){var r=e.color,i=e.outline,c=e.size,d=e.sx,u=(0,s.Z)(e,o),h=(0,l.Z)(),m=r&&!i&&{color:h.palette.background.paper,bgcolor:"".concat(r,".main")},x=i&&{color:r?"".concat(r,".main"):"primary.main",bgcolor:h.palette.background.paper,border:"2px solid",borderColor:r?"".concat(r,".main"):"primary.main"},p={};switch(c){case"badge":p={width:h.spacing(3.5),height:h.spacing(3.5)};break;case"xs":p={width:h.spacing(4.25),height:h.spacing(4.25)};break;case"sm":p={width:h.spacing(5),height:h.spacing(5)};break;case"lg":p={width:h.spacing(9),height:h.spacing(9)};break;case"xl":p={width:h.spacing(10.25),height:h.spacing(10.25)};break;case"md":p={width:h.spacing(7.5),height:h.spacing(7.5)};break;default:p={}}return(0,t.jsx)(a.Z,(0,n.Z)({sx:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},m),x),p),d)},u))}},68885:function(e,r,i){i.r(r),i.d(r,{default:function(){return Y}});var n=i(9019),s=i(77863),l=i(24631),a=i(35898),t=i(24193),o=i(33497),c=i(66182),d=i(22903),u=i(5866),h=i(12401),m=i(7410),x=i(3463),p=i(48268),Z=i(46417),j=x.Ry({email:x.Z_().email("Enter a valid email").required("Email is required"),password:x.Z_().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),g=function(){var e=(0,s.I0)(),r=(0,m.TA)({initialValues:{email:"",password:""},validationSchema:j,onSubmit:function(){e((0,u.ss)({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}});return(0,Z.jsx)(o.Z,{title:"On Submit",secondary:(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(p.Z,{fontSize:"small"}),link:"https://formik.org/docs/examples/with-material-ui"}),children:(0,Z.jsx)("form",{onSubmit:r.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:h.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{fullWidth:!0,id:"email",name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Verify & Submit"})})})})]})})})},f=x.Ry({emailInstant:x.Z_().email("Enter a valid email").required("Email is required"),passwordInstant:x.Z_().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),b=function(){var e=(0,s.I0)(),r=(0,m.TA)({initialValues:{emailInstant:"",passwordInstant:""},validationSchema:f,onSubmit:function(){e((0,u.ss)({open:!0,message:"On Leave - Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}});return(0,Z.jsx)(o.Z,{title:"On Leave",children:(0,Z.jsx)("form",{onSubmit:r.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:h.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{fullWidth:!0,id:"emailInstant",name:"emailInstant",label:"Email",value:r.values.emailInstant,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.emailInstant&&Boolean(r.errors.emailInstant),helperText:r.touched.emailInstant&&r.errors.emailInstant})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{fullWidth:!0,id:"passwordInstant",name:"passwordInstant",label:"Password",type:"password",value:r.values.passwordInstant,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.passwordInstant&&Boolean(r.errors.passwordInstant),helperText:r.touched.passwordInstant&&r.errors.passwordInstant})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Submit"})})})})]})})})},v=i(1550),y=i(54299),w=i(83929),S=i(74268),k=i(15480),P=x.Ry({color:x.Z_().required("Color selection is required")}),C=function(){var e=(0,s.I0)(),r=(0,m.TA)({initialValues:{color:""},validationSchema:P,onSubmit:function(){e((0,u.ss)({open:!0,message:"Radio - Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}});return(0,Z.jsx)(o.Z,{title:"Radio",children:(0,Z.jsx)("form",{onSubmit:r.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,Z.jsxs)(n.ZP,{item:!0,children:[(0,Z.jsx)(v.Z,{children:(0,Z.jsxs)(y.Z,{row:!0,"aria-label":"color",value:r.values.color,onChange:r.handleChange,name:"color",id:"color",children:[(0,Z.jsx)(w.Z,{value:"primary",control:(0,Z.jsx)(S.Z,{sx:{color:"primary.main","&.Mui-checked":{color:"primary.main"}}}),label:"Primary"}),(0,Z.jsx)(w.Z,{value:"error",control:(0,Z.jsx)(S.Z,{sx:{color:"error.main","&.Mui-checked":{color:"error.main"}}}),label:"Error"}),(0,Z.jsx)(w.Z,{value:"secondary",control:(0,Z.jsx)(S.Z,{sx:{color:"secondary.main","&.Mui-checked":{color:"secondary.main"}}}),label:"Secondary"})]})}),r.errors.color&&(0,Z.jsxs)(k.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:[" ",r.errors.color," "]})]}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Submit"})})})})]})})})},I=i(19860),V=i(44758),L=x.Ry({color:x.IX().min(1,"At least one color is required")}),q=function(){var e=(0,I.Z)(),r=(0,s.I0)(),i=(0,m.TA)({initialValues:{color:[]},validationSchema:L,onSubmit:function(){r((0,u.ss)({open:!0,message:"Checkbox - Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}});return(0,Z.jsx)(o.Z,{title:"Checkbox",children:(0,Z.jsx)("form",{onSubmit:i.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsx)(V.Z,{value:"primary",name:"color",color:"primary",onChange:i.handleChange})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsx)(V.Z,{value:"secondary",name:"color",color:"secondary",sx:{color:e.palette.secondary.main},onChange:i.handleChange})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsx)(V.Z,{value:"error",name:"color",sx:{color:e.palette.error.main,"&.Mui-checked":{color:e.palette.error.main}},onChange:i.handleChange})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sx:{pt:"0 !important"},children:i.errors.color&&(0,Z.jsxs)(k.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:[" ",i.errors.color," "]})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Submit"})})})})]})})})},A=i(15103),T=i(88797),B=i(51405),R=x.Ry({age:x.Rx().required("Age selection is required.")}),_=function(){var e=(0,s.I0)(),r=(0,m.TA)({initialValues:{age:""},validationSchema:R,onSubmit:function(){e((0,u.ss)({open:!0,message:"Select - Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}});return(0,Z.jsx)(o.Z,{title:"Select",children:(0,Z.jsx)("form",{onSubmit:r.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:h.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(v.Z,{sx:{m:1,minWidth:120},children:[(0,Z.jsx)(A.Z,{id:"age-select",children:"Age"}),(0,Z.jsxs)(T.Z,{labelId:"age-select",id:"age",name:"age",value:r.values.age,onChange:r.handleChange,label:"Age",children:[(0,Z.jsx)(B.Z,{value:"",children:(0,Z.jsx)("em",{children:"None"})}),(0,Z.jsx)(B.Z,{value:10,children:"Ten"}),(0,Z.jsx)(B.Z,{value:20,children:"Twenty"}),(0,Z.jsx)(B.Z,{value:30,children:"Thirty"})]}),r.errors.age&&(0,Z.jsxs)(k.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:[" ",r.errors.age," "]})]})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Submit"})})})})]})})})},O=i(93433),M=i(1413),z=i(84511),E=i(19065),W=i(57829),F=i(41727),H=i(66212),J=i(61113),D=i(54406),N=i(11198),U=["User","Admin","Staff","Manager"],X=["Java","HTML","Bootstrap","JavaScript","NodeJS","React","Angular","CI"],$=(0,z.D)(),K=(0,z.D)(),G=x.Ry({role:x.Z_().trim().required("Role selection is required").matches(/^[a-z\d\-/#_\s]+$/i,"Only alphanumerics are allowed").max(50,"Role must be at most 50 characters"),skills:x.IX().of(x.Z_().trim().required("Leading spaces found in your tag").matches(/^[a-z\d\-/#.&_\s]+$/i,"Only alphanumerics are allowed").max(50,"Skill tag field must be at most 50 characters")).required("Skill selection is required").min(3,"Skill tags field must have at least 3 items").max(15,"Please select a maximum of 15 skills.")}),Q=function(){var e=(0,s.I0)(),r=(0,m.TA)({initialValues:{role:"",skills:[]},validationSchema:G,onSubmit:function(){e((0,u.ss)({open:!0,message:"Autocomplete - Submit Success",variant:"alert",alert:{color:"success"},close:!1}))}}),i=!1;return r.touched.skills&&r.errors.skills&&(r.touched.skills&&"string"===typeof r.errors.skills?i=r.errors.skills:r.errors.skills&&"string"!==typeof r.errors.skills&&r.errors.skills.map((function(e){return"object"===typeof e&&(i=e.label),e}))),(0,Z.jsx)(o.Z,{title:"Autocomplete",children:(0,Z.jsx)("form",{onSubmit:r.handleSubmit,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:h.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(E.Z,{fullWidth:!0,value:r.values.role,disableClearable:!0,onChange:function(e,i){if(U.includes(i))r.setFieldValue("role",i);else{var n=i.match(/"((?:\\.|[^"\\])*)"/);r.setFieldValue("role",n&&n[1])}},filterOptions:function(e,r){var i=$(e,r),n=r.inputValue,s=e.some((function(e){return n===e}));return""===n||s||i.push('Add "'.concat(n,'"')),i},selectOnFocus:!0,clearOnBlur:!0,autoHighlight:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:U,getOptionLabel:function(e){var r=e;if(!U.includes(e)){var i=e.match(/"((?:\\.|[^"\\])*)"/);i&&i[1]&&(r=i&&i[1])}return r},renderOption:function(e,r){return(0,Z.jsx)(W.Z,(0,M.Z)((0,M.Z)({component:"li"},e),{},{children:r}))},freeSolo:!0,renderInput:function(e){return(0,Z.jsx)(l.Z,(0,M.Z)((0,M.Z)({},e),{},{name:"role",error:r.touched.role&&Boolean(r.errors.role),helperText:r.touched.role&&r.errors.role&&r.errors.role,placeholder:"Select Role",InputProps:(0,M.Z)((0,M.Z)({},e.InputProps),{},{sx:{bgcolor:"grey.0"},endAdornment:(0,Z.jsx)(F.Z,{position:"end",children:(0,Z.jsx)(D.Z,{sx:{color:"text.primary"}})})})}))}})}),(0,Z.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(E.Z,{id:"skills",multiple:!0,fullWidth:!0,autoHighlight:!0,freeSolo:!0,disableCloseOnSelect:!0,options:X,value:r.values.skills,onBlur:r.handleBlur,getOptionLabel:function(e){return e},onChange:function(e,i){X.includes(i[i.length-1]);r.setFieldValue("skills",i)},filterOptions:function(e,r){var i=K(e,r),n=r.inputValue,s=e.some((function(e){return n===e}));return""===n||s||i.push(n),i},renderOption:function(e,r){return(0,Z.jsx)(W.Z,(0,M.Z)((0,M.Z)({component:"li"},e),{},{children:X.some((function(e){return r.includes(e)}))?r:'Add "'.concat(r,'"')}))},renderInput:function(e){return(0,Z.jsx)(l.Z,(0,M.Z)((0,M.Z)({},e),{},{name:"skills",placeholder:"Write your skills",error:r.touched.skills&&Boolean(r.errors.skills),helperText:i}))},renderTags:function(e,i){return e.map((function(e,n){var s=!1;return r.touched.skills&&r.errors.skills&&"string"!==typeof r.errors.skills&&"object"===typeof r.errors.skills[n]&&(s=!0),(0,Z.jsx)(H.Z,(0,M.Z)((0,M.Z)({},i({index:n})),{},{color:s?"error":"secondary",label:(0,Z.jsx)(J.Z,{variant:"caption",color:"secondary.dark",children:e}),deleteIcon:(0,Z.jsx)(N.Z,{}),size:"small"}),n)}))}}),(0,Z.jsxs)(a.Z,{direction:"row",spacing:1,alignItems:"center",sx:{mt:1.5},children:[(0,Z.jsx)(J.Z,{variant:"caption",children:"Suggestion:"}),X.filter((function(e){return r.values.skills&&!r.values.skills.map((function(e){return e})).includes(e)})).slice(0,5).map((function(e,i){return(0,Z.jsx)(H.Z,{variant:"outlined",onClick:function(){return r.setFieldValue("skills",[].concat((0,O.Z)(r.values.skills),[e]))},label:(0,Z.jsx)(J.Z,{variant:"caption",color:"text.dark",children:e}),size:"small"},i)}))]})]}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(t.Z,{variant:"contained",type:"submit",children:"Submit"})})})})]})})})},Y=function(){return(0,Z.jsxs)(n.ZP,{container:!0,spacing:h.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(g,{})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(b,{})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(C,{})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(q,{})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(_,{})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(Q,{})})]})}}}]);