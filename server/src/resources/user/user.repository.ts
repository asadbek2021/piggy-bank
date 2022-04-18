const User = require('./user.model');

interface IUserBody{
  email: string;
  firstname: string;
  lastname: string;
  role: string;
  gender: string;
  birthday:string;
  residence:string;
}

class UserRepository {
  async getUserAll() {
    const users = await User.find({});
    return users;
  }

  async getUserByID(id:string) {
    const user = await User.findById(id);
    return user;
  }

  async editUser(id:string, body:Partial<IUserBody>) {
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return user;
  }

  async removeUser(id:string) {
    await User.findByIdAndDelete(id);
  }
}

export default new UserRepository();
