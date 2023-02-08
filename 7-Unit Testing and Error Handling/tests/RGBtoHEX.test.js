const {expect} = require('chai');
const rgbToHexColor = require('../RGBtoHEX');

describe ('tests for RGB to Hex Color', () => {
    it ('should return #000000 if the input is only zeros', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it ('should return #FFFFFF if the input is only 255', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it ('should return #609EA2 if the input is only 96, 158, 162', () => {
        expect(rgbToHexColor(96,158,162)).to.equal('#609EA2');
    });

    it ('should return undefined if the input contains negative number', () => {
        expect(typeof rgbToHexColor(96,-158,162)).to.equal('undefined');
    });

    it ('should return undefined if the input contains negative number', () => {
        expect(typeof rgbToHexColor(96,158,-162)).to.equal('undefined');
    });

    it ('should return undefined if the input is out of range', () => {
        expect(typeof rgbToHexColor(96,288,162)).to.equal('undefined');
    });

    it ('should return undefined if the input is string', () => {
        expect(typeof rgbToHexColor(96,'158',162)).to.equal('undefined');
    });

    it ('should return undefined if there is no input', () => {
        expect(typeof rgbToHexColor()).to.equal('undefined');
    });

    it ('should return undefined if there are floating numbers', () => {
        expect(typeof rgbToHexColor(96,28.8,162)).to.equal('undefined');
    });

    it ('should return #0C0D0E if the input is only 12, 13, 14', () => {
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });
})