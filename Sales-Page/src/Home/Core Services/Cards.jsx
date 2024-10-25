import './Cards.css'
export default function Cards({logo,title,des,i1,i2,i3,btn}){
    return (
        <>
           <div className="cards">
             <div className="logo">
             <i className={logo}></i>
             </div>
             <h3>{title}</h3>
             <p>{des}</p>
             <ul>
                <li>{i1}</li>
                <li>{i2}</li>
                <li>{i3}</li>
             </ul>
             <button>{btn}</button>
           </div>
        </>
    )
}