{/* A SIMPLE JSX ELEMENT */}

const JSX = <h1>Hello JSX!</h1>;

{/* A COMPLEX JSX ELEMENT */}

const JSX = <div>
              <h1></h1>
              <p></p>
              <ul>
                <li>Hello React</li>
                <li>Hello JSX</li>
                <li>Hello elements</li>
              </ul>
            </div>;  

{/* JSX COMMENT */}

const JSX = (
  <div>
    {/* THIS IS A COMMENT */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

{/* RENDER HTML ELEMENTS TO THE DOM */}

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render( JSX, document.getElementById('challenge-node'));

{/* DEFINE A HTML CLASS IN JSX */}

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

{/* SELF CLOSING JSX TAGS */}

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

{/* CREATE A STATELESS FUNCTIONAL COMPONENT */}

const MyComponent = function() {
  return <div>Hello React</div>;
}

{/* CREATE A REACT COMPONENT */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};

{/* CREATE A COMPONENT WITH COMPOSITION */}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};

{/* USE REACT TO RENDER NESTED COMPONENTS */}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
    <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};

{/* COMPOSE REACT COMPONENTS */}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

{/* RENDER A CLASS COMPONENT TO THE DOM */}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render( <TypesOfFood />, document.getElementById('challenge-node'));

{/* WRITE A REACT COMPONENT FROM SCRATCH */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

{/* PASS PROPS TO A STATELESS FUNCTIONAL COMPONENT */}

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};

{/* PASS AN ARRAY AS PROPS */}

const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['pray', 'walk']}/>
        <h2>Tomorrow</h2>
        <List tasks={['breakfast', 'work', 'lunch']}/>
      </div>
    );
  }
};

{/* USE DEFAULT PROPS */}

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = { items: 0 };

{/* OVERRIDE DEFAULT PROPS */}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};

{/* USE PROPTYPES TO DEFINE THE PROPS YOU EXPECT */}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {quantity: PropTypes.number.isRequired};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

{/* ACCESS PROPS USING THIS.PROPS */}

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <Welcome name={'Johan'}/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};

{/* REVIEW USING PROPS WITH STATELESS COMPONENTS */}

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

Camper.defaultProps = { name: 'CamperBot'};
Camper.propTypes = { name: PropTypes.string.isRequired};

{/* CREATE A STATEFUL COMPONENT */}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName : 'Johan'};
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

{/* RENDER STATE IN THE USER INTERFACE */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

{/* RENDER STATE IN THE USER INTERFACE IN ANOTHER WAY */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};

{/* SET STATE WITH THIS.SETSTATE */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ name: 'React Rocks!'});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

{/* BIND THIS TO A CLASS METHOD */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

{/* WRITE A SIMPLE COUNTER */}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(state => ({ count: state.count + 1}));
  }
  decrement() {
      this.setState(state => ({ count: state.count - 1}));
  }
  reset() {
    this.setState({ count: 0});
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

{/* CREATE A CONTROLLED INPUT */}

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

{/* CREATE A CONTROLLED FORM */}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({ submit: this.state.input })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

{/* PASS STATE AS PROPS TO CHILD COMPONENTS */}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};

{/*  TOGGLE VISIBILITY */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({ visibility: !state.visibility }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


{/* PASS A CALLBACK AS PROPS */}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

{/* USE THE LIFECYCLE METHOD COMPONENTWILLMOUNT */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    {console.log('Hello React!')};
  }
  render() {
    return <div />
  }
};

{/* USE THE LIFECYCLE METHOD COMPONENTDIDMOUNT */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        activeUsers: state.activeUsers + 25
      }));
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};

{/* ADD EVENT LISTENERS */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);

  }

  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the Q key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 81) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};


{/* OPTIMIZE RE-RENDERS WITH SHOULDCOMPONENTUPDATE */}

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
    this.subtractValue = this.subtractValue.bind(this);
  }
  addValue() {
    this.setState( state => ({
      value: this.state.value + 1
    }));
  }
  subtractValue() {
    this.setState( state => ({
      value: this.state.value - 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <button onClick={this.subtractValue}>Subtract</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

{/* JSX INLINE STYLES */}

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>I am a BIG RED color</div>
    );
  }
};

{/* ADD INLINE STYLES IN REACT */}

const styles = {
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple"
};

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};

