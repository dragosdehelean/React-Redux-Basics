(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(32)},24:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(17),a=t.n(o),i=(t(24),t(4)),u=t(5),l=t(11),s=t(7),d=t(10),f=t(9),p=(t(29),function(e){return c.a.createElement("div",{className:"CounterControl",onClick:e.clicked},e.label)}),b=(t(30),function(e){return c.a.createElement("div",{className:"CounterOutput"},"Current Counter: ",e.value)}),h=function(e){function n(){var e,t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(c)))).state={counter:0},t.counterChangedHandler=function(e,n){switch(e){case"inc":t.setState(function(e){return{counter:e.counter+1}});break;case"dec":t.setState(function(e){return{counter:e.counter-1}});break;case"add":t.setState(function(e){return{counter:e.counter+n}});break;case"sub":t.setState(function(e){return{counter:e.counter-n}});break;default:return n}},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,{value:this.props.ctr}),c.a.createElement(p,{label:"Increment",clicked:this.props.onIncrement}),c.a.createElement(p,{label:"Decrement",clicked:this.props.onDecrement}),c.a.createElement(p,{label:"Add 5",clicked:this.props.onAdd}),c.a.createElement(p,{label:"Subtract 5",clicked:this.props.onSubstract}))}}]),n}(r.Component),v=Object(f.b)(function(e){return{ctr:e.counter}},function(e){return{onIncrement:function(){return e({type:"INCREMENT"})},onDecrement:function(){return e({type:"DECREMENT"})},onAdd:function(){return e({type:"ADD",value:5})},onSubstract:function(){return e({type:"SUBSTRACT",value:5})}}})(h),m=(t(31),function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))}}]),n}(r.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var g=t(8),k=t(3),j={counter:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT":return Object(k.a)({},e,{counter:e.counter+1});case"DECREMENT":return Object(k.a)({},e,{counter:e.counter-1});case"ADD":return Object(k.a)({},e,{counter:e.counter+n.value});case"SUBSTRACT":return Object(k.a)({},e,{counter:e.counter-n.value});default:return e}},C=Object(g.b)(O);a.a.render(c.a.createElement(f.a,{store:C},c.a.createElement(m,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/React-Redux-Basics",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/React-Redux-Basics","/service-worker.js");w?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):E(e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.3682c154.chunk.js.map