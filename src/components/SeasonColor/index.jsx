import "./index.css";
import JustColor from "../JustColor";

function SeasonColor() {
    return (
        <ul className="nav">
            <JustColor season="Bahor" color="yashil" colorEnglish="green"/>
            <JustColor season="Yoz" color="sariq" colorEnglish="yellow"/>
            <JustColor season="Kuz" color="to'q sariq" colorEnglish="orange"/>
            <JustColor season="Qish" color="moviy" colorEnglish="lightblue"/>
        </ul>
    );
}

export default SeasonColor;