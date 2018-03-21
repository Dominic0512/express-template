


after(async () => {
    console.log('Deleting test database');
    await mongoose.connection.db.dropDatabase();
});

describe('User API', () => {
    let user = {
        name: 'tester',
        email: 'tester@gmail.com',
        password: '123456'
    };

    it('should create a user', async() => {
        const {status, body} = await request.post('/api/users').send(user);
        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
        expect(body.content).to.have.property('user').with.a('object');

        user = body.content.user;
    });

    it('should get all user', async () => {
        const {status, body} = await request.get('/api/users');

        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
        expect(body.content).to.have.property('users').with.a('array');
    });

    it('should show a user', async () => {
        const {status, body} = await request.get(`/api/users/${user._id}`);
        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
        expect(body.content).to.have.property('user').with.a('object');
    });

    it('should update a user', async () => {
        const {status, body} = await request.put(`/api/users/${user._id}`).send({ name: 'tester update' });
        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
        expect(body.content).to.have.property('user').with.a('object');
        expect(body.content.user.name).to.equal('tester update');
    });

    it('should delete a user', async () => {
        const {status, body} = await request.delete(`/api/users/${user._id}`).send({ name: 'tester update' });
        expect(status).to.equal(200);
        expect(body.status).to.equal('successed');
    });
});
