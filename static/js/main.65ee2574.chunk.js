(this.webpackJsonptime_app=this.webpackJsonptime_app||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){},198:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(61),i=a.n(n),r=(a(188),a(97),a(63)),s=a(17),o=(a(189),a(6));var l=function(){var e=Object(c.useState)(!1);return e.click,e.setClick,Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsxs)(r.b,{to:"/",className:"navbar-logo",children:["Time ",Object(o.jsx)("i",{className:"fab fa-typo3"})]}),Object(o.jsx)("ul",{className:"nav-menu",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)(r.b,{to:"/",className:"nav-links",children:[Object(o.jsx)("i",{className:"far fa-user-circle"}),"   User_Name"]})})})]})})})},j=a(83),d=a(84),h=a(85),u=a(91),p=(a(198),a(64)),x=a(337),b=a(339),v=a(179),m=[{name:"Sleep",value:600},{name:"Work",value:300},{name:"Sports",value:100},{name:"Entertainment",value:100}],O=function(e){var t=Math.PI/180,a=e.cx,c=e.cy,n=e.midAngle,i=e.innerRadius,r=e.outerRadius,s=e.startAngle,l=e.endAngle,j=e.fill,d=e.payload,h=e.percent,u=(e.value,Math.sin(-t*n)),x=Math.cos(-t*n),b=a+(r+10)*x,v=c+(r+10)*u,m=a+(r+30)*x,O=c+(r+30)*u,f=m+22*(x>=0?1:-1),g=O,y=x>=0?"start":"end";return Object(o.jsxs)("g",{children:[Object(o.jsx)("text",{x:a,y:c,dy:8,textAnchor:"middle",fill:"#fff",fontSize:"30",children:d.name}),Object(o.jsx)(p.a,{cx:a,cy:c,innerRadius:i,outerRadius:r,startAngle:s,endAngle:l,fill:j}),Object(o.jsx)(p.a,{cx:a,cy:c,startAngle:s,endAngle:l,innerRadius:r+6,outerRadius:r+10,fill:j}),Object(o.jsx)("path",{d:"M".concat(b,",").concat(v,"L").concat(m,",").concat(O,"L").concat(f,",").concat(g),stroke:j,fill:"none"}),Object(o.jsx)("circle",{cx:f,cy:g,r:2,fill:j,stroke:"none"}),Object(o.jsx)("text",{x:f+12*(x>=0?1:-1),y:g,textAnchor:y,fill:"#fff",children:"".concat(d.name)}),Object(o.jsx)("text",{x:f+12*(x>=0?1:-1),y:g,dy:18,textAnchor:y,fill:"#999",children:"( ".concat((100*h).toFixed(2),"%)")})]})},f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={activeIndex:0},e.onPieEnter=function(t,a){e.setState({activeIndex:a})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsx)(x.a,{width:"100%",height:"60%",children:Object(o.jsx)(b.a,{width:400,height:400,children:Object(o.jsx)(v.a,{activeIndex:this.state.activeIndex,activeShape:O,data:m,cx:"50%",cy:"50%",innerRadius:112,outerRadius:150,fill:"#8884d8",dataKey:"value",onMouseEnter:this.onPieEnter})})})}}]),a}(c.PureComponent);f.demoUrl="https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";var g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e;if(null!=this.props.image){var t="/time_app"+this.props.image;console.log(t),e=Object(o.jsx)("img",{src:t,alt:""})}else if(null!=this.props.video){var a="/time_app"+this.props.video;e=Object(o.jsx)("video",{src:a,autoPlay:!0,loop:!0,muted:!0})}else e=Object(o.jsx)("img",{src:"/img-0.jpg",alt:""});var c=Object(o.jsx)(o.Fragment,{});return null!=this.props.chart&&"pie"==this.props.chart&&(c=Object(o.jsx)(f,{})),Object(o.jsxs)("div",{className:"hero-container",children:[e,Object(o.jsx)("h1",{className:"entry-title",children:this.props.title}),c]})}}]),a}(c.Component);var y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{title:"Your Week So Far..",paragraph:"there should be a pie graph here",video:"/videos/video-2.mp4",chart:"pie"}),Object(o.jsx)(g,{title:"You Spend Most of Your Time On",paragraph:"An rotated barchart",video:"/videos/video-2.mp4"}),Object(o.jsx)(g,{title:"You Achieved % of Your Goal",video:"/videos/video-2.mp4"}),Object(o.jsx)(g,{title:"You Need To Do More",paragraph:"List of customized activities",video:"/videos/video-2.mp4"})]})};var A=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(s.c,{children:Object(o.jsx)(s.a,{path:"/time_app/",exact:!0,component:y})})]})})};i.a.render(Object(o.jsx)(A,{}),document.getElementById("root"))},97:function(e,t,a){}},[[332,1,2]]]);
//# sourceMappingURL=main.65ee2574.chunk.js.map