/*! parsely-js-api - v0.2.0 - 2012-08-27
* http://parse.ly
2012 Parsely, Inc.*/
window.PARSELY=window.PARSELY||{},function(a){function q(a){return Object.prototype.toString.call(a)=="[object Function]"}function r(a){return Object.prototype.toString.call(a)=="[object Array]"}function s(a,b){var c=/^\w+\:\/\//;return/^\/\/\/?/.test(a)?a=location.protocol+a:!c.test(a)&&a.charAt(0)!="/"&&(a=(b||"")+a),c.test(a)?a:(a.charAt(0)=="/"?i:h)+a}function t(a,b){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function u(a){var b=!1;for(var c=0;c<a.scripts.length;c++)a.scripts[c].ready&&a.scripts[c].exec_trigger&&(b=!0,a.scripts[c].exec_trigger(),a.scripts[c].exec_trigger=null);return b}function v(a,b,c,d){a.onload=a.onreadystatechange=function(){if(a.readyState&&a.readyState!="complete"&&a.readyState!="loaded"||b[c])return;a.onload=a.onreadystatechange=null,d()}}function w(a){a.ready=a.finished=!0;for(var b=0;b<a.finished_listeners.length;b++)a.finished_listeners[b]();a.ready_listeners=[],a.finished_listeners=[]}function x(a,b,d,e,f){setTimeout(function(){var g,h=b.real_src,k;if("item"in j){if(!j[0]){setTimeout(arguments.callee,25);return}j=j[0]}g=document.createElement("script"),b.type&&(g.type=b.type),b.charset&&(g.charset=b.charset),f?n?(d.elem=g,m?(g.preload=!0,g.onpreload=e):g.onreadystatechange=function(){g.readyState=="loaded"&&e()},g.src=h):f&&h.indexOf(i)==0&&a[c]?(k=new XMLHttpRequest,k.onreadystatechange=function(){k.readyState==4&&(k.onreadystatechange=function(){},d.text=k.responseText+"\n//@ sourceURL="+h,e())},k.open("GET",h),k.send()):(g.type="text/cache-script",v(g,d,"ready",function(){j.removeChild(g),e()}),g.src=h,j.insertBefore(g,j.firstChild)):o?(g.async=!1,v(g,d,"finished",e),g.src=h,j.insertBefore(g,j.firstChild)):(v(g,d,"finished",e),g.src=h,j.insertBefore(g,j.firstChild))},0)}function y(){function o(a,b,c){function f(){d!=null&&(d=null,w(c))}var d;if(l[b.src].finished)return;a[e]||(l[b.src].finished=!0),d=c.elem||document.createElement("script"),b.type&&(d.type=b.type),b.charset&&(d.charset=b.charset),v(d,c,"finished",f),c.elem?c.elem=null:c.text?(d.onload=d.onreadystatechange=null,d.text=c.text):d.src=b.real_src,j.insertBefore(d,j.firstChild),c.text&&f()}function z(a,b,c,d){var h,i,j=function(){b.ready_cb(b,function(){o(a,b,h)})},k=function(){b.finished_cb(b,c)};b.src=s(b.src,a[g]),b.real_src=b.src+(a[f]?(/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1e9)+"=":""),l[b.src]||(l[b.src]={items:[],finished:!1}),i=l[b.src].items,a[e]||i.length==0?(h=i[i.length]={ready:!1,finished:!1,ready_listeners:[j],finished_listeners:[k]},x(a,b,h,d?function(){h.ready=!0;for(var a=0;a<h.ready_listeners.length;a++)h.ready_listeners[a]();h.ready_listeners=[]}:function(){w(h)},d)):(h=i[0],h.finished?k():h.finished_listeners.push(k))}function A(){function j(a,b){a.ready=!0,a.exec_trigger=b,l()}function k(a,b){a.ready=a.finished=!0,a.exec_trigger=null;for(var c=0;c<b.scripts.length;c++)if(!b.scripts[c].finished)return;b.finished=!0,l()}function l(){while(e<c.length){if(q(c[e])){try{c[e++]()}catch(a){}continue}if(!c[e].finished){if(u(c[e]))continue;break}e++}e==c.length&&(f=!1,g=!1)}function m(){(!g||!g.scripts)&&c.push(g={scripts:[],finished:!0})}var a,b=t(h,{}),c=[],e=0,f=!1,g;return a={script:function(){for(var c=0;c<arguments.length;c++)(function(c,e){var h;r(c)||(e=[c]);for(var l=0;l<e.length;l++){m(),c=e[l],q(c)&&(c=c());if(!c)continue;if(r(c)){h=[].slice.call(c),h.unshift(l,1),[].splice.apply(e,h),l--;continue}typeof c=="string"&&(c={src:c}),c=t(c,{ready:!1,ready_cb:j,finished:!1,finished_cb:k}),g.finished=!1,g.scripts.push(c),z(b,c,g,i&&f),f=!0,b[d]&&a.wait()}})(arguments[c],arguments[c]);return a},wait:function(){if(arguments.length>0){for(var b=0;b<arguments.length;b++)c.push(arguments[b]);g=c[c.length-1]}else g=!1;return l(),a}},{script:a.script,wait:a.wait,setOptions:function(c){return t(c,b),a}}}var h={},i=n||p,k=[],l={},m;return h[c]=!0,h[d]=!1,h[e]=!1,h[f]=!1,h[g]="",m={setGlobalDefaults:function(a){return t(a,h),m},setOptions:function(){return A().setOptions.apply(null,arguments)},script:function(){return A().script.apply(null,arguments)},wait:function(){return A().wait.apply(null,arguments)},queueScript:function(){return k[k.length]={type:"script",args:[].slice.call(arguments)},m},queueWait:function(){return k[k.length]={type:"wait",args:[].slice.call(arguments)},m},runQueue:function(){var a=m,b=k.length,c=b,d;for(;--c>=0;)d=k.shift(),a=a[d.type].apply(null,d.args);return a},noConflict:function(){return a.$LAB=b,m},sandbox:function(){return y()}},m}var b=a.$LAB,c="UseLocalXHR",d="AlwaysPreserveOrder",e="AllowDuplicates",f="CacheBust",g="BasePath",h=/^[^?#]*\//.exec(location.href)[0],i=/^\w+\:\/\/\/?[^\/]+/.exec(h)[0],j=document.head||document.getElementsByTagName("head"),k=a.opera&&Object.prototype.toString.call(a.opera)=="[object Opera]"||"MozAppearance"in document.documentElement.style,l=document.createElement("script"),m=typeof l.preload=="boolean",n=m||l.readyState&&l.readyState=="uninitialized",o=!n&&l.async===!0,p=!n&&!o&&!k;a.$LAB=y(),function(a,b,c){document.readyState==null&&document[a]&&(document.readyState="loading",document[a](b,c=function(){document.removeEventListener(b,c,!1),document.readyState="complete"},!1))}("addEventListener","DOMContentLoaded")}(PARSELY),function(){var a=function(){return function(a){if(this===window||typeof this=="undefined")return;this.msgs.push(a)}};PARSELY.console={msgs:[],log:a(),dir:a()}}(),function(){var a=PARSELY.console,b=PARSELY.$LAB,c="parsely-cfg",d=document.getElementById(c);if(!d){a.log("Parse.ly disabled because configuration root element missing: #"+c);return}var e=PARSELY.site||d.getAttribute("data-parsely-site"),f=document.location.protocol+"//",g=f==="https://"?"d1z2jf7jlzjs58.cloudfront.net":"static.parsely.com",h=PARSELY.statichost||g,i=PARSELY.confighost||"config.parsely.com",j=PARSELY.pixelhost||"pixel.parsely.com",k=f+i,l=f+h,m=f+j;PARSELY.pInit=function(c){a.log("Configuration loaded; loading Parse.ly plugin bundle"),PARSELY.config=c,a.dir(c);var d=l+c.bundle;a.log("Async loading bundle from "+d),PARSELY.urls={"static":l,config:k,pixel:m},b.script(d).wait(function(){a.log("Code bundle loaded");var b=PARSELY.onload;if(typeof b=="function")try{b()}catch(c){a.dir({info:"hook threw exception",error:c})}a.log("Final load stage completed successfully")})},a.log("Asynchronously loading configuration from "+k),b.script(k+"/config/"+e)}();