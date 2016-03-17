var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var List = require('./api/models/list');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'It works!'});
});

router.route('/lists')
    .post(function(req, res) {
        var list = new List();
        list.name = req.body.name;
        list.items = req.body.items;

        list.save(function(err) {
            if(err)
                res.send(err);
            res.json({message: 'List created!'});
        });
    })
    .get(function(req, res) {
        List.find(function(err, lists) {
            if(err)
                res.send(err);

            res.json(lists);
        });
    });

router.route('/lists/:list_id')
    .get(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
            if(err)
                res.send(err);

            res.json(list);
        });
    })
    .put(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
            if(err)
                res.send(err);

            list.name = req.body.name;
            list.items = req.body.items;

            list.save(function(err) {
                if(err)
                    res.send(err);

                res.json({ message: 'List is updated!' });
            });
        });
    })
    .delete(function(req, res) {
        List.remove({
            _id: req.params.list_id
        }, function(err, list) {
            if(err)
                res.send(err);

            res.json({ message: 'Successfully deleted!' });
        });
    });

app.use('/api', router);
app.use(express.static('./'));
app.listen(port);
console.log('Port: ' + port);