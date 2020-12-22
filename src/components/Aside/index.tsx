import React from 'react';
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title, MenuItemButton } from './styles';
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () =>{

    const { signOut } = useAuth();

    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt='Logo Minha Carteira'></LogImg>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

        </Container>
    );
}

export default Aside;