import MovieList from './components/MovieList'
import './App.css'

function App() {
    const movies = [
        'Lord of the Rings',
        'The Hobbit',
        'American Psycho',
        'Oppenheimer',
        'The Man Who Knew Infinity'
    ]

    return (
        <>
            <MovieList title="Best Movies" movies={movies} />
        </>
    )
}

export default App
