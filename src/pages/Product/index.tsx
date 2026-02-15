import { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { useParams } from 'react-router';
import type { ProductProps } from '../../types/Product';
import axios from 'axios';
import { api } from '../../services/api';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductProps>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getProductDetails() {
			try {
				const response = await api.get(`/products/${id}`);
				setProduct(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Erro na requisição:', error);
			}
		}

		getProductDetails();
	}, [id]);

	if (loading) {
		return (
			<div className="flex flex-col justify-center items-center mt-8 gap-4">
				<h1 className="text-lg text-slate-900">
					Carregando detalhes do produto...
				</h1>
			</div>
		);
	}

	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<section className="grid grid-cols-3 gap-3 mt-8">
					<div>
						<img
							className="h-80 w-full"
							src={product?.cover}
							alt={product?.title}
						/>
					</div>
					<div className="col-span-2 gap-2 mt-8">
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
							<button className="bg-zinc-800 p-1 rounded transition-transform hover:scale-105 cursor-pointer">
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
