(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",i="REMOVE_INGREDIENT",c="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",h="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",j="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(15),i=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return m}));var r=n(2),i=n(20),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){i.a.get("https://react-my-burger-deed1-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(15),u=function(e,t){return function(n){n({type:r.k}),i.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var c="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';i.a.get("/orders.json"+c).then((function(e){var t,i=[];for(var c in e.data)i.push(Object(s.a)(Object(s.a)({},e.data[c]),{},{id:c}));n((t=i,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},h=n(32),b=n.n(h),j=function(e,t){return{type:r.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},g=function(e,t,n){return function(i){i({type:r.d});var c={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdKVa1I2A7trJbZrged01P8SgTpFM8Y0c";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdKVa1I2A7trJbZrged01P8SgTpFM8Y0c"),b.a.post(a,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),i(j(e.data.idToken,e.data.localId)),i(f(e.data.expiresIn))})).catch((function(e){var t;i((t=e.response.data.error,{type:r.b,error:t}))}))}},O=function(e){return{type:r.o,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(p());else{var r=localStorage.getItem("userId");e(j(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,n){"use strict";var r=n(32),i=n.n(r).a.create({baseURL:"https://react-my-burger-deed1-default-rtdb.firebaseio.com/"});t.a=i},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";n(1);var r=n(61),i=n.n(r),c=n(0);t.a=function(e){return e.show?Object(c.jsx)("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(6),i=n(7),c=n(9),a=n(8),o=n(1),s=n(63),u=n.n(s),d=n(12),l=n(30),h=n(0),b=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(l.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(h.jsx)("div",{className:u.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(o.Component);t.a=b},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";n(1);var r=n(42),i=n.n(r),c=n(0);t.a=function(e){return Object(c.jsx)("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";n(1);var r=n(64),i=n.n(r),c=n(0);t.a=function(){return Object(c.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(15),i=n(6),c=n(7),a=n(9),o=n(8),s=n(1),u=n(31),d=n(12),l=n(0);t.a=function(e,t){return function(n){Object(a.a)(h,n);var s=Object(o.a)(h);function h(){var e;Object(i.a)(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(h,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(l.jsx)(e,Object(r.a)({},this.props))]})}}]),h}(s.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(65),i=n(1),c=n(62),a=n.n(c),o=n(6),s=n(7),u=n(9),d=n(8),l=n(19),h=n.n(l),b=n(0),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(b.jsx)("div",{className:h.a.BreadBottom});break;case"bread-top":e=Object(b.jsxs)("div",{className:h.a.BreadTop,children:[Object(b.jsx)("div",{className:h.a.Seeds1}),Object(b.jsx)("div",{className:h.a.Seeds2})]});break;case"meat":e=Object(b.jsx)("div",{className:h.a.Meat});break;case"cheese":e=Object(b.jsx)("div",{className:h.a.Cheese});break;case"salad":e=Object(b.jsx)("div",{className:h.a.Salad});break;case"bacon":e=Object(b.jsx)("div",{className:h.a.Bacon});break;default:e=null}return e}}]),n}(i.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(b.jsx)(j,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(b.jsx)("p",{children:"Please start adding Ingredients"})),Object(b.jsxs)("div",{className:a.a.Burger,children:[Object(b.jsx)(j,{type:"bread-top"}),t,Object(b.jsx)(j,{type:"bread-bottom"})]})}},,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(28),c=n.n(i),a=n(17),o=n(21),s=n(56),u=(n(74),n(6)),d=n(7),l=n(9),h=n(8),b=n(12),j=n(57),p=n.n(j),f=n(33),g=n.n(f),O=n.p+"static/media/burger-logo.ec69c7f6.png",m=n(58),v=n.n(m),_=n(0),x=function(e){return Object(_.jsx)("div",{className:v.a.Logo,style:{height:e.height},children:Object(_.jsx)("img",{src:O,alt:"MyBurger"})})},y=n(59),k=n.n(y),S=n(22),I=n(38),C=n.n(I),T=function(e){return Object(_.jsx)("li",{className:C.a.NavigationItem,children:Object(_.jsx)(S.b,{to:e.link,exact:e.exact,activeClassName:C.a.active,children:e.children})})},N=function(e){return Object(_.jsxs)("ul",{className:k.a.NavigationItems,children:[Object(_.jsx)(T,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(_.jsx)(T,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(_.jsx)(T,{link:"/logout",children:"Logout"}):Object(_.jsx)(T,{link:"/auth",children:"Authenticate"})]})},B=n(60),w=n.n(B),D=function(e){return Object(_.jsxs)("div",{className:w.a.DrawerToggle,onClick:e.clicked,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})},A=function(e){return Object(_.jsxs)("header",{className:g.a.Toolbar,children:[Object(_.jsx)(D,{clicked:e.drawerToggleClicked}),Object(_.jsx)("div",{className:g.a.Logo,children:Object(_.jsx)(x,{})}),Object(_.jsx)("nav",{className:g.a.DesktopOnly,children:Object(_.jsx)(N,{isAuthenticated:e.isAuth})})]})},L=n(24),R=n.n(L),E=n(30),P=function(e){var t=[R.a.SideDrawer,R.a.Close];return e.open&&(t=[R.a.SideDrawer,R.a.Open]),Object(_.jsxs)(b.a,{children:[Object(_.jsx)(E.a,{show:e.open,clicked:e.closed}),Object(_.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(_.jsx)("div",{className:R.a.Logo,children:Object(_.jsx)(x,{})}),Object(_.jsx)("nav",{children:Object(_.jsx)(N,{isAuthenticated:e.isAuth})})]})]})},H=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(b.a,{children:[Object(_.jsx)(A,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(_.jsx)(P,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(_.jsx)("main",{className:p.a.Content,children:this.props.children})]})}}]),n}(r.Component),M=Object(a.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(H),U=n(15),F=n(54),z=n(41),G=n.n(z),Y=n(27),K=n.n(Y),q=function(e){return Object(_.jsxs)("div",{className:K.a.BuildControl,children:[Object(_.jsx)("div",{className:K.a.Label,children:e.label}),Object(_.jsx)("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(_.jsx)("button",{className:K.a.More,onClick:e.added,children:"More"})]})},J=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return Object(_.jsxs)("div",{className:G.a.BuildControls,children:[Object(_.jsxs)("p",{children:["Current Price: ",Object(_.jsx)("strong",{children:Math.round(100*(e.price+Number.EPSILON))/100})]}),J.map((function(t){return Object(_.jsx)(q,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(_.jsx)("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},V=n(31),W=n(34),Z=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(_.jsxs)(b.a,{children:[Object(_.jsx)("h3",{children:"Your Order"}),Object(_.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(_.jsx)("ul",{children:t}),Object(_.jsx)("p",{children:Object(_.jsxs)("strong",{children:["Total Price: ",Math.round(100*(this.props.price+Number.EPSILON))/100]})}),Object(_.jsx)("p",{children:"Continue to Checkout?"}),Object(_.jsx)(W.a,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"CANCEL"}),Object(_.jsx)(W.a,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),$=n(43),Q=n(44),ee=n(18),te=n(20),ne=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(U.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?Object(_.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(_.jsx)($.a,{});return this.props.ings&&(r=Object(_.jsxs)(b.a,{children:[Object(_.jsx)(F.a,{ingredients:this.props.ings}),Object(_.jsx)(X,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})]}),n=Object(_.jsx)(Z,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),Object(_.jsxs)(b.a,{children:[Object(_.jsx)(V.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),re=Object(a.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ee.a(t))},onIngredientRemoved:function(t){return e(ee.i(t))},onInitIngredients:function(){return e(ee.e())},onInitPurchase:function(){return e(ee.h())},onSetAuthRedirectPath:function(t){return e(ee.j(t))}}}))(Object(Q.a)(ne,te.a)),ie=n(5),ce=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(_.jsx)(ie.a,{to:"/"})}}]),n}(r.Component),ae=Object(a.b)(null,(function(e){return{onLogout:function(){return e(ee.f())}}}))(ce),oe=function(e){return function(t){Object(l.a)(r,t);var n=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).state={component:null},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(_.jsx)(e,Object(U.a)({},this.props)):null}}]),r}(r.Component)},se=oe((function(){return n.e(3).then(n.bind(null,104))})),ue=oe((function(){return n.e(5).then(n.bind(null,105))})),de=oe((function(){return n.e(4).then(n.bind(null,102))})),le=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSigup()}},{key:"render",value:function(){var e=Object(_.jsxs)(ie.d,{children:[Object(_.jsx)(ie.b,{path:"/auth",component:de}),Object(_.jsx)(ie.b,{path:"/",exact:!0,component:re}),Object(_.jsx)(ie.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(_.jsxs)(ie.d,{children:[Object(_.jsx)(ie.b,{path:"/checkout",component:se}),Object(_.jsx)(ie.b,{path:"/orders",component:ue}),Object(_.jsx)(ie.b,{path:"/logout",component:ae}),Object(_.jsx)(ie.b,{path:"/auth",component:de}),Object(_.jsx)(ie.b,{path:"/",exact:!0,component:re}),Object(_.jsx)(ie.a,{to:"/"})]})),Object(_.jsx)("div",{children:Object(_.jsx)(M,{children:e})})}}]),n}(r.Component),he=Object(ie.g)(Object(a.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSigup:function(){return e(ee.c())}}}))(le)),be=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},je=n(25),pe=n(2),fe=n(4),ge={ingredients:null,totalPrice:4,error:!1,building:!1},Oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},me=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+Oe[t.ingredientName],building:!0};return Object(fe.b)(e,r)},ve=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice-Oe[t.ingredientName],building:!0};return Object(fe.b)(e,r)},_e=function(e,t){return Object(fe.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},xe=function(e,t){return Object(fe.b)(e,{error:!0})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a:return me(e,t);case pe.n:return ve(e,t);case pe.p:return _e(e,t);case pe.f:return xe(e);default:return e}},ke={orders:[],loading:!1,purchased:!1},Se=function(e,t){return Object(fe.b)(e,{purchased:!1})},Ie=function(e,t){return Object(fe.b)(e,{loading:!0})},Ce=function(e,t){var n=Object(fe.b)(t.orderData,{id:t.orderId});return Object(fe.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Te=function(e,t){return Object(fe.b)(e,{loading:!1})},Ne=function(e,t){return Object(fe.b)(e,{loading:!0})},Be=function(e,t){return Object(fe.b)(e,{orders:t.orders,loading:!1})},we=function(e,t){return Object(fe.b)(e,{loading:!1})},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.m:return Se(e);case pe.k:return Ie(e);case pe.l:return Ce(e,t);case pe.j:return Te(e);case pe.h:return Ne(e);case pe.i:return Be(e,t);case pe.g:return we(e);default:return e}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Le=function(e,t){return Object(fe.b)(e,{error:null,loading:!0})},Re=function(e,t){return Object(fe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ee=function(e,t){return Object(fe.b)(e,{error:t.error,loading:!1})},Pe=function(e,t){return Object(fe.b)(e,{token:null,userId:null})},He=function(e,t){return Object(fe.b)(e,{authRedirectPath:t.path})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.d:return Le(e);case pe.e:return Re(e,t);case pe.b:return Ee(e,t);case pe.c:return Pe(e);case pe.o:return He(e,t);default:return e}},Ue=o.d,Fe=Object(o.c)({burgerBuilder:ye,order:De,auth:Me}),ze=Object(o.e)(Fe,Ue(Object(o.a)(s.a))),Ge=Object(_.jsx)(a.a,{store:ze,children:Object(_.jsx)(S.a,{children:Object(_.jsx)(he,{})})});c.a.render(Ge,document.getElementById("root")),be()}],[[95,1,2]]]);
//# sourceMappingURL=main.3574024d.chunk.js.map