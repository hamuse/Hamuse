"use strict";
var app = app || {};

var app = (()=>{
	const WHEN_ERR = 'js를 찾을수없습니다.'
	let _,js, authjs;
// , authjs
	let run = x =>{
		$.getScript(x+'/resources/js/cmm/router.js',()=>{
			$.extend(new Session(x));
			onCreate();
		})}	
		let init=()=>{
			_ = $.ctx();
			js = $.js();
			authjs = js+'/cmm/auth.js'
		}
		let onCreate=()=>{
			init();
			$.when(
					$.getScript(authjs)
			)
			.done(()=>{	
				alert('장해경 hellow')
				auth.onCreate()	
			}
			)
			.fail(()=>{
			alert(WHEN_ERR)
			}
			)
		}
	return{run}
})();