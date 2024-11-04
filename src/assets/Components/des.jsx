import Button from './Button'
import styles from './des.module.css'


export default function Des() {

    return (
        <div className={`${styles.des_main}`}>
            <div className={`${styles.des_box}`}>
                <h1 className={`${styles.des_heading}`}>YOUR FEET DESERVE THE BEST</h1>
                <p className={`${styles.des_p}`}>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best and we are here to help you with our shoes. </p>
                <div className={`${styles.des_btn}`}>
                    <Button value={"SHOP NOW"} />
                    <Button value={"CATEGORY"} bgc={"white"} color={"black"} border={"1px solid grey"} />
                </div>
            </div>
            <div className={`${styles.des_img}`}>
               <img src="public/images/shoes.jpg" alt="shoes image" />
            </div>
        </div>

    )
}