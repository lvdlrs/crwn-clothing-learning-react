import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, ArrowIcon, Value, RemoveBtn} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const removeButtonHandler = () =>   clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <ArrowIcon onClick={removeItemHandler}>
                    &#10094;
                </ArrowIcon>
                   <Value>{quantity}</Value>
                <ArrowIcon onClick={addItemHandler}>
                    &#10095;
                </ArrowIcon>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveBtn onClick={removeButtonHandler}>&#10005;</RemoveBtn>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;