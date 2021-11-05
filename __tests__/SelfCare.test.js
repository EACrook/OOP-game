const SelfCare = require('../lib/SelfCare');

test('creates a self care object', () => {
    const selfCare = new SelfCare('health');

    expect(selfCare.name).toBe('health');
    expect(selfCare.value).toEqual(expect.any(Number));
});

test('creates a random self care object', () => {
    const selfCare = new SelfCare();

    expect(selfCare.name).toEqual(expect.any(String));
    expect(selfCare.name.length).toBeGreaterThan(0);
    expect(selfCare.value).toEqual(expect.any(Number));
});