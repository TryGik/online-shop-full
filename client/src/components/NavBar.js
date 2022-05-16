import React, { useContext } from 'react'
import { Context } from '../index'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav.Link style={{ color: 'white' }} href={SHOP_ROUTE}>КупиДевайс</Nav.Link>
                {user.isAuth ?
                    <Nav style={{ color: 'white' }} className="ml-auto">
                        <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Админ панель</Button>
                        <Button onClick={() => logOut()} variant={'outline-light'} className="mx-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav style={{ color: 'white' }} className="mr-auto">
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar