exports.middlewareGlobal = (req, res, next) => {
  console.log("Middleware global.");
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Sou seu outro middleware");
  next();
};
