import eknmPiece  from './Eine-Kleine-Nachtmusik.mp3';
import fuPiece from './Fur-Elise.mp3';
import ombcPiece from './O-Mio-Babbino-Caro.mp3';
import tfPiece from './Toccata-Fugue-D-minor.mp3';
import fsPiece from './Vivaldi-four-Seasons.mp3';
import cPiece from './Carmen-Bizet.mp3';
import bdPiece from './Blue-Danube.mp3';
import boPiece from './Bolero.mp3';


export default function DataArray({dataArray}) {

  const dataArrayStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    backgroundColor: 'lightblue',
    border: '7px solid black',
    borderStyle: 'double',
    padding: '1rem',
    marginBottom: '2rem',
    marginTop: '2rem'
  };

  const ulStyle = {
    textAlign: 'left',
    fontSize: '16px',
    listStyle: 'none'
  };

  const liStyle = {
    width: '30vw',
    float: 'left',
    marginRight: '1rem',
    lineHeight: '3'
  };

  return (
    <div>
      <h2>Music Pieces, Composers & Year Composed</h2>
      <div style={dataArrayStyle}>
      { dataArray.map((item, index) => {
        return <ul style={ulStyle}>
            <li style={liStyle} key={index}><em>Music Piece  </em><b>{JSON.stringify(item.name)}</b>
                <em>Composer  </em><b>{JSON.stringify(item.composer)}</b>
                <em>Composed  </em><b>{JSON.stringify(item.year)}</b>
            </li>
            <li>
                {index === 0 && <audio src={eknmPiece} controls />}
                {index === 1 && <audio src={fuPiece} controls />}
                {index === 2 && <audio src={ombcPiece} controls />}
                {index === 3 && <audio src={tfPiece} controls />}
                {index === 4 && <audio src={fsPiece} controls />}
                {index === 5 && <audio src={cPiece} controls />}
                {index === 6 && <audio src={bdPiece} controls />}
                {index === 7 && <audio src={boPiece} controls />}
            </li>
         </ul>
      })}
      </div>
    </div>
  );
}
