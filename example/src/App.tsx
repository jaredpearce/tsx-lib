import React from 'react'

import { Example, Button } from 'tsx-lib'
import 'tsx-lib/dist/index.css'

const App = () => {
  return (
    <main role="main">
      <div>
        <Button btnLabel="Example button" />
      </div>
      <Example text="Startup React Library Example 😄" />
    </main>
  )
}

export default App
