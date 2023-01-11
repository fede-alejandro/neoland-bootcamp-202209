const { useState, useEffect } = React

function App(props) {
    log.info('App -> render')

    // user = users[0] // forzar home con usuario
    const [view, setView] = useState('login')

    useEffect(() => {
        log.info('App -> effect "componentDidMount"')

        return () => log.info('App -> effect "componentWillUnMount"')
    }, [])

    useEffect(() => log.info('App -> effect "componentWillReceiveProps"'), [props])

    const navigateToRegister = () => {
        log.info('App -> navigateToRegister')

        setView('register')
    }

    const navigateToLogin = () => {
        log.info('App -> navigateToLogin')

        setView('login')
    }

    const navigateToHome = () => {
        log.info('App -> navigateToHome')

        setView('home')
    }

    return <> {/*si esto es cierto, entonces mostrame la login page*/}
        {view === 'login' && <LoginPage onNavigateToRegister={navigateToRegister} onLogIn={navigateToHome} />}
        {view === 'register' && <RegisterPage onNavigateToLogin={navigateToLogin} onRegisterUser={navigateToLogin} />}
        {view === 'home' && <HomePage onLogout={navigateToLogin} />}
        {/*{this.state.view === 'settings' && <SettingPage />}*/}
    </>

}