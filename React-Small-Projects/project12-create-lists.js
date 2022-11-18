import React from "react";
import ReactDOM from 'react-dom';
import {
  useState
} from 'react';
import {
  FaTrashAlt
} from 'react-icons/fa';
import "./lists.css";


const ListArrayFooter = () => {
  const today = new Date();
  return ( <
    footer >
    <
    p > Copyright & copy; {
      today.getFullYear()
    } < /p> <
    /footer>
  )
}


const ListArray = () => {
  const [elements, setElements] = useState([{
      id: 1,
      checked: false,
      item: "Waltzing Mathilda"
    },
    {
      id: 2,
      checked: true,
      item: "Dancing in the Moonlight"
    },
    {
      id: 3,
      checked: false,
      item: "Dance of the Lilly Flowers"
    },
    {
      id: 4,
      checked: false,
      item: "Save the last dance for me"
    }
  ]);

  const handleCheck = (id) => {
    const listElements = elements.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item);
    setElements(listElements);
    localStorage.setItem('shoppinglist', JSON.stringify(listElements));
  }

  const handleDelete = (id) => {
    const listElements = elements.filter((item) => item.id !== id);
    setElements(listElements);
    localStorage.setItem('shoppinglist', JSON.stringify(listElements));
  }

  return ( <
    main > {
      elements.length ? ( <
        ul > {
          elements.map((item) => ( <
            li className = "item"
            key = {
              item.id
            } >
            <
            input type = "checkbox"
            onChange = {
              () => handleCheck(item.id)
            }
            checked = {
              item.checked
            }
            /> <
            label style = {
              (item.checked) ? {
                textDecoration: 'line-through'
              } : null
            }
            onDoubleClick = {
              () => handleCheck(item.id)
            } >
            {
              item.item
            } < /label> <
            FaTrashAlt onClick = {
              () => handleDelete(item.id)
            }
            role = "button"
            tabIndex = "0" /
            >
            <
            /li>
          ))
        } <
        /ul>
      ) : ( <
        p style = {
          {
            marginTop: '2rem'
          }
        } > Your list is empty. < /p>
      )
    } <
    /main>
  )
}

function App() {
  return ( <
    div id = 'mainbox' >
    <
    h2 id = 'h2' > Array Lists in a nutshell < /h2> <
    ListArray / >
    <
    ListArrayFooter / >
    <
    /div>
  );
};

ReactDOM.render( < App / > , document.getElementById("root"));
