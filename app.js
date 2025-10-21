const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
       <html>
            <head><title>DevOps Deployment Test</title></head>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
                <h1>🚀 Deployment Successful!</h1>
                <p>Your automated deployment script is working!</p>
                <p>Time: ${new Date().toISOString()}</p>
                <p>Server: ${process.env.HOSTNAME || 'Unknown'}</p>
            </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: Date.now() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
