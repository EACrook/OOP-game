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

Player.prototype.getHealth = function(){
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function(){
    if(this.health === 0) {
        return false;
    } 
    return true;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;