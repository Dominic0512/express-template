import User from '../models/User';

const controller = {
    list: (req, res, next) => {
        const { limit = 50, skip = 0 } = req.query;

        User.list({ limit, skip })
           .then(users => res.json(users))
           .catch(e => next(e));
    },
    create: (req, res, next) => {
        User.create({
            username: 'test',
            mobileNumber: '0912345678',
            createAt: new Date()
        }, (err, user) => {
            if(err) {
                res.json(err);
            }
            res.json(user);
        });
    },
    show: (req, res, next) => {
        res.json('show');
    },
    update: (req, res, next) => {
        res.json('update');
    },
    delete: (req, res, next) => {
        res.json('delete');
    }
};

export default controller;
