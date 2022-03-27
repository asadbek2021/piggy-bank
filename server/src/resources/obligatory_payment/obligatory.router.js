const { Router } = require('express');
const {
  getAllObligatory,
  getObligatoryById,
  createObligatory,
  updateObligatory,
  deleteObligatory,
} = require('./obligatory.service');

const router = Router();

router.get('/', getAllObligatory);

router.get('/:id', getObligatoryById);

router.post('/', createObligatory);

router.put('/:id', updateObligatory);

router.delete('/:id', deleteObligatory);

module.exports = router;
