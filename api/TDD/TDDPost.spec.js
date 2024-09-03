const supertest = require('supertest');
const test = require('supertest/lib/test');
const massaUser = require('../../fixtures/userMassa');
const config = require('../../testConfig');

const request = supertest(config.baseUrl);

describe('TDD API petStore Swagger - User', () => {

    massaUser.array.forEach(({ id, username, firstName, lastName, email, password, phone, userStatus }) => {

        it(`POST petUser TDD ${username}`, () => {

            const user = {
                id,
                username,
                firstName,
                lastName,
                email,
                password,
                phone,
                userStatus
            };

            return request
                .post('/user')
                .send(user)
                .then((res) => {
                    expect(res.statusCode).toBe(200);

                    expect(res.body.code).toBe(200);
                    expect(res.body.type).toBe('unknown');
                    expect(res.body.message).toBe(`${id}`);

                });
        });

    });

});