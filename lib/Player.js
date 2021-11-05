const SelfCare = require("./SelfCare");

function Player(name = ''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.skills = Math.floor(Math.random() * 5 + 7);
    this.relationships = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new SelfCare('health'), new SelfCare()];
}

module.exports = Player;