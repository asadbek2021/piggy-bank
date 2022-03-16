const Obligatory = require('./obligatory.model');

async function getAllObligatory(req, res, next) {
  try {
    const obligatories = await Obligatory.find({});
    res.json(obligatories);
  } catch (err) {
    next(err);
  }
}
async function getObligatoryById(req, res, next) {
  try {
    const { id } = req.params;
    const obligatory = await Obligatory.findById(id);
    res.json(obligatory);
  } catch (err) {
    next(err);
  }
}
async function createObligatory(req, res, next) {
  try {
    const obligatory = await Obligatory.create(req.body);
    res.json(obligatory);
  } catch (err) {
    next(err);
  }
}
async function updateObligatory(req, res, next) {
  try {
    const { id } = req.params;
    const obligatory = await Obligatory.findById(id);
    res.json(obligatory);
  } catch (err) {
    next(err);
  }
}
async function deleteObligatory(req, res, next) {
  try {
    const { id } = req.params;
    await Obligatory.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllObligatory,
  getObligatoryById,
  createObligatory,
  updateObligatory,
  deleteObligatory,
};
