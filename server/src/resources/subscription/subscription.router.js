const { Router } = require('express');
const {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} = require('./subscription.service');

const router = Router();

router.get('/:accountId', getAllSubscriptions);

router.get('/:id', getSubscriptionById);

router.post('/:accountId', createSubscription);

router.put('/:id', updateSubscription);

router.delete('/:id', deleteSubscription);

module.exports = router;
