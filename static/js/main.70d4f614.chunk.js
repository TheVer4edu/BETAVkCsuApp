(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{273:function(e,t,n){e.exports=n(517)},316:function(e,t){},318:function(e,t){},348:function(e,t){},349:function(e,t){},393:function(e,t){},395:function(e,t){},418:function(e,t){},517:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(57),c=n.n(l),u=n(38),o=n.n(u),i=n(220),s=n(39),m=n.n(s),d=n(54),f=n(22),p=n(219),E=n.n(p),h=(n(279),n(218)),g=n.n(h),b=n(55),v=n.n(b),k=n(95),y=n.n(k),j=n(56),O=n.n(j),w=n(40),S=n.n(w),C=n(35),x=n.n(C),D=n(68),T=n.n(D),V=n(96),_=n.n(V),M=function(e){var t=e.id,n=(e.go,e.setModal),a=(e.values,e.fetchedUser);return r.a.createElement(v.a,{id:t},r.a.createElement(y.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0418\u0418\u0422 \u0427\u0435\u043b\u0413\u0423"),r.a.createElement(S.a,null,a&&r.a.createElement(S.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},a.photo_200?r.a.createElement(T.a,{size:100,src:a.photo_200}):null,r.a.createElement(x.a,{style:{marginTop:10}},r.a.createElement(_.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",a.first_name)))),r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",onClick:n,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))},A=n(7),I=function(e){var t=e.shedule,n=e.go,l=e.values,c=e.getVariable,u=e.setVariable,o=e.modal,i=e.updateModal,s=e.modalBack,m=e.closeModal,d=Object(a.useState)(l?c("direction"):""),p=Object(f.a)(d,2),E=p[0],h=p[1],g=Object(a.useState)(l?c("course"):""),b=Object(f.a)(g,2),v=b[0],k=b[1],y=Object(a.useState)(l?c("group"):""),j=Object(f.a)(y,2),w=j[0],S=j[1],C=[],x=[],D=[];function T(){t.forEach((function(e){var t=e.group.destination;C.includes(t)||C.push(t)})),t.forEach((function(e){var t=e.group;x.includes(t.course)||t.destination!==E||x.push(t.course)})),t.forEach((function(e){var t=e.group,n=t.destination,a=t.course;D.includes(t.name)||n!==E||a!==v||D.push(t.name)}))}return T(),r.a.createElement(A.f,{activeModal:o},r.a.createElement(A.d,{id:"groupSelectorPage",header:r.a.createElement(A.e,{left:r.a.createElement(A.h,{onClick:function(){return s()}})},"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0451 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c :)"),onClose:function(){return m()}},r.a.createElement(A.b,null,r.a.createElement(A.l,{top:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",onClick:function(){i("direction"),T()}},E),r.a.createElement(A.l,{top:"\u041ay\u0440\u0441",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0443\u0440\u0441",disabled:""===E,onClick:function(){""!==E&&i("course"),T()}},v),r.a.createElement(A.l,{top:"\u0413\u0440\u0443\u043f\u043f\u0430",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",disabled:""===v,onClick:function(){""!==v&&i("group"),T()}},w),r.a.createElement(O.a,{disabled:""===w,size:"xl",onClick:function(){return u("direction",E),u("course",v),u("group",w),m(),void n("dayShedule")}},"\u041f\u043e\u0433\u043d\u0430\u043b\u0438"))),r.a.createElement(A.d,{id:"direction",header:r.a.createElement(A.e,{left:r.a.createElement(A.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),onClose:function(){return s()}},r.a.createElement(A.c,null,C.map((function(e,t){return r.a.createElement(A.k,{key:t,name:"direction",value:t,onClick:function(){h(e),s()}},e)})))),r.a.createElement(A.d,{id:"course",header:r.a.createElement(A.e,{left:r.a.createElement(A.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441"),onClose:function(){return s()}},r.a.createElement(A.c,null,x.map((function(e,t){return r.a.createElement(A.k,{key:t,name:"direction",value:t,onClick:function(){k(e),s()}},e)})))),r.a.createElement(A.d,{id:"group",header:r.a.createElement(A.e,{left:r.a.createElement(A.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"),onClose:function(){return s()}},r.a.createElement(A.c,null,D.map((function(e,t){return r.a.createElement(A.k,{key:t,name:"direction",value:t,onClick:function(){S(e),s()}},e)})))))},P={week_shift:!0},U=n(61),K=n.n(U),J=n(33),N=n.n(J),z=n(101),F=n.n(z),W=n(97),H=n.n(W),B=n(98),G=n.n(B),L=n(135),R=n.n(L),Y=n(99),q=n.n(Y),Q=n(100),X=n.n(Q),Z=P.week_shift,$=function(){var e=Z?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===e},ee=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(N.a,{before:r.a.createElement(N.a,{description:n,style:{width:"85px"}},t),description:l},a)},te=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(N.a,null,r.a.createElement(F.a,null,r.a.createElement(N.a,{description:n},t),r.a.createElement(K.a,null,a)))},ne=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},ae=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},re=function(e){var t=e.shedule,n=e.rings,l=(e.config,e.id),c=e.go,u=(e.values,e.setModal),o=e.getVariable,i=Object(a.useState)(!1),s=Object(f.a)(i,2),m=s[0],d=s[1],p=Object(a.useState)($()),E=Object(f.a)(p,2),h=E[0],g=E[1];function b(){d(!m)}var k=function(){var e={error:"404"};return t.forEach((function(t){t.group.name===o("group")&&t.available&&(e=h?t.even:t.odd)})),e}();return r.a.createElement(v.a,{id:l},r.a.createElement(A.g,{left:r.a.createElement(x.a,null,r.a.createElement(H.a,{onClick:u,"data-to":"groupSelectorPage"}))},r.a.createElement(A.i,{onClick:function(){return b()},status:h?r.a.createElement("div",null,"\u0432\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"):r.a.createElement("div",null,"\u043f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),aside:r.a.createElement(R.a,{style:{transform:"rotate(".concat(m?"180deg":"0",")")}})},"\u0413\u0440\u0443\u043f\u043f\u0430 ",o("group"))),r.a.createElement(A.j,{opened:m},r.a.createElement(K.a,null,r.a.createElement(N.a,{before:$()?r.a.createElement(x.a,null):r.a.createElement(G.a,null),onClick:function(){g(!1),b()}},"\u041f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),r.a.createElement(N.a,{before:$()?r.a.createElement(G.a,null):r.a.createElement(x.a,null),onClick:function(){g(!0),b()}},"\u0412\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"))),r.a.createElement(S.a,null,r.a.createElement(K.a,null,"404"!==k.error?["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"].map((function(e){return r.a.createElement(te,{info:0!==k[e].length?r.a.createElement(ne,{begin:n[k[e][0].number].start,end:n[k[e][k[e].length-1].number].end,count:k[e].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),dayname:e,content:k[e]!==[]&&Array.isArray(k[e])&&k[e].map((function(e){return r.a.createElement(ee,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(ae,{hall:e.hall,lecturer:e.lecturer})})}))})})):r.a.createElement(N.a,null,r.a.createElement(x.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 ")))),r.a.createElement(A.a,{tabbar:r.a.createElement(A.m,null,r.a.createElement(A.n,{text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",onClick:function(){return c("dayShedule")}},r.a.createElement(q.a,null)),r.a.createElement(A.n,{selected:!0,text:"\u041d\u0435\u0434\u0435\u043b\u044f"},r.a.createElement(X.a,null)))}),r.a.createElement("br",null),r.a.createElement("br",null))},le=P.week_shift,ce={borderLeft:"2px solid #4a76a8",backgroundColor:"#F0F0F033"},ue=function(e){var t=e?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===t},oe=function(e,t){var n=(new Date).getTime(),a=new Date;a.setHours(e.split(":")[0],e.split(":")[1]);var r=a.getTime();a.setHours(t.split(":")[0],t.split(":")[1]);var l=a.getTime();return r<=n&&n<=l?ce:null},ie=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(N.a,{style:oe(t,n),before:r.a.createElement(N.a,{style:{width:"85px"},description:n},t),description:l},a)},se=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(N.a,null,r.a.createElement(F.a,null,r.a.createElement(N.a,{description:n},t),r.a.createElement(K.a,null,a)))},me=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},de=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},fe=function(e){var t=e.shedule,n=e.rings,l=e.config,c=e.id,u=e.go,o=(e.values,e.setModal),i=e.getVariable,s=e.fetchedUser,m=Object(a.useState)(!1),d=Object(f.a)(m,2),p=(d[0],d[1],Object(a.useState)(ue(l.week_shift))),E=Object(f.a)(p,2),h=E[0],g=(E[1],["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"]),b=function(){var e=new Date((new Date).getTime());return g[(e.getDay()+6)%7]};var k=function(){console.log("LOCAL: "),console.log(le),console.log("SERVER: "),console.log(l.week_shift);var e={error:"404"};return t.forEach((function(t){t.group.name===i("group")&&t.available&&(e=h?t.even:t.odd)})),e}();return r.a.createElement(v.a,{id:c},r.a.createElement(A.g,{left:r.a.createElement(x.a,null,r.a.createElement(H.a,{onClick:o,"data-to":"groupSelectorPage"}))},r.a.createElement(A.i,{status:i("group")},b())),r.a.createElement(S.a,null,r.a.createElement(K.a,null,"404"!==k.error?r.a.createElement(se,{dayname:0!==k[b()].length?r.a.createElement(me,{begin:n[k[b()][0].number].start,end:n[k[b()][k[b()].length-1].number].end,count:k[b()].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),content:k[b()]!==[]&&Array.isArray(k[b()])&&k[b()].map((function(e){return r.a.createElement(ie,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(de,{hall:e.hall,lecturer:e.lecturer})})}))}):""!==i("group")?r.a.createElement(N.a,null,r.a.createElement(x.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")):r.a.createElement(S.a,null,s&&r.a.createElement(S.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},s.photo_200?r.a.createElement(T.a,{size:100,src:s.photo_200}):null,r.a.createElement(x.a,{style:{marginTop:10}},r.a.createElement(_.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",s.first_name)))),r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",onClick:o,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))),r.a.createElement(A.a,{tabbar:r.a.createElement(A.m,null,r.a.createElement(A.n,{selected:!0,text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"},r.a.createElement(q.a,null)),r.a.createElement(A.n,{text:"\u041d\u0435\u0434\u0435\u043b\u044f",onClick:function(){return u("sheduleSheet")}},r.a.createElement(X.a,null)))}))},pe=function(e){var t=e.id,n=e.go,a=e.fetchedUser;return r.a.createElement(v.a,{id:t},r.a.createElement(y.a,null,"Example"),a&&r.a.createElement(S.a,{title:"User Data Fetched with VK Connect"},r.a.createElement(N.a,{before:a.photo_200?r.a.createElement(T.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),r.a.createElement(S.a,{title:"Navigation Example"},r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"Show me the Persik, please"))))},Ee=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/schedule.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/schedule.json");case 5:return r=e.sent,console.log(JSON.parse(r)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/rings.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/rings.json");case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/config.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/config.json");case 5:return r=e.sent,console.log(JSON.parse(r)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(a.useState)("dayShedule"),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),u=Object(f.a)(c,2),s=u[0],p=u[1],h=Object(a.useState)(r.a.createElement(g.a,null)),b=Object(f.a)(h,2),v=b[0],k=b[1],y=Object(a.useState)(null),j=Object(f.a)(y,2),O=j[0],w=j[1],S=Object(a.useState)([]),C=Object(f.a)(S,2),x=C[0],D=C[1],T=Object(a.useState)(null),V=Object(f.a)(T,2),_=V[0],A=V[1],P=Object(a.useState)([]),U=Object(f.a)(P,2),K=U[0],J=U[1],N=Object(a.useState)([]),z=Object(f.a)(N,2),F=z[0],W=z[1],H=Object(a.useState)([]),B=Object(f.a)(H,2),G=B[0],L=B[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he().then((function(e){W(JSON.parse(e))}),(function(e){}));case 2:return e.next=4,Ee().then((function(e){J(JSON.parse(e))}),(function(e){}));case 4:return e.next=6,ge().then((function(e){L(JSON.parse(e))}),(function(e){}));case 6:return e.next=8,o.a.send("VKWebAppGetUserInfo");case 8:return t=e.sent,e.next=11,o.a.send("VKWebAppStorageGet",{keys:["direction","course","group"]});case 11:n=e.sent,p(t),A(n.keys),k(null);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}else"VKWebAppStorageGetResult"===n&&console.log("[Connect] Updating values OK")})),function(){e.apply(this,arguments)}()}),[]);var R=function(e){"string"!=typeof e&&l(e.currentTarget.dataset.to),l(e)},Y=function(e){e=e||null;var t=x?Object(i.a)(x):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),w(e),D(t)},q=function(e){Y(e.currentTarget.dataset.to)};function Q(e){var t="";return!!_&&(_.forEach((function(n){n.key===e&&(t=n.value)})),t)}return r.a.createElement(E.a,{activePanel:n,popout:v,modal:r.a.createElement(I,{shedule:K,values:_,getVariable:Q,setVariable:function(e,t){o.a.send("VKWebAppStorageSet",{key:e,value:t});var n=_;n.forEach((function(n){n.key===e&&(n.value=t)})),A(n)},go:R,modal:O,updateModal:Y,modalBack:function(){return Y(x[x.length-2])},closeModal:function(){return Y(null)}})},r.a.createElement(M,{id:"splash",go:R,setModal:q,values:_,fetchedUser:s}),r.a.createElement(re,{id:"sheduleSheet",shedule:K,rings:F,config:G,go:R,values:_,setModal:q,getVariable:Q}),r.a.createElement(fe,{id:"dayShedule",shedule:K,rings:F,go:R,config:G,values:_,setModal:q,getVariable:Q,fetchedUser:s}),r.a.createElement(pe,{id:"home",fetchedUser:s,go:R}))};function ve(){c.a.render(r.a.createElement(be,null),document.getElementById("root"))}o.a.send("VKWebAppInit"),ve(),setInterval(ve,15e3)}},[[273,1,2]]]);
//# sourceMappingURL=main.70d4f614.chunk.js.map