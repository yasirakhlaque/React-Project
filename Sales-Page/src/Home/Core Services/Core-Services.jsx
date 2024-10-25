import Cards from "./cards";
import Header from "./Header";

export default function CoreServices() {
    let coreStyle = {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column"
    }

    let cards = {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "row"
    }

    return (
        <div style={coreStyle}>
            <Header />
            <div style={cards}>
                <Cards logo={"fa-solid fa-brain"} title={"Automated Workflows"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} i1={"Efficency"} i2={"Consistency"} i3={"Scalibility"} btn={"Explore Automated"} />
                <Cards logo={"fa-solid fa-earth-asia"} title={"Multi-Channel Campaign"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} i1={"Reach"} i2={"engagement"} i3={"Realibility"} btn={"Explore Campaigns"} />
                <Cards logo={"fa-solid fa-user"} title={"Advanced Personalization"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} i1={"Retention"} i2={"Relevance"} i3={"Convergence"} btn={"Explore Personalization"} />
            </div>
        </div>
    )
}