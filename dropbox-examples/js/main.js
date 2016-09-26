import $ from 'jquery';
import cigar from 'cigar';

function print(message) {
    $('#output').append(message + "\n");
}

var Dropbox;
var dbx;

function dir(path) {
    return C.requireValue(dbx.filesListFolder({path: path}));
}

function addFileToUI(fileEntry) {
    $("#files").append($(`<li><a href=''>${fileEntry.path_display}</a></li>`));
}

let resp;
let downloadResp;
let arrayBuffer;
let appMain = SEQ(
    () => {
        Dropbox = require("dropbox");
        dbx = new Dropbox({ accessToken: '<ACCESS TOKEN>' });
        resp = dir('');
        return resp;
    },
    () => {
        resp.value.entries.forEach((entry) => {
            addFileToUI(entry);
        });
    },
    () => {
        downloadResp = C.requireValue(dbx.filesDownload({path: '/readme.txt'}));
        return downloadResp;
    },
    () => {
        console.log(downloadResp);
        let fileReader = new FileReader();
        let p = new Promise((resolve, reject) => {
            fileReader.onload = function() {
                arrayBuffer = fileReader.result;
                resolve();
            };
            fileReader.readAsArrayBuffer(downloadResp.value.fileBlob);
        });
        return p;
    },
    () => {
        let view = new Uint8Array(arrayBuffer);
        let v = "";
        for (let i = 0; i < view.length; i ++) {
            v = v + String.fromCharCode(view[i]);
        }
        $("body").append($(`<pre>${v}</pre>`));
        console.log(v);
    }
);


$(function() {
    appMain.run().then(
        () => {
            console.log("done");
        },
        (e) => {
            console.log(e);
        }
    );
});

