"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[4271],{22889:function(e,t,n){var i=n(47313);t.Z=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),e}},13317:function(e,t,n){var i=n(1413),s=n(74165),r=n(15861),a=n(36459),l=n(19860),c=n(1550),o=n(15103),d=n(49914),m=n(15480),u=n(57829),x=n(24193),h=n(77863),Z=n(58467),p=n(3463),j=n(79429),f=n(66182),g=n(54285),b=n(22889),v=n(5866),y=n(46417);t.Z=function(e){var t=Object.assign({},((0,a.Z)(e),e)),n=(0,l.Z)(),P=(0,b.Z)(),w=(0,h.I0)(),k=(0,Z.s0)(),C=(0,g.Z)(),I=C.isLoggedIn,S=C.resetPassword;return(0,y.jsx)(j.J9,{initialValues:{email:"",submit:null},validationSchema:p.Ry().shape({email:p.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n){var i,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setErrors,r=n.setStatus,a=n.setSubmitting,e.prev=1,e.next=4,S(t.email).then((function(){r({success:!0}),a(!1),w((0,v.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){k(I?"/auth/check-mail":"/check-mail",{replace:!0})}),1500)}),(function(e){r({success:!1}),i({submit:e.message}),a(!1)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),P.current&&(r({success:!1}),i({submit:e.t0.message}),a(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors,r=e.handleBlur,a=e.handleChange,l=e.handleSubmit,h=e.isSubmitting,Z=e.touched,p=e.values;return(0,y.jsxs)("form",(0,i.Z)((0,i.Z)({noValidate:!0,onSubmit:l},t),{},{children:[(0,y.jsxs)(c.Z,{fullWidth:!0,error:Boolean(Z.email&&s.email),sx:(0,i.Z)({},n.typography.customInput),children:[(0,y.jsx)(o.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),(0,y.jsx)(d.Z,{id:"outlined-adornment-email-forgot",type:"email",value:p.email,name:"email",onBlur:r,onChange:a,label:"Email Address / Username",inputProps:{}}),Z.email&&s.email&&(0,y.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:s.email})]}),s.submit&&(0,y.jsx)(u.Z,{sx:{mt:3},children:(0,y.jsx)(m.Z,{error:!0,children:s.submit})}),(0,y.jsx)(u.Z,{sx:{mt:2},children:(0,y.jsx)(f.Z,{children:(0,y.jsx)(x.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})}},34271:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(2135),s=n(19860),r=n(24813),a=n(9019),l=n(35898),c=n(57829),o=n(61113),d=n(19536),m=n(39497),u=n(55602),x=n(31665),h=n(13317),Z=n(48544),p=n(35184),j=n(1357);n(47313);var f=n.p+"static/media/img-a2-forgotpass.45554267cde72ac1ef939d8e59788410.svg",g=n(46417),b=[{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}],v=function(){var e=(0,s.Z)(),t=(0,r.Z)(e.breakpoints.down("md")),n=(0,r.Z)(e.breakpoints.down("lg"));return(0,g.jsx)(m.Z,{children:(0,g.jsxs)(a.ZP,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[(0,g.jsx)(a.ZP,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:(0,g.jsxs)(a.ZP,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[(0,g.jsx)(a.ZP,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:(0,g.jsx)(i.rU,{to:"#","aria-label":"theme-logo",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:(0,g.jsxs)(l.Z,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[(0,g.jsx)(c.Z,{component:i.rU,to:"#",sx:{display:{xs:"block",md:"none"}},children:(0,g.jsx)(x.Z,{})}),(0,g.jsx)(u.Z,{border:n,children:(0,g.jsxs)(a.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,g.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"}),(0,g.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})]})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(h.Z,{})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(d.Z,{})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,g.jsx)(o.Z,{component:i.rU,to:"/pages/login/login2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})]})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3},children:(0,g.jsx)(p.Z,{})})]})}),(0,g.jsx)(a.ZP,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:(0,g.jsx)(Z.Z,{children:(0,g.jsxs)(a.ZP,{item:!0,container:!0,justifyContent:"center",children:[(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.ZP,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:(0,g.jsx)(a.ZP,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:(0,g.jsx)(j.Z,{items:b})})})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)("img",{alt:"Auth method",src:f,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}}}]);