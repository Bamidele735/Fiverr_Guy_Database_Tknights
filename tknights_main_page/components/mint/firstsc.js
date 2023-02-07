import styles from "../../styles/Landingpage/Body.module.css"

import Image from "next/future/image"
import Link from "next/link"
import helpDappUtil from "../../ulits/help"

import logo from "../../public/TknightsLogo.png"

const Firstscsc = () => {
      return(
            <div className={styles.firstsc}>
                        <Link href="/">
                        <a target="_blank" rel="noopener noreferrer" className={styles.mintbutton}>
    
                              <Image onClick={helpDappUtil}
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