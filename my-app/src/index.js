import * as React from 'react'
import ReactDom from 'react-dom'

import List from './five'
import Form from './four'
// import Gallery1 from './one'
// import Gallery3 from './three'
// import Gallery2 from './two'

function App() {
  return (
    <>
      {/* <Gallery1 />
      <Gallery2 />
      <Gallery3 /> */}
      <Form />
      <List />
    </>
  );
}

ReactDom.render(App(), document.getElementById('root'))