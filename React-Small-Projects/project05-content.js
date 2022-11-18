import React from 'react';

class Content extends React.Component {
  render() {
    const toDoList = ['Eat Breakfast', 'Brush Teeth', 'Work', 'Eat Lunch', 'Gym', 'Family Time', 'Eat Dinner'];
    const items1 = toDoList.map(item => <li>{item}</li>);
    const shortList = [];
    const items2 = toDoList.filter(item => {
      if (item.length < 5) {
        shortList.push(item);
      }
    });
    const items3 = shortList.map(item => <li>{item}</li>);
    return (
      <section>
        <h4>Long List</h4>
          <ul>{items1}</ul>
        <h4>Short List</h4>
          <ul>{items3}<br /></ul>
      </section>
    );
  }
};

export default Content;
 
