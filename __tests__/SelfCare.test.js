const SelfCare = require('../lib/SelfCare');

test('creates a self care object', () => {
    const selfCare = new SelfCare('health');

    expect(selfCare.name).toBe('health');
    expect(selfCare.value).toEqual(expect.any(Number));
});