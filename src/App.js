import React, {Fragment, useState} from 'react';

import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';
import Badge  from 'react-bootstrap/Badge';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

import Burger from './components/Burger';
import Cart from './components/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-regular-svg-icons';
// import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

import Chicken from './assets/img/Chicken.png';
import Criolla from './assets/img/Criolla.png';
import Patagonia from './assets/img/patagonia.png';
import Salteña from './assets/img/Salteña.png';
import Porteña from './assets/img/Porteña.png';

function App(){

	const [burgers, setBurgers] = useState([
		{ id: 1, nombre: 'Hamburguesa Chicken', precio: 250, stock: 5, image: Chicken},
		{ id: 2, nombre: 'Hamburguesa Criollar', precio: 180, stock: 2, image: Criolla},
		{ id: 3, nombre: 'Hamburguesa Patagonia', precio: 150, stock: 3, image: Patagonia},
		{ id: 4, nombre: 'Hamburguesa Salteña', precio: 200, stock: 7, image: Salteña},
		{ id: 5, nombre: 'Hamburguesa Porteña', precio: 240, stock: 2, image: Porteña},
	])

	const [cart, setCart] = useState([]);

	/* ---------- Modal ---------- */
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	/* ---------- Toggle ---------- */
	const [showT, setShowT] = useState(false);
  	const toggleShow = () => {
		setShow(false)
		setCart([])
		setShowT(!showT)
	};

	return (
		<Fragment>
			<Container className="mt-5">
				<Row>
					<Col xs={10} sm={11} >
						<h1 className="text-center mb-5">Tienda de Hamburguesa</h1>
					</Col>
					<Col xs={2} sm={1}>
						<Button variant="primary" className="bg-white border-0 shadow-none position-relative" onClick={handleShow}>
							<FontAwesomeIcon className="text-primary fs-2" icon={faCartShopping} /><Badge className="position-absolute top-0 end-0 rounded-circle" bg="danger">{cart.length}</Badge>
						</Button>
					</Col>
				</Row>
				<Row>
					{
						burgers.map((burger) => (
							<Burger 
								key={burger.id}
								burger={burger}
								cart={cart}
								setCart={setCart}
								burgers={burgers}
							/>
						))
					}
					<Cart 
						cart={cart} 
						setCart={setCart}
						burger={burgers}
						show={show}
						handleClose={handleClose}
						toggleShow={toggleShow}
					/>
					<ToastContainer position="bottom-end" className="py-3 position-fixed">
						<Toast show={showT} onClose={toggleShow} autohide={true} delay={2000}>
							<Toast.Header>
								<strong className="me-auto">Tienda de Burger</strong>
								<small>En este momento</small>
							</Toast.Header>
							<Toast.Body className="text-white bg-primary">Compra Realizada</Toast.Body>
						</Toast>
					</ToastContainer>
				</Row>
			</Container>
		</Fragment>
	);
}

export default App;
