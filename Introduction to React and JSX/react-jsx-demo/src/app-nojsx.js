// Get root HTML Element
const rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initialize root React element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element

const headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
const paragraphReactElement = React.createElement('p', null, 'First paragraph created using React Library');

const headerSectionReactElement = React.createElement(
    'header', 
    {
        className: 'Pesho',
        id: 'headerElement',
    }, 
    headingReactElement, 
    paragraphReactElement
);
console.dir(headingReactElement);

// Render content
rootReactElement.render(headerSectionReactElement);