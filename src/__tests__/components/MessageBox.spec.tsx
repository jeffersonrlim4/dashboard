import React from 'react';
import MessageBox from '../../components/MessageBox';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/themes/dark';

const initialProps = {
    title: 'Esse',
    description: 'é',
    footerText: 'um',
    icon: 'teste',
}

describe('MessageBox component', () => {
    it('shold be render the component', () => {
        const component = render(
            <ThemeProvider theme={dark}>
                <MessageBox {...initialProps} />
            </ThemeProvider>
        )
        expect(component).toBeTruthy;
    });
})