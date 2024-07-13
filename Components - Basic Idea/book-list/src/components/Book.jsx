export default function Book(props) {
    return (
        <li className="book">
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.price}</div>
        </li>
    );
}