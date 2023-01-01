export default function DataArray({dataArray}) {

  const dataArrayStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    backgroundColor: 'lightblue',
    border: '7px solid black',
    borderStyle: 'double',
    padding: '1rem',
    marginBottom: '2rem'
  };

  const ulStyle = {
    textAlign: 'left',
    fontSize: '16px',
    listStyle: 'none'
  };

  return (
    <div>
      <h2>Music Pieces, Composers & Year Composed</h2>
      <div style={dataArrayStyle}>
      { dataArray.map((item, index) => {
        return <ul style={ulStyle}>
            <li key={index}><em>Music Piece  </em><b>{JSON.stringify(item.name)}</b>
                <em>Composer  </em><b>{JSON.stringify(item.composer)}</b>
                <em>Composed  </em><b>{JSON.stringify(item.year)}</b>
            </li>
          <br></br>
        </ul>
      })}
      </div>
    </div>
  );
}
