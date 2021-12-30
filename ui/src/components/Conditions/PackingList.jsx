import React from 'react'

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <del>
//           {name}
//           ✔
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   )
// }

// function Item({ name, isPacked }) {
//   return (
//     <li>
//       {name}
//       {isPacked && '✔'}
//     </li>
//   )
// }

// function Item({ name, isPacked }) {
//   let itemContent = name

//   if (isPacked) {
//     itemContent = (
//       <del>
//         {name}
//         ✔
//       </del>
//     )
//   }

//   return (
//     <li>
//       {itemContent}
//     </li>
//   )
// }

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name}
      {isPacked ? '✔' : '❌'}
    </li>
  )
}

function Item1({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {
        importance > 0
        && (
        <i>
          (
          Importance:
          {importance}
          )
        </i>
        )
      }
    </li>
  )
}

export default function PackingList() {
  return (
    <>
      <section>
        <h1>Sally Rides Packing List</h1>
        <ul>
          <Item
            isPacked
            name="Space suit"
          />
          <Item
            isPacked
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <section>
        <h1>Sally Rides Packing List</h1>
        <ul>
          <Item1
            importance={9}
            name="Space suit"
          />
          <Item1
            importance={9}
            name="Helmet with a golden leaf"
          />
          <Item1
            importance={6}
            name="Photo of Tam"
          />
        </ul>
      </section>
    </>
  )
}
