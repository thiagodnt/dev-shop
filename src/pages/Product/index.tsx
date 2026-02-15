import { useContext, useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Link, useParams, useNavigate } from 'react-router';
import { api } from '../../services/api';
import type { ProductProps } from '../../types/Product';
import { CartContext } from '../../contexts/CartContext';
import { FaFaceFrown } from 'react-icons/fa6';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductProps>();
	const [loading, setLoading] = useState(true);
	const { addCartItem } = useContext(CartContext);
	const navigate = useNavigate();

	useEffect(() => {
		async function getProductDetails() {
			try {
				const response = await api.get(`/products/${id}`);
				setProduct(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Erro na requisição:', error);
				setLoading(false);
			}
		}

		getProductDetails();
	}, [id]);

	function handleAdditem(product: ProductProps) {
		addCartItem(product);
		navigate('/cart');
	}

	if (loading) {
		return (
			<div className="flex flex-col justify-center items-center mt-8 gap-4">
				<h1 className="text-lg text-slate-900">
					Carregando detalhes do produto...
				</h1>
			</div>
		);
	}

	if (!product) {
		return (
			<div className="flex flex-col justify-center items-center mt-8 gap-4">
				<h1 className="text-lg text-slate-900 font-bold">
					Produto não encontrado
				</h1>
				<div className="bg-slate-200/70 rounded-full p-4">
					<FaFaceFrown size={32} color="rgba(85, 106, 115, 0.6)" />
				</div>
				<div className="bg-slate-600 py-1 px-3 rounded transition-transform hover:scale-105">
					<Link to="/" className="text-white">
						Acessar produtos
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
					<div>
						<img
							className="max-h-72 w-full object-contain"
							src={product?.cover}
							alt={product?.title}
						/>
					</div>
					<div className="md:col-span-2 gap-2 mt-8">
						<h1 className="text-2xl font-bold">{product?.title}</h1>
						<p className="text-base mt-3">{product?.description}</p>
						<div className="flex items-center gap-3 mt-4">
							<p className="font-bold">
								Preço:{' '}
								{product?.price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
							<button
								className="bg-zinc-800 p-1 rounded transition-transform hover:scale-105 cursor-pointer"
								onClick={() => handleAdditem(product)}
							>
								<BsCartPlus size={20} color="#FFF" />
							</button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Product;
