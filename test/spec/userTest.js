


after(async () => {
    console.log('Deleting test database');
    await mongoose.connection.db.dropDatabase();
});

describe('User API', () => {
    let user = {
        email: 'test',
        password: '123456'
    };

    it('should create a user', async() => {
        const {status, body} = await request.post('/api/users').send(user);
        expect(status).to.equal(200);

    });

    it('should get all user', async () => {
        const {status, body} = await request.get('/api/users');

        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
        expect(body.content).to.have.property('users').with.a('array');
    });
});
