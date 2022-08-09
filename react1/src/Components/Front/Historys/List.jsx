import { useContext } from 'react';
import Line from './Line';
import FrontContext from '../FrontContext';

function List() {
  const { historys } = useContext(FrontContext);
  // let kiek = 0;
  // if (historys) {
  //   //  console.log(historys[0].aukos.split(','));
  //    const sumArr =historys[1].aukos.split(',');
  //    for (let i = 0; i < sumArr.length; i++) {
  //     kiek += Number(sumArr[i]);
  //   }
  // }
  // console.log(kiek);

  return (
    <>
      <div className="list front-list">
        <h1>Istorijos, prašymai, pasiūlymai</h1>
        <ul>
          {historys
            ? historys.map((c, i) =>
                c.status ? <Line key={i} line={c}></Line> : null
              )
            : null}
        </ul>
      </div>
    </>
  );
}

export default List;
