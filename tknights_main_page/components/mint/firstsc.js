import styles from "../../styles/Landingpage/Body.module.css"

import Image from "next/future/image"
import Link from "next/link"

import logo from "../../public/TknightsLogo.png"

import { useRouter } from 'next/router';



const Firstscsc = () => {
      const router = useRouter();
      
      const forceReload = () => {
            router.reload();
      }
      return(
            <div className={styles.firstsc} >
                        <Link href="/" rel="noopener noreferrer" className={styles.mintbutton}>
                        <a target="_parent"  >
    
                              <Image 
                              alt="Tknights Logo"
                              src={logo}
                              className={styles.imagefirstscmint}
                              /> 
                              </a>
                        </Link>
                  <h2>We Are Coming</h2>
                  <h1>MINT NOW</h1>
                  
                  <button>&darr;</button>                 
            </div>
            
      )
}

export default Firstscsc