"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[909],{22903:function(e,r,n){var i=n(19860),t=n(49709),a=n(38743),s=n(90891),l=n(89535),c=n(46417);r.Z=function(e){var r=e.title,n=e.link,o=e.icon,d=(0,i.Z)();return(0,c.jsx)(t.Z,{title:r||"Reference",placement:"left",children:(0,c.jsxs)(a.Z,{disableRipple:!0,children:[!o&&(0,c.jsx)(l.Z,{component:s.Z,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&(0,c.jsx)(l.Z,{component:s.Z,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:o})]})})}},1759:function(e,r,n){var i=n(1413),t=n(45987),a=n(47313),s=n(19860),l=n(73428),c=n(54641),o=n(61113),d=n(19536),x=n(93405),h=n(46417),Z=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],m=a.forwardRef((function(e,r){var n=e.children,a=e.content,m=e.contentClass,j=e.darkTitle,u=e.secondary,v=e.sx,p=void 0===v?{}:v,g=e.contentSX,f=void 0===g?{}:g,P=e.title,b=(0,t.Z)(e,Z),y=(0,s.Z)();return(0,h.jsxs)(l.Z,(0,i.Z)((0,i.Z)({ref:r,sx:(0,i.Z)({border:"1px solid",borderColor:"dark"===y.palette.mode?y.palette.dark.light+15:y.palette.grey[200],":hover":{boxShadow:"dark"===y.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},p)},b),{},{children:[!j&&P&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(o.Z,{variant:"h5",children:P}),action:u}),j&&P&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(o.Z,{variant:"h4",children:P}),action:u}),P&&(0,h.jsx)(d.Z,{sx:{opacity:1,borderColor:"dark"===y.palette.mode?y.palette.dark.light+15:y.palette.grey[200]}}),a&&(0,h.jsx)(x.Z,{sx:(0,i.Z)({p:2.5},f),className:m||"",children:n}),!a&&n]}))}));m.defaultProps={content:!0},r.Z=m},60909:function(e,r,n){n.r(r);var i=n(29439),t=n(4942),a=n(1413),s=n(45987),l=n(47313),c=n(17592),o=n(19860),d=n(57829),x=n(85281),h=n(61113),Z=n(94149),m=n(9019),j=n(66598),u=n(1759),v=n(33497),p=n(22903),g=n(12401),f=n(46417),P=["value"],b=["value"];function y(e){var r=e.value,n=(0,s.Z)(e,P);return(0,f.jsxs)(d.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,f.jsx)(x.Z,(0,a.Z)({variant:"determinate",value:r},n)),(0,f.jsx)(d.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)(h.Z,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(r),"%")})})]})}function k(e){var r=e.value,n=(0,s.Z)(e,b);return(0,f.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(d.Z,{sx:{width:"100%",mr:1},children:(0,f.jsx)(Z.Z,(0,a.Z)({variant:"determinate",value:r},n))}),(0,f.jsx)(d.Z,{sx:{minWidth:35},children:(0,f.jsx)(h.Z,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(r),"%")})})]})}var C=(0,c.ZP)(Z.Z)((function(){return(0,t.Z)({height:10,borderRadius:5},"& .".concat(j.Z.bar),{borderRadius:5})}));r.default=function(){var e=(0,o.Z)(),r=l.useState(0),n=(0,i.Z)(r,2),t=n[0],a=n[1],s=l.useState(10),c=(0,i.Z)(s,2),d=c[0],j=c[1],P=l.useRef((function(){}));return l.useEffect((function(){P.current=function(){if(t>100)a(0),j(10);else{var e=10*Math.random(),r=10*Math.random();a(t+e),j(t+e+r)}}})),l.useEffect((function(){var e=setInterval((function(){P.current()}),500);return function(){clearInterval(e)}}),[]),(0,f.jsx)(v.Z,{title:"Progress",secondary:(0,f.jsx)(p.Z,{link:"https://next.material-ui.com/components/progress/"}),children:(0,f.jsxs)(m.ZP,{container:!0,spacing:g.dv,children:[(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,f.jsx)(u.Z,{title:"Circular Indeterminate",children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{"aria-label":"progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{color:"secondary","aria-label":"progress with secondary color"})})]})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,f.jsx)(u.Z,{title:"Circular Determinate",children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:25,"aria-label":"progress 25%"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:50,"aria-label":"progress 50%"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:75,"aria-label":"progress 75%"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:100,"aria-label":"progress 100%"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:50,"aria-label":"progress 25%"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(x.Z,{variant:"determinate",value:t,"aria-label":"determinate progress"})})]})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,f.jsx)(u.Z,{title:"Circular Label",children:(0,f.jsx)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(y,{value:t,"aria-label":"Circular progress"})})})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Linear Indeterminate",children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,xs:12,children:(0,f.jsx)(Z.Z,{"aria-label":"progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,children:(0,f.jsx)(Z.Z,{color:"secondary","aria-label":"secondary progress"})})]})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Linear Label",children:(0,f.jsx)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,f.jsx)(m.ZP,{item:!0,xs:12,children:(0,f.jsx)(k,{value:t,"aria-label":"linear progress"})})})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Linear Determinate",children:(0,f.jsx)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,f.jsx)(m.ZP,{item:!0,xs:12,children:(0,f.jsx)(Z.Z,{variant:"determinate",value:t,"aria-label":"linear secondary progress"})})})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Linear Buffer",children:(0,f.jsx)(m.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,f.jsx)(m.ZP,{item:!0,xs:12,children:(0,f.jsx)(Z.Z,{variant:"buffer",value:t,valueBuffer:d,"aria-label":"Buffer progress"})})})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Color",children:(0,f.jsxs)(m.ZP,{container:!0,direction:"column",spacing:3,children:[(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,children:(0,f.jsx)(Z.Z,{variant:"determinate",color:"secondary",value:t,"aria-label":"secondary color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:(0,f.jsx)(Z.Z,{color:"inherit",variant:"determinate",value:t,"aria-label":"success color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:(0,f.jsx)(Z.Z,{color:"inherit",variant:"determinate",value:t,"aria-label":"danger color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:(0,f.jsx)(Z.Z,{color:"inherit",variant:"determinate",value:t,"aria-label":"warning color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:(0,f.jsx)(Z.Z,{color:"inherit",variant:"determinate",value:t,"aria-label":"info color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})})]})})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(u.Z,{title:"Color With Height",children:(0,f.jsxs)(m.ZP,{container:!0,direction:"column",spacing:3,children:[(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,children:(0,f.jsx)(C,{variant:"determinate",color:"secondary",value:t,"aria-label":"secondary color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:(0,f.jsx)(C,{color:"inherit",variant:"determinate",value:t,"aria-label":"success color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:(0,f.jsx)(C,{color:"inherit",variant:"determinate",value:t,"aria-label":"danger color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:(0,f.jsx)(C,{color:"inherit",variant:"determinate",value:t,"aria-label":"warning color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,f.jsx)(m.ZP,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:(0,f.jsx)(C,{color:"inherit",variant:"determinate",value:t,"aria-label":"info color progress"})}),(0,f.jsx)(m.ZP,{item:!0,children:(0,f.jsxs)(h.Z,{variant:"h6",children:[Math.round(t),"%"]})})]})})]})})})]})})}},85281:function(e,r,n){n.d(r,{Z:function(){return R}});var i=n(30168),t=n(63366),a=n(87462),s=n(47313),l=n(83061),c=n(21921),o=n(30686),d=n(91615),x=n(77342),h=n(17592),Z=n(77430),m=n(32298);function j(e){return(0,m.Z)("MuiCircularProgress",e)}(0,Z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var u,v,p,g,f,P,b,y,k=n(46417),C=["className","color","disableShrink","size","style","thickness","value","variant"],w=44,M=(0,o.F4)(f||(f=u||(u=(0,i.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),S=(0,o.F4)(P||(P=v||(v=(0,i.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),L=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,d.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,o.iv)(b||(b=p||(p=(0,i.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),M)})),I=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),V=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,d.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,o.iv)(y||(y=g||(g=(0,i.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),S)})),R=s.forwardRef((function(e,r){var n=(0,x.Z)({props:e,name:"MuiCircularProgress"}),i=n.className,s=n.color,o=void 0===s?"primary":s,h=n.disableShrink,Z=void 0!==h&&h,m=n.size,u=void 0===m?40:m,v=n.style,p=n.thickness,g=void 0===p?3.6:p,f=n.value,P=void 0===f?0:f,b=n.variant,y=void 0===b?"indeterminate":b,M=(0,t.Z)(n,C),S=(0,a.Z)({},n,{color:o,disableShrink:Z,size:u,thickness:g,value:P,variant:y}),R=function(e){var r=e.classes,n=e.variant,i=e.color,t=e.disableShrink,a={root:["root",n,"color".concat((0,d.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(n)),t&&"circleDisableShrink"]};return(0,c.Z)(a,j,r)}(S),D={},N={},_={};if("determinate"===y){var z=2*Math.PI*((w-g)/2);D.strokeDasharray=z.toFixed(3),_["aria-valuenow"]=Math.round(P),D.strokeDashoffset="".concat(((100-P)/100*z).toFixed(3),"px"),N.transform="rotate(-90deg)"}return(0,k.jsx)(L,(0,a.Z)({className:(0,l.default)(R.root,i),style:(0,a.Z)({width:u,height:u},N,v),ownerState:S,ref:r,role:"progressbar"},_,M,{children:(0,k.jsx)(I,{className:R.svg,ownerState:S,viewBox:"".concat(22," ").concat(22," ").concat(w," ").concat(w),children:(0,k.jsx)(V,{className:R.circle,style:D,ownerState:S,cx:w,cy:w,r:(w-g)/2,fill:"none",strokeWidth:g})})}))}))}}]);