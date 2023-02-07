import Link from "next/link"
import styles from "../styles/Landingpage/general.module.css"
import Router from "next/router";
import { useRouter } from 'next/router'

const router = useRouter()

const Header = ({ children }) => {
      return(
            <div className={styles.Header}>
                  { children }
            
                  <button type="button" onClick={() => router.push('/')}>
      Home
    </button>
                        
            
            </div>
      )
}
 

{/* <button type="button"  onClick={() => Router.reload('/')}>
      Home
    </button> */}
export default Header