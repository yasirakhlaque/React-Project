import Button from './Button'
import styles from './Nav.module.css'

export default function Nav(){
    return (
        <div className={`${styles.container}`}>
            <div className="logo">
                logo
            </div>
            <ul className={`${styles.nav_ul}`}>
                <li >MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>SUPPORT</li>
            </ul>
            <Button value={"login"}/>
        </div>
    )
}