import DishesList from './components/DishesList'
import './App.css'

function App() {
    const favouriteDishes = [
        'Pasta',
        'Pizza',
        'Rice',
        'Franchesihna',
    ];

    return (
        <>
            <h1>Favourite Dishes List</h1>

            <DishesList favouriteDishes={favouriteDishes} /> 
        </>
    )
}

export default App
