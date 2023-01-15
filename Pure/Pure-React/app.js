const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("p", { key: 2 }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: 3 },
      "React IS Rendered"
    ),
    React.createElement(Person, {
      name: "Swannie",
      occupation: "Developer",
      key: 4,
    }),
    null,
    React.createElement(Person, {
      name: "Stellie",
      occupation: "Payroll Expert",
      key: 5,
    }),
    null,
    React.createElement(Person, {
      name: "Mandy",
      occupation: "Doctor",
      key: 6,
    }),
    null,
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
