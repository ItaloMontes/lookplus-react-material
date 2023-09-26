"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[577],{22889:function(e,n,t){var r=t(47313);n.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},35184:function(e,n,t){var r=t(35898),i=t(61113),s=t(90891),a=t(46417);n.Z=function(){return(0,a.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},55602:function(e,n,t){var r=t(1413),i=t(45987),s=t(57829),a=t(33497),c=t(46417),l=["children"];n.Z=function(e){var n=e.children,t=(0,i.Z)(e,l);return(0,c.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{children:(0,c.jsx)(s.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})}))}},70547:function(e,n,t){var r=(0,t(17592).ZP)("div")((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?n.palette.background.default:n.palette.grey[100],minHeight:"100vh"}}));n.Z=r},13317:function(e,n,t){var r=t(1413),i=t(74165),s=t(15861),a=t(36459),c=t(19860),l=t(1550),o=t(15103),d=t(49914),u=t(15480),m=t(57829),h=t(24193),x=t(77863),Z=t(58467),f=t(3463),j=t(7410),g=t(66182),p=t(54285),b=t(22889),v=t(5866),y=t(46417);n.Z=function(e){var n=Object.assign({},((0,a.Z)(e),e)),t=(0,c.Z)(),P=(0,b.Z)(),k=(0,x.I0)(),w=(0,Z.s0)(),C=(0,p.Z)(),I=C.isLoggedIn,S=C.resetPassword;return(0,y.jsx)(j.J9,{initialValues:{email:"",submit:null},validationSchema:f.Ry().shape({email:f.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n,t){var r,s,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,s=t.setStatus,a=t.setSubmitting,e.prev=1,e.next=4,S(n.email).then((function(){s({success:!0}),a(!1),k((0,v.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){w(I?"/auth/check-mail":"/check-mail",{replace:!0})}),1500)}),(function(e){s({success:!1}),r({submit:e.message}),a(!1)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),P.current&&(s({success:!1}),r({submit:e.t0.message}),a(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,s=e.handleBlur,a=e.handleChange,c=e.handleSubmit,x=e.isSubmitting,Z=e.touched,f=e.values;return(0,y.jsxs)("form",(0,r.Z)((0,r.Z)({noValidate:!0,onSubmit:c},n),{},{children:[(0,y.jsxs)(l.Z,{fullWidth:!0,error:Boolean(Z.email&&i.email),sx:(0,r.Z)({},t.typography.customInput),children:[(0,y.jsx)(o.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),(0,y.jsx)(d.Z,{id:"outlined-adornment-email-forgot",type:"email",value:f.email,name:"email",onBlur:s,onChange:a,label:"Email Address / Username",inputProps:{}}),Z.email&&i.email&&(0,y.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})]}),i.submit&&(0,y.jsx)(m.Z,{sx:{mt:3},children:(0,y.jsx)(u.Z,{error:!0,children:i.submit})}),(0,y.jsx)(m.Z,{sx:{mt:2},children:(0,y.jsx)(g.Z,{children:(0,y.jsx)(h.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})}},20577:function(e,n,t){t.r(n);var r=t(2135),i=t(19860),s=t(24813),a=t(9019),c=t(61113),l=t(19536),o=t(70547),d=t(55602),u=t(31665),m=t(13317),h=t(35184),x=t(54285),Z=t(46417);n.default=function(){var e=(0,i.Z)(),n=(0,x.Z)().isLoggedIn,t=(0,s.Z)(e.breakpoints.down("md"));return(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,Z.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,Z.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,Z.jsx)(r.rU,{to:"#","aria-label":"theme-logo",children:(0,Z.jsx)(u.Z,{})})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Olvidaste tu contrase\xf1a?"})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Ingresa la direccion de correo de tu cuenta para resetear la contrase\xf1a."})})]})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(m.Z,{})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(l.Z,{})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,children:(0,Z.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,Z.jsx)(c.Z,{component:r.rU,to:n?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"uya tienes una cuenta?"})})})]})})})})}),(0,Z.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,Z.jsx)(h.Z,{})})]})})}}}]);