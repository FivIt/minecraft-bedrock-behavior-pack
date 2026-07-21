# Maxed Out Gear Command (Hardcore Edition)
# Run this function to get fully enchanted end-game gear
# Usage: /function giveallgear

# Clear player inventory first
clear @s

# ===== ARMOR =====

# Helmet: Protection 4, Mending 1, Unbreaking 3, Respiration 3, Aqua Affinity
give @s diamond_helmet{ench:[{id:"protection",lvl:4},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"respiration",lvl:3},{id:"aqua_affinity",lvl:1}],display:{Name:'{"text":"Maxed Helmet"}'}}

# Chestplate: Protection 4, Mending 1, Unbreaking 3
give @s diamond_chestplate{ench:[{id:"protection",lvl:4},{id:"mending",lvl:1},{id:"unbreaking",lvl:3}],display:{Name:'{"text":"Maxed Chestplate"}'}}

# Leggings: Protection 4, Mending 1, Unbreaking 3, Swift Sneak 3
give @s diamond_leggings{ench:[{id:"protection",lvl:4},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"swift_sneak",lvl:3}],display:{Name:'{"text":"Maxed Leggings"}'}}

# Boots: Protection 4, Mending 1, Unbreaking 3, Feather Falling 4, Depth Strider 3
give @s diamond_boots{ench:[{id:"protection",lvl:4},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"feather_falling",lvl:4},{id:"depth_strider",lvl:3}],display:{Name:'{"text":"Maxed Boots"}'}}

# ===== WEAPONS =====

# Sword: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2
give @s diamond_sword{ench:[{id:"sharpness",lvl:5},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"looting",lvl:3},{id:"fire_aspect",lvl:2},{id:"knockback",lvl:2}],display:{Name:'{"text":"Maxed Sword"}'}}

# Spear 1: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2
give @s diamond_sword{ench:[{id:"sharpness",lvl:5},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"looting",lvl:3},{id:"fire_aspect",lvl:2},{id:"knockback",lvl:2}],display:{Name:'{"text":"Maxed Spear 1"}'}}

# Spear 2: Sharpness 5, Mending 1, Unbreaking 3, Looting 3, Fire Aspect 2, Knockback 2, Lunge 3
give @s diamond_sword{ench:[{id:"sharpness",lvl:5},{id:"mending",lvl:1},{id:"unbreaking",lvl:3},{id:"looting",lvl:3},{id:"fire_aspect",lvl:2},{id:"knockback",lvl:2},{id:"lunge",lvl:3}],display:{Name:'{"text":"Maxed Spear 2 (Lunge)"}'}}

# Bow: Power 5, Unbreaking 3, Flame 1, Infinity 1
give @s bow{ench:[{id:"power",lvl:5},{id:"unbreaking",lvl:3},{id:"flame",lvl:1},{id:"infinity",lvl:1}],display:{Name:'{"text":"Maxed Bow"}'}}

# ===== CONSUMABLES & UTILITIES =====

# Golden Apples x64
give @s golden_apple 64

# Carrots x64
give @s carrot 64

# Splash Potion of Strength x16
give @s splash_potion{Potion:"minecraft:strength"} 16

# Splash Potion of Speed x16
give @s splash_potion{Potion:"minecraft:swiftness"} 16

# Potion of Slow Falling x16
give @s potion{Potion:"minecraft:slow_falling"} 16

# Splash Potion of Healing x38 (3 stacks + 8)
give @s splash_potion{Potion:"minecraft:healing"} 38

# Ender Pearls x3 stacks (192 total)
give @s ender_pearl 64
give @s ender_pearl 64
give @s ender_pearl 64

# Harming Tipped Arrow x1
give @s arrow{Potion:"minecraft:harming"} 1

# Totems of Undying x5
give @s totem_of_undying 5

# Ender Chest x1
give @s ender_chest 1

# ===== DRAGON SLAYING UTILITIES (HARDCORE SAFE) =====

# Blocks for building (Obsidian for safety)
give @s obsidian 32

# Healing Potions for backup
give @s potion{Potion:"minecraft:healing"} 16

# Milk bucket for potion effects (useful for clearing effects)
give @s milk_bucket 4

# Pumpkin for enderman protection (wear on head to avoid aggro)
give @s pumpkin 1

# Success message
tellraw @s {"text":"✓ Maxed Out Gear Pack loaded! Ready to slay the Ender Dragon on Hardcore!","color":"green"}
