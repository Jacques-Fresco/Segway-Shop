import classes from './Accessories.module.css';
import accessories from '../../data/accessories.json';
import { addToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import PlusMinusButton from '../utitlities/PlusMinusButton';

function Accessories() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  return (
    <div className={classes.wrapper}>
      <div id='accessories' className={classes.accessories}>
        {accessories.map((elem) => {
          return (
            <div key={elem.id} className={classes.accessory}>
              <div className={classes.image}>
                <img
                  src={require(`../../assets/images/accessories/${elem.image}.png`)}
                  alt={elem.image}></img>
              </div>

              <div className={classes.header}>{elem.name1}</div>
              <div className={classes.header2}>{elem.name2}</div>
              <div className={classes.description}>{elem.description}</div>
              <div className={classes.price}>{elem.price}</div>
              {cart.cart.find((item) => item.id === elem.id)?.quantity > 0 ? (
                <PlusMinusButton
                  className={classes.plus}
                  elem={cart.cart.find((item) => item.id === elem.id)}
                />
              ) : (
                <button
                  onClick={() => dispatch(addToCart(elem))}
                  className={classes.button}>
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accessories;
