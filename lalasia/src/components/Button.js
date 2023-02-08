import "../style/Button.css"

export const Button = (props) => {
    return (
        <button className="searchBtn">
            {props.name}
        </button>
    )
}