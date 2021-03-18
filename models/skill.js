const skills = [
  {id: 125223, skill: 'HTML', master: true},
  {id: 127904, skill: 'CSS', master: false},
  {id: 139608, skill: 'Node', master: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skill.id = id; 
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  id = parseInt(id)
  const idx = skills.find(skill => skill.id === id);
  skills.splice(idx, 1);
};

function create(skill) {
  skill.id = Date.now() %1000000
  skill.master = false;
  skills.push(skill);
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}