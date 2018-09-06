// service to return a user list

const users = [
  {id: 'admin', firstName: 'Admin', lastName: 'Administrator', displayName: 'Administrator'},
  {id: 'guest', firstName: 'Guest', lastName: 'Guesty', displayName: 'Guest'}
];

function all(req, res) {
  res.json(users);
}

function byId(req, res) {
  const filtered = users.filter(user => user.id === req.params.id);
  const user = filtered.length && filtered[0];
  res.json(user);
}

export default {
	name: "user",
	endpoints: [
		{
			method: "get",
			name: "all",
			handler: all,
			route: 'users'
		},
		{
			method: "get",
			name: "byId",
			handler: byId,
			route: 'users/:id'
		}
	]
};
