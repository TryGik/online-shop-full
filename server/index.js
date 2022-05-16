// require('dotenv').config();
// const express = require('express');
// const sequelize = require('./db');
// const models = require('./models/models');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');
// const router = require('./routes/index');
// const errorHandler = require('./middleware/ErrorHandlingMiddleware');
// const path = require('path');

// const PORT = process.env.PORT || 5000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
// app.use('/api', router)
// // Обработка ошибок, последний Middleware
// app.use(errorHandler)
// // app.get('/', (req, res) => {
// //     res.status(200).json({ message: 'WORKING!!!' })
// // })

// const start = async () => {
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()
//         app.listen(PORT, () => console.log(`start server on port ${PORT}`));
//     } catch (error) {
//         console.log(error)
//     }
// }

// start();
require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json()) //т.к экспрес не парсит по дефолту  json
app.use(express.static(path.resolve(__dirname, 'static')))//для получения изображений из папки статик
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate() //устанавливается подключение к дб
        await sequelize.sync() //сверяет состояние бд со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()


