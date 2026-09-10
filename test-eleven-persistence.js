const BASE_URL = 'http://localhost:3000';

async function testPersistence() {
    console.log('--- Testing Settings Persistence ---');

    // 1. Save dummy key
    const testKey = 'sk_test_123456789';
    console.log(`Saving key: ${testKey}`);
    const saveRes = await fetch(`${BASE_URL}/api/admin/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ elevenlabs_api_key: testKey })
    });
    const saveData = await saveRes.json();
    console.log('Save response:', saveData);

    // 2. Read back
    const getRes = await fetch(`${BASE_URL}/api/admin/settings`);
    const getData = await getRes.json();
    console.log('Fetched settings:', getData);

    if (getData.elevenlabs_api_key === testKey) {
        console.log('✅ Matches!');
    } else {
        console.log('❌ Mismatch! Expected', testKey, 'got', getData.elevenlabs_api_key);
    }
}

testPersistence();
