import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter()

    // fire this function when the componet first mounts (first see it in browser)
    useEffect(() => {

        setTimeout(()=> {

            // push users after 3 seconds to homepage if they access 404 page
            router.push('/')

        }, 3000)

     // as second argument we pass in an empty array, this is a dependantcy array
     // when empty '[]' only fire this function once when the component first mounts  and not again when any state changes
    }, [])
    return ( 

        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;