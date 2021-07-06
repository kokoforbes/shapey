export const setCurrentUser = (text: string) => ({
  type: 'setUser',
  payload: text,
});

export const removeUser = () => ({
  type: 'removeUser',
});