{/* USE ADVANCED JAVASCRIPT IN REACT RENDER METHODS */}

const inputStyle = {
  width: 235,
  margin: 5,
  padding: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}

{/* RENDER WITH AN IF-ELSE CONDITION */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
};

{/* USE && FOR A MORE CONCISE CONDITIONAL */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};

{/* USE A TERNARY EXPRESSION FOR CONDITIONAL RENDERING */}

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {
          this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
          }
      </div>
    );
  }
}

{/* RENDER CONDITIONALLY FROM PROPS */}

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!" } </h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

{/* CHANGE INLINE CSS CONDITIONALLY BASED ON COMPONENT STATE */}

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) { inputStyle={border: '3px solid red'}
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }

{/* USE ARRAY.MAP() TO DYNAMICALLY RENDER ELEMENTS */}

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items =this.state.toDoList.map(i => <li>{i}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

{/* GIVE SIBLING ELEMENTS A UNIQUE KEY ATTRIBUTE */}

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) => <li key={item}>{item}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

{/* USE ARRAY.FILTER() TO DYNAMICALLY FILTER AN ARRAY */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online === true);
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
}

{/* RENDER REACT ON THE SERVER WITH RENDERTOSTRING */}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App />);

{/* CREATE A REDUX STORE */}

const reducer = (state = 5) => {
  return state;
}

 const store = Redux.createStore(reducer);

{/* GET STATE FROM THE REDUX STORE */}

const store = Redux.createStore(
  (state = 5) => state);

let currentState = store.getState();

{/* DEFINE A REDUX ACTION */}

let action = {
  type: 'LOGIN'
}

{/* DEFINE AN ACTION CREATOR */}

const action = {
  type: 'LOGIN'
}
function actionCreator() {
  return action;
}

{/* DISPATCH AN ACTION EVENT */}

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());

{/* HANDLE AN ACTION IN THE STORE */}

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

{/* USE A SWITCH STATEMENT TO HANDLE MULTIPLE ACTIONS */}

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      }
      break;
    case 'LOGOUT':
    return {
      authenticated: false
    }
    break;
    default:
      return defaultState;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

{/* USE CONST FOR ACTION TYPES */}

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

{/* REGISTER A STORE LISTENER */}

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

store.subscribe(function () {
  count += 1;
})

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

{/* COMBINE MULTIPLE REDUCERS */}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);

{/* SEND ACTION DATA TO THE STORE */}

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  };
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

{/* USE MIDDLEWARE TO HANDLE ASYNCHRONOUS ACTIONS */}

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = data => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ["Jeff", "William", "Alice"]
      };
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

{/* WRITE A COUNTER WITH REDUX */}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  };
};

const decAction = () => {
  return {
    type: DECREMENT
  };
};

const store = Redux.createStore(counterReducer);

{/* NEVER MUTATE STATE */}

const ADD_TO_DO = "ADD_TO_DO";

const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code"
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:

      return state.concat(action.todo);

    default:
      return state;
  }
};

const addToDo = todo => {
  return {
    type: ADD_TO_DO,
    todo
  };
};

const store = Redux.createStore(immutableReducer);

{/* USE THE SPREAD OPERATOR ON ARRAYS */}

const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      let arr = [...state, action.todo];
      return arr;
    default:
      return state;
  }
};

const addToDo = todo => {
  return {
    type: "ADD_TO_DO",
    todo
  };
};

const store = Redux.createStore(immutableReducer);

{/* REMOVE AN ITEM FROM AN ARRAY */}

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
};

const removeItem = index => {
  return {
    type: "REMOVE_ITEM",
    index
  };
};

const store = Redux.createStore(immutableReducer);

{/* COPY AN OBJECT WITH OBJECT.ASSIGN */}

const defaultState = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp"
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE"
  };
};

const store = Redux.createStore(immutableReducer);
