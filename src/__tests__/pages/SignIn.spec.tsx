import React, { FormHTMLAttributes} from 'react';
import { ThemeProvider } from 'styled-components';
import SignIn from '../../pages/SignIn';
import { render, fireEvent, waitFor } from '@testing-library/react';
import dark from '../../styles/themes/dark';

const signInPage = (): React.ReactElement => (
    <ThemeProvider theme={dark}>
        < SignIn />
    </ThemeProvider>
);

const mockedSignInFunction: FormHTMLAttributes<HTMLFormElement> = jest.fn(e => e.preventDefault);

jest.mock('../../hooks/auth', () => {
    return {
        useAuth: () => ({
            signIn: mockedSignInFunction,
        }),
    }
});

describe('SignIn Page', () =>{
    it('should be able to sign in, bro hehe', async () => {
        const { getByPlaceholderText, getByText } = render(signInPage());

        const emailField = getByPlaceholderText('E-mail');
        const passwordField = getByPlaceholderText('Senha');
        const buttonElement = getByText('Acessar');

        fireEvent.change(emailField, {target: {value: 'admin@admin.com'}});
        fireEvent.change(passwordField, {target: {value: '12345678'}});

        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(mockedSignInFunction).toHaveBeenCalled();
        })
    });
});
