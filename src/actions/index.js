const defaultChores = [{id: 1, name: "Mop the floors", created_by: 1}, {id: 2, name: 'clean the bathtub', id: 2}]

export function fetchChores(){
  return {
    type: 'FETCH_CHORES',
    payload: defaultChores
  }
}
