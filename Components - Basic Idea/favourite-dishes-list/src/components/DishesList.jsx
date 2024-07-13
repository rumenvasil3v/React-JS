import DishesListItem from "./DishesListItem";

export default function DishesList(props) {
    return (
        <>
            <ul>
                {/* <DishesListItem dish={props.favouriteDishes[0]} />
                <DishesListItem dish={props.favouriteDishes[1]} />
                <DishesListItem dish={props.favouriteDishes[2]} />
                <DishesListItem dish={props.favouriteDishes[3]} /> */}
                <DishesListItem url="https://www.allrecipes.com/recipe/269500/creamy-garlic-pasta/">
                    {props.favouriteDishes[0]}
                </DishesListItem>
                <DishesListItem url="https://pizzabraga.com/">
                    {props.favouriteDishes[1]}
                </DishesListItem>
                <DishesListItem url="https://en.wikipedia.org/wiki/Rice">
                    {props.favouriteDishes[2]}
                </DishesListItem>
                <DishesListItem url="https://www.pingodoce.pt/receitas/francesinha/">
                    {props.favouriteDishes[3]}
                </DishesListItem>
            </ul> 
        </>
    );
}