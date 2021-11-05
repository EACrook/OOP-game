const Player = require('../lib/Player');
const SelfCare = require('../lib/SelfCare');

jest.mock('../lib/SelfCare');

test('creates a player object', () => {
    const player = new Player('Emily');

    expect(player.name).toBe('Emily');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.skills).toEqual(expect.any(Number));
    expect(player.relationships).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test('gets player stats as an object', () => {
    const player = new Player('Emily');

    expect(player.getStats()).toHaveProperty('selfcare');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('relationships');
    expect(player.getStats()).toHaveProperty('skills');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Emily');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

console.log(new SelfCare());