const appService = require('../Services/postService');

function init(router) {
    router.route('/title')
        .post(postTitle)
        .get(getTitle)
        .delete(deleteTitle)
        .patch(patchTitle)

}

function postTitle(req, res) {
    let data = req.body;
    appService.postTitle(data).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function getTitle(req, res) {
    appService.getTitle().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function patchTitle(req, res) {
    const id = req.body;
    appService.patchTitle(data, id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function deleteTitle(req, res) {
    appService.deleteTitle(_id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}


module.exports.init = init;