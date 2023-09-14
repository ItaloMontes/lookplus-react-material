"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[3612],{22903:function(e,t,i){var r=i(19860),n=i(49709),a=i(38743),l=i(90891),s=i(89535),c=i(46417);t.Z=function(e){var t=e.title,i=e.link,d=e.icon,o=(0,r.Z)();return(0,c.jsx)(n.Z,{title:t||"Reference",placement:"left",children:(0,c.jsxs)(a.Z,{disableRipple:!0,children:[!d&&(0,c.jsx)(s.Z,{component:l.Z,href:i,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),d&&(0,c.jsx)(s.Z,{component:l.Z,href:i,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:d})]})})}},1759:function(e,t,i){var r=i(1413),n=i(45987),a=i(47313),l=i(19860),s=i(73428),c=i(54641),d=i(61113),o=i(19536),x=i(93405),h=i(46417),Z=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],j=a.forwardRef((function(e,t){var i=e.children,a=e.content,j=e.contentClass,m=e.darkTitle,p=e.secondary,u=e.sx,g=void 0===u?{}:u,b=e.contentSX,v=void 0===b?{}:b,P=e.title,k=(0,n.Z)(e,Z),f=(0,l.Z)();return(0,h.jsxs)(s.Z,(0,r.Z)((0,r.Z)({ref:t,sx:(0,r.Z)({border:"1px solid",borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200],":hover":{boxShadow:"dark"===f.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},g)},k),{},{children:[!m&&P&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(d.Z,{variant:"h5",children:P}),action:p}),m&&P&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(d.Z,{variant:"h4",children:P}),action:p}),P&&(0,h.jsx)(o.Z,{sx:{opacity:1,borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200]}}),a&&(0,h.jsx)(x.Z,{sx:(0,r.Z)({p:2.5},v),className:j||"",children:i}),!a&&i]}))}));j.defaultProps={content:!0},t.Z=j},14694:function(e,t,i){var r=i(29439),n=i(47313),a=i(19860),l=i(73428),s=i(9019),c=i(47131),d=i(16759),o=i(51405),x=i(61113),h=i(24193),Z=i(12401),j=i(89535),m=i(38398),p=i(89533),u=i(81208),g=i(46417),b=i(5242);t.Z=function(e){var t=e.about,i=e.avatar,v=e.contact,P=e.email,k=e.location,f=e.name,y=e.role,C=(0,a.Z)(),S=i&&b("./".concat(i)),w=(0,n.useState)(null),T=(0,r.Z)(w,2),z=T[0],M=T[1],W=function(){M(null)};return(0,g.jsx)(l.Z,{sx:{p:2,background:"dark"===C.palette.mode?C.palette.dark.main:C.palette.grey[50],border:"dark"===C.palette.mode?"1px solid transparent":"1px solid".concat(C.palette.grey[100]),"&:hover":{borderColor:C.palette.primary.main}},children:(0,g.jsxs)(s.ZP,{container:!0,spacing:Z.dv,children:[(0,g.jsx)(s.ZP,{item:!0,xs:12,children:(0,g.jsxs)(s.ZP,{container:!0,spacing:Z.dv,children:[(0,g.jsx)(s.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,g.jsx)(j.Z,{alt:f,size:"lg",src:S})}),(0,g.jsxs)(s.ZP,{item:!0,children:[(0,g.jsx)(c.Z,{size:"small",sx:{mt:-.75,mr:-.75},onClick:function(e){M(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,g.jsx)(m.Z,{fontSize:"small",color:"inherit","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),z&&(0,g.jsxs)(d.Z,{id:"menu-user-details-card",anchorEl:z,keepMounted:!0,open:Boolean(z),onClose:W,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,g.jsx)(o.Z,{onClick:W,children:"Edit"}),(0,g.jsx)(o.Z,{onClick:W,children:"Delete"})]})]})]})}),(0,g.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,g.jsx)(x.Z,{variant:"h3",component:"div",children:f}),(0,g.jsx)(x.Z,{variant:"caption",children:y})]}),(0,g.jsx)(s.ZP,{item:!0,xs:12,children:(0,g.jsx)(x.Z,{variant:"subtitle2",sx:{color:C.palette.grey[700]},children:t})}),(0,g.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,g.jsx)(x.Z,{variant:"caption",children:"Email"}),(0,g.jsx)(x.Z,{variant:"h6",children:P})]}),(0,g.jsx)(s.ZP,{item:!0,xs:12,children:(0,g.jsxs)(s.ZP,{container:!0,spacing:Z.dv,children:[(0,g.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,g.jsx)(x.Z,{variant:"caption",children:"Phone"}),(0,g.jsx)(x.Z,{variant:"h6",children:v})]}),(0,g.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,g.jsx)(x.Z,{variant:"caption",children:"Location"}),(0,g.jsx)(x.Z,{variant:"h6",children:k})]})]})}),(0,g.jsx)(s.ZP,{item:!0,xs:12,children:(0,g.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,g.jsx)(s.ZP,{item:!0,xs:6,children:(0,g.jsx)(h.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,g.jsx)(u.Z,{}),children:"Message"})}),(0,g.jsx)(s.ZP,{item:!0,xs:6,children:(0,g.jsx)(h.Z,{variant:"outlined",color:"error",fullWidth:!0,startIcon:(0,g.jsx)(p.Z,{}),children:"Block"})})]})})]})})}},38222:function(e,t,i){var r=i(17592),n=i(19860),a=i(24193),l=i(73428),s=i(16957),c=i(93405),d=i(9019),o=i(61113),x=i(66212),h=i(89535),Z=i(12401),j=i(30040),m=i(68913),p=i(37186),u=i(81208),g=i(46417),b=i(5242),v=i(96385),P=(0,r.ZP)(a.Z)({padding:8,background:"rgba(66, 103, 178, 0.2)","& svg":{color:"#4267B2"},"&:hover":{background:"#4267B2","& svg":{color:"#fff"}}}),k=(0,r.ZP)(a.Z)({padding:8,background:"rgba(29, 161, 242, 0.2)","& svg":{color:"#1DA1F2"},"&:hover":{background:"#1DA1F2","& svg":{color:"#fff"}}}),f=(0,r.ZP)(a.Z)({padding:8,background:"rgba(14, 118, 168, 0.12)","& svg":{color:"#0E76A8"},"&:hover":{background:"#0E76A8","& svg":{color:"#fff"}}});t.Z=function(e){var t=e.avatar,i=e.name,r=e.profile,y=e.role,C=e.status,S=(0,n.Z)(),w=t&&b("./".concat(t)),T=r&&v("./".concat(r));return(0,g.jsxs)(l.Z,{sx:{background:"dark"===S.palette.mode?S.palette.dark.main:S.palette.grey[50],border:"dark"===S.palette.mode?"none":"1px solid",borderColor:S.palette.grey[100],textAlign:"center"},children:[(0,g.jsx)(s.Z,{component:"img",image:T,title:"Slider5 image",sx:{height:"125px"}}),(0,g.jsx)(c.Z,{sx:{p:2,pb:"16px !important"},children:(0,g.jsxs)(d.ZP,{container:!0,spacing:Z.dv,children:[(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(d.ZP,{container:!0,spacing:Z.dv,children:(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(h.Z,{alt:i,src:w,sx:{width:72,height:72,m:"-50px auto 0"}})})})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,alignItems:"center",children:(0,g.jsxs)(d.ZP,{container:!0,spacing:1,children:[(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(o.Z,{variant:"h4",children:i})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(o.Z,{variant:"body2",children:y})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:"Active"===C?(0,g.jsx)(x.Z,{label:"Active",size:"small",sx:{bgcolor:"dark"===S.palette.mode?S.palette.dark.dark:"success.light",color:"success.dark"}}):(0,g.jsx)(x.Z,{label:"Rejected",size:"small",sx:{bgcolor:"dark"===S.palette.mode?S.palette.dark.dark:"error.light",color:"error.dark"}})})]})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(d.ZP,{item:!0,xs:4,children:(0,g.jsx)(P,{fullWidth:!0,"aria-label":"facebook",children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(d.ZP,{item:!0,xs:4,children:(0,g.jsx)(k,{fullWidth:!0,"aria-label":"twitter",children:(0,g.jsx)(m.Z,{})})}),(0,g.jsx)(d.ZP,{item:!0,xs:4,children:(0,g.jsx)(f,{fullWidth:!0,"aria-label":"linkedin",children:(0,g.jsx)(p.Z,{})})})]})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(a.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,g.jsx)(u.Z,{}),children:"Message"})})]})})]})}},85724:function(e,t,i){var r=i(29439),n=i(47313),a=i(17592),l=i(19860),s=i(24193),c=i(73428),d=i(9019),o=i(47131),x=i(16759),h=i(51405),Z=i(61113),j=i(66212),m=i(89535),p=i(12401),u=i(38398),g=i(30040),b=i(68913),v=i(37186),P=i(46417),k=i(5242),f=(0,a.ZP)(s.Z)({padding:8,background:"rgba(66, 103, 178, 0.2)","& svg":{color:"#4267B2"},"&:hover":{background:"#4267B2","& svg":{color:"#fff"}}}),y=(0,a.ZP)(s.Z)({padding:8,background:"rgba(29, 161, 242, 0.2)","& svg":{color:"#1DA1F2"},"&:hover":{background:"#1DA1F2","& svg":{color:"#fff"}}}),C=(0,a.ZP)(s.Z)({padding:8,background:"rgba(14, 118, 168, 0.12)","& svg":{color:"#0E76A8"},"&:hover":{background:"#0E76A8","& svg":{color:"#fff"}}});t.Z=function(e){var t=e.avatar,i=e.name,a=e.status,s=(0,l.Z)(),S=t&&k("./".concat(t)),w=(0,n.useState)(null),T=(0,r.Z)(w,2),z=T[0],M=T[1],W=function(){M(null)};return(0,P.jsx)(c.Z,{sx:{p:2,background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"1px solid",borderColor:"dark"===s.palette.mode?"transparent":s.palette.grey[100],"&:hover":{border:"1px solid".concat(s.palette.primary.main)}},children:(0,P.jsxs)(d.ZP,{container:!0,spacing:p.dv,children:[(0,P.jsx)(d.ZP,{item:!0,xs:12,children:(0,P.jsxs)(d.ZP,{container:!0,spacing:p.dv,children:[(0,P.jsx)(d.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{alt:i,src:S,sx:{width:72,height:72}})}),(0,P.jsxs)(d.ZP,{item:!0,children:[(0,P.jsx)(o.Z,{size:"small",sx:{mt:-.75,mr:-.75},onClick:function(e){M(e.currentTarget)},"aria-label":"more options",children:(0,P.jsx)(u.Z,{fontSize:"small",color:"inherit","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),(0,P.jsxs)(x.Z,{id:"menu-simple-card",anchorEl:z,keepMounted:!0,open:Boolean(z),onClose:W,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,P.jsx)(h.Z,{onClick:W,children:"Edit"}),(0,P.jsx)(h.Z,{onClick:W,children:"Delete"})]})]})]})}),(0,P.jsx)(d.ZP,{item:!0,xs:12,alignItems:"center",children:(0,P.jsxs)(d.ZP,{container:!0,spacing:p.dv,children:[(0,P.jsx)(d.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(Z.Z,{variant:"h4",children:i})}),(0,P.jsx)(d.ZP,{item:!0,children:"Active"===a?(0,P.jsx)(j.Z,{label:"Active",size:"small",sx:{bgcolor:"dark"===s.palette.mode?s.palette.dark.dark:"success.light",color:"success.dark"}}):(0,P.jsx)(j.Z,{label:"Rejected",size:"small",sx:{bgcolor:"dark"===s.palette.mode?s.palette.dark.dark:"error.light",color:"error.dark"}})})]})}),(0,P.jsx)(d.ZP,{item:!0,xs:12,children:(0,P.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,P.jsx)(d.ZP,{item:!0,xs:4,children:(0,P.jsx)(f,{fullWidth:!0,"aria-label":"facebook",children:(0,P.jsx)(g.Z,{fontSize:"small"})})}),(0,P.jsx)(d.ZP,{item:!0,xs:4,children:(0,P.jsx)(y,{fullWidth:!0,"aria-label":"twitter",children:(0,P.jsx)(b.Z,{fontSize:"small"})})}),(0,P.jsx)(d.ZP,{item:!0,xs:4,children:(0,P.jsx)(C,{fullWidth:!0,"aria-label":"linkedin",children:(0,P.jsx)(v.Z,{fontSize:"small"})})})]})})]})})}},8539:function(e,t,i){i.r(t),i.d(t,{default:function(){return L}});var r=i(1413),n=i(19860),a=i(9019),l=i(73428),s=i(93405),c=i(61113),d=i(56104),o=i(24193),x=i(54641),h=i(19536),Z=i(16957),j=i(14694),m=i(38222),p=i(85724),u=i(82461),g=i(34153),b=i(1759),v=i(33497),P=i(22903),k=i(12401),f=i.p+"static/media/card-1.90dff3a1691bfd0217dc.jpg",y=i.p+"static/media/card-2.a296e0e2cc0d154778b9.jpg",C=i.p+"static/media/card-3.ce408b9a1a666571a771.jpg",S=i(46417),w={id:"#1Card_Phoebe",avatar:"avatar-2.png",name:"Gaetano",role:"Investor Division Strategist",about:"Try to connect the SAS transmitter, maybe it will index the optical hard drive!",email:"alia_shields25@yahoo.com",contact:"253-418-5940",location:"Herminahaven"},T={id:"#9Card_Madyson",avatar:"avatar-5.png",profile:"profile-back-9.png",name:"Madyson",role:"Product Tactics Facilitator",status:"Active"},z={id:"#6Card_Joanne",avatar:"avatar-6.png",name:"Joanne",status:"Active"},M={id:"#4Friends_Henderson",avatar:"avatar-4.png",name:"Henderson",location:"South Antonina"},W={id:"#4Followers_Henderson",avatar:"avatar-8.png",name:"Henderson",location:"South Antonina",follow:1},L=function(){var e=(0,n.Z)(),t={background:"dark"===e.palette.mode?e.palette.dark.main:e.palette.grey[50],border:"1px solid",borderColor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.grey[100]};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.Z,{title:"Cards",secondary:(0,S.jsx)(P.Z,{link:"https://next.material-ui.com/components/cards/"}),children:(0,S.jsxs)(a.ZP,{container:!0,spacing:k.dv,children:[(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Basic Card Style 3",children:(0,S.jsx)(p.Z,(0,r.Z)({},z))})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Basic Card Style 4",children:(0,S.jsx)(g.Z,(0,r.Z)({},M))})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Basic Card Style 5",children:(0,S.jsx)(u.Z,(0,r.Z)({},W))})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Basic Card Style 1",children:(0,S.jsx)(j.Z,(0,r.Z)({},w))})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Basic Card Style 2",children:(0,S.jsx)(m.Z,(0,r.Z)({},T))})})]})}),(0,S.jsx)(v.Z,{title:"Cards",secondary:(0,S.jsx)(P.Z,{link:"https://next.material-ui.com/components/cards/"}),sx:{mt:k.dv},children:(0,S.jsxs)(a.ZP,{container:!0,spacing:k.dv,children:[(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Body Content",children:(0,S.jsx)(l.Z,{sx:t,children:(0,S.jsx)(s.Z,{children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"This is some text within a card body."})})})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Titles, Text, and Links",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.text.dark},children:"Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Card Subtitle"})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})}),(0,S.jsxs)(d.Z,{children:[(0,S.jsx)(o.Z,{variant:"text",children:"Card Link"}),(0,S.jsx)(o.Z,{variant:"text",color:"secondary",children:"Another"})]})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Header and Footer",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(x.Z,{title:"Featured"}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title treatment"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,justifyContent:"flex-end",children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(o.Z,{variant:"contained",children:"Go Somewhere"})})})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Left Align (Default)",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title treatment"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(o.Z,{variant:"contained",children:"Go Somewhere"})})})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Center Align",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title treatment"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,justifyContent:"center",children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(o.Z,{variant:"contained",children:"Go Somewhere"})})})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Right Align",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,justifyContent:"flex-end",alignItems:"flex-end",children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title treatment"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",align:"right",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,justifyContent:"flex-end",children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(o.Z,{variant:"contained",children:"Go Somewhere"})})})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Image Cap",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(Z.Z,{component:"img",image:f,title:"Card 1"}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"caption",children:"Last updated 3 mins ago"})})})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Image Cap",children:(0,S.jsxs)(l.Z,{sx:t,children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",children:"Special title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"caption",children:"Last updated 3 mins ago"})})})}),(0,S.jsx)(Z.Z,{component:"img",image:y,title:"Card 2"})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsx)(b.Z,{title:"Image Overlay",children:(0,S.jsx)(l.Z,{sx:t,children:(0,S.jsxs)(Z.Z,{image:C,title:"Card 3",children:[(0,S.jsx)(s.Z,{sx:{minHeight:240,color:e.palette.common.white},children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Special title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"With supporting text below as a natural lead-in to additional content."})})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(a.ZP,{container:!0,children:(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"caption",children:"Last updated 3 mins ago"})})})})]})})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(b.Z,{title:"Color Card",children:(0,S.jsxs)(a.ZP,{container:!0,spacing:k.dv,children:[(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.primary.main,color:e.palette.background.paper},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.background.paper},children:"Primary"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Primary Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.secondary.main,color:e.palette.secondary.light},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.secondary.light},children:"Secondary"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Secondary Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.error.main,color:e.palette.background.paper},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.background.paper},children:"Error"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Error Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.success.dark,color:e.palette.background.paper},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.background.paper},children:"Success"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Success Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.warning.dark,color:e.palette.grey[800]},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.grey[800]},children:"Warning"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Warning Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.info.main,color:e.palette.background.paper},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.background.paper},children:"Info"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Info Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:e.palette.dark.main,color:"#fff"},children:[(0,S.jsx)(x.Z,{title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:"#fff"},children:"Dark"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Dark Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})})]})})}),(0,S.jsx)(a.ZP,{item:!0,xs:12,children:(0,S.jsx)(b.Z,{title:"Outlined Card",children:(0,S.jsxs)(a.ZP,{container:!0,spacing:k.dv,children:[(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.primary.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.primary.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.primary.main},children:"Primary"})}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Primary Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.secondary.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.secondary.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.secondary.main},children:"Secondary"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Secondary Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.error.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.error.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.error.main},children:"Error"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Error Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.orange.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.orange.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.orange.main},children:"Orange"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Orange Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.success.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.success.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.success.main},children:"Success"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Success Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.warning.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.warning.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.warning.main},children:"Warning"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Warning Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.info.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.info.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:e.palette.info.main},children:"Info"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Info Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})}),(0,S.jsx)(a.ZP,{item:!0,sm:6,md:4,children:(0,S.jsxs)(l.Z,{sx:{border:"1px solid ".concat(e.palette.dark.main)},children:[(0,S.jsx)(x.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.dark.main)},title:(0,S.jsx)(c.Z,{variant:"h5",sx:{color:"dark"===e.palette.mode?"dark.light":e.palette.dark.main},children:"Dark"})}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(s.Z,{children:(0,S.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle1",color:"inherit",children:"Dark Card Title"})}),(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsx)(c.Z,{variant:"subtitle2",color:"inherit",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})})]})})]})})]})})})]})})]})}},51312:function(e,t,i){var r=i(64836);t.Z=void 0;var n=r(i(45045)),a=i(46417),l=(0,n.default)([(0,a.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"},"1")],"DeleteTwoTone");t.Z=l},89533:function(e,t,i){var r=i(64836);t.Z=void 0;var n=r(i(45045)),a=i(46417),l=(0,n.default)((0,a.jsx)("path",{d:"M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9L7.1 5.69C8.45 4.63 10.15 4 12 4zM5.69 7.1 16.9 18.31C15.55 19.37 13.85 20 12 20c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9z"}),"NotInterestedTwoTone");t.Z=l},68913:function(e,t,i){var r=i(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=l(t);if(i&&i.has(e))return i.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,i&&i.set(e,r)}(i(47313));var n=r(i(45045)),a=i(46417);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(l=function(e){return e?i:t})(e)}var s=(0,n.default)((0,a.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=s}}]);