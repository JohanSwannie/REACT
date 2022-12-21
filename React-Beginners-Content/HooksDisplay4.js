import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HooksDisplay4 = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/JohanSwannie/10ec52c77bd989e512f6474d1686fb36/raw/8b70394e951277d4c388dfec3c05635d31244ff0/jswan-persons1.json')
    .then(response => response.json())
    .then(result => {
      let allData1 = [];
      for (var i = 0; i < result.length; i++) {
        allData1.push(<li key={i}>Name : {result[i].name} --- Username : {result[i].username} --- Email : {result[i].email} <img src={result[i].imageUrl} style={{width: '5vw', height: '7vh'}} alt='picky' /></li>);
      }
      setData1(allData1);
    });
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      let allData2 = [];
      for (var j = 0; j < response.data.length; j++) {
        allData2.push(<li key={j}>Name : {response.data[j].name} --- Email : {response.data[j].email}</li>);
      }
      setData2(allData2);
    });
  }, []);

  return (
    <div className='hooks4'>
      <h2>Hooks 4 Display - FETCH</h2>
      <ul style={{listStyle: 'none'}}>
        {data1}
      </ul>
      <h2>Hooks 4 Display - AXIOS.GET</h2>
      <ul style={{listStyle: 'none'}}>
        {data2}
      </ul>
    </div>
  )
};

export default HooksDisplay4;
