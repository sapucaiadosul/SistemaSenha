const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const https = require('https');

const dbPath = path.resolve(__dirname, 'db/senhas.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking ElevenLabs config...');

db.get("SELECT value FROM settings WHERE key = 'elevenlabs_api_key'", (err, row) => {
    if (err) {
        console.error('DB Error:', err);
        return;
    }
    if (!row || !row.value) {
        console.error('API Key NOT found in DB.');
        return;
    }

    const apiKey = row.value;
    console.log('API Key found (masked):', apiKey.substring(0, 5) + '...');

    // Test Key against ElevenLabs User Endpoint
    const options = {
        hostname: 'api.elevenlabs.io',
        path: '/v1/user',
        method: 'GET',
        headers: {
            'xi-api-key': apiKey
        }
    };

    console.log('Testing connection to ElevenLabs...');
    const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                const user = JSON.parse(data);
                console.log('SUCCESS! Connected to ElevenLabs.');
                console.log('Subscription:', user.subscription.tier);
                console.log('Character Count:', user.subscription.character_count, '/', user.subscription.character_limit);
                console.log('Status:', user.subscription.status);
            } else {
                console.error('FAILED. Status:', res.statusCode);
                console.error('Response:', data);
            }
        });
    });

    req.on('error', (e) => {
        console.error('Network Request Error:', e);
    });
    req.end();
});

setTimeout(() => db.close(), 5000);
