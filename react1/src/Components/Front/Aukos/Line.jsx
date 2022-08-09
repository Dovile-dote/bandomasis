// import { useContext } from 'react';
// import BackContext from '../BackContext';

function Line({ line }) {
  // console.log(line);
  return (
    <li>
      {line.name} paaukojo {line.sum} eu
    </li>
  );
}

export default Line;
