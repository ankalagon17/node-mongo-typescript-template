import { Config } from "./Config";



const PORT = 3000;
const CONFIG: Config = new Config();

CONFIG.app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});