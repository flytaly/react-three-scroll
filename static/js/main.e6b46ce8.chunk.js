(this["webpackJsonpreact-three-scroll"]=this["webpackJsonpreact-three-scroll"]||[]).push([[0],{22:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),i=a(4),l={sections:3,pages:3,zoom:75,top:Object(r.createRef)(),images:["/img1.jpg","/img2.jpg","/img3.jpg"]},s=(a(26),a(3)),m=a(2),f=a(9),u=a(6),p=a.n(u),h=Object(r.createContext)(0);function g(e){var t=e.children,a=e.offset,c=e.factor,o=Object(f.a)(e,["children","offset","factor"]),s=E(),m=s.offset,u=s.sectionHeight,g=Object(r.useRef)();return a=void 0!==a?a:m,Object(i.c)((function(){var e=g.current.position.y,t=l.top.current;g.current.position.y=p()(e,t/l.zoom*c,.1)})),n.a.createElement(h.Provider,{value:a},n.a.createElement("group",Object.assign({},o,{position:[0,-u*a*c,0]}),n.a.createElement("group",{ref:g},t)))}function E(){var e=l.sections,t=l.pages,a=l.zoom,n=Object(i.e)(),c=n.size,o=n.viewport,s=Object(r.useContext)(h),m=o.width,f=o.height,u=m/a,p=f/a,g=c.width<700;return{viewport:o,offset:s,viewportWidth:m,viewportHeight:f,canvasWidth:u,canvasHeight:p,mobile:g,margin:u*(g?.2:.1),contentMaxWidth:u*(g?.8:.6),sectionHeight:p*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var d=function(e){var t=e.color,a=void 0===t?"white":t,c=e.map,o=Object(f.a)(e,["color","map"]),s=E(),m=s.viewportHeight,u=s.offsetFactor,h=Object(r.useRef)(),g=l.top.current;return Object(i.c)((function(){var e=l.pages,t=l.top;h.current.scale=p()(h.current.scale,u-t.current/((e-1)*m),.1),h.current.shift=p()(h.current.shift,(t.current-g)/150,.1),g=t.current})),n.a.createElement("mesh",o,n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1,32,32]}),n.a.createElement("meshBasicMaterial",{ref:h,attach:"material",color:a,map:c}))};function v(e){var t=e.color,a=void 0===t?"black":t,r=Object(f.a)(e,["color"]);return n.a.createElement("mesh",r,n.a.createElement("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),n.a.createElement("meshNormalMaterial",{attach:"material",color:a}))}var b=function(e){var t=e.position,a=void 0===t?[0,0,2]:t,c=Object(r.useRef)(),o=E(),s=o.viewportHeight,f=o.contentMaxWidth,u=o.canvasHeight;return Object(i.c)((function(){var e=l.top.current,t=c.current.rotation.z,a=(l.pages-1)*s,r=e/a*2*Math.PI,n=p()(t,r,.1),o=f/2,i=-o,m=e/s,h=Math.floor(m);c.current.position.x=h%2===0?p()(o,i,m-h):p()(i,o,m-h),c.current.position.y=p()(u/2-1,-u/2+1,e/a),c.current.rotation.x=n,c.current.rotation.z=n})),n.a.createElement("group",{ref:c,scale:[2,2,2],position:a},n.a.createElement(v,{scale:[.3,.3,.3],rotation:new m.Euler(.5,.5,0)}))};function j(e){var t=e.left,a=e.children,r=e.map,c=E(),o=c.contentMaxWidth,i=(c.canvasWidth-o-c.margin)/2;return n.a.createElement("group",{position:[i*(t?-1:1),0,0]},n.a.createElement(d,{scale:[o,o/1.75,1],color:"#bfe2ca",map:r}),a)}function O(){var e=E().contentMaxWidth;return n.a.createElement(d,{scale:[100,e,1],rotation:[0,0,Math.PI/4],position:[0,0,-1],color:"#555555"})}function x(){var e=Object(i.d)(m.TextureLoader,l.images).map((function(e){return e.minFilter=m.LinearFilter,e})),t=Object(s.a)(e,3),a=t[0],r=t[1],c=t[2],o=E(),f=o.contentMaxWidth,u=o.canvasHeight,p=o.mobile,h=f*l.zoom;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{factor:0,offset:0},n.a.createElement(b,{position:[f/2,u/2-1,2]})),n.a.createElement(g,{factor:1.5,offset:0},n.a.createElement(j,{left:!0,map:a},n.a.createElement(i.b,{style:{width:h/(p?1:2),textAlign:"left"},position:[-f/2,-f/2/1.75-.4,1]},"Image 1 text. DOM render"))),n.a.createElement(g,{factor:2,offset:1},n.a.createElement(j,{map:r,style:{zIndex:100}},n.a.createElement(i.b,{prepend:!1,style:{zIndex:100,width:h/(p?1:2),textAlign:"right"},position:[p?-f/2:0,-f/2/1.75-.4,1]},"Image 2 text. DOM render"))),n.a.createElement(g,{factor:-1,offset:1},n.a.createElement(O,null)),n.a.createElement(g,{factor:1.5,offset:2},n.a.createElement(j,{left:!0,map:c},n.a.createElement(i.b,{prepend:!0,style:{width:h/(p?1:2),textAlign:"left"},position:[-f/2,-f/2/1.75-.4,1]},"Image 3 text. DOM render"))))}function y(){var e=Object(r.useRef)();return Object(i.c)((function(){return e.current.material.opacity=p()(e.current.material.opacity,0,.025)})),n.a.createElement("mesh",{ref:e,position:[0,0,200],scale:[100,100,1]},n.a.createElement("planeBufferGeometry",{attach:"geometry"}),n.a.createElement("meshBasicMaterial",{attach:"material",color:"#dfdfdf",transparent:!0}))}var w=function(){var e=Object(r.useRef)(),t=function(e){return l.top.current=e.target.scrollTop};return Object(r.useEffect)((function(){t({target:e.current})}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{className:"canvas",orthographic:!0,camera:{zoom:l.zoom,position:[0,0,500]}},n.a.createElement(r.Suspense,{fallback:n.a.createElement(i.b,{center:!0,className:"loading",children:"Loading..."})},n.a.createElement(x,null),n.a.createElement(y,null))),n.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},n.a.createElement("div",{style:{height:"".concat(100*l.pages,"vh")}})))};o.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e6b46ce8.chunk.js.map