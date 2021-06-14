'use strict';

// 防抖
function debounce(fn, delay=100, immediate=true) {
  let timer = null, ctx, args;

  let later = () => setTimeout(() => {
    timer = null;
    if(!immediate) {
      fn.apply(ctx, args)
      ctx = args = null;
    }
  }, delay);

  return function() {
    if(!timer) {
      timer = later();
      if(immediate) {
        fn.apply(ctx, arguments)
      }else {
        ctx = this
        args = arguments
      }
    }else {
      clearTimeout(timer);
      timer = later();
    }
  }
}

// 限流
function throttle(fn, delay=100) {
  let timer = null;
  let preTimer = new Date()
  return function() {
    let ctx = this;
    let args = arguments;
    let curTimer = new Date();
    clearTimeout(timer);
    if(curTimer - preTimer >= delay) {
      preTimer = curTimer;
      timer = setTimeout(fn, delay);
    }
  }
}

//获取网页滚动距离的方法
function getPageScroll() {
  let x, y;
  if (window.pageXOffset){//查看有无pageXOffset属性：IE9以及IE9以上的浏览器
      x = window.pageXOffset;
      y = window.pageYOffset;
  }else if (document.compatMode ==  "BackCompact"){//混杂（怪异）模式下浏览器
      x = document.body.scrollLeft;
      y = document.body.scrollTop;
  }else {//标准模式下浏览器
      x = document.documentElement.scrollLeft;
      y = document.documentElement.scrollTop;
  }
  return {x, y}
}

export {
  debounce,
  throttle,
  getPageScroll
}