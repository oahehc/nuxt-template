export const myPlugin = store => {
  // called when the store is initialized
  console.log('store initialized');
  store.subscribe((mutation, state) => {
    console.log('mutation', { mutation, state });
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
}