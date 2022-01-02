import React, { Fragment } from 'react'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ],
}

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={line[0]}>
          {index > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  )
}
