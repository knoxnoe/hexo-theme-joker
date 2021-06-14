import { initToc } from './features/toc.js'
import { initCodeTool } from './features/codecopy.js'
import './unjoker/algolia.js'

(function() {
  initToc()
  initCodeTool();
})()