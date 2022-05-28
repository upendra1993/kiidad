"use strict";(self.webpackChunkkiidad=self.webpackChunkkiidad||[]).push([[2197],{2197:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var r,o=n(2791),a=["title","titleId"];function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){var n=t.title,l=t.titleId,c=s(t,a);return o.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-stopwatch",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":l},c),n?o.createElement("title",{id:l},n):null,r||(r=o.createElement("path",{fillRule:"evenodd",d:"M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07A7.001 7.001 0 0 1 8 16 7 7 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3zm0 2.1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 0 1 .5-.5z"})))}var c=o.forwardRef(l),u=(n.p,n(1523)),f=n(2007),p=n.n(f);function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function w(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",a=r?r[3]:"",i=r?r[2]:n,s=i.length>=e?i:(g(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(o).concat(s).concat(a)}var T={daysInHours:!1,zeroPadTime:2};function O(t,e){var n=t.days,r=t.hours,o=t.minutes,a=t.seconds,i=Object.assign({},T,e),s=i.daysInHours,l=i.zeroPadTime,c=i.zeroPadDays,u=void 0===c?l:c,f=s?D(r+24*n,l):D(r,Math.min(2,l));return{days:s?"":D(n,u),hours:f,minutes:D(o,Math.min(2,l)),seconds:D(a,Math.min(2,l))}}var S=function(t){function e(){var t;return d(this,e),(t=w(this,y(e).apply(this,arguments))).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return v(e,t),h(e,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?o.cloneElement(this.props.children,{count:this.state.count}):null}}]),e}(o.Component);S.propTypes={count:p().number,children:p().element,onComplete:p().func};var k=function(t){function e(t){var n;return d(this,e),(n=w(this,y(e).call(this,t))).mounted=!1,n.legacyMode=!1,n.legacyCountdownRef=o.createRef(),n.tick=function(){var t=n.props.onTick,e=n.calcTimeDelta();n.setTimeDeltaState(e),t&&e.total>0&&t(e)},n.start=function(){n.setState((function(t){var e=t.offsetStart;return{offsetStart:0,offsetTime:t.offsetTime+(e?Date.now()-e:0)}}),(function(){var t=n.calcTimeDelta();n.setTimeDeltaState(t),n.props.onStart&&n.props.onStart(t),n.props.controlled||(n.clearInterval(),n.interval=window.setInterval(n.tick,n.props.intervalDelay))}))},n.pause=function(){n.clearInterval(),n.setState({offsetStart:n.calcOffsetStart()},(function(){var t=n.calcTimeDelta();n.setTimeDeltaState(t),n.props.onPause&&n.props.onPause(t)}))},n.isPaused=function(){return n.state.offsetStart>0},n.isCompleted=function(){return n.state.timeDelta.completed},t.date?n.state={timeDelta:n.calcTimeDelta(),offsetStart:t.autoStart?0:n.calcOffsetStart(),offsetTime:0}:n.legacyMode=!0,n}return v(e,t),h(e,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.autoStart&&this.start(),this.props.onMount&&this.props.onMount(this.calcTimeDelta()))}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.shallowCompareProps(this.props,t)||this.setTimeDeltaState(this.calcTimeDelta())}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearInterval())}},{key:"calcTimeDelta",value:function(){var t=this.props;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,a=n.precision,i=void 0===a?0:a,s=n.controlled,l=void 0!==s&&s,c=n.offsetTime,u=void 0===c?0:c;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,l||(e+=u);var f=Math.round(1e3*parseFloat((Math.max(0,l?e:e-o())/1e3).toFixed(Math.max(0,Math.min(20,i))))),p=f/1e3;return{total:f,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:f<=0}}(t.date,{now:t.now,precision:t.precision,controlled:t.controlled,offsetTime:this.state?this.state.offsetTime:0})}},{key:"calcOffsetStart",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearInterval",value:function(){window.clearInterval(this.interval)}},{key:"shallowCompareProps",value:function(t,e){var n=Object.keys(t);return n.length===Object.keys(e).length&&!n.some((function(n){var r=t[n],o=e[n];return!e.hasOwnProperty(n)||!(r===o||r!==r&&o!==o)}))}},{key:"setTimeDeltaState",value:function(t){var e,n=this;if(!this.state.timeDelta.completed&&t.completed&&(this.clearInterval(),e=function(){return n.props.onComplete&&n.props.onComplete(t)}),this.mounted)return this.setState({timeDelta:t},e)}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,isPaused:this.isPaused,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign({},o,{api:this.getApi(),props:this.props,formatted:O(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return o.createElement(S,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var a=this.props,i=a.children,s=a.renderer,l=this.getRenderProps();if(s)return s(l);if(i&&this.state.timeDelta.completed)return o.cloneElement(i,{countdown:l});var c=l.formatted,u=c.days,f=c.hours,p=c.minutes,d=c.seconds;return o.createElement("span",null,u,u?":":"",f,":",p,":",d)}}]),e}(o.Component);k.defaultProps=Object.assign({},T,{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),k.propTypes={date:p().oneOfType([p().instanceOf(Date),p().string,p().number]),daysInHours:p().bool,zeroPadTime:p().number,zeroPadDays:p().number,controlled:p().bool,intervalDelay:p().number,precision:p().number,autoStart:p().bool,children:p().element,renderer:p().func,now:p().func,onMount:p().func,onStart:p().func,onPause:p().func,onTick:p().func,onComplete:p().func};var P=k,C=function(){return o.createElement("span",null,"Deals End!")},M=function(t){var e=t.hours,n=t.minutes,r=t.seconds;return t.completed?o.createElement(C,null):o.createElement("span",{className:"text-muted small"},e,":",n,":",r," Left")},E=function(t){return o.createElement("div",{className:"card"},o.createElement("div",{className:"card-body"},o.createElement("h5",{className:"card-title pb-3 border-bottom"},t.title," ",o.createElement(c,{className:"text-primary"})," ",o.createElement(P,{date:t.endDate,renderer:M}),o.createElement("span",{className:"float-right"},o.createElement(u.rU,{to:t.to,className:"btn btn-sm btn-outline-primary"},"View All"))),t.children))}}}]);
//# sourceMappingURL=2197.fb23e1b4.chunk.js.map