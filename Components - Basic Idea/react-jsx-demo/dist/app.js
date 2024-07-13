// Get root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initialize root React element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var uLReactElement = React.createElement(
    'ul',
    null,
    React.createElement(
        'li',
        null,
        'Boy'
    ),
    React.createElement(
        'li',
        null,
        'Girl'
    )
);

// Create basic react element
var headerSectionReactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from React'
    ),
    React.createElement(
        'p',
        null,
        'First paragraph created using React Library'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Make my bed'
        ),
        React.createElement(
            'li',
            null,
            'Deal with maths problems'
        ),
        React.createElement(
            'li',
            null,
            'Deal with programming problems'
        ),
        React.createElement(
            'li',
            null,
            'Read a book for 30 minutes'
        ),
        React.createElement(
            'li',
            null,
            'Training session for 1 hour'
        ),
        React.createElement(
            'li',
            null,
            'Take a walk for 1 hour'
        )
    ),
    React.createElement(
        'section',
        null,
        React.createElement(
            'h2',
            null,
            'Second heading'
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                { className: 'paragraph-data' },
                'Lorem ipsum 10 20 30...'
            )
        )
    )
);

function Header(props) {
    return React.createElement('header', {}, React.createElement('h1', {}, props.firstHeader), React.createElement('h2', {}, props.secondHeader));
}

function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Lord Of The Rings'), React.createElement('li', {}, 'Harry Potter')));
}

var sectionReactElement = React.createElement(
    'section',
    null,
    uLReactElement,
    headerSectionReactElement
);

var siteContent = React.createElement('div', null, React.createElement(Header, {
    firstHeader: 'Heheheh',
    secondHeader: 'Second Heading!'
}), React.createElement(Main, { title: 'Best Movies' }));

var siteContentJSX = React.createElement(
    'div',
    null,
    React.createElement(Header, { firstHeader: 'Hehehehha', secondHeader: 'Second Heading!' }),
    React.createElement(Main, { title: 'Best movies' })
);

// Render content
rootReactElement.render(siteContentJSX);