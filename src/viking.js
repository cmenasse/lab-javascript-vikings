// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return (this.strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking  extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return (this.name + " has received " + damage.toString() + " points of damage");
    return (this.name + " has died in act of combat");
  }
  battleCry() {
    return ("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
    return ("A Saxon has received " + damage.toString() + " points of damage");
  return ("A Saxon has died in combat");
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
    /*
    vikingAttack() {
      const saxon_idx = Math.floor(Math.random()*this.saxonArmy.length);
      const saxon = this.saxonArmy[saxon_idx];
      const viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      if (saxon.health <= viking.strength)
        this.saxonArmy.splice(saxon_idx, 1)
      return (saxon.receiveDamage(viking.strength))
    }
    saxonAttack() {
      const viking_idx = Math.floor(Math.random()*this.vikingArmy.length);
      const viking = this.vikingArmy[viking_idx];
      const saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      if (viking.health <= saxon.strength)
        this.vikingArmy.splice(viking_idx, 1)
      return (viking.receiveDamage(saxon.strength))
      }
      */
      attack(armyAttack, armyDefend) {
        const defenderIdx = Math.floor(Math.random()*armyDefend.length);
        const defender = armyDefend[defenderIdx];
        const attacker = armyAttack[0];
        if (defender.health <= attacker.strength)
          armyDefend.splice(defenderIdx, 1)
        return (defender.receiveDamage(attacker.strength))
       }
     saxonAttack() {
       return (this.attack(this.saxonArmy, this.vikingArmy));}
      vikingAttack() {
        return (this.attack(this.vikingArmy, this.saxonArmy));}
      showStatus() {
        if (!this.saxonArmy.length)
          return ("Vikings have won the war of the century!");
        else if (!this.vikingArmy.length)
          return ("Saxons have fought for their lives and survived another day...");
        else 
          return ("Vikings and Saxons are still in the thick of battle.");
      }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
