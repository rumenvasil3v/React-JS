import Book from './Book'

export default function BookInfo(props) {
    return (
        <ul>
            <Book
             title="The Shining"
             author="Stephen King"
             price="10 euro" 
            />

            <Book
             title="Lord Of The Rings"
             author="J. R. R. Tolkien"
             price="20 euro" 
            />
        </ul>
    );
}