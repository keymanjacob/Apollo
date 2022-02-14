const getSpacePeople = () => fetch('http://api.open-notify.org/astro.json')
  .then(res => res.json());
const spaceNames = () =>
  getSpacePeople().then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(','));

spaceNames().then(console.log);
