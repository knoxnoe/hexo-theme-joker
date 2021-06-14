function initCodeTool() {
  $('figure.highlight').wrap('<div class="joker-code-area"></div>')
  let toolbar = $(`<div class="tool-bar">
    <div class="copy">
      <span class="copy-status">复制成功</span>
      <i class="fa fa-clipboard" aria-hidden="true"></i>
    </div>
  </div>`);
  $('.joker-code-area').prepend(toolbar)
  bindEvent();
}

function copy(text, ctx) {
  if(navigator.clipboard) {
    let theClipboard = navigator.clipboard;
    theClipboard.writeText(text).then(res => {
      $(ctx).find('.copy-status').text('复制成功').velocity('stop')
        .velocity('fadeIn', {duration: 400})
        .velocity('reverse', {duration: 1000})
    }, err => {
      copyError(ctx)
    })
  }else {
    copyError(ctx)
  }
}

function copyError(ctx) {
  $(ctx).find('.copy-status').text('复制失败').velocity('stop')
    .velocity('fadeIn', {duration: 400})
    .velocity('reverse', {duration: 2000})
}

function bindEvent() {
  $('.copy').on('click', function() {
    let selection = window.getSelection()
    let range = document.createRange()
    range.selectNodeContents(
      $(this)
        .parent('.tool-bar')
        .siblings('figure')
        .find('.code pre')[0]
    )
    selection.removeAllRanges()
    selection.addRange(range)
    let text = selection.toString()
    copy(text, this)
    selection.removeAllRanges()
  })
}


export { initCodeTool };