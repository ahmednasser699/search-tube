(this["webpackJsonputube-hooks"]=this["webpackJsonputube-hooks"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),c=n.n(s),r=n(18),i=n.n(r),o=n(3),l=n.n(o),d=n(8),u=n(4),m=n(5),j=n(7),v=n(6),p=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"ui segment",style:{marginBottom:"15px"},children:Object(a.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(a.jsx)("div",{className:" field ten wide",children:Object(a.jsx)("input",{type:"text",placeholder:"search",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})})})})}}]),n}(c.a.Component),b=n(19),h=n.n(b).a.create({baseURL:" https://www.googleapis.com/youtube/v3/",params:{part:"snippet",type:"video",key:"AIzaSyDB7tsbV2UD2RwxD5gzOvujmPqLlCsOsYg"}}),x=(n(43),function(e){var t=e.video,n=e.onVodSelect;return Object(a.jsxs)("div",{className:"item voditem",children:[Object(a.jsx)("img",{onClick:function(){return n(t)},style:{cursor:"pointer"},className:"ui image",src:t.snippet.thumbnails.default.url,alt:"img"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"header",onClick:function(){return n(t)},style:{cursor:"pointer"},children:t.snippet.title}),Object(a.jsx)("a",{href:"https://www.googleapis.com/youtube/channel/key=".concat("AIzaSyDB7tsbV2UD2RwxD5gzOvujmPqLlCsOsYg").concat(t.snippet.channelTitle),children:t.snippet.channelTitle})]})]})}),O=function(e){var t=e.videos,n=e.onVodSelect,s=e.onNext,c=e.onPrev;return console.log(t),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"ui celled list",children:t.map((function(e){return Object(a.jsx)(x,{video:e,onVodSelect:n},e.id.videoId)}))}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"ui buttons",children:[Object(a.jsx)("button",{className:"ui negative button",onClick:c,children:"prev"}),Object(a.jsx)("div",{className:"or"}),Object(a.jsx)("button",{className:"ui primary button",onClick:s,children:"next"})]})})]})},g=function(e){var t=e.selectedVod;if(!t)return Object(a.jsx)("div",{children:"loading..."});var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"ui embed",children:Object(a.jsx)("iframe",{src:n,title:"vod",allowFullScreen:!0})}),Object(a.jsx)("div",{className:"ui segment",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"header",children:t.snippet.title}),t.snippet.description]})})]})},f=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVod:null,data:null,pageToken:null,prevToken:null,searchTerm:null},e.onFormSubmit=function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("search",{params:{q:n,maxResults:5}});case 2:a=t.sent,e.setState({videos:a.data.items,data:a.data,searchTerm:n,pageToken:a.data.nextPageToken,selectedVod:a.data.items[0]}),console.log(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVodSelect=function(t){e.setState({selectedVod:t})},e.onNext=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.data){t.next=6;break}return t.next=3,h.get("search",{params:{q:e.state.searchTerm,maxResults:5,pageToken:e.state.pageToken}});case 3:n=t.sent,console.log(n),e.setState({videos:n.data.items,pageToken:n.data.nextPageToken,prevToken:n.data.prevPageToken,selectedVod:n.data.items[0]});case 6:case"end":return t.stop()}}),t)}))),e.onPrev=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.data||!e.state.prevToken){t.next=6;break}return t.next=3,h.get("search",{params:{q:e.state.searchTerm,maxResults:5,pageToken:e.state.prevToken}});case 3:n=t.sent,console.log(n),e.setState({videos:n.data.items,pageToken:n.data.nextPageToken,prevToken:n.data.prevPageToken,selectedVod:n.data.items[0]});case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ui container ",style:{marginTop:"10px"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(p,{onFormSubmit:this.onFormSubmit})}),Object(a.jsx)("div",{className:"ui grid",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"nine wide column",children:Object(a.jsx)(g,{selectedVod:this.state.selectedVod})}),Object(a.jsx)("div",{className:"seven wide column ",children:Object(a.jsx)(O,{videos:this.state.videos,onVodSelect:this.onVodSelect,onNext:this.onNext,onPrev:this.onPrev})})]})})]})}}]),n}(c.a.Component);i.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.780aa94d.chunk.js.map