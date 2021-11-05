const { expect, test } = require('@jest/globals');
const exp = require('constants');
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

test('gets player health value', () => {
    const player = new Player('Emily');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is still alive', () => {
    const player = new Player('Emily');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test('subtracts from player halth', () => {
    const player = new Player('Emily');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(9999);

    expect(player.health).toBe(0);
});

console.log(new SelfCare());