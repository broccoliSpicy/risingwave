"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{5330:function(r,n,e){var t=e(85893),o=e(40639);e(67294);n.Z=function(r){var n=r.children;return(0,t.jsx)(o.xv,{mb:2,textColor:"teal.500",fontWeight:"semibold",lineHeight:"6",children:n})}},69333:function(r,n,e){var t=e(47568),o=e(51438),i=e(34051),u=e.n(i),a=function(){function r(){(0,o.Z)(this,r)}return r.prototype.get=function(r){return(0,t.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(r);case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t);case 10:throw n.prev=10,n.t0=n.catch(0),console.error(n.t0),Error("Failed to fetch "+r);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},r}();n.Z=new a},40965:function(r,n,e){e.d(n,{Kn:function(){return y},L3:function(){return t},XE:function(){return R},XK:function(){return o},Yz:function(){return b},cX:function(){return P},lW:function(){return w},qb:function(){return T},u:function(){return i},yM:function(){return A}});var t={UNSPECIFIED:"UNSPECIFIED",FRONTEND:"FRONTEND",COMPUTE_NODE:"COMPUTE_NODE",RISE_CTL:"RISE_CTL",COMPACTOR:"COMPACTOR",META:"META",UNRECOGNIZED:"UNRECOGNIZED"};function o(r){switch(r){case 0:case"UNSPECIFIED":return t.UNSPECIFIED;case 1:case"FRONTEND":return t.FRONTEND;case 2:case"COMPUTE_NODE":return t.COMPUTE_NODE;case 3:case"RISE_CTL":return t.RISE_CTL;case 4:case"COMPACTOR":return t.COMPACTOR;case 5:case"META":return t.META;default:return t.UNRECOGNIZED}}function i(r){switch(r){case t.UNSPECIFIED:return"UNSPECIFIED";case t.FRONTEND:return"FRONTEND";case t.COMPUTE_NODE:return"COMPUTE_NODE";case t.RISE_CTL:return"RISE_CTL";case t.COMPACTOR:return"COMPACTOR";case t.META:return"META";case t.UNRECOGNIZED:default:return"UNRECOGNIZED"}}var u="DIRECTION_UNSPECIFIED",a="DIRECTION_ASCENDING",c="DIRECTION_DESCENDING",d="UNRECOGNIZED";function s(r){switch(r){case 0:case"DIRECTION_UNSPECIFIED":return u;case 1:case"DIRECTION_ASCENDING":return a;case 2:case"DIRECTION_DESCENDING":return c;default:return d}}var N="UNSPECIFIED",l="OK",E="UNKNOWN_WORKER",f="UNRECOGNIZED";function I(r){switch(r){case 0:case"UNSPECIFIED":return N;case 1:case"OK":return l;case 2:case"UNKNOWN_WORKER":return E;default:return f}}var v="UNSPECIFIED",O="STARTING",C="RUNNING",p="UNRECOGNIZED";function m(r){switch(r){case 0:case"UNSPECIFIED":return v;case 1:case"STARTING":return O;case 2:case"RUNNING":return C;default:return p}}var D="UNSPECIFIED",U="NONE",S="UNRECOGNIZED";function h(r){switch(r){case 0:case"UNSPECIFIED":return D;case 1:case"NONE":return U;default:return S}}var T={fromJSON:function(r){return{code:J(r.code)?I(r.code):N,message:J(r.message)?String(r.message):""}},toJSON:function(r){var n={};return void 0!==r.code&&(n.code=function(r){switch(r){case N:return"UNSPECIFIED";case l:return"OK";case E:return"UNKNOWN_WORKER";default:return"UNRECOGNIZED"}}(r.code)),void 0!==r.message&&(n.message=r.message),n},fromPartial:function(r){var n,e,t={code:N,message:""};return t.code=null!==(n=r.code)&&void 0!==n?n:N,t.message=null!==(e=r.message)&&void 0!==e?e:"",t}};var R={fromJSON:function(r){return{host:J(r.host)?String(r.host):"",port:J(r.port)?Number(r.port):0}},toJSON:function(r){var n={};return void 0!==r.host&&(n.host=r.host),void 0!==r.port&&(n.port=Math.round(r.port)),n},fromPartial:function(r){var n,e,t={host:"",port:0};return t.host=null!==(n=r.host)&&void 0!==n?n:"",t.port=null!==(e=r.port)&&void 0!==e?e:0,t}};var y={fromJSON:function(r){return{id:J(r.id)?Number(r.id):0,workerNodeId:J(r.workerNodeId)?Number(r.workerNodeId):0}},toJSON:function(r){var n={};return void 0!==r.id&&(n.id=Math.round(r.id)),void 0!==r.workerNodeId&&(n.workerNodeId=Math.round(r.workerNodeId)),n},fromPartial:function(r){var n,e,t={id:0,workerNodeId:0};return t.id=null!==(n=r.id)&&void 0!==n?n:0,t.workerNodeId=null!==(e=r.workerNodeId)&&void 0!==e?e:0,t}};var P={fromJSON:function(r){return{id:J(r.id)?Number(r.id):0,type:J(r.type)?o(r.type):t.UNSPECIFIED,host:J(r.host)?R.fromJSON(r.host):void 0,state:J(r.state)?m(r.state):v,parallelUnits:Array.isArray(null===r||void 0===r?void 0:r.parallelUnits)?r.parallelUnits.map((function(r){return y.fromJSON(r)})):[]}},toJSON:function(r){var n={};return void 0!==r.id&&(n.id=Math.round(r.id)),void 0!==r.type&&(n.type=i(r.type)),void 0!==r.host&&(n.host=r.host?R.toJSON(r.host):void 0),void 0!==r.state&&(n.state=function(r){switch(r){case v:return"UNSPECIFIED";case O:return"STARTING";case C:return"RUNNING";default:return"UNRECOGNIZED"}}(r.state)),r.parallelUnits?n.parallelUnits=r.parallelUnits.map((function(r){return r?y.toJSON(r):void 0})):n.parallelUnits=[],n},fromPartial:function(r){var n,e,o,i,u={id:0,type:t.UNSPECIFIED,host:void 0,state:v,parallelUnits:[]};return u.id=null!==(e=r.id)&&void 0!==e?e:0,u.type=null!==(o=r.type)&&void 0!==o?o:t.UNSPECIFIED,u.host=void 0!==r.host&&null!==r.host?R.fromPartial(r.host):void 0,u.state=null!==(i=r.state)&&void 0!==i?i:v,u.parallelUnits=(null===(n=r.parallelUnits)||void 0===n?void 0:n.map((function(r){return y.fromPartial(r)})))||[],u}};var w={fromJSON:function(r){return{compression:J(r.compression)?h(r.compression):D,body:J(r.body)?G(r.body):new Uint8Array}},toJSON:function(r){var n={};return void 0!==r.compression&&(n.compression=function(r){switch(r){case D:return"UNSPECIFIED";case U:return"NONE";default:return"UNRECOGNIZED"}}(r.compression)),void 0!==r.body&&(n.body=function(r){if(M.Buffer)return M.Buffer.from(r).toString("base64");var n=[];return r.forEach((function(r){n.push(String.fromCharCode(r))})),M.btoa(n.join(""))}(void 0!==r.body?r.body:new Uint8Array)),n},fromPartial:function(r){var n,e,t={compression:D,body:new Uint8Array};return t.compression=null!==(n=r.compression)&&void 0!==n?n:D,t.body=null!==(e=r.body)&&void 0!==e?e:new Uint8Array,t}};var A={fromJSON:function(r){return{originalIndices:Array.isArray(null===r||void 0===r?void 0:r.originalIndices)?r.originalIndices.map((function(r){return Number(r)})):[],data:Array.isArray(null===r||void 0===r?void 0:r.data)?r.data.map((function(r){return Number(r)})):[]}},toJSON:function(r){var n={};return r.originalIndices?n.originalIndices=r.originalIndices.map((function(r){return Math.round(r)})):n.originalIndices=[],r.data?n.data=r.data.map((function(r){return Math.round(r)})):n.data=[],n},fromPartial:function(r){var n,e,t={originalIndices:[],data:[]};return t.originalIndices=(null===(n=r.originalIndices)||void 0===n?void 0:n.map((function(r){return r})))||[],t.data=(null===(e=r.data)||void 0===e?void 0:e.map((function(r){return r})))||[],t}};var g=function(r){return{direction:J(r.direction)?s(r.direction):u}},F=function(r){var n={};return void 0!==r.direction&&(n.direction=function(r){switch(r){case u:return"DIRECTION_UNSPECIFIED";case a:return"DIRECTION_ASCENDING";case c:return"DIRECTION_DESCENDING";default:return"UNRECOGNIZED"}}(r.direction)),n},_=function(r){var n,e={direction:u};return e.direction=null!==(n=r.direction)&&void 0!==n?n:u,e};var b={fromJSON:function(r){return{columnIndex:J(r.columnIndex)?Number(r.columnIndex):0,orderType:J(r.orderType)?g(r.orderType):void 0}},toJSON:function(r){var n={};return void 0!==r.columnIndex&&(n.columnIndex=Math.round(r.columnIndex)),void 0!==r.orderType&&(n.orderType=r.orderType?F(r.orderType):void 0),n},fromPartial:function(r){var n,e={columnIndex:0,orderType:void 0};return e.columnIndex=null!==(n=r.columnIndex)&&void 0!==n?n:0,e.orderType=void 0!==r.orderType&&null!==r.orderType?_(r.orderType):void 0,e}},M="undefined"!==typeof M?M:"undefined"!==typeof self?self:window;function G(r){if(M.Buffer)return Uint8Array.from(M.Buffer.from(r,"base64"));for(var n=M.atob(r),e=new Uint8Array(n.length),t=0;t<n.length;++t)e[t]=n.charCodeAt(t);return e}function J(r){return null!==r&&void 0!==r}}}]);