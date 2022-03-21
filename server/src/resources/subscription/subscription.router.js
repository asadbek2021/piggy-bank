const { Router } = require('express');
const {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} = require('./subscription.service');

const router = Router();

router.get('/', getAllSubscriptions);

router.get('/:id', getSubscriptionById);

router.post('/', createSubscription);

router.put('/:id', updateSubscription);

router.delete('/:id', deleteSubscription);

module.exports = router;
