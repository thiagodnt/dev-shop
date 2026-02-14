import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<h1 className="font-bold text-2xl mb-4 mt-10 text-center">
					Meu carrinho
				</h1>

				{cart.map((item) => (
					<section
						key={item.id}
						className="flex items-center justify-between border-b-2 border-gray-300"
					>
						<img className="w-28" src={item.cover} alt={item.title} />

						<strong>
							Preço:{' '}
							{item.price.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</strong>

						<div className="flex items-center justify-center gap-3">
							<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
								-
							</button>
							{item.amount}
							<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
								+
							</button>
						</div>

						<strong className="float-right">
							SubTotal:{' '}
							{item.total.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</strong>
					</section>
				))}
				{cart.length > 0 && (
					<p className="font-bold mt-4">Total: R$ 1000.00</p>
				)}
			</main>
		</div>
	);
};

export default Cart;
