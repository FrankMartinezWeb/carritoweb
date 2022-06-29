import React, {useState, Fragment} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Cartitem from './Cartitem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Cart(props){
	const setCart = props.setCart
	let desc = 0;
	let subtotal = 0;
	const [st, setSt] = useState([
		{id: 1, stocks: 1},
		{id: 2, stocks: 1},
		{id: 3, stocks: 1},
		{id: 4, stocks: 1},
		{id: 5, stocks: 1},
	])
	let stks = 0;
	return(
		<Fragment>
			<Modal scrollable={true} show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Carrito</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						{props.cart.length === 0 ? 
							(<h5>No hay productos</h5>) : 
							(<Fragment>
								{props.cart.map( c => 
									<Cartitem 
									key={c.id}
									cart={c}
									setCart={setCart}
									carts={props.cart}
									st={st}
									setSt={setSt}
									/>
								)
								}
								<Col sm={12}>
									<Card>
										<Card.Body className="text-end">
											<Card.Text>Sub total: S/
												{props.cart.map(c => {
													stks = st.find(s => s.id === c.id)
													subtotal += c.precio * stks.stocks
													desc += 10 * stks.stocks
												})}
												{subtotal}
											</Card.Text>
											<Card.Text>Descuento: S/{desc}</Card.Text>
											<Card.Text>Total: S/{subtotal - desc}</Card.Text>
											<Button className="m-1" variant="primary" onClick={props.toggleShow}>
												Confirmar Compra
												<FontAwesomeIcon className="ms-2" icon={faCheck} />
											</Button>
										</Card.Body>
									</Card>
								</Col>
							</Fragment>)
						}
					</Row>
				</Modal.Body>
			</Modal>
		</Fragment>
	)
}

export default Cart;