"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[8277],{22889:function(e,r,n){var t=n(47313);r.Z=function(){var e=(0,t.useRef)(!0);return(0,t.useEffect)((function(){return function(){e.current=!1}}),[]),e}},35184:function(e,r,n){var t=n(35898),s=n(61113),i=n(90891),o=n(46417);r.Z=function(){return(0,o.jsxs)(t.Z,{direction:"row",justifyContent:"space-between",children:[(0,o.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,o.jsx)(s.Z,{variant:"subtitle2",component:i.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},2419:function(e,r,n){n.d(r,{V:function(){return s},w:function(){return i}});var t=n(20556),s=function(e){return e<2?{label:"Poor",color:t.Z.errorMain}:e<3?{label:"Weak",color:t.Z.warningDark}:e<4?{label:"Normal",color:t.Z.orangeMain}:e<5?{label:"Good",color:t.Z.successMain}:e<6?{label:"Strong",color:t.Z.successDark}:{label:"Poor",color:t.Z.errorMain}},i=function(e){var r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(r+=1),r}},55602:function(e,r,n){var t=n(1413),s=n(45987),i=n(57829),o=n(33497),a=n(46417),c=["children"];r.Z=function(e){var r=e.children,n=(0,s.Z)(e,c);return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:(0,a.jsx)(i.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:r})}))}},70547:function(e,r,n){var t=(0,n(17592).ZP)("div")((function(e){var r=e.theme;return{backgroundColor:"dark"===r.palette.mode?r.palette.background.default:r.palette.grey[100],minHeight:"100vh"}}));r.Z=t},86877:function(e,r,n){var t=n(1413),s=n(74165),i=n(15861),o=n(29439),a=n(36459),c=n(47313),l=n(58467),d=n(19860),u=n(1550),h=n(15103),m=n(49914),x=n(41727),Z=n(47131),f=n(15480),p=n(57829),j=n(9019),w=n(61113),g=n(24193),v=n(3463),b=n(7410),P=n(54285),y=n(22889),C=n(66182),k=n(2419),S=n(77863),z=n(5866),M=n(10237),I=n(22611),R=n(46417);r.Z=function(e){var r=Object.assign({},((0,a.Z)(e),e)),n=(0,d.Z)(),W=(0,l.s0)(),_=(0,y.Z)(),B=c.useState(!1),E=(0,o.Z)(B,2),V=E[0],q=E[1],D=c.useState(0),A=(0,o.Z)(D,2),H=A[0],F=A[1],G=c.useState(),L=(0,o.Z)(G,2),O=L[0],J=L[1],N=(0,P.Z)().isLoggedIn,T=function(){q(!V)},U=function(e){e.preventDefault()},$=function(e){var r=(0,k.w)(e);F(r),J((0,k.V)(r))};return(0,c.useEffect)((function(){$("")}),[]),(0,R.jsx)(b.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:v.Ry().shape({password:v.Z_().max(255).required("Password is required"),confirmPassword:v.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(function(e,r){return r.parent.password===e}))}),onSubmit:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r,n){var t,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.setErrors,i=n.setStatus,o=n.setSubmitting;try{_.current&&(i({success:!0}),o(!1),(0,S.WI)((0,z.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){W(N?"/auth/login":"/login",{replace:!0})}),1500))}catch(r){console.error(r),_.current&&(i({success:!1}),t({submit:r.message}),o(!1))}case 2:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors,i=e.handleBlur,o=e.handleChange,a=e.handleSubmit,c=e.isSubmitting,l=e.touched,d=e.values;return(0,R.jsxs)("form",(0,t.Z)((0,t.Z)({noValidate:!0,onSubmit:a},r),{},{children:[(0,R.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.password&&s.password),sx:(0,t.Z)({},n.typography.customInput),children:[(0,R.jsx)(h.Z,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),(0,R.jsx)(m.Z,{id:"outlined-adornment-password-reset",type:V?"text":"password",value:d.password,name:"password",onBlur:i,onChange:function(e){o(e),$(e.target.value)},endAdornment:(0,R.jsx)(x.Z,{position:"end",children:(0,R.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:T,onMouseDown:U,edge:"end",size:"large",children:V?(0,R.jsx)(M.Z,{}):(0,R.jsx)(I.Z,{})})}),inputProps:{}})]}),l.password&&s.password&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-reset",children:s.password})}),0!==H&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsx)(p.Z,{sx:{mb:2},children:(0,R.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,R.jsx)(j.ZP,{item:!0,children:(0,R.jsx)(p.Z,{style:{backgroundColor:null===O||void 0===O?void 0:O.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,R.jsx)(j.ZP,{item:!0,children:(0,R.jsx)(w.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===O||void 0===O?void 0:O.label})})]})})}),(0,R.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.confirmPassword&&s.confirmPassword),sx:(0,t.Z)({},n.typography.customInput),children:[(0,R.jsx)(h.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),(0,R.jsx)(m.Z,{id:"outlined-adornment-confirm-password",type:"password",value:d.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:i,onChange:o,inputProps:{}})]}),l.confirmPassword&&s.confirmPassword&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsxs)(f.Z,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",s.confirmPassword," "]})}),s.submit&&(0,R.jsx)(p.Z,{sx:{mt:3},children:(0,R.jsx)(f.Z,{error:!0,children:s.submit})}),(0,R.jsx)(p.Z,{sx:{mt:1},children:(0,R.jsx)(C.Z,{children:(0,R.jsx)(g.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})}},68277:function(e,r,n){n.r(r);var t=n(2135),s=n(19860),i=n(24813),o=n(9019),a=n(35898),c=n(61113),l=n(70547),d=n(55602),u=n(31665),h=n(86877),m=n(35184),x=n(46417);r.default=function(){var e=(0,s.Z)(),r=(0,i.Z)(e.breakpoints.down("md"));return(0,x.jsx)(l.Z,{children:(0,x.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,x.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,x.jsx)(d.Z,{children:(0,x.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,x.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,x.jsx)(t.rU,{to:"#","aria-label":"theme-logo",children:(0,x.jsx)(u.Z,{})})}),(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsx)(o.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,x.jsx)(o.ZP,{item:!0,children:(0,x.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,x.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Resetea la contrase\xf1a"}),(0,x.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Por favor ingresa una nueva contrase\xf1a"})]})})})}),(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsx)(h.Z,{})})]})})})})}),(0,x.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,x.jsx)(m.Z,{})})]})})}},10237:function(e,r,n){var t=n(64836);r.Z=void 0;var s=t(n(45045)),i=n(46417),o=(0,s.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");r.Z=o},22611:function(e,r,n){var t=n(64836);r.Z=void 0;var s=t(n(45045)),i=n(46417),o=(0,s.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=o}}]);