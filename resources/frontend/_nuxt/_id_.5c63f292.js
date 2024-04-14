import{_ as N}from"./layout-sidebar.vue.30b2544d.js";import{d as f,c as q,o as s,a as u,b as t,t as a,h as n,F as P,r as w,p as $,i as S,_ as k,e as i,g as o,w as l,u as r,f as h,s as V,j as F,k as H,l as M,m as R}from"./entry.8cc9a0a4.js";import{u as j}from"./fetch.18605a33.js";import{P as G}from"./page-header.301ae07f.js";import{h as T}from"./file-attachment.vue.44781509.js";import{u as O}from"./use-events.46f9c63f.js";import{S as K,u as U}from"./sentry-exception.26b9d4ea.js";import{T as _,a as A}from"./table-base.f52003cb.js";import{C as D}from"./code-snippet.b94075a7.js";import{u as W}from"./use-formats.c79ce0bd.js";import"./icon-svg.07e61883.js";const m=d=>($("data-v-e6095a33"),d=d(),S(),d),X={class:"sentry-page-tags"},J={class:"sentry-page-tags__boxes"},Q={key:0,class:"sentry-page-tags__box"},Y=m(()=>t("span",{class:"sentry-page-tags__box-title"},"runtime",-1)),Z={class:"sentry-page-tags__box-name"},x={class:"sentry-page-tags__box-value"},ee={key:1,class:"sentry-page-tags__box"},se=m(()=>t("span",{class:"sentry-page-tags__box-title"},"os",-1)),te={class:"sentry-page-tags__box-name"},ae={class:"sentry-page-tags__box-value"},ne={key:2,class:"sentry-page-tags__box"},re=m(()=>t("span",{class:"sentry-page-tags__box-title"},"sdk",-1)),oe={class:"sentry-page-tags__box-name"},le={class:"sentry-page-tags__box-value"},de={class:"sentry-page-tags__labels-wrapper"},ie=m(()=>t("h3",{class:"sentry-page-tags__title"},"tags",-1)),_e={class:"sentry-page-tags__labels"},ce={class:"sentry-page-tags__label"},pe=m(()=>t("div",{class:"sentry-page-tags__label-name"},"env",-1)),ue={class:"sentry-page-tags__label-value"},ve={key:0,class:"sentry-page-tags__label"},ye=m(()=>t("div",{class:"sentry-page-tags__label-name"},"release",-1)),ge={class:"sentry-page-tags__label-value"},me={key:1,class:"sentry-page-tags__label"},he=m(()=>t("div",{class:"sentry-page-tags__label-name"},"logger",-1)),be={class:"sentry-page-tags__label-value"},fe={key:2,class:"sentry-page-tags__label"},ke=m(()=>t("div",{class:"sentry-page-tags__label-name"},"os",-1)),$e={class:"sentry-page-tags__label-value"},Se={key:3,class:"sentry-page-tags__label"},Ie=m(()=>t("div",{class:"sentry-page-tags__label-name"},"runtime",-1)),qe={class:"sentry-page-tags__label-value"},Pe={key:4,class:"sentry-page-tags__label"},we=m(()=>t("div",{class:"sentry-page-tags__label-name"},"server name",-1)),Be={class:"sentry-page-tags__label-value"},Te={class:"sentry-page-tags__label"},Ae={class:"sentry-page-tags__label-name"},De={class:"sentry-page-tags__label-value"},ze=f({__name:"sentry-page-tags",props:{payload:{}},setup(d){const c=d,p=q(()=>{var y;const{name:e="",version:g=""}=((y=c.payload.contexts)==null?void 0:y.runtime)||{};return{name:e,version:g}}),v=q(()=>{var y;const{name:e="",version:g=""}=((y=c.payload.contexts)==null?void 0:y.os)||{};return{name:e,version:g}});return(e,g)=>(s(),u("section",X,[t("div",J,[p.value.name?(s(),u("div",Q,[Y,t("h4",Z,a(p.value.name),1),t("p",x," Version: "+a(p.value.version),1)])):n("",!0),v.value.name?(s(),u("div",ee,[se,t("h4",te,a(v.value.name),1),t("p",ae," Version: "+a(v.value.version),1)])):n("",!0),e.payload.sdk&&e.payload.sdk.name?(s(),u("div",ne,[re,t("h4",oe,a(e.payload.sdk.name),1),t("p",le," Version: "+a(e.payload.sdk.version),1)])):n("",!0)]),t("div",de,[ie,t("div",_e,[t("div",ce,[pe,t("div",ue,a(e.payload.environment),1)]),e.payload.release?(s(),u("div",ve,[ye,t("div",ge,a(e.payload.release),1)])):n("",!0),e.payload.logger?(s(),u("div",me,[he,t("div",be,a(e.payload.logger),1)])):n("",!0),v.value.name?(s(),u("div",fe,[ke,t("div",$e,a(v.value.name)+" "+a(v.value.version),1)])):n("",!0),p.value.name?(s(),u("div",Se,[Ie,t("div",qe,a(p.value.name)+" "+a(p.value.version),1)])):n("",!0),e.payload.server_name?(s(),u("div",Pe,[we,t("div",Be,a(e.payload.server_name),1)])):n("",!0),e.payload.tags?(s(!0),u(P,{key:5},w(e.payload.tags,(y,b)=>(s(),u("div",Te,[t("div",Ae,a(b),1),t("div",De,a(y||" - "),1)]))),256)):n("",!0)])])]))}});const Ee=k(ze,[["__scopeId","data-v-e6095a33"]]),C=d=>($("data-v-a958c8fb"),d=d(),S(),d),Le={class:"sentry-page-request"},Re=C(()=>t("h3",{class:"sentry-page-request__title"},"request",-1)),Ce={class:"sentry-page-request__wrapper"},Ne={key:0,class:"sentry-page-request__url"},Ve=C(()=>t("h3",{class:"sentry-page-request__title sentry-page-request__title--sub"}," headers ",-1)),Fe=f({__name:"sentry-page-request",props:{request:{}},setup(d){const c=p=>Array.isArray(p)&&p[0]||p;return(p,v)=>(s(),u("section",Le,[Re,t("div",Ce,[p.request?(s(),u("code",Ne,[t("strong",null,a(p.request.method||"GET")+":",1),i(" "+a(p.request.url),1)])):n("",!0),Ve,p.request&&p.request.headers?(s(),o(r(A),{key:1},{default:l(()=>[(s(!0),u(P,null,w(p.request.headers,(e,g)=>(s(),o(r(_),{key:g,title:g},{default:l(()=>[i(a(c(e)),1)]),_:2},1032,["title"]))),128))]),_:1})):n("",!0)])]))}});const He=k(Fe,[["__scopeId","data-v-a958c8fb"]]),Me=d=>($("data-v-0e9cd169"),d=d(),S(),d),je={class:"sentry-page-device"},Ge=Me(()=>t("h3",{class:"sentry-page-device__title"},"device",-1)),Oe=f({__name:"sentry-page-device",props:{device:{}},setup(d){const{formatFileSize:c}=W(),p=e=>T(e).toLocaleString(),v=e=>`${parseInt(String(e),10)}%`;return(e,g)=>(s(),u("section",je,[Ge,h(r(A),null,{default:l(()=>[e.device&&e.device.arch?(s(),o(r(_),{key:0,title:"Architectures"},{default:l(()=>[h(r(D),{class:"mt-3",language:"json",code:e.device.arch},null,8,["code"])]),_:1})):n("",!0),e.device&&e.device.battery_level?(s(),o(r(_),{key:1,title:"Battery Level"},{default:l(()=>[i(a(v(e.device.battery_level)),1)]),_:1})):n("",!0),e.device&&e.device.boot_time?(s(),o(r(_),{key:2,title:"Boot Time"},{default:l(()=>[i(a(p(e.device.boot_time)),1)]),_:1})):n("",!0),e.device&&e.device.brand?(s(),o(r(_),{key:3,title:"Brand"},{default:l(()=>[i(a(e.device.brand),1)]),_:1})):n("",!0),e.device&&e.device.charging?(s(),o(r(_),{key:4,title:"Charging"},{default:l(()=>[i(a(e.device.charging),1)]),_:1})):n("",!0),e.device&&e.device.family?(s(),o(r(_),{key:5,title:"Family"},{default:l(()=>[i(a(e.device.family),1)]),_:1})):n("",!0),e.device&&e.device.free_memory?(s(),o(r(_),{key:6,title:"Free Memory"},{default:l(()=>[i(a(r(c)(e.device.free_memory)),1)]),_:1})):n("",!0),e.device&&e.device.free_storage?(s(),o(r(_),{key:7,title:"Free Storage"},{default:l(()=>[i(a(r(c)(e.device.free_storage)),1)]),_:1})):n("",!0),e.device&&e.device.id?(s(),o(r(_),{key:8,title:"Id"},{default:l(()=>[i(a(e.device.id),1)]),_:1})):n("",!0),e.device&&e.device.language?(s(),o(r(_),{key:9,title:"Language"},{default:l(()=>[i(a(e.device.language),1)]),_:1})):n("",!0),e.device&&e.device.low_memory?(s(),o(r(_),{key:10,title:"Low Memory"},{default:l(()=>[i(a(e.device.low_memory),1)]),_:1})):n("",!0),e.device&&e.device.manufacturer?(s(),o(r(_),{key:11,title:"Manufacturer"},{default:l(()=>[i(a(e.device.manufacturer),1)]),_:1})):n("",!0),e.device&&e.device.memory_size?(s(),o(r(_),{key:12,title:"Memory Size"},{default:l(()=>[i(a(r(c)(e.device.memory_size)),1)]),_:1})):n("",!0),e.device&&e.device.model?(s(),o(r(_),{key:13,title:"Model"},{default:l(()=>[i(a(e.device.model),1)]),_:1})):n("",!0),e.device&&e.device.model_id?(s(),o(r(_),{key:14,title:"Model Id"},{default:l(()=>[i(a(e.device.model_id),1)]),_:1})):n("",!0),e.device&&e.device.name?(s(),o(r(_),{key:15,title:"Name"},{default:l(()=>[i(a(e.device.name),1)]),_:1})):n("",!0),e.device&&e.device.orientation?(s(),o(r(_),{key:16,title:"Orientation"},{default:l(()=>[i(a(e.device.orientation),1)]),_:1})):n("",!0),e.device&&e.device.screen_density?(s(),o(r(_),{key:17,title:"Screen Density"},{default:l(()=>[i(a(parseInt(String(e.device.screen_density))),1)]),_:1})):n("",!0),e.device&&e.device.screen_dpi?(s(),o(r(_),{key:18,title:"Screen DPI"},{default:l(()=>[i(a(e.device.screen_dpi),1)]),_:1})):n("",!0),e.device&&e.device.screen_height_pixels?(s(),o(r(_),{key:19,title:"Screen Height Pixels"},{default:l(()=>[i(a(e.device.screen_height_pixels),1)]),_:1})):n("",!0),e.device&&e.device.screen_width_pixels?(s(),o(r(_),{key:20,title:"Screen Width Pixels"},{default:l(()=>[i(a(e.device.screen_width_pixels),1)]),_:1})):n("",!0),e.device&&e.device.simulator?(s(),o(r(_),{key:21,title:"Simulator"},{default:l(()=>[i(a(e.device.simulator),1)]),_:1})):n("",!0),e.device&&e.device.storage_size?(s(),o(r(_),{key:22,title:"Storage Size"},{default:l(()=>[i(a(r(c)(e.device.storage_size)),1)]),_:1})):n("",!0),e.device&&e.device.timezone?(s(),o(r(_),{key:23,title:"Timezone"},{default:l(()=>[i(a(e.device.timezone),1)]),_:1})):n("",!0),e.device&&e.device.battery_temperature?(s(),o(r(_),{key:24,title:"Battery Temperature"},{default:l(()=>[i(a(e.device.battery_temperature),1)]),_:1})):n("",!0),e.device&&e.device.locale?(s(),o(r(_),{key:25,title:"Locale"},{default:l(()=>[i(a(e.device.locale),1)]),_:1})):n("",!0)]),_:1})]))}});const Ke=k(Oe,[["__scopeId","data-v-0e9cd169"]]),z=d=>($("data-v-f3ff3d48"),d=d(),S(),d),Ue={class:"sentry-page-breadcrumbs"},We={class:"sentry-page-breadcrumbs__title"},Xe={key:0,class:"sentry-page-breadcrumbs__counter"},Je={class:"sentry-page-breadcrumbs__in"},Qe=z(()=>t("nav",{style:{"grid-template-columns":"1fr 100px 200px 17px"},class:"sentry-page-breadcrumbs__nav"},[t("div",{class:"sentry-page-breadcrumbs__nav-col-title"},"description"),t("div",{class:"sentry-page-breadcrumbs__nav-col-title"},"level"),t("div",{class:"sentry-page-breadcrumbs__nav-col-title"},"time")],-1)),Ye={key:0,class:"sentry-page-breadcrumbs__cols-wr"},Ze={class:"sentry-page-breadcrumbs__col"},xe={class:"sentry-page-breadcrumbs__col-message"},es={class:"sentry-page-breadcrumbs__col-details"},ss={class:"sentry-page-breadcrumbs__col-detail"},ts=z(()=>t("div",{class:"sentry-page-breadcrumbs__col-detail-title"}," type ",-1)),as={class:"sentry-page-breadcrumbs__col-detail-value"},ns={class:"sentry-page-breadcrumbs__col-detail"},rs=z(()=>t("div",{class:"sentry-page-breadcrumbs__col-detail-title"}," category ",-1)),os={class:"sentry-page-breadcrumbs__col-detail-value"},ls={class:"sentry-page-breadcrumbs__col"},ds={class:"sentry-page-breadcrumbs__col"},is=f({__name:"sentry-page-breadcrumbs",props:{breadcrumbs:{default:()=>[]}},setup(d){const c=p=>T.unix(p).fromNow();return(p,v)=>(s(),u("section",Ue,[t("h3",We,[i(" breadcrumbs "),p.breadcrumbs.length>0?(s(),u("span",Xe,a(p.breadcrumbs.length),1)):n("",!0)]),t("div",Je,[Qe,p.breadcrumbs?(s(),u("div",Ye,[(s(!0),u(P,null,w(p.breadcrumbs,e=>{var g;return s(),u("div",{key:e,class:"sentry-page-breadcrumbs__cols"},[t("div",Ze,[t("p",xe,a(e.message),1),e.data?(s(),o(r(D),{key:0,class:"sentry-page-breadcrumbs__col-data",language:"json",code:e.data},null,8,["code"])):n("",!0),t("div",es,[t("div",ss,[ts,t("div",as,a(e.type),1)]),t("div",ns,[rs,t("div",os,a(e.category),1)])])]),t("div",ls,[t("span",{class:V(["sentry-page-breadcrumbs__col-level-badge",(g=e.level)==null?void 0:g.toLowerCase()])},a(e.level),3)]),t("div",ds,a(c(e.timestamp)),1)])}),128))])):n("",!0)])]))}});const _s=k(is,[["__scopeId","data-v-f3ff3d48"]]),cs=d=>($("data-v-5e9e0690"),d=d(),S(),d),ps={class:"sentry-page-app"},us=cs(()=>t("h3",{class:"sentry-page-app__title"},"app",-1)),vs=f({__name:"sentry-page-app",props:{app:{}},setup(d){return(c,p)=>(s(),u("section",ps,[us,h(r(A),null,{default:l(()=>[c.app.type?(s(),o(r(_),{key:0,title:"App type"},{default:l(()=>[i(a(c.app.type),1)]),_:1})):n("",!0),c.app.app_build?(s(),o(r(_),{key:1,title:"App Build"},{default:l(()=>[i(a(c.app.app_build),1)]),_:1})):n("",!0),c.app.app_identifier?(s(),o(r(_),{key:2,title:"Build ID"},{default:l(()=>[i(a(c.app.app_identifier),1)]),_:1})):n("",!0),c.app.app_id?(s(),o(r(_),{key:3,title:"ID"},{default:l(()=>[i(a(c.app.app_id),1)]),_:1})):n("",!0),c.app.app_name?(s(),o(r(_),{key:4,title:"Build Name"},{default:l(()=>[i(a(c.app.app_name),1)]),_:1})):n("",!0),c.app.app_version?(s(),o(r(_),{key:5,title:"Version"},{default:l(()=>[i(a(c.app.app_version),1)]),_:1})):n("",!0),c.app.permissions?(s(),o(r(_),{key:6,title:"Permissions"},{default:l(()=>[h(r(D),{class:"mt-3",language:"json",code:c.app.permissions},null,8,["code"])]),_:1})):n("",!0)]),_:1})]))}});const ys=k(vs,[["__scopeId","data-v-5e9e0690"]]),gs={class:"sentry-page"},ms={class:"sentry-page__main"},hs={key:0,class:"sentry-page__main-header"},bs={class:"sentry-page__main-exception"},fs=["innerHTML"],ks={class:"sentry-page__main-date"},$s={key:1,class:"sentry-page__section"},Ss={class:"sentry-page__section-title"},Is={key:0,class:"sentry-page__section-title__counter"},qs={class:"sentry-page__section-exceptions"},Ps=f({__name:"sentry-page",props:{event:{}},setup(d){const c=d,p=q(()=>T(c.event.payload.timestamp).toLocaleString()),v=q(()=>{var e,g,y;return(y=(g=(e=c.event.payload)==null?void 0:e.exception)==null?void 0:g.values)==null?void 0:y[0]});return(e,g)=>{var y,b,I,L;return s(),u("div",gs,[t("main",ms,[v.value?(s(),u("header",hs,[t("h1",bs,a(v.value.type),1),t("pre",{class:"sentry-page__main-exception-message",innerHTML:v.value.value},null,8,fs),t("p",ks,a(p.value),1)])):n("",!0),h(r(Ee),{payload:e.event.payload,class:"sentry-page__section"},null,8,["payload"]),v.value?(s(),u("section",$s,[t("h3",Ss,[i(" exceptions "),((L=(I=(b=(y=e.event)==null?void 0:y.payload)==null?void 0:b.exception)==null?void 0:I.values)==null?void 0:L.length)>0?(s(),u("span",Is,a(e.event.payload.exception.values.length),1)):n("",!0)]),t("div",qs,[e.event.payload.exception&&e.event.payload.exception.values&&e.event.payload.exception.values.length>0?(s(!0),u(P,{key:0},w(e.event.payload.exception.values,B=>(s(),o(r(K),{key:`exception-${B.value}-${B.type}`,exception:B,"max-frames":null,class:"sentry-page__section-exceptions__exception"},null,8,["exception"]))),128)):n("",!0)])])):n("",!0),e.event.payload.breadcrumbs&&e.event.payload.breadcrumbs.values&&e.event.payload.breadcrumbs.values.length>0?(s(),o(r(_s),{key:2,breadcrumbs:e.event.payload.breadcrumbs.values,class:"sentry-page__section"},null,8,["breadcrumbs"])):n("",!0),e.event.payload.request?(s(),o(r(He),{key:3,request:e.event.payload.request,class:"sentry-page__section"},null,8,["request"])):n("",!0),e.event.payload.contexts&&e.event.payload.contexts.app?(s(),o(r(ys),{key:4,app:e.event.payload.contexts.app,class:"sentry-page__section"},null,8,["app"])):n("",!0),e.event.payload.contexts&&e.event.payload.contexts.device?(s(),o(r(Ke),{key:5,device:e.event.payload.contexts.device,class:"sentry-page__section"},null,8,["device"])):n("",!0)])])}}});const ws=k(Ps,[["__scopeId","data-v-e751ab50"]]),{normalizeSentryEvent:Bs}=U(),Ts=f({components:{SentryPage:ws,PageHeader:G},async setup(){const d=F(),c=H(),p=M(),v=d.params.id,{events:e}=O(),{data:g,pending:y}=await j(e.getUrl(v),{headers:{"X-Auth-Token":p.$authToken.token},onResponse({response:b}){return b.data},onResponseError(){c.push("/404")},onRequestError(){c.push("/404")}},"$hBGK0wTRGe");return{serverEvent:g,pending:y,eventId:v,clearEvent:()=>e.removeById(v)}},head(){return{title:`Sentry > ${this.eventId} | Buggregator`}},computed:{event(){return this.serverEvent?Bs(this.serverEvent):null}},methods:{onDelete(){this.clearEvent(),this.$router.push("/")}}});const E=d=>($("data-v-7bdb214a"),d=d(),S(),d),As={class:"sentry-event"},Ds={key:0,class:"sentry-event__loading"},zs=E(()=>t("div",null,null,-1)),Es=E(()=>t("div",null,null,-1)),Ls=E(()=>t("div",null,null,-1)),Rs=[zs,Es,Ls];function Cs(d,c,p,v,e,g){const y=N,b=R("PageHeader"),I=R("SentryPage");return s(),u("main",As,[h(b,{class:"sentry-event__head","button-title":"Delete event",onDelete:d.onDelete},{default:l(()=>[h(y,{to:"/"},{default:l(()=>[i("Home")]),_:1}),i(" /  "),h(y,{to:"/sentry"},{default:l(()=>[i("Sentry")]),_:1}),i(" /  "),h(y,{disabled:!0},{default:l(()=>[i(a(d.eventId),1)]),_:1})]),_:1},8,["onDelete"]),d.pending&&!d.event?(s(),u("div",Ds,Rs)):n("",!0),d.event?(s(),o(I,{key:1,event:d.event,class:"sentry-event__body"},null,8,["event"])):n("",!0)])}const Xs=k(Ts,[["render",Cs],["__scopeId","data-v-7bdb214a"]]);export{Xs as default};
