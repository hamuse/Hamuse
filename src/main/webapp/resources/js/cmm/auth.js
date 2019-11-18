"use strict";
var auth = auth || {};
auth = (()=>{
    const WHEN_ERR = '호출하는 auth js를 찾을 수 없습니다 .'
    let context, js ;
    let routerjs;
    let init=()=>{
       context = $.ctx()
       js = $.js()
       routerjs = js + '/cmm/router.js'
                   }
    let onCreate=()=>{
       init();
       $.when(
                           $.getScript(routerjs)
                    ).done(()=>{
           setContentView()
       }).fail(()=>{
           alert(WHEN_ERR)
       })
    }
    let setContentView=()=>{
        
    }
    
    return{onCreate}
    
})();