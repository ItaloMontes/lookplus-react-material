"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[6780],{96780:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var i=n(29439),r=n(1413),a=n(47313),o=n(19860),c=n(23477),l=n(24076),s=n(70941),d=n(44758),u=n(82558),h=n(57829),v=n(61113),x=n(9289),Z=n(49709),f=n(47131),m=n(93405),p=n(9019),j=n(24631),g=n(41727),b=n(51629),S=n(66835),y=n(57861),z=n(55942),w=n(41493),C=n(50282),P=n(94469),M=n(33604),k=n(96467),T=n(51405),H=n(4117),R=n(24193),D=n(12401),I=n(66182),L=n(46417),V=[{value:"1",label:"Published"},{value:"2",label:"Pending"},{value:"3",label:"confirm"}],A=function(e){var t=e.open,n=e.handleCloseDialog,r=(0,a.useState)("1"),o=(0,i.Z)(r,2),c=o[0],l=o[1],s=(0,a.useState)(2),d=(0,i.Z)(s,2),u=d[0],h=d[1];return(0,L.jsx)(P.Z,{open:t,onClose:n,sx:{"&>div:nth-of-type(3)":{"&>div":{maxWidth:400}}},children:t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(M.Z,{children:"Edit Review"}),(0,L.jsx)(k.Z,{children:(0,L.jsxs)(p.ZP,{container:!0,spacing:D.dv,sx:{my:0},children:[(0,L.jsx)(p.ZP,{item:!0,xs:12,children:(0,L.jsx)(j.Z,{id:"outlined-basic-review-product",fullWidth:!0,label:"Product ",defaultValue:"Apple Watch Series 4"})}),(0,L.jsx)(p.ZP,{item:!0,xs:12,children:(0,L.jsx)(j.Z,{id:"outlined-basic-review-author",fullWidth:!0,label:"Author ",defaultValue:"Joseph William"})}),(0,L.jsx)(p.ZP,{item:!0,xs:12,children:(0,L.jsx)(j.Z,{id:"outlined-basic-review",fullWidth:!0,multiline:!0,rows:4,label:"Text of review",defaultValue:"If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."})}),(0,L.jsxs)(p.ZP,{item:!0,xs:12,children:[(0,L.jsx)(v.Z,{align:"left",variant:"body2",children:"Rating"}),(0,L.jsx)(z.Z,{name:"simple-controlled",value:u,precision:.5,onChange:function(e,t){h(t)}})]}),(0,L.jsx)(p.ZP,{item:!0,xs:12,children:(0,L.jsx)(j.Z,{id:"standard-select-currency",select:!0,label:"Status",value:c,fullWidth:!0,onChange:function(e){l(e.target.value)},children:V.map((function(e){return(0,L.jsx)(T.Z,{value:e.value,children:e.label},e.value)}))})})]})}),(0,L.jsxs)(H.Z,{children:[(0,L.jsx)(I.Z,{children:(0,L.jsx)(R.Z,{variant:"contained",children:"Create"})}),(0,L.jsx)(R.Z,{variant:"text",onClick:n,children:"Close"})]})]})})},N=n(33497),W=n(39236),E=n(77863),F=n(27814),O=n(51997),_=n(44289),B=n(94788),q=n(49854),G=n(57983),J=n(20273),K=n(83993);function Q(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var U=function(e,t){return"desc"===e?function(e,n){return Q(e,n,t)}:function(e,n){return-Q(e,n,t)}};function X(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n.map((function(e){return e[0]}))}var Y=[{id:"name",numeric:!1,label:"Product Name",align:"left"},{id:"author",numeric:!0,label:"Author",align:"left"},{id:"review",numeric:!0,label:"Review",align:"left"},{id:"rating",numeric:!0,label:"Rating",align:"center"},{id:"date",numeric:!0,label:"Date",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function $(e){var t=e.onSelectAllClick,n=e.order,i=e.orderBy,r=e.numSelected,a=e.rowCount,o=e.onRequestSort,x=e.theme,Z=e.selected;return(0,L.jsx)(c.Z,{children:(0,L.jsxs)(l.Z,{children:[(0,L.jsx)(s.Z,{padding:"checkbox",sx:{pl:3},children:(0,L.jsx)(d.Z,{color:"primary",indeterminate:r>0&&r<a,checked:a>0&&r===a,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),r>0&&(0,L.jsx)(s.Z,{padding:"none",colSpan:7,children:(0,L.jsx)(ee,{numSelected:Z.length})}),r<=0&&Y.map((function(e){return(0,L.jsx)(s.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&n,children:(0,L.jsxs)(u.Z,{active:i===e.id,direction:i===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)}),children:[e.label,i===e.id?(0,L.jsx)(h.Z,{component:"span",sx:C.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),r<=0&&(0,L.jsx)(s.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,L.jsx)(v.Z,{variant:"subtitle1",sx:{color:"dark"===x.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var ee=function(e){var t=e.numSelected;return(0,L.jsxs)(x.Z,{sx:(0,r.Z)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,L.jsxs)(v.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,L.jsx)(v.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,L.jsx)(h.Z,{sx:{flexGrow:1}}),t>0&&(0,L.jsx)(Z.Z,{title:"Delete",children:(0,L.jsx)(f.Z,{size:"large",children:(0,L.jsx)(O.Z,{fontSize:"small"})})})]})},te=function(){var e=(0,o.Z)(),t=(0,E.I0)(),n=a.useState(!1),r=(0,i.Z)(n,2),c=r[0],u=r[1],h=function(){u(!0)},x=a.useState("asc"),C=(0,i.Z)(x,2),P=C[0],M=C[1],k=a.useState("calories"),T=(0,i.Z)(k,2),H=T[0],R=T[1],D=a.useState([]),I=(0,i.Z)(D,2),V=I[0],O=I[1],Q=a.useState(0),Y=(0,i.Z)(Q,2),ee=Y[0],te=Y[1],ne=a.useState(5),ie=(0,i.Z)(ne,2),re=ie[0],ae=ie[1],oe=a.useState(""),ce=(0,i.Z)(oe,2),le=ce[0],se=ce[1],de=a.useState([]),ue=(0,i.Z)(de,2),he=ue[0],ve=ue[1],xe=(0,E.v9)((function(e){return e.customer})).productreviews;a.useEffect((function(){t((0,F.mk)())}),[t]),a.useEffect((function(){ve(xe)}),[xe]);var Ze=function(e,t){var n=V.indexOf(t),i=[];-1===n?i=i.concat(V,t):0===n?i=i.concat(V.slice(1)):n===V.length-1?i=i.concat(V.slice(0,-1)):n>0&&(i=i.concat(V.slice(0,n),V.slice(n+1))),O(i)},fe=ee>0?Math.max(0,(1+ee)*re-he.length):0;return(0,L.jsxs)(N.Z,{title:"Product Review",content:!1,children:[(0,L.jsx)(m.Z,{children:(0,L.jsxs)(p.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,L.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsx)(j.Z,{InputProps:{startAdornment:(0,L.jsx)(g.Z,{position:"start",children:(0,L.jsx)(G.Z,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(se(t||""),t){var n=he.filter((function(e){var n=!0,i=!1;return["name","author","review"].forEach((function(n){e[n].toString().toLowerCase().includes(t.toString().toLowerCase())&&(i=!0)})),i||(n=!1),n}));ve(n)}else ve(xe)},placeholder:"Search Product",value:le,size:"small"})}),(0,L.jsxs)(p.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,L.jsx)(Z.Z,{title:"Copy",children:(0,L.jsx)(f.Z,{size:"large",children:(0,L.jsx)(q.Z,{})})}),(0,L.jsx)(Z.Z,{title:"Print",children:(0,L.jsx)(f.Z,{size:"large",children:(0,L.jsx)(B.Z,{})})}),(0,L.jsx)(Z.Z,{title:"Filter",children:(0,L.jsx)(f.Z,{size:"large",children:(0,L.jsx)(_.Z,{})})})]})]})}),(0,L.jsxs)(b.Z,{children:[(0,L.jsxs)(S.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,L.jsx)($,{numSelected:V.length,order:P,orderBy:H,onSelectAllClick:function(e){if(e.target.checked)if(V.length>0)O([]);else{var t=he.map((function(e){return e.name}));O(t)}else O([])},onRequestSort:function(e,t){M(H===t&&"asc"===P?"desc":"asc"),R(t)},rowCount:he.length,theme:e,selected:V}),(0,L.jsxs)(y.Z,{children:[X(he,U(P,H)).slice(ee*re,ee*re+re).map((function(t,n){if("number"===typeof t)return null;var i,r=(i=t.name,-1!==V.indexOf(i)),a="enhanced-table-checkbox-".concat(n);return(0,L.jsxs)(l.Z,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,L.jsx)(s.Z,{padding:"checkbox",onClick:function(e){return Ze(0,t.name)},sx:{pl:3},children:(0,L.jsx)(d.Z,{color:"primary",checked:r,inputProps:{"aria-labelledby":a}})}),(0,L.jsx)(s.Z,{component:"th",id:a,scope:"row",onClick:function(e){return Ze(0,t.name)},sx:{cursor:"pointer"},children:(0,L.jsxs)(v.Z,{variant:"body2",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]})}),(0,L.jsx)(s.Z,{children:t.author}),(0,L.jsx)(s.Z,{children:t.review}),(0,L.jsx)(s.Z,{align:"center",children:(0,L.jsx)(z.Z,{name:"read-only",value:t.rating,precision:.5,readOnly:!0})}),(0,L.jsx)(s.Z,{align:"center",children:t.date}),(0,L.jsxs)(s.Z,{align:"center",children:[1===t.status&&(0,L.jsx)(W.Z,{label:"Complete",chipcolor:"success",size:"small"}),2===t.status&&(0,L.jsx)(W.Z,{label:"Processing",chipcolor:"orange",size:"small"}),3===t.status&&(0,L.jsx)(W.Z,{label:"Confirm",chipcolor:"primary",size:"small"})]}),(0,L.jsxs)(s.Z,{align:"center",sx:{pr:3},children:[(0,L.jsx)(f.Z,{color:"primary",size:"large","aria-label":"view",children:(0,L.jsx)(J.Z,{sx:{fontSize:"1.3rem"}})}),(0,L.jsx)(f.Z,{color:"secondary",onClick:h,size:"large","aria-label":"edit",children:(0,L.jsx)(K.Z,{sx:{fontSize:"1.3rem"}})})]})]},n)})),fe>0&&(0,L.jsx)(l.Z,{style:{height:53*fe},children:(0,L.jsx)(s.Z,{colSpan:6})})]})]}),(0,L.jsx)(A,{open:c,handleCloseDialog:function(){u(!1)}})]}),(0,L.jsx)(w.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:he.length,rowsPerPage:re,page:ee,onPageChange:function(e,t){te(t)},onRowsPerPageChange:function(e){ae(parseInt(null===e||void 0===e?void 0:e.target.value,10)),te(0)}})]})}},51997:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},83993:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)([(0,a.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.Z=o},49854:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)([(0,a.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.Z=o},44289:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.Z=o},94788:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)([(0,a.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,a.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,a.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,a.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.Z=o},57983:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o},20273:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45045)),a=n(46417),o=(0,r.default)([(0,a.jsx)("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"},"1")],"VisibilityTwoTone");t.Z=o},33604:function(e,t,n){var i=n(87462),r=n(63366),a=n(47313),o=n(83061),c=n(21921),l=n(61113),s=n(17592),d=n(77342),u=n(93174),h=n(63909),v=n(46417),x=["className","id"],Z=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=n.className,s=n.id,f=(0,r.Z)(n,x),m=n,p=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},u.a,t)}(m),j=a.useContext(h.Z).titleId,g=void 0===j?s:j;return(0,v.jsx)(Z,(0,i.Z)({component:"h2",className:(0,o.default)(p.root,l),ownerState:m,ref:t,variant:"h6",id:g},f))}));t.Z=f},82558:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(4942),r=n(63366),a=n(87462),o=n(21921),c=n(83061),l=n(47313),s=n(38743),d=n(54750),u=n(46417),h=(0,d.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),v=n(17592),x=n(77342),Z=n(91615),f=n(77430),m=n(32298);function p(e){return(0,m.Z)("MuiTableSortLabel",e)}var j=(0,f.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],b=(0,v.ZP)(s.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.active&&t.active]}})((function(e){var t=e.theme;return(0,i.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":(0,i.Z)({color:(t.vars||t).palette.text.secondary},"& .".concat(j.icon),{opacity:.5})},"&.".concat(j.active),(0,i.Z)({color:(t.vars||t).palette.text.primary},"& .".concat(j.icon),{opacity:1,color:(t.vars||t).palette.text.secondary}))})),S=(0,v.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,t["iconDirection".concat((0,Z.Z)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),y=l.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiTableSortLabel"}),i=n.active,l=void 0!==i&&i,s=n.children,d=n.className,v=n.direction,f=void 0===v?"asc":v,m=n.hideSortIcon,j=void 0!==m&&m,y=n.IconComponent,z=void 0===y?h:y,w=(0,r.Z)(n,g),C=(0,a.Z)({},n,{active:l,direction:f,hideSortIcon:j,IconComponent:z}),P=function(e){var t=e.classes,n=e.direction,i={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,Z.Z)(n))]};return(0,o.Z)(i,p,t)}(C);return(0,u.jsxs)(b,(0,a.Z)({className:(0,c.default)(P.root,d),component:"span",disableRipple:!0,ownerState:C,ref:t},w,{children:[s,j&&!l?null:(0,u.jsx)(S,{as:z,className:(0,c.default)(P.icon),ownerState:C})]}))}))}}]);