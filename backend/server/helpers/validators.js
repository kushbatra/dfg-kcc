const createPostValidator = (req, res, next) => {
	req.check('r_name', "Recommendation Name is missing").notEmpty();

	const errors = req.validationErrors();

	if(errors) {
		const firstError = errors.map((error) => error.msg)[0];
		return res.status(400).json({error: firstError})
	}
	//proceed to next middleware
	next();
}

export {
  createPostValidator
};