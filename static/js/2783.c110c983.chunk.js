"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[2783],{12783:function(e,n,r){r.r(n),r.d(n,{default:function(){return ln}});var t=r(4942),i=r(29439),a=r(1413),s=r(45987),o=r(47313),l=r(58467),c=r(2135),d=r(19860),x=r(57829),h=r(9019),m=r(16957),p=r(61113),u=r(24193),Z=r(5297),j=r(65280),f=r(74165),g=r(15861),v=r(47131),k=r(19536),y=r(90891),b=r(24631),P=r(66182),w=r(15480),z=r(24813),C=r(38743),S=r(16759),I=r(51405),R=r(35898),M=r(65033),F=r(3463),O=r(97259),W=r.n(O),E=r(75627),A=r(62563),q=r(31752),L=r(15871),_=r(73428),T=r(41727),D=r(89535),U=r(87807),B=r(93946),G=r(19374),V=r(7831),J=r(46417),N=r(5242),X=function(e){var n=e.commentId,r=e.handleReplayLikes,t=e.onReply,s=e.postId,l=e.reply,c=(0,d.Z)(),m=l.id,Z=(0,o.useState)(null),j=(0,i.Z)(Z,2),f=j[0],g=j[1],v=function(){g(null)},k=l;return(0,J.jsx)(J.Fragment,{children:Object.keys(k).length>0&&(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(x.Z,{sx:{pl:6.25},children:(0,J.jsx)(_.Z,{sx:{background:"dark"===c.palette.mode?c.palette.dark.main:c.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,J.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(D.Z,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:k.profile&&k.profile.avatar&&N("./".concat(k.profile.avatar))})}),(0,J.jsx)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{align:"left",variant:"h5",component:"div",children:k.profile.name})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsxs)(p.Z,{align:"left",variant:"caption",children:[(0,J.jsx)(U.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",k.profile.time]})})]})}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(C.Z,{sx:{borderRadius:"12px"},onClick:function(e){g(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,J.jsx)(D.Z,{variant:"rounded",sx:(0,a.Z)((0,a.Z)((0,a.Z)({},c.typography.commonAvatar),c.typography.smallAvatar),{},{background:"dark"===c.palette.mode?c.palette.dark.main:c.palette.secondary.light,color:"dark"===c.palette.mode?c.palette.dark.light:c.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:c.palette.secondary.main,color:c.palette.secondary.light}}),"aria-controls":"menu-comment-reply","aria-haspopup":"true",children:(0,J.jsx)(B.Z,{fontSize:"inherit"})})}),(0,J.jsxs)(S.Z,{id:"menu-comment-reply",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:v,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,J.jsx)(I.Z,{onClick:v,children:"Edit"}),(0,J.jsx)(I.Z,{onClick:v,children:"Delete"})]})]})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(p.Z,{align:"left",variant:"body2",children:k.data.comment})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(R.Z,{direction:"row",spacing:2,sx:{color:"dark"===c.palette.mode?"grey.700":"grey.800"},children:[(0,J.jsxs)(u.Z,{onClick:function(){return r(s,n,m)},variant:"text",color:"inherit",size:"small",startIcon:(0,J.jsx)(G.Z,{color:k.data.likes&&k.data.likes.like?"secondary":"inherit"}),children:[k.data.likes&&k.data.likes.value?k.data.likes.value:0," likes"]}),(0,J.jsx)(u.Z,{variant:"text",onClick:t,size:"small",color:"inherit",startIcon:(0,J.jsx)(V.Z,{color:"primary"}),children:"reply"})]})})]})})})})})},Y=r(27256),$=["bug","label","name","required"],Q=r(5242),H=F.Ry().shape({name:F.Z_().required("Reply Field is Required")}),K=function(e){var n=e.bug,r=e.label,t=e.name,i=e.required,o=(0,s.Z)(e,$),l=(0,E.Gc)().control,c=!1,d="";return n&&Object.prototype.hasOwnProperty.call(n,t)&&(c=!0,d=n[t].message),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(E.Qr,(0,a.Z)({name:t,control:l,defaultValue:"",render:function(e){var n=e.field;return(0,J.jsx)(b.Z,(0,a.Z)({fullWidth:!0,label:r,InputLabelProps:{className:i?"required-label":"",required:i||!1},error:c},n))}},o)),d&&(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(w.Z,{error:!0,children:d})})]})},ee=function(e){var n,r,s,l,c,m,Z,j,v,k,y,b=e.comment,w=e.handleCommentLikes,F=e.handleReplayLikes,O=e.postId,q=e.replyAdd,L=e.user,N=(0,d.Z)(),$=(0,z.Z)(N.breakpoints.down("md")),ee=(0,o.useState)(null),ne=(0,i.Z)(ee,2),re=ne[0],te=ne[1],ie=function(){te(null)},ae=(0,o.useState)(!1),se=(0,i.Z)(ae,2),oe=se[0],le=se[1],ce=function(){le((function(e){return!e}))},de=(0,J.jsx)(J.Fragment,{});Object.keys(b).length>0&&null!==(n=b.data)&&void 0!==n&&n.replies&&null!==(r=b.data)&&void 0!==r&&r.replies.length&&(de=null===(y=b.data)||void 0===y?void 0:y.replies.map((function(e,n){return(0,J.jsx)(X,{postId:O,commentId:b.id,onReply:ce,reply:e,handleReplayLikes:F},n)})));var xe=(0,E.cI)({resolver:(0,A.X)(H)}),he=xe.handleSubmit,me=xe.formState.errors,pe=xe.reset,ue=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(n){var r,t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ce(),r=W()("#REPLY_"),t={id:r,profile:L,data:{comment:n.name,likes:{like:!1,value:0},replies:[]}},q(O,b.id,t),pe({name:""});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,J.jsxs)(J.Fragment,{children:[Object.keys(b).length>0&&(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(_.Z,{sx:{background:"dark"===N.palette.mode?N.palette.dark.main:N.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,J.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(D.Z,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:b.profile&&b.profile.avatar&&Q("./".concat(b.profile.avatar))})}),(0,J.jsx)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{align:"left",variant:"h5",component:"div",children:b.profile.name})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsxs)(p.Z,{align:"left",variant:"caption",children:[(0,J.jsx)(U.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",b.profile.time]})})]})}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(C.Z,{sx:{borderRadius:"12px"},"aria-label":"more options",children:(0,J.jsx)(D.Z,{variant:"rounded",sx:(0,a.Z)((0,a.Z)((0,a.Z)({},N.typography.commonAvatar),N.typography.smallAvatar),{},{background:"dark"===N.palette.mode?N.palette.dark.main:N.palette.secondary.light,color:"dark"===N.palette.mode?N.palette.dark.light:N.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:N.palette.secondary.main,color:N.palette.secondary.light}}),"aria-controls":"menu-comment","aria-haspopup":"true",onClick:function(e){te(e.currentTarget)},children:(0,J.jsx)(B.Z,{fontSize:"inherit"})})}),(0,J.jsxs)(S.Z,{id:"menu-comment",anchorEl:re,keepMounted:!0,open:Boolean(re),onClose:ie,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,J.jsx)(I.Z,{onClick:ie,children:"Edit"}),(0,J.jsx)(I.Z,{onClick:ie,children:"Delete"})]})]})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:1.5}},children:(0,J.jsx)(p.Z,{align:"left",variant:"body2",children:null===(s=b.data)||void 0===s?void 0:s.comment})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(R.Z,{direction:"row",spacing:2,sx:{color:"dark"===N.palette.mode?"grey.700":"grey.800"},children:[(0,J.jsxs)(u.Z,{onClick:function(){return w(O,b.id)},variant:"text",color:"inherit",size:"small",startIcon:(0,J.jsx)(G.Z,{color:null!==(l=b.data)&&void 0!==l&&l.likes&&null!==(c=b.data)&&void 0!==c&&c.likes.like?"secondary":"inherit"}),children:[null!==(m=b.data)&&void 0!==m&&m.likes&&null!==(Z=b.data)&&void 0!==Z&&Z.likes.value?null===(j=b.data)||void 0===j?void 0:j.likes.value:0," likes"]}),(0,J.jsxs)(u.Z,{variant:"text",onClick:ce,color:"inherit",size:"small",startIcon:(0,J.jsx)(V.Z,{color:"primary"}),children:[null!==(v=b.data)&&void 0!==v&&v.replies?null===(k=b.data)||void 0===k?void 0:k.replies.length:0," reply"]})]})})]})})}),de,(0,J.jsx)(M.Z,{in:oe,sx:{width:"100%"},children:oe&&(0,J.jsx)(h.ZP,{item:!0,xs:12,sx:{pl:{xs:1,sm:3},pt:3},children:(0,J.jsx)(x.Z,{sx:(0,t.Z)({ml:4.25},N.breakpoints.down("md"),{ml:0}),children:(0,J.jsx)("form",{onSubmit:he(ue),children:(0,J.jsxs)(h.ZP,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,J.jsx)(h.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,J.jsx)(D.Z,{sx:{mt:1.5},alt:"User 1",src:b.profile&&b.profile.avatar&&Q("./".concat(b.profile.avatar))})}),(0,J.jsx)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,sx:{mt:1},children:(0,J.jsx)(E.RV,(0,a.Z)((0,a.Z)({},xe),{},{children:(0,J.jsx)(K,{fullWidth:!0,name:"name",label:"Write a reply...",size:$?"small":"medium",bug:me,InputProps:{label:"Write a reply...",startAdornment:(0,J.jsx)(T.Z,{position:"start",children:(0,J.jsx)(Y.Z,{fontSize:"small"})})}})}))}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(P.Z,{children:(0,J.jsx)(u.Z,{type:"submit",variant:"contained",color:"secondary",size:$?"small":"large",sx:{mt:1.5},children:"Reply"})})})]})})})})})]})},ne=r(33497),re=r(54285),te=r(56854),ie=r(7003),ae=r(73984),se=r(25486);function oe(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return"".concat(e,"?w=").concat(n*i,"&h=").concat(r*t,"&fit=crop&auto=format 1x,\n  ").concat(e,"?w=").concat(n*i,"&h=").concat(r*t,"&fit=crop&auto=format&dpr=2 2x")}var le=function(e){var n=e.itemData,r=(0,se.Z)().borderRadius;return(0,J.jsx)(ae.Z,{sx:{transform:"translateZ(0)",overflowY:"visible",mb:0},gap:8,children:n.map((function(e){var n=e.featured?2:1,t=e.featured?2:1;return(0,J.jsxs)(te.Z,{cols:n,rows:t,sx:{overflow:"hidden",borderRadius:"".concat(r,"px")},children:[(0,J.jsx)("img",{srcSet:oe("assets/images/profile/".concat(e.img),250,200,t,n),alt:e.title,loading:"lazy"}),(0,J.jsx)(ie.Z,{sx:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},title:e.title,position:"top",actionPosition:"left"})]},e.img)}))})},ce=r(31999),de=r(27562),xe=r(44180),he=r(42042),me=r(81208),pe=["bug","label","size","fullWidth","name","required"],ue=r(5242),Ze=F.Ry().shape({name:F.Z_().required("Comment Field is Required")}),je=function(e){var n=e.bug,r=e.label,t=e.size,i=e.fullWidth,o=void 0===i||i,l=e.name,c=e.required,d=(0,s.Z)(e,pe),x=!1,m="";return n&&Object.prototype.hasOwnProperty.call(n,l)&&(x=!0,m=n[l].message),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(E.Qr,(0,a.Z)({name:l,defaultValue:"",render:function(e){var n=e.field;return(0,J.jsx)(b.Z,(0,a.Z)({fullWidth:o,size:t,label:r,InputLabelProps:{className:c?"required-label":"",required:c||!1},error:x},n))}},d)),m&&(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(w.Z,{error:!0,children:m})})]})},fe=function(e){var n=e.commentAdd,r=e.handleCommentLikes,s=e.handlePostLikes,l=e.handleReplayLikes,c=e.post,x=e.replyAdd,Z=(0,d.Z)(),j=(0,re.Z)().user,k=c.id,y=c.data,b=c.profile;b=(0,a.Z)((0,a.Z)({},b),{},{name:(null===j||void 0===j?void 0:j.name)||b.name});var w=(0,se.Z)().borderRadius,F=(0,z.Z)(Z.breakpoints.down("md")),O=o.useState(null),_=(0,i.Z)(O,2),T=_[0],V=_[1],N=function(){V(null)},X=o.useState(null),Y=(0,i.Z)(X,2),$=Y[0],Q=Y[1],H=function(){Q(null)},K=o.useState(!(y.comments&&y.comments.length>0)),te=(0,i.Z)(K,2),ie=te[0],ae=te[1],oe=function(){ae((function(e){return!e}))},pe=(0,J.jsx)(J.Fragment,{});y&&y.comments&&(pe=y.comments.map((function(e){return(0,J.jsx)(ee,{postId:k,comment:e,user:b,replyAdd:x,handleCommentLikes:r,handleReplayLikes:l},e.id)})));var fe=(0,E.cI)({resolver:(0,A.X)(Ze)}),ge=fe.handleSubmit,ve=fe.formState.errors,ke=fe.reset,ye=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r){var t,i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe(),t=W()("#COMMENT_"),i={id:t,profile:b,data:{comment:r.name,likes:{like:!1,value:0},replies:[]}},n(k,i),ke({name:""});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,J.jsx)(ne.Z,{children:(0,J.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(D.Z,{alt:"User 1",src:b.avatar&&ue("./".concat(b.avatar))})}),(0,J.jsx)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{align:"left",variant:"h5",component:"div",children:b.name})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsxs)(p.Z,{align:"left",variant:"caption",children:[(0,J.jsx)(U.Z,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",b.time]})})]})}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(C.Z,{sx:{borderRadius:"12px"},onClick:function(e){V(e.currentTarget)},"aria-label":"more options",children:(0,J.jsx)(D.Z,{variant:"rounded",sx:(0,a.Z)((0,a.Z)((0,a.Z)({},Z.typography.commonAvatar),Z.typography.smallAvatar),{},{background:"dark"===Z.palette.mode?Z.palette.dark.main:Z.palette.secondary.light,color:"dark"===Z.palette.mode?Z.palette.dark.light:Z.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:Z.palette.secondary.main,color:Z.palette.secondary.light}}),"aria-controls":"menu-post","aria-haspopup":"true",children:(0,J.jsx)(B.Z,{fontSize:"inherit"})})}),(0,J.jsxs)(S.Z,{id:"menu-post",anchorEl:T,keepMounted:!0,open:Boolean(T),onClose:N,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,J.jsx)(I.Z,{onClick:N,children:"Edit"}),(0,J.jsx)(I.Z,{onClick:N,children:"Delete"})]})]})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,sx:{"& > p":(0,a.Z)((0,a.Z)({},Z.typography.body1),{},{mb:0})},children:(0,J.jsx)(q.D,{remarkPlugins:[L.Z],children:y.content})}),y&&y.images&&y.images.length>0&&(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(le,{itemData:y.images})}),y.video&&(0,J.jsx)(h.ZP,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:2}},children:(0,J.jsx)(m.Z,{sx:(0,t.Z)({borderRadius:"".concat(w,"px"),height:330},Z.breakpoints.down("xl"),{height:220}),component:"iframe",src:"https://www.youtube.com/embed/".concat(y.video),"aria-label":"theme related video"})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,sx:{mt:0,color:"dark"===Z.palette.mode?"grey.700":"grey.800"},children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsxs)(R.Z,{direction:"row",spacing:2,children:[(0,J.jsxs)(u.Z,{variant:"text",onClick:function(){return s(k)},color:"inherit",size:"small",startIcon:(0,J.jsx)(G.Z,{color:y&&y.likes&&y.likes.like?"primary":"inherit"}),children:[y&&y.likes&&y.likes.value?y.likes.value:0,(0,J.jsx)(p.Z,{color:"inherit",sx:{fontWeight:500,ml:.5,display:{xs:"none",sm:"block"}},children:"likes"})]}),(0,J.jsxs)(u.Z,{onClick:oe,size:"small",variant:"text",color:"inherit",startIcon:(0,J.jsx)(me.Z,{color:"secondary"}),children:[y.comments?y.comments.length:0," comments"]})]})}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(v.Z,{onClick:function(e){Q(e.currentTarget)},size:"large","aria-label":"share options",children:(0,J.jsx)(ce.Z,{sx:{width:"16px",height:"16px"}})}),(0,J.jsxs)(S.Z,{id:"menu-post",anchorEl:$,keepMounted:!0,open:Boolean($),onClose:H,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiSvgIcon-root":{marginRight:"14px",fontSize:"1.25rem"}},children:[(0,J.jsxs)(I.Z,{onClick:H,children:[(0,J.jsx)(ce.Z,{fontSize:"inherit"})," Share Now"]}),(0,J.jsxs)(I.Z,{onClick:H,children:[(0,J.jsx)(de.Z,{fontSize:"inherit"})," Share to Friends"]}),(0,J.jsxs)(I.Z,{onClick:H,children:[(0,J.jsx)(xe.Z,{fontSize:"inherit"})," Send in Messanger"]}),(0,J.jsxs)(I.Z,{onClick:H,children:[(0,J.jsx)(he.Z,{fontSize:"inherit"})," Copy Link"]})]})]})]})}),(0,J.jsx)(M.Z,{in:ie,sx:{width:"100%"},children:ie&&(0,J.jsx)(h.ZP,{item:!0,xs:12,sx:{pt:2},children:(0,J.jsx)("form",{onSubmit:ge(ye),children:(0,J.jsxs)(h.ZP,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,J.jsx)(h.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,J.jsx)(D.Z,{sx:{mt:.75},alt:"User 1",src:b.avatar&&ue("./".concat(b.avatar)),size:"xs"})}),(0,J.jsx)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,J.jsx)(E.RV,(0,a.Z)((0,a.Z)({},fe),{},{children:(0,J.jsx)(je,{fullWidth:!0,name:"name",label:"Write a comment...",size:F?"small":"medium",bug:ve})}))}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(P.Z,{children:(0,J.jsx)(u.Z,{type:"submit",variant:"contained",color:"secondary",size:F?"small":"large",sx:{mt:.5},children:"Comment"})})})]})})})}),pe]})})},ge=r(12401),ve=r(77863),ke=r(20696),ye=r(823),be=r(30040),Pe=r(71829),we=r(56439),ze=r(37186),Ce=r(7463),Se=r(15295),Ie=r(61680),Re=function(){var e=(0,d.Z)(),n=(0,ve.I0)(),r=o.useState([]),t=(0,i.Z)(r,2),s=t[0],l=t[1],c=(0,ve.v9)((function(e){return e.user})),m=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.Jq)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o.useEffect((function(){l(c.posts)}),[c]),o.useEffect((function(){m()}),[]);var Z=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r,t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.DF)(r,t));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),j=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r,t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.Ir)(r,t));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),w=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r,t,i){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.Bn)(r,t,i));case 1:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),z=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.n9)(r));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r,t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.xG)(r,t));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),S=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r,t,i){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,ke.YO)(r,t,i));case 1:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),I={borderRadius:"8px",width:48,height:48,fontSize:"1.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"dark"===e.palette.mode?"1px solid":"none","&>svg":{width:24,height:24}};return(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(ne.Z,{children:[(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)({},I),{},{bgcolor:"dark"===e.palette.mode?e.palette.primary.main+20:"primary.light",border:"dark"===e.palette.mode?"1px solid":"none",borderColor:"primary.main",color:"primary.dark"}),children:(0,J.jsx)(de.Z,{})})}),(0,J.jsxs)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,J.jsx)(p.Z,{variant:"h3",color:"primary",component:"div",sx:{mb:.625},children:"239k"}),(0,J.jsx)(p.Z,{variant:"body2",children:"Friends"})]}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(v.Z,{size:"large","aria-label":"navigation icon",children:(0,J.jsx)(Ce.Z,{})})})]}),(0,J.jsx)(k.Z,{sx:{margin:"16px 0"}}),(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(x.Z,{sx:(0,a.Z)((0,a.Z)({},I),{},{bgcolor:"dark"===e.palette.mode?e.palette.secondary.main+20:"secondary.light",borderColor:"secondary.main",color:"secondary.dark"}),children:(0,J.jsx)(Ie.Z,{})})}),(0,J.jsxs)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,J.jsx)(p.Z,{variant:"h3",sx:{mb:.625,color:"dark"===e.palette.mode?e.palette.text.secondary:"secondary.main"},children:"234k"}),(0,J.jsx)(p.Z,{variant:"body2",children:"Followers"})]}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(v.Z,{size:"large","aria-label":"navigation icon",children:(0,J.jsx)(Ce.Z,{})})})]})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(ne.Z,{children:[(0,J.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(p.Z,{variant:"h4",children:"About"})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(p.Z,{variant:"body2",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."})})]}),(0,J.jsx)(k.Z,{sx:{margin:"16px 0"}}),(0,J.jsxs)(h.ZP,{container:!0,spacing:2,sx:{"& >div":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",width:"100%"},"& a":{color:e.palette.grey[700],"& svg":{mr:1,verticalAlign:"bottom"},"&:hover":{color:e.palette.primary.main,textDecoration:"none"}}},children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(y.Z,{href:"https://codedthemes.com/",target:"_blank",underline:"hover",children:[(0,J.jsx)(Se.Z,{color:"secondary"})," https://codedthemes.com/"]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(y.Z,{href:"https://www.instagram.com/codedthemes",target:"_blank",underline:"hover",children:[(0,J.jsx)(Pe.Z,{sx:{color:e.palette.orange.dark}})," https://www.instagram.com/codedthemes"]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(y.Z,{href:"https://www.facebook.com/codedthemes",target:"_blank",underline:"hover",children:[(0,J.jsx)(be.Z,{color:"primary"})," https://www.facebook.com/codedthemes"]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(y.Z,{href:"https://in.linkedin.com/company/codedthemes",target:"_blank",underline:"hover",children:[(0,J.jsx)(ze.Z,{sx:{color:e.palette.grey[900]}})," https://in.linkedin.com/company/codedthemes"]})})]})]})})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:12,md:8,children:(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(ne.Z,{children:(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(b.Z,{id:"outlined-textarea",placeholder:"What\u2019s on your mind, Larry?",rows:4,fullWidth:!0,multiline:!0})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(u.Z,{variant:"text",color:"secondary",startIcon:(0,J.jsx)(ye.Z,{}),children:"Gallery"})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(P.Z,{children:(0,J.jsx)(u.Z,{variant:"contained",color:"secondary",startIcon:(0,J.jsx)(we.Z,{}),children:"Post"})})})]})})]})})}),s&&s.map((function(e){return(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsx)(fe,{post:e,editPost:Z,renderPost:m,setPosts:l,commentAdd:j,replyAdd:w,handlePostLikes:z,handleCommentLikes:C,handleReplayLikes:S},e.id)},e.id)}))]})})]})},Me=r(49914),Fe=r(82461),Oe=r(1834),We=function(){var e=(0,ve.I0)(),n=o.useState([]),r=(0,i.Z)(n,2),t=r[0],s=r[1],l=(0,ve.v9)((function(e){return e.user}));o.useEffect((function(){s(l.followers)}),[l]),o.useEffect((function(){e((0,ke.ET)())}),[]);var c=o.useState(""),d=(0,i.Z)(c,2),x=d[0],m=d[1],u=function(){var n=(0,g.Z)((0,f.Z)().mark((function n(r){var t;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=null===r||void 0===r?void 0:r.target.value,m(t),e(t?(0,ke.WX)(t):(0,ke.ET)());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=(0,J.jsx)(J.Fragment,{});return t&&(Z=t.map((function(e,n){return(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,J.jsx)(Fe.Z,(0,a.Z)({},e))},n)}))),(0,J.jsx)(ne.Z,{title:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{variant:"h3",children:"Followers"})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(Me.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search Followers",value:x,onChange:u,startAdornment:(0,J.jsx)(T.Z,{position:"start",children:(0,J.jsx)(Oe.jVj,{stroke:1.5,size:"16px"})})})})]}),children:(0,J.jsx)(h.ZP,{container:!0,direction:"row",spacing:ge.dv,children:Z})})},Ee=r(34153),Ae=function(){var e=(0,d.Z)(),n=(0,ve.I0)(),r=o.useState([]),t=(0,i.Z)(r,2),s=t[0],l=t[1],c=(0,ve.v9)((function(e){return e.user}));o.useEffect((function(){l(c.friends)}),[c]),o.useEffect((function(){n((0,ke.$J)())}),[]);var x=(0,J.jsx)(J.Fragment,{});s&&(x=s.map((function(e,n){return(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,J.jsx)(Ee.Z,(0,a.Z)({},e))},n)})));var m=o.useState(""),u=(0,i.Z)(m,2),Z=u[0],j=u[1],v=function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r){var t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null===r||void 0===r?void 0:r.target.value,j(t),n(t?(0,ke.Gy)(t):(0,ke.$J)());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,J.jsx)(ne.Z,{title:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsxs)(p.Z,{variant:"h3",children:["Friends"," ",(0,J.jsx)(p.Z,{variant:"h3",component:"span",sx:{color:e.palette.grey[300],fontWeight:500},children:"(463)"})]})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(Me.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search",value:Z,onChange:v,startAdornment:(0,J.jsx)(T.Z,{position:"start",children:(0,J.jsx)(Oe.jVj,{stroke:1.5,size:"16px"})})})})]}),children:(0,J.jsx)(h.ZP,{container:!0,direction:"row",spacing:ge.dv,children:x})})},qe=r(93405),Le=r(89823),_e=r(96385),Te=function(e){var n=e.dateTime,r=e.image,t=e.title,s=(0,d.Z)(),l=r&&_e("./".concat(r)),c=(0,o.useState)(null),x=(0,i.Z)(c,2),u=x[0],Z=x[1],j=function(){Z(null)};return(0,J.jsxs)(_.Z,{sx:{background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"dark"===s.palette.mode?"none":"1px solid",borderColor:s.palette.grey[100]},children:[(0,J.jsx)(m.Z,{component:"img",image:l,title:"Slider5 image"}),(0,J.jsx)(qe.Z,{sx:{p:2,pb:"16px !important"},children:(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsxs)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,J.jsx)(p.Z,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",mb:.5},children:t}),(0,J.jsxs)(p.Z,{variant:"caption",sx:{mt:1,fontSize:"12px"},children:[(0,J.jsx)(Le.Z,{sx:{mr:.5,fontSize:"0.875rem",verticalAlign:"text-top"}}),n]})]}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(C.Z,{sx:{borderRadius:"12px"},onClick:function(e){Z(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,J.jsx)(D.Z,{variant:"rounded",sx:(0,a.Z)((0,a.Z)((0,a.Z)({},s.typography.commonAvatar),s.typography.mediumAvatar),{},{background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.secondary.light,color:"dark"===s.palette.mode?s.palette.dark.light:s.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:s.palette.secondary.main,color:s.palette.secondary.light}}),"aria-haspopup":"true",children:(0,J.jsx)(B.Z,{fontSize:"inherit"})})}),(0,J.jsxs)(S.Z,{id:"menu-gallery-card",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:j,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,J.jsx)(I.Z,{onClick:j,children:" Remove Tag"}),(0,J.jsx)(I.Z,{onClick:j,children:" Download"}),(0,J.jsx)(I.Z,{onClick:j,children:" Make Profile Picture "}),(0,J.jsx)(I.Z,{onClick:j,children:" Make Cover Photo "}),(0,J.jsx)(I.Z,{onClick:j,children:" Find Support or Report Photo "})]})]})]})})]})},De=function(){var e=(0,ve.I0)(),n=o.useState([]),r=(0,i.Z)(n,2),t=r[0],s=r[1],l=(0,ve.v9)((function(e){return e.user}));o.useEffect((function(){s(l.gallery)}),[l]),o.useEffect((function(){e((0,ke.we)())}),[]);var c=(0,J.jsx)(J.Fragment,{});return t&&(c=t.map((function(e,n){return(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,J.jsx)(Te,(0,a.Z)({},e))},n)}))),(0,J.jsx)(ne.Z,{title:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{variant:"h3",children:"Gallery"})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(u.Z,{variant:"contained",color:"secondary",children:"Add Photos"})})]}),children:(0,J.jsx)(h.ZP,{container:!0,direction:"row",spacing:ge.dv,children:c})})},Ue=r(63585),Be=r(74748),Ge=r(38398),Ve=r(22e3),Je=r(51312),Ne=r(87222),Xe=r(5242),Ye=function(e){var n=e.avatar,r=e.name,t=e.mutual,a=(0,d.Z)(),s=n&&Xe("./".concat(n)),l={borderColor:"dark"===a.palette.mode?a.palette.dark.main:a.palette.grey[200],background:"dark"===a.palette.mode?a.palette.dark.dark:a.palette.background.paper},c=(0,o.useState)(null),x=(0,i.Z)(c,2),m=x[0],Z=x[1],j=function(){Z(null)};return(0,J.jsx)(_.Z,{sx:{p:2,background:"dark"===a.palette.mode?a.palette.dark.main:a.palette.grey[50],border:"1px solid",borderColor:"dark"===a.palette.mode?a.palette.dark.main:a.palette.grey[100],"&:hover":{border:"1px solid".concat(a.palette.primary.main)}},children:(0,J.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(Ue.Z,{alt:"User 1",src:s})}),(0,J.jsxs)(h.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,J.jsx)(p.Z,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:r}),(0,J.jsxs)(p.Z,{variant:"subtitle2",sx:{mt:.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:[t," mutual friends"]})]}),(0,J.jsxs)(h.ZP,{item:!0,children:[(0,J.jsx)(v.Z,{size:"small",sx:{mt:-.75,mr:-.75},onClick:function(e){Z(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,J.jsx)(Ge.Z,{fontSize:"small",color:"primary","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),(0,J.jsxs)(S.Z,{id:"menu-friend-card",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:j,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,J.jsxs)(I.Z,{onClick:j,children:[(0,J.jsx)(Be.Z,{children:(0,J.jsx)(Ve.Z,{fontSize:"small"})}),"Favorites"]}),(0,J.jsxs)(I.Z,{onClick:j,children:[(0,J.jsx)(Be.Z,{children:(0,J.jsx)(Ne.Z,{fontSize:"small"})}),"Edit Friend List"]}),(0,J.jsxs)(I.Z,{onClick:j,children:[(0,J.jsx)(Be.Z,{children:(0,J.jsx)(Je.Z,{fontSize:"small"})}),"Unfriend"]})]})]})]})}),(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,J.jsx)(h.ZP,{item:!0,xs:6,children:(0,J.jsx)(u.Z,{variant:"outlined",fullWidth:!0,sx:l,children:"Confirm"})}),(0,J.jsx)(h.ZP,{item:!0,xs:6,children:(0,J.jsx)(u.Z,{variant:"outlined",fullWidth:!0,color:"error",sx:l,children:"Delete"})})]})})]})})},$e=function(){var e=(0,ve.I0)(),n=o.useState([]),r=(0,i.Z)(n,2),t=r[0],s=r[1],l=(0,ve.v9)((function(e){return e.user})),c=o.useState(""),d=(0,i.Z)(c,2),x=d[0],m=d[1],u=function(){var n=(0,g.Z)((0,f.Z)().mark((function n(r){var t;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=null===r||void 0===r?void 0:r.target.value,m(t),e(t?(0,ke.YJ)(t):(0,ke._e)());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();o.useEffect((function(){s(l.friendRequests)}),[l]),o.useEffect((function(){e((0,ke._e)())}),[]);var Z=(0,J.jsx)(J.Fragment,{});return t&&(Z=t.map((function(e,n){return(0,J.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,J.jsx)(Ye,(0,a.Z)({},e))},n)}))),(0,J.jsx)(ne.Z,{title:(0,J.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(p.Z,{variant:"h3",children:"Friend Request"})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(Me.Z,{size:"small",id:"input-search-user-profile",placeholder:"Search Friends",value:x,onChange:u,startAdornment:(0,J.jsx)(T.Z,{position:"start",children:(0,J.jsx)(Oe.jVj,{stroke:1.5,size:"16px"})})})})]}),children:(0,J.jsx)(h.ZP,{container:!0,direction:"row",spacing:ge.dv,children:Z})})},Qe=r(39236),He=r(36459),Ke=r(84488),en=function(e){var n=Object.assign({},((0,He.Z)(e),e));return(0,J.jsx)(Ke.Z,(0,a.Z)((0,a.Z)({variant:"rectangular"},n),{},{animation:"wave"}))},nn=r(43621),rn=r(20889),tn=r(27362),an=["children","value","index"];function sn(e){var n=e.children,r=e.value,t=e.index,i=(0,s.Z)(e,an);return(0,J.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:r!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},i),{},{children:r===t&&(0,J.jsx)(x.Z,{sx:{p:0},children:n})}))}var on=[{to:"/user/social-profile/posts",icon:(0,J.jsx)(Oe.M$u,{stroke:1.5,size:"17px"}),label:"Profile"},{to:"/user/social-profile/follower",icon:(0,J.jsx)(Oe.SrG,{stroke:1.5,size:"17px"}),label:"Followers"},{to:"/user/social-profile/friends",icon:(0,J.jsx)(Oe.j4e,{stroke:1.5,size:"17px"}),label:(0,J.jsxs)(J.Fragment,{children:["friends ",(0,J.jsx)(Qe.Z,{label:"100",size:"small",chipcolor:"secondary",sx:{ml:1.5}})]})},{to:"/user/social-profile/gallery",icon:(0,J.jsx)(Oe.m1R,{stroke:1.5,size:"17px"}),label:"Gallery"},{to:"/user/social-profile/friend-request",icon:(0,J.jsx)(Oe.$4n,{stroke:1.5,size:"17px"}),label:"Friend Request"}],ln=function(){var e,n,r=(0,d.Z)(),s=(0,re.Z)().user,x=(0,se.Z)().borderRadius,f=0;switch((0,l.UO)().tab){case"follower":f=1;break;case"friends":f=2;break;case"gallery":f=3;break;case"friend-request":f=4;break;default:f=0}var g=o.useState(f),v=(0,i.Z)(g,2),k=v[0],y=v[1],b=(0,o.useState)(!0),P=(0,i.Z)(b,2),w=P[0],z=P[1];return(0,o.useEffect)((function(){z(!1)}),[]),(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,children:(0,J.jsxs)(ne.Z,{contentSX:(0,t.Z)({p:1.5,paddingBottom:"0px !important"},r.breakpoints.down("lg"),{textAlign:"center"}),children:[w?(0,J.jsx)(en,{sx:{borderRadius:"".concat(x,"px"),overflow:"hidden",mb:3,height:{xs:85,sm:150,md:260}}}):(0,J.jsx)(m.Z,{component:"img",image:tn,sx:{borderRadius:"".concat(x,"px"),overflow:"hidden",mb:3},alt:"pro images"}),(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsx)(h.ZP,{item:!0,xs:12,md:3,children:w?(0,J.jsx)(en,{sx:(e={margin:"-70px 0 0 auto",borderRadius:"16px"},(0,t.Z)(e,r.breakpoints.down("lg"),{margin:"-70px auto 0"}),(0,t.Z)(e,r.breakpoints.down("md"),{margin:"-60px auto 0"}),(0,t.Z)(e,"width",{xs:72,sm:100,md:140}),(0,t.Z)(e,"height",{xs:72,sm:100,md:140}),e)}):(0,J.jsx)(D.Z,{alt:"User 1",src:rn,sx:(n={margin:"-70px 0 0 auto",borderRadius:"16px"},(0,t.Z)(n,r.breakpoints.down("lg"),{margin:"-70px auto 0"}),(0,t.Z)(n,r.breakpoints.down("md"),{margin:"-60px auto 0"}),(0,t.Z)(n,"width",{xs:72,sm:100,md:140}),(0,t.Z)(n,"height",{xs:72,sm:100,md:140}),n)})}),(0,J.jsxs)(h.ZP,{item:!0,xs:12,md:9,children:[(0,J.jsxs)(h.ZP,{container:!0,spacing:ge.dv,children:[(0,J.jsxs)(h.ZP,{item:!0,xs:12,md:4,children:[(0,J.jsx)(p.Z,{variant:"h5",children:null===s||void 0===s?void 0:s.name}),(0,J.jsx)(p.Z,{variant:"subtitle2",children:"Android Developer"})]}),(0,J.jsx)(h.ZP,{item:!0,xs:12,md:8,children:(0,J.jsxs)(h.ZP,{container:!0,spacing:1,sx:(0,t.Z)({justifyContent:"flex-end"},r.breakpoints.down("lg"),{justifyContent:"center"}),children:[(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(u.Z,{variant:"outlined",children:"Message"})}),(0,J.jsx)(h.ZP,{item:!0,children:(0,J.jsx)(u.Z,{variant:"contained",startIcon:(0,J.jsx)(nn.Z,{}),children:"Send Request"})})]})})]}),(0,J.jsx)(h.ZP,{container:!0,justifyContent:"flex-end",children:(0,J.jsx)(Z.Z,{value:k,variant:"scrollable",onChange:function(e,n){y(n)},sx:{marginTop:2.5,"& .MuiTabs-flexContainer":{border:"none"},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:"dark"===r.palette.mode?"grey.600":"grey.900",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},"& a.Mui-selected":{color:"primary.main"},"& a > svg":{marginBottom:"4px !important",mr:1.25}},children:on.map((function(e,n){return(0,J.jsx)(j.Z,(0,a.Z)({component:c.rU,to:e.to,icon:e.icon,label:e.label},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(n)),n)}))})})]})]})]})}),(0,J.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,J.jsx)(sn,{value:k,index:0,children:(0,J.jsx)(Re,{})}),(0,J.jsx)(sn,{value:k,index:1,children:(0,J.jsx)(We,{})}),(0,J.jsx)(sn,{value:k,index:2,children:(0,J.jsx)(Ae,{})}),(0,J.jsx)(sn,{value:k,index:3,children:(0,J.jsx)(De,{})}),(0,J.jsx)(sn,{value:k,index:4,children:(0,J.jsx)($e,{})})]})]})}}}]);