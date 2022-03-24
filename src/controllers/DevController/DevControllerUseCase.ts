import axios from 'axios';

interface IResponse {
    data: {
        name: string;
        login: string;
        avatar_url: string;
        bio: string;
    };
}

class DevControllerUseCase {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    static async execute(username: string) {
        const { data } = await axios.get(`https://api.github.com/users/${username}`);

        return data;
    }
}

export { DevControllerUseCase };