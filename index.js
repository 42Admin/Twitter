const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3000

app.use(express.json());
app.use(require('./routes/.route'));
app.use(require('./routes/.route'))
 app.use(require('./routes/.route'))

 mongoose.connect('mongodb+srv://Denn:usupov_06.12.2004@cluster0.85wpugk.mongodb.net/')
.then(() => console.log('Успешно подключено'))
.catch(() => console.log('Не удалось подключиться'));

app.listen(port, () => {
    console.log(`Успешно подключено к серверу http://localhost${port}`)
});