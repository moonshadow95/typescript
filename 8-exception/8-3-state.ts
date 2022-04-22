import {type} from "os";

{
    class TimeoutError extends Error {
    }

    class offlineError extends Error {
    }

    // 결과 state -> 예상 가능한 상태를 타입으로 정의하는 것이 좋다.
    // 실패 상태
    type NetworkErrorState = {
        result: 'fail',
        reason: 'offline' | 'down' | 'timeout'
    }
    // 성공 상태
    type SuccessState = {
        result: 'success'
    }
    // 상태
    type ResultState = SuccessState | NetworkErrorState

    class NetworkClient {
        // 상태를 리턴해준다.
        tryConnect(): ResultState {
            throw Error('no network!')
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        // 여기서 에러를 캐치하면 의미 있는 처리를 할 수 없음
        login() {
            this.client.tryConnect()
            // login...
        }
    }

    class App {
        constructor(private userService: UserService) {
        }

        // 의미 있는 처리를 할 수 있는 곳에서 에러를 캐치해야 한다.
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
}
