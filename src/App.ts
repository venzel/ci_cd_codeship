import express, { Express } from 'express'

class App {
    execute(): Express {
        const app = express()

        app.use(express.json())

        app.get('/ok', (req, res) => {
            return res.json({ ok: true })
        })

        return app
    }
}

const app = new App()

export { app }
