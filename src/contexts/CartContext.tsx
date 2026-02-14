import { createContext, useState, type ReactNode } from 'react';
import type { ProductProps } from '../types/Product';

interface CartContextData {
	cart: CartProps[];
	cartAmount: number;
	addCartItem: (product: ProductProps) => void;
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

	function addCartItem(newItem: ProductProps) {
		const itemIndex = cart.findIndex((item) => item.id === newItem.id);

		if (itemIndex !== -1) {
			let cartList = cart;

			cartList[itemIndex].amount += 1;
			cartList[itemIndex].total =
				cartList[itemIndex].amount * cartList[itemIndex].price;
			return;
		}

		let data = {
			...newItem,
			amount: 1,
			total: newItem.price,
		};

		setCart((products) => [...products, data]);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				cartAmount: cart.length,
				addCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
