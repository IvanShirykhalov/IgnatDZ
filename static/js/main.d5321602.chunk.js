(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={chat:"Message_chat__1U1fk",message:"Message_message__1PPVD",name:"Message_name__1Ck-u",message_content:"Message_message_content__1Gdrt",time:"Message_time__2Gm6k"}},function(e,t,n){e.exports={link:"Header_link__3UTbI",block:"Header_block__1pYaZ",header:"Header_header__25p6J"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__waQSh",errorInput:"SuperInputText_errorInput__2RwjC",error:"SuperInputText_error__112XO",input:"SuperInputText_input__1xpAJ"}},,function(e,t,n){e.exports={column:"HW4_column__XoVxa",testSpanError:"HW4_testSpanError__1iGtL"}},function(e,t,n){e.exports={default:"SuperButton_default__1Qivt",red:"SuperButton_red__OwAWj",blink:"SuperButton_blink__Qyb1a"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__20yB7",spanClassName:"SuperCheckbox_spanClassName__2zs85"}},,function(e,t,n){e.exports={App:"App_App__1dD3o"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__2PBwU",error:"Greeting_error__1hfdX"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__2vkfv"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),s=n.n(r),o=(n(26),n(18)),i=n.n(o),j=n(7),l=n(0);var u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=n(9),d=n.n(b);var O=function(e){return Object(l.jsxs)("div",{className:d.a.chat,children:[Object(l.jsx)("img",{alt:"",src:e.avatar}),Object(l.jsxs)("div",{className:d.a.message,children:[Object(l.jsx)("div",{className:d.a.name,children:e.name}),Object(l.jsx)("div",{className:d.a.message_content,children:e.message}),Object(l.jsx)("div",{className:d.a.time,children:e.time})]})]})},h="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRyIaS6SOCFK4pIWE0gf7WcvgCLmIN5R1AIt-xBuIMQq7_kxdHfz0MrB7nLz3eap4udOZSLe5xXwVEa9wGrnys",x="mr.Gray",p="Hello, my dear friend",m="22:00";var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(O,{avatar:h,name:x,message:p,time:m})})},v=n(3);var _=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),Object(l.jsxs)("span",{children:[e.affair.name,"  -  "]}),Object(l.jsx)("span",{children:e.affair.priority})]})};var g=function(e){var t=e.data.map((function(t){return Object(l.jsx)(_,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(c.useState)(C),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(v.a)(r,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(g,{data:j,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},N=n(21),y=n(19),S=n.n(y),w=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=S.a.error;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:s}),Object(l.jsx)("span",{children:a}),Object(l.jsx)("button",{onClick:c,children:"add"}),Object(l.jsx)("span",{children:r})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(v.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),j=Object(v.a)(i,2),u=j[0],b=j[1],d=t.length;return Object(l.jsx)(w,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:function(){if(!s.trim())return b("Name is required!");n(s),alert("Hello ".concat(s," !")),o(""),b("")},error:u,totalUsers:d})},T=n(30);var A=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};a([].concat(Object(N.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},E=n(4),B=n(6),F=n(12),P=n.n(F),H=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(o||""),u="".concat(P.a.errorInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:u},i)),r&&Object(l.jsx)("span",{className:j,children:r})]})},M=n(14),U=n.n(M),G=n(15),W=n.n(G),J=function(e){var t=e.red,n=e.className,c=Object(B.a)(e,["red","className"]),a="".concat(t?W.a.red:W.a.default," ").concat(n);return Object(l.jsx)("button",Object(E.a)({className:a},c))},D=n(16),L=n.n(D),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(c||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(l.jsx)("span",{className:L.a.spanClassName,children:a})]})};var z=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=n?"":"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),i=Object(v.a)(o,2),j=i[0],u=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:U.a.column,children:[Object(l.jsx)(H,{value:n,onChangeText:a,onEnter:s,error:r}),Object(l.jsx)(H,{className:U.a.blue}),Object(l.jsx)(J,{children:"default"}),Object(l.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(J,{disabled:!0,children:"disabled"}),Object(l.jsx)(X,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(X,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},K=n(20),Q=n.n(K),R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(v.a)(s,2),i=o[0],j=o[1],u=a||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(B.a)(u,["children","onDoubleClick","className"]),x="".concat(Q.a.span," ").concat(O||"");return Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(H,Object(E.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(l.jsxs)("span",Object(E.a)(Object(E.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:["\u27b4",b||r.value," "]}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function V(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}q("test",{x:"A",y:1});V("test",{x:"",y:0});var Z=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(R,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(J,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(l.jsx)(J,{onClick:function(){a(V("editable-span-value",""))},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},Y=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(B.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(l.jsx)("select",Object(E.a)(Object(E.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},$=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){a&&a(e),r&&r(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(E.a)({type:"radio",name:t,value:e,checked:e===c,onChange:o},s)),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},ee=["x","y","z"];var te=function(){var e=Object(c.useState)(ee[1]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(Y,{options:ee,value:n,onChangeOption:a})}),Object(l.jsx)("div",{children:Object(l.jsx)($,{name:"radio",options:ee,value:n,onChangeOption:a})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var ne=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(k,{}),Object(l.jsx)(A,{}),Object(l.jsx)(z,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(te,{})]})},ce=n(2),ae="/pre-junior",re="/junior",se="/plus-junior";function oe(){return Object(l.jsx)("div",{children:Object(l.jsxs)(ce.d,{children:[Object(l.jsx)(ce.b,{path:"/",element:Object(l.jsx)(ce.a,{to:ae})}),Object(l.jsx)(ce.b,{path:ae,element:Object(l.jsx)(ne,{})}),Object(l.jsx)(ce.b,{path:re}),Object(l.jsx)(ce.b,{path:se}),Object(l.jsx)(ce.b,{path:"/error",element:Object(l.jsx)(u,{})})]})})}var ie=n(10),je=n.n(ie);function le(){return Object(l.jsxs)("div",{className:je.a.header,children:[Object(l.jsx)(j.b,{to:ae,className:je.a.link,children:"pre-junior"}),Object(l.jsx)(j.b,{to:re,className:je.a.link,children:"junior"}),Object(l.jsx)(j.b,{to:se,className:je.a.link,children:"junior+"}),Object(l.jsx)("div",{className:je.a.block})]})}var ue=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(le,{}),Object(l.jsx)(oe,{})]})})};var be=function(){return Object(l.jsxs)("div",{className:i.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.d5321602.chunk.js.map