import{S as U}from"./SelectList-_-UlNEWf.js";import{B}from"./BackendFunctions-GaMgB9-1.js";import{_ as w,r as m,o as i,c as a,a as s,s as h,b as _,d as x,v as p,w as f,j as c,F as g,t as b,e as y,h as v,T,p as C,f as I}from"./index-6JdtvW3d.js";const S={components:{BackendFunctions:B,SelectList:U},data(){return{users:[],badusers:[],search:"",filteredUsersList:[],filteredBadUsersList:[],select:"1",isLoading:!1,options:[{value:"1",label:"會員資料"},{value:"2",label:"黑名單"}],options2:[{value:"2",label:"黑名單"},{value:"1",label:"會員資料"}]}},methods:{filteredUser(){this.search?(this.isLoading=!0,setTimeout(()=>{this.filteredUsersList=this.users.filter(e=>e.phone.includes(this.search)),this.isLoading=!1},500)):(this.isLoading=!0,setTimeout(()=>{this.filteredUsersList=this.users,this.isLoading=!1},500))},filteredBadUser(){this.search?(this.isLoading=!0,setTimeout(()=>{this.filteredBadUsersList=this.badusers.filter(e=>e.phone.includes(this.search)),this.isLoading=!1},500)):(this.isLoading=!0,setTimeout(()=>{this.filteredBadUsersList=this.badusers,this.isLoading=!1},500))},goBad(e){const t={identity:"baduser"};this.$axios.patch(`/users/${e}`,t).then(()=>{location.reload()})},goGood(e){const t={identity:"user"};this.$axios.patch(`/users/${e}`,t).then(()=>{location.reload()})},get(e){this.select=e}},mounted(){this.$axios.get("/users").then(e=>{e.data.forEach(t=>{t.identity=="user"?this.users.push({name:t.name,phone:t.phone,id:t.id}):t.identity=="baduser"&&this.badusers.push({name:t.name,phone:t.phone,id:t.id})})}).catch(e=>{console.error(e)}),this.filteredUsersList=this.users,this.filteredBadUsersList=this.badusers}},n=e=>(C("data-v-f045d57b"),e=e(),I(),e),V={class:"d-flex"},F={class:"sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column"},G={key:0,class:"main container"},N={class:"mt-5"},j={class:"row justify-content-between"},M={class:"col-8 mb-0 ms-2"},D={class:"d-flex h-50"},E=n(()=>s("label",{for:"search"},[s("i",{class:"bi bi-search fs-4"})],-1)),q={class:"col-2"},z={class:"card shadow-sm w-100 bg-light"},A={class:"card-body"},H={key:0},J=n(()=>s("div",{class:"spinner-border",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")],-1)),K=[J],O={key:1,class:"table table-hover align-middle table-sm reduce-spacing"},P={class:"fs-4 text-nowrap"},Q={key:0},R=n(()=>s("td",null,"查無此人",-1)),W=[R],X={class:"text-end"},Y=["data-bs-target"],Z=["id"],$={class:"modal-dialog"},ss={class:"modal-content border-0"},ts=n(()=>s("div",{class:"modal-body fs-3"},"是否加入黑名單?",-1)),es={class:"modal-footer border-0"},os=n(()=>s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),ds=["onClick"],is={key:1,class:"main container"},as={class:"mt-5"},ns={class:"row justify-content-between"},ls={class:"col-8 mb-0 ms-2"},rs={class:"d-flex h-50"},cs=n(()=>s("label",{for:"search"},[s("i",{class:"bi bi-search fs-4"})],-1)),hs={class:"col-2"},_s={class:"card shadow-sm w-100 bg-light"},bs={class:"card-body"},us={key:0},ms=n(()=>s("div",{class:"spinner-border",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")],-1)),ps=[ms],fs={key:1,class:"table table-hover align-middle table-sm reduce-spacing"},gs={class:"fs-4 text-nowrap"},ys={key:0},vs=n(()=>s("td",null,"查無此人",-1)),Ls=[vs],ks={class:"text-end"},Us=["data-bs-target"],Bs=["id"],ws={class:"modal-dialog"},xs={class:"modal-content border-0"},Ts=n(()=>s("div",{class:"modal-body fs-3"},"是否原諒他?",-1)),Cs={class:"modal-footer border-0"},Is=n(()=>s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),Ss=["onClick"];function Vs(e,t,Fs,Gs,d,l){const L=m("BackendFunctions"),u=m("select-list");return i(),a("div",V,[s("aside",F,[t[0]||(h(-1),t[0]=_(L),h(1),t[0])]),_(T,{name:"fade",mode:"out-in"},{default:x(()=>[d.select==1?(i(),a("main",G,[s("div",N,[s("div",j,[s("div",M,[s("div",D,[E,f(s("input",{type:"search",placeholder:"search",id:"search",onInput:t[1]||(t[1]=(...o)=>l.filteredUser&&l.filteredUser(...o)),class:"form-control border-0 shadow-none mt-2 fs-4 bg-secondary","onUpdate:modelValue":t[2]||(t[2]=o=>d.search=o)},null,544),[[p,d.search]])])]),s("div",q,[t[3]||(h(-1),t[3]=_(u,{options:d.options,onUpdata:l.get},null,8,["options","onUpdata"]),h(1),t[3])])])]),s("div",z,[s("div",A,[d.isLoading?(i(),a("div",H,K)):c("",!0),d.isLoading?c("",!0):(i(),a("table",O,[s("tbody",P,[this.filteredUsersList.length==0?(i(),a("tr",Q,W)):c("",!0)]),(i(!0),a(g,null,v(d.filteredUsersList,(o,r)=>(i(),a("tbody",{class:"fs-4 text-nowrap",key:r},[s("tr",null,[s("td",null,b(o.name),1),s("td",null,"手機:"+b(o.phone),1),s("td",X,[s("button",{class:"btn btn-outline-primary me-5","data-bs-toggle":"modal","data-bs-target":"#goBad"+r}," 黑名單 ",8,Y)])]),s("div",{class:"modal fade",id:"goBad"+r,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y(" 0 "),s("div",$,[s("div",ss,[ts,s("div",es,[os,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:k=>l.goBad(o.id)}," 確認 ",8,ds)])])])],8,Z)]))),128))]))])])])):d.select==2?(i(),a("main",is,[s("div",as,[s("div",ns,[s("div",ls,[s("div",rs,[cs,f(s("input",{type:"search",placeholder:"search",id:"search",onInput:t[4]||(t[4]=(...o)=>l.filteredBadUser&&l.filteredBadUser(...o)),class:"form-control border-0 shadow-none mt-2 fs-4 bg-secondary","onUpdate:modelValue":t[5]||(t[5]=o=>d.search=o)},null,544),[[p,d.search]])])]),s("div",hs,[t[6]||(h(-1),t[6]=_(u,{options:d.options2,onUpdata:l.get},null,8,["options","onUpdata"]),h(1),t[6])])])]),s("div",_s,[s("div",bs,[d.isLoading?(i(),a("div",us,ps)):c("",!0),d.isLoading?c("",!0):(i(),a("table",fs,[s("tbody",gs,[this.filteredBadUsersList.length==0?(i(),a("tr",ys,Ls)):c("",!0)]),(i(!0),a(g,null,v(d.filteredBadUsersList,(o,r)=>(i(),a("tbody",{class:"fs-4 text-nowrap",key:r},[s("tr",null,[s("td",null,b(o.name),1),s("td",null,"手機:"+b(o.phone),1),s("td",ks,[s("button",{class:"btn btn-primary me-5","data-bs-toggle":"modal","data-bs-target":"#goGood"+r}," 原諒你 ",8,Us)])]),s("div",{class:"modal fade",id:"goGood"+r,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y(" 0 "),s("div",ws,[s("div",xs,[Ts,s("div",Cs,[Is,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:k=>l.goGood(o.id)}," 確認 ",8,Ss)])])])],8,Bs)]))),128))]))])])])):c("",!0)]),_:1})])}const Ds=w(S,[["render",Vs],["__scopeId","data-v-f045d57b"]]);export{Ds as default};