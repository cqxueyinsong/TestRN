
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

var handler = {
    aData : 'a',
    bData : 'b',
    handle() {
        return 'itemName: ' + this.aData + ' ,index: ' + this.bData;
    }
}
export default handler
