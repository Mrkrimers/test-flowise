const route = require('express').Router();

route.post('/', async (req, res) => {
    const { message } = req.body;
    // console.log(message);
    try {
        const flowiseData = {
            question: message
        }

        const response = await fetch(
            'http://5.35.93.187:3000/api/v1/prediction/5a14b031-3b87-4414-bf58-9e7d2a7cdbc6',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(flowiseData)
            }
        )

        const data = await response.json();

        res.status(200).send(data)
    } catch (err) {
        res.send(err.message)
    }
})

module.exports = route;