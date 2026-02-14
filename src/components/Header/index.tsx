import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
	const { cartAmount } = useContext(CartContext);

	return (
		<header className="w-full px-1 bg-slate-200">
			<nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
				<Link className="font-bold text-2xl text-slate-900" to="/">
					Dev Shop
				</Link>
				<Link className="relative" to="/cart">
					<FiShoppingCart size={26} color="#0f172b" />
					{cartAmount > 0 && (
						<span className="absolute -top-3 -right-3 w-6 h-6 px-2.5 rounded-full flex justify-center items-center bg-sky-600 text-white text-xs">
							{cartAmount}
						</span>
					)}
				</Link>
			</nav>
		</header>
	);
};

export default Header;
