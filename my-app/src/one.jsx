function Proflie({ name, imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt={name}
      className="avatar"
    />
  );
}

export default function Gallery1() {
  return(
    <div>
      <h1>Amazing scientists</h1>
      <Proflie
        name="Lin Lanying"
        imageUrl="https://i.imgur.com/1bX5QH6.jpg"
      />
      <Proflie
        name="Gregorio Y. Zara"
        imageUrl="https://i.imgur.com/7vQD0fPs.jpg"
      />
      <Proflie
        name="Hedy Lamarr"
        imageUrl="https://i.imgur.com/yXOvdOSs.jpg"
      />
    </div>
  )
}