import User from "../models/User";

export class ProfileService {
    async createProfile(data: {
        firstName: string;
        lastName: string;
        profession: string;
        balance: number;
        type: string;
    }) {
        return await User.create(data);
    }

    async getProfileBalance(id: number) {
        return await User.findByPk(id);
    }

    async updateBalance(id: number, amount: number) {
        const profile = await User.findByPk(id);
        if (!profile) throw new Error("Profile not found");

        profile.balance += amount;
        await profile.save();
        return profile;
    }
}
