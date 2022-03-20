const User = require('./user.model');

class UserRepository {
  async getUserAll() {
    const users = await User.find({});
    return users;
  }

  async getUserByID(id) {
    const user = await User.findById(id);
    return user;
  }

  async editUser(id, body) {
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return user;
  }

  async removeUser(id) {
    await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
