import * as React from 'react'
import ReactDom from 'react-dom'

import TableComponents from './reactThought'

// import List from './five'
// import Form from './four'
// import Accordion from './seven.'
// import Form1 from './six'

// import Gallery1 from './one'
// import Gallery3 from './three'
// import Gallery2 from './two'

function App() {
  return (
    <>
      <TableComponents />
    </>
  );
}

ReactDom.render(App(), document.getElementById('root'))