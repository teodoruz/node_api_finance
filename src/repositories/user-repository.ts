import User from '../models/User';


class UserRepository {


    async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number) {
        return await User.findByPk(id)
    }

    async create(data: { name: string; email: string, }) {
        return await User.create();
    }

}

export default UserRepository;