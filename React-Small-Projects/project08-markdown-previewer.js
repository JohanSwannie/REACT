import {
  marked
} from "https://cdn.skypack.dev/marked";
import hljs from "https://cdn.skypack.dev/highlight.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: openingMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  };
  render() {
    return (
      <div>
      <h1 id = 'mt'>Markdown Previewer</h1>
        <div className="main-container">
          <div className="left">
            <textarea
              id="editor"
              value={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="right">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const openingMarkdown = `
## List of Headers
------------------

#        This represents a HEADER 1
##       This represents a HEADER 2
###      This represents a HEADER 3
####     This represents a HEADER 4
#####    This represents a HEADER 5
######   This represents a HEADER 6

## Example of inline Code

\`Here is an inline code example\`

## Examples of Text Decorations

**I am bold text**

***I am bold and italic text***

*I am just italic text*

## Example of Blockquotes

> You are what you eat.

## Example of Code

\`\`\`
function calculateNumbers(x, y, z) {
  return (x * y) - z
}

\`npm install create-react-app project1\`

const personArray = ['John', 'Richard', 'Mary', 'Jennifer']
let counter = 0
let goalReached  = true
var quote1 = 'let it go Mate'
\`\`\`

## Example of Images

![alt text](https://i.pcmag.com/imagery/reviews/05l2EoHgxLKDb5dq2UGTpdR-17.fit_lim.size_625x365.v1604675195.jpg 'Smart Laptop')

## List

- Item1
- Item2
- Item3
- Item4

## Links

[Yahoo](https://www.yahoo.com/)

[Food Network](https://www.foodnetwork.com/)

[BBC Good Food](https://www.bbcgoodfood.com/)

`;

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true
});

ReactDOM.render(<App />, document.getElementById("root"));
