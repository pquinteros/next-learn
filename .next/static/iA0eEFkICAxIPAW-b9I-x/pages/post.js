(window.webpackJsonp=window.webpackJsonp||[]).push([["98d3"],{EhLH:function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),r=t.n(a),o=t("O40h"),c=t("q1tI"),u=t.n(c),s=t("3Hq7"),i=t("zgjP"),l=t.n(i),w=function(e){return u.a.createElement(s.a,null,u.a.createElement("h1",null,e.show.name),u.a.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),u.a.createElement("img",{src:e.show.image.medium}))};w.getInitialProps=function(){var e=Object(o.default)(r.a.mark(function e(n){var t,a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,l()("https://api.tvmaze.com/shows/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,console.log("Fetched show: ".concat(o.name)),e.abrupt("return",{show:o});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),n.default=w},MDTK:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){var e=t("EhLH");return{page:e.default||e}}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["MDTK","5d41","9da1"]]]);