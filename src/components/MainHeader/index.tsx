import React, { useMemo, useState } from 'react';
import { Container, Profile, Welcome, Username } from './styles';

import Toogle from '../Toogle';

import emojis from '../../utils/emojis';

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () =>{
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () =>{
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return(
        <Container>
            <Toogle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Jefferson Lima</Username>
            </Profile>
            
        </Container>
    );
}

export default MainHeader;