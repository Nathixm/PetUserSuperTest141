const supertest = require('supertest');
const test = require('supertest/lib/test');
const userName = "Henry Jones Júnior";

describe('API petStore Swagger - User', () => {

    const request = supertest('https://petstore.swagger.io/v2');
    const user = require('../../fixtures/json/userRequestPUT.json');

    it('PUT User', async () => {

        const res = await request
            .put(`/user/${userName}`)
            .send(user);

        expect(res.statusCode).toBe(200);

        expect(res.body.code).toBe(200);
        expect(res.body.type).toBe('unknown');
        expect(res.body.message).toBe(`${297537609}`);
    });

});