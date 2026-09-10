const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';

async function testVerification() {
    console.log('--- Starting Verification ---');

    console.log('\n1. Testing Ticket Blocking (Mocking Time)');
    // Since we can't easily change server time, we will rely on logic review or manual testing.
    // However, we CAN test the manual reset API.

    console.log('\n2. Testing Manual Reset API');
    try {
        const res = await fetch(`${BASE_URL}/api/admin/reset-counts`, { method: 'POST' });
        const data = await res.json();
        if (data.success) {
            console.log('✅ Manual Reset API Success');
        } else {
            console.log('❌ Manual Reset API Failed:', data);
        }
    } catch (e) {
        console.log('❌ Manual Reset API Error:', e.message);
    }

    console.log('\n3. Testing Settings API (Reset Time)');
    try {
        // Set Reset Time
        const updateRes = await fetch(`${BASE_URL}/api/admin/settings`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ticket_reset_time: '14:00' })
        });
        const updateData = await updateRes.json();
        console.log('Update Settings Result:', updateData);

        // Fetch Settings to verify
        const fetchRes = await fetch(`${BASE_URL}/api/admin/settings`);
        const fetchData = await fetchRes.json();

        if (fetchData.ticket_reset_time === '14:00') {
            console.log('✅ Reset Time Saved Correctly');
        } else {
            console.log('❌ Reset Time Save Failed. Got:', fetchData.ticket_reset_time);
        }
    } catch (e) {
        console.log('❌ Settings API Error:', e.message);
    }

    console.log('\n--- Verification Complete ---');
}

testVerification();
