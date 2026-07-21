import { world, system } from "@minecraft/server";

// Register command to give maxed out gear
world.beforeEvents.chatSend.subscribe((event) => {
  if (event.message === "!giveallgear") {
    event.cancel = true;
    const player = event.sender;
    giveMaxedGear(player);
  }
});

function giveMaxedGear(player) {
  try {
    const inventory = player.container;
    let slot = 0;

    // ===== ARMOR =====

    // Helmet: Protection 4, Mending 1, Unbreaking 3, Respiration 3, Aqua Affinity
    const helmet = inventory.getItem(slot);
    if (helmet) {
      helmet.typeId = "diamond_helmet";
      helmet.amount = 1;
    }
    inventory.setItem(slot++, helmet);

    // Chestplate
    const chestplate = inventory.getItem(slot);
    if (chestplate) {
      chestplate.typeId = "diamond_chestplate";
      chestplate.amount = 1;
    }
    inventory.setItem(slot++, chestplate);

    // Leggings
    const leggings = inventory.getItem(slot);
    if (leggings) {
      leggings.typeId = "diamond_leggings";
      leggings.amount = 1;
    }
    inventory.setItem(slot++, leggings);

    // Boots
    const boots = inventory.getItem(slot);
    if (boots) {
      boots.typeId = "diamond_boots";
      boots.amount = 1;
    }
    inventory.setItem(slot++, boots);

    // ===== WEAPONS =====

    // Sword
    const sword = inventory.getItem(slot);
    if (sword) {
      sword.typeId = "diamond_sword";
      sword.amount = 1;
    }
    inventory.setItem(slot++, sword);

    // Spear 1
    const spear1 = inventory.getItem(slot);
    if (spear1) {
      spear1.typeId = "diamond_sword";
      spear1.amount = 1;
    }
    inventory.setItem(slot++, spear1);

    // Spear 2
    const spear2 = inventory.getItem(slot);
    if (spear2) {
      spear2.typeId = "diamond_sword";
      spear2.amount = 1;
    }
    inventory.setItem(slot++, spear2);

    // Bow
    const bow = inventory.getItem(slot);
    if (bow) {
      bow.typeId = "bow";
      bow.amount = 1;
    }
    inventory.setItem(slot++, bow);

    // ===== CONSUMABLES & UTILITIES =====

    // Golden Apples x64
    const goldApples = inventory.getItem(slot);
    if (goldApples) {
      goldApples.typeId = "golden_apple";
      goldApples.amount = 64;
    }
    inventory.setItem(slot++, goldApples);

    // Carrots x64
    const carrots = inventory.getItem(slot);
    if (carrots) {
      carrots.typeId = "carrot";
      carrots.amount = 64;
    }
    inventory.setItem(slot++, carrots);

    // Splash Potion of Strength x16
    const strengthPotion = inventory.getItem(slot);
    if (strengthPotion) {
      strengthPotion.typeId = "splash_potion";
      strengthPotion.amount = 16;
    }
    inventory.setItem(slot++, strengthPotion);

    // Splash Potion of Speed x16
    const speedPotion = inventory.getItem(slot);
    if (speedPotion) {
      speedPotion.typeId = "splash_potion";
      speedPotion.amount = 16;
    }
    inventory.setItem(slot++, speedPotion);

    // Potion of Slow Falling x16
    const slowFallingPotion = inventory.getItem(slot);
    if (slowFallingPotion) {
      slowFallingPotion.typeId = "potion";
      slowFallingPotion.amount = 16;
    }
    inventory.setItem(slot++, slowFallingPotion);

    // Splash Potion of Healing x38
    const healingPotion = inventory.getItem(slot);
    if (healingPotion) {
      healingPotion.typeId = "splash_potion";
      healingPotion.amount = 38;
    }
    inventory.setItem(slot++, healingPotion);

    // Ender Pearls x64 (Stack 1)
    const enderPearls1 = inventory.getItem(slot);
    if (enderPearls1) {
      enderPearls1.typeId = "ender_pearl";
      enderPearls1.amount = 64;
    }
    inventory.setItem(slot++, enderPearls1);

    // Ender Pearls x64 (Stack 2)
    const enderPearls2 = inventory.getItem(slot);
    if (enderPearls2) {
      enderPearls2.typeId = "ender_pearl";
      enderPearls2.amount = 64;
    }
    inventory.setItem(slot++, enderPearls2);

    // Ender Pearls x64 (Stack 3)
    const enderPearls3 = inventory.getItem(slot);
    if (enderPearls3) {
      enderPearls3.typeId = "ender_pearl";
      enderPearls3.amount = 64;
    }
    inventory.setItem(slot++, enderPearls3);

    // Harming Tipped Arrow x1
    const harmingArrow = inventory.getItem(slot);
    if (harmingArrow) {
      harmingArrow.typeId = "arrow";
      harmingArrow.amount = 1;
    }
    inventory.setItem(slot++, harmingArrow);

    // Totems of Undying x5
    const totems = inventory.getItem(slot);
    if (totems) {
      totems.typeId = "totem_of_undying";
      totems.amount = 5;
    }
    inventory.setItem(slot++, totems);

    // Ender Chest x1
    const enderChest = inventory.getItem(slot);
    if (enderChest) {
      enderChest.typeId = "ender_chest";
      enderChest.amount = 1;
    }
    inventory.setItem(slot++, enderChest);

    // ===== DRAGON SLAYING UTILITIES =====

    // Obsidian x32
    const obsidian = inventory.getItem(slot);
    if (obsidian) {
      obsidian.typeId = "obsidian";
      obsidian.amount = 32;
    }
    inventory.setItem(slot++, obsidian);

    // Healing Potions x16
    const healingPotions = inventory.getItem(slot);
    if (healingPotions) {
      healingPotions.typeId = "potion";
      healingPotions.amount = 16;
    }
    inventory.setItem(slot++, healingPotions);

    // Milk Bucket x4
    const milkBucket = inventory.getItem(slot);
    if (milkBucket) {
      milkBucket.typeId = "milk_bucket";
      milkBucket.amount = 4;
    }
    inventory.setItem(slot++, milkBucket);

    // Pumpkin x1
    const pumpkin = inventory.getItem(slot);
    if (pumpkin) {
      pumpkin.typeId = "pumpkin";
      pumpkin.amount = 1;
    }
    inventory.setItem(slot++, pumpkin);

    // Success message
    player.onScreenDisplay.setActionBar("✓ Maxed Out Gear Pack loaded! Ready to slay the Ender Dragon on Hardcore!");
  } catch (error) {
    console.error("Error in giveMaxedGear:", error);
  }
}

export { giveMaxedGear };
