// const { test, expect, jest } = require('@jest/globals');
const { expect } = require('@jest/globals');
const Player = require('../lib/Player');
const SelfCare = require('../lib/SelfCare');

jest.mock('../lib/SelfCare');

test('creates a player object', () => {
    const player = new Player('Emily');

    expect(player.name).toBe('Emily');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.skills).toEqual(expect.any(Number));
    expect(player.skills).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

console.log(new SelfCare());