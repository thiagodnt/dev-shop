import { useEffect, useState, useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { api } from '../../services/api';
import type { ProductProps } from '../../types/Product';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router';

const Home = () => {
	const [products, setProducts] = useState<ProductProps[]>([]);
	const { addCartItem } = useContext(CartContext);

	useEffect(() => {
		async function getProducts() {
			const response = await api.get('/products');
			setProducts(response.data);
		}

		getProducts();
	}, []);

	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<h1 className="font-bold text-2xl mb-4 mt-10 text-center text-slate-900">
					Produtos em Alta
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
					{products &&
						products.map((product) => (
							<section key={product.id} className="w-full">
								<Link to={`product/${product.id}`}>
									<img
										className="w-full rounded-lg max-h-70 mb-2 transition-transform hover:scale-105"
										src={product.cover}
										alt={product.title}
									/>
									<p className="font-medium mt-1 mb-2">
										{product.title}
									</p>
								</Link>

								<div className="flex gap-3 items-center">
									<strong className="text-zinc-700/90">
										{product.price.toLocaleString('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										})}
									</strong>
									<button
										className="bg-zinc-800 p-1 rounded transition-transform hover:scale-105 cursor-pointer"
										onClick={() => addCartItem(product)}
									>
										<BsCartPlus size={20} color="#FFF" />
									</button>
								</div>
							</section>
						))}
				</div>
			</main>
		</div>
	);
};

export default Home;
