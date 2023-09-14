"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[2756],{22889:function(e,t,n){var r=n(47313);t.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1357:function(e,t,n){var r=n(1413),i=n(9019),o=n(61113),a=n(44021),s=n(46417);t.Z=function(e){var t=e.items;return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return(0,s.jsxs)(i.ZP,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[(0,s.jsx)(i.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"h1",children:e.title})}),(0,s.jsx)(i.ZP,{item:!0,children:(0,s.jsx)(o.Z,{variant:"subtitle2",children:e.description})})]},t)}))}))}},66864:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(19860),i=n(57829);n(47313);var o=n.p+"static/media/auth-pattern.df3f321bb27856cb0776349ee36b11f1.svg";var a=n.p+"static/media/auth-pattern-dark.b5dde5831391f4ac6ab0bc90176ac4cb.svg",s=n(46417),c=function(e){var t=e.children,n=(0,r.Z)();return(0,s.jsx)(i.Z,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(a,")"):"url(".concat(o,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}},55602:function(e,t,n){var r=n(1413),i=n(45987),o=n(57829),a=n(33497),s=n(46417),c=["children"];t.Z=function(e){var t=e.children,n=(0,i.Z)(e,c);return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:(0,s.jsx)(o.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},70547:function(e,t,n){var r=(0,n(17592).ZP)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.grey[100],minHeight:"100vh"}}));t.Z=r},76699:function(e,t,n){var r=n(1413),i=n(74165),o=n(15861),a=n(29439),s=n(45987),c=n(47313),l=n(2135),d=n(19860),u=n(1550),m=n(15103),p=n(49914),h=n(15480),x=n(41727),Z=n(47131),f=n(9019),g=n(83929),v=n(44758),j=n(61113),b=n(57829),w=n(24193),k=n(3463),y=n(79429),P=n(66182),C=n(54285),S=n(22889),z=n(10237),I=n(22611),B=n(46417),M=["loginProp"];t.Z=function(e){var t=e.loginProp,n=(0,s.Z)(e,M),D=(0,d.Z)(),H=(0,C.Z)().login,R=(0,S.Z)(),V=c.useState(!0),E=(0,a.Z)(V,2),F=E[0],_=E[1],q=c.useState(!1),O=(0,a.Z)(q,2),W=O[0],A=O[1],L=function(){A(!W)},U=function(e){e.preventDefault()};return(0,B.jsx)(y.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:k.Ry().shape({email:k.Z_().email("Must be a valid email").max(255).required("Email is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var r,o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,o=n.setStatus,a=n.setSubmitting,e.prev=1,e.next=4,H(t.email,t.password);case 4:R.current&&(o({success:!0}),a(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),R.current&&(o({success:!1}),r({submit:e.t0.message}),a(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,o=e.handleBlur,a=e.handleChange,s=e.handleSubmit,c=e.isSubmitting,d=e.touched,k=e.values;return(0,B.jsxs)("form",(0,r.Z)((0,r.Z)({noValidate:!0,onSubmit:s},n),{},{children:[(0,B.jsxs)(u.Z,{fullWidth:!0,error:Boolean(d.email&&i.email),sx:(0,r.Z)({},D.typography.customInput),children:[(0,B.jsx)(m.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,B.jsx)(p.Z,{id:"outlined-adornment-email-login",type:"email",value:k.email,name:"email",onBlur:o,onChange:a,inputProps:{}}),d.email&&i.email&&(0,B.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:i.email})]}),(0,B.jsxs)(u.Z,{fullWidth:!0,error:Boolean(d.password&&i.password),sx:(0,r.Z)({},D.typography.customInput),children:[(0,B.jsx)(m.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,B.jsx)(p.Z,{id:"outlined-adornment-password-login",type:W?"text":"password",value:k.password,name:"password",onBlur:o,onChange:a,endAdornment:(0,B.jsx)(x.Z,{position:"end",children:(0,B.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:U,edge:"end",size:"large",children:W?(0,B.jsx)(z.Z,{}):(0,B.jsx)(I.Z,{})})}),inputProps:{},label:"Password"}),d.password&&i.password&&(0,B.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:i.password})]}),(0,B.jsxs)(f.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(f.ZP,{item:!0,children:(0,B.jsx)(g.Z,{control:(0,B.jsx)(v.Z,{checked:F,onChange:function(e){return _(e.target.checked)},name:"checked",color:"primary"}),label:"Keep me logged in"})}),(0,B.jsx)(f.ZP,{item:!0,children:(0,B.jsx)(j.Z,{variant:"subtitle1",component:l.rU,to:t?"/pages/forgot-password/forgot-password".concat(t):"/pages/forgot-password/forgot-password3",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})})]}),i.submit&&(0,B.jsx)(b.Z,{sx:{mt:3},children:(0,B.jsx)(h.Z,{error:!0,children:i.submit})}),(0,B.jsx)(b.Z,{sx:{mt:2},children:(0,B.jsx)(P.Z,{children:(0,B.jsx)(w.Z,{color:"secondary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In"})})})]}))}})}},72756:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2135),i=n(17592),o=n(19860),a=n(24813),s=n(9019),c=n(35898),l=n(61113),d=n(19536),u=n(70547),m=n(55602),p=n(76699),h=n(31665),x=n(66864),Z=n(1357);n(47313);var f=n.p+"static/media/auth-blue-card.209358074610c260ef74c448d420f8fd.svg";var g=n.p+"static/media/auth-purple-card.8b41ef131d2a063e1cd5feb7fae4413a.svg",v=n(46417),j=(0,i.ZP)("span")({"&:after":{content:'""',position:"absolute",top:"32%",left:"40%",width:313,backgroundSize:380,height:280,backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},"&:before":{content:'""',position:"absolute",top:"23%",left:"37%",width:243,height:210,backgroundSize:380,backgroundImage:"url(".concat(f,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"}}),b=[{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"}],w=function(){var e=(0,o.Z)(),t=(0,a.Z)(e.breakpoints.down("md"));return(0,v.jsx)(u.Z,{children:(0,v.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[(0,v.jsx)(s.ZP,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:(0,v.jsx)(m.Z,{children:(0,v.jsxs)(s.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsxs)(s.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[(0,v.jsx)(s.ZP,{item:!0,children:(0,v.jsxs)(c.Z,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[(0,v.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),(0,v.jsx)(l.Z,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Login in to your account"})]})}),(0,v.jsx)(s.ZP,{item:!0,sx:{mb:{xs:3,sm:0}},children:(0,v.jsx)(r.rU,{to:"#","aria-label":"theme-logo",children:(0,v.jsx)(h.Z,{})})})]})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(p.Z,{loginProp:1})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(d.Z,{})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(s.ZP,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:12,children:(0,v.jsx)(l.Z,{component:r.rU,to:"/pages/register/register1",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})}),(0,v.jsx)(s.ZP,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:(0,v.jsx)(x.Z,{children:(0,v.jsxs)(s.ZP,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[(0,v.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,v.jsx)("span",{}),(0,v.jsx)(j,{})]}),(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(s.ZP,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:(0,v.jsx)(s.ZP,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:(0,v.jsx)(Z.Z,{items:b})})})})]})})})]})})}},10237:function(e,t,n){var r=n(64836);t.Z=void 0;var i=r(n(45045)),o=n(46417),a=(0,i.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=a},22611:function(e,t,n){var r=n(64836);t.Z=void 0;var i=r(n(45045)),o=n(46417),a=(0,i.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=a},44758:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),i=n(63366),o=n(87462),a=n(47313),s=n(83061),c=n(21921),l=n(17551),d=n(97423),u=n(54750),m=n(46417),p=(0,u.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),Z=n(91615),f=n(77342),g=n(17592),v=n(77430),j=n(32298);function b(e){return(0,j.Z)("MuiCheckbox",e)}var w=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,g.ZP)(d.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,Z.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,o.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,r.Z)(t,"&.".concat(w.checked,", &.").concat(w.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,r.Z)(t,"&.".concat(w.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),P=(0,m.jsx)(h,{}),C=(0,m.jsx)(p,{}),S=(0,m.jsx)(x,{}),z=a.forwardRef((function(e,t){var n,r,l=(0,f.Z)({props:e,name:"MuiCheckbox"}),d=l.checkedIcon,u=void 0===d?P:d,p=l.color,h=void 0===p?"primary":p,x=l.icon,g=void 0===x?C:x,v=l.indeterminate,j=void 0!==v&&v,w=l.indeterminateIcon,z=void 0===w?S:w,I=l.inputProps,B=l.size,M=void 0===B?"medium":B,D=l.className,H=(0,i.Z)(l,k),R=j?z:g,V=j?z:u,E=(0,o.Z)({},l,{color:h,indeterminate:j,size:M}),F=function(e){var t=e.classes,n=e.indeterminate,r=e.color,i={root:["root",n&&"indeterminate","color".concat((0,Z.Z)(r))]},a=(0,c.Z)(i,b,t);return(0,o.Z)({},t,a)}(E);return(0,m.jsx)(y,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":j},I),icon:a.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:M}),checkedIcon:a.cloneElement(V,{fontSize:null!=(r=V.props.fontSize)?r:M}),ownerState:E,ref:t,className:(0,s.default)(F.root,D)},H,{classes:F}))}))}}]);