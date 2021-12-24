import { people } from "./data"

function Profile ({ name, imageId }) {
  const imageUrl = (
    'https://i.imgur.com/' +
    imageId + 
    's.jpg'
  )

  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
    />
  )
}

export default function Gallery2 () {
  return (
    <div>
      <h1>Amazing scientists</h1>
      {people.map(person => (
        <Profile
          key={person.id}
          name={person.name}
          imageId={person.imageId}
        />
      ))}
    </div>
  )
}