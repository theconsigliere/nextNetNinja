import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Image src="/wp.svg" width={77} height={77} ></Image>
                </div>

            <Link href='/'><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
            
    
            </nav>
        </header>
      );
}
 
export default NavBar;
