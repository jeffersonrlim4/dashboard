import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/themes/dark';

describe('Dashboard Page', () => {
    it('Should be Render the Dashboard page', () =>{
        const page = render(
            <ThemeProvider theme={dark}>
                <Dashboard />
            </ThemeProvider>
        )
        
        expect(page).toBeTruthy;

    })
})
