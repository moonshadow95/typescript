class NetworkClient {
    tryConnect(): void {
        throw Error('no network!')
    }
}

class UserService {
    constructor(private client: NetworkClient) {
    }

    login() {
        this.client.tryConnect()
        // login...
    }
}

class App {
    constructor(private userService: UserService) {
    }

    // 의미있는 처리를 할 수 있는 곳에서 에러를 캐치해야 한다.
    run() {
        try {
            this.userService.login()
        } catch (error) {
            // show something to user
        }
    }
}

const client = new NetworkClient()
const service = new UserService(client)
service.login()
