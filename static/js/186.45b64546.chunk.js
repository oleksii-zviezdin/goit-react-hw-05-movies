"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,e,r){r.r(e);var t=r(9439),o=r(652),i=r(7689),c=r(2791),u=r(184);e.default=function(){var n=(0,c.useState)([]),e=(0,t.Z)(n,2),r=e[0],a=e[1],s=(0,i.UO)().movieId;return(0,c.useEffect)((function(){(0,o.wH)(s).then((function(n){var e=n.results;return a(e)})).catch((function(n){return console.error("error:"+n)}))}),[s]),(0,u.jsxs)(u.Fragment,{children:[r.length>0&&(0,u.jsx)("ul",{children:r.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{children:(0,u.jsxs)("strong",{children:["Author: ",r]})}),(0,u.jsx)("p",{children:t})]},e)}))}),0===r.length&&(0,u.jsx)("p",{children:"We don't have any rewievs for this movie"})]})}},652:function(n,e,r){r.d(e,{Ai:function(){return u},CL:function(){return s},DC:function(){return c},Mc:function(){return a},wH:function(){return f}});var t="https://api.themoviedb.org/3/",o=r(5359),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg"}},c=function(n){var e="".concat(t,"trending/movie/day?language=en-US");if(0!==n.length)return o(e,i).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},u=function(n){var e="".concat(t,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");if(n)return o(e,i).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},a=function(n){var e="".concat(t,"movie/").concat(n,"?language=en-US");if(n&&""!==n)return o(e,i).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},s=function(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US");return o(e,i).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))},f=function(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1");return o(e,i).then((function(n){if(!n.ok)throw new Error('res.ok is "'.concat(n.ok,'"'));return n.json()}))}},5359:function(n,e,r){var t=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r.g)return r.g;throw new Error("unable to locate global object")}();n.exports=e=t.fetch,t.fetch&&(e.default=t.fetch.bind(t)),e.Headers=t.Headers,e.Request=t.Request,e.Response=t.Response}}]);
//# sourceMappingURL=186.45b64546.chunk.js.map