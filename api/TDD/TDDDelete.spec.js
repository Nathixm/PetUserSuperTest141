const supertest = require('supertest');
const test = require('supertest/lib/test');
const massaUser = require('../../fixtures/userMassa');
const config = require('../../testConfig');

const request = supertest(config.baseUrl);

describe('TDD DELETE API petStore Swagger - User', () => {

    massaUser.array.forEach(({ username }) => {

        it(`DELETE petUser TDD ${username}`, () => {

            return request
                .delete(`/user/${username}`)
                .then((res) => {
                    expect(res.statusCode).toBe(200);

                    expect(res.body.code).toBe(200);
                    expect(res.body.type).toBe('unknown');
                    expect(res.body.message).toBe(username);

                });
        });

    });

});