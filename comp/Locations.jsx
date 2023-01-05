import Link from "next/link"
import Image from "next/image"

// show a list of intergalactic travel locations 👽
const Locations = ({ locations }) => {
  return (
    <ul>
      {locations.map((item) => (
        <li key={item.id}>
          <Link href={`/locations/${item.id}`}>
            <h3>{item.name}</h3>
            <Image width="400" height="250" alt="location-reference" src={`${item.photo}`} />
            <br />
            <b>About this location:</b>
            <p>{item.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Locations
