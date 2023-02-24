const app = require("./src/app"); // app =  http.createServer()
const port = 3000; // server port

app.listen(port, () => console.log(`Server is running on port ${port}`)); // defining the port for incoming request
