import Head from "next/head"
import apolloClient from "../../apolloClient"
import { gql } from "@apollo/client"

// grab the query object
export const getServerSideProps = async ({ query }) => {
  // destructure `id`
  const { id } = query
  // fetch for a specific character
  // const data = await fetch(`${defaultEndpoint}${id}`).then((res) => res.json())
  const { data } = await apolloClient.query({
    query: gql`
      query getLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `
  })

  return {
    props: {
      data
    }
  }
}

const Location = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.name} | Rick and Morty</title>
      </Head>

      <h3>{data.name}</h3>
      <Image width="400" height="250" alt="location-reference" src={`${data.photo}`} />
      <br />
      <b>About this location:</b>
      <p>{data.description}</p>

      {/* <div className="bg-white pt-16 lg:py-24">
        <div className="bg-indigo-600 pb-16 lg:relative lg:z-10 lg:pb-0">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img className="object-cover lg:h-full lg:w-full" src={image} alt={`${name} Thumbnail`} />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                <h1 className="mt-6 text-5xl font-medium text-white">{`${name} (${status})`}</h1>
                <div className="mt-6">
                  <p className="text-xl font-medium tracking-wide text-white">Gender: {gender}</p>
                  <p className="text-xl font-medium tracking-wide text-white">Species: {species}</p>
                  <p className="text-xl font-medium tracking-wide text-white">Location: {location?.name}</p>
                  <p className="text-xl font-medium tracking-wide text-white">Originally from: {origin?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Location
