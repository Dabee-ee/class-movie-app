(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,r){t.exports=r(66)},52:function(t,e,r){},61:function(t,e,r){},62:function(t,e,r){},63:function(t,e,r){},64:function(t,e,r){},65:function(t,e,r){},66:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(25),i=r.n(o),c=r(7),s=r(1),l=r(26),u=r(10),m=r(11),h=r(13),f=r(12),p=r(27),v=r.n(p);r(52);var d=function(t){var e=t.id,r=t.year,n=t.title,o=t.summary,i=t.poster,s=t.genres,l=t.background;return a.a.createElement("div",{className:"movie"},a.a.createElement(c.b,{to:{pathname:"/movie/".concat(e),state:{id:e,year:r,title:n,summary:o,poster:i,genres:s,background:l}}},a.a.createElement("img",{src:i,alt:n,title:n}),a.a.createElement("div",{className:"movie__data"},a.a.createElement("h3",{className:"movie__title"},n),a.a.createElement("h5",{className:"movie__year"},r),a.a.createElement("ul",{className:"movie__genres"},s.map(function(t,e){return a.a.createElement("li",{key:e,className:"genres__genre"},t)})),a.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))};r(61);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var u={};function m(){}function h(){}function f(){}var p={};c(p,a,function(){return this});var v=Object.getPrototypeOf,d=v&&v(v(N([])));d&&d!==e&&r.call(d,a)&&(p=d);var g=f.prototype=m.prototype=Object.create(p);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?e.resolve(m.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(m).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=f,c(g,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,o,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var g=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isLoading:!0,movies:[]},t.getMovies=Object(l.a)(y().mark(function e(){var r,n;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:r=e.sent,n=r.data.data.movies,console.log(n),t.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}},e)})),t}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,r=t.movies;return a.a.createElement("section",{className:"container"},e?a.a.createElement("div",{className:"loader"},a.a.createElement("span",{className:"loader__text"},"Loading...")):a.a.createElement("div",{className:"movies"},r.map(function(t){return a.a.createElement(d,{key:t.id,id:t.id,year:t.year,title:t.title,summary:t.summary,poster:t.medium_cover_image,genres:t.genres,background:t.background_image_original})})))}}]),r}(a.a.Component);r(62);var w=function(t){return console.log(t),a.a.createElement("div",{className:"about__container"},a.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),a.a.createElement("span",null,"\u2212 George Orwell, 1984"))},E=(r(63),function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.location,r=t.history;void 0===e.state&&r.push("/")}},{key:"render",value:function(){var t=this.props.location;return t.state?a.a.createElement("div",{className:"movie-detail"},a.a.createElement("div",{className:"movie-description"},a.a.createElement("img",{src:t.state.poster,alt:t.state.title,title:t.state.title}),a.a.createElement("div",{className:"movie__data"},a.a.createElement("h3",{className:"movie__title"},t.state.title),a.a.createElement("h4",{className:"movie__year"},t.state.year),a.a.createElement("ul",{className:"movie__genres"},t.state.genres.map(function(t,e){return a.a.createElement("li",{key:e,className:"genres__genre"},t)})),a.a.createElement("p",{className:"movie__summary"},t.state.summary)))):null}}]),r}(a.a.Component));r(64);var _=function(){return a.a.createElement("div",{className:"nav"},a.a.createElement(c.b,{to:"/"},"Home"),a.a.createElement(c.b,{to:"/about"},"About"))};r(65);var b=function(){return a.a.createElement(c.a,null,a.a.createElement(_,null),a.a.createElement(s.a,{path:"/",exact:!0,component:g}),a.a.createElement(s.a,{path:"/about",component:w}),a.a.createElement(s.a,{path:"/movie/:id",component:E}))};i.a.render(a.a.createElement(b,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.91012d19.chunk.js.map