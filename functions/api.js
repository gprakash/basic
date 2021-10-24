const express = require ('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json ( {
        'hello': 'How are you?',
        'Me': 'yes'
    });
});


router.get('/jsom', (req, res) => {
    res.json ({
        'hello': 'Whats up?',
        'Me': 'no'
    });
});

app.use('/', router);

module.exports.handler = serverless(app);
