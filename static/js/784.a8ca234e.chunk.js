"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[784],{6036:function(e,t,n){n.d(t,{VG_:function(){return i}});var r=n(9983);function i(e){return(0,r.w_)({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(e)}},3791:function(e,t,n){n.d(t,{M:function(){return w}});var r=n(3433),i=n(2791),u=n(9439),o=n(2199);function c(){var e=(0,i.useRef)(!1);return(0,o.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var f=n(8771);var a=n(7762),s=n(131),l=n(9829),p=n(5671),d=n(3144),m=n(136),h=n(4104),v=function(e){(0,m.Z)(n,e);var t=(0,h.Z)(n);function n(){return(0,p.Z)(this,n),t.apply(this,arguments)}return(0,d.Z)(n,[{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){var n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.children}}]),n}(i.Component);function E(e){var t=e.children,n=e.isPresent,r=(0,i.useId)(),u=(0,i.useRef)(null),o=(0,i.useRef)({width:0,height:0,top:0,left:0});return(0,i.useInsertionEffect)((function(){var e=o.current,t=e.width,i=e.height,c=e.top,f=e.left;if(!n&&u.current&&t&&i){u.current.dataset.motionPopId=r;var a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(i,"px !important;\n            top: ").concat(c,"px !important;\n            left: ").concat(f,"px !important;\n          }\n        ")),function(){document.head.removeChild(a)}}}),[n]),i.createElement(v,{isPresent:n,childRef:u,sizeRef:o},i.cloneElement(t,{ref:u}))}var y=function(e){var t=e.children,n=e.initial,r=e.isPresent,u=e.onExitComplete,o=e.custom,c=e.presenceAffectsLayout,f=e.mode,p=(0,l.h)(k),d=(0,i.useId)(),m=(0,i.useMemo)((function(){return{id:d,initial:n,isPresent:r,custom:o,onExitComplete:function(e){p.set(e,!0);var t,n=(0,a.Z)(p.values());try{for(n.s();!(t=n.n()).done;){if(!t.value)return}}catch(r){n.e(r)}finally{n.f()}u&&u()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),c?void 0:[r]);return(0,i.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[r]),i.useEffect((function(){!r&&!p.size&&u&&u()}),[r]),"popLayout"===f&&(t=i.createElement(E,{isPresent:r},t)),i.createElement(s.O.Provider,{value:m},t)};function k(){return new Map}var x=n(7497);var R=n(5956),g=function(e){return e.key||""};var w=function(e){var t=e.children,n=e.custom,a=e.initial,s=void 0===a||a,l=e.onExitComplete,p=e.exitBeforeEnter,d=e.presenceAffectsLayout,m=void 0===d||d,h=e.mode,v=void 0===h?"sync":h;(0,R.k)(!p,"Replace exitBeforeEnter with mode='wait'");var E,k=(0,i.useContext)(x.p).forceRender||function(){var e=c(),t=(0,i.useState)(0),n=(0,u.Z)(t,2),r=n[0],o=n[1],a=(0,i.useCallback)((function(){e.current&&o(r+1)}),[r]);return[(0,i.useCallback)((function(){return f.Wi.postRender(a)}),[a]),r]}()[0],w=c(),C=function(e){var t=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&t.push(e)})),t}(t),P=C,L=(0,i.useRef)(new Map).current,z=(0,i.useRef)(P),M=(0,i.useRef)(new Map).current,Z=(0,i.useRef)(!0);if((0,o.L)((function(){Z.current=!1,function(e,t){e.forEach((function(e){var n=g(e);t.set(n,e)}))}(C,M),z.current=P})),E=function(){Z.current=!0,M.clear(),L.clear()},(0,i.useEffect)((function(){return function(){return E()}}),[]),Z.current)return i.createElement(i.Fragment,null,P.map((function(e){return i.createElement(y,{key:g(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:m,mode:v},e)})));P=(0,r.Z)(P);for(var b=z.current.map(g),A=C.map(g),I=b.length,B=0;B<I;B++){var O=b[B];-1!==A.indexOf(O)||L.has(O)||L.set(O,void 0)}return"wait"===v&&L.size&&(P=[]),L.forEach((function(e,t){if(-1===A.indexOf(t)){var r=M.get(t);if(r){var u=b.indexOf(t),o=e;if(!o){o=i.createElement(y,{key:g(r),isPresent:!1,onExitComplete:function(){M.delete(t),L.delete(t);var e=z.current.findIndex((function(e){return e.key===t}));if(z.current.splice(e,1),!L.size){if(z.current=C,!1===w.current)return;k(),l&&l()}},custom:n,presenceAffectsLayout:m,mode:v},r),L.set(t,o)}P.splice(u,0,o)}}})),P=P.map((function(e){var t=e.key;return L.has(t)?e:i.createElement(y,{key:g(e),isPresent:!0,presenceAffectsLayout:m,mode:v},e)})),i.createElement(i.Fragment,null,L.size?P:P.map((function(e){return(0,i.cloneElement)(e)})))}}}]);
//# sourceMappingURL=784.a8ca234e.chunk.js.map