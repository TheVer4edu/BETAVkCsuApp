(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{274:function(e,t,n){e.exports=n(516)},317:function(e,t){},319:function(e,t){},349:function(e,t){},350:function(e,t){},394:function(e,t){},396:function(e,t){},419:function(e,t){},516:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(57),c=n.n(l),u=n(38),o=n.n(u),i=n(221),s=n(39),m=n.n(s),d=n(54),f=n(22),p=n(220),E=n.n(p),h=(n(280),n(219)),g=n.n(h),b=n(218),v=n.n(b),k=n(26),y=n.n(k),j=n(69),O=n.n(j),C=n(55),S=n.n(C),w=n(96),x=n.n(w),D=n(56),T=n.n(D),V=n(40),_=n.n(V),M=n(34),A=n.n(M),I=n(68),P=n.n(I),U=n(97),K=n.n(U),z=function(e){var t=e.id,n=(e.go,e.setModal),a=(e.values,e.fetchedUser);return r.a.createElement(S.a,{id:t},r.a.createElement(x.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0418\u0418\u0422 \u0427\u0435\u043b\u0413\u0423"),r.a.createElement(_.a,null,a&&r.a.createElement(_.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},a.photo_200?r.a.createElement(P.a,{size:100,src:a.photo_200}):null,r.a.createElement(A.a,{style:{marginTop:10}},r.a.createElement(K.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",a.first_name)))),r.a.createElement(A.a,null,r.a.createElement(T.a,{size:"xl",onClick:n,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))},F=n(7),J=function(e){var t=e.shedule,n=e.go,l=e.values,c=e.getVariable,u=e.setVariable,o=e.modal,i=e.updateModal,s=e.modalBack,m=e.closeModal,d=Object(a.useState)(l?c("direction"):""),p=Object(f.a)(d,2),E=p[0],h=p[1],g=Object(a.useState)(l?c("course"):""),b=Object(f.a)(g,2),v=b[0],k=b[1],y=Object(a.useState)(l?c("group"):""),j=Object(f.a)(y,2),O=j[0],C=j[1],S=[],w=[],x=[];function D(){t.forEach((function(e){var t=e.group.destination;S.includes(t)||S.push(t)})),t.forEach((function(e){var t=e.group;w.includes(t.course)||t.destination!==E||w.push(t.course)})),t.forEach((function(e){var t=e.group,n=t.destination,a=t.course;x.includes(t.name)||n!==E||a!==v||x.push(t.name)}))}return D(),r.a.createElement(F.f,{activeModal:o},r.a.createElement(F.d,{id:"groupSelectorPage",header:r.a.createElement(F.e,{left:r.a.createElement(F.h,{onClick:function(){return s()}})},"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0451 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c :)"),onClose:function(){return m()}},r.a.createElement(F.b,null,r.a.createElement(F.l,{top:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",onClick:function(){i("direction"),D()}},E),r.a.createElement(F.l,{top:"\u041ay\u0440\u0441",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0443\u0440\u0441",disabled:""===E,onClick:function(){""!==E&&i("course"),D()}},v),r.a.createElement(F.l,{top:"\u0413\u0440\u0443\u043f\u043f\u0430",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",disabled:""===v,onClick:function(){""!==v&&i("group"),D()}},O),r.a.createElement(T.a,{disabled:""===O,size:"xl",onClick:function(){return u("direction",E),u("course",v),u("group",O),m(),void n("dayShedule")}},"\u041f\u043e\u0433\u043d\u0430\u043b\u0438"))),r.a.createElement(F.d,{id:"direction",header:r.a.createElement(F.e,{left:r.a.createElement(F.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),onClose:function(){return s()}},r.a.createElement(F.c,null,S.map((function(e,t){return r.a.createElement(F.k,{key:t,name:"direction",value:t,onClick:function(){h(e),s()}},e)})))),r.a.createElement(F.d,{id:"course",header:r.a.createElement(F.e,{left:r.a.createElement(F.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441"),onClose:function(){return s()}},r.a.createElement(F.c,null,w.map((function(e,t){return r.a.createElement(F.k,{key:t,name:"direction",value:t,onClick:function(){k(e),s()}},e)})))),r.a.createElement(F.d,{id:"group",header:r.a.createElement(F.e,{left:r.a.createElement(F.h,{onClick:function(){return s()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"),onClose:function(){return s()}},r.a.createElement(F.c,null,x.map((function(e,t){return r.a.createElement(F.k,{key:t,name:"direction",value:t,onClick:function(){C(e),s()}},e)})))))},N=n(61),W=n.n(N),H=n(98),B=n.n(H),G=n(99),Y=n.n(G),R=n(135),L=n.n(R),X=n(100),q=n.n(X),Q=n(101),Z=n.n(Q),$=function(e){var t=e?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===t},ee=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(y.a,{before:r.a.createElement(y.a,{description:n,style:{width:"85px"}},t),description:l},a)},te=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(y.a,{description:n},t),r.a.createElement(W.a,null,a)))},ne=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},ae=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},re=function(e){var t=e.shedule,n=e.rings,l=e.config,c=e.id,u=e.go,o=(e.values,e.setModal),i=e.getVariable,s=Object(a.useState)(!1),m=Object(f.a)(s,2),d=m[0],p=m[1],E=Object(a.useState)($(l.week_shift)),h=Object(f.a)(E,2),g=h[0],b=h[1];function v(){p(!d)}var k=function(){var e={error:"404"};return t.forEach((function(t){t.group.name===i("group")&&t.available&&(e=g?t.even:t.odd)})),e}();return r.a.createElement(S.a,{id:c},r.a.createElement(F.g,{left:r.a.createElement(A.a,null,r.a.createElement(B.a,{onClick:o,"data-to":"groupSelectorPage"}))},r.a.createElement(F.i,{onClick:function(){return v()},status:g?r.a.createElement("div",null,"\u0432\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"):r.a.createElement("div",null,"\u043f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),aside:r.a.createElement(L.a,{style:{transform:"rotate(".concat(d?"180deg":"0",")")}})},"\u0413\u0440\u0443\u043f\u043f\u0430 ",i("group"))),r.a.createElement(F.j,{opened:d},r.a.createElement(W.a,null,r.a.createElement(y.a,{before:$()?r.a.createElement(A.a,null):r.a.createElement(Y.a,null),onClick:function(){b(!1),v()}},"\u041f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),r.a.createElement(y.a,{before:$()?r.a.createElement(Y.a,null):r.a.createElement(A.a,null),onClick:function(){b(!0),v()}},"\u0412\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"))),r.a.createElement(_.a,null,r.a.createElement(W.a,null,"404"!==k.error?["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"].map((function(e){return r.a.createElement(te,{info:0!==k[e].length?r.a.createElement(ne,{begin:n[k[e][0].number].start,end:n[k[e][k[e].length-1].number].end,count:k[e].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),dayname:e,content:k[e]!==[]&&Array.isArray(k[e])&&k[e].map((function(e){return r.a.createElement(ee,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(ae,{hall:e.hall,lecturer:e.lecturer})})}))})})):r.a.createElement(y.a,null,r.a.createElement(A.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 ")))),r.a.createElement(F.a,{tabbar:r.a.createElement(F.m,null,r.a.createElement(F.n,{text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",onClick:function(){return u("dayShedule")}},r.a.createElement(q.a,null)),r.a.createElement(F.n,{selected:!0,text:"\u041d\u0435\u0434\u0435\u043b\u044f"},r.a.createElement(Z.a,null)))}),r.a.createElement("br",null),r.a.createElement("br",null))},le={borderLeft:"2px solid #4a76a8",backgroundColor:"#F0F0F033"},ce=function(e){var t=e?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===t},ue=function(e,t){var n=(new Date).getTime(),a=new Date;a.setHours(e.split(":")[0],e.split(":")[1]);var r=a.getTime();a.setHours(t.split(":")[0],t.split(":")[1]);var l=a.getTime();return r<=n&&n<=l?le:null},oe=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(y.a,{style:ue(t,n),before:r.a.createElement(y.a,{style:{width:"85px"},description:n},t),description:l},a)},ie=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(y.a,{description:n},t),r.a.createElement(W.a,null,a)))},se=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},me=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},de=function(e){var t=e.shedule,n=e.rings,l=e.config,c=e.id,u=e.go,o=(e.values,e.setModal),i=e.getVariable,s=e.fetchedUser,m=Object(a.useState)(!1),d=Object(f.a)(m,2),p=(d[0],d[1],Object(a.useState)(ce(l.week_shift))),E=Object(f.a)(p,2),h=E[0],g=(E[1],["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"]),b=function(){var e=new Date((new Date).getTime());return g[(e.getDay()+6)%7]};var v=function(){var e={error:"404"};return t.forEach((function(t){t.group.name===i("group")&&t.available&&(e=h?t.even:t.odd)})),e}();return r.a.createElement(S.a,{id:c},r.a.createElement(F.g,{left:r.a.createElement(A.a,null,r.a.createElement(B.a,{onClick:o,"data-to":"groupSelectorPage"}))},r.a.createElement(F.i,{status:i("group")},b())),r.a.createElement(_.a,null,r.a.createElement(W.a,null,"404"!==v.error?r.a.createElement(ie,{dayname:0!==v[b()].length?r.a.createElement(se,{begin:n[v[b()][0].number].start,end:n[v[b()][v[b()].length-1].number].end,count:v[b()].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),content:v[b()]!==[]&&Array.isArray(v[b()])&&v[b()].map((function(e){return r.a.createElement(oe,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(me,{hall:e.hall,lecturer:e.lecturer})})}))}):""!==i("group")?r.a.createElement(y.a,null,r.a.createElement(A.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")):r.a.createElement(_.a,null,s&&r.a.createElement(_.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},s.photo_200?r.a.createElement(P.a,{size:100,src:s.photo_200}):null,r.a.createElement(A.a,{style:{marginTop:10}},r.a.createElement(K.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",s.first_name)))),r.a.createElement(A.a,null,r.a.createElement(T.a,{size:"xl",onClick:o,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))),r.a.createElement(F.a,{tabbar:r.a.createElement(F.m,null,r.a.createElement(F.n,{selected:!0,text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"},r.a.createElement(q.a,null)),r.a.createElement(F.n,{text:"\u041d\u0435\u0434\u0435\u043b\u044f",onClick:function(){return u("sheduleSheet")}},r.a.createElement(Z.a,null)))}))},fe=function(e){var t=e.id,n=e.go,a=e.fetchedUser;return r.a.createElement(S.a,{id:t},r.a.createElement(x.a,null,"Example"),a&&r.a.createElement(_.a,{title:"User Data Fetched with VK Connect"},r.a.createElement(y.a,{before:a.photo_200?r.a.createElement(P.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),r.a.createElement(_.a,{title:"Navigation Example"},r.a.createElement(A.a,null,r.a.createElement(T.a,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"Show me the Persik, please"))))},pe=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/schedule.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/schedule.json");case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/rings.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/rings.json");case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(103),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/config.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/config.json");case 5:return r=e.sent,console.log(JSON.parse(r)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(a.useState)("dayShedule"),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),u=Object(f.a)(c,2),s=u[0],p=u[1],h=Object(a.useState)(r.a.createElement(v.a,{alignY:"center",alignX:"center"},r.a.createElement(O.a,null,r.a.createElement(y.a,{style:{backgroundColor:"var(--background_content)"},before:r.a.createElement(g.a,{style:{marginRight:20}})},"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435...")))),b=Object(f.a)(h,2),k=b[0],j=b[1],C=Object(a.useState)(null),S=Object(f.a)(C,2),w=S[0],x=S[1],D=Object(a.useState)([]),T=Object(f.a)(D,2),V=T[0],_=T[1],M=Object(a.useState)(null),A=Object(f.a)(M,2),I=A[0],P=A[1],U=Object(a.useState)([]),K=Object(f.a)(U,2),F=K[0],N=K[1],W=Object(a.useState)([]),H=Object(f.a)(W,2),B=H[0],G=H[1],Y=Object(a.useState)([]),R=Object(f.a)(Y,2),L=R[0],X=R[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee().then((function(e){G(JSON.parse(e))}),(function(e){}));case 2:return e.next=4,pe().then((function(e){N(JSON.parse(e))}),(function(e){}));case 4:return e.next=6,he().then((function(e){X(JSON.parse(e))}),(function(e){}));case 6:return e.next=8,o.a.send("VKWebAppGetUserInfo");case 8:return t=e.sent,e.next=11,o.a.send("VKWebAppStorageGet",{keys:["direction","course","group"]});case 11:n=e.sent,p(t),P(n.keys),j(null);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}else"VKWebAppStorageGetResult"===n&&console.log("[Connect] Updating values OK")})),function(){e.apply(this,arguments)}()}),[]);var q=function(e){"string"!=typeof e&&l(e.currentTarget.dataset.to),l(e)},Q=function(e){e=e||null;var t=V?Object(i.a)(V):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),x(e),_(t)},Z=function(e){Q(e.currentTarget.dataset.to)};function $(e){var t="";return!!I&&(I.forEach((function(n){n.key===e&&(t=n.value)})),t)}return r.a.createElement(E.a,{activePanel:n,popout:k,modal:r.a.createElement(J,{shedule:F,values:I,getVariable:$,setVariable:function(e,t){o.a.send("VKWebAppStorageSet",{key:e,value:t});var n=I;n.forEach((function(n){n.key===e&&(n.value=t)})),P(n)},go:q,modal:w,updateModal:Q,modalBack:function(){return Q(V[V.length-2])},closeModal:function(){return Q(null)}})},r.a.createElement(z,{id:"splash",go:q,setModal:Z,values:I,fetchedUser:s}),r.a.createElement(re,{id:"sheduleSheet",shedule:F,rings:B,config:L,go:q,values:I,setModal:Z,getVariable:$}),r.a.createElement(de,{id:"dayShedule",shedule:F,rings:B,go:q,config:L,values:I,setModal:Z,getVariable:$,fetchedUser:s}),r.a.createElement(fe,{id:"home",fetchedUser:s,go:q}))};function be(){c.a.render(r.a.createElement(ge,null),document.getElementById("root"))}o.a.send("VKWebAppInit"),be(),setInterval(be,15e3)}},[[274,1,2]]]);
//# sourceMappingURL=main.2a051a7d.chunk.js.map