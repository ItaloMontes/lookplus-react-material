"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[1981],{51637:function(e,n,t){t.r(n);var r=t(29439),i=t(1413),c=t(47313),o=t(19860),a=t(23477),s=t(24076),l=t(70941),d=t(44758),u=t(82558),h=t(57829),v=t(9289),x=t(61113),Z=t(49709),f=t(47131),m=t(93405),p=t(9019),j=t(24631),g=t(41727),S=t(51629),b=t(66835),z=t(57861),y=t(41493),C=t(50282),w=t(39236),M=t(33497),L=t(77863),P=t(27814),k=t(51997),H=t(44289),T=t(94788),I=t(49854),V=t(57983),D=t(20273),R=t(83993),A=t(46417);function N(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}var O=function(e,n){return"desc"===e?function(e,t){return N(e,t,n)}:function(e,t){return-N(e,t,n)}};function E(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var _=[{id:"name",numeric:!1,label:"Customer Name",align:"left"},{id:"location",numeric:!0,label:"Location",align:"left"},{id:"orders",numeric:!0,label:"Orders",align:"right"},{id:"date",numeric:!0,label:"Registered",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function F(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,c=e.rowCount,o=e.onRequestSort,v=e.selected;return(0,A.jsx)(a.Z,{children:(0,A.jsxs)(s.Z,{children:[(0,A.jsx)(l.Z,{padding:"checkbox",sx:{pl:3},children:(0,A.jsx)(d.Z,{color:"primary",indeterminate:i>0&&i<c,checked:c>0&&i===c,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),i>0&&(0,A.jsx)(l.Z,{padding:"none",colSpan:6,children:(0,A.jsx)(q,{numSelected:v.length})}),i<=0&&_.map((function(e){return(0,A.jsx)(l.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,A.jsxs)(u.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){o(e,n)}),children:[e.label,r===e.id?(0,A.jsx)(h.Z,{component:"span",sx:C.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),i<=0&&(0,A.jsx)(l.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}var q=function(e){var n=e.numSelected;return(0,A.jsxs)(v.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,A.jsxs)(x.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,A.jsx)(x.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,A.jsx)(h.Z,{sx:{flexGrow:1}}),n>0&&(0,A.jsx)(Z.Z,{title:"Delete",children:(0,A.jsx)(f.Z,{size:"large",children:(0,A.jsx)(k.Z,{fontSize:"small"})})})]})};n.default=function(){var e=(0,o.Z)(),n=(0,L.I0)(),t=c.useState("asc"),i=(0,r.Z)(t,2),a=i[0],u=i[1],h=c.useState("calories"),v=(0,r.Z)(h,2),C=v[0],k=v[1],N=c.useState([]),_=(0,r.Z)(N,2),q=_[0],B=_[1],G=c.useState(0),W=(0,r.Z)(G,2),J=W[0],K=W[1],Q=c.useState(5),U=(0,r.Z)(Q,2),X=U[0],Y=U[1],$=c.useState(""),ee=(0,r.Z)($,2),ne=ee[0],te=ee[1],re=c.useState([]),ie=(0,r.Z)(re,2),ce=ie[0],oe=ie[1],ae=(0,L.v9)((function(e){return e.customer})).customers;c.useEffect((function(){n((0,P.OL)())}),[n]),c.useEffect((function(){oe(ae)}),[ae]);var se=function(e,n){var t=q.indexOf(n),r=[];-1===t?r=r.concat(q,n):0===t?r=r.concat(q.slice(1)):t===q.length-1?r=r.concat(q.slice(0,-1)):t>0&&(r=r.concat(q.slice(0,t),q.slice(t+1))),B(r)},le=J>0?Math.max(0,(1+J)*X-ce.length):0;return(0,A.jsxs)(M.Z,{title:"Customer List",content:!1,children:[(0,A.jsx)(m.Z,{children:(0,A.jsxs)(p.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(j.Z,{InputProps:{startAdornment:(0,A.jsx)(g.Z,{position:"start",children:(0,A.jsx)(V.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(te(n||""),n){var t=ce.filter((function(e){var t=!0,r=!1;return["name","email","location","orders"].forEach((function(t){e[t].toString().toLowerCase().includes(n.toString().toLowerCase())&&(r=!0)})),r||(t=!1),t}));oe(t)}else oe(ae)},placeholder:"Search Customer",value:ne,size:"small"})}),(0,A.jsxs)(p.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,A.jsx)(Z.Z,{title:"Copy",children:(0,A.jsx)(f.Z,{size:"large",children:(0,A.jsx)(I.Z,{})})}),(0,A.jsx)(Z.Z,{title:"Print",children:(0,A.jsx)(f.Z,{size:"large",children:(0,A.jsx)(T.Z,{})})}),(0,A.jsx)(Z.Z,{title:"Filter",children:(0,A.jsx)(f.Z,{size:"large",children:(0,A.jsx)(H.Z,{})})})]})]})}),(0,A.jsx)(S.Z,{children:(0,A.jsxs)(b.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,A.jsx)(F,{theme:e,numSelected:q.length,order:a,orderBy:C,onSelectAllClick:function(e){if(e.target.checked)if(q.length>0)B([]);else{var n=ce.map((function(e){return e.name}));B(n)}else B([])},onRequestSort:function(e,n){u(C===n&&"asc"===a?"desc":"asc"),k(n)},rowCount:ce.length,selected:q}),(0,A.jsxs)(z.Z,{children:[E(ce,O(a,C)).slice(J*X,J*X+X).map((function(n,t){if("number"===typeof n)return null;var r,i=(r=n.name,-1!==q.indexOf(r)),c="enhanced-table-checkbox-".concat(t);return(0,A.jsxs)(s.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,A.jsx)(l.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return se(0,n.name)},children:(0,A.jsx)(d.Z,{color:"primary",checked:i,inputProps:{"aria-labelledby":c}})}),(0,A.jsxs)(l.Z,{component:"th",id:c,scope:"row",onClick:function(e){return se(0,n.name)},sx:{cursor:"pointer"},children:[(0,A.jsxs)(x.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",n.name," "]}),(0,A.jsxs)(x.Z,{variant:"caption",children:[" ",n.email," "]})]}),(0,A.jsx)(l.Z,{children:n.location}),(0,A.jsx)(l.Z,{align:"right",children:n.orders}),(0,A.jsx)(l.Z,{align:"center",children:n.date}),(0,A.jsxs)(l.Z,{align:"center",children:[1===n.status&&(0,A.jsx)(w.Z,{label:"Complete",size:"small",chipcolor:"success"}),2===n.status&&(0,A.jsx)(w.Z,{label:"Processing",size:"small",chipcolor:"orange"}),3===n.status&&(0,A.jsx)(w.Z,{label:"Confirm",size:"small",chipcolor:"primary"})]}),(0,A.jsxs)(l.Z,{align:"center",sx:{pr:3},children:[(0,A.jsx)(f.Z,{color:"primary",size:"large","aria-label":"view",children:(0,A.jsx)(D.Z,{sx:{fontSize:"1.3rem"}})}),(0,A.jsx)(f.Z,{color:"secondary",size:"large","aria-label":"edit",children:(0,A.jsx)(R.Z,{sx:{fontSize:"1.3rem"}})})]})]},t)})),le>0&&(0,A.jsx)(s.Z,{style:{height:53*le},children:(0,A.jsx)(l.Z,{colSpan:6})})]})]})}),(0,A.jsx)(y.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ce.length,rowsPerPage:X,page:J,onPageChange:function(e,n){K(n)},onRowsPerPageChange:function(e){Y(parseInt(null===e||void 0===e?void 0:e.target.value,10)),K(0)}})]})}},51997:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o},83993:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)([(0,c.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,c.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");n.Z=o},49854:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)([(0,c.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,c.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");n.Z=o},44289:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)((0,c.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");n.Z=o},94788:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)([(0,c.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,c.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,c.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,c.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");n.Z=o},57983:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)((0,c.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=o},20273:function(e,n,t){var r=t(64836);n.Z=void 0;var i=r(t(45045)),c=t(46417),o=(0,i.default)([(0,c.jsx)("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"},"0"),(0,c.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"},"1")],"VisibilityTwoTone");n.Z=o},82558:function(e,n,t){t.d(n,{Z:function(){return z}});var r=t(4942),i=t(63366),c=t(87462),o=t(21921),a=t(83061),s=t(47313),l=t(38743),d=t(54750),u=t(46417),h=(0,d.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),v=t(17592),x=t(77342),Z=t(91615),f=t(77430),m=t(32298);function p(e){return(0,m.Z)("MuiTableSortLabel",e)}var j=(0,f.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],S=(0,v.ZP)(l.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.active&&n.active]}})((function(e){var n=e.theme;return(0,r.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(n.vars||n).palette.text.secondary},"&:hover":(0,r.Z)({color:(n.vars||n).palette.text.secondary},"& .".concat(j.icon),{opacity:.5})},"&.".concat(j.active),(0,r.Z)({color:(n.vars||n).palette.text.primary},"& .".concat(j.icon),{opacity:1,color:(n.vars||n).palette.text.secondary}))})),b=(0,v.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,n){var t=e.ownerState;return[n.icon,n["iconDirection".concat((0,Z.Z)(t.direction))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,c.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:n.transitions.create(["opacity","transform"],{duration:n.transitions.duration.shorter}),userSelect:"none"},"desc"===t.direction&&{transform:"rotate(0deg)"},"asc"===t.direction&&{transform:"rotate(180deg)"})})),z=s.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiTableSortLabel"}),r=t.active,s=void 0!==r&&r,l=t.children,d=t.className,v=t.direction,f=void 0===v?"asc":v,m=t.hideSortIcon,j=void 0!==m&&m,z=t.IconComponent,y=void 0===z?h:z,C=(0,i.Z)(t,g),w=(0,c.Z)({},t,{active:s,direction:f,hideSortIcon:j,IconComponent:y}),M=function(e){var n=e.classes,t=e.direction,r={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,Z.Z)(t))]};return(0,o.Z)(r,p,n)}(w);return(0,u.jsxs)(S,(0,c.Z)({className:(0,a.default)(M.root,d),component:"span",disableRipple:!0,ownerState:w,ref:n},C,{children:[l,j&&!s?null:(0,u.jsx)(b,{as:y,className:(0,a.default)(M.icon),ownerState:w})]}))}))}}]);