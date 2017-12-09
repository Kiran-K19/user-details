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