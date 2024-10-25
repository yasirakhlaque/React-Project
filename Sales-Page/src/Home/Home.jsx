import CoreServices from "./Core Services/Core-Services";

export default function Home(){
    let home = {
       margin:"auto"
    }
    return (
        <div style={home}>
        <h1>Home</h1>
        <CoreServices/>
        </div>
    )
}