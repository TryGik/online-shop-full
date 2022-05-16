import React, { useEffect } from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import bigStar from '../assets/bigStar.png'
import { fetchOneDevices } from '../http/deviceAPI'

function DevicePage() {
    // const device = { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://cdn2.from.ae/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_173_132_2.jpg' }
    // const description = [
    //     { id: 1, title: 'Оперативная пямять', description: '5 ГБ' },
    //     { id: 2, title: 'Камера', description: '12 мп' },
    //     { id: 3, title: 'Процессор', description: 'Эльбрус' },
    //     { id: 4, title: 'Кол-во ядер', description: '12' },
    //     { id: 5, title: 'Аккумулятор', description: '4000' },
    // ]
    const [device, setDevice] = React.useState({ info: [] })
    const { id } = useParams()
    fetchOneDevices(id).then(data => setDevice(data))
    useEffect(() => {

    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
                        <h3>От :{device.price} руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row >
            <Row className='d-flex flex-column m-5'>
                <h2>Характеристики: </h2>
                {device.info.map((info, index) =>
                    <Row key={info.id}
                        style={{ background: index % 2 === 0 ? 'lightgray' : 'transtarent', padding: 10 }}
                    >
                        {info.title}:{info.description}
                    </Row>
                )}
            </Row>
        </Container >
    )
}

export default DevicePage