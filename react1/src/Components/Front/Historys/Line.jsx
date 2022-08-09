import { useContext } from 'react';
import AukaCreate from '../Aukos/Create';
import AukuList from '../Aukos/List';
import FrontContext from '../FrontContext';

function Line({ line }) {
  const { aukos } = useContext(FrontContext);
  let totalSum = 0;
  if (aukos) {
    aukos.map((a) => (a.ist_id === line.id ? (totalSum += a.sum) : null));
  }

  console.log('Total: ' + totalSum);
  return (
    <li className="istorijos">
      {/* {
  totalSum < line.max_sum ?  ( <>   <h3>{line.title}</h3>
  <p>{line.content}</p>
  <h2>reikiama suma: {line.max_sum}</h2>
  <h2>paaukota suma: {totalSum}</h2>
  <h2>truksta: {line.max_sum-totalSum}</h2>
  {totalSum<line.max_sum? <AukaCreate nr={line.id}/>:<h1>DONE</h1>}

  <AukuList nr={line.id}/></> ):null
} */}
      <div className="flex-column fixed-width">
        {line.photo ? (
          <div className="photo">
            <img src={line.photo} alt="img" />
          </div>
        ) : null}
        <div className="istorija">
          <h2>{line.title}</h2>
          <p>{line.content}</p>
        </div>
        <div className="flex-column">
          <b>Reikiama suma: {line.max_sum} eu.</b>
          <b>Paaukota suma: {totalSum} eu.</b>
          {totalSum < line.max_sum ? (
            <b>
              Trūksta:{' '}
              <span style={{ color: 'red' }}>{line.max_sum - totalSum}</span>{' '}
              eu.
            </b>
          ) : null}
        </div>

        {totalSum < line.max_sum ? (
          <AukaCreate nr={line.id} />
        ) : (
          <b className="blue">Šį istorija jau surinko reikiamą lėšų sumą.</b>
        )}
        {/* <AukaCreate nr={line.id}/> */}
        {/* paaukojo {line.name} {line.sum} eu */}
      </div>
      <AukuList nr={line.id} />
    </li>
  );
}

export default Line;
