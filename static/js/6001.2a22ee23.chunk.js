"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[6001],{22903:function(e,i,t){var n=t(19860),a=t(49709),r=t(38743),l=t(90891),s=t(89535),o=t(46417);i.Z=function(e){var i=e.title,t=e.link,c=e.icon,d=(0,n.Z)();return(0,o.jsx)(a.Z,{title:i||"Reference",placement:"left",children:(0,o.jsxs)(r.Z,{disableRipple:!0,children:[!c&&(0,o.jsx)(s.Z,{component:l.Z,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0",children:(0,o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&(0,o.jsx)(s.Z,{component:l.Z,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:c})]})})}},89535:function(e,i,t){var n=t(1413),a=t(45987),r=t(19860),l=t(63585),s=t(46417),o=["color","outline","size","sx"];i.Z=function(e){var i=e.color,t=e.outline,c=e.size,d=e.sx,u=(0,a.Z)(e,o),p=(0,r.Z)(),m=i&&!t&&{color:p.palette.background.paper,bgcolor:"".concat(i,".main")},h=t&&{color:i?"".concat(i,".main"):"primary.main",bgcolor:p.palette.background.paper,border:"2px solid",borderColor:i?"".concat(i,".main"):"primary.main"},x={};switch(c){case"badge":x={width:p.spacing(3.5),height:p.spacing(3.5)};break;case"xs":x={width:p.spacing(4.25),height:p.spacing(4.25)};break;case"sm":x={width:p.spacing(5),height:p.spacing(5)};break;case"lg":x={width:p.spacing(9),height:p.spacing(9)};break;case"xl":x={width:p.spacing(10.25),height:p.spacing(10.25)};break;case"md":x={width:p.spacing(7.5),height:p.spacing(7.5)};break;default:x={}}return(0,s.jsx)(l.Z,(0,n.Z)({sx:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},m),h),x),d)},u))}},46001:function(e,i,t){t.r(i),t.d(i,{default:function(){return S}});var n=t(29439),a=t(75192),r=t.n(a),l=t(47313),s=t(47131),o=t(93405),c=t(61113),d=t(19536),u=t(56104),p=t(9019),m=t(24193),h=t(10387),x=t(33497),f=t(11198),g=t(46417);function Z(){return Math.round(20*Math.random())-10}function b(){var e=50+Z(),i=50+Z();return{top:"".concat(e,"%"),left:"".concat(i,"%"),transform:"translate(-".concat(e,"%, -").concat(i,"%)")}}var j=l.forwardRef((function(e,i){var t=e.modalStyle,n=e.handleClose;return(0,g.jsx)("div",{ref:i,tabIndex:-1,children:(0,g.jsxs)(x.Z,{style:t,sx:{position:"absolute",width:{xs:280,lg:450},top:"50%",left:"50%",transform:"translate(-50%, -50%)"},title:"Title",content:!1,secondary:(0,g.jsx)(s.Z,{onClick:n,size:"large",children:(0,g.jsx)(f.Z,{fontSize:"small"})}),children:[(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(c.Z,{variant:"body1",children:"Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex."}),(0,g.jsx)(c.Z,{variant:"body2",sx:{mt:2},children:"Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in."})]}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(v,{})})]})})}));function v(){var e=l.useState(b),i=(0,n.Z)(e,1)[0],t=l.useState(!1),a=(0,n.Z)(t,2),r=a[0],s=a[1],o=function(){s(!1)};return(0,g.jsxs)(p.ZP,{container:!0,justifyContent:"flex-end",children:[(0,g.jsx)(m.Z,{variant:"contained",type:"button",onClick:function(){s(!0)},children:"Open Modal"}),(0,g.jsx)(h.Z,{open:r,onClose:o,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:(0,g.jsx)(j,{modalStyle:i,handleClose:o})})]})}j.propTypes={modalStyle:r().object,handleClose:r().func};var y=(0,t(17592).ZP)("div")({marginBottom:16,height:500,flexGrow:1,minWidth:300,zIndex:-1,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}});function w(){var e=l.useRef(null);return(0,g.jsx)(y,{ref:e,children:(0,g.jsx)(h.Z,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",sx:{display:"flex",p:1,alignItems:"center",justifyContent:"center"},container:function(){return e.current},children:(0,g.jsxs)(x.Z,{sx:{width:450,zIndex:1},title:"Server Side Modal",content:!1,secondary:(0,g.jsx)(s.Z,{size:"large",children:(0,g.jsx)(f.Z,{fontSize:"small"})}),children:[(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(c.Z,{variant:"body1",children:"Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex."}),(0,g.jsx)(c.Z,{variant:"body2",sx:{mt:2},children:"Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in."})]}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(p.ZP,{container:!0,justifyContent:"flex-end",children:(0,g.jsx)(m.Z,{variant:"contained",type:"button",children:"Open Modal"})})})]})})})}var L=t(22903),S=function(){return(0,g.jsxs)(x.Z,{title:"Simple Modal",secondary:(0,g.jsx)(L.Z,{link:"https://next.material-ui.com/components/modal/"}),children:[(0,g.jsx)(w,{}),(0,g.jsx)(v,{})]})}},56104:function(e,i,t){t.d(i,{Z:function(){return f}});var n=t(63366),a=t(87462),r=t(47313),l=t(83061),s=t(21921),o=t(17592),c=t(77342),d=t(77430),u=t(32298);function p(e){return(0,u.Z)("MuiCardActions",e)}(0,d.Z)("MuiCardActions",["root","spacing"]);var m=t(46417),h=["disableSpacing","className"],x=(0,o.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,i){var t=e.ownerState;return[i.root,!t.disableSpacing&&i.spacing]}})((function(e){var i=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!i.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(e,i){var t=(0,c.Z)({props:e,name:"MuiCardActions"}),r=t.disableSpacing,o=void 0!==r&&r,d=t.className,u=(0,n.Z)(t,h),f=(0,a.Z)({},t,{disableSpacing:o}),g=function(e){var i=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(t,p,i)}(f);return(0,m.jsx)(x,(0,a.Z)({className:(0,l.default)(g.root,d),ownerState:f,ref:i},u))}))}}]);