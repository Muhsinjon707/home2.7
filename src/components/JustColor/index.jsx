import "./index.css"

function JustColor(props) {
    return (
      <li className="nav-item">
        {props.season}
        <span className="innerSpan">
          ({props.color.toLocaleUpperCase()} - {props.colorEnglish})
        </span>
      </li>
    );
}

export default JustColor;