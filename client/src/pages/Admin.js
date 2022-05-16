import React from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

function Admin() {
    const [brandVisible, setBrandVisible] = React.useState(false)
    const [typeVisible, setTypeVisible] = React.useState(false)
    const [deviceVisible, setDeviceVisible] = React.useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2 p-2'
                onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2'
                onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-2 p-2'
                onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    )
}

export default Admin