(this["webpackJsonpredux-pagination"]=this["webpackJsonpredux-pagination"]||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),o=(a(47),a(12)),i={POSTS_GET_REQUEST:"posts/POSTS_GET_REQUEST",POSTS_GET_SUCCESS:"posts/POSTS_GET_SUCCESS",POSTS_GET_FAILURE:"posts/POSTS_GET_FAILURE",POST_GET_REQUEST:"post/POST_GET_REQUEST",POST_GET_SUCCESS:"post/POST_GET_SUCCESS",POST_GET_FAILURE:"post/POST_GET_FAILURE"},u=a(75),E=a(74);var l=function(){var e=Object(o.c)((function(e){return e.post})).post;return r.a.createElement(u.a,{style:{width:"50rem",minHeight:400},className:"text-center"},r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,null,e.title),r.a.createElement(u.a.Text,null,e.content),r.a.createElement(E.a,{variant:"flush"},r.a.createElement(E.a.Item,null,e.createdAt),r.a.createElement(E.a.Item,null,e.createdAt))))},S=a(73);var T=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement(S.a,{animation:"border",variant:"primary"}))},p=a(16),d=a(76);var O=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.post})),a=t.total,c=t.activeId,s=Object(n.useState)(!1),u=Object(p.a)(s,2),E=u[0],l=u[1],S=Object(n.useState)(!1),T=Object(p.a)(S,2),O=T[0],b=T[1],f=Object(n.useState)([2,3,4,5,6]),_=Object(p.a)(f,2),m=_[0],v=_[1];Object(n.useEffect)((function(){1===c&&l(!0),c===a&&b(!0)}),[c,a]),Object(n.useEffect)((function(){c<4?v([2,3,4,5,6]):c>=4&&c<a-2?v([c-2,c-1,c,c+1,c+2]):c>=a-2&&v([a-5,a-4,a-3,a-2,a-1])}),[c,a]);var j=Object(n.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];1!==c&&e({type:i.POST_GET_REQUEST,data:t?1:c-1})}),[c,e]),P=Object(n.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];c!==a&&e({type:i.POST_GET_REQUEST,data:t?a:c+1})}),[c,e,a]),G=Object(n.useCallback)((function(t){e({type:i.POST_GET_REQUEST,data:t})}),[e]);return r.a.createElement(d.a,{style:{marginTop:10}},r.a.createElement(d.a.First,{onClick:function(){return j(!0)},disabled:E}),r.a.createElement(d.a.Prev,{onClick:function(){return j()},disabled:E}),r.a.createElement(d.a.Item,{onClick:function(){return G(1)},active:1===c},1),r.a.createElement(d.a.Ellipsis,{disabled:!0}),m.map((function(e){return r.a.createElement(d.a.Item,{key:e,active:e===c,onClick:function(){return G(e)}},e)})),r.a.createElement(d.a.Ellipsis,{disabled:!0}),r.a.createElement(d.a.Item,{onClick:function(){return G(a)},active:c===a},a),r.a.createElement(d.a.Next,{onClick:function(){return P()},disabled:O}),r.a.createElement(d.a.Last,{onClick:function(){return P(!0)},disabled:O}))};var b=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.post})),a=t.isShow,c=t.isLoading;return Object(n.useEffect)((function(){e({type:i.POSTS_GET_REQUEST}),e({type:i.POST_GET_REQUEST,data:1})}),[e]),c?r.a.createElement(T,null):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"card-container"},r.a.createElement(l,null),a&&r.a.createElement(O,null)))},f=a(11),_=a(37),m={isShow:!1,isLoading:!1,activeId:1,total:0,posts:[],post:{},fail:{message:""}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;return Object(_.a)(e,(function(e){switch(a){case i.POSTS_GET_REQUEST:e.total=0,e.posts=[],e.fail=m.fail;break;case i.POSTS_GET_SUCCESS:e.total=n.data.length,e.posts=n.data;break;case i.POSTS_GET_FAILURE:e.total=0,e.posts=[],e.fail={message:"Posts Get Error"};break;case i.POST_GET_REQUEST:e.isShow=!1,e.isLoading=!0,e.activeId=n,e.post={},e.fail=m.fail;break;case i.POST_GET_SUCCESS:e.isShow=!0,e.isLoading=!1,e.post=n.data;break;case i.POST_GET_FAILURE:e.isShow=!1,e.isLoading=!1,e.post={},e.fail={message:"Post Get Error"}}}))},j=Object(f.combineReducers)({post:v}),P=a(40),G=a(9),U=a.n(G),h=a(7),k=a(21),C=a.n(k),x=U.a.mark(L),w=U.a.mark(Q),R=U.a.mark(F),g=U.a.mark(N),y=U.a.mark(B);function I(){return C.a.get("https://koreanjson.com/posts")}function L(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.b)(I,e.data);case 3:return t=a.sent,a.next=6,Object(h.d)({type:i.POSTS_GET_SUCCESS,data:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(h.d)({type:i.POSTS_GET_FAILURE,data:a.t0});case 12:case"end":return a.stop()}}),x,null,[[0,8]])}function Q(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(i.POSTS_GET_REQUEST,L);case 2:case"end":return e.stop()}}),w)}function A(e){return C.a.get("https://koreanjson.com/posts/".concat(e))}function F(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.b)(A,e.data);case 3:return t=a.sent,a.next=6,Object(h.d)({type:i.POST_GET_SUCCESS,data:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(h.d)({type:i.POST_GET_FAILURE,data:a.t0});case 12:case"end":return a.stop()}}),R,null,[[0,8]])}function N(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(i.POST_GET_REQUEST,F);case 2:case"end":return e.stop()}}),g)}function B(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.c)(Q),Object(h.c)(N)]);case 2:case"end":return e.stop()}}),y)}var J=U.a.mark(D);function D(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(B)]);case 2:case"end":return e.stop()}}),J)}var H=a(38),M=Object(P.a)(),W=Object(f.createStore)(j,Object(H.composeWithDevTools)(Object(f.applyMiddleware)(M)));M.run(D),s.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(b,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cbb19258.chunk.js.map