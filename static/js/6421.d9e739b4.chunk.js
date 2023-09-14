"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[6421],{22889:function(e,t,n){var r=n(47313);t.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1357:function(e,t,n){var r=n(1413),s=n(9019),i=n(61113),o=n(44021),a=n(46417);t.Z=function(e){var t=e.items;return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return(0,a.jsxs)(s.ZP,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[(0,a.jsx)(s.ZP,{item:!0,children:(0,a.jsx)(i.Z,{variant:"h1",children:e.title})}),(0,a.jsx)(s.ZP,{item:!0,children:(0,a.jsx)(i.Z,{variant:"subtitle2",children:e.description})})]},t)}))}))}},66864:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(19860),s=n(57829);n(47313);var i=n.p+"static/media/auth-pattern.df3f321bb27856cb0776349ee36b11f1.svg";var o=n.p+"static/media/auth-pattern-dark.b5dde5831391f4ac6ab0bc90176ac4cb.svg",a=n(46417),c=function(e){var t=e.children,n=(0,r.Z)();return(0,a.jsx)(s.Z,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(o,")"):"url(".concat(i,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}},2419:function(e,t,n){n.d(t,{V:function(){return s},w:function(){return i}});var r=n(20556),s=function(e){return e<2?{label:"Poor",color:r.Z.errorMain}:e<3?{label:"Weak",color:r.Z.warningDark}:e<4?{label:"Normal",color:r.Z.orangeMain}:e<5?{label:"Good",color:r.Z.successMain}:e<6?{label:"Strong",color:r.Z.successDark}:{label:"Poor",color:r.Z.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},55602:function(e,t,n){var r=n(1413),s=n(45987),i=n(57829),o=n(33497),a=n(46417),c=["children"];t.Z=function(e){var t=e.children,n=(0,s.Z)(e,c);return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:(0,a.jsx)(i.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},70547:function(e,t,n){var r=(0,n(17592).ZP)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.grey[100],minHeight:"100vh"}}));t.Z=r},86877:function(e,t,n){var r=n(1413),s=n(74165),i=n(15861),o=n(29439),a=n(36459),c=n(47313),l=n(58467),d=n(19860),u=n(1550),h=n(15103),m=n(49914),f=n(41727),p=n(47131),x=n(15480),Z=n(57829),g=n(9019),b=n(61113),j=n(24193),w=n(3463),v=n(79429),P=n(54285),y=n(22889),k=n(66182),C=n(2419),S=n(77863),E=n(5866),I=n(10237),z=n(22611),R=n(46417);t.Z=function(e){var t=Object.assign({},((0,a.Z)(e),e)),n=(0,d.Z)(),M=(0,l.s0)(),B=(0,y.Z)(),W=c.useState(!1),_=(0,o.Z)(W,2),V=_[0],D=_[1],q=c.useState(0),A=(0,o.Z)(q,2),H=A[0],T=A[1],F=c.useState(),G=(0,o.Z)(F,2),L=G[0],O=G[1],J=(0,P.Z)().isLoggedIn,N=function(){D(!V)},U=function(e){e.preventDefault()},$=function(e){var t=(0,C.w)(e);T(t),O((0,C.V)(t))};return(0,c.useEffect)((function(){$("")}),[]),(0,R.jsx)(v.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:w.Ry().shape({password:w.Z_().max(255).required("Password is required"),confirmPassword:w.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(function(e,t){return t.parent.password===e}))}),onSubmit:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,i=n.setStatus,o=n.setSubmitting;try{B.current&&(i({success:!0}),o(!1),(0,S.WI)((0,E.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){M(J?"/auth/login":"/login",{replace:!0})}),1500))}catch(t){console.error(t),B.current&&(i({success:!1}),r({submit:t.message}),o(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors,i=e.handleBlur,o=e.handleChange,a=e.handleSubmit,c=e.isSubmitting,l=e.touched,d=e.values;return(0,R.jsxs)("form",(0,r.Z)((0,r.Z)({noValidate:!0,onSubmit:a},t),{},{children:[(0,R.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.password&&s.password),sx:(0,r.Z)({},n.typography.customInput),children:[(0,R.jsx)(h.Z,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),(0,R.jsx)(m.Z,{id:"outlined-adornment-password-reset",type:V?"text":"password",value:d.password,name:"password",onBlur:i,onChange:function(e){o(e),$(e.target.value)},endAdornment:(0,R.jsx)(f.Z,{position:"end",children:(0,R.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:N,onMouseDown:U,edge:"end",size:"large",children:V?(0,R.jsx)(I.Z,{}):(0,R.jsx)(z.Z,{})})}),inputProps:{}})]}),l.password&&s.password&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-reset",children:s.password})}),0!==H&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsx)(Z.Z,{sx:{mb:2},children:(0,R.jsxs)(g.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,R.jsx)(g.ZP,{item:!0,children:(0,R.jsx)(Z.Z,{style:{backgroundColor:null===L||void 0===L?void 0:L.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,R.jsx)(g.ZP,{item:!0,children:(0,R.jsx)(b.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===L||void 0===L?void 0:L.label})})]})})}),(0,R.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.confirmPassword&&s.confirmPassword),sx:(0,r.Z)({},n.typography.customInput),children:[(0,R.jsx)(h.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),(0,R.jsx)(m.Z,{id:"outlined-adornment-confirm-password",type:"password",value:d.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:i,onChange:o,inputProps:{}})]}),l.confirmPassword&&s.confirmPassword&&(0,R.jsx)(u.Z,{fullWidth:!0,children:(0,R.jsxs)(x.Z,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",s.confirmPassword," "]})}),s.submit&&(0,R.jsx)(Z.Z,{sx:{mt:3},children:(0,R.jsx)(x.Z,{error:!0,children:s.submit})}),(0,R.jsx)(Z.Z,{sx:{mt:1},children:(0,R.jsx)(k.Z,{children:(0,R.jsx)(j.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})}},26421:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(4942),s=n(2135),i=n(17592),o=n(19860),a=n(24813),c=n(9019),l=n(35898),d=n(61113),u=n(70547),h=n(55602),m=n(31665),f=n(86877),p=n(66864),x=n(1357);n(47313);var Z=n.p+"static/media/auth-reset-error-card.20e98cd0bda7c0923ff6bb44984081a1.svg";var g=n.p+"static/media/auth-reset-purple-card.d1c4c62af300ca4c5b5ddda277368375.svg",b=n(46417),j=(0,i.ZP)("span")((function(e){var t=e.theme;return{"&:after":(0,r.Z)({content:'""',position:"absolute",top:"35%",left:"35%",width:400,height:400,backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},t.breakpoints.down("xl"),{left:"25%",top:"35%"}),"&:before":(0,r.Z)({content:'""',position:"absolute",top:"12%",left:"25%",width:400,height:270,backgroundImage:"url(".concat(Z,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"},t.breakpoints.down("xl"),{top:"10%",left:"15%"})}})),w=[{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"}],v=function(){var e=(0,o.Z)(),t=(0,a.Z)(e.breakpoints.down("md"));return(0,b.jsx)(u.Z,{children:(0,b.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[(0,b.jsx)(c.ZP,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:(0,b.jsx)(h.Z,{children:(0,b.jsxs)(c.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,b.jsx)(c.ZP,{item:!0,xs:12,children:(0,b.jsxs)(c.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[(0,b.jsx)(c.ZP,{item:!0,children:(0,b.jsxs)(l.Z,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[(0,b.jsx)(d.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),(0,b.jsx)(d.Z,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Please choose new password."})]})}),(0,b.jsx)(c.ZP,{item:!0,sx:{mb:{xs:3,sm:0}},children:(0,b.jsx)(s.rU,{to:"#","aria-label":"theme-logo",children:(0,b.jsx)(m.Z,{})})})]})}),(0,b.jsx)(c.ZP,{item:!0,xs:12,children:(0,b.jsx)(f.Z,{})})]})})}),(0,b.jsx)(c.ZP,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:(0,b.jsx)(p.Z,{children:(0,b.jsxs)(c.ZP,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[(0,b.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,b.jsx)("span",{}),(0,b.jsx)(j,{})]}),(0,b.jsx)(c.ZP,{item:!0,xs:12,children:(0,b.jsx)(c.ZP,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:(0,b.jsx)(c.ZP,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:(0,b.jsx)(x.Z,{items:w})})})})]})})})]})})}},10237:function(e,t,n){var r=n(64836);t.Z=void 0;var s=r(n(45045)),i=n(46417),o=(0,s.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=o},22611:function(e,t,n){var r=n(64836);t.Z=void 0;var s=r(n(45045)),i=n(46417),o=(0,s.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=o}}]);