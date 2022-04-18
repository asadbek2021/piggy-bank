const Subscription = require('./subscription.model');

class SubscriptionRepository {
  async getSubsAll(id) {
    const users = await Subscription.find({ account_id: id });
    return users;
  }

  async createSubs(subscription) {
    const newSubscription = await Subscription.create(subscription);
    return newSubscription;
  }

  async getSubsByID(id) {
    const subscription = await Subscription.findById(id);
    return subscription;
  }

  async editSubs(id, body) {
    const subscription = await Subscription.findByIdAndUpdate(id, body, { new: true });
    return subscription;
  }

  async removeSubs(id) {
    await Subscription.findByIdAndDelete(id);
  }
}

module.exports = new SubscriptionRepository();
