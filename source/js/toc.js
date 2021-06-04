import { getPageScroll } from './utils.js'

function setToc() {
  let {y} = getPageScroll();
  let inialTop = 550
  // 500和inialTop的阈值是否添加配置
  if(y <= 500) {
    $("#joker-toc").css("top", inialTop - y)
  }else {
    $("#joker-toc").css("top", 50)
  }
}

function initToc() {
  setToc()
}

initToc()
window.onscroll = setToc;
