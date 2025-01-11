const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Function to get the public IP address dynamically
function getPublicIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const ifaceName in interfaces) {
        for (const iface of interfaces[ifaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address; // Return the first non-internal IPv4 address
            }
        }
    }
    throw new Error('Public IP address not found.');
}

// Start the server on the public IP
const HOST = getPublicIPAddress();
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
