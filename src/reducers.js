export const NotesReducer = (state, action) => {
  const { type, notes, error } = action;

  switch (type) {
    case 'GET_NOTES':
      return { ...state, loading: true };
    case 'GET_NOTES_SUCCESS':
      return { ...state, loading: false, success: true, notes };
    case 'GET_NOTES_FAILURE':
      return { ...state, loading: false, success: false, error };
    default:
      return state;
  }
}