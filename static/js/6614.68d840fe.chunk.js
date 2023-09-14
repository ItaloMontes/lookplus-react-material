"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[6614],{22903:function(e,n,t){var o=t(19860),r=t(49709),a=t(38743),i=t(90891),s=t(89535),l=t(46417);n.Z=function(e){var n=e.title,t=e.link,c=e.icon,p=(0,o.Z)();return(0,l.jsx)(r.Z,{title:n||"Reference",placement:"left",children:(0,l.jsxs)(a.Z,{disableRipple:!0,children:[!c&&(0,l.jsx)(s.Z,{component:i.Z,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,"aria-label":"'ui material icon'",children:(0,l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),(0,l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0",children:(0,l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&(0,l.jsx)(s.Z,{component:i.Z,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,"aria-label":"ui material icon",children:c})]})})}},1759:function(e,n,t){var o=t(1413),r=t(45987),a=t(47313),i=t(19860),s=t(73428),l=t(54641),c=t(61113),p=t(19536),u=t(93405),m=t(46417),d=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],h=a.forwardRef((function(e,n){var t=e.children,a=e.content,h=e.contentClass,x=e.darkTitle,Z=e.secondary,f=e.sx,b=void 0===f?{}:f,P=e.contentSX,j=void 0===P?{}:P,v=e.title,g=(0,r.Z)(e,d),k=(0,i.Z)();return(0,m.jsxs)(s.Z,(0,o.Z)((0,o.Z)({ref:n,sx:(0,o.Z)({border:"1px solid",borderColor:"dark"===k.palette.mode?k.palette.dark.light+15:k.palette.grey[200],":hover":{boxShadow:"dark"===k.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},b)},g),{},{children:[!x&&v&&(0,m.jsx)(l.Z,{sx:{p:2.5},title:(0,m.jsx)(c.Z,{variant:"h5",children:v}),action:Z}),x&&v&&(0,m.jsx)(l.Z,{sx:{p:2.5},title:(0,m.jsx)(c.Z,{variant:"h4",children:v}),action:Z}),v&&(0,m.jsx)(p.Z,{sx:{opacity:1,borderColor:"dark"===k.palette.mode?k.palette.dark.light+15:k.palette.grey[200]}}),a&&(0,m.jsx)(u.Z,{sx:(0,o.Z)({p:2.5},j),className:h||"",children:t}),!a&&t]}))}));h.defaultProps={content:!0},n.Z=h},36614:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var o=t(1413),r=t(29439),a=t(47313),i=t(9019),s=t(24631),l=t(74241),c=t(87462),p=t(63366),u=t(77342),m=t(24813),d=t(91781),h=t(19448);function x(e,n){var t,o=(0,u.Z)({props:e,name:n}),r=(0,h.nB)(),a=null!=(t=o.ampm)?t:r.is12HourCycleInCurrentLocale(),i=(0,h.og)().openTimePickerDialogue;return(0,c.Z)({ampm:a,openTo:"hours",views:["hours","minutes"],acceptRegex:a?/[\dapAP]/gi:/\d/gi,disableMaskedInput:!1,getOpenDialogAriaText:i,inputFormat:a?r.formats.fullTime12h:r.formats.fullTime24h},o,{components:(0,c.Z)({OpenPickerIcon:d.SU},o.components)})}var Z={emptyValue:null,parseInput:t(74006).Ur,getTodayValue:function(e){return e.date()},areValuesEqual:function(e,n,t){return e.isEqual(n,t)},valueReducer:function(e,n,t){return n&&e.isValid(t)?e.mergeDateAndTime(n,t):t}},f=t(4942),b=t(17592),P=t(19860),j=t(21921),v=t(12631),g=t(38589),k=t(64005),T=t(80791),L=t(26342),M=t(64518),w=t(32298);function C(e){return(0,w.Z)("MuiTimePickerToolbar",e)}var I=(0,t(77430).Z)("MuiTimePickerToolbar",["root","separator","hourMinuteLabel","hourMinuteLabelLandscape","hourMinuteLabelReverse","ampmSelection","ampmLandscape","ampmLabel"]),y=t(46417),V=["ampm","ampmInClock","parsedValue","isLandscape","isMobileKeyboardViewOpen","onChange","openView","setOpenView","toggleMobileKeyboardView","toolbarTitle","views","disabled","readOnly"],_=(0,b.ZP)(k.e,{name:"MuiTimePickerToolbar",slot:"Root",overridesResolver:function(e,n){return n.root}})((0,f.Z)({},"& .".concat(T.U.penIconButtonLandscape),{marginTop:"auto"})),D=(0,b.ZP)(v.I,{name:"MuiTimePickerToolbar",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({outline:0,margin:"0 4px 0 2px",cursor:"default"}),S=(0,b.ZP)("div",{name:"MuiTimePickerToolbar",slot:"HourMinuteLabel",overridesResolver:function(e,n){var t;return[(t={},(0,f.Z)(t,"&.".concat(I.hourMinuteLabelLandscape),n.hourMinuteLabelLandscape),(0,f.Z)(t,"&.".concat(I.hourMinuteLabelReverse),n.hourMinuteLabelReverse),t),n.hourMinuteLabel]}})((function(e){var n=e.theme,t=e.ownerState;return(0,c.Z)({display:"flex",justifyContent:"flex-end",alignItems:"flex-end"},t.isLandscape&&{marginTop:"auto"},"rtl"===n.direction&&{flexDirection:"row-reverse"})})),H=(0,b.ZP)("div",{name:"MuiTimePickerToolbar",slot:"AmPmSelection",overridesResolver:function(e,n){return[(0,f.Z)({},".".concat(I.ampmLabel),n.ampmLabel),(0,f.Z)({},"&.".concat(I.ampmLandscape),n.ampmLandscape),n.ampmSelection]}})((function(e){var n=e.ownerState;return(0,c.Z)({display:"flex",flexDirection:"column",marginRight:"auto",marginLeft:12},n.isLandscape&&{margin:"4px 0 auto",flexDirection:"row",justifyContent:"space-around",flexBasis:"100%"},(0,f.Z)({},"& .".concat(I.ampmLabel),{fontSize:17}))}));function R(e){var n,t=(0,u.Z)({props:e,name:"MuiTimePickerToolbar"}),o=t.ampm,r=t.ampmInClock,a=t.parsedValue,i=t.isLandscape,s=t.isMobileKeyboardViewOpen,l=t.onChange,m=t.openView,d=t.setOpenView,x=t.toggleMobileKeyboardView,Z=t.toolbarTitle,f=t.views,b=t.disabled,v=t.readOnly,k=(0,p.Z)(t,V),T=(0,h.nB)(),w=(0,h.og)(),I=null!=Z?Z:w.timePickerDefaultToolbarTitle,R=(0,P.Z)(),W=Boolean(o&&!r),N=(0,M.iC)(a,o,l),z=N.meridiemMode,K=N.handleMeridiemChange,O=t,A=function(e){var n=e.theme,t=e.isLandscape,o=e.classes,r={root:["root"],separator:["separator"],hourMinuteLabel:["hourMinuteLabel",t&&"hourMinuteLabelLandscape","rtl"===n.direction&&"hourMinuteLabelReverse"],ampmSelection:["ampmSelection",t&&"ampmLandscape"],ampmLabel:["ampmLabel"]};return(0,j.Z)(r,C,o)}((0,c.Z)({},O,{theme:R})),B=(0,y.jsx)(D,{tabIndex:-1,value:":",variant:"h3",selected:!1,className:A.separator});return(0,y.jsxs)(_,(0,c.Z)({viewType:"clock",landscapeDirection:"row",toolbarTitle:I,isLandscape:i,isMobileKeyboardViewOpen:s,toggleMobileKeyboardView:x,ownerState:O,className:A.root},k,{children:[(0,y.jsxs)(S,{className:A.hourMinuteLabel,ownerState:O,children:[(0,L.kI)(f,"hours")&&(0,y.jsx)(g.c,{tabIndex:-1,variant:"h3",onClick:function(){return d("hours")},selected:"hours"===m,value:a?(n=a,o?T.format(n,"hours12h"):T.format(n,"hours24h")):"--"}),(0,L.kI)(f,["hours","minutes"])&&B,(0,L.kI)(f,"minutes")&&(0,y.jsx)(g.c,{tabIndex:-1,variant:"h3",onClick:function(){return d("minutes")},selected:"minutes"===m,value:a?T.format(a,"minutes"):"--"}),(0,L.kI)(f,["minutes","seconds"])&&B,(0,L.kI)(f,"seconds")&&(0,y.jsx)(g.c,{variant:"h3",onClick:function(){return d("seconds")},selected:"seconds"===m,value:a?T.format(a,"seconds"):"--"})]}),W&&(0,y.jsxs)(H,{className:A.ampmSelection,ownerState:O,children:[(0,y.jsx)(g.c,{disableRipple:!0,variant:"subtitle2",selected:"am"===z,typographyClassName:A.ampmLabel,value:T.getMeridiemText("am"),onClick:v?void 0:function(){return K("am")},disabled:b}),(0,y.jsx)(g.c,{disableRipple:!0,variant:"subtitle2",selected:"pm"===z,typographyClassName:A.ampmLabel,value:T.getMeridiemText("pm"),onClick:v?void 0:function(){return K("pm")},disabled:b})]})]}))}var W=t(46023),N=t(10828),z=t(30169),K=t(17491),O=t(81930),A=["onChange","PaperProps","PopperProps","ToolbarComponent","TransitionComponent","value","components","componentsProps"],B=a.forwardRef((function(e,n){var t=x(e,"MuiDesktopTimePicker"),o=null!==(0,z.K)(t),r=(0,O.u)(t,Z),a=r.pickerProps,i=r.inputProps,s=r.wrapperProps,l=t.PaperProps,u=t.PopperProps,m=t.ToolbarComponent,d=void 0===m?R:m,h=t.TransitionComponent,f=t.components,b=t.componentsProps,P=(0,p.Z)(t,A),j=(0,c.Z)({},i,P,{components:f,componentsProps:b,ref:n,validationError:o});return(0,y.jsx)(W.j,(0,c.Z)({},s,{DateInputProps:j,KeyboardDateInputComponent:K.l,PopperProps:u,PaperProps:l,TransitionComponent:h,components:f,componentsProps:b,children:(0,y.jsx)(N.z,(0,c.Z)({},a,{autoFocus:!0,toolbarTitle:t.label||t.toolbarTitle,ToolbarComponent:d,DateInputProps:j,components:f,componentsProps:b},P))}))})),F=t(88709),U=t(87931),E=["ToolbarComponent","value","onChange","components","componentsProps"],q=a.forwardRef((function(e,n){var t=x(e,"MuiMobileTimePicker"),o=null!==(0,z.K)(t),r=(0,O.u)(t,Z),a=r.pickerProps,i=r.inputProps,s=r.wrapperProps,l=t.ToolbarComponent,u=void 0===l?R:l,m=t.components,d=t.componentsProps,h=(0,p.Z)(t,E),f=(0,c.Z)({},i,h,{components:m,componentsProps:d,ref:n,validationError:o});return(0,y.jsx)(F.n,(0,c.Z)({},h,s,{DateInputProps:f,PureDateInputComponent:U.Z,components:m,componentsProps:d,children:(0,y.jsx)(N.z,(0,c.Z)({},a,{autoFocus:!0,toolbarTitle:t.label||t.toolbarTitle,ToolbarComponent:u,DateInputProps:f,components:m,componentsProps:d},h))}))})),Q=["desktopModeMediaQuery","DialogProps","PopperProps","TransitionComponent"],X=a.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiTimePicker"}),o=t.desktopModeMediaQuery,r=void 0===o?"@media (pointer: fine)":o,a=t.DialogProps,i=t.PopperProps,s=t.TransitionComponent,l=(0,p.Z)(t,Q);return(0,m.Z)(r,{defaultMatches:!0})?(0,y.jsx)(B,(0,c.Z)({ref:n,PopperProps:i,TransitionComponent:s},l)):(0,y.jsx)(q,(0,c.Z)({ref:n,DialogProps:a},l))})),G=t(74359),J=t(59601),Y=t(43394),$=t(62870),ee=t(1759),ne=t(33497),te=t(22903),oe=t(12401),re=t(48268),ae=function(){var e=(0,a.useState)(new Date),n=(0,r.Z)(e,2),t=n[0],c=n[1],p=(0,a.useState)(new Date),u=(0,r.Z)(p,2),m=u[0],d=u[1],h=(0,a.useState)(new Date),x=(0,r.Z)(h,2),Z=x[0],f=x[1],b=(0,a.useState)(new Date),P=(0,r.Z)(b,2),j=P[0],v=P[1];return(0,y.jsx)(ne.Z,{title:"Mask",secondary:(0,y.jsx)(te.Z,{icon:(0,y.jsx)(re.Z,{fontSize:"small"}),link:"https://www.npmjs.com/package/react-number-format"}),children:(0,y.jsx)(Y._,{dateAdapter:J.H,children:(0,y.jsxs)(i.ZP,{container:!0,spacing:oe.dv,children:[(0,y.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,y.jsx)(ee.Z,{title:"Date",children:(0,y.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:3,children:[(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.M,{label:"Insert Date 1",value:t,onChange:function(e){return c(e)},renderInput:function(e){return(0,y.jsx)(s.Z,(0,o.Z)({fullWidth:!0},e))}})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.M,{label:"Insert Date 2",value:m,onChange:function(e){return d(e)},renderInput:function(e){return(0,y.jsx)(s.Z,(0,o.Z)({fullWidth:!0},e))},inputFormat:"mm-dd-yyyy",mask:"__-__-____"})})]})})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,y.jsx)(ee.Z,{title:"Time",children:(0,y.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:3,children:[(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)(X,{ampm:!1,openTo:"hours",views:["hours","minutes","seconds"],inputFormat:"HH:mm:ss",mask:"__:__:__",label:"Time",value:Z,onChange:function(e){f(e)},renderInput:function(e){return(0,y.jsx)(s.Z,(0,o.Z)({fullWidth:!0},e))}})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)(G.W,{value:j,onChange:function(e){v(e)},renderInput:function(e){return(0,y.jsx)(s.Z,(0,o.Z)({fullWidth:!0},e))}})})]})})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,y.jsx)(ee.Z,{title:"Phone no.",children:(0,y.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:3,children:[(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"+1 (###) ###-####",mask:"_",fullWidth:!0,customInput:s.Z,label:"Phone Number"})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"+91 #### ###-####",mask:"_",fullWidth:!0,customInput:s.Z,label:"Contact Number"})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"(##) ####-#####",mask:"_",fullWidth:!0,customInput:s.Z,label:"Tel. with Code Area"})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"(###) ### #####",mask:"_",fullWidth:!0,customInput:s.Z,label:"US Telephone"})})]})})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,y.jsx)(ee.Z,{title:"Network",children:(0,y.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:3,children:[(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"###.###.###.###",mask:"_",fullWidth:!0,customInput:s.Z,label:"IP Address"})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"####.####.####.####",mask:"_",fullWidth:!0,customInput:s.Z,label:"IPV4"})}),(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)($.HH,{format:"####:####:####:#:###:####:####:####",mask:"_",fullWidth:!0,customInput:s.Z,label:"IPV6"})})]})})})]})})})}},48268:function(e,n,t){var o=t(64836);n.Z=void 0;var r=o(t(45045)),a=t(46417),i=(0,r.default)((0,a.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");n.Z=i}}]);