let store;
let initLocalDatabase = false;
try {
  store = JSON.parse(localStorage.store);
}
catch (e) {
  store = {};
  initLocalDatabase = true;
}
store.save = function () {
  localStorage.store = JSON.stringify(this);
};
// Run an save if DB is not present in localstorage at boot
initLocalDatabase ? store.save() : null;

store.contacts = store.contacts || []
store.save()
