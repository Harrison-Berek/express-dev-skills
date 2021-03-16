const skills = [
    {id: 125223, skill: 'HTML', master: true},
    {id: 127904, skill: 'CSS', master: false},
    {id: 139608, skill: 'Node', master: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }