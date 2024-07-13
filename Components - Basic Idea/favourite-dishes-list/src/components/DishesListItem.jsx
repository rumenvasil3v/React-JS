export default function DishesListItem(props) {
    return (
        <li style={{ color: 'blue', backgroundColor: 'pink' }}>
            <a href={props.url}>
                {props.children}
            </a>
        </li>
    );
}
