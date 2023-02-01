import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible : false,
    message : '',
    title : '',
    icon : '',
    type : '',
    position : 'top'
}

const alertSlice = createSlice({
    name : 'alert',
    initialState,
    reducers : {
        toggleAlert : (state, { payload }) => {
            const { visible,message,title,icon,type,position } = payload;
            
            state.visible = visible || false;
            state.message = message || '';
            state.title = title || '';
            state.icon = icon || '';
            state.type = type || 'success';
            state.postion = position || 'top';

        }
    }
})

export const { toggleAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;

export const successAlert = (alertConf) => {
    return (dispatch) => {
        dispatch(toggleAlert({
            type : 'success',
            ...alertConf
        }));
    }
}

export const errorAlert = (alertConf) => {
    return (dispatch) => {
        dispatch(toggleAlert({
            type : 'error',
            ...alertConf
        }))
    }
}

export const warningAlert = (alertConf) => {
    return(dispatch) => {
        dispatch(toggleAlert ({
            type : 'warning',
            ...alertConf
        }));
    }
}