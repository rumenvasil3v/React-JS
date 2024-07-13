// Get root HTML Element
var rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initialize root React element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element

var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
var paragraphReactElement = React.createElement('p', null, 'First paragraph created using React Library');

var headerSectionReactElement = React.createElement('header', {
    className: 'Pesho',
    id: 'headerElement'
}, headingReactElement, paragraphReactElement);
console.dir(headingReactElement);

// Render content
rootReactElement.render(headerSectionReactElement);