
import * as fromSelectors from '../selectors/auth.selectors';
import { TokenResponse } from 'src/app/shared/models/token.interface';


const createAuthState = ({
    auth = {
        token: 'anyToken',
    },
} = {}) => ({
    auth
});



const createState = ({
    auth = createAuthState(),
} = {}) => ({
    ...auth,
});
describe('AuthSelectors', () => {

    it('getToken', () => {
        const state = createState();
        expect(fromSelectors.getToken(state)).toBe(state.auth.token);
    });

    it('getAuth', () => {
        const state = createState();
        expect(fromSelectors.getAuth(state)).toBe(state.auth);
    })
});
