const supertest = require('supertest');
const app = require('../src/app');
const { mongoose } = require('../src/loader/dbconnect')

describe('GET /', () => {
    beforeAll(async() => {
        await mongoose.disconnect();
        await mongoose.connect(`mongodb://localhost:27017/test`);
        await  mongoose.connection.db.dropCollection('users');
    })

    afterAll(async() => {
      await  mongoose.connection.db.dropCollection('users');
        await mongoose.disconnect();
    })

  it('should return Hello World', async() => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
  });
  
  it('should register new user and return',async ()=>{
      const customuser = {
        email: 'asadbek@mail.com',
        password: '12345673',
        role: 'ADMIN',
        firstname: 'Asadbek',
        lastname: 'Raimov',
        gender: 'Male',
        birthday: '2000-03-14T19:31:15.614Z',
        residence: 'Uzbekistan',
      }
    const response = await supertest(app).post('/auth/register').send(customuser)
    console.log(response)
  expect(response.body.email).toBe(customuser.email);
  expect(response.body.password).not.toBe(customuser.password);
  expect(response.body.role).toBe(customuser.role);
  expect(response.body.firstname).toBe(customuser.firstname);
  expect(response.body.lastname).toBe(customuser.lastname);
  expect(response.body.gender).toBe(customuser.gender);
  expect(response.body.birthday).toBe(customuser.birthday);
  expect(response.body.residence).toBe(customuser.residence);

})

});
