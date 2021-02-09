(this["webpackJsonpsqi-schedule"]=this["webpackJsonpsqi-schedule"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(2),l=a.n(c),i=a(6),n=a.n(i),o=(a(33),a(34),a(24)),d=a(7),r=a(8),h=a(10),j=a(9),m=a(25),b=a(11),p=a(26),u=a(27),x=a(5),O=a.n(x),v=(a(22),a(56),a(57),a(59),a(60),a(4)),N=a.n(v),f=a(12),C=a.n(f),g=(a.p,function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).getScheduleById=function(e){O.a.get("/sqi-schedule/get-scheduleById/"+e).then((function(e){s.setState({id:e.data.id,task:e.data.task,app:e.data.app,fromDate:e.data.fromDate,fromTime:e.data.fromTime,toDate:e.data.toDate,toTime:e.data.toTime,color:e.data.color})}))},s.deleteSchedule=function(e){O.a.delete("/sqi-schedule/delete-schedule/"+e).then((function(e){C.a.fire({icon:"success",title:"Success",text:"Your Task Has Been Deleted",confrimButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))}))},s.updateSchedule=function(e){var t={task:s.state.task,app:s.state.app,fromDate:s.state.fromDate,fromTime:s.state.toTime,toDate:s.state.toDate,toTime:s.state.toTime,color:s.state.color};O.a.put("/sqi-schedule/update-schedule/"+e,t).then((function(e){C.a.fire({icon:"success",title:"Success",text:"Your Data has been Update",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))}))},s.handleUpdateSchedule=function(e){s.setState(Object(o.a)({},e.target.name,e.target.value))},s.state={fields:{},schedule:[],number:1},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(e){this.getSchedule()}},{key:"getSchedule",value:function(){var e=this;O.a.get("/sqi-schedule/get-schedule").then((function(t){var a=t.data;e.setState({schedule:a}),N()((function(){N()("#scheduleTable").DataTable({responsive:!0})}))}))}},{key:"taskSubmit",value:function(e){var t=this.state.fields,a={task:t.task,app:t.app,fromDate:t.fromDate,toDate:t.toDate,fromTime:t.fromTime,toTime:t.toTime,color:t.color};console.log(a),O.a.post("/sqi-schedule/add-schedule",a).then((function(e){C.a.fire({icon:"success",title:"Success",text:"Your Task Has Been Added",confrimButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))}))}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"render",value:function(){var e=this,t=this.state.schedule,a=this.state.number;return Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("section",{className:"titleSection",children:Object(s.jsx)("div",{className:"titleWeb",children:Object(s.jsxs)("h3",{children:[Object(s.jsx)("span",{className:"material-icons",style:{fontSize:"40px"},children:"event_available"}),"SQi Calendar"]})})}),Object(s.jsx)("section",{className:"contentSection",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary addTask","data-bs-toggle":"modal","data-bs-target":"#addTaskModal",children:"Add Task"})}),Object(s.jsx)("section",{className:"contentSection",children:Object(s.jsx)("div",{className:"modal fade",id:"addTaskModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add Your Task"}),Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(s.jsx)("div",{className:"modal-body",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"task col-sm-6",children:Object(s.jsx)("label",{children:"Your Task"})}),Object(s.jsx)("div",{className:"task col-md-12",children:Object(s.jsx)("input",{name:"task",className:"col-md-12",placeholder:"-- Enter Your Task --",onChange:this.handleChange.bind(this,"task"),value:this.state.fields.task})})]})})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"application col-sm-6",children:Object(s.jsx)("label",{children:"Your Application"})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("select",{className:" application col-sm-12",name:"app",id:"appItem",onChange:this.handleChange.bind(this,"app"),value:this.state.fields.app,children:[Object(s.jsx)("option",{value:"null",children:"-- Choose Application --"}),Object(s.jsx)("option",{className:"selectApp",value:"CRM Halo",children:"CRM Halo"}),Object(s.jsx)("option",{className:"selectApp",value:"Halo Lite",children:"Halo Lite"}),Object(s.jsx)("option",{className:"selectApp",value:"Halo Apps",children:"Halo Apps"}),Object(s.jsx)("option",{className:"selectApp",value:"Spekta BCA",children:"Spekta BCA"}),Object(s.jsx)("option",{className:"selectApp",value:"Telephony",children:"Telephony"}),Object(s.jsx)("option",{className:"selectApp",value:"SOSMED",children:"SOSMED"}),Object(s.jsx)("option",{className:"selectApp",value:"Chain",children:"Chain"}),Object(s.jsx)("option",{className:"selectApp",value:"MQA",children:"MQA"})]})})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"date col-sm-6",children:Object(s.jsx)("label",{children:"From"})}),Object(s.jsxs)("div",{className:"chooseDate",children:[Object(s.jsx)("input",{className:"fromDate col-sm-6",type:"date",name:"fromDate",placeholder:"Start",onChange:this.handleChange.bind(this,"fromDate"),value:this.state.fields.fromDate}),Object(s.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"fromTime",onChange:this.handleChange.bind(this,"fromTime"),value:this.state.fields.fromTime})]})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"date col-sm-6",children:Object(s.jsx)("label",{children:"To"})}),Object(s.jsxs)("div",{className:"chooseDate",children:[Object(s.jsx)("input",{className:"toDate col-sm-6",type:"date",name:"toDate",placeholder:"Finish",onChange:this.handleChange.bind(this,"toDate"),value:this.state.fields.toDate}),Object(s.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"toTime",onChange:this.handleChange.bind(this,"toTime"),value:this.state.fields.toTime})]})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"color col-sm-6",children:Object(s.jsx)("label",{children:"Choose Color"})}),Object(s.jsx)("div",{className:"chooseColor",children:Object(s.jsxs)("select",{className:"col-sm-6",name:"color",id:"selectColor",onChange:this.handleChange.bind(this,"color"),value:this.state.fields.color,children:[Object(s.jsx)("option",{value:"null",children:"-- Choose Color --"}),Object(s.jsx)("option",{className:"blue",value:"#1F7EE6",children:"CRM Halo"}),Object(s.jsx)("option",{className:"green",value:"#1FF206",children:"Halo Lite"}),Object(s.jsx)("option",{className:"yellow",value:"#D2FC00",children:"Halo Apps"}),Object(s.jsx)("option",{className:"orange",value:"#FF8900",children:"Spekta BCA"}),Object(s.jsx)("option",{className:"purple",value:"#CF2AFF",children:"Telephony"}),Object(s.jsx)("option",{className:"pink",value:"#FE96DB",children:"SOSMED"}),Object(s.jsx)("option",{className:"gray",value:"#81888A",children:"Chain"}),Object(s.jsx)("option",{className:"brown",value:"#924D0D",children:"MQA"})]})})]})})]})})}),Object(s.jsxs)("div",{className:"modal-footer",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.taskSubmit.bind(this),children:"Save changes"})]})]})})})}),Object(s.jsx)("section",{className:"contentSection",children:Object(s.jsx)("div",{class:"modal fade",id:"deleteTaskModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Delete Task"}),Object(s.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(s.jsx)("div",{class:"modal-body",children:"Are you sure to delete this event?"}),Object(s.jsxs)("div",{class:"modal-footer",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return e.deleteSchedule(e.state.id)},children:"Delete"})]})]})})})}),Object(s.jsx)("section",{className:"contentSection",children:Object(s.jsx)("div",{className:"modal fade",id:"updateTaskModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add Your Task"}),Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(s.jsx)("div",{className:"modal-body",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"task col-sm-6",children:Object(s.jsx)("label",{children:"Edit Task"})}),Object(s.jsx)("div",{className:"task col-md-12",children:Object(s.jsx)("input",{name:"task",className:"col-md-12",placeholder:"-- Enter Your Task --",onChange:this.handleUpdateSchedule,value:this.state.task})})]})})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"application col-sm-6",children:Object(s.jsx)("label",{children:"Your Application"})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("select",{className:" application col-sm-12",name:"app",id:"appItem",onChange:this.handleUpdateSchedule,value:this.state.app,children:[Object(s.jsx)("option",{value:"null",children:"-- Choose Application --"}),Object(s.jsx)("option",{className:"selectApp",value:"CRM Halo",children:"CRM Halo"}),Object(s.jsx)("option",{className:"selectApp",value:"Halo Lite",children:"Halo Lite"}),Object(s.jsx)("option",{className:"selectApp",value:"Halo Apps",children:"Halo Apps"}),Object(s.jsx)("option",{className:"selectApp",value:"Spekta BCA",children:"Spekta BCA"}),Object(s.jsx)("option",{className:"selectApp",value:"Telephony",children:"Telephony"}),Object(s.jsx)("option",{className:"selectApp",value:"SOSMED",children:"SOSMED"}),Object(s.jsx)("option",{className:"selectApp",value:"Chain",children:"Chain"}),Object(s.jsx)("option",{className:"selectApp",value:"MQA",children:"MQA"})]})})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"date col-sm-6",children:Object(s.jsx)("label",{children:"From"})}),Object(s.jsxs)("div",{className:"chooseDate",children:[Object(s.jsx)("input",{className:"fromDate col-sm-6",type:"date",name:"fromDate",placeholder:"Start",onChange:this.handleUpdateSchedule,value:this.state.fromDate}),Object(s.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"fromTime",onChange:this.handleUpdateSchedule,value:this.state.fromTime})]})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"date col-sm-6",children:Object(s.jsx)("label",{children:"To"})}),Object(s.jsxs)("div",{className:"chooseDate",children:[Object(s.jsx)("input",{className:"toDate col-sm-6",type:"date",name:"toDate",placeholder:"Finish",onChange:this.handleUpdateSchedule,value:this.state.toDate}),Object(s.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"toTime",onChange:this.handleUpdateSchedule,value:this.state.toTime})]})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("div",{className:"color col-sm-6",children:Object(s.jsx)("label",{children:"Choose Color"})}),Object(s.jsx)("div",{className:"chooseColor",children:Object(s.jsxs)("select",{className:"col-sm-6",name:"color",id:"selectColor",onChange:this.handleUpdateSchedule,value:this.state.color,children:[Object(s.jsx)("option",{value:"null",children:"-- Choose Color --"}),Object(s.jsx)("option",{className:"blue",value:"#1F7EE6",children:"CRM Halo"}),Object(s.jsx)("option",{className:"green",value:"#1FF206",children:"Halo Lite"}),Object(s.jsx)("option",{className:"yellow",value:"#D2FC00",children:"Halo Apps"}),Object(s.jsx)("option",{className:"orange",value:"#FF8900",children:"Spekta BCA"}),Object(s.jsx)("option",{className:"purple",value:"#CF2AFF",children:"Telephony"}),Object(s.jsx)("option",{className:"pink",value:"#FE96DB",children:"SOSMED"}),Object(s.jsx)("option",{className:"gray",value:"#81888A",children:"Chain"}),Object(s.jsx)("option",{className:"brown",value:"#924D0D",children:"MQA"})]})})]})})]})})}),Object(s.jsxs)("div",{className:"modal-footer",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.updateSchedule(e.state.id)},children:"Save changes"})]})]})})})}),Object(s.jsx)("section",{className:"contentSection",children:Object(s.jsx)(m.a,{plugins:[b.b,p.a,u.a],initialView:"dayGridMonth",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},events:t.map((function(e){return{title:"".concat(e.task," - ").concat(e.app),start:"".concat(e.fromDate,"T").concat(e.fromTime),end:"".concat(e.toDate,"T").concat(e.toTime),color:e.color}}))})}),Object(s.jsx)("section",{id:"dataTables",className:"contentSection",children:Object(s.jsxs)("table",{id:"scheduleTable",responsive:!0,striped:!0,style:{width:"100%"},children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"header",children:"No."}),Object(s.jsx)("th",{className:"header",children:"Application"}),Object(s.jsx)("th",{className:"header",children:"Task"}),Object(s.jsx)("th",{className:"header",children:"From Date"}),Object(s.jsx)("th",{className:"header",children:"To Date"}),Object(s.jsx)("th",{className:"header",children:"Action"})]})}),Object(s.jsx)("tbody",{children:t.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"data",children:a++}),Object(s.jsx)("td",{children:t.app}),Object(s.jsx)("td",{children:t.task}),Object(s.jsx)("td",{className:"data",children:"".concat(t.fromDate,"T").concat(t.fromTime)}),Object(s.jsx)("td",{className:"data",children:"".concat(t.toDate,"T").concat(t.toTime)}),Object(s.jsx)("td",{children:Object(s.jsxs)("div",{className:"actionBtn",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-warning action","data-bs-toggle":"modal","data-bs-target":"#updateTaskModal",onClick:function(){return e.getScheduleById(t.id)},children:"Update"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger action","data-bs-toggle":"modal","data-bs-target":"#deleteTaskModal",onClick:function(){return e.getScheduleById(t.id)},children:"Delete"})]})})]})}))})]})})]})}}]),a}(c.Component));c.Component;var T=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(g,{})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),l(e),i(e)}))};n.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.08c56f7e.chunk.js.map