(this["webpackJsonptask-test"]=this["webpackJsonptask-test"]||[]).push([[0],{108:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(1),a=r.n(c),s=r(22),u=r.n(s),o=r(16),i=r(9),b=r(48),l=r(54),j=r(5),d=r(18),g=r(49),O=r.n(g),h=r(8),p=Object(l.a)(Object(j.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),f={key:"auth",storage:O.a,whitelist:["token"]},v=Object(j.a)({reducer:{auth:Object(d.g)(f,h.b)},middleware:p,devTools:!1}),x={store:v,persistor:Object(d.h)(v)},m=(r(86),r(33)),k=r(34),y=r(37),_=r(36),C=r(4),S=r(35),A=r(51),N=r(11),U=r.n(N),E=Object(i.b)((function(e){return{isAuthenticated:h.c.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(n.jsxs)("nav",{className:U.a.nav,children:[Object(n.jsx)(o.b,{className:U.a.link,to:"/",children:Object(n.jsx)(A.a,{size:"22"})}),t&&Object(n.jsx)(o.b,{className:U.a.link,to:"/private",children:"Private page"})]})})),w=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.b,{className:U.a.link,to:"/register",exact:!0,children:"Registation"}),Object(n.jsx)(o.b,{className:U.a.link,to:"/login",exact:!0,children:"Login"})]})},R=r.p+"static/media/default-avatar.e44fc4e2.png",q=r(52),z={onLogout:h.a.logOut},I=Object(i.b)((function(e){return{name:h.c.getUsername(e),avatar:R}}),z)((function(e){var t=e.avatar,r=e.name,c=e.onLogout;return Object(n.jsxs)("div",{className:U.a.userWrapper,children:[Object(n.jsx)("img",{src:t,alt:"",width:"32",className:U.a.avatar}),Object(n.jsxs)("span",{className:U.a.name,children:["Hello, ",r]}),Object(n.jsx)(q.a,{size:"20",className:U.a.button,type:"button",onClick:c})]})})),T=Object(i.b)((function(e){return{isAuthenticated:h.c.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(n.jsxs)("header",{className:U.a.header,children:[Object(n.jsx)(E,{}),t?Object(n.jsx)(I,{}):Object(n.jsx)(w,{})]})})),F=r(19),L=r(27),W=Object(i.b)((function(e){return{isAuthenticated:h.c.getIsAuthenticated(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,c=e.redirectTo,a=Object(L.a)(e,["component","isAuthenticated","redirectTo"]);return Object(n.jsx)(C.b,Object(F.a)(Object(F.a)({},a),{},{render:function(e){return r?Object(n.jsx)(t,Object(F.a)({},e)):Object(n.jsx)(C.a,{to:c})}}))})),B=Object(i.b)((function(e){return{isAuthenticated:h.c.getIsAuthenticated(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,c=e.redirectTo,a=Object(L.a)(e,["component","isAuthenticated","redirectTo"]);return Object(n.jsx)(C.b,Object(F.a)(Object(F.a)({},a),{},{render:function(e){return r&&a.restricted?Object(n.jsx)(C.a,{to:c}):Object(n.jsx)(t,Object(F.a)({},e))}}))})),G=r(53),H=r.n(G),J=Object(c.lazy)((function(){return r.e(3).then(r.bind(null,112))})),M=Object(c.lazy)((function(){return r.e(6).then(r.bind(null,113))})),P=Object(c.lazy)((function(){return r.e(5).then(r.bind(null,114))})),D=Object(c.lazy)((function(){return r.e(4).then(r.bind(null,115))})),K=function(e){Object(y.a)(r,e);var t=Object(_.a)(r);function r(){return Object(m.a)(this,r),t.apply(this,arguments)}return Object(k.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(S.a,{children:[Object(n.jsx)(T,{}),Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(H.a,{type:"Rings",color:"#00BFFF",height:80,width:80})}),children:Object(n.jsxs)(C.d,{children:[Object(n.jsx)(B,{exact:!0,path:"/",component:J}),Object(n.jsx)(W,{path:"/private",redirectTo:"/login",component:D}),Object(n.jsx)(B,{restricted:!0,path:"/register",redirectTo:"/private",component:M}),Object(n.jsx)(B,{restricted:!0,path:"/login",redirectTo:"/private",component:P})]})})]})})}}]),r}(c.Component),Q={onGetCurrentUser:h.a.getCurrentUser},X=Object(i.b)(null,Q)(K);u.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(i.a,{store:x.store,children:Object(n.jsx)(b.a,{loading:null,persistor:x.persistor,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(X,{})})})})}),document.getElementById("root"))},11:function(e,t,r){e.exports={header:"Navigation_header__391HK",link:"Navigation_link__1Lkea",nav:"Navigation_nav__1kw0Q",button:"Navigation_button__vWdws",name:"Navigation_name__rZhXo",userWrapper:"Navigation_userWrapper__27GLa",avatar:"Navigation_avatar__jIu9A"}},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(2),c=r(50),a=r.n(c);function s(e){var t=e.children;return Object(n.jsx)("div",{className:a.a.container,children:t})}},50:function(e,t,r){e.exports={container:"Container_container__3YuFf"}},8:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return w})),r.d(t,"c",(function(){return R}));var n,c,a,s=r(5),u=Object(s.b)("auth/registerRequest"),o=Object(s.b)("auth/registerSuccess"),i=Object(s.b)("auth/registerError"),b=Object(s.b)("auth/loginRequest"),l=Object(s.b)("auth/loginSuccess"),j=Object(s.b)("auth/loginError"),d={registerRequest:u,registerSuccess:o,registerError:i,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:b,loginSuccess:l,loginError:j,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},g=r(10),O=r(7),h={name:null,email:null},p=Object(s.c)(h,(n={},Object(g.a)(n,d.registerSuccess,(function(e,t){return t.payload.user})),Object(g.a)(n,d.loginSuccess,(function(e,t){return t.payload.user})),Object(g.a)(n,d.logoutSuccess,(function(){return h})),Object(g.a)(n,d.getCurrentUserSuccess,(function(e,t){return t.payload})),n)),f=Object(s.c)(null,(c={},Object(g.a)(c,d.registerSuccess,(function(e,t){return t.payload.token})),Object(g.a)(c,d.loginSuccess,(function(e,t){return t.payload.token})),Object(g.a)(c,d.logoutSuccess,(function(){return null})),c)),v=function(e,t){return t.payload},x=Object(s.c)(null,(a={},Object(g.a)(a,d.registerError,v),Object(g.a)(a,d.loginError,v),Object(g.a)(a,d.logoutError,v),Object(g.a)(a,d.getCurrentUserError,v),a)),m=Object(O.b)({user:p,token:f,error:x}),k=r(17),y=r.n(k),_=r(24),C=r(20),S=r.n(C),A=r(28);r(85);A.b.configure({position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,transition:A.a});var N=function(e){return A.b.info(e)};S.a.defaults.baseURL="https://connections-api.herokuapp.com";var U=function(e){S.a.defaults.headers.common.Authorization="Bearer ".concat(e)},E=function(){S.a.defaults.headers.common.Authorization=""},w={register:function(e){return function(){var t=Object(_.a)(y.a.mark((function t(r){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(d.registerRequest()),t.prev=1,t.next=4,S.a.post("/users/signup",e);case 4:n=t.sent,U(n.data.token),r(d.registerSuccess(n.data)),N("Welcome"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r(d.registerError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(_.a)(y.a.mark((function t(r){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(d.loginRequest()),t.prev=1,t.next=4,S.a.post("/users/login",e);case 4:n=t.sent,U(n.data.token),r(d.loginSuccess(n.data)),N("Welcome"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r(d.loginError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(_.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d.logoutRequest()),e.prev=1,e.next=4,S.a.post("/users/logout");case 4:E(),t(d.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(d.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(_.a)(y.a.mark((function e(t,r){var n,c,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),c=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return U(c),t(d.getCurrentUserRequest()),e.prev=5,e.next=8,S.a.get("/users/current");case 8:a=e.sent,t(d.getCurrentUserSuccess(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(d.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}},R={getIsAuthenticated:function(e){return Boolean(e.auth.token)},getUsername:function(e){return e.auth.user.name}}},86:function(e,t,r){}},[[108,1,2]]]);
//# sourceMappingURL=main.43fa2973.chunk.js.map