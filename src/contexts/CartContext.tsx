import { createContext, useEffect, useState, type ReactNode } from 'react';
import type { ProductProps } from '../types/Product';

interface CartContextData {
	cart: CartProps[];
	cartAmount: number;
	cartTotalPrice: number;
	addCartItem: (newItem: ProductProps) => void;
	removeCartItem: (product: CartProps) => void;
}

interface CartProps {
	id: number;
	title: string;
	description: string;
	price: number;
	cover: string;
	amount: number;
	total: number;
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<CartProps[]>([]);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	useEffect(() => {
		getCartTotalPrice(cart);
	}, [cart]);

	function addCartItem(newItem: ProductProps) {
		setCart((prevCart) => {
			const itemIndex = prevCart.findIndex((item) => item.id === newItem.id);

			if (itemIndex !== -1) {
				const updatedCart = [...prevCart];

				updatedCart[itemIndex] = {
					...updatedCart[itemIndex],
					amount: updatedCart[itemIndex].amount + 1,
					total:
						(updatedCart[itemIndex].amount + 1) *
						updatedCart[itemIndex].price,
				};

				return updatedCart;
			}

			return [
				...prevCart,
				{
					...newItem,
					amount: 1,
					total: newItem.price,
				},
			];
		});
	}

	function removeCartItem(product: CartProps) {
		setCart((prevCart) => {
			const itemIndex = prevCart.findIndex((item) => item.id === product.id);
			const updatedCart = [...prevCart];

			if (prevCart[itemIndex]?.amount > 1) {
				updatedCart[itemIndex] = {
					...updatedCart[itemIndex],
					amount: updatedCart[itemIndex].amount - 1,
					total:
						updatedCart[itemIndex].total - updatedCart[itemIndex].price,
				};

				return updatedCart;
			}

			const filteredCart = updatedCart.filter(
				(item) => item.id !== product.id,
			);
			return filteredCart;
		});
	}

	function getCartTotalPrice(items: CartProps[]) {
		setCartTotalPrice(
			items.reduce((acc, obj) => {
				return acc + obj.total;
			}, 0),
		);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				cartAmount: cart.length,
				cartTotalPrice,
				addCartItem,
				removeCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
