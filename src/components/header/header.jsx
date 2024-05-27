import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
			<div className="container">
				<nav>
					<Link to={'/'}>
						<div className="logo-container">
							<h1 className="logo-title">React Redux Shopping Cart</h1>
						</div>
					</Link>
					<ul className="nav-links">
						<Link to={'/'}>
							<li>Home</li>
						</Link>
						<Link to={'/cart'}>
							<li>Cart</li>
						</Link>
					</ul>
				</nav>
			</div>
        </div>
    )
}