webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"mb-5",staticStyle:{"box-shadow":"0px 0px 7px rgba(0,0,0,0.25)"},attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("JobFounder @ITKMITL")]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),a("b-collapse",{staticClass:"justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"../",active:""}},[t._v("งานทั้งหมด")]),t._v(" "),a("b-nav-item",{attrs:{href:"../request"}},[t._v("รับสมัครงาน")]),t._v(" "),a("b-nav-item",{attrs:{href:"../adminpanel"}},[t._v("ผู้ดูแลระบบ")])],1)],1)],1)],1)},staticRenderFns:[]},s={name:"App",components:{navbar:a("VU/8")(null,n,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")(s,l,!1,function(t){a("UH0r")},null,null).exports,i=a("/ocq"),c={data:function(){return{alljobs:{}}},mounted:function(){var t=this;C.jobsRef.on("value",function(e){t.alljobs=e.val()})}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"4"}},[t._v("Sidebar")]),t._v(" "),a("b-col",{attrs:{cols:"8"}},t._l(t.alljobs,function(e,o){return a("div",{key:o},["approve"==e.check?a("b-card",{staticClass:"mb-3",attrs:{title:e.position,"sub-title":e.type}},[a("b-card-text",[t._v(t._s(e.minsalary)+" - "+t._s(e.maxsalary)+" Baht | "),a("b",[t._v(t._s(e.companyname))])]),t._v(" "),a("b-button",{attrs:{id:"show-btn"},on:{click:function(e){return t.$bvModal.show(o)}}},[t._v("ดูรายละเอียดเพิ่มเติม")])],1):t._e(),t._v(" "),a("b-modal",{attrs:{id:o,size:"lg","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n                      "+t._s(e.position)+"\n                  ")]},proxy:!0}],null,!0)},[t._v(" "),a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("Hello From This Modal!")])]),t._v(" "),a("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide(o)}}},[t._v("Close Me")])],1)],1)}),0)],1)],1)},staticRenderFns:[]},u=a("VU/8")(c,b,!1,null,null,null).exports,p={components:{VueEditor:a("+qPk").a},data:function(){return{alljobs:{},newJob:{position:"",relateskill:[],typejob:[],minsalary:"",maxsalary:"",contract:"",detail:"",companyname:"",companyaddress:"",companyphone:"",companymail:"",companysite:"",check:"pending"},typeo:[{text:"Full time",value:"Full time"},{text:"Part time",value:"Part time"},{text:"Internship",value:"Internship"}],skill_option:[{text:"HTML",value:"HTML"},{text:"CSS",value:"CSS"},{text:"Javascript",value:"Javascript"},{text:"Vue.js",value:"Vue.js"},{text:"React",value:"React"},{text:"React Native",value:"React Native"},{text:"Flutter",value:"Flutter"},{text:"Node.js",value:"Node.js"},{text:"Django",value:"Django"},{text:"Python",value:"Python"},{text:"C",value:"C"}]}},methods:{addJobs:function(){C.jobsRef.push(this.newJob),this.newJob.position="",this.newJob.relateskill=[],this.newJob.typejob=[],this.newJob.minsalary="",this.newJob.maxsalary="",this.newJob.contract="",this.newJob.detail="",this.newJob.companyname="",this.newJob.companyaddress="",this.newJob.companyphone="",this.newJob.companymail="",this.newJob.companysite="",this.newJob.check="pending",this.$toast.open({message:"ส่งข้อมูลสำเร็จ รออนุมัติจากผู้ดูแลระบบ",position:"top-right",type:"success",duration:5e3,dismissible:!0})}},mounted:function(){var t=this;C.jobsRef.on("value",function(e){t.alljobs=e.val()})}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.addJobs(e)}}},[a("b-row",[a("b-col",{attrs:{cols:"8"}},[a("h4",{staticClass:"text-center"},[a("span",{staticStyle:{"font-weight":"800","font-size":"1.5em"}},[t._v("J")]),t._v("obs Detail")]),t._v(" "),a("b-form-group",{attrs:{label:"ตำแหน่งที่รับสมัคร","label-for":"position"}},[a("b-form-input",{attrs:{id:"position",type:"text",required:"",placeholder:"ตำแหน่งที่รับสมัคร"},model:{value:t.newJob.position,callback:function(e){t.$set(t.newJob,"position",e)},expression:"newJob.position"}})],1),t._v(" "),a("br"),t._v(" "),a("b-form-group",{attrs:{label:"สกิลที่จำเป็น"}},[a("b-form-checkbox-group",{attrs:{id:"relateskill",options:t.skill_option,name:"relateskill"},model:{value:t.newJob.relateskill,callback:function(e){t.$set(t.newJob,"relateskill",e)},expression:"newJob.relateskill"}})],1),t._v(" "),a("br"),t._v(" "),a("b-row",[a("b-col",{attrs:{cols:"3"}},[a("b-form-group",{attrs:{label:"ประเภทงาน"}},[a("b-form-checkbox-group",{attrs:{id:"typejob",options:t.typeo,name:"typejob"},model:{value:t.newJob.typejob,callback:function(e){t.$set(t.newJob,"typejob",e)},expression:"newJob.typejob"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"3"}},[a("b-form-group",{attrs:{label:"เงินเดือนขั้นต่ำ","label-for":"minsalary"}},[a("b-form-input",{attrs:{id:"minsalary",type:"number",required:"",placeholder:"min salary"},model:{value:t.newJob.minsalary,callback:function(e){t.$set(t.newJob,"minsalary",e)},expression:"newJob.minsalary"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"3"}},[a("b-form-group",{attrs:{label:"เงินเดือนสูงสุด","label-for":"maxsalary"}},[a("b-form-input",{attrs:{id:"maxsalary",type:"number",required:"",placeholder:"max salary"},model:{value:t.newJob.maxsalary,callback:function(e){t.$set(t.newJob,"maxsalary",e)},expression:"newJob.maxsalary"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"3"}},[a("b-form-group",{attrs:{label:"สัญญาจ้างขั้นต่ำ (เดือน)","label-for":"mincontract"}},[a("b-form-input",{attrs:{id:"contract",type:"number",required:"",placeholder:"สัญญาจ้างขั้นต่ำ"},model:{value:t.newJob.contract,callback:function(e){t.$set(t.newJob,"contract",e)},expression:"newJob.contract"}})],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:""}},[t._v("Other Detail & Remark*")]),t._v(" "),a("vue-editor",{model:{value:t.newJob.detail,callback:function(e){t.$set(t.newJob,"detail",e)},expression:"newJob.detail"}})],1),t._v(" "),a("b-col",{staticStyle:{"border-left":"5px solid rgba(189, 189, 189, 0.35)"},attrs:{cols:"4"}},[a("h4",{staticClass:"text-center"},[a("span",{staticStyle:{"font-weight":"800","font-size":"1.5em"}},[t._v("C")]),t._v("ontact")]),t._v(" "),a("b-form-group",{attrs:{label:"ข้อมูลบริษัท","label-for":"company"}},[a("b-form-input",{attrs:{id:"companyname",type:"text",required:"",placeholder:"ชื่อบริษัท"},model:{value:t.newJob.companyname,callback:function(e){t.$set(t.newJob,"companyname",e)},expression:"newJob.companyname"}})],1),t._v(" "),a("b-form-textarea",{attrs:{id:"companyaddress",placeholder:"ที่อยู่บริษัท",rows:"2","max-rows":"6"},model:{value:t.newJob.companyaddress,callback:function(e){t.$set(t.newJob,"companyaddress",e)},expression:"newJob.companyaddress"}}),t._v(" "),a("br"),t._v(" "),a("b-form-group",[a("b-form-input",{attrs:{id:"companyphone",type:"text",required:"",placeholder:"เบอร์ติดต่อ"},model:{value:t.newJob.companyphone,callback:function(e){t.$set(t.newJob,"companyphone",e)},expression:"newJob.companyphone"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{attrs:{id:"companymail",type:"text",required:"",placeholder:"อีเมลติดต่อ"},model:{value:t.newJob.companymail,callback:function(e){t.$set(t.newJob,"companymail",e)},expression:"newJob.companymail"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{attrs:{id:"companysite",type:"text",required:"",placeholder:"เว็บไซต์บริษัท"},model:{value:t.newJob.companysite,callback:function(e){t.$set(t.newJob,"companysite",e)},expression:"newJob.companysite"}})],1),t._v(" "),a("b-button",{staticClass:"w-100 my-3",attrs:{type:"submit",variant:"outline-success"}},[t._v("ลงประกาศ")])],1)],1)],1),t._v(" "),a("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[a("pre",{staticClass:"m-0"},[t._v(t._s(t.newJob))])]),t._v(" "),t._l(t.alljobs,function(e,o){return a("ul",{key:o},[a("li",[t._v(t._s(e.position))])])})],2)},staticRenderFns:[]};var m=a("VU/8")(p,d,!1,function(t){a("jXp+")},"data-v-985cd08a",null).exports,v={data:function(){return{alljobs:{},check:"",updateKey:""}},methods:{updateJobs:function(t,e){this.updateKey=t,this.check=e,C.jobsRef.child(this.updateKey).update({check:e}),"approve"==this.check?this.$toast.open({message:"อนุมัติข้อมูล",position:"top-right",type:"success",duration:3e3,dismissible:!0}):this.$toast.open({message:"ปฎิเสธข้อมูล",position:"top-right",type:"error",duration:3e3,dismissible:!0}),this.updateKey=""},deleteJob:function(t){C.jobsRef.child(t).remove()}},mounted:function(){var t=this;C.jobsRef.on("value",function(e){t.alljobs=e.val()})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("h2",[t._v("Admin Panel")]),t._v(" "),t._l(t.alljobs,function(e,o){return a("div",{key:o},[a("b-card",{staticClass:"mb-3",attrs:{title:e.position}},[a("span",{staticClass:"badge badge-pill badge-dark"},[t._v(t._s(e.check))]),t._v(" "),a("div",{staticClass:"d-flex justify-content-end"},[a("b-button",{staticClass:"btn-success btn-sm mr-1",attrs:{id:"show-btn"},on:{click:function(e){return t.updateJobs(o,"approve")}}},[t._v("Approve")]),t._v(" "),a("b-button",{staticClass:"btn-danger btn-sm mr-1",attrs:{id:"show-btn"},on:{click:function(e){return t.updateJobs(o,"reject")}}},[t._v("Reject")]),t._v(" "),a("b-button",{staticClass:"btn-warning btn-sm mr-1",attrs:{id:"show-btn"},on:{click:function(e){return t.deleteJob(o)}}},[t._v("Delete")]),t._v(" "),a("b-button",{staticClass:"btn-sm",attrs:{id:"show-btn"},on:{click:function(e){return t.$bvModal.show(o)}}},[t._v("ดูรายละเอียดเพิ่มเติม")])],1)]),t._v(" "),a("b-modal",{attrs:{id:o,size:"lg","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n        Using "),a("code",[t._v("$bvModal")]),t._v(" Methods\n      ")]},proxy:!0}],null,!0)},[t._v(" "),a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("Hello From This Modal!")])]),t._v(" "),a("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide(o)}}},[t._v("Close Me")])],1)],1)})],2)},staticRenderFns:[]},h=a("VU/8")(v,f,!1,null,null,null).exports;o.default.use(i.a);var y=new i.a({mode:"history",routes:[{path:"/",name:"home",component:u},{path:"/request",name:"request",component:m},{path:"/adminpanel",name:"adminpanel",component:h}]}),_=a("Tqaz"),w=(a("Jmt5"),a("9M+g"),a("hnaQ")),J=a("kxiW"),x=a.n(J),k=a("+4za"),g=a.n(k);a("bmbJ");o.default.use(g.a),o.default.use(w.a),o.default.use(_.a),o.default.use(_.b),o.default.config.productionTip=!1;var j=x.a.initializeApp({apiKey:"AIzaSyBNZgEKkdGQN6FGRDAIkiTdTRg4HCK9t_M",authDomain:"jobfounder-itkmitl.firebaseapp.com",databaseURL:"https://jobfounder-itkmitl.firebaseio.com",projectId:"jobfounder-itkmitl",storageBucket:"jobfounder-itkmitl.appspot.com",messagingSenderId:"406458204536",appId:"1:406458204536:web:373f85a19d2a0ac9bcc88d",measurementId:"G-RRHFV0S89C"}).database().ref("jobs"),C=e.default={jobsRef:j};new o.default({el:"#app",router:y,components:{App:r},template:"<App/>"})},UH0r:function(t,e){},bmbJ:function(t,e){},"jXp+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4079f02691a328453949.js.map