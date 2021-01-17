import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';
import { act } from 'react-test-renderer'

describe('Auth hook', () =>{
    it('Should be not logged', async () => {

        jest.spyOn(window, 'alert').mockImplementation(() => {});

        const { result } = renderHook(useAuth, {
            wrapper: AuthProvider
        });

        const email = 'isnotauser@wtf.com';
        const password = '12345678'

        await act( async () => {
            result.current.signIn(email, password);
        });

        expect(window.alert).toBeTruthy();
    });

    it('Should be able to sign in', async () => {

        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

        const { result } = renderHook(useAuth, {
            wrapper: AuthProvider
        });

        const email = 'admin@admin.com';
        const password = '12345678'

        await act( async () => {
            result.current.signIn(email, password);
        });

        expect(setItemSpy).toHaveBeenCalledWith('@minha-carteira:logged', 'true');
        expect(result.current.logged).toEqual(true);
    });
    it('Should logout, bro', async () => {

        const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

        const { result } = renderHook(useAuth, {
            wrapper: AuthProvider
        });

        await act( async () => {
            result.current.signOut();
        });

        expect(removeItemSpy).toHaveBeenCalledWith('@minha-carteira:logged');
        expect(result.current.logged).toEqual(false);

    })
});