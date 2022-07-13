import { useState } from 'react';

import Empty from './components/Empty';

function Favorite() {
  const [favotiteProduct, setFavoriteProduct] = useState([]);

  return <div className="container">{favotiteProduct.length !== 0 ? <h1>WWW</h1> : <Empty />}</div>;
}

export default Favorite;
