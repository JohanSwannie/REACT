import React from "react";

const Header = () => {
  const currDte = new Date();
  let mth = '0';
  let currMth = currDte.getMonth() + 1;
  if (currMth < 10) {
    currMth = mth + currMth;
  }
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = currDte.getDay();
  let fullDate = (days[day] + '  ' + currDte.getFullYear() + '-' + currMth + '-' + currDte.getDate());
  return (
    <div>
      <header>
        <h3>Tasks for {fullDate}</h3>
     </header>
    </div>
  );
};

export default Header;
