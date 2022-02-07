function requireUser(req, res, next) {
  console.log("....requestuser", req.headers, req.body);
  if (!req.body) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

module.exports = {
  requireUser,
};
