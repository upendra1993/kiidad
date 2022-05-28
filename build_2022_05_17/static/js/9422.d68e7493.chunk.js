"use strict";(self.webpackChunkkiidad=self.webpackChunkkiidad||[]).push([[9422],{9386:function(e,t,n){n.d(t,{r:function(){return u}});var r,a=n(2791),l=["title","titleId"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){var n=e.title,c=e.titleId,u=o(e,l);return a.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-shield-lock-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},u),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{fillRule:"evenodd",d:"M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm.5 7.415a1.5 1.5 0 1 0-1 0l-.385 1.99a.5.5 0 0 0 .491.595h.788a.5.5 0 0 0 .49-.595L8.5 7.915z"})))}var u=a.forwardRef(c);n.p},9422:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(2791),l=n(6139),i=n(1232),o=n(7781),c=n(1283),u=n(4092),s=n(9386),m=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){var n=e.title,l=e.titleId,i=f(e,m);return a.createElement("svg",d({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-key-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),n?a.createElement("title",{id:l},n):null,r||(r=a.createElement("path",{fillRule:"evenodd",d:"M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})))}var p=a.forwardRef(b),v=(n.p,(0,o.qC)((0,i.Z)({form:"changepassword"}))((function(e){var t=e.handleSubmit,n=e.submitting,r=e.onSubmit,i=e.submitFailed;return a.createElement("div",{className:"card border-info"},a.createElement("h6",{className:"card-header bg-info text-white"},a.createElement(p,null)," Change Password"),a.createElement("div",{className:"card-body"},a.createElement("form",{onSubmit:t(r),className:"needs-validation ".concat(i?"was-validated":""),noValidate:!0},a.createElement(l.Z,{name:"currentPassword",type:"password",label:"Current Password",component:c.Z,placeholder:"******",icon:s.r,validate:[u.C1,u.LV,u.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),a.createElement(l.Z,{name:"password",type:"password",label:"New Password",component:c.Z,placeholder:"******",icon:s.r,validate:[u.C1,u.LV,u.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),a.createElement(l.Z,{name:"confirmPassword",type:"password",label:"Confirm New password",component:c.Z,placeholder:"******",icon:s.r,validate:[u.C1,u.LV,u.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),a.createElement("button",{type:"submit",className:"btn btn-info btn-block",disabled:n},"Submit"))))})))},1283:function(e,t,n){var r=n(2791);t.Z=function(e){var t=e.input,n=e.label,a=e.tips,l=e.required,i=e.meta,o=i.touched,c=i.error,u=i.warning,s=e.icon;return r.createElement("div",{className:"form-group ".concat(e.className)},n&&r.createElement("label",{className:"form-label ".concat(l?"required":""),htmlFor:t.name},n),r.createElement("div",{className:"input-group"},r.createElement("span",{className:"input-group-text"},r.createElement(s,null)),r.createElement("input",Object.assign({},t,e,{id:t.name,className:"form-control"})),o&&(c&&r.createElement("div",{className:"invalid-feedback"},c)||u&&r.createElement("span",null,u))),a&&r.createElement("div",{className:"form-text"},a))}},4092:function(e,t,n){n.d(t,{$d:function(){return i},C1:function(){return r},Do:function(){return v},LV:function(){return o},Nb:function(){return d},Py:function(){return c},SB:function(){return a},_Y:function(){return f},fO:function(){return m},mG:function(){return u},u2:function(){return h}});var r=function(e){return e||"number"==typeof e&&0===e?void 0:"This field is required"},a=function(e){return e&&!/^[0-9]*$/.test(e)?"Must be a number":void 0},l=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},i=(l(6),l(15)),o=l(20),c=l(50),u=(l(150),l(500),l(1e3)),s=(l(800),function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}}),m=s(5),d=(s(6),s(8)),f=s(4),b=function(e){return function(t){return t&&t>e?"Must be at least ".concat(e," or less"):void 0}},p=(b(999999999999999),b(2147483647),b(127),b(9),function(e){return function(t){return void 0!==t&&null!==t&&""!==t&&t<e?"Must be at least ".concat(e):void 0}}),v=(p(9999),p(10),p(0),function(e){return e&&!/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(e)?"Invalid email address":void 0}),h=function(e){return e&&!/^[a-zA-Z\s]*$/i.test(e)?"Invalid name":void 0}}}]);
//# sourceMappingURL=9422.d68e7493.chunk.js.map