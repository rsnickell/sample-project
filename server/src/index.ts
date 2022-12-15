import { AppDataSource } from "./data-source"
import { createLogger } from "./helper/logger";
import * as express from 'express';
import LoanController from "./controller/loan";
import routeLogger from './middleware/routeLogging';

const logger = createLogger('sample-project');
const PORT = process.env.PORT || 7777;
const loanController = new LoanController();

const setupRoutes = (app: express.Express) => {
    app.post('/loan', loanController.create);
    app.get('/loan/:id', loanController.getById);
    app.put('/loan/:id', loanController.update);
};

// Initialize TypeORM
AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use(routeLogger());

    // Setup routes
    setupRoutes(app);

    app.listen(PORT, () => {
        logger.info(`Listening on port ${PORT}`);
    })

}).catch(error => console.log(error))