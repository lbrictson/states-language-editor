(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e){e.exports={id:"states-language@0.1.0",nodes:{1:{id:1,data:{resource:"Start:yes",name:"Start"},inputs:{start:{connections:[]}},outputs:{transition_event:{connections:[{node:2,input:"event",data:{}}]},catch_events:{connections:[{node:3,input:"event",data:{}}]}},position:[-731,-339.86669921875],name:"Task"},2:{id:2,data:{event:":transition"},inputs:{event:{connections:[{node:1,output:"transition_event",data:{}}]}},outputs:{next:{connections:[{node:8,input:"start",data:{}}]}},position:[-316,-305.86669921875],name:"TransitionEvent"},3:{id:3,data:{errors:":error, :another_error"},inputs:{event:{connections:[{node:1,output:"catch_events",data:{}}]}},outputs:{next:{connections:[{node:4,input:"start",data:{}}]}},position:[-326,-102.86669921875],name:"CatchEvent"},4:{id:4,data:{resource:"ChoiceResource",name:"TheChoice"},inputs:{start:{connections:[{node:3,output:"next",data:{}}]}},outputs:{choice_events:{connections:[{node:5,input:"event",data:{}}]},catch_events:{connections:[{node:6,input:"event",data:{}}]}},position:[79,-91.86669921875],name:"Choice"},5:{id:5,data:{events:":1"},inputs:{event:{connections:[{node:4,output:"choice_events",data:{}}]}},outputs:{next:{connections:[{node:7,input:"start",data:{}}]}},position:[456,-123.86669921875],name:"ChoiceEvent"},6:{id:6,data:{errors:":error"},inputs:{event:{connections:[{node:4,output:"catch_events",data:{}}]}},outputs:{next:{connections:[]}},position:[489,125.13330078125],name:"CatchEvent"},7:{id:7,data:{resource:"Redo:yes",name:"Redo"},inputs:{start:{connections:[{node:5,output:"next",data:{}}]}},outputs:{transition_event:{connections:[]},catch_events:{connections:[]}},position:[804,-171.86669921875],name:"Task"},8:{id:8,data:{resource:"Success:finish",name:"Success"},inputs:{start:{connections:[{node:2,output:"next",data:{}}]}},outputs:{transition_event:{connections:[]},catch_events:{connections:[]}},position:[101,-436.86669921875],name:"Task"}}}},184:function(e,t,n){e.exports=n(385)},384:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),i=n.n(r),c=n(78),s=n(76),u=n(75);var d=Object(u.b)(function(e,t){var n=Object(s.a)({},e);switch(t.type){case"SET_EDITOR_GRAPH":n.editor_graph=t.graph;break;case"SET_D3_GRAPH":n.d3_graph=t.graph;break;case"SET_STATES_LANGUAGE_GRAPH":n.states_language_graph=t.graph}return n},{editor_graph:{},d3_graph:{nodes:[],edges:[]},states_language_graph:{}}),l=n(77),p=n(7),h=n(178),m=n(410),v=n(411),f=n(412),g=n(413),w=n(416),b=n(414),E=n(415),O=n(386),j=n(2),x=n.n(j),y=n(23),k=n(24),C=n(26),_=n(25),S=n(27),N=n(4),I=n(35),T=n(174),R=n(180),A=n(106),B=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.node,n=e.bindSocket,a=e.bindControl,r=this.state,i=r.outputs,c=r.controls,s=r.inputs,u=r.selected;return o.a.createElement("div",{className:"node ".concat(u," ").concat(t.name)},o.a.createElement("div",{className:"title"},t.name),s.map(function(e){return o.a.createElement("div",{className:"input",key:e.key},o.a.createElement(I.c,{type:"input",socket:e.socket,io:e,innerRef:n}),!e.showControl()&&o.a.createElement("div",{className:"input-title"},e.name),e.showControl()&&o.a.createElement(I.a,{className:"input-control",control:e.control,innerRef:a}))}),c.map(function(e){return o.a.createElement(I.a,{className:"control",key:e.key,control:e,innerRef:a})}),i.map(function(e){return o.a.createElement("div",{className:"output",key:e.key},o.a.createElement("div",{className:"output-title"},e.name),o.a.createElement(I.c,{type:"output",socket:e.socket,io:e,innerRef:n}))}))}}]),t}(I.b),G=function(e){function t(e,n,a){var o,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(y.a)(this,t),(o=Object(C.a)(this,Object(_.a)(t).call(this,n))).emitter=e,o.key=n,o.component=t.component;var i=a.data[n]||"";return a.data[n]=i,o.props={readonly:r,value:i,onChange:function(e){o.setValue(e),o.emitter.trigger("process")},placeholder:n},o}return Object(S.a)(t,e),Object(k.a)(t,[{key:"setValue",value:function(e){this.props.value=e,this.putData(this.key,e),this.update()}}]),t}(N.c.Control);G.component=function(e){var t=e.value,n=e.onChange,a=e.placeholder;return o.a.createElement("input",{value:t,placeholder:a,ref:function(e){e&&e.addEventListener("pointerdown",function(e){return e.stopPropagation()})},onChange:function(e){return n(e.target.value)}})};var z=n(177);function H(e){var t=Object.keys(e.nodes).map(function(t){return e.nodes[t]}).filter(function(e){return!e.name.endsWith("Event")}),n=0,a=t.map(function(e){return{id:n++,label:e.name,name:e.data.name}}),o=t.flatMap(function(t){return function(e,t,n){return Object.keys(e.outputs).flatMap(function(a){return function(e,t,n,a){return t.outputs[e].connections.reduce(function(e,o){var r=n.nodes[o.node.toString()];if(r.outputs.next.connections.length>0){var i=r.outputs.next.connections[0].node.toString(),c=n.nodes[i];c=L(c.data.name,a);var s=L(t.data.name,a);e.push({source:s,target:c,type:P(r)})}return e},[])}(a,e,t,n)})}(t,e,a)});return{nodes:a,edges:o}}function P(e){var t="";return e.data.errors?t=e.data.errors:e.data.event?t=e.data.event:e.data.events&&(t=e.data.events),t.split(",").map(function(e){return e.trim()})}function L(e,t){return t.findIndex(function(t){return t.name===e})}var D="SET_D3_GRAPH";function W(e){return{type:D,graph:e}}var J=new N.c.Socket("Transition Event"),M=new N.c.Socket("Catch Event"),V=new N.c.Socket("Choice Event"),U=new N.c.Socket("Next"),X=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).call(this,"Task"))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"builder",value:function(e){var t=new N.c.Input("start","Start",U,!0),n=new N.c.Output("transition_event","Transition Event",J),a=new N.c.Output("catch_events","Catch Events",M),o=new G(this.editor,"resource",e),r=new G(this.editor,"name",e);return e.addInput(t).addOutput(n).addOutput(a).addControl(r).addControl(o)}}]),t}(N.c.Component),$=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).call(this,"Choice"))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"builder",value:function(e){var t=new N.c.Input("start","Start",U,!0),n=new N.c.Output("choice_events","Choice Events",V),a=new N.c.Output("catch_events","Catch Events",M),o=new G(this.editor,"resource",e),r=new G(this.editor,"name",e);return e.addInput(t).addOutput(n).addOutput(a).addControl(r).addControl(o)}}]),t}(N.c.Component),q=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).call(this,"TransitionEvent"))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"builder",value:function(e){var t=new N.c.Input("event","=",J,!0),n=new N.c.Output("next","Next",U),a=new G(this.editor,"event",e);return e.addInput(t).addOutput(n).addControl(a)}}]),t}(N.c.Component),F=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).call(this,"CatchEvent"))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"builder",value:function(e){var t=new N.c.Input("event","=",M,!0),n=new N.c.Output("next","Next",U),a=new G(this.editor,"errors",e);return e.addInput(t).addOutput(n).addControl(a)}}]),t}(N.c.Component),K=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(_.a)(t).call(this,"ChoiceEvent"))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"builder",value:function(e){var t=new N.c.Input("event","=",V),n=new N.c.Output("next","Next",U),a=new G(this.editor,"events",e);return e.addInput(t).addOutput(n).addControl(a)}}]),t}(N.c.Component);var Q=n(107),Y=n(43);var Z=function(e){var t,n,r=e.width,i=e.height,c=e.edges,s=e.nodes,u=e.onClick;return Object(a.useEffect)(function(){var e=new Q.graphlib.Graph({multigraph:!0}).setGraph({});s.forEach(function(t){e.setNode(t.name,{label:t.name})}),c.forEach(function(t){var n=s[t.source].name+"-"+s[t.target].name+"-"+t.type;e.setEdge(s[t.source].name,s[t.target].name,{label:t.type.join(",")},n)}),e.nodes().forEach(function(t){var n=e.node(t);n.rx=n.ry=5});var a=Y.select(t),o=Y.select(n),r=Y.zoom().on("zoom",function(){o.attr("transform",Y.event.transform)});a.call(r),(new Q.render)(o,e),a.call(r.transform,Y.zoomIdentity.translate((a.attr("width")-.8*e.graph().width)/2,20).scale(.8)),a.attr("height",.8*e.graph().height+20),a.selectAll(".dagre-d3 .node").on("click",function(t){e.nodes().forEach(function(t){return e.node(t).elem.classList.remove("selected")}),e.node(t).elem.classList.add("selected")})},[c,s,t,n,u]),o.a.createElement("svg",{className:"dagre-d3",ref:function(e){return t=e},width:r,height:i},o.a.createElement("g",{ref:function(e){return n=e}}))};var ee=function(){var e=Object(c.b)(function(e){return e.d3_graph});return o.a.createElement("div",null,o.a.createElement(Z,{edges:e.edges,nodes:e.nodes,width:"300",height:"100"}))},te=Object(h.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:"90vh"}}});var ne=function(){var e=te(),t=Object(p.a)(e.paper,e.fixedHeight);return o.a.createElement("div",{className:e.root},o.a.createElement(m.a,null),o.a.createElement(v.a,{position:"absolute",className:Object(p.a)(e.appBar)},o.a.createElement(f.a,{className:e.toolbar},o.a.createElement(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"States Language Editor"),o.a.createElement(w.a,{color:"inherit"}))),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.appBarSpacer}),o.a.createElement(b.a,{maxWidth:"xl",className:e.container},o.a.createElement(E.a,{container:!0,spacing:3},o.a.createElement(E.a,{item:!0,xs:12,md:8,lg:8},o.a.createElement(O.a,{className:t},o.a.createElement("div",{style:{width:"100vw",height:"90vh"},ref:function(e){return function(e){var t,n;return x.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:t=[new X,new $,new K,new F,new q],(n=new N.c.NodeEditor("states-language@0.1.0",e)).use(T.a),n.use(I.d,{component:B}),n.use(R.a),n.use(A.a),t.map(function(e){return n.register(e)}),n.on("process nodecreated noderemoved connectioncreated connectionremoved",function(){var e,t;return x.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:e=n.toJSON(),t=H(e),d.dispatch(W(t));case 3:case"end":return a.stop()}})}),n.fromJSON(z),n.view.resize(),A.a.zoomAt(n),n.trigger("process");case 12:case"end":return a.stop()}})}(e)}}))),o.a.createElement(E.a,{item:!0,xs:12,md:4,lg:4},o.a.createElement(O.a,{className:t},o.a.createElement(ee,null))),o.a.createElement(E.a,{item:!0,xs:12},o.a.createElement(O.a,{className:e.paper}))))))},ae=n(417),oe=n(29),re=Object(oe.a)(),ie=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ae.b,{history:re},o.a.createElement(ae.c,null,o.a.createElement(ae.a,{exact:!0,path:"/",component:ne}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(384);"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),i.a.render(o.a.createElement(c.a,{store:d},o.a.createElement(ie,null)),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.30093d70.chunk.js.map