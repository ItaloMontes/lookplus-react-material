"use strict";(self.webpackChunkberry_material_react=self.webpackChunkberry_material_react||[]).push([[5445],{15445:function(e,n,t){t.r(n),t.d(n,{default:function(){return tn}});var r=t(47313),a=t(61113),i=t(9019),s=t(54641),o=t(73428),c=t(19860);function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}var d=function(){function e(e){var n=this;this._insertTag=function(e){n.container.insertBefore(e,0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{t.insertRule(e,t.cssRules.length)}catch(n){}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u="-ms-",h="-webkit-",p=Math.abs,f=String.fromCharCode,m=Object.assign;function v(e){return e.trim()}function g(e,n,t){return e.replace(n,t)}function x(e,n){return e.indexOf(n)}function y(e,n){return 0|e.charCodeAt(n)}function w(e,n,t){return e.slice(n,t)}function k(e){return e.length}function b(e){return e.length}function j(e,n){return n.push(e),e}var C=1,A=1,$=0,S=0,Z=0,z="";function M(e,n,t,r,a,i,s){return{value:e,root:n,parent:t,type:r,props:a,children:i,line:C,column:A,length:s,return:""}}function P(e,n){return m(M("",null,null,"",null,null,0),e,{length:-e.length},n)}function E(){return Z=S>0?y(z,--S):0,A--,10===Z&&(A=1,C--),Z}function O(){return Z=S<$?y(z,S++):0,A++,10===Z&&(A=1,C++),Z}function R(){return y(z,S)}function _(){return S}function N(e,n){return w(z,e,n)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return C=A=1,$=k(z=e),S=0,[]}function I(e){return z="",e}function T(e){return v(N(S-1,B(91===e?e+2:40===e?e+1:e)))}function G(e){for(;(Z=R())&&Z<33;)O();return F(e)>2||F(Z)>3?"":" "}function W(e,n){for(;--n&&O()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return N(e,_()+(n<6&&32==R()&&32==O()))}function B(e){for(;O();)switch(Z){case e:return S;case 34:case 39:34!==e&&39!==e&&B(Z);break;case 40:41===e&&B(e);break;case 92:O()}return S}function V(e,n){for(;O()&&e+Z!==57&&(e+Z!==84||47!==R()););return"/*"+N(n,S-1)+"*"+f(47===e?e:O())}function L(e){for(;!F(R());)O();return N(e,S)}function D(e){return I(J("",null,null,null,[""],e=H(e),0,[0],e))}function J(e,n,t,r,a,i,s,o,c){for(var l=0,d=0,u=s,h=0,p=0,m=0,v=1,y=1,w=1,b=0,C="",A=a,$=i,S=r,Z=C;y;)switch(m=b,b=O()){case 40:if(108!=m&&58==Z.charCodeAt(u-1)){-1!=x(Z+=g(T(b),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:Z+=T(b);break;case 9:case 10:case 13:case 32:Z+=G(m);break;case 92:Z+=W(_()-1,7);continue;case 47:switch(R()){case 42:case 47:j(K(V(O(),_()),n,t),c);break;default:Z+="/"}break;case 123*v:o[l++]=k(Z)*w;case 125*v:case 59:case 0:switch(b){case 0:case 125:y=0;case 59+d:p>0&&k(Z)-u&&j(p>32?U(Z+";",r,t,u-1):U(g(Z," ","")+";",r,t,u-2),c);break;case 59:Z+=";";default:if(j(S=q(Z,n,t,l,d,a,o,C,A=[],$=[],u),i),123===b)if(0===d)J(Z,n,S,S,A,i,u,o,$);else switch(h){case 100:case 109:case 115:J(e,S,S,r&&j(q(e,S,S,0,0,a,o,C,a,A=[],u),$),a,$,u,o,r?A:$);break;default:J(Z,S,S,S,[""],$,0,o,$)}}l=d=p=0,v=w=1,C=Z="",u=s;break;case 58:u=1+k(Z),p=m;default:if(v<1)if(123==b)--v;else if(125==b&&0==v++&&125==E())continue;switch(Z+=f(b),b*v){case 38:w=d>0?1:(Z+="\f",-1);break;case 44:o[l++]=(k(Z)-1)*w,w=1;break;case 64:45===R()&&(Z+=T(O())),h=R(),d=u=k(C=Z+=L(_())),b++;break;case 45:45===m&&2==k(Z)&&(v=0)}}return i}function q(e,n,t,r,a,i,s,o,c,l,d){for(var u=a-1,h=0===a?i:[""],f=b(h),m=0,x=0,y=0;m<r;++m)for(var k=0,j=w(e,u+1,u=p(x=s[m])),C=e;k<f;++k)(C=v(x>0?h[k]+" "+j:g(j,/&\f/g,h[k])))&&(c[y++]=C);return M(e,n,t,0===a?"rule":o,c,l,d)}function K(e,n,t){return M(e,n,t,"comm",f(Z),w(e,2,-2),0)}function U(e,n,t,r){return M(e,n,t,"decl",w(e,0,r),w(e,r+1,-1),r)}function Q(e,n){switch(function(e,n){return(((n<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3)}(e,n)){case 5103:return h+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return h+e+"-moz-"+e+u+e+e;case 6828:case 4268:return h+e+u+e+e;case 6165:return h+e+u+"flex-"+e+e;case 5187:return h+e+g(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return h+e+u+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return h+e+u+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return h+e+u+g(e,"shrink","negative")+e;case 5292:return h+e+u+g(e,"basis","preferred-size")+e;case 6060:return h+"box-"+g(e,"-grow","")+h+e+u+g(e,"grow","positive")+e;case 4554:return h+g(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,h+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-n>6)switch(y(e,n+1)){case 109:if(45!==y(e,n+4))break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==y(e,n+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch")?Q(g(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==y(e,n+1))break;case 6444:switch(y(e,k(e)-3-(~x(e,"!important")&&10))){case 107:return g(e,":",":"+h)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+h+(45===y(e,14)?"inline-":"")+"box$3$1"+h+"$2$3$1"+u+"$2box$3")+e}break;case 5936:switch(y(e,n+11)){case 114:return h+e+u+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return h+e+u+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return h+e+u+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return h+e+u+e+e}return e}function X(e,n){for(var t="",r=b(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function Y(e,n,t,r){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+X(e.children,r)+"}";case"rule":e.value=e.props.join(",")}return k(t=X(e.children,r))?e.return=e.value+"{"+t+"}":""}var ee=function(e,n,t){for(var r=0,a=0;r=a,a=R(),38===r&&12===a&&(n[t]=1),!F(a);)O();return N(e,S)},ne=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,t=e.parent,r=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||ne.get(t))&&!r){ne.set(e,!0);for(var a=[],i=function(e,n){return I(function(e,n){var t=-1,r=44;do{switch(F(r)){case 0:38===r&&12===R()&&(n[t]=1),e[t]+=ee(S-1,n,t);break;case 2:e[t]+=T(r);break;case 4:if(44===r){e[++t]=58===R()?"&\f":"",n[t]=e[t].length;break}default:e[t]+=f(r)}}while(r=O());return e}(H(e),n))}(n,a),s=t.props,o=0,c=0;o<i.length;o++)for(var l=0;l<s.length;l++,c++)e.props[c]=a[o]?i[o].replace(/&\f/g,s[l]):s[l]+" "+i[o]}}},re=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}},ae=[function(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=Q(e.value,e.length);break;case"@keyframes":return X([P(e,{value:g(e.value,"@","@"+h)})],r);case"rule":if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(n)){case":read-only":case":read-write":return X([P(e,{props:[g(n,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return X([P(e,{props:[g(n,/:(plac\w+)/,":-webkit-input-$1")]}),P(e,{props:[g(n,/:(plac\w+)/,":-moz-$1")]}),P(e,{props:[g(n,/:(plac\w+)/,u+"input-$1")]})],r)}return""}))}}],ie={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se=/[A-Z]|^ms/g,oe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ce=function(e){return 45===e.charCodeAt(1)},le=function(e){return null!=e&&"boolean"!=typeof e},de=function(e){var n=Object.create(null);return function(t){return void 0===n[t]&&(n[t]=e(t)),n[t]}}((function(e){return ce(e)?e:e.replace(se,"-$&").toLowerCase()})),ue=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(oe,(function(e,n,t){return pe={name:n,styles:t,next:pe},n}))}return 1===ie[e]||ce(e)||"number"!=typeof n||0===n?n:n+"px"};function he(e,n,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return pe={name:t.name,styles:t.styles,next:pe},t.name;if(void 0!==t.styles){var r=t.next;if(void 0!==r)for(;void 0!==r;)pe={name:r.name,styles:r.styles,next:pe},r=r.next;return t.styles+";"}return function(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=he(e,n,t[a])+";";else for(var i in t){var s=t[i];if("object"!=typeof s)null!=n&&void 0!==n[s]?r+=i+"{"+n[s]+"}":le(s)&&(r+=de(i)+":"+ue(i,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=n&&void 0!==n[s[0]]){var o=he(e,n,s);switch(i){case"animation":case"animationName":r+=de(i)+":"+o+";";break;default:r+=i+"{"+o+"}"}}else for(var c=0;c<s.length;c++)le(s[c])&&(r+=de(i)+":"+ue(i,s[c])+";")}return r}(e,n,t);case"function":if(void 0!==e){var a=pe,i=t(e);return pe=a,he(e,n,i)}}if(null==n)return t;var s=n[t];return void 0!==s?s:t}var pe,fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,me=function(e,n,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";pe=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,a+=he(t,n,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=he(t,n,e[s]),r&&(a+=i[s]);fe.lastIndex=0;for(var o,c="";null!==(o=fe.exec(a));)c+="-"+o[1];var l=function(e){for(var n,t=0,r=0,a=e.length;a>=4;++r,a-=4)n=1540483477*(65535&(n=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(n>>>16)<<16),t=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(r+2))<<16;case 2:t^=(255&e.charCodeAt(r+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(r)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:pe}};function ve(e,n,t){var r="";return t.split(" ").forEach((function(t){void 0!==e[t]?n.push(e[t]+";"):r+=t+" "})),r}var ge=function(e,n,t){!function(e,n,t){var r=e.key+"-"+n.name;!1===t&&void 0===e.registered[r]&&(e.registered[r]=n.styles)}(e,n,t);var r=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var a=n;do{e.insert(n===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};function xe(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function ye(e,n,t){var r=[],a=ve(e,r,t);return r.length<2?t:a+n(r)}var we,ke,be,je,Ce,Ae=function e(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},$e=function(e){var n=function(e){var n=e.key;if("css"===n){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||ae;var a,i,s={},o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),t=1;t<n.length;t++)s[n[t]]=!0;o.push(e)}));var c,l,u=[Y,(l=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],h=function(e){var n=b(e);return function(t,r,a,i){for(var s="",o=0;o<n;o++)s+=e[o](t,r,a,i)||"";return s}}([te,re].concat(r,u));i=function(e,n,t,r){c=t,X(D(e?e+"{"+n.styles+"}":n.styles),h),r&&(p.inserted[n.name]=!0)};var p={key:n,sheet:new d({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return p.sheet.hydrate(o),p}({key:"css"});n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=me(t,n.registered,void 0);return ge(n,a,!1),n.key+"-"+a.name};return{css:t,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return ye(n.registered,t,Ae(r))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=me(t,n.registered);xe(n,a)},keyframes:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=me(t,n.registered),i="animation-"+a.name;return xe(n,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){n.inserted[e]=!0}))},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:ve.bind(null,n.registered),merge:ye.bind(null,n.registered,t)}}(),Se=$e.cx,Ze=$e.css,ze=Ze(we||(we=l(["\n  content: '';\n  position: absolute;\n  top: 0;\n  height: var(--tree-line-height);\n  box-sizing: border-box;\n"]))),Me=Ze(ke||(ke=l(["\n  display: flex;\n  padding-inline-start: 0;\n  margin: 0;\n  padding-top: var(--tree-line-height);\n  position: relative;\n\n  ::before {\n    ",";\n    left: 50%;\n    width: 0;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n"])),ze),Pe=Ze(be||(be=l(["\n  flex: auto;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: var(--tree-line-height) var(--tree-node-padding) 0\n    var(--tree-node-padding);\n"]))),Ee=Ze(je||(je=l(["\n  ::before,\n  ::after {\n    ",";\n    right: 50%;\n    width: 50%;\n    border-top: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n  ::after {\n    left: 50%;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n\n  :only-of-type {\n    padding: 0;\n    ::after,\n    :before {\n      display: none;\n    }\n  }\n\n  :first-of-type {\n    ::before {\n      border: 0 none;\n    }\n    ::after {\n      border-radius: var(--tree-line-border-radius) 0 0 0;\n    }\n  }\n\n  :last-of-type {\n    ::before {\n      border-right: var(--tree-line-width) var(--tree-node-line-style)\n        var(--tree-line-color);\n      border-radius: 0 var(--tree-line-border-radius) 0 0;\n    }\n    ::after {\n      border: 0 none;\n    }\n  }\n"])),ze);function Oe(e){var n=e.children,t=e.label;return r.createElement("li",{className:Se(Pe,Ee,e.className)},t,r.Children.count(n)>0&&r.createElement("ul",{className:Me},n))}function Re(e){var n=e.children,t=e.label,a=e.lineHeight,i=void 0===a?"20px":a,s=e.lineWidth,o=void 0===s?"1px":s,c=e.lineColor,d=void 0===c?"black":c,u=e.nodePadding,h=void 0===u?"5px":u,p=e.lineStyle,f=void 0===p?"solid":p,m=e.lineBorderRadius,v=void 0===m?"5px":m;return r.createElement("ul",{className:Ze(Ce||(Ce=l(["\n        padding-inline-start: 0;\n        margin: 0;\n        display: flex;\n\n        --line-height: ",";\n        --line-width: ",";\n        --line-color: ",";\n        --line-border-radius: ",";\n        --line-style: ",";\n        --node-padding: ",";\n\n        --tree-line-height: var(--line-height, 20px);\n        --tree-line-width: var(--line-width, 1px);\n        --tree-line-color: var(--line-color, black);\n        --tree-line-border-radius: var(--line-border-radius, 5px);\n        --tree-node-line-style: var(--line-style, solid);\n        --tree-node-padding: var(--node-padding, 5px);\n      "])),i,o,d,v,f,h)},r.createElement(Oe,{label:t},n))}var _e=t(33497),Ne=t(48310),Fe=t(60194),He=t(32600),Ie=t(83213),Te=t(35898),Ge=t(57829),We=t(66212),Be=t(47131),Ve=t(46417);var Le=function(){return(0,Ve.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,Ve.jsx)("path",{fill:"#03a9f4",d:"M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"}),(0,Ve.jsx)("path",{fill:"#03a9f4",d:"M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"}),(0,Ve.jsx)("path",{fill:"#fff",d:"M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"})]})};var De=function(){return(0,Ve.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,Ve.jsx)("rect",{width:"16",height:"16",x:"12",y:"16",fill:"#fff",transform:"rotate(-90 20 24)"}),(0,Ve.jsx)("polygon",{fill:"#1e88e5",points:"3,17 3,31 8,32 13,31 13,17 8,16"}),(0,Ve.jsx)("path",{fill:"#4caf50",d:"M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"}),(0,Ve.jsx)("path",{fill:"#fbc02d",d:"M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"}),(0,Ve.jsx)("path",{fill:"#1565c0",d:"M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"}),(0,Ve.jsx)("polygon",{fill:"#e53935",points:"13,7 13,17 3,17"}),(0,Ve.jsx)("polygon",{fill:"#2e7d32",points:"38,24 37,32.45 27,24 37,15.55"}),(0,Ve.jsx)("path",{fill:"#4caf50",d:"M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"})]})};var Je=function(){return(0,Ve.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,Ve.jsx)("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),(0,Ve.jsx)("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})]})},qe=t(89535);var Ke=function(e){var n=e.name,t=e.role,r=e.avatar,i=e.linkedin,s=e.meet,o=e.skype,l=e.root,d=function(e){window.open(e)},u=(0,c.Z)(),h="dark"===u.palette.mode?"dark.800":"grey.100",p="dark"===u.palette.mode?"dark.900":"secondary.light";return(0,Ve.jsx)(_e.Z,{sx:{bgcolor:l?p:h,border:l?"1px solid ".concat(u.palette.primary.main):"1px solid".concat(u.palette.secondary.main),width:"max-content",m:"0px auto"},content:!1,children:(0,Ve.jsxs)(Ne.Z,{sx:{width:"100%",border:"transparent",p:1.5},children:[(0,Ve.jsxs)(Fe.ZP,{sx:{p:0,alignItems:"flex-start"},children:[(0,Ve.jsx)(He.Z,{children:(0,Ve.jsx)(qe.Z,{src:r,size:"sm"})}),(0,Ve.jsx)(Ie.Z,{sx:{m:0},primary:(0,Ve.jsx)(a.Z,{variant:"subtitle1",sx:{color:l?"primary.dark":"secondary.dark"},children:n})})]}),(0,Ve.jsxs)(Te.Z,{spacing:2,sx:{pl:7,mt:-1.75},children:[(0,Ve.jsxs)(Ge.Z,{sx:{display:"flex"},children:[!l&&(0,Ve.jsx)(We.Z,{label:t,sx:{fontSize:"0.625rem",height:20,"& .MuiChip-label":{px:.75}},color:"primary",variant:"outlined",size:"small"}),l&&(0,Ve.jsx)(a.Z,{sx:{color:"secondary.dark"},variant:"caption",children:t})]}),(0,Ve.jsxs)(Te.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,Ve.jsx)(Be.Z,{onClick:function(){return d(i)},size:"small",sx:{bgcolor:"dark"===u.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,Ve.jsx)(Je,{})}),(0,Ve.jsx)(Be.Z,{onClick:function(){return d(s)},size:"small",sx:{bgcolor:"dark"===u.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,Ve.jsx)(De,{})}),(0,Ve.jsx)(Be.Z,{onClick:function(){return d(o)},size:"small",sx:{bgcolor:"dark"===u.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,Ve.jsx)(Le,{})})]})]})]})})};var Ue=function e(n){var t=n.items;return(0,Ve.jsx)(Ve.Fragment,{children:t.map((function(n,t){return(0,Ve.jsx)(r.Fragment,{children:n.children?(0,Ve.jsx)(Oe,{label:(0,Ve.jsx)(Ke,{name:n.name,role:n.role,avatar:n.avatar,linkedin:n.linkedin,meet:n.meet,skype:n.skype,root:!1}),children:(0,Ve.jsx)(e,{items:n.children})}):(0,Ve.jsx)(Oe,{label:(0,Ve.jsx)(Ke,{name:n.name,role:n.role,avatar:n.avatar,linkedin:n.linkedin,meet:n.meet,skype:n.skype,root:!1})})},t)}))})},Qe=t(61581),Xe=t(77863),Ye=[{name:"Anne Teak",role:"CEO",avatar:"https://i.pravatar.cc/100?img=3",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Colin Sik",role:"CFO",avatar:"https://i.pravatar.cc/100?img=1",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Karen Onnabit",role:"Controller",avatar:"https://i.pravatar.cc/100?img=2",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]},{name:"Jen Tile",role:"VP of Marketing",avatar:"https://i.pravatar.cc/100?img=4",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Anne Thurium",role:"Manager",avatar:"https://i.pravatar.cc/100?img=5",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Liz Erd",role:"Junior Manager",avatar:"https://i.pravatar.cc/100?img=6",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"},{name:"Percy Vere",role:"Programmer",avatar:"https://i.pravatar.cc/100?img=7",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]}]},{name:"Harriet Upp",role:"VP of IT",avatar:"https://i.pravatar.cc/100?img=8",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Mark Ateer",role:"System Admin",avatar:"https://i.pravatar.cc/100?img=6",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"},{name:"Dave Allippa",role:"System Admin",avatar:"https://i.pravatar.cc/100?img=7",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]}]}];function en(e){var n=e.name,t=(0,c.Z)();return(0,Ve.jsx)(a.Z,{sx:{p:2,border:"1px solid ".concat("dark"===t.palette.mode?t.palette.secondary.main:t.palette.primary.main),width:"max-content",m:"auto",color:"dark"===t.palette.mode?"text.secondary":"secondary.dark",bgcolor:"dark"===t.palette.mode?"background.default":"secondary.light",borderRadius:1},children:n})}function nn(e){var n=e.items;return(0,Ve.jsx)(Ve.Fragment,{children:n.map((function(e,n){return(0,Ve.jsx)(r.Fragment,{children:e.children?(0,Ve.jsx)(Oe,{label:(0,Ve.jsx)(en,{name:e.name}),children:(0,Ve.jsx)(nn,{items:e.children})}):(0,Ve.jsx)(Oe,{label:(0,Ve.jsx)(en,{name:e.name})})},n)}))})}var tn=function(){var e=(0,c.Z)(),n=(0,Xe.I0)();return(0,r.useEffect)((function(){n((0,Qe.FJ)(!1))}),[]),(0,Ve.jsxs)(i.ZP,{container:!0,rowSpacing:2,justifyContent:"center",children:[(0,Ve.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,Ve.jsx)(o.Z,{children:(0,Ve.jsx)(s.Z,{title:"Organization Chart"})})}),(0,Ve.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,Ve.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,Ve.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,Ve.jsx)(_e.Z,{title:"Simple Chart",sx:{overflow:"auto"},children:(0,Ve.jsx)(Re,{lineWidth:"1px",lineColor:e.palette.secondary.main,lineBorderRadius:"10px",label:(0,Ve.jsx)(en,{name:Ye[0].name}),children:(0,Ve.jsx)(nn,{items:Ye[0].children})})})}),(0,Ve.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,Ve.jsx)(_e.Z,{title:"Styled Chart",sx:{overflow:"auto"},children:(0,Ve.jsx)(Re,{lineWidth:"1px",lineColor:e.palette.secondary.main,lineBorderRadius:"10px",label:(0,Ve.jsx)(Ke,{name:Ye[0].name,role:Ye[0].role,avatar:Ye[0].avatar,linkedin:Ye[0].linkedin,meet:Ye[0].meet,skype:Ye[0].skype,root:!0}),children:(0,Ve.jsx)(Ue,{items:Ye[0].children})})})})]})})]})}}}]);