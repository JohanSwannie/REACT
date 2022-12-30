import { useState, useCallback } from 'react';
import DisplayArray from './DisplayArray';

export default function App() {
  const [digit, setDigit] = useState(1);
  const [image1, setImage1] = useState('https://thumbs.dreamstime.com/z/mathematics-perspective-background-vector-illustration-35796884.jpg');
  const [image2, setImage2] = useState('https://i.pinimg.com/originals/52/ec/4b/52ec4b926704380b5e4dd911f265b55e.jpg');
  const [darkTheme, setDarkTheme] = useState(false);

  const mathImages1 = ['https://previews.123rf.com/images/hatza/hatza1303/hatza130300070/18336346-mathematics-background.jpg',
                      'https://img.freepik.com/premium-vector/math-background_23-2148147194.jpg?w=2000',
                      'https://t3.ftcdn.net/jpg/04/05/80/88/360_F_405808828_lwfcYW72K3i3IsZQayyHg9kEqHpRrrET.jpg',
                      'https://thumbs.dreamstime.com/z/mathematics-perspective-background-vector-illustration-35796884.jpg',
                      'https://previews.123rf.com/images/ekaart/ekaart1610/ekaart161000549/67943436-the-science-and-mathematics-abstract-background-with-circles-cube-triangles-and-a-lot-of-lines-sacre.jpg'
                    ];

  const mathImages2 = ['https://previews.123rf.com/images/9george/9george1707/9george170700438/82113680-math-linear-mathematics-education-circle-background-with-geometrical-plots-seamless-background-doodl.jpg',
                       'https://media.istockphoto.com/id/1087006984/vector/mathematics-background.jpg?s=612x612&w=0&k=20&c=2zVNctDStD4_bLia0ZOsBmZmoTkzj4Tg864Qo08grdM=',
                       'https://i.pinimg.com/originals/52/ec/4b/52ec4b926704380b5e4dd911f265b55e.jpg',
                       'https://www.wallpaperflare.com/static/709/986/423/formula-mathematical-equation-wallpaper.jpg',
                       'https://t4.ftcdn.net/jpg/05/18/66/67/360_F_518666772_Eaw7vNiTehPqGe5cPeOi6fyFl4Ixxx1K.jpg'];

  const setDigits = useCallback((multiplier) => {
    if (!isNaN(digit) && digit > 0) {
      return [digit, digit * multiplier, ((digit * 2) * multiplier), ((digit * 4)  * multiplier),
             ((digit * 6) * multiplier), ((digit * 8) * multiplier), ((digit * 10) * multiplier)];
    } else {
      return ['Enter a valid Numeric value please!'];
    }
  }, [digit]);

  const setThemeStyle = {
    color: darkTheme ? '#FFF' : '#000',
    backgroundColor: darkTheme ? 'navy' : 'lightseagreen'
  };

  let image1Url = '';
  let image2Url = '';

  function handleInput(event) {
    event.preventDefault();
    setDigit(parseInt(event.target.value));
    image1Url = mathImages1[Math.floor(Math.random() * mathImages1.length)];
    image2Url = mathImages2[Math.floor(Math.random() * mathImages2.length)];
    setImage1(image1Url);
    setImage2(image2Url);
  }

  return (
    <div className="App" style={setThemeStyle}>
      <input type="number" value={digit} onChange={handleInput} />
      <button onClick={() => setDarkTheme(prevDarkTheme => !prevDarkTheme)}>Toggle Theme</button>
      <DisplayArray setDigits={setDigits} />
      {darkTheme ?
         <img src={image1} alt="Maths2" /> :
         <img src={image2} alt="Maths1" />
      }
    </div>
  );
}
