"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[9774],{22889:function(e,t,i){var a=i(47313);t.Z=function(){var e=(0,a.useRef)(!0);return(0,a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},95341:function(e,t,i){i.r(t),i.d(t,{default:function(){return ue}});var a=i(1413),n=i(29439),r=i(4942),s=i(47313),o=i(17592),l=i(19860),c=i(73428),d=i(93405),m=i(16957),p=i(9019),h=i(61113),u=i(57829),f=i(38743),g=i(90891),x=i(63585),v=i(32054),Z=i(12401),j=i(25486),b=i(74165),y=i(15861),k=i(36459),P=i(1550),A=i(15103),w=i(49914),S=i(24193),M=i(15480),B=i(77863),O=i(79429),z=i(3463),K=i(33711),C=i(66182),E=i(22889),D=i(5866),q=i(46417),I=function(e){var t=Object.assign({},((0,k.Z)(e),e)),i=(0,E.Z)(),n=(0,B.I0)();return(0,q.jsx)(O.J9,{initialValues:{email:"",submit:null},validationSchema:z.Ry().shape({email:z.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,y.Z)((0,b.Z)().mark((function e(t,a){var r,s,o,l;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setErrors,s=a.setStatus,o=a.setSubmitting,e.prev=1,l={headers:{"content-type":"application/json"}},e.next=5,K.Z.post("https://yourapicall",{email:t.email},l);case 5:n((0,D.ss)({open:!0,message:"Success! Please check inbox and confirm.",variant:"alert",alert:{color:"success"},close:!1})),i.current&&(s({success:!0}),o(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i.current&&(s({success:!1}),r({submit:null===e.t0||void 0===e.t0?void 0:e.t0.message}),o(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,i){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,n=e.handleBlur,r=e.handleChange,s=e.handleSubmit,o=e.isSubmitting,l=e.touched,c=e.values;return(0,q.jsxs)("form",(0,a.Z)((0,a.Z)({noValidate:!0,onSubmit:s},t),{},{children:[(0,q.jsxs)(p.ZP,{container:!0,alignItems:"center",spacing:Z.dv,children:[(0,q.jsx)(p.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,q.jsxs)(P.Z,{fullWidth:!0,error:Boolean(l.email&&i.email),children:[(0,q.jsx)(A.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),(0,q.jsx)(w.Z,{id:"outlined-adornment-email-forgot",type:"email",defaultValue:c.email,name:"email",onBlur:n,onChange:r,label:"Email Address"})]})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(C.Z,{children:(0,q.jsx)(S.Z,{disableElevation:!0,disabled:o,type:"submit",variant:"contained",size:"large",sx:{px:2.75,py:1.5},children:"Subscribe"})})})]}),l.email&&i.email&&(0,q.jsx)(u.Z,{sx:{mt:1},children:(0,q.jsx)(M.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})}),i.submit&&(0,q.jsx)(u.Z,{sx:{mt:3},children:(0,q.jsx)(M.Z,{error:!0,children:i.submit})})]}))}})},L=i(44021),R=i.p+"static/media/img-slider-layout1.29d04eeb42d2544eace5.png",Y=i.p+"static/media/img-slider-layout2.1f0d0963731b96833ca4.png",T=i.p+"static/media/img-slider-layout3.fd5936f0c719cf635fea.png",U=function(e){var t=e.item;return(0,q.jsx)(p.ZP,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(m.Z,{component:"img",image:t.image,title:"Slider5 image"})})})},G=function(e){var t=e.handleClickOpen,i=[{image:R},{image:Y},{image:T}];return(0,q.jsx)(L.Z,(0,a.Z)((0,a.Z)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:i.map((function(e,i){return(0,q.jsx)(g.Z,{href:"#",variant:"inherit",component:"div",sx:{cursor:"pointer"},onClick:function(){return t(i)},children:(0,q.jsx)(U,{item:e})},i)}))}))},H=i(1834),Q=i(75579),V=i(30040),F=i(68913),N=i(13241),X=i(83962);var J=i.p+"static/media/logo.0cdd96fa79329152ca0dc1be9842add1.svg";var W=i.p+"static/media/logo-dark.89b5052cbece3a72bf1653ab2e20fcfd.svg";var _=i.p+"static/media/img-soon-bg.9fe6491575c045fabb7435e0838b6516.svg";var $=i.p+"static/media/img-soon-bg-grid.507433b0fd64b7735d4aa7ebb9f40966.svg";var ee=i.p+"static/media/img-soon-bg-grid-dark.dcc850105ec54ec50462bffc218e1a6e.svg";var te=i.p+"static/media/img-soon-2.8eea516f894b754a338dc935ddab6040.svg";var ie=i.p+"static/media/img-soon-3.f6231670a81320a4332631e4c11af50a.svg";var ae=i.p+"static/media/img-soon-4.aa00a4248acc090f4c5043310ff2755a.svg";var ne=i.p+"static/media/img-soon-5.e2ee046738fa9ca259f1c79c7d1aadbe.svg";var re=i.p+"static/media/img-soon-6.8eb30ab51134c108fa0fe3f2118c7a51.svg";var se=i.p+"static/media/img-soon-7.881726311bcd4476ca4aefa242f62348.svg";var oe=i.p+"static/media/img-soon-8.3c84a925cac4f074e2457e0e47cebb35.svg",le=(0,o.ZP)("div")((function(e){var t,i=e.theme;return t={maxWidth:720,margin:"0 auto",position:"relative"},(0,r.Z)(t,i.breakpoints.down("xl"),{marginTop:30}),(0,r.Z)(t,i.breakpoints.down("md"),{maxWidth:450}),(0,r.Z)(t,i.breakpoints.down("lg"),{display:"none"}),t})),ce=(0,o.ZP)("div")((function(e){var t,i=e.theme;return t={maxWidth:550,margin:"0 0 0 auto"},(0,r.Z)(t,i.breakpoints.down("lg"),{margin:"0 auto"}),(0,r.Z)(t,i.breakpoints.up(1400),{maxWidth:600}),t})),de=(0,o.ZP)(c.Z)((function(e){var t,i=e.theme;return t={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"space-between"},(0,r.Z)(t,i.breakpoints.down("lg"),{display:"block"}),(0,r.Z)(t,i.breakpoints.up(1200),{overflow:"hidden",maxHeight:"100vh"}),(0,r.Z)(t,i.breakpoints.up(1400),{alignItems:"center"}),t})),me=(0,o.ZP)("div")((function(e){var t=e.theme;return{borderRadius:"8px",width:"calc(100% - 40px)",marginLeft:40,height:"calc(100% - 40px)",position:"absolute",left:0,background:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light}})),pe=(0,o.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",zIndex:3}),he=(0,o.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"5s wings ease-in-out infinite",zIndex:5,"&:nth-of-type(3)":{animationDelay:"2s"},"&:nth-of-type(4)":{animationDelay:"1s"},"&:nth-of-type(5)":{animationDelay:"3s"},"&:nth-of-type(9)":{animationDelay:"5s"},"&:nth-of-type(10)":{animationDelay:"6s"},"&:nth-of-type(7)":{animation:"3s blink ease-in-out infinite",animationDelay:"1s"},"&:nth-of-type(6)":{animation:"3s blink ease-in-out infinite",animationDelay:"2s"}}),ue=function(){var e=(0,l.Z)(),t=(0,j.Z)().rtlLayout,i=s.useState(0),r=(0,n.Z)(i,2),o=r[0],c=r[1],b=s.useState(!1),y=(0,n.Z)(b,2),k=y[0],P=y[1],A=[R,Y,T];return(0,q.jsxs)(de,{children:[(0,q.jsxs)(d.Z,{sx:{p:0},children:[(0,q.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,q.jsx)(m.Z,{component:"img",image:_,title:"Slider5 image",sx:{position:"absolute",bottom:-40,left:50,width:400,transform:"rotate(145deg)"}}),"light"===e.palette.mode&&(0,q.jsx)("img",{src:J,alt:"Berry",width:"100",style:{position:t?"relative":"initial",top:t?30:"initial"}}),"dark"===e.palette.mode&&(0,q.jsx)("img",{src:W,alt:"Berry",width:"100",style:{position:t?"relative":"initial",top:t?30:"initial"}})]}),(0,q.jsx)(p.ZP,{container:!0,spacing:Z.dv,children:(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(le,{children:[(0,q.jsx)(m.Z,{component:"img",image:_,title:"Slider5 image",sx:{position:"relative",zIndex:1}}),(0,q.jsx)(pe,{src:"dark"===e.palette.mode?ee:$,title:"Slider5 image"}),(0,q.jsx)(he,{src:te,title:"Slider5 image"}),(0,q.jsx)(he,{src:ie,title:"Slider5 image"}),(0,q.jsx)(he,{src:ae,title:"Slider5 image"}),(0,q.jsx)(he,{src:ne,title:"Slider5 image"}),(0,q.jsx)(he,{src:re,title:"Slider5 image"}),(0,q.jsx)(he,{src:se,title:"Slider5 image"}),(0,q.jsx)(he,{src:oe,title:"Slider5 image"})]})})})]}),(0,q.jsx)(d.Z,{sx:{padding:{xs:3,xl:10},margin:"0 auto"},children:(0,q.jsx)(p.ZP,{container:!0,spacing:Z.dv,children:(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsx)(ce,{children:(0,q.jsxs)(p.ZP,{container:!0,spacing:Z.dv,children:[(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsx)(h.Z,{variant:"h2",component:"div",color:"primary",children:"Coming Soon"})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsx)(h.Z,{variant:"h1",component:"div",children:"Berry - The React Admin Template"})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsx)(h.Z,{sx:{fontSize:"1.125rem"},children:"Presenting Material-UI based React Dashboard Template to build performance centric websites and applications."})})]})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(p.ZP,{container:!0,spacing:Z.dv,children:[(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,q.jsx)(Q.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Flexible & Fast"]})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,q.jsx)(Q.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Material UI"]})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,q.jsx)(Q.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Javascript / Typescript"]})})]})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsx)(I,{})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:Z.dv,children:[(0,q.jsxs)(p.ZP,{item:!0,xs:12,sm:6,sx:{position:"relative"},children:[(0,q.jsx)(me,{}),(0,q.jsx)(u.Z,{sx:{width:"calc(100% - 20px)",mt:2.5,boxShadow:"0px 45px 45px rgba(30, 136, 229, 0.2)",borderRadius:"8px",overflow:"hidden"},children:(0,q.jsx)(G,{handleClickOpen:function(e){P(!0),c(e)}})}),k&&(0,q.jsx)(v.Z,{mainSrc:A[o],nextSrc:A[(o+1)%A.length],prevSrc:A[(o+A.length-1)%A.length],onCloseRequest:function(){return P(!1)},onMovePrevRequest:function(){return c((o+A.length-1)%A.length)},onMoveNextRequest:function(){return c((o+1)%A.length)}})]}),(0,q.jsx)(p.ZP,{item:!0,xs:12,sm:6,sx:{position:"relative"},children:(0,q.jsxs)(p.ZP,{container:!0,justifyContent:"space-between",spacing:Z.dv,children:[(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(p.ZP,{container:!0,justifyContent:"flex-end",spacing:1,children:[(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(f.Z,{component:g.Z,href:"https://links.codedthemes.com/HTIBc",target:"_blank","aria-label":"blog",children:(0,q.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.secondary.light,color:"dark"===e.palette.mode?e.palette.secondary.main:e.palette.secondary.dark}),children:(0,q.jsx)(X.Z,{})})})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(f.Z,{component:g.Z,href:"https://www.facebook.com/codedthemes",target:"_blank","aria-label":"facebook",children:(0,q.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.primary.light,color:"dark"===e.palette.mode?e.palette.primary.main:e.palette.primary.dark}),children:(0,q.jsx)(V.Z,{})})})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(f.Z,{component:g.Z,href:"https://twitter.com/codedthemes",target:"_blank","aria-label":"twitter",children:(0,q.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.warning.light,color:(e.palette.mode,e.palette.warning.dark)}),children:(0,q.jsx)(F.Z,{})})})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(f.Z,{component:g.Z,href:"https://github.com/codedthemes",target:"_blank","aria-label":"github",children:(0,q.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.grey[200],color:"dark"===e.palette.mode?e.palette.dark.light:e.palette.grey[800]}),children:(0,q.jsx)(N.Z,{})})})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(f.Z,{component:g.Z,href:"https://dribbble.com/codedthemes",target:"_blank","aria-label":"dribble",children:(0,q.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:"grey.100",color:"dark"===e.palette.mode?"grey.600":"grey.500"}),children:(0,q.jsx)(H.Ps0,{})})})})]})}),(0,q.jsx)(p.ZP,{item:!0,xs:12,children:(0,q.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:1,children:[(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)(h.Z,{variant:"body1",align:"right",component:"div",children:"Project By"})}),(0,q.jsx)(p.ZP,{item:!0,children:(0,q.jsx)("img",{src:"data:image/png;base64,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",alt:"Berry",width:"128"})})]})})]})})]})})]})})})})})]})}},83962:function(e,t,i){var a=i(64836);t.Z=void 0;var n=a(i(45045)),r=i(46417),s=(0,n.default)((0,r.jsx)("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}),"Book");t.Z=s},30040:function(e,t,i){var a=i(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=s(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a)}(i(47313));var n=a(i(45045)),r=i(46417);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(s=function(e){return e?i:t})(e)}var o=(0,n.default)((0,r.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=o},75579:function(e,t,i){var a=i(64836);t.Z=void 0;var n=a(i(45045)),r=i(46417),s=(0,n.default)([(0,r.jsx)("path",{d:"M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"},"1")],"FiberManualRecordTwoTone");t.Z=s},13241:function(e,t,i){var a=i(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=s(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a)}(i(47313));var n=a(i(45045)),r=i(46417);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(s=function(e){return e?i:t})(e)}var o=(0,n.default)((0,r.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=o},68913:function(e,t,i){var a=i(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=s(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a)}(i(47313));var n=a(i(45045)),r=i(46417);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(s=function(e){return e?i:t})(e)}var o=(0,n.default)((0,r.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=o}}]);