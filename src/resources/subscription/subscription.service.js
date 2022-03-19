const Subscription = require('./subscription.model');

async function getAllSubscriptions(req, res, next) {
  try {
    const subscriptions = await Subscription.find({});
    res.json(subscriptions);
  } catch (err) {
    next(err);
  }
}

async function getSubscriptionById(req, res, next) {
  try {
    const { id } = req.params;
    const subscription = await Subscription.findById(id);
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}

async function createSubscription(req, res, next) {
  try {
    const subscription = await Subscription.create(req.body);
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}
async function updateSubscription(req, res, next) {
  try {
    const { id } = req.params;
    const subscription = await Subscription.findByIdAndUpdate(id, req.body, { new: true });
    res.json(subscription);
  } catch (err) {
    next(err);
  }
}

async function deleteSubscription(req, res, next) {
  try {
    const { id } = req.params;
    await Subscription.findByIdAndDelete(id);
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
