(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,A){},26:function(e,t,A){},36:function(e,t,A){},37:function(e,t,A){},38:function(e,t,A){},39:function(e,t,A){},40:function(e,t,A){},41:function(e,t,A){},42:function(e,t,A){},43:function(e,t,A){},44:function(e,t,A){},45:function(e,t,A){"use strict";A.r(t);var a=A(1),n=A.n(a),c=A(19),i=A.n(c),o=(A(25),A(13)),s=A(12),r=A(2),l=A(6),d=A(7),h=A(9),u=A(8),j=(A(26),function(e){return e.toLowerCase().trim().replace(/(^\w| \w)/gim,(function(e){return e.toUpperCase()}))}),b=A(0),p=function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){var e;Object(l.a)(this,A);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).ulRef=n.a.createRef(),e.state={right:"-101%"},e.menuItemClick=function(t){var A=e.state.right;(0,e.props.onClick)(t),"0px"===A&&e.toggleMenu()},e.outsideClickHandler=function(t){"0px"===e.state.right&&e.ulRef&&e.ulRef.current&&!e.ulRef.current.contains(t.target)&&e.toggleMenu()},e.toggleMenu=function(){var t=e.ulRef&&e.ulRef.current&&e.ulRef.current?"-".concat(Math.round(e.ulRef.current.getBoundingClientRect().width)+10,"px"):"-100%";e.setState((function(e){return{right:"0px"===e.right?t:"0px"}}))},e}return Object(d.a)(A,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.outsideClickHandler)}},{key:"render",value:function(){var e=this,t=this.state.right,A=this.props,a=A.selected,n=A.setRef,c=A.history,i=A.setMenuItem,o=A.onThemeChange,r=A.theme;return Object(b.jsxs)("div",{className:"Header ".concat(a,"-page"),ref:n,children:[Object(b.jsxs)("div",{onClick:function(){c.push("/"),i("home")},className:"logo",children:[Object(b.jsx)("strong",{title:"Sim Jao",children:"FirstName"}),"\xa0",Object(b.jsx)("span",{children:"LastName"})]}),Object(b.jsx)("div",{id:"header-hamburger",children:Object(b.jsx)("span",{onClick:this.toggleMenu,children:"\u2630"})}),Object(b.jsxs)("ul",{style:{right:t},ref:this.ulRef,children:[Object(b.jsx)("div",{id:"menu-hamburger",children:Object(b.jsx)("span",{onClick:this.toggleMenu,children:"\u2630"})}),["home","about","projects"].map((function(t,A){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toLowerCase().trim().replace(/ /gm,t)}(t);return Object(b.jsx)("li",{"data-value":n,className:"".concat(n," ").concat(a===n&&"selected"),onClick:e.menuItemClick,children:Object(b.jsx)(s.b,{to:"/".concat("home"===n?"":n),children:j(t)})},A)})),Object(b.jsxs)("select",{name:"theme-changer",onChange:o,value:r,children:[Object(b.jsx)("option",{value:"light",children:"Light"}),Object(b.jsx)("option",{value:"dark",children:"Dark"})]})]})]})}}]),A}(a.Component),m=(A(36),A.p+"static/media/profile1.046e8fde.jpg"),f=A.p+"static/media/profile2.d780aeb3.jpg",g=A.p+"static/media/profile3.d3dc924a.png",v=A.p+"static/media/profile4.304bb226.png",O=A.p+"static/media/profile5.62feaa12.jpeg",x=A.p+"static/media/profile6.7a36b443.png",y=A.p+"static/media/profile7.6be9f2fe.png",w=function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){var e;Object(l.a)(this,A);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageIndex:0,imageOpacity:0},e.imageArray=[f,m,g,v,O,x,y],e}return Object(d.a)(A,[{key:"componentDidMount",value:function(){var e=this,t=[],A=49;!function a(){var n=e.state.imageIndex,c=n+1;c===e.imageArray.length&&(c=0),setTimeout((function(){e.setState({imageIndex:c}),t.length!==e.imageArray.length?(t.includes(n)||t.push(n),console.log("idxs:",t)):(A=14e3,e.setState({imageOpacity:1})),a()}),A)}()}},{key:"render",value:function(){var e=this.state,t=e.imageIndex,A=e.imageOpacity;return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)("h2",{title:"Greetings",className:"greetings bybyn",children:"\u1703\u170b\u1713\u1710\u1714\u1706"}),Object(b.jsx)("div",{className:"profile-image",style:{backgroundImage:"url(".concat(this.imageArray[t],")"),opacity:A}}),Object(b.jsxs)("div",{className:"profile-description",children:[Object(b.jsx)("div",{className:"greetings bybyn",children:"\u1703\u170b\u1713\u1710\u1714\u1706"}),Object(b.jsx)("h1",{className:"name gold",children:"Sherly Jao"}),Object(b.jsx)("p",{children:"I am 17 years of age and am a student of STEM-Micron."}),Object(b.jsx)("p",{children:"I have a talent for creativity and I am quick to learn. I'm good at arts, and have a hidden gift for solving puzzles."}),Object(b.jsx)("p",{children:"I may not have a 20/20 eyesight but I have a 200/200 attendance at school."})]})]})}}]),A}(a.Component);A(37);var q=function(e){var t=e.setRef,A=e.currentPath;return console.log("[Footer] currentPath:",A),Object(b.jsx)("div",{className:"Footer",ref:t,children:Object(b.jsx)("span",{className:"current-page",children:"/"!==A?A.replace(/^\//,"").split("/").join("."):Object(b.jsxs)("span",{className:"bybyn",children:[Object(b.jsx)("span",{title:"Bisaya",children:Object(b.jsx)("strong",{children:"\u170a\u1712\u1710\u170c\u1713"})}),"\xa0|\xa0",Object(b.jsx)("span",{title:"Filipino",children:"\u1709\u1712\u170e\u1712\u1709\u1712\u1708\u1713"})]})})})},N=(A(38),A(39),"data:image/png;base64,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"),C=function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){var e;Object(l.a)(this,A);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={logoHeight:0},e.readMoreClick=function(){var t=e.props,A=t.data,a=t.history,n=t.logHistory,c=A.id,i="".concat(a.location.pathname,"/").concat(c);a.push(i),n()},e}return Object(d.a)(A,[{key:"componentDidMount",value:function(){this.logoRef&&this.setState({logoHeight:this.logoRef.clientWidth})}},{key:"render",value:function(){var e=this,t=this.state.logoHeight,A=this.props.data,a=A.id,n=A.date,c=A.title,i=A.subject,o=A.image,s=A.details,r=Object(b.jsx)("div",{ref:function(t){return e.logoRef=t},className:"logo",style:{backgroundImage:"url(".concat(o||N,")"),height:"".concat(t,"px")}});return Object(b.jsxs)("div",{id:a,className:"WorkTiles",children:[Object(b.jsxs)("div",{className:"logo-wrapper",children:[i.website&&Object(b.jsx)("a",{rel:"noreferrer",href:i.website||"#",target:"_blank",className:"website",children:r}),!i.website&&r]}),Object(b.jsxs)("div",{className:"details",style:{height:"calc(100% - ".concat(t,"px)")},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"title",children:c}),Object(b.jsx)("h5",{className:"subject",children:i.name}),Object(b.jsx)("h5",{className:"date-range",children:n})]}),s&&Object(b.jsx)("span",{className:"read-more",onClick:this.readMoreClick,children:"... read more"})]})]})}}]),A}(a.Component),k=function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){return Object(l.a)(this,A),t.apply(this,arguments)}return Object(d.a)(A,[{key:"componentDidMount",value:function(){var e=this.props.history;if((0,this.props.logHistory)(),e.location.hash){var t=document.querySelector(e.location.hash);t&&setTimeout((function(){t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),300)}else window.scrollTo({top:0})}},{key:"render",value:function(){var e=this.props,t=e.offset,A=e.history,a=e.logHistory,n=e.data,c=e.title,i=e.banner,o=t.header+t.footer+t.margin;return Object(b.jsxs)("div",{className:"List",style:{minHeight:"calc(100vh - ".concat(o,"px)")},children:[Object(b.jsx)("div",{className:"banner text-shadow-white",style:{backgroundImage:"url(".concat(i,")")},children:c}),Object(b.jsx)("div",{className:"list-items",children:n.map((function(e,t){return Object(b.jsx)(C,{data:e,history:A,logHistory:a},t)}))})]})}}]),A}(a.Component),H=(A(40),function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){return Object(l.a)(this,A),t.apply(this,arguments)}return Object(d.a)(A,[{key:"componentDidMount",value:function(){window.scrollTo({top:0})}},{key:"render",value:function(){var e=this.props.offset,t=e.header+e.footer+e.margin;return Object(b.jsx)("div",{className:"About",style:{minHeight:"calc(100vh - ".concat(t,"px)")},children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("div",{className:"banner text-shadow-white",children:"About me"}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("h1",{children:["I am ",Object(b.jsx)("span",{className:"gold",children:"Sherly R. Jao"}),", I will be a ",Object(b.jsx)("span",{className:"gold",children:"Software Engineer"}),"."]}),Object(b.jsx)("p",{children:"I was born on Minglanilla, Cebu and was raised in the City of Naga down south"}),Object(b.jsx)("p",{children:"Since I was young, I wanted to follow my father and become a Software Engineer"}),Object(b.jsx)("p",{children:"As of now I have few artworks commissioned and I seek to incorporate my artistic skills to my future potential web development career."}),Object(b.jsx)("p",{children:"and I am ARMY"})]})]})})}}]),A}(a.Component)),T=(A(41),A(42),A.p+"static/media/under-construction.506bfbfa.png"),W=function(e){Object(h.a)(A,e);var t=Object(u.a)(A);function A(){return Object(l.a)(this,A),t.apply(this,arguments)}return Object(d.a)(A,[{key:"render",value:function(){var e=this.props,t=e.history,A=e.isUnderConstruction,a=e.title,n=e.setMenuItem;return Object(b.jsxs)("div",{className:"PageNotFound",children:[a&&Object(b.jsx)("span",{className:"title",children:a}),Object(b.jsx)("span",{className:"".concat(A?"font-smaller ":"","bybyn"),children:A?"\u170a\u170e\u1712\u1703\u1714 \u170e\u1705\u1714 \u1709\u1713\u1711\u1713\u1708\u1714":"\u1707\u1712\u170e\u1712 \u170b\u1703\u1712\u1706"}),Object(b.jsx)("span",{className:"message ".concat(A?"":"four-o-four"),children:A?Object(b.jsx)("img",{height:175,src:T,alt:"Under Construction"}):"404"}),Object(b.jsx)("span",{className:"description-one",children:A?"This Page Is Under Construction":"Oops! This Page Could Not Be Found"}),Object(b.jsx)("span",{className:"description-two",children:A?"Please revisit this page some time soon.":"Sorry but the page you are looking for does not exist, have been removed, renamed or temporarily unavailable!"}),t&&Object(b.jsx)("button",{onClick:function(){"function"===typeof n?(t.push("/"),n("home")):window.location="/"},children:"Go To Homepage"})]})}}]),A}(a.Component);A(43);function I(e){var t=Object(r.g)().id,A=Object(r.f)(),n=e.data.filter((function(e){return e.id===t}));n=n.length?n[0]:null;var c=e.offset,i=e.setMenuItem,o=c.header+c.footer+c.margin,s=Object(b.jsx)("div",{className:"subject-logo",style:{backgroundImage:"url(".concat(n&&n.image?n.image:N,")")}}),l=A.location.pathname.split("/");l.pop(),l=l.join("/");var d=Object(b.jsx)("button",{style:{marginTop:"35px"},className:"go-back",onClick:function(){A.push("".concat(l,"#").concat(n.id))},children:"\u2190 ".concat(j(l.replace(/^\//,"")))});return Object(a.useEffect)((function(){window.scrollTo({top:0})})),n?Object(b.jsxs)("div",{className:"Details",style:{minHeight:"calc(100vh - ".concat(o,"px)")},children:[Object(b.jsxs)("div",{className:"logo-wrapper",children:[n.subject.website?Object(b.jsx)("a",{href:n.subject.website,target:"_blank",rel:"noreferrer",children:s}):s,d]}),Object(b.jsxs)("div",{className:"subject-details",children:[Object(b.jsx)("h1",{className:"topic-title",children:n.subject.name}),n.subject.address&&Object(b.jsx)("h5",{className:"topic-label",children:n.subject.address}),n.details]})]}):Object(b.jsx)(W,{setMenuItem:i,title:"".concat(A.location.pathname),history:A,isUnderConstruction:!0})}var X=A.p+"static/media/magda.503582b0.png",V=A.p+"static/media/mediaCampaign.cf9f2f6c.jpg",U=A.p+"static/media/communityProblem.4963203a.mp4",K=[{id:"media-campaign",subject:{name:"Community Problem"},title:"Media Campaign",image:V,details:Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h3",{className:"topic-label",children:"Media Campaign"}),Object(b.jsx)("h4",{className:"label",children:"A 2 minute video about a community problem we continue to face today."}),Object(b.jsxs)("video",{controls:!0,style:{marginTop:"14px"},children:[Object(b.jsx)("source",{src:U,type:"video/mp4"}),"Your browser does not support the video tag."]})]})},{id:"blog-post",subject:{name:"OPM video"},title:"Magda",image:X,details:Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h3",{className:"topic-label",children:"Magda"}),Object(b.jsx)("p",{children:"Magda by Gloc 9 featuring Rico Blanco is about a boy named Ernesto who has a female friend who is beautiful and loved by many. The title is Magda which is short for the name of the girl Magdalena."}),Object(b.jsx)("p",{children:"Their story begins with their peaceful days in the barrio until it was cut short when Magdalena meets a man from Manila who takes her away."}),Object(b.jsx)("p",{children:"Gone is the innocent maiden of the barrio as she is deceived and led astray. She becomes a lady of the night, helplessly and hopelessly trapped in the cruel life."}),Object(b.jsx)("p",{children:"The song is deep with sensitive topics discussed which opens our eyes to the different lifestyles and different circumstances that leads to who they are in the present"}),Object(b.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/Qp68KeRK90Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}],R=A.p+"static/media/projects.8ca1fe88.jpg";function Z(e){var t=Object(r.f)(),A=Object(a.useState)(t.location.pathname),c=Object(o.a)(A,2),i=c[0],s=c[1],l=Object(a.useState)("/"===window.location.pathname?"home":window.location.pathname.replace(/^\//,"")),d=Object(o.a)(l,2),h=d[0],u=d[1],j=Object(a.useState)({header:0,footer:0,margin:0}),m=Object(o.a)(j,2),f=m[0],g=m[1],v=n.a.createRef(),O=n.a.createRef();return Object(a.useEffect)((function(){console.log("[ContentContainer] [useEffect] componentDidMount")}),[]),Object(a.useEffect)((function(){var e=t.location.pathname;console.log("[ContentContainer] [useEffect] [componentDidUpdate] history.location.pathname:",e);var A={header:v.clientHeight,footer:O.clientHeight,margin:14};g(A),s(e),window.location.pathname!==e&&t.push(window.location.pathname);var a=e.replace(/^\//,"").split("/")[0];""===a?u("home"):h!==a&&u(a)}),[O.clientHeight,v.clientHeight,t,t.location.pathname,h]),Object(b.jsxs)("div",{className:"ContentContainer",style:{marginTop:"".concat(f.header-f.margin,"px"),minHeight:"calc(100vh - ".concat(f.header+f.margin,"px)")},children:[Object(b.jsx)(p,{theme:e.theme,onThemeChange:e.onThemeChange,history:t,setRef:function(e){return v=e},onClick:function(e){return u(e.currentTarget.getAttribute("data-value"))},setMenuItem:u,selected:h}),Object(b.jsx)("span",{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(w,{})}),Object(b.jsx)(r.a,{path:"/about",children:Object(b.jsx)(H,{offset:f})}),Object(b.jsx)(r.a,{exact:!0,path:"/projects/:id",children:Object(b.jsx)(I,{data:K,setMenuItem:u,offset:f})}),Object(b.jsx)(r.a,{exact:!0,path:"/projects",children:Object(b.jsx)(k,{logHistory:function(e){console.log("[logHistory] history.location.pathname:",t.location.pathname),s(t.location.pathname)},offset:f,history:t,data:K,banner:R,title:"Projects"})}),Object(b.jsx)(r.a,{path:"*",children:Object(b.jsx)(W,{setMenuItem:u,title:t.location.pathname,history:t})})]}),Object(b.jsx)(q,{currentPath:i,setRef:function(e){return O=e}})]})}A(44);var L=function(){var e=Object(a.useState)(localStorage.getItem("SIM_PORTFOLIO_THEME")||"dark"),t=Object(o.a)(e,2),A=t[0],n=t[1];return Object(b.jsx)("div",{className:"App ".concat(A),children:Object(b.jsx)(s.a,{children:Object(b.jsx)(Z,{theme:A,onThemeChange:function(e){var t=e.target.value||"light";n(t),localStorage.setItem("SIM_PORTFOLIO_THEME",t)}})})})},S=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,46)).then((function(t){var A=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;A(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.134325a5.chunk.js.map