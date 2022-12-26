// show a list of intergalactic travel locations 👽
const Locations = ({ locations }) => {
  return (
    <ul>
      {locations.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${item.photo}`} />
          <br />
          <b>About this location:</b>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Locations
