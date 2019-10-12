const appSchema = require('../app/models/postSchema');
const express = require('express')
const app = express();

let appService = {
    postTitle: postTitle,
    getTitle: getTitle,
    deleteTitle: deleteTitle,
    patchTitle: patchTitle 
}

function postTitle(data) {
    return new Promise(async (resolve, reject) => {
        appSchema.insertMany({title:data.title, description:data.message}).then((result) => {
            resolve(result);
        }).catch();
    });
}

function getTitle(data) {
    return new Promise(async (resolve, reject) => {
        appSchema.find().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}

function patchTitle(data) {
    return new Promise(async (resolve, reject) => {
        appSchema.findByIdAndUpdate().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}

function deleteTitle(_id) {
    return new Promise(async (resolve, reject) => {
        appSchema.findByIdAndDelete({_id}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = appService;