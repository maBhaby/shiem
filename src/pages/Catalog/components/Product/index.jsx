import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { auth } from '../../../../firebase';
import { db } from '../../../../firebase';

import style from './product.module.scss';
import ButtonLike from '../../../../components/Button/ButtonLike';

const Product = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const userFireStoreID = null;

  // const addToFavoriteDB = () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  const addToFavorite = (el) => {
    setFavorite(!favorite);
    console.log(el);
    const userAuthId = auth.currentUser.uid;
    console.log(userAuthId);
  };

  const checkUserData = async () => {
    const firebaseUserData = await getDocs(collection(db, 'users'));
    const userAuthId = auth.currentUser;

    firebaseUserData.forEach((doc) => {
      const docUserData = doc.data();
      if (docUserData.id === userAuthId.uid) {
        console.log(docUserData, userAuthId.uid);
      }
    });
  };

  useEffect(() => {
    checkUserData();
  }, []);

  return (
    <ul className={style.productList}>
      {item.map((el) => {
        return (
          <li key={el.id} className={style.productItem}>
            <figure>
              <img
                height={560}
                src={require('../../../../assets/img/Product/baba.jpg')}
                alt="clother"
              />
              <p className={style.line}>
                от {el.price} руб.
                {el.salePrice ? (
                  <span className={style.productSale}>от {el.salePrice} руб.</span>
                ) : null}
              </p>
              <figcaption>{el.title}</figcaption>
            </figure>
            <ButtonLike favorite={favorite} handelClick={() => addToFavorite(el)} />
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
