//ACTIONS
export const CONSOLE_RUN_COMMAND = "console/RUN/COMMAND";

const initialState = {
    'actions': []
};

export default (state = initialState, action)=>{
    switch(action.type){
        case CONSOLE_RUN_COMMAND:
            let actions = [...state.actions, action.action];
            return {
                ...state,
                actions
            };
        default:
            return state;
    }
}