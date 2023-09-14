"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[2678,718],{22903:function(e,r,n){var t=n(19860),i=n(49709),a=n(38743),l=n(90891),o=n(89535),c=n(46417);r.Z=function(e){var r=e.title,n=e.link,s=e.icon,d=(0,t.Z)();return(0,c.jsx)(i.Z,{title:r||"Reference",placement:"left",children:(0,c.jsxs)(a.Z,{disableRipple:!0,children:[!s&&(0,c.jsx)(o.Z,{component:l.Z,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&(0,c.jsx)(o.Z,{component:l.Z,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:s})]})})}},40718:function(e,r,n){n.r(r),n.d(r,{default:function(){return C},header:function(){return N}});var t=n(29439),i=n(47313),a=n(9019),l=n(35898),o=n(51629),c=n(66835),s=n(23477),d=n(24076),h=n(70941),u=n(57861),m=n(33497),g=n(22903),x=n(12401),p=n(93362),f=n(19860),Z=n(57829),j=n(93500),b=n(46417),v=[{field:"id",headerName:"ID",width:70},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90}],y=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lancaster",firstName:"Cersei",age:42},{id:3,lastName:"Lancaster",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function w(e){var r=e.Selected,n=(0,f.Z)();return(0,b.jsx)(Z.Z,{sx:{height:400,width:"100%","& .MuiDataGrid-root":{border:"none","& .MuiDataGrid-cell":{borderColor:"dark"===n.palette.mode?n.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnsContainer":{color:"dark"===n.palette.mode?"grey.600":"grey.900",borderColor:"dark"===n.palette.mode?n.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnSeparator":{color:"dark"===n.palette.mode?n.palette.text.primary+15:"grey.200"}}},children:(0,b.jsx)(j._,{rows:y,columns:v,onSelectionModelChange:function(e){var n=new Set(e),t=y.filter((function(e){return n.has(e.id)}));r(t)},pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0})})}function S(e,r,n,t,i){return{name:e,calories:r,fat:n,carbs:t,protein:i}}var k=[S("Frozen yoghurt",159,6,24,4),S("Ice cream sandwich",237,9,37,4.3),S("Eclair",262,16,24,6),S("Cupcake",305,3.7,67,4.3),S("Gingerbread",356,16,49,3.9)],N=[{label:"Dessert (100g serving)",key:1},{label:"Calories (g)",key:2},{label:"Carbs (g)",key:3},{label:"Protein (g)",key:4},{label:"Protein (g)",key:5},{label:"Protein (g)",key:6}];function C(){var e=[];v.map((function(r){return e.push({label:r.headerName,key:r.field})}));var r=(0,i.useState)([]),n=(0,t.Z)(r,2),f=n[0],Z=n[1],j=f.length>0?f:y;return(0,b.jsxs)(a.ZP,{container:!0,spacing:x.dv,children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{content:!1,title:"Basic Table",secondary:(0,b.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,b.jsx)(p.Z,{data:k,filename:"basic-table.csv",header:N}),(0,b.jsx)(g.Z,{link:"https://next.material-ui.com/components/tables/"})]}),children:(0,b.jsx)(o.Z,{children:(0,b.jsxs)(c.Z,{sx:{minWidth:350},"aria-label":"simple table",children:[(0,b.jsx)(s.Z,{children:(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(h.Z,{sx:{pl:3},children:"Dessert (100g serving)"}),(0,b.jsx)(h.Z,{align:"right",children:"Calories"}),(0,b.jsx)(h.Z,{align:"right",children:"Fat\xa0(g)"}),(0,b.jsx)(h.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,b.jsx)(h.Z,{align:"right",children:"Protein\xa0(g)"}),(0,b.jsx)(h.Z,{align:"right",children:"Protein\xa0(g)"}),(0,b.jsx)(h.Z,{align:"right",children:"Protein\xa0(g)"}),(0,b.jsx)(h.Z,{align:"right",sx:{pr:3},children:"Protein\xa0(g)"})]})}),(0,b.jsx)(u.Z,{children:k.map((function(e){return(0,b.jsxs)(d.Z,{hover:!0,children:[(0,b.jsx)(h.Z,{sx:{pl:3},component:"th",scope:"row",children:e.name}),(0,b.jsx)(h.Z,{align:"right",children:e.calories}),(0,b.jsx)(h.Z,{align:"right",children:e.fat}),(0,b.jsx)(h.Z,{align:"right",children:e.carbs}),(0,b.jsx)(h.Z,{align:"right",children:e.protein}),(0,b.jsx)(h.Z,{align:"right",children:e.protein}),(0,b.jsx)(h.Z,{align:"right",children:e.protein}),(0,b.jsx)(h.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)}))})]})})})}),(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{content:!1,title:"Data Grid",secondary:(0,b.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,b.jsx)(p.Z,{data:j,filename:"data-grid-table.csv",header:e}),(0,b.jsx)(g.Z,{link:"https://material-ui.com/components/data-grid/"})]}),children:(0,b.jsx)(w,{Selected:function(e){Z(e)}})})})]})}},22678:function(e,r,n){n.r(r),n.d(r,{default:function(){return F}});var t=n(29439),i=n(1413),a=n(47313),l=n(23477),o=n(24076),c=n(70941),s=n(44758),d=n(82558),h=n(57829),u=n(9289),m=n(61113),g=n(49709),x=n(47131),p=n(35898),f=n(70501),Z=n(51629),j=n(66835),b=n(57861),v=n(41493),y=n(50282),w=n(33497),S=n(22903),k=n(93362),N=n(40718),C=n(51997),P=n(46417);function L(e,r,n,t,i){return{name:e,calories:r,fat:n,carbs:t,protein:i}}var D=[L("Cupcake",305,3.7,67,4.3),L("Donut",452,25,51,4.9),L("Eclair",262,16,24,6),L("Frozen yoghurt",159,6,24,4),L("Gingerbread",356,16,49,3.9),L("Honeycomb",408,3.2,87,6.5),L("Ice cream sandwich",237,9,37,4.3),L("Jelly Bean",375,0,94,0),L("KitKat",518,26,65,7),L("Lollipop",392,.2,98,0),L("Marshmallow",318,0,81,2),L("Nougat",360,19,9,37),L("Oreo",437,18,63,4)];function M(e,r,n){return r[n]<e[n]?-1:r[n]>e[n]?1:0}var V=function(e,r){return"desc"===e?function(e,n){return M(e,n,r)}:function(e,n){return-M(e,n,r)}};function I(e,r){var n=e.map((function(e,r){return[e,r]}));return n.sort((function(e,n){var t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n.map((function(e){return e[0]}))}var R=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function z(e){var r=e.onSelectAllClick,n=e.order,t=e.orderBy,i=e.numSelected,a=e.rowCount,u=e.onRequestSort;return(0,P.jsx)(l.Z,{children:(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(c.Z,{padding:"checkbox",sx:{pl:3},children:(0,P.jsx)(s.Z,{color:"primary",indeterminate:i>0&&i<a,checked:a>0&&i===a,onChange:r,inputProps:{"aria-label":"select all desserts"}})}),R.map((function(e){return(0,P.jsx)(c.Z,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&n,children:(0,P.jsxs)(d.Z,{active:t===e.id,direction:t===e.id?n:"asc",onClick:(r=e.id,function(e){u(e,r)}),children:[e.label,t===e.id?(0,P.jsx)(h.Z,{component:"span",sx:y.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var T=function(e){var r=e.numSelected;return(0,P.jsxs)(u.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},r>0&&{color:function(e){return e.palette.secondary.main}}),children:[r>0?(0,P.jsxs)(m.Z,{color:"inherit",variant:"subtitle1",children:[r," selected"]}):(0,P.jsx)(m.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,P.jsx)(h.Z,{sx:{flexGrow:1}}),r>0&&(0,P.jsx)(g.Z,{title:"Delete",children:(0,P.jsx)(x.Z,{size:"large",children:(0,P.jsx)(C.Z,{})})})]})};function F(){var e=a.useState("asc"),r=(0,t.Z)(e,2),n=r[0],i=r[1],l=a.useState("calories"),d=(0,t.Z)(l,2),h=d[0],u=d[1],m=a.useState([]),g=(0,t.Z)(m,2),x=g[0],y=g[1],C=a.useState(0),L=(0,t.Z)(C,2),M=L[0],R=L[1],F=a.useState(!1),G=(0,t.Z)(F,1)[0],_=a.useState(5),A=(0,t.Z)(_,2),B=A[0],O=A[1],E=a.useState([]),H=(0,t.Z)(E,2),J=H[0],q=H[1],K=M>0?Math.max(0,(1+M)*B-D.length):0;return(0,P.jsx)(w.Z,{content:!1,title:"Data Tables",secondary:(0,P.jsxs)(p.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,P.jsx)(k.Z,{data:J.length>0?J:D,filename:"data-tables.csv",header:N.header}),(0,P.jsx)(S.Z,{link:"https://next.material-ui.com/components/tables/"})]}),children:(0,P.jsxs)(f.Z,{sx:{width:"100%",mb:2},children:[(0,P.jsx)(T,{numSelected:x.length}),(0,P.jsx)(Z.Z,{children:(0,P.jsxs)(j.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:G?"small":"medium",children:[(0,P.jsx)(z,{numSelected:x.length,order:n,orderBy:h,onSelectAllClick:function(e){if(e.target.checked)if(x.length>0)y([]);else{var r=D.map((function(e){return e.name}));y(r)}else y([])},onRequestSort:function(e,r){i(h===r&&"asc"===n?"desc":"asc"),u(r)},rowCount:D.length}),(0,P.jsxs)(b.Z,{children:[I(D,V(n,h)).slice(M*B,M*B+B).map((function(e,r){if("number"===typeof e)return null;var n,t=(n=e.name,-1!==x.indexOf(n)),i="enhanced-table-checkbox-".concat(r);return(0,P.jsxs)(o.Z,{hover:!0,onClick:function(r){return function(e,r){var n=x.indexOf(r),t=[];-1===n?t=t.concat(x,r):0===n?t=t.concat(x.slice(1)):n===x.length-1?t=t.concat(x.slice(0,-1)):n>0&&(t=t.concat(x.slice(0,n),x.slice(n+1)));var i=D.filter((function(e){return t.includes(e.name.toString())}));q(i),y(t)}(0,e.name)},role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[(0,P.jsx)(c.Z,{padding:"checkbox",sx:{pl:3},children:(0,P.jsx)(s.Z,{color:"primary",checked:t,inputProps:{"aria-labelledby":i}})}),(0,P.jsx)(c.Z,{component:"th",id:i,scope:"row",padding:"none",children:e.name}),(0,P.jsx)(c.Z,{align:"right",children:e.calories}),(0,P.jsx)(c.Z,{align:"right",children:e.fat}),(0,P.jsx)(c.Z,{align:"right",children:e.carbs}),(0,P.jsx)(c.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)})),K>0&&(0,P.jsx)(o.Z,{style:{height:(G?33:53)*K},children:(0,P.jsx)(c.Z,{colSpan:6})})]})]})}),(0,P.jsx)(v.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:D.length,rowsPerPage:B,page:M,onPageChange:function(e,r){R(r)},onRowsPerPageChange:function(e){O(parseInt(null===e||void 0===e?void 0:e.target.value,10)),R(0)}})]})})}},93362:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(19860),i=n(49709),a=n(38743),l=n(53245),o=n(1834),c=n(46417),s=function(e){var r=e.data,n=e.filename,s=e.headers,d=(0,t.Z)();return(0,c.jsx)(i.Z,{title:"CSV Export",placement:"left",children:(0,c.jsx)(a.Z,{sx:{mt:.5},children:(0,c.jsx)(l.CSVLink,{data:r,filename:n,headers:s,children:(0,c.jsx)(o.e11,{color:d.palette.secondary.main,"aria-label":"Export CSV File"})})})})}},51997:function(e,r,n){var t=n(64836);r.Z=void 0;var i=t(n(45045)),a=n(46417),l=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=l},82558:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(4942),i=n(63366),a=n(87462),l=n(21921),o=n(83061),c=n(47313),s=n(38743),d=n(54750),h=n(46417),u=(0,d.Z)((0,h.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),m=n(17592),g=n(77342),x=n(91615),p=n(77430),f=n(32298);function Z(e){return(0,f.Z)("MuiTableSortLabel",e)}var j=(0,p.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),b=["active","children","className","direction","hideSortIcon","IconComponent"],v=(0,m.ZP)(s.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,n.active&&r.active]}})((function(e){var r=e.theme;return(0,t.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(r.vars||r).palette.text.secondary},"&:hover":(0,t.Z)({color:(r.vars||r).palette.text.secondary},"& .".concat(j.icon),{opacity:.5})},"&.".concat(j.active),(0,t.Z)({color:(r.vars||r).palette.text.primary},"& .".concat(j.icon),{opacity:1,color:(r.vars||r).palette.text.secondary}))})),y=(0,m.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,r){var n=e.ownerState;return[r.icon,r["iconDirection".concat((0,x.Z)(n.direction))]]}})((function(e){var r=e.theme,n=e.ownerState;return(0,a.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:r.transitions.create(["opacity","transform"],{duration:r.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),w=c.forwardRef((function(e,r){var n=(0,g.Z)({props:e,name:"MuiTableSortLabel"}),t=n.active,c=void 0!==t&&t,s=n.children,d=n.className,m=n.direction,p=void 0===m?"asc":m,f=n.hideSortIcon,j=void 0!==f&&f,w=n.IconComponent,S=void 0===w?u:w,k=(0,i.Z)(n,b),N=(0,a.Z)({},n,{active:c,direction:p,hideSortIcon:j,IconComponent:S}),C=function(e){var r=e.classes,n=e.direction,t={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,x.Z)(n))]};return(0,l.Z)(t,Z,r)}(N);return(0,h.jsxs)(v,(0,a.Z)({className:(0,o.default)(C.root,d),component:"span",disableRipple:!0,ownerState:N,ref:r},k,{children:[s,j&&!c?null:(0,h.jsx)(y,{as:S,className:(0,o.default)(C.icon),ownerState:N})]}))}))}}]);