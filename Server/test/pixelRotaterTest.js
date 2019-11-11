const rotateGrid  = require('../Exercise1/pixelRotater');
const assert = require('assert');

describe('Pixel Rotater', function () {
    it('should not rotate grid for 0 rotation', function () {
        var input = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];
        var output = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];
        assert.deepEqual(rotateGrid(input, 0),output );
    });

    it('should rotate grid ones for 1 rotation', function () {
        var input = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];
        var output = [
            [0, 8, 0],
            [0, 128, 16],
            [0, 32, 255]
        ];
        assert.deepEqual(rotateGrid(input, 1),output );
    });

    it('should rotate grid twice for 2 rotation', function () {
        var input = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];
        var output = [
            [0, 0, 0],
            [32, 128, 8],
            [255, 16, 0]
        ];
        assert.deepEqual(rotateGrid(input, 2),output );
    });

});