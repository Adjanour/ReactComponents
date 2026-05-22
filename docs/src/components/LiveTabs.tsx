import { Tabs } from '../../../src/components/Tabs/Tabs'
import '../../../tabs.css'

export function LiveTabs() {
  return (
    <Tabs
      tabs={[
        { label: 'Overview', content: <p>Overview content with some details about the feature.</p> },
        { label: 'Usage', content: <p>Usage instructions and examples for getting started.</p> },
        { label: 'API', content: <p>API reference with props and type definitions.</p> },
      ]}
    />
  )
}
