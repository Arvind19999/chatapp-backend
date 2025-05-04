import express from 'express';

import userRoute from './routes/user.js';

const app = express();

app.use("/user", userRoute);

app.use("/", (req, res) => {
    res.send("This is Home Page");
}
)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})