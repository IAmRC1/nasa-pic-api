(this["webpackJsonpnasa-pic-api"]=this["webpackJsonpnasa-pic-api"]||[]).push([[0],{20:function(e,a,t){e.exports=t(32)},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),l=t.n(r),s=t(7),o=t(5);function m(){return c.a.createElement("div",{className:"home"},c.a.createElement(s.b,{className:"home-link",to:"/nasaphoto"},"See into the stars!"))}var i=t(12),u=t.n(i),p=t(19),d=t(13);function E(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement(s.b,{className:"link",to:"/home"},"Take Me Home")))}var f="kt7ORKopOufpMdFLtx6rq3ug8rtBGUv8mVf3aIPz";function h(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),o=s[0],m=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(f));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return t?c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:"nasa-photo"},"image"===t.media_type?c.a.createElement("img",{src:t.url,alt:t.title,className:"photo"}):c.a.createElement("iframe",{title:"space-video",src:t.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),c.a.createElement("div",null,c.a.createElement("h1",null,t.title),c.a.createElement("p",{className:"date"},t.date),c.a.createElement("p",{className:"explanation"},t.explanation.slice(0,600),""===o?c.a.createElement("span",{id:"rm_btn",className:"read-more",onClick:function(){return function(e){document.getElementById("rm_btn").classList.add("d-none");var a=function(e){var a=e.lastIndexOf(".");return e.slice(600,a+1)}(e);m(a)}(t.explanation)}},"...Read More"):o)))):c.a.createElement("div",null)}t(31);function v(){return c.a.createElement("div",{className:"app"},c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,component:m,path:"/home"}),c.a.createElement(o.a,{component:h,path:"/nasaphoto"}))))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e032a0d1.chunk.js.map