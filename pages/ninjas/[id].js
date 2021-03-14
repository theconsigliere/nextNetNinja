// tell next.js how many static pages need to be createed based on our data
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(ninja => {
        return {
            params: {
                // trun interget into string
                id: ninja.id.toString()
            }
        }
    })

    return {
        paths,
        // if vistor tries to visit a page with an id that doesnt exisit, it will show 404 page
        fallback: false
    }
}

// runs as many times as the paths object (above returns)
export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()

// returns single object 
    return {
        props: { ninja: data }
    }

}

const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;
