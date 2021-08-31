import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    await User.createMany([
      {
        username: 'virk',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        username: 'romain',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}
