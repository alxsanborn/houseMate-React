export default function choresReducer(state=[], action){
  switch (action.type){
    case 'FETCH_CHORES':
      return action.payload;
    default:
      return state;
  }
}
