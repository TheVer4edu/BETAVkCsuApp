(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{275:function(e,t,n){e.exports=n(518)},322:function(e,t){},324:function(e,t){},354:function(e,t){},355:function(e,t){},399:function(e,t){},401:function(e,t){},424:function(e,t){},518:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(56),c=n.n(l),u=n(38),o=n.n(u),i=n(222),s=n(50),m=n.n(s),d=n(67),f=n(23),E=n(221),p=n.n(E),g=(n(281),n(220)),h=n.n(g),b=n(45),v=n.n(b),k=n(68),y=n.n(k),j=n(55),O=n.n(j),C=n(39),S=n.n(C),w=n(35),x=n.n(w),D=n(69),T=n.n(D),V=n(96),_=n.n(V),M=function(e){var t=e.id,n=(e.go,e.setModal),a=(e.values,e.fetchedUser);return r.a.createElement(v.a,{id:t},r.a.createElement(y.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0418\u0418\u0422 \u0427\u0435\u043b\u0413\u0423"),r.a.createElement(S.a,null,a&&r.a.createElement(S.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},a.photo_200?r.a.createElement(T.a,{size:100,src:a.photo_200}):null,r.a.createElement(x.a,{style:{marginTop:10}},r.a.createElement(_.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",a.first_name)))),r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",onClick:n,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))},A=n(7),U=n(137),I=n.n(U),P=n(219),J=n.n(P),K=n(97),L=n.n(K),z=n(98),F=n.n(z),N=Object(A.p)(),W=function(e){var t=e.id,n=e.go;return r.a.createElement(v.a,{id:t},r.a.createElement(y.a,{left:r.a.createElement(J.a,{onClick:n,"data-to":"splash"},N===A.d?r.a.createElement(L.a,null):r.a.createElement(F.a,null))},"Loading..."),r.a.createElement(I.a,null))},H=function(e){var t=e.directionList,n=e.coursesList,l=e.groupsList,c=e.go,u=e.values,o=e.getVariable,i=e.setVariable,s=e.modal,m=e.updateModal,d=e.modalBack,E=e.closeModal,p=Object(a.useState)(u?o("direction"):""),g=Object(f.a)(p,2),h=g[0],b=g[1],v=Object(a.useState)(u?o("course"):""),k=Object(f.a)(v,2),y=k[0],j=k[1],C=Object(a.useState)(u?o("group"):""),S=Object(f.a)(C,2),w=S[0],x=S[1];return r.a.createElement(A.g,{activeModal:s},r.a.createElement(A.e,{id:"groupSelectorPage",header:r.a.createElement(A.f,{left:r.a.createElement(A.i,{onClick:function(){return d()}})},"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0451 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c :)"),onClose:function(){return E()}},r.a.createElement(A.b,null,r.a.createElement(A.m,{top:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",onClick:function(){return m("direction")}},h),r.a.createElement(A.m,{top:"\u041ay\u0440\u0441",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0443\u0440\u0441",onClick:function(){return m("course")}},y),r.a.createElement(A.m,{top:"\u0413\u0440\u0443\u043f\u043f\u0430",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",onClick:function(){return m("group")}},w),r.a.createElement(O.a,{disabled:""===w,size:"xl",onClick:function(){return i("direction",h),i("course",y),i("group",w),E(),void c("dayShedule")}},"\u041f\u043e\u0433\u043d\u0430\u043b\u0438"))),r.a.createElement(A.e,{id:"direction",header:r.a.createElement(A.f,{left:r.a.createElement(A.i,{onClick:function(){return d()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),onClose:function(){return d()}},r.a.createElement(A.c,null,t.map((function(e,t){return r.a.createElement(A.l,{key:t,name:"direction",value:t,onClick:function(){b(e),d()}},e)})))),r.a.createElement(A.e,{id:"course",header:r.a.createElement(A.f,{left:r.a.createElement(A.i,{onClick:function(){return d()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441"),onClose:function(){return d()}},r.a.createElement(A.c,null,n.map((function(e,t){return r.a.createElement(A.l,{key:t,name:"direction",value:t,onClick:function(){j(e),d()}},e)})))),r.a.createElement(A.e,{id:"group",header:r.a.createElement(A.f,{left:r.a.createElement(A.i,{onClick:function(){return d()}})},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"),onClose:function(){return d()}},r.a.createElement(A.c,null,l.map((function(e,t){return r.a.createElement(A.l,{key:t,name:"direction",value:t,onClick:function(){x(e),d()}},e)})))))},B={week_shift:!0},G=n(60),Y=n.n(G),R=n(34),q=n.n(R),Q=n(103),X=n.n(Q),Z=n(99),$=n.n(Z),ee=n(100),te=n.n(ee),ne=n(138),ae=n.n(ne),re=n(101),le=n.n(re),ce=n(102),ue=n.n(ce),oe=B.week_shift,ie=function(){var e=oe?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===e},se=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(q.a,{before:r.a.createElement(q.a,{description:n,style:{width:"85px"}},t),description:l},a)},me=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(q.a,null,r.a.createElement(X.a,null,r.a.createElement(q.a,{description:n},t),r.a.createElement(Y.a,null,a)))},de=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},fe=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},Ee=function(e){var t=e.shedule,n=e.rings,l=e.id,c=e.go,u=(e.values,e.setModal),o=e.getVariable,i=Object(a.useState)(!1),s=Object(f.a)(i,2),m=s[0],d=s[1],E=Object(a.useState)(ie()),p=Object(f.a)(E,2),g=p[0],h=p[1];function b(){d(!m)}var k=function(){var e={error:"404"};return t.forEach((function(t){t.groupName===o("group")&&(e=g?t.even:t.odd)})),e}();return r.a.createElement(v.a,{id:l},r.a.createElement(A.h,{left:r.a.createElement(x.a,null,r.a.createElement($.a,{onClick:u,"data-to":"groupSelectorPage"}))},r.a.createElement(A.j,{onClick:function(){return b()},status:g?r.a.createElement("div",null,"\u0432\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"):r.a.createElement("div",null,"\u043f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),aside:r.a.createElement(ae.a,{style:{transform:"rotate(".concat(m?"180deg":"0",")")}})},"\u0413\u0440\u0443\u043f\u043f\u0430 ",o("group"))),r.a.createElement(A.k,{opened:m},r.a.createElement(Y.a,null,r.a.createElement(q.a,{before:ie()?r.a.createElement(x.a,null):r.a.createElement(te.a,null),onClick:function(){h(!1),b()}},"\u041f\u0435\u0440\u0432\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"),r.a.createElement(q.a,{before:ie()?r.a.createElement(te.a,null):r.a.createElement(x.a,null),onClick:function(){h(!0),b()}},"\u0412\u0442\u043e\u0440\u0430\u044f \u043d\u0435\u0434\u0435\u043b\u044f"))),r.a.createElement(S.a,null,r.a.createElement(Y.a,null,"404"!==k.error?["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"].map((function(e){return r.a.createElement(me,{info:0!==k[e].length?r.a.createElement(de,{begin:n[k[e][0].number].start,end:n[k[e][k[e].length-1].number].end,count:k[e].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),dayname:e,content:k[e]!==[]&&Array.isArray(k[e])&&k[e].map((function(e){return r.a.createElement(se,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(fe,{hall:e.hall,lecturer:e.lecturer})})}))})})):r.a.createElement(q.a,null,r.a.createElement(x.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 ")))),r.a.createElement(A.a,{tabbar:r.a.createElement(A.n,null,r.a.createElement(A.o,{text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",onClick:function(){return c("dayShedule")}},r.a.createElement(le.a,null)),r.a.createElement(A.o,{selected:!0,text:"\u041d\u0435\u0434\u0435\u043b\u044f"},r.a.createElement(ue.a,null)))}),r.a.createElement("br",null),r.a.createElement("br",null))},pe=B.week_shift,ge={borderLeft:"2px solid #4a76a8",backgroundColor:"#F0F0F033"},he=function(){var e=pe?1:0;return function(){var e=new Date((new Date).getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}()%2===e},be=function(e,t){var n=(new Date).getTime(),a=new Date;a.setHours(e.split(":")[0],e.split(":")[1]);var r=a.getTime();a.setHours(t.split(":")[0],t.split(":")[1]);var l=a.getTime();return r<=n&&n<=l?ge:null},ve=function(e){var t=e.start,n=e.end,a=e.name,l=e.info;return r.a.createElement(q.a,{style:be(t,n),before:r.a.createElement(q.a,{style:{width:"85px"},description:n},t),description:l},a)},ke=function(e){var t=e.dayname,n=e.info,a=e.content;return r.a.createElement(q.a,null,r.a.createElement(X.a,null,r.a.createElement(q.a,{description:n},t),r.a.createElement(Y.a,null,a)))},ye=function(e){var t=e.count,n=e.begin,a=e.end;return r.a.createElement("div",null,t," \u043f\u0430\u0440\u044b \u0441 ",n," \u0434\u043e ",a)},je=function(e){var t=e.hall,n=e.lecturer;return r.a.createElement("div",null,"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f: ",t,r.a.createElement("br",null),"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c: ",n)},Oe=function(e){var t=e.shedule,n=e.rings,l=e.id,c=e.go,u=(e.values,e.setModal),o=e.getVariable,i=e.fetchedUser,s=Object(a.useState)(!1),m=Object(f.a)(s,2),d=(m[0],m[1],Object(a.useState)(he())),E=Object(f.a)(d,2),p=E[0],g=(E[1],["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"]),h=function(){var e=new Date((new Date).getTime());return g[(e.getDay()+6)%7]};var b=function(){var e={error:"404"};return t.forEach((function(t){t.groupName===o("group")&&(e=p?t.even:t.odd)})),e}();return r.a.createElement(v.a,{id:l},r.a.createElement(A.h,{left:r.a.createElement(x.a,null,r.a.createElement($.a,{onClick:u,"data-to":"groupSelectorPage"}))},r.a.createElement(A.j,{status:o("group")},h())),r.a.createElement(S.a,null,r.a.createElement(Y.a,null,"404"!==b.error?r.a.createElement(ke,{dayname:0!==b[h()].length?r.a.createElement(ye,{begin:n[b[h()][0].number].start,end:n[b[h()][b[h()].length-1].number].end,count:b[h()].length}):r.a.createElement("div",null,"\u0412 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043f\u0430\u0440 \u043d\u0435\u0442 :)"),content:b[h()]!==[]&&Array.isArray(b[h()])&&b[h()].map((function(e){return r.a.createElement(ve,{start:n[e.number].start,end:n[e.number].end,name:e.name,info:r.a.createElement(je,{hall:e.hall,lecturer:e.lecturer})})}))}):""!==o("group")?r.a.createElement(q.a,null,r.a.createElement(x.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430 \u044d\u0442\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")):r.a.createElement(S.a,null,i&&r.a.createElement(S.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:80}},i.photo_200?r.a.createElement(T.a,{size:100,src:i.photo_200}):null,r.a.createElement(x.a,{style:{marginTop:10}},r.a.createElement(_.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",i.first_name)))),r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",onClick:u,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u0443"))))),r.a.createElement(A.a,{tabbar:r.a.createElement(A.n,null,r.a.createElement(A.o,{selected:!0,text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"},r.a.createElement(le.a,null)),r.a.createElement(A.o,{text:"\u041d\u0435\u0434\u0435\u043b\u044f",onClick:function(){return c("sheduleSheet")}},r.a.createElement(ue.a,null)))}))},Ce=function(e){var t=e.id,n=e.go,a=e.fetchedUser;return r.a.createElement(v.a,{id:t},r.a.createElement(y.a,null,"Example"),a&&r.a.createElement(S.a,{title:"User Data Fetched with VK Connect"},r.a.createElement(q.a,{before:a.photo_200?r.a.createElement(T.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),r.a.createElement(S.a,{title:"Navigation Example"},r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"Show me the Persik, please"))))},Se=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(143),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/scheduleJson.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/scheduleJson.json");case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(n,a){t(e,(function(e,t,r){e&&a(e),200!==t.statusCode&&a("Invalid status code <"+t.statusCode+">"),n(r)}))}))},t=n(143),"https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/ringsJson.json",e.next=5,a("https://cors-anywhere.herokuapp.com/http://nikita.u1257236.plsk.regruhosting.ru/json/ringsJson.json");case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(a.useState)("dayShedule"),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),u=Object(f.a)(c,2),s=u[0],E=u[1],g=Object(a.useState)(r.a.createElement(h.a,null)),b=Object(f.a)(g,2),v=b[0],k=b[1],y=Object(a.useState)(null),j=Object(f.a)(y,2),O=j[0],C=j[1],S=Object(a.useState)([]),w=Object(f.a)(S,2),x=w[0],D=w[1],T=Object(a.useState)(null),V=Object(f.a)(T,2),_=V[0],A=V[1],U=Object(a.useState)([]),I=Object(f.a)(U,2),P=I[0],J=I[1],K=Object(a.useState)([]),L=Object(f.a)(K,2),z=L[0],F=L[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().then((function(e){F(JSON.parse(e))}),(function(e){}));case 2:return e.next=4,Se().then((function(e){J(JSON.parse(e))}),(function(e){}));case 4:return e.next=6,o.a.send("VKWebAppGetUserInfo");case 6:return t=e.sent,e.next=9,o.a.send("VKWebAppStorageGet",{keys:["direction","course","group"]});case 9:n=e.sent,E(t),A(n.keys),k(null);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}else"VKWebAppStorageGetResult"===n&&console.log("[Connect] Updating values OK")})),function(){e.apply(this,arguments)}()}),[]);var N=function(e){"string"!=typeof e&&l(e.currentTarget.dataset.to),l(e)},B=function(e){e=e||null;var t=x?Object(i.a)(x):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),C(e),D(t)},G=function(e){B(e.currentTarget.dataset.to)};function Y(e){var t="";return!!_&&(_.forEach((function(n){n.key===e&&(t=n.value)})),t)}return r.a.createElement(p.a,{activePanel:n,popout:v,modal:r.a.createElement(H,{directionList:["\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f"],coursesList:["1"],groupsList:["\u041f\u0440\u0418-101"],values:_,getVariable:Y,setVariable:function(e,t){o.a.send("VKWebAppStorageSet",{key:e,value:t});var n=_;n.forEach((function(n){n.key===e&&(n.value=t)})),A(n)},go:N,modal:O,updateModal:B,modalBack:function(){return B(x[x.length-2])},closeModal:function(){return B(null)}})},r.a.createElement(W,{id:"loading",go:N}),r.a.createElement(M,{id:"splash",go:N,setModal:G,values:_,fetchedUser:s}),r.a.createElement(Ee,{id:"sheduleSheet",shedule:P,rings:z,go:N,values:_,setModal:G,getVariable:Y}),r.a.createElement(Oe,{id:"dayShedule",shedule:P,rings:z,go:N,values:_,setModal:G,getVariable:Y,fetchedUser:s}),r.a.createElement(Ce,{id:"home",fetchedUser:s,go:N}))};function De(){c.a.render(r.a.createElement(xe,null),document.getElementById("root"))}o.a.send("VKWebAppInit"),De(),setInterval(De,15e3)}},[[275,1,2]]]);
//# sourceMappingURL=main.f511a349.chunk.js.map