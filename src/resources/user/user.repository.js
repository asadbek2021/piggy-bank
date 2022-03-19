const User = require('./user.model');

class UserRepository {
  static async getUserAll() {
    const users = await User.find({});
    return users;
  }

  static async getUserByID(id) {
    const user = await User.findById(id);
    return user;
  }

  static async editUser(id, body) {
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return user;
  }

  static async removeUser(id) {
    await User.findByIdAndDelete(id);
  }
}

module.exports = UserRepository;
