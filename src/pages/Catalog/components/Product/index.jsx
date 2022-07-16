import { useState, useEffect } from 'react';
import { collection, doc, updateDoc, arrayUnion, getDocs } from 'firebase/firestore';
import { auth } from '../../../../firebase';
import { db } from '../../../../firebase';

import style from './product.module.scss';
import ButtonLike from '../../../../components/Button/ButtonLike';

const Product = ({ item }) => {
  const [addFavorite, setAddFavorite] = useState([]);
  let startFavorite = [];
  let userUrl = '';

  const addToFavorite = (el, activateBtn) => {
    if (!activateBtn) {
      startFavorite.push(el);
    } else {
      startFavorite = startFavorite.filter((obj) => obj.id !== el.id);
    }

    console.log(startFavorite);
  };
  const addToFavoriteDB = async () => {
    console.log(userUrl);
    setAddFavorite(startFavorite);
    await updateDoc(doc(db, 'users', userUrl), {
      favorire: arrayUnion(...addFavorite),
    });
  };

  const checkUserData = async () => {
    const firebaseUserData = await getDocs(collection(db, 'users'));
    const userAuthId = auth.currentUser;
    if (auth.currentUser) {
      firebaseUserData.forEach((doc) => {
        const docUserData = doc.data();
        if (docUserData.id === userAuthId.uid) {
          userUrl = doc._key.path.segments[6]; // здесь я получить путь к моему документу в firestore, чтоб была возможность добавлять в фавориты
          console.log(userUrl);
        }
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    checkUserData();
    return () => {
      addToFavoriteDB(userUrl);
    };
  }, []);

  return (
    <ul className={style.productList}>
      {item.map((el, index) => {
        return (
          <li key={el.id} className={style.productItem}>
            <figure>
              <img
                height={560}
                width={390}
                src={require('../../../../assets/img/Product/baba.jpg')}
                alt="clother"
              />
              <p className={style.bold}>
                <span className={el.salePrice ? style.line : ''}>от {el.price} руб.</span>
                {el.salePrice ? (
                  <span className={style.productSale}>от {el.salePrice} руб.</span>
                ) : null}
              </p>
              <figcaption>{el.title}</figcaption>
            </figure>
            <ButtonLike addToFavorite={(activeBtn) => addToFavorite(el, activeBtn, index)} />
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
//
