(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(84)},45:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(3),i=a(2),s=a(1),d=a(39),u="MK_NEW_TASK_ITEM",m="MK_UPDATE_TASK_ITEM",p="MK_UPDATE_TASKS",v="MK_REMOVE_TASK",f="MK_UPDATE_SEARCH_TERM",E=[{key:"todo",title:"To-Do"},{key:"progress",title:"In Progress"},{key:"done",title:"Done"}],g=Object(s.a)({},E.reduce(function(e,t){return e[t.key]=[],e},{}),{searchTerm:""});function x(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)})}var b=r.a.createContext();var h=function(e){var t=function(e){return Object.keys(e).reduce(function(t,a){var n=e[a](void 0,{type:void 0});return Object(s.a)({},t,Object(i.a)({},a,n))},{})}(e);return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return Object.keys(e).reduce(function(t,r){var c=e[r](a[r],n);return Object(s.a)({},t,Object(i.a)({},r,c))},a)}}({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(s.a)({},e,{searchTerm:t.payload});case u:var a=(new Date).getTime(),n=t.payload;return Object(s.a)({},e,Object(i.a)({},n,[{id:x(),editMode:!0,created:a,updated:a}].concat(Object(d.a)(e[n]))));case m:var r=t.payload,c=r.taskID,l=r.text,o=r.stage,E=(new Date).getTime();return Object(s.a)({},e,Object(i.a)({},o,e[o].map(function(e){return e.id!==c?e:Object(s.a)({},e,{text:l,editMode:!1,updated:E})})));case p:return Object(s.a)({},e,t.payload);case v:var b=t.payload,h=b.stage,y=b.taskID;return Object(s.a)({},e,Object(i.a)({},h,e[h].filter(function(e){return e.id!==y})));default:return e}}});a(45);var y=a(9);var C=function(e,t){Object(n.useEffect)(function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,t])};function k(e){var t,a=e.task,c=e.stage,l=e.removeTask,i=e.updateTask,s=Object(n.useRef)(null),d=Object(n.useState)(a.text||""),u=Object(o.a)(d,2),m=u[0],p=u[1],v=Object(n.useState)(a.editMode),f=Object(o.a)(v,2),E=f[0],g=f[1],x=Object(n.useState)(!1),b=Object(o.a)(x,2),h=b[0],y=b[1];function k(){a.text?(p(a.text),g(!1)):l({taskID:a.id,stage:c})}return C(s,function(){k()}),r.a.createElement("div",{className:"".concat(h&&"saved"," task-item"),onDoubleClick:function(){return g(!0)}},E?r.a.createElement("div",{ref:s,className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"New item...",value:m,onChange:function(e){p(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(m||l({taskID:a.id,stage:c}),i({taskID:a.id,text:m,stage:c}),g(!1),y(!0),t=setTimeout(function(){y(!1),clearTimeout(t)},600)),27===e.keyCode&&k()},autoFocus:!0})):r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"px-3 task-text"},a.text)))}var N=function(e){switch(e){case"remove":return r.a.createElement("g",{fill:"currentColor"},r.a.createElement("path",{d:"M19.5714286,0.428571429 C19,-0.142857143 18.1428571,-0.142857143 17.5714286,0.428571429 L10,8 L2.42857143,0.428571429 C1.85714286,-0.142857143 1,-0.142857143 0.428571429,0.428571429 C-0.142857143,1 -0.142857143,1.85714286 0.428571429,2.42857143 L8,10 L0.428571429,17.5714286 C-0.142857143,18.1428571 -0.142857143,19 0.428571429,19.5714286 C0.714285714,19.8571429 1,20 1.42857143,20 C1.85714286,20 2.14285714,19.8571429 2.42857143,19.5714286 L10,12 L17.5714286,19.5714286 C17.8571429,19.8571429 18.2857143,20 18.5714286,20 C18.8571429,20 19.2857143,19.8571429 19.5714286,19.5714286 C20.1428571,19 20.1428571,18.1428571 19.5714286,17.5714286 L12,10 L19.5714286,2.42857143 C20.1428571,1.85714286 20.1428571,1 19.5714286,0.428571429 Z",id:"removeicon"}));case"add":return r.a.createElement("g",{fill:"currentColor"},r.a.createElement("path",{d:"M20,10 C20,10.5970149 19.5522388,11.0447761 18.9552239,11.0447761 L11.0447761,11.0447761 L11.0447761,18.9552239 C11.0447761,19.5522388 10.5970149,20 10,20 C9.70149254,20 9.40298507,19.8507463 9.25373134,19.7014925 C9.10447761,19.5522388 8.95522388,19.2537313 8.95522388,18.9552239 L8.95522388,11.0447761 L1.04477612,11.0447761 C0.746268657,11.0447761 0.52238806,10.9701493 0.298507463,10.7462687 C0.0746268657,10.5223881 0,10.2985075 0,10 C0,9.40298507 0.447761194,8.95522388 1.04477612,8.95522388 L8.95522388,8.95522388 L8.95522388,1.04477612 C8.95522388,0.447761194 9.40298507,0 10,0 C10.5970149,0 11.0447761,0.447761194 11.0447761,1.04477612 L11.0447761,8.95522388 L18.9552239,8.95522388 C19.5522388,8.95522388 20,9.40298507 20,10 Z",id:"addicon"}));case"info":return r.a.createElement("g",{fill:"currentColor"},r.a.createElement("path",{d:"M10,0 C4.48504894,0 0,4.48505193 0,10 C0,15.5149605 4.48504894,20 10,20 C15.5149506,20 20,15.5149605 20,10 C20,4.48505193 15.5149506,0 10,0 Z M9.99999995,1.33366928 C14.7943635,1.33366928 18.6663383,5.20564406 18.6663383,9.99999992 C18.6663383,14.7943684 14.7943635,18.6663432 9.99999995,18.6663432 C5.20563577,18.6663432 1.33366137,14.7943684 1.33366137,9.99999992 C1.33366137,5.20564406 5.20563577,1.33366928 9.99999995,1.33366928 Z M9.99015743,2.65741127 C9.8132883,2.66005209 9.64468774,2.73279676 9.52146889,2.8597077 C9.39825004,2.98661864 9.33051331,3.15729281 9.33316921,3.3341606 L9.33316921,9.72440938 L5.52903545,13.5285416 C5.35161082,13.6949867 5.27892619,13.9448557 5.33938678,14.1804994 C5.39984738,14.4161432 5.58385451,14.6001511 5.81949801,14.6606127 C6.05514151,14.7210743 6.30501077,14.6483907 6.47145661,14.4709668 L10.4724409,10.4724409 C10.5973933,10.3470157 10.6673299,10.1770432 10.6668307,9.99999992 L10.6668307,3.3341606 C10.6695392,3.15387894 10.5991172,2.98018617 10.4716245,2.85269332 C10.3441318,2.72520047 10.1704391,2.65477825 9.99015743,2.65741127 Z",id:"infoicon"}));default:return r.a.createElement("g",null)}},O=function(e){var t=e.width,a=void 0===t?"20px":t,n=e.height,c=void 0===n?"20px":n,l=e.viewBox,o=void 0===l?"0 0 20 20":l,i=e.title,s=e.children,d=e.type;return r.a.createElement("svg",{width:a,height:c,viewBox:o},r.a.createElement("title",null,i),s||N(d))},T=function(e,t){return Object(s.a)({userSelect:"none",zIndex:2,background:e?"#f8f9fa":"white"},t)};var j=function(e){var t=e.data,a=e.stage,n=e.removeTask,c=e.updateTask;return r.a.createElement("div",{className:"stage px-2 py-2",style:{minHeight:60}},r.a.createElement("div",{className:"list-group pb-3"},t.map(function(e,t){return r.a.createElement(y.b,{key:e.id,draggableId:e.id,index:t},function(t,l){return r.a.createElement("div",Object.assign({className:"list-group-item",style:T(l.isDragging,t.draggableProps.style),ref:t.innerRef},t.draggableProps,t.dragHandleProps),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:e.text?"col-md-9":"col-md-12"},r.a.createElement(k,{updateTask:c,removeTask:n,task:e,stage:a})),e.text&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-1"},r.a.createElement("div",{className:"basic-tooltip btn"},r.a.createElement(O,{type:"info",width:"18",height:"18"}),r.a.createElement("span",{className:"tooltiptext"},new Date(e.updated).toLocaleString()))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"remove-btn btn",onClick:function(){return n({taskID:e.id,stage:a})}},r.a.createElement(O,{type:"remove",width:"12",height:"12"}))))))})})))};var w=function(e){var t=e.updateSearchTerm,a=e.searchTerm;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group col-md-4"},r.a.createElement("input",{className:"form-control",type:"text",value:a,placeholder:"Search tasks...",onChange:function(e){t(e.target.value)}})))},L=function(e){return{borderRadius:".25rem",transition:"all 0.3s",background:e?"#6f42c1":"transparent"}},I=function(e){var t=e.result,a=e.updateTasks,n=e.getList,r=t.source,c=t.destination;if(c){var l={};if(r.droppableId===c.droppableId){var s=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(o.a)(r,1)[0];return n.splice(a,0,c),n}(n(r.droppableId),r.index,c.index);l=Object(i.a)({},r.droppableId,s)}else l=function(e,t,a,n){var r=Array.from(e),c=Array.from(t),l=r.splice(a.index,1),i=Object(o.a)(l,1)[0];c.splice(n.index,0,i);var s={};return s[a.droppableId]=r,s[n.droppableId]=c,s}(n(r.droppableId),n(c.droppableId),r,c);a(l)}};var M=function(){var e=r.a.useContext(b),t=e.state,a=e.dispatch,n=function(e){return a({type:p,payload:e})},c=function(e){return a({type:m,payload:e})},l=function(e){return a({type:v,payload:e})},o=function(e){return t.tasks[e]},i=function(e){return""===t.tasks.searchTerm?t.tasks[e]:t.tasks[e].filter(function(e){var a=t.tasks.searchTerm.toUpperCase();return!!(e.text&&e.text.toUpperCase().indexOf(a)>-1)})};return r.a.createElement("div",{className:"Tasks"},r.a.createElement(w,{updateSearchTerm:function(e){return a({type:f,payload:e})},searchTerm:t.tasks.searchTerm}),r.a.createElement("div",{className:"py-4 row"},r.a.createElement(y.a,{onDragEnd:function(e){return I({result:e,updateTasks:n,getList:o})}},E.map(function(e){var t=e.key,n=e.title;return r.a.createElement("div",{className:"col-md-".concat(12/E.length),key:t},r.a.createElement("div",{className:"px-3 py-3 bg-white rounded shadow-sm"},r.a.createElement("div",{className:"row px-2"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("h2",null,n)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"add-btn btn",onClick:function(){return a({type:u,payload:t})}},r.a.createElement(O,{type:"add"})))),r.a.createElement(y.c,{droppableId:t},function(e,a){return r.a.createElement("div",{ref:e.innerRef,style:L(a.isDraggingOver)},r.a.createElement(j,{updateTask:c,removeTask:l,stage:t,title:n,data:i(t)}),e.placeholder)})))}))))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"py-3 jumbotron bg-white text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Mini-Kanban"),r.a.createElement("p",{className:"lead text-muted"},"This is an example web application of using"," ",r.a.createElement("strong",null,"useReducer")," of React Hooks as an alternative to Redux."))),r.a.createElement("div",{className:"container-fluid py-5 bg-light"},r.a.createElement(M,null)),r.a.createElement("footer",{className:"text-muted py-4"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9 2019 ",r.a.createElement("a",{href:"http://kerem.ws/"},"Kerem Sevencan"),". Made in Berlin with"," ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc96")))))};l.a.render(r.a.createElement(function(e){var t=localStorage.getItem("app_state"),a=t?JSON.parse(t):h(void 0,{type:void 0}),n=function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1],c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"app_state";return r.a.useEffect(function(){return localStorage.setItem(c,JSON.stringify(a))},[c,a]),[a,n]}(r.a.useReducer(h,a)),c=Object(o.a)(n,2),l={state:c[0],dispatch:c[1]};return r.a.createElement(b.Provider,{value:l},e.children)},null,r.a.createElement(S,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e65c1226.chunk.js.map