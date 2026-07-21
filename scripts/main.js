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
  const inventory = player.container;
  let slot = 0;

  // ===== ARMOR =====

  // Helmet: Protection 4, Mending 1, Unbreaking 3, Respiration 3, Aqua Affinity
  const helmet = new ItemStack("diamond_helmet", 1);
  helmet.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "protection", level: 4 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "respiration", level: 3 },
      { id: "aqua_affinity", level: 1 }
    ]
  });
  helmet.nameTag = "Maxed Helmet";
  player.equip("Head", helmet);

  // Chestplate: Protection 4, Mending 1, Unbreaking 3
  const chestplate = new ItemStack("diamond_chestplate", 1);
  chestplate.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "protection", level: 4 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 }
    ]
  });
  chestplate.nameTag = "Maxed Chestplate";
  player.equip("Chest", chestplate);

  // Leggings: Protection 4, Mending 1, Unbreaking 3, Swift Sneak 3
  const leggings = new ItemStack("diamond_leggings", 1);
  leggings.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "protection", level: 4 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "swift_sneak", level: 3 }
    ]
  });
  leggings.nameTag = "Maxed Leggings";
  player.equip("Legs", leggings);

  // Boots: Protection 4, Mending 1, Unbreaking 3, Feather Falling 4, Depth Strider 3
  const boots = new ItemStack("diamond_boots", 1);
  boots.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "protection", level: 4 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "feather_falling", level: 4 },
      { id: "depth_strider", level: 3 }
    ]
  });
  boots.nameTag = "Maxed Boots";
  player.equip("Feet", boots);

  // ===== WEAPONS =====

  // Sword: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2
  const sword = new ItemStack("diamond_sword", 1);
  sword.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "sharpness", level: 5 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "looting", level: 3 },
      { id: "fire_aspect", level: 2 },
      { id: "knockback", level: 2 }
    ]
  });
  sword.nameTag = "Maxed Sword";
  inventory.setItem(slot++, sword);

  // Spear 1: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2
  const spear1 = new ItemStack("diamond_sword", 1);
  spear1.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "sharpness", level: 5 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "looting", level: 3 },
      { id: "fire_aspect", level: 2 },
      { id: "knockback", level: 2 }
    ]
  });
  spear1.nameTag = "Maxed Spear 1";
  inventory.setItem(slot++, spear1);

  // Spear 2: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2, Lunge 3
  const spear2 = new ItemStack("diamond_sword", 1);
  spear2.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "sharpness", level: 5 },
      { id: "mending", level: 1 },
      { id: "unbreaking", level: 3 },
      { id: "looting", level: 3 },
      { id: "fire_aspect", level: 2 },
      { id: "knockback", level: 2 },
      { id: "lunge", level: 3 }
    ]
  });
  spear2.nameTag = "Maxed Spear 2 (Lunge)";
  inventory.setItem(slot++, spear2);

  // Bow: Power 5, Unbreaking 3, Flame 1, Infinity 1
  const bow = new ItemStack("bow", 1);
  bow.setProperty("minecraft:enchantments", {
    enchantments: [
      { id: "power", level: 5 },
      { id: "unbreaking", level: 3 },
      { id: "flame", level: 1 },
      { id: "infinity", level: 1 }
    ]
  });
  bow.nameTag = "Maxed Bow";
  inventory.setItem(slot++, bow);

  // ===== CONSUMABLES & UTILITIES =====

  // Golden Apples x64
  const goldApples = new ItemStack("golden_apple", 64);
  inventory.setItem(slot++, goldApples);

  // Carrots x64
  const carrots = new ItemStack("carrot", 64);
  inventory.setItem(slot++, carrots);

  // Splash Potion of Strength x16
  const strengthPotion = new ItemStack("splash_potion", 16);
  strengthPotion.setProperty("minecraft:potion_type", "strength");
  inventory.setItem(slot++, strengthPotion);

  // Splash Potion of Speed x16
  const speedPotion = new ItemStack("splash_potion", 16);
  speedPotion.setProperty("minecraft:potion_type", "swiftness");
  inventory.setItem(slot++, speedPotion);

  // Potion of Slow Falling x16
  const slowFallingPotion = new ItemStack("potion", 16);
  slowFallingPotion.setProperty("minecraft:potion_type", "slow_falling");
  inventory.setItem(slot++, slowFallingPotion);

  // Splash Potion of Healing x38
  const healingPotion = new ItemStack("splash_potion", 38);
  healingPotion.setProperty("minecraft:potion_type", "healing");
  inventory.setItem(slot++, healingPotion);

  // Ender Pearls x64 (Stack 1)
  const enderPearls1 = new ItemStack("ender_pearl", 64);
  inventory.setItem(slot++, enderPearls1);

  // Ender Pearls x64 (Stack 2)
  const enderPearls2 = new ItemStack("ender_pearl", 64);
  inventory.setItem(slot++, enderPearls2);

  // Ender Pearls x64 (Stack 3)
  const enderPearls3 = new ItemStack("ender_pearl", 64);
  inventory.setItem(slot++, enderPearls3);

  // Harming Tipped Arrow x1
  const harmingArrow = new ItemStack("arrow", 1);
  harmingArrow.setProperty("minecraft:potion_type", "harming");
  inventory.setItem(slot++, harmingArrow);

  // Totems of Undying x5
  const totems = new ItemStack("totem_of_undying", 5);
  inventory.setItem(slot++, totems);

  // Ender Chest x1
  const enderChest = new ItemStack("ender_chest", 1);
  inventory.setItem(slot++, enderChest);

  // ===== DRAGON SLAYING UTILITIES =====

  // Obsidian x32
  const obsidian = new ItemStack("obsidian", 32);
  inventory.setItem(slot++, obsidian);

  // Healing Potions x16
  const healingPotions = new ItemStack("potion", 16);
  healingPotions.setProperty("minecraft:potion_type", "healing");
  inventory.setItem(slot++, healingPotions);

  // Milk Bucket x4
  const milkBucket = new ItemStack("milk_bucket", 4);
  inventory.setItem(slot++, milkBucket);

  // Pumpkin x1 (Enderman protection)
  const pumpkin = new ItemStack("pumpkin", 1);
  inventory.setItem(slot++, pumpkin);

  // Success message
  player.onScreenDisplay.setActionBar("✓ Maxed Out Gear Pack loaded! Ready to slay the Ender Dragon on Hardcore!");
}

// Export for module loading
export { giveMaxedGear };
