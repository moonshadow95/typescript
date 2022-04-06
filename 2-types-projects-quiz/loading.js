{
    function printLoginState(state) {
        switch (state.state) {
            case 'loading':
                console.log('loading...');
                break;
            case 'success':
                console.log('success!');
                break;
            case 'fail':
                console.log('fail');
                break;
        }
    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
