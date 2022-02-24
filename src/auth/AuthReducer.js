import {types} from "../types/Types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.rolUsuario:
            return {
                ...action.payload,
                rol: types.rolUsuario,
                logged: true,
                url: '/usuario'
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}