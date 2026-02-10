const Cart = () => {
	return (
		<div>
			<main className="w-full max-w-7xl px-4 mx-auto">
				<h1 className="font-bold text-2xl mb-4 mt-10 text-center">
					Meu carrinho
				</h1>

				<section className="flex items-center justify-between border-b-2 border-gray-300">
					<img
						className="w-28"
						src="https://images.tcdn.com.br/img/img_prod/1324137/notebook_gamer_rog_strix_g17_g713pv_ws94_amd_ryzen_9_7845hx_tela_wqhd_17_3_16gb_de_ram_1tb_ssd_gefor_731_2_436052eaf2198bde0074f52459c192c3.jpg"
						alt="Imagem do Produto"
					/>

					<strong>Preço: R$ 1000.00</strong>

					<div className="flex items-center justify-center gap-3">
						<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
							-
						</button>
						1
						<button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
							+
						</button>
					</div>

					<strong className="float-right">SubTotal: R$ 1000.00</strong>
				</section>
				<p className="font-bold mt-4">Total: R$ 1000.00</p>
			</main>
		</div>
	);
};

export default Cart;
