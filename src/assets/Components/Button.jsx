import styles from './Button.module.css'

export default function Button({value, bgc="rgb(173, 17, 17)", color="#f1f1f1", border="none"}){
    return (
        <button className={`${styles.button}`} style={{backgroundColor:`${bgc}`,
    color:`${color}`,
border:`${border}`}}>{value}</button>
    )
}