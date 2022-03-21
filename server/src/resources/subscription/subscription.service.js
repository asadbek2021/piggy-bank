const SubscriptionRepository = require('./subscription.repository');

async function getAllSubscriptions(req, res, next) {
  try {
    const subscriptions = await SubscriptionRepository.getSubsAll({});
    res.json(subscriptions);
  } catch (err) {
    next(err);
  }
}

async function getSubscriptionById(req, res, next) {
  try {
    const { id } = req.params;
    const subscription = await SubscriptionRepository.getSubsByID(id);
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}

async function createSubscription(req, res, next) {
  try {
    const subscription = await SubscriptionRepository.createSubs(req.body);
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}
async function updateSubscription(req, res, next) {
  try {
    const { id } = req.params;
    const subscription = await SubscriptionRepository.editSubs(id, req.body, { new: true });
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}

async function deleteSubscription(req, res, next) {
  try {
    const { id } = req.params;
    await SubscriptionRepository.removeSubs(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};
