export function submitForm(values) {
    return {
      type: 'SUBMIT_FORM',
      values
    }
  }

  export function updateInitial(values){
      return {
          type:'UPDATE_INITIAL',
          values
      }
  }

  export function showDetails(){
      return{
          type:'SHOW_DETAILS'
      }
  }

  export function hideDetails(){
    return{
        type:'HIDE_DETAILS'
    }
}