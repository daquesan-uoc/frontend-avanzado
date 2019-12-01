import * as fromAuth from './auth.reducer';
import * as fromActions from '../actions/auth.actions';
import { User } from 'src/app/shared/models/user.model';
import { TokenResponse } from 'src/app/shared/models/token.interface';

describe('AuthReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = fromAuth;
            const action = {} as any;
            const state = fromAuth.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });
    describe('IDENTIFICATION_SUCCESS action', () => {
        it('should update the token value', () => {
            const payload: TokenResponse = {
                token: 'anyToken',
            };
            const { initialState } = fromAuth;
            const action = new fromActions.IdentificationSuccess(payload);
            const state = fromAuth.reducer(initialState, action);

            expect(state.token).toBe(payload.token);
        });
    });
    describe('IDENTIFICATION_LOGOUT action', () => {
        it('should reset the initialState ', () => {
            const stateIntermedie = {
                token: 'anyToken',
            };

            const { initialState } = fromAuth;
            const action = new fromActions.IdentificationLogout();
            const state = fromAuth.reducer(stateIntermedie, action);

            expect(state).toEqual(initialState);
        });
    });
    describe('IDENTIFICATION_REFRESH action', () => {
        it('should refesh the token ', () => {
            const stateIntermedie = {
                token: 'anyToken',
            };
            const payload = {
                token: 'newToken',
            };

            const action = new fromActions.IdentificationRefresh(payload);
            const state = fromAuth.reducer(stateIntermedie, action);

            expect(state.token).toEqual(payload.token);
        });
    });
})