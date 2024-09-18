const supertest = require('supertest');
const test = require('supertest/lib/test');
const userName = "Henry Jones Júnior";

describe('API petStore Swagger - User', () => {

    const request = supertest('https://petstore.swagger.io/v2');

    it('GET User', async () => {
        const res = await request
            .get(`/user/${userName}`);

        expect(res.statusCode).toBe(200);

        expect(res.body.id).toBe(297537609);
        expect(res.body.username).toBe(userName);
        expect(res.body.firstName).toBe("Indiana");
        expect(res.body.lastName).toBe("Jones");
        expect(res.body.email).toBe("indiana.jones@gmail.com");
        expect(res.body.password).toBe("@arca1881");
        expect(res.body.phone).toBe("66986765544");
        expect(res.body.userStatus).toBe(0);

    });

});