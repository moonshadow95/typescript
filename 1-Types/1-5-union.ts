{
    // Union Types: OR
    type Direction = 'left' | 'right' | 'up' | 'down'

    function move(direction: Direction) {
        console.log(direction)
    }

    move('down')

    type TileSize = 8 | 16 | 32
    const tile: TileSize = 8

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string
        }
    }

    type FailState = {
        reason: string
    }

    type LoginState = SuccessState | FailState

    function login(): LoginState {
        return {
            response: {
                body: 'logged in.'
            }
        }
    }

    // printLoginState(state)
    // success -> body
    // fail -> reason

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log('🎉' + state.response)
        } else {
            console.log('💩' + state.reason)
        }
    }
}