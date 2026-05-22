import { Tooltip } from '../../../src/components/Tooltip/Tooltip'
import '../../../tooltip.css'

export function LiveTooltip() {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem 0' }}>
      <Tooltip content="Top tooltip" position="top">
        <button>Hover top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>Hover bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button>Hover left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button>Hover right</button>
      </Tooltip>
    </div>
  )
}
