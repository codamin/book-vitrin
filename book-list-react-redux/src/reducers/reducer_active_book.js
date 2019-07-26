//this state is just the state which this reducer
//responsible for
export default function(state = null, action){
    switch(action.type){
        case 'BOOK-SELECTED':
            return action.payload;

    }
    return state;
}