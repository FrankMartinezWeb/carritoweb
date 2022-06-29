import React, {useState, Fragment} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faMinus } from '@fortawesome/free-solid-svg-icons';

function Cartitem(props){
	const st = props.st
	const setSt = props.setSt
	const carts = props.carts
	const cart = props.cart
	const {id, nombre, precio, stock, image} = cart

	const [precios , setPrecios] = useState(0);
	const [stocks , setStocks] = useState(1);

	const delBurger = (idD) => {
		const ct = carts.filter( c => c.id !== idD)
		props.setCart(ct)
	}

	const handleChangeStock = (e) => {
		if(e.target.value <= stock){
			setStocks(e.target.value)
		}
	}

	const addNumber = () => {
		let s = parseInt(document.getElementById(`stock${id}`).value);
		console.log(s)
		let stocksN = stocks + 1;
		const stfilter = st.filter( sts => sts.id !== id)
		if(stocksN > stock) {
			setStocks(stock)
			setPrecios(precio * stock)
			setSt([...stfilter, {id: id, stocks: stock}])
		}else{
			setStocks(stocksN)
			setPrecios(precio * stocksN)
			setSt([...stfilter, {id: id, stocks: stocksN}])
		}
	}

	const delNumber = () => {
		let s = parseInt(document.getElementById(`stock${id}`).value);
		let stocksN = s - 1;
		const stfilter = st.filter( sts => sts.id !== id)
		if(stocksN < 1){
			setStocks(1)
			setPrecios(precio * 1)
			setSt([...stfilter, {id: id, stocks: 1}])
		}else{
			setStocks(stocksN)
			setPrecios(precio * stocksN)
			setSt([...stfilter, {id: id, stocks: stocksN}])
		}
	}

	return(
		<Fragment>
			<Col sm={12} className="mb-3">
				<Card>
					<Row>
						<Col sm={5} className="my-auto">
							<Card.Img variant="top" src={image} alt={nombre}/>
						</Col>
						<Col sm={7}>
							<Card.Body>
								<Card.Title className="fs-2">{nombre}</Card.Title>
								<Card.Text className="fs-3">$ {precios === 0 ? precio : precios}</Card.Text>
								<Button className="m-1 align-baseline" onClick={addNumber} variant="primary">
									<FontAwesomeIcon icon={faPlus} />
								</Button>
								<Form.Control id={`stock${id}`} type="text" className="w-25 d-inline-block text-center" onChange={handleChangeStock} value={stocks}/>
								<Button className="m-1 align-baseline" onClick={delNumber} variant="danger" >
									<FontAwesomeIcon icon={faMinus} />
								</Button>
							</Card.Body>
							<Card.Body>
							<Button className="m-1" variant="danger" onClick={() => delBurger(id)}>
								Eliminar
								<FontAwesomeIcon className="ms-2" icon={faXmark} />
							</Button>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Col>
		</Fragment>
	)
}

export default Cartitem;