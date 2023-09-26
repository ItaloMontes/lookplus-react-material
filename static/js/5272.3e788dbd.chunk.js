"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[5272],{22889:function(e,t,n){var r=n(47313);t.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},2419:function(e,t,n){n.d(t,{V:function(){return s},w:function(){return i}});var r=n(20556),s=function(e){return e<2?{label:"Poor",color:r.Z.errorMain}:e<3?{label:"Weak",color:r.Z.warningDark}:e<4?{label:"Normal",color:r.Z.orangeMain}:e<5?{label:"Good",color:r.Z.successMain}:e<6?{label:"Strong",color:r.Z.successDark}:{label:"Poor",color:r.Z.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},32922:function(e,t,n){var r=n(1413),s=n(74165),i=n(15861),a=n(29439),l=n(36459),o=n(47313),c=n(77863),d=n(58467),u=n(2135),m=n(19860),x=n(24813),h=n(9019),Z=n(57829),p=n(61113),j=n(24631),g=n(1550),f=n(15103),b=n(49914),w=n(15480),v=n(41727),y=n(47131),P=n(83929),k=n(44758),C=n(24193),S=n(3463),I=n(7410),E=n(66182),N=n(54285),R=n(22889),M=n(2419),B=n(5866),U=n(10237),W=n(22611),A=n(46417);t.Z=function(e){var t=Object.assign({},((0,l.Z)(e),e)),n=(0,m.Z)(),_=(0,d.s0)(),z=(0,R.Z)(),D=(0,c.I0)(),q=(0,x.Z)(n.breakpoints.down("md")),F=o.useState(!1),V=(0,a.Z)(F,2),H=V[0],T=V[1],G=o.useState(!0),J=(0,a.Z)(G,2),L=J[0],O=J[1],Y=o.useState(0),$=(0,a.Z)(Y,2),K=$[0],Q=$[1],X=o.useState(),ee=(0,a.Z)(X,2),te=ee[0],ne=ee[1],re=(0,N.Z)().register,se=function(){T(!H)},ie=function(e){e.preventDefault()},ae=function(e){var t=(0,M.w)(e);Q(t),ne((0,M.V)(t))};return(0,o.useEffect)((function(){ae("123456")}),[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(h.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,A.jsx)(h.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,A.jsx)(Z.Z,{sx:{mb:2},children:(0,A.jsx)(p.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})}),(0,A.jsx)(I.J9,{initialValues:{email:"",password:"",firstName:"",lastName:"",submit:null},validationSchema:S.Ry().shape({email:S.Z_().email("Must be a valid email").max(255).required("Email is required"),password:S.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r,i,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,i=n.setStatus,a=n.setSubmitting,e.prev=1,e.next=4,re(t.email,t.password,t.firstName,t.lastName);case 4:z.current&&(i({success:!0}),a(!1),D((0,B.ss)({open:!0,message:"Your registration has been successfully completed.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){_("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),z.current&&(i({success:!1}),r({submit:e.t0.message}),a(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors,i=e.handleBlur,a=e.handleChange,l=e.handleSubmit,o=e.isSubmitting,c=e.touched,d=e.values;return(0,A.jsxs)("form",(0,r.Z)((0,r.Z)({noValidate:!0,onSubmit:l},t),{},{children:[(0,A.jsxs)(h.ZP,{container:!0,spacing:q?0:2,children:[(0,A.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"firstName",type:"text",value:d.firstName,onBlur:i,onChange:a,sx:(0,r.Z)({},n.typography.customInput)})}),(0,A.jsx)(h.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lastName",type:"text",value:d.lastName,onBlur:i,onChange:a,sx:(0,r.Z)({},n.typography.customInput)})})]}),(0,A.jsxs)(g.Z,{fullWidth:!0,error:Boolean(c.email&&s.email),sx:(0,r.Z)({},n.typography.customInput),children:[(0,A.jsx)(f.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,A.jsx)(b.Z,{id:"outlined-adornment-email-register",type:"email",value:d.email,name:"email",onBlur:i,onChange:a,inputProps:{}}),c.email&&s.email&&(0,A.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text--register",children:s.email})]}),(0,A.jsxs)(g.Z,{fullWidth:!0,error:Boolean(c.password&&s.password),sx:(0,r.Z)({},n.typography.customInput),children:[(0,A.jsx)(f.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,A.jsx)(b.Z,{id:"outlined-adornment-password-register",type:H?"text":"password",value:d.password,name:"password",label:"Password",onBlur:i,onChange:function(e){a(e),ae(e.target.value)},endAdornment:(0,A.jsx)(v.Z,{position:"end",children:(0,A.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:se,onMouseDown:ie,edge:"end",size:"large",children:H?(0,A.jsx)(U.Z,{}):(0,A.jsx)(W.Z,{})})}),inputProps:{}}),c.password&&s.password&&(0,A.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:s.password})]}),0!==K&&(0,A.jsx)(g.Z,{fullWidth:!0,children:(0,A.jsx)(Z.Z,{sx:{mb:2},children:(0,A.jsxs)(h.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(h.ZP,{item:!0,children:(0,A.jsx)(Z.Z,{style:{backgroundColor:null===te||void 0===te?void 0:te.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,A.jsx)(h.ZP,{item:!0,children:(0,A.jsx)(p.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===te||void 0===te?void 0:te.label})})]})})}),(0,A.jsx)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,A.jsx)(h.ZP,{item:!0,children:(0,A.jsx)(P.Z,{control:(0,A.jsx)(k.Z,{checked:L,onChange:function(e){return O(e.target.checked)},name:"checked",color:"primary"}),label:(0,A.jsxs)(p.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,A.jsx)(p.Z,{variant:"subtitle1",component:u.rU,to:"#",children:"Terms & Condition."})]})})})}),s.submit&&(0,A.jsx)(Z.Z,{sx:{mt:3},children:(0,A.jsx)(w.Z,{error:!0,children:s.submit})}),(0,A.jsx)(Z.Z,{sx:{mt:2},children:(0,A.jsx)(E.Z,{children:(0,A.jsx)(C.Z,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})}},75272:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2135),s=n(19860),i=n(24813),a=n(9019),l=n(35898),o=n(57829),c=n(61113),d=n(19536),u=n(39497),m=n(55602),x=n(31665),h=n(32922),Z=n(48544),p=n(35184),j=n(1357);n(47313);var g=n.p+"static/media/img-a2-signup.5a34919e8f206020282f5dcf42935c2d.svg",f=n(46417),b=[{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}],w=function(){var e=(0,s.Z)(),t=(0,i.Z)(e.breakpoints.down("md")),n=(0,i.Z)(e.breakpoints.down("lg"));return(0,f.jsx)(u.Z,{children:(0,f.jsxs)(a.ZP,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[(0,f.jsx)(a.ZP,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:(0,f.jsxs)(a.ZP,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[(0,f.jsx)(a.ZP,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:(0,f.jsx)(r.rU,{to:"#","aria-label":"theme-logo",children:(0,f.jsx)(x.Z,{})})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:(0,f.jsxs)(l.Z,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[(0,f.jsx)(o.Z,{component:r.rU,to:"#",sx:{display:{xs:"block",md:"none"}},children:(0,f.jsx)(x.Z,{})}),(0,f.jsx)(m.Z,{border:n,children:(0,f.jsxs)(a.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,f.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,f.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsx)(h.Z,{})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsx)(d.Z,{})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,f.jsx)(c.Z,{component:r.rU,to:"/pages/login/login2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})]})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3},children:(0,f.jsx)(p.Z,{})})]})}),(0,f.jsx)(a.ZP,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:(0,f.jsx)(Z.Z,{children:(0,f.jsxs)(a.ZP,{item:!0,container:!0,justifyContent:"center",children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsx)(a.ZP,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:(0,f.jsx)(a.ZP,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:(0,f.jsx)(j.Z,{items:b})})})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,children:(0,f.jsx)("img",{alt:"Auth method",src:g,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}}}]);