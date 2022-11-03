function Header(props) {
    // constructor() {
         log('INFO', 'Header -> render')

         const [toggleButtonText, setToggleButtonText] = React.useState('menu')

    //     super()

    //     this.state = {
    //         toggleButtonText: 'menu'
    //     }
    // }

    React.useEffect(() => {
        log('INFO', 'Header -> componentDidMount')

        return () => log('INFO', 'Header -> effect "componentWillUnmount"')
    }, [])

    // componentDidMount() {
    //     log('INFO', 'Header -> componentDidMount')
    // }

    // componentWillUnmount() {
    //     log('INFO', 'Header -> componentWillUnMount')
    // }
    React.useEffect(() => log('INFO', 'Header -> effect "componentWillReceiveProps"'), [props])

    const handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

         event.preventDefault()

         props.onNavigateToTasks()
     }

    const handleToggleMenu = () => {
        log('INFO', 'Header -> handleToggleMenu')

        setToggleButtonText(toggleButtonText === 'menu' ? 'close' : 'menu')

    }

    const handleNavigateToSettings = event => {
        log('INFO', 'Header -> handleNavigateToSettings')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToSettings()
    }

    const handleLogout = () => {
        log('INFO', 'Header -> handleLogout')

        props.onLogout()
    }

    

        return <header className="flex flex-col">
            <div className="flex justify-between">
                <span className="font-extrabold italic text-2xl my-8 ml-3">
                    {user && user.name}
                </span>
                <a href="" onClick={handleNavigateToTasks}>
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" className=" h-20 w-30 mr-20" /></a>
                <button className="flex flex-col justify-center material-symbols-outlined" onClick={handleToggleMenu}>{toggleButtonText}</button>
            </div>
            {/*si se muestra los elementos del settings, el menu se muetra como close(X) y sino se muestra el icono de menu*/}
            {toggleButtonText === 'close' &&
                <div className="flex flex-col items-end">
                    <a className="items-end material-symbols-outlined" href="" onClick={handleNavigateToSettings}>settings</a>
                    <button className=" material-symbols-outlined" onClick={handleLogout}>logout</button>
                </div>}
        </header>
    }