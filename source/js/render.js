(function(){

  /*
  {
    ele： 元素
    fn: 每层操作的函数
    depth: 递归深度
  }
  
  */
  function dfs(ele, cb, depth) {
    let number = 0;
    $(this).children(ele).each(function() {

      $(this).css('marginLeft', depth + 'em')
      $(this).children().each(function() {
        
        number++
        cb && cb.call(this, number)
        
        if($(this).has(ele)) {
          dfs.call(this, ele, cb, depth+1)
        }
      })
    })
  }


  function olRender() {
    function _cb(number) {
      let seq = $(`<span>${number}.</span>`);
      $(this).prepend(seq)
    }

    dfs.call($('#joker-article'), 'ol', _cb, 0)
  }

  function ulRender() {
    dfs.call($('#joker-article'), 'ul', null, 0)
  }

  function tableRender() {
    
  }


  function videoRender() {
    $('#joker-article iframe').css('width', '100%').css('height', '500px')
  }
  olRender()
  ulRender()
  videoRender()
})();