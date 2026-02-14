import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<h1 className="font-bold text-2xl mb-4 mt-10 text-center text-slate-900">
					Meu carrinho
				</h1>

				{cart.length === 0 && (
					<div className="flex flex-col justify-center items-center mt-8 gap-4">
						<h1 className="text-lg text-slate-900">
							Não há items no seu carrinho
						</h1>
						<div className="bg-slate-200/70 rounded-full p-4">
							<FaShoppingCart
								size={32}
								color="rgba(85, 106, 115, 0.6)"
							/>
						</div>
						<div className="bg-slate-600 py-1 px-3 rounded transition-transform hover:scale-105">
							<Link to="/" className="text-white">
								Acessar produtos
							</Link>
						</div>
					</div>
				)}

				{cart.map((item) => (
					<section
						key={item.id}
						className="grid grid-cols-4 border-b-2 border-gray-300"
					>
						<img className="w-28" src={item.cover} alt={item.title} />

						<div className="flex items-center">
							<strong className="text-xs md:text-base">
								Preço:{' '}
								{item.price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
						</div>

						<div className="flex items-center justify-center gap-3">
							<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
								-
							</button>
							{item.amount}
							<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
								+
							</button>
						</div>

						<div className="flex justify-end items-center w-full">
							<strong className="text-xs md:text-base">
								SubTotal:{' '}
								{item.total.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
						</div>
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
