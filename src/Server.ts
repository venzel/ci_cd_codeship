import { app } from './App'

class Server {
    static start(): void {
        const appExecuted = app.execute()

        appExecuted.listen(3000, () => console.log(`Server in port 3000`))
    }
}

Server.start()
