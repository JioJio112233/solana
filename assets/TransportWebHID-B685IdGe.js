import{d as H,l as X,B as g,g as R,D as V,T as P,f as $,h as W,i as G}from"./index-Dn6yCEWP.js";import{r as K}from"./index-DZaq6q7l.js";var U={};const J=H(X);var O;function Q(){return O||(O=1,function(i){i.__esModule=!0;var t=J,e=5;function n(c){var f=g.alloc(2);return f.writeUInt16BE(c,0),f}var o={data:g.alloc(0),dataLength:0,sequence:0},r=function(c,f){return{makeBlocks:function(u){var a=g.concat([n(u.length),u]),s=f-5,d=Math.ceil(a.length/s);a=g.concat([a,g.alloc(d*s-a.length+1).fill(0)]);for(var h=[],v=0;v<d;v++){var p=g.alloc(5);p.writeUInt16BE(c,0),p.writeUInt8(e,2),p.writeUInt16BE(v,3);var S=a.slice(v*s,(v+1)*s);h.push(g.concat([p,S]))}return h},reduceResponse:function(u,a){var s=u||o,d=s.data,h=s.dataLength,v=s.sequence;if(a.readUInt16BE(0)!==c)throw new t.TransportError("Invalid channel","InvalidChannel");if(a.readUInt8(2)!==e)throw new t.TransportError("Invalid tag","InvalidTag");if(a.readUInt16BE(3)!==v)throw new t.TransportError("Invalid sequence","InvalidSequence");u||(h=a.readUInt16BE(5)),v++;var p=a.slice(u?5:7);return d=g.concat([d,p]),d.length>h&&(d=d.slice(0,h)),{data:d,dataLength:h,sequence:v}},getReducedResult:function(u){if(u&&u.dataLength===u.data.length)return u.data}}};i.default=r}(U)),U}var Y=Q();const Z=R(Y);var ee=K();const M=R(ee);var B=function(){return B=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=t[o])}return i},B.apply(this,arguments)},b,l;(function(i){i.blue="blue",i.nanoS="nanoS",i.nanoSP="nanoSP",i.nanoX="nanoX",i.nanoFTS="nanoFTS"})(l||(l={}));var D=(b={},b[l.blue]={id:l.blue,productName:"Ledger Blue",productIdMM:0,legacyUsbProductId:0,usbOnly:!0,memorySize:480*1024,masks:[822083584,822149120],getBlockSize:function(i){return 4*1024}},b[l.nanoS]={id:l.nanoS,productName:"Ledger Nano S",productIdMM:16,legacyUsbProductId:1,usbOnly:!0,memorySize:320*1024,masks:[823132160],getBlockSize:function(i){var t;return M.lt((t=M.coerce(i))!==null&&t!==void 0?t:"","2.0.0")?4*1024:2*1024}},b[l.nanoSP]={id:l.nanoSP,productName:"Ledger Nano S Plus",productIdMM:80,legacyUsbProductId:5,usbOnly:!0,memorySize:1536*1024,masks:[856686592],getBlockSize:function(i){return 32}},b[l.nanoX]={id:l.nanoX,productName:"Ledger Nano X",productIdMM:64,legacyUsbProductId:4,usbOnly:!1,memorySize:2*1024*1024,masks:[855638016],getBlockSize:function(i){return 4*1024},bluetoothSpec:[{serviceUuid:"13d63400-2c97-0004-0000-4c6564676572",notifyUuid:"13d63400-2c97-0004-0001-4c6564676572",writeUuid:"13d63400-2c97-0004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-0004-0003-4c6564676572"}]},b[l.nanoFTS]={id:l.nanoFTS,productName:"Ledger Nano FTS",productIdMM:96,legacyUsbProductId:6,usbOnly:!1,memorySize:2*1024*1024,masks:[857735168],getBlockSize:function(i){return 4*1024},bluetoothSpec:[{serviceUuid:"13d63400-2c97-6004-0000-4c6564676572",notifyUuid:"13d63400-2c97-6004-0001-4c6564676572",writeUuid:"13d63400-2c97-6004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-6004-0003-4c6564676572"}]},b);l.blue,l.nanoS,l.nanoSP,l.nanoX,l.nanoFTS;var N=Object.values(D),j=11415,z=function(i){var t=N.find(function(o){return o.legacyUsbProductId===i});if(t)return t;var e=i>>8,n=N.find(function(o){return o.productIdMM===e});return n},ne=[],F={};for(var te in D){var q=D[te],k=q.bluetoothSpec;if(k)for(var E=0;E<k.length;E++){var x=k[E];ne.push(x.serviceUuid),F[x.serviceUuid]=F[x.serviceUuid.replace(/-/g,"")]=B({deviceModel:q},x)}}let re=0;const y=[],C=(i,t,e)=>{const n={type:i,id:String(++re),date:new Date};t&&(n.message=t),oe(n)},ie=i=>(y.push(i),()=>{const t=y.indexOf(i);t!==-1&&(y[t]=y[y.length-1],y.pop())});function oe(i){for(let t=0;t<y.length;t++)try{y[t](i)}catch(e){console.error(e)}}typeof window<"u"&&(window.__ledgerLogsListen=ie);var ae=function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),m=function(i,t,e,n){function o(r){return r instanceof e?r:new e(function(c){c(r)})}return new(e||(e=Promise))(function(r,c){function f(s){try{a(n.next(s))}catch(d){c(d)}}function u(s){try{a(n.throw(s))}catch(d){c(d)}}function a(s){s.done?r(s.value):o(s.value).then(f,u)}a((n=n.apply(i,t||[])).next())})},w=function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,c;return c={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function f(a){return function(s){return u([a,s])}}function u(a){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(r=a[0]&2?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[a[0]&2,r.value]),a[0]){case 0:case 1:r=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,o=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){e.label=a[1];break}if(a[0]===6&&e.label<r[1]){e.label=r[1],r=a;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(a);break}r[2]&&e.ops.pop(),e.trys.pop();continue}a=t.call(i,e)}catch(s){a=[6,s],o=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},ue=function(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var n=e.call(i),o,r=[],c;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)r.push(o.value)}catch(f){c={error:f}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(c)throw c.error}}return r},ce=[{vendorId:j}],se=function(){return Promise.resolve(!!(window.navigator&&window.navigator.hid))},_=function(){var i=navigator.hid;if(!i)throw new W("navigator.hid is not supported","HIDNotSupported");return i};function A(){return m(this,void 0,void 0,function(){var i;return w(this,function(t){switch(t.label){case 0:return[4,_().requestDevice({filters:ce})];case 1:return i=t.sent(),Array.isArray(i)?[2,i]:[2,[i]]}})})}function L(){return m(this,void 0,void 0,function(){var i;return w(this,function(t){switch(t.label){case 0:return[4,_().getDevices()];case 1:return i=t.sent(),[2,i.filter(function(e){return e.vendorId===j})]}})})}function de(){return m(this,void 0,void 0,function(){var i,t;return w(this,function(e){switch(e.label){case 0:return[4,L()];case 1:return i=e.sent(),i.length>0?[2,i[0]]:[4,A()];case 2:return t=e.sent(),[2,t[0]]}})})}var ve=function(i){ae(t,i);function t(e){var n=i.call(this)||this;return n.channel=Math.floor(Math.random()*65535),n.packetSize=64,n.inputs=[],n.read=function(){return n.inputs.length?Promise.resolve(n.inputs.shift()):new Promise(function(o){n.inputCallback=o})},n.onInputReport=function(o){var r=g.from(o.data.buffer);n.inputCallback?(n.inputCallback(r),n.inputCallback=null):n.inputs.push(r)},n._disconnectEmitted=!1,n._emitDisconnect=function(o){n._disconnectEmitted||(n._disconnectEmitted=!0,n.emit("disconnect",o))},n.exchange=function(o){return m(n,void 0,void 0,function(){var r,c=this;return w(this,function(f){switch(f.label){case 0:return[4,this.exchangeAtomicImpl(function(){return m(c,void 0,void 0,function(){var u,a,s,d,h,v,p,S,T;return w(this,function(I){switch(I.label){case 0:u=this,a=u.channel,s=u.packetSize,C("apdu","=> "+o.toString("hex")),d=Z(a,s),h=d.makeBlocks(o),v=0,I.label=1;case 1:return v<h.length?[4,this.device.sendReport(0,h[v])]:[3,4];case 2:I.sent(),I.label=3;case 3:return v++,[3,1];case 4:return(p=d.getReducedResult(S))?[3,6]:[4,this.read()];case 5:return T=I.sent(),S=d.reduceResponse(S,T),[3,4];case 6:return C("apdu","<= "+p.toString("hex")),[2,p]}})})}).catch(function(u){throw u&&u.message&&u.message.includes("write")?(c._emitDisconnect(u),new V(u.message)):u})];case 1:return r=f.sent(),[2,r]}})})},n.device=e,n.deviceModel=typeof e.productId=="number"?z(e.productId):void 0,e.addEventListener("inputreport",n.onInputReport),n}return t.request=function(){return m(this,void 0,void 0,function(){var e,n;return w(this,function(o){switch(o.label){case 0:return[4,A()];case 1:return e=ue.apply(void 0,[o.sent(),1]),n=e[0],[2,t.open(n)]}})})},t.openConnected=function(){return m(this,void 0,void 0,function(){var e;return w(this,function(n){switch(n.label){case 0:return[4,L()];case 1:return e=n.sent(),e.length===0?[2,null]:[2,t.open(e[0])]}})})},t.open=function(e){return m(this,void 0,void 0,function(){var n,o;return w(this,function(r){switch(r.label){case 0:return[4,e.open()];case 1:return r.sent(),n=new t(e),o=function(c){e===c.device&&(_().removeEventListener("disconnect",o),n._emitDisconnect(new G))},_().addEventListener("disconnect",o),[2,n]}})})},t.prototype.close=function(){return m(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return[4,this.exchangeBusyPromise];case 1:return e.sent(),this.device.removeEventListener("inputreport",this.onInputReport),[4,this.device.close()];case 2:return e.sent(),[2]}})})},t.prototype.setScrambleKey=function(){},t.isSupported=se,t.list=L,t.listen=function(e){var n=!1;de().then(function(r){if(!r)e.error(new P("Access denied to use Ledger device"));else if(!n){var c=typeof r.productId=="number"?z(r.productId):void 0;e.next({type:"add",descriptor:r,deviceModel:c}),e.complete()}},function(r){e.error(new P(r.message))});function o(){n=!0}return{unsubscribe:o}},t}($);export{ve as default};
