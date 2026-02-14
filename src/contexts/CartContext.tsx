import { createContext, useState, type ReactNode } from 'react';
import type { ProductProps } from '../types/Product';

interface CartContextData {
	cart: CartProps[];
	cartAmount: number;
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

	return (
		<CartContext.Provider
			value={{
				cart,
				cartAmount: cart.length,
				addCartItem,
				removeCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
