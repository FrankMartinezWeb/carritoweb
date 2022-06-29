import React, {Fragment} from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Burger(props) {
	const cart = props.cart
	const burger = props.burger
	const {id, nombre, precio, stock, image} = burger

	const addBurger = idF =>{
		const burgerF = props.burgers.filter((burger) => burger.id === idF)
		const cartF = props.cart.find((car) => car.id === idF)
		props.setCart(
			cartF ?
			[...cart] :
			[...cart,...burgerF]
		)
	}

	return (
		<Fragment>
			<Col sm={12} md={6} lg={4} className="mb-5" key={burger.id}>
				<Card>
					<Card.Img variant="top" src={image} alt={nombre}/>
					<Card.Body>
						<Card.Title className="fs-2 text-center">{nombre}</Card.Title>
						<Card.Text className="fs-3 text-center">$ {precio}</Card.Text>
						<Card.Text className="fs-3 text-center">Cantidad: {stock}</Card.Text>
						<Button variant="success" className="d-block mx-auto" onClick={() => addBurger(id)}>
							Agregar
							<FontAwesomeIcon className="ms-2" icon={faPlus} />
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</Fragment>
	);
}
 
export default Burger;