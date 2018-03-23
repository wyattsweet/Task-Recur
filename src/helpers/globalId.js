const postNewId = id => {
  localStorage.setItem('globalId', JSON.stringify(id));
};

const getCurrentId = () => {
  const currentId = localStorage.getItem('globalId');
  if (currentId) {
    return parseInt(currentId, 10);
  }
  postNewId(0);
  return 0;
};

export function getNewId() {
  let id = getCurrentId();
  id += 1;
  postNewId(id);
  return id;
}
