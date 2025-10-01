'use strict';

const fs = require('fs');
const path = require('path');

class VersionControl {
    constructor() {
        this.versions = [];
    }

    addVersion(fileName, content) {
        this.versions.push({ fileName, content, date: new Date() });
        console.log(`Version für ${fileName} hinzugefügt.`);
    }

    listVersions() {
        return this.versions;
    }
}

module.exports = new VersionControl();
