function getCurrentId() {
  const currentId = localStorage.getItem('globalId');
  return currentId ? parseInt(currentId, 10) : 0;
}
const globalId = getCurrentId();

function postNewId(id) {
  localStorage.setItem('globalId', JSON.stringify(id));
}

export function getNewId() {
  let id = globalId;
  id += 1;
  postNewId(id);
  return id;
}
