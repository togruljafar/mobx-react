!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("mobservable"),require("react")):"function"==typeof define&&define.amd?define(["mobservable","react"],t):"object"==typeof exports?exports.mobservableReact=t(require("mobservable"),require("react")):e.mobservableReact=t(e.mobservable,e.React)}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){var n,r,i;!function(){function s(e,t){function o(e){var o=t.findDOMNode(e);o&&p.set(o,e),a.emit({event:"render",renderTime:e.__$mobRenderEnd-e.__$mobRenderStart,totalTime:Date.now()-e.__$mobRenderStart,component:e,node:o})}function n(e,t){var o=e[t],n=c[t];e[t]=function(){o&&o.apply(this,arguments),n.apply(this,arguments)}}function r(e){if("function"==typeof e&&!e.prototype.render&&!e.isReactClass&&!t.Component.isPrototypeOf(e))return r(t.createClass({displayName:e.name,render:function(){return e.call(this,this.props)}}));if(!e)throw new Error("Please pass a valid component to 'observer'");var o=e.prototype||e;return["componentWillMount","componentWillUnmount","componentDidMount","componentDidUpdate"].forEach(function(e){n(o,e)}),o.shouldComponentUpdate||(o.shouldComponentUpdate=c.shouldComponentUpdate),e}function i(){if("undefined"==typeof WeakMap)throw new Error("tracking components is not supported in this browser");s||(s=!0)}var s=!1,p="undefined"!=typeof WeakMap?new WeakMap:void 0,a=new e._.SimpleEventEmitter,c={componentWillMount:function(){var o=this.render;this.__$mobDependencies=[],this.render=function(){s&&(this.__$mobRenderStart=Date.now());var n,r=!1;this.__$mobDisposer=e.observe(function(){r?(this.__$mobDisposer(),t.Component.prototype.forceUpdate.call(this)):(r=!0,n=o.call(this))},this),this.$mobservable=this.__$mobDisposer.$mobservable;var i=this.$mobservable.observing.map(function(e){return e.setRefCount(1),e});return this.__$mobDependencies.forEach(function(e){e.setRefCount(-1)}),this.__$mobDependencies=i,s&&(this.__$mobRenderEnd=Date.now()),n}},componentWillUnmount:function(){if(this.__$mobDisposer&&this.__$mobDisposer(),this.__$mobDependencies.forEach(function(e){e.setRefCount(-1)}),delete this.$mobservable,s){var e=t.findDOMNode(this);e&&(p.delete(e),a.emit({event:"destroy",component:this,node:e}))}},componentDidMount:function(){s&&o(this)},componentDidUpdate:function(){s&&o(this)},shouldComponentUpdate:function(t,o){if(this.state!==o)return!0;var n,r=Object.keys(this.props);if(r.length!==Object.keys(t).length)return!0;for(var i=r.length-1;n=r[i];i--){var s=t[n];if(s!==this.props[n])return!0;if(s&&"object"==typeof s&&!e.isReactive(s))return!0}return!1}};return{observer:r,renderReporter:a,componentByNodeRegistery:p,trackComponents:i}}r=[o(1),o(2)],n=s,i="function"==typeof n?n.apply(t,r):n,!(void 0!==i&&(e.exports=i))}()},function(t,o){t.exports=e},function(e,o){e.exports=t}])});