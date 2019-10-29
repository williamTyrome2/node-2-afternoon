const express = require("express");
const mc = require("./controllers/message_controller")

const app = express();

app.use(express.json());
app.use(express.static(_dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseURl, mc,create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});