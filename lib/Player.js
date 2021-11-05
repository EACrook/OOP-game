const SelfCare = require("./SelfCare");

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.skills = Math.floor(Math.random() * 5 + 7);
    this.relationships = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new SelfCare('health'), new SelfCare()];
}

Player.prototype.getStats = function() {
    return {
        selfcare: this.inventory.length,
        health: this.health,
        skills: this.skills,
        relationships: this.relationships
    };
};

Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory
    }
    return false;
};


module.exports = Player;