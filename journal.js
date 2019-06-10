const chalk = require('chalk');

module.exports = {
    journalItems: [],
    getJournal() {
        return new Promise((resolve, reject) => {
            var fs = require('fs');
            fs.readFile(__dirname + '/journal.txt', function (err, data) {
                if (err) {
                    throw err;
                }

                resolve(data.toString());
                console.log(data.toString());
            })
        });
    },
    saveJournal() {
        return new Promise((resolve, reject) => {
            var fs = require('fs');
            var stream = fs.createWriteStream(__dirname + "/journal.txt");
            let _this = this;
            let journalItems = this.journalItems;
            stream.once('open', function (fd) {
                journalItems.forEach(entry => {
                    stream.write(entry);
                });
                stream.end();
                resolve();
            });
        });
    },
    addNewEntry(entry) {
        return new Promise((resolve, reject) => {
            let newEntry;
            const [...args] = entry;
            switch (args[0]) {
                case ".":
                    newEntry = args.join(' ');
                    break;
                case "!":
                    newEntry = args.join(' ');
                    break;
            }
            //args.forEach(function (val, index, array) {
            //    console.log(index + ': ' + val);
            //});});
            if (newEntry != null) {
                this.journalItems.push(newEntry);
                this.saveJournal().then(() => {

                    console.info('done');
                    resolve('done');
                });
            }

        });
    }
}