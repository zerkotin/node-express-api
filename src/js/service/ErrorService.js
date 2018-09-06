// service to simulate errors

function error(req, res, next) {
	res.status(parseInt(req.params.id))
	next('failed because of ' + req.params.id);
}

export default {
	name: "error",
	endpoints: [
		{
			method: "get",
			name: "error",
			handler: error,
			route: 'error/:id'
		}
	]
};
