const mokeRequest = require("supertest");
const app = require("../app");

describe('Testing the app', () => {
    test('Should return 200', async () => {
        const response = await mokeRequest(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('ok');
    });
    
});
