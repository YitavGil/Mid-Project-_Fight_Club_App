import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialiState = {
    events: []
}

//Create context
export const GlobalContext = createContext(initialiState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialiState);

    //Actions
    const addEvent = (event) => {
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        })
    }

    const deleteEvent = (id) => {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            events:state.events,
            addEvent,
            deleteEvent
        }}>
            {children}
        </GlobalContext.Provider>
    )
}