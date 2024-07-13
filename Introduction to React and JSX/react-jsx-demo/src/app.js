// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initialize root React element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const uLReactElement = (<ul>
    <li>Boy</li>
    <li>Girl</li>
</ul>);

// Create basic react element
const headerSectionReactElement = (
    <header>
        <h1>Hello JSX from React</h1>
        <p>First paragraph created using React Library</p>
        <ul>
            <li>Make my bed</li>
            <li>Deal with maths problems</li>
            <li>Deal with programming problems</li>
            <li>Read a book for 30 minutes</li>
            <li>Training session for 1 hour</li>
            <li>Take a walk for 1 hour</li>
        </ul>
        <section>
            <h2>Second heading</h2>

            <div>
                <p className="paragraph-data">Lorem ipsum 10 20 30...</p>
            </div>
        </section>
    </header>
);

const sectionReactElement = (<section>
        {uLReactElement}
        {headerSectionReactElement}
    </section>);

// Render content
rootReactElement.render(sectionReactElement);


