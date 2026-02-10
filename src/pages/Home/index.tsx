import { BsCartPlus } from 'react-icons/bs';

const Home = () => {
	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<h1 className="font-bold text-2xl mb-4 mt-10 text-center">
					Produtos em Alta
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
					<section className="w-full">
						<img
							className="w-full rounded-lg max-h-70 mb-2"
							src="https://images.tcdn.com.br/img/img_prod/1324137/notebook_gamer_rog_strix_g17_g713pv_ws94_amd_ryzen_9_7845hx_tela_wqhd_17_3_16gb_de_ram_1tb_ssd_gefor_731_2_436052eaf2198bde0074f52459c192c3.jpg"
							alt="Imagem do Produto"
						/>
						<p className="font-medium mt-1 mb-2">Notebook Gamer</p>

						<div className="flex gap-3 items-center">
							<strong className="text-zinc-700/90">R$ 5000.00</strong>
							<button className="bg-zinc-800 p-1 rounded transition-transform hover:scale-105 cursor-pointer">
								<BsCartPlus size={20} color="#FFF" />
							</button>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Home;
