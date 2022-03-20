function getAllStatistics(req, res, next) {
  try {
    res.json('Get all statistics');
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllStatistics,

};
