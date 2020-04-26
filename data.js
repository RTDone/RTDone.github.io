const rtdequiptype = {
	w: {en:"Weapon"},
	o: {en:"Off-hand"},
	h: {en:"Helmet"},
	c: {en:"Chestpiece"},
	f: {en:"Footgear"},
	r: {en:"Ring"},
	r1: {en:"Ring 1"},
	r2: {en:"Ring 2"},
	e: {en:"Earrings"},
	n: {en:"Necklace"},
	b: {en:"Belt"},
	class1: {en:"Warrior"},
	class2: {en:"Ranger"},
	class3: {en:"Mage"},
}

const rtdrarity = {
	c: {name:{en:"Common"},color:{en:"<span class=\"rarity-c\">Common</span>"}},
	l: {name:{en:"Legendary"},color:{en:"<span class=\"rarity-l\">Legendary</span>"}},
	h: {name:{en:"Holy"},color:{en:"<span class=\"rarity-h\">Holy</span>"}},
	i: {name:{en:"Infernal"},color:{en:"<span class=\"rarity-i\">Infernal</span>"}},
	e: {name:{en:"Eternal"},color:{en:"<span class=\"rarity-e\">Eternal</span>"}},
	m: {name:{en:"Mythic"},color:{en:"<span class=\"rarity-m\">Mythic</span>"}},
	s: {name:{en:"Seasonal"},color:{en:"<span class=\"rarity-s\">Seasonal</span>"}},
	s01: {name:{en:"Season 1"},color:{en:"<span class=\"rarity-s1\">Season 1</span>"}},
	s02: {name:{en:"Season 2"},color:{en:"<span class=\"rarity-s2\">Season 2</span>"}},
	s03: {name:{en:"Season 3"},color:{en:"<span class=\"rarity-s3\">Season 3</span>"}},
	z: {name:{en:"Event"},color:{en:"<span class=\"rarity-z\">Event</span>"}},
}

const rtdstat = {
	/* Attack */
	s000: {name:{en:"ATTACK"}},
	s001: {name:{en:"Attack Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s002: {name:{en:"Attack Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	s003: {name:{en:"Penetration Power"}, unit:["<i class=\"stat\">","%</i>"]},
	s004: {name:{en:"Penetration Cap"}, unit:["<i class=\"rstat\">+","%</i>"]},
	s005: {name:{en:"Critical Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s006: {name:{en:"Critical Rate Cap"}, unit:["<i class=\"rstat\">+","%</i>"]},
	s007: {name:{en:"Critical Damage"}, unit:["<i class=\"stat\">","%</i>"]},
	s008: {name:{en:"Critical Damage Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	s009: {name:{en:"Attack Speed"}, unit:["<i class=\"stat\">","%</i>"]},
	s010: {name:{en:"Attack Speed Cap"}, unit:["<i class=\"rstat\">+","%</i>"]},
	s011: {name:{en:"Base Attack Damage Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s012: {name:{en:"Skill Cooldown Reduce"}, unit:["<i class=\"stat\">","%</i>"]},
	s013: {name:{en:"Skill Cooldown Reduce Cap"}, unit:["<i class=\"rstat\">+","%</i>"]},
	s014: {name:{en:"Skill Damage Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s015: {name:{en:"Skill Damage Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	s017: {name:{en:"Extra Boss Damage"}, unit:["<i class=\"stat\">","%</i>"]},
	s018: {name:{en:"Extra Boss Damage Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	/* Health */
	s030: {name:{en:"HEALTH"}},
	s031: {name:{en:"Health Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s032: {name:{en:"Health Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	s033: {name:{en:"Health Recovery On Attack"}, unit:["<i class=\"stat\">","%</i>"]},
	s034: {name:{en:"Recovery per Wave"}, unit:["<i class=\"stat\">","%</i>"]},
	/* Defense */
	s050: {name:{en:"DEFENSE"}},
	s051: {name:{en:"Defense Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s052: {name:{en:"Defense Multiply"}, unit:["<i class=\"stat\">","%</i>"]},
	s053: {name:{en:"Dodge Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s054: {name:{en:"Dodge Cap"}, unit:["<i class=\"rstat\">+","%</i>"]},
	s055: {name:{en:"Shield Block Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s056: {name:{en:"Shield Damage Block"}, unit:["<i class=\"stat\">","%</i>"]},
	s057: {name:{en:"Damage Reduction"}, unit:["<i class=\"stat\">","%</i>"]},
	/* Debuff */
	s070: {name:{en:"EFFECTS"}},
	s071: {name:{en:"Burn Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s072: {name:{en:"Freeze Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s073: {name:{en:"Poison Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s074: {name:{en:"Bleed Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s075: {name:{en:"Shock Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s076: {name:{en:"Knockback Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s077: {name:{en:"Knock Down Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s078: {name:{en:"Stun Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s079: {name:{en:"Slow Resistance"}, unit:["<i class=\"stat\">","%</i>"]},
	s081: {name:{en:"Burn Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s082: {name:{en:"Freeze Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s083: {name:{en:"Poison Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s084: {name:{en:"Shock Rate"}, unit:["<i class=\"stat\">","%</i>"]},
	s085: {name:{en:"Burn Damage Bonus"}, unit:["<i class=\"stat\">","%</i>"]},
	s086: {name:{en:"Freeze Damage Bonus"}, unit:["<i class=\"stat\">","%</i>"]},
	s087: {name:{en:"Poison Damage Bonus"}, unit:["<i class=\"stat\">","%</i>"]},
	s088: {name:{en:"Shock Damage Bonus"}, unit:["<i class=\"stat\">","%</i>"]},
	/* Other */
	s090: {name:{en:"OTHER"}},
	s091: {name:{en:"Movement Speed"}, unit:["<i class=\"stat\">","</i>"]},
	s092: {name:{en:"Dash Distance Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s093: {name:{en:"Reduce Dash Cooldown"}, unit:["<i class=\"stat\">","%</i>"]},
	s094: {name:{en:"Companion Attack Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s095: {name:{en:"Companion Health Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s096: {name:{en:"Companion Defense Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s097: {name:{en:"EXP Obtained Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s098: {name:{en:"Gold Obtained Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s099: {name:{en:"Advanced Chest Rate Increased"}, unit:["<i class=\"stat\">","%</i>"]},
	s100: {name:{en:"2x when dismantling"}, unit:["<i class=\"stat\">","%</i>"]},
	/* Debuffs */
	s200: {name:{en:"DEBUFFS"}},
	s291: {name:{en:"Ally Movement Speed Slowdown"}, unit:["<i class=\"dstat\">","</i>"]},
}

const rtdeffect = {
	e001: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Common sets or lower."},
		effects: {setbonus: ["c"],}
	},
	e002: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Legendary sets or lower."},
		effects: {setbonus: ["c", "l"],}
	},
	e003: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Holy sets or lower."},
		effects: {setbonus: ["c", "l", "h"],}
	},
	e004: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Infernal sets or lower."},
		effects: {setbonus: ["c", "l", "h", "i"],}
	},
	e005: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Eternal sets or lower."},
		effects: {setbonus: ["c", "l", "h", "i", "e"],}
	},
	e006: {
		desc:{en:"Effect <data class=\"ssstat\" value=\"#0#\">+#0#</data> Mythic sets or lower."},
		effects: {setbonus: ["c", "l", "h", "i", "e", "m"],}
	},

	e007: {desc:{en:"<i class=\"rstat\">Random permanent effects <data class=\"rstat\" value=\"#0#\">+#0#</data></i>"}},

	e011: {desc:{en:"<i class=\"sstat\">Knockdown and Knockback Immunity</i>"}},
	/*legendary*/

	/*holy*/
	e041: {desc:{en:"Warrior's Attack is increased by <data value=\"#0#\">#0#%</data> when his HP drops below <data value=\"#1#\">#1#%</data>."}},
	e042: {desc:{en:"<data value=\"#0#\">#0#%</data> chance of inflicting immediate death to poisoned enemies <i class=\"sstat\">(Deals huge damage to the boss)</i>."}},
	e043: {desc:{en:"When the Warrior's Health drops to 0, it returns immediately to 30% along with a 10-sec recovery effect and a protective shelle that lasts for <data value=\"#0#\">#0#.0</data> sec (<data value=\"#1#\">#1#%</data> sec Cooldown)."}},
	e044: {desc:{en:"Emits a Dragon Blessing every <data value=\"#0#\">#0#</data> sec."}},
	e045: {desc:{en:"Has a small chance of recovering <data value=\"#0#\">#0#%</data> Health when attacking."}},
	e046: {desc:{en:"TEXT"}},
	/*infernal*/
	e071: {desc:{en:"Receive no Damage when poisoned, and recover Health instead."}},
	e072: {desc:{en:"Basic Attacks gain a very high chance of poisoning the enemy and breaking the enemy's Defense."}},
	e073: {desc:{en:"When their Health drops below <data value=\"#0#\">#0#.0%</data>, Undead-type companions explode to deal <data value=\"#1#\">#1#.0%</data> area Damage."}},
	e074: {desc:{en:"Emits <i class=\"sstat\">Blinding Light</i> from the Flame Phoenix' eyes every <data value=\"#0#\">#0#</data> sec.</i>"}},
	e075: {desc:{en:"Summons a <i class=\"sstat\">Lightning Tank</i> every <data value=\"#0#\">#0#</data> sec.</i>"}},
	e076: {desc:{en:"When Undead-type companions' Health is reduced by <data value=\"#0#\">#0#.0%</data>, all Importal-type allies' Full Health is increased by <data class=\"sstat\" value=\"#1#\">#1#%</data>"}},
	e077: {desc:{en:"Has a <data value=\"#0#\">#0#%</data> chance of granting a protective shell that absorbs all Damage received for <data value=\"#1#\">#1#</data> sec and freezing the enemy when attacked."}},
	e078: {desc:{en:"Companion is revived as a <i class=\"sstat\">Skeleton Knight</i> upon death."}},
	e079: {desc:{en:"Undead-type companion's Attack Speed is increased by <data value=\"#0#\">#0#.0</data>"}},
	e080: {desc:{en:"Azure Bahamut evolves into <i class=\"sstat\">Death Dragon Caluyax</i>"}},
	e081: {desc:{en:"Leech Effect is increased by <data value=\"#0#\">#0#.0%</data> for Basic Attacks."}},
	e082: {desc:{en:"<i class=\"sstat\">Your stats increase as companions fall in battle.</i>"}},
	e083: {desc:{en:"Movement Speed is increased for all Air-type companions by <data value=\"#0#\">#0#</data>"}},
	e084: {desc:{en:"Critical Damage is increased by <data value=\"#0#\">#0#.0%</data> for all Air-type companions."}},
	e085: {desc:{en:"TEXT"}},
	e086: {desc:{en:"TEXT"}},
	/*eternals*/
	e101: {desc:{en:"Every time <data value=\"#0#\">#0#%</data> Health is lost, Critical Damage is increased by <data value=\"#1#\">#1#%</data> and Attack Speed by <data value=\"#2#\">#2#%</data>"}},
	e102: {desc:{en:"Launches a Destiny Blast every <data value=\"#0#\">#0#</data> seconds"}},
	e103: {desc:{en:"Basic Attacks have a <data value=\"#0#\">#0#%</data> chance of reducing the current Cooldown of a certain Skill by <data value=\"#1#\">#1#</data> sec."}},
	e104: {desc:{en:"Instantly strikes a shocked enemy with Raztori's Lightining, increasing Damage by <data value=\"#0#\">#0#%</data>, of your Attack value. Has a <data value=\"#1#\">#1#%</data> chance of paralyzing the enemy."}},
	e105: {desc:{en:"Attack Speed increases when Penetration power increases."}},
	e106: {desc:{en:"After having taking life-threatening damage, attacks within <data value=\"#0#\">#0#</data> seconds recovers <data value=\"#1#\">#1#%</data> HP and HP won't drop below 1."}},
	e107: {desc:{en:"When attacking an enemy with less than <data value=\"#0#\">#0#%</data> life remaining, it deals damage equal to <data value=\"#1#\">#1#%</data> of the target's maximum health.<br>The affected targets are bleeding, which greatly reduces their damage."}},
	e108: {desc:{en:"<i class=\"sstat\">Obtain Abyssal Power by sacrificing half of the life:</i><br>Cannot recover <data value=\"#0#\">#0#%</data> and more of its Health but received damage is reduced by <data value=\"#1#\">#1#%</data>"}},
	e109: {desc:{en:"When recovers more than its maximum health, <data value=\"#0d#\">#0d#%</data> of over-healed amount is converted to <i class=\"sstat\">Void Curtain</i> of its <data value=\"#1#\">#1#%</data> of maximum health."}},
	e110: {desc:{en:"Fire <i class=\"sstat\">Void Thorn</i> in every <data value=\"#0#\">#0#</data> sec. When the Health drops below <data value=\"#1#\">#1#%</data>, fire <i class=\"sstat\">Enhanced Void Thorn</i>"}},
	e111: {desc:{en:"After having damage, <i class=\"sstat\">Reflect</i> <data value=\"#0#\">#0#%</data> of the damage. The damage increases <data value=\"#1#\">#1#%</data> for each <data value=\"#2#\">#2#%</data> of Health loss. Activate critically only for monsters."}},
	e112: {desc:{en:"<i class=\"sstat\">Gain demonic power when Awoken Skill is used:</i><br>Health Recovery On Attack <data value=\"#0#\">#0#%</data> and Penetration Power <data value=\"#1#\">#1#%</data>.<br>Also Shadow arrows are shot when you attack."}},
	e113: {desc:{en:"TEXT"}},
	e114: {desc:{en:"TEXT"}},
	e115: {desc:{en:"TEXT"}},
}
// for effect e007
const rtdrandomeffect = {
	e024n: [["e005",1],["e005",2]],
	e033r1: [["e005",1],["e005",2]],
	e035b: [["e005",1],["e005",2]],
}

const rtdset = {
	/*legendary sets*/
	sl001: {
		setname:{en:"SETNAME"},
		effects:{
			s2: [["s001",50]],
			s3: [["s001",50]],
			s4: [["s001",50]]}},
	sl010: {
		setname:{en:"Royal Knightage"},
		effects:{
			s2: [["s031",25]],
			s3: [["s051",30]],
			s4: [["s007",30]]}},
	sl011: {
		setname:{en:"Boy Scout Striker"},
		effects:{
			s2: [["s094",25]],
			s3: [["s007",30]],
			s4: [["s009",40]]}},
	sl012: {
		setname:{en:"White Commander"},
		effects:{
			s2: [["s096",30]],
			s3: [["s005",30]],
			s4: [["s017",30]]}},
	sl013: {
		setname:{en:"Mage of the Kingdom"},
		effects:{
			s2: [["s014",25]],
			s3: [["s009",25]],
			s4: [["s012",15]]}},
	sl014: {
		setname:{en:"Tiamat's Legacy"},
		effects:{
			s2: [["s005",23]],
			s3: [["s007",35]],
			s4: [["s017",44]],
			s5: [["s003",8]]}},
	sl015: {
		setname:{en:"Elemental Dominator"},
		effects:{
			s2: [["s071",25]],
			s3: [["s073",25]],
			s4: [["s072",25]]}},
	sl016: {
		setname:{en:"Red Mage"},
		effects:{
			s2: [["s005",25]],
			s3: [["s014",40]],
			s4: [["s099",30]]}},
	sl017: {
		setname:{en:"Vanguard Knight"},
		effects:{
			s2: [["s051",40]],
			s3: [["s031",35]],
			s4: [["s055",10]]}},
	sl018: {
		setname:{en:"Royal Sorcerer"},
		effects:{
			s2: [["s012",10]],
			s3: [["s095",35]],
			s4: [["s096",40]]}},
	sl019: {
		setname:{en:"Royal Protector"},
		effects:{
			s2: [["s007",30]],
			s3: [["s098",25]],
			s4: [["s017",45]]}},
	sl020: {
		setname:{en:"Stygian Sniper"},
		effects:{
			s2: [["s009",30]],
			s3: [["s053",10]],
			s4: [["s078",15]]}},

	sl101: {setname:{en:"Rare ? Shoes"},},
	sl102: {setname:{en:"Rare Leather Shoes"},},
	sl103: {setname:{en:"Rare Iron Shoes"},},
	sl104: {setname:{en:"Heavy Clay Boots"},},

	/*holy sets*/
	sh001: {
		setname:{en:"SETNAME"},
		effects:{
			s2: [["s001",50]],
			s3: [["s001",50]],
			s4: [["s001",50]]}},
	sh010: {
		setname:{en:"Roland the Gallant"},
		effects:{
			s2: [["s031",44]],
			s3: [["s012",25]],
			s4: [["s051",74]]}},
	sh011: {
		setname:{en:"Joye, Queen of Hearts"},
		effects:{
			s2: [["s012",23]],
			s3: [["s051",70]],
			s4: [["s031",60]]}},
	sh012: {
		setname:{en:"EMP First Striker"},
		effects:{
			s2: [["s007",84]],
			s3: [["s017",77]],
			s4: [["s012",26]]}},
	sh013: {
		setname:{en:"Curse of Ramos"},
		effects:{
			s2: [["s095",109]],
			s3: [["s096",74]],
			s4: [["s094",50]],
			s5: [["s017",80]]}},
	sh014: {
		setname:{en:"Imhonam, God of Battle"},
		effects:{
			s2: [["s095",99]],
			s3: [["s007",90]],
			s4: [["s051",80]]}},
	sh015: {
		setname:{en:"Majin Satyr"},
		effects:{
			s2: [["s005",36]],
			s3: [["s017",80]],
			s4: [["s007",90]],
			s5: [["e041",150,40.0]]}},
	sh016: {
		setname:{en:"Annihilation Grim Reaper"},
		effects:{
			s2: [["s017",60]],
			s3: [["s009",52]],
			s4: [["s007",90]],
			s5: [["s012",30]]}},
	sh017: {
		setname:{en:"Black Knight's Fury"},
		effects:{
			s2: [["s051",50]],
			s3: [["s031",57]],
			s4: [["s012",27]]}},
	sh018: {
		setname:{en:"Odin's Charge"},
		effects:{
			s2: [["s009",57]],
			s3: [["s005",48]],
			s4: [["s053",21]]}},
	sh019: {
		setname:{en:"Celestial Light"},
		effects:{
			s2: [["s005",30]],
			s3: [["s007",80]],
			s4: [["s009",57]]}},
	sh020: {
		setname:{en:"Gray Dreich Spark"},
		effects:{
			s2: [["s051",80]],
			s3: [["s094",85]],
			s4: [["s031",50]]}},
	sh021: {
		setname:{en:"Darkling Victory Sword"},
		effects:{
			s2: [["s051",74]],
			s3: [["s031",45]],
			s4: [["s017",77]]}},
	sh022: {
		setname:{en:"Contract"},
		effects:{
			s2: [["s007",84]],
			s3: [["s031",60]],
			s4: [["s005",44]]}},
	sh023: {
		setname:{en:"Guardian of the Holy Annals"},
		effects:{
			s2: [["s095",130]],
			s3: [["s096",100]],
			s4: [["s012",50]]}},
	sh024: {
		setname:{en:"Advanced Griffin Knight"},
		effects:{
			s2: [["s009",46]],
			s3: [["s051",39]],
			s4: [["s031",60]]}},
	sh025: {
		setname:{en:"Artic Sorcerer"},
		effects:{
			s2: [["s097",60]],
			s3: [["s012",19]],
			s4: [["s014",45]]}},
	sh026: {
		setname:{en:"Evil's End"},
		effects:{
			s2: [["s005",30]],
			s3: [["s009",52]],
			s4: [["s007",74]]}},
	sh027: {
		setname:{en:"Thunder Monkey King"},
		effects:{
			s2: [["s012",19]],
			s3: [["s014",39]],
			s4: [["s007",90]]}},
	sh028: {
		setname:{en:"Celestial Brynhildr"},
		effects:{
			s2: [["s051",74]],
			s3: [["s031",60]],
			s4: [["s094",50]]}},
	sh029: {
		setname:{en:"Satyr's Prestige"},
		effects:{
			s2: [["s009",45]],
			s3: [["s012",19]],
			s4: [["s033",0.05]],
			s5: [["s014",40]]}},
	sh030: {
		setname:{en:"Hand of Death"},
		effects:{
			s2: [["s014",12]],
			s3: [["s017",75]],
			s4: [["e042",1]],
			s5: [["s031",45]]}},
	sh031: {
		setname:{en:"Emperor's Treasure"},
		effects:{
			s2: [["s098",45]],
			s3: [["s099",60]],
			s4: [["s098",65]]}},
	sh032: {
		setname:{en:"Will of Yggdrasil"},
		effects:{
			s2: [["s051",35]],
			s3: [["s031",44]],
			s4: [["e043",1.0,500]],
			s5: [["s094",120]]}},
	sh033: {
		setname:{en:"Dragon Call"},
		effects:{
			s2: [["s017",90],["e044",25]]}},
	/*holy self equips*/
	sh101: {setname:{en:"Vampire Band"},},
	sh102: {setname:{en:"Celestial Band"},},
	sh103: {setname:{en:"Phoenix Shoes"},},
	sh104: {setname:{en:"Aries' Necklace"},},
	/*infernal sets*/
	si001: {
		setname:{en:"SETNAME"},
		effects:{
			s2: [["s001",50]],
			s3: [["s001",50]],
			s4: [["s001",50]]}},
	si010: {
		setname:{en:"Predator Reklya"},
		effects:{
			s2: [["s073",50]],
			s3: [["s031",80]],
			s4: [["s094",50]],
			s5: [["e071"]]}},
	si011: {
		setname:{en:"Venom Master"},
		effects:{
			s2: [["s017",80]],
			s3: [["e072"]],
			s5: [["s001",100]]}},
	si012: {
		setname:{en:"Summer Rain"},
		effects:{
			s2: [["s017",130],["s007",150]]}},
	si013: {
		setname:{en:"Artic Sword"},
		effects:{
			s2: [["s017",130],["s007",150]]}},
	si014: {
		setname:{en:"Mystic Staff"},
		effects:{
			s2: [["s017",130],["s007",150]]}},
	si015: {
		setname:{en:"Majin Necklace"},
		effects:{
			s2: [["s017",100],["e073",20.0,500.0]]}},
	si016: {
		setname:{en:"Eye of the Phoenix"},
		effects:{
			s2: [["s007",100],["e074",1]]}},
	si017: {
		setname:{en:"AI Zeros"},
		effects:{
			s2: [["s007",100],["e075",25]]}},
	si018: {
		setname:{en:"Caluyax's Bone Armor"},
		effects:{
			s2: [["s017",100],["e076",50.0,10]]}},
	si019: {
		setname:{en:"Black Unicorn"},
		effects:{
			s2: [["s031",80],["s017",150]]}},
	si020: {
		setname:{en:"Catella's Leviathan Shield"},
		effects:{
			s2: [["s007",100],["e077",3,5]]}},
	si021: {
		setname:{en:"Agni, God of Fire's Proposition"},
		effects:{
			s2: [["s017",200],["e011"]]}},
	si022: {
		setname:{en:"Verdict of the Storm"},
		effects:{
			s2: [["s051",70]],
			s3: [["s012",25]],
			s4: [["s055",50]],
			s5: [["s014",60]]}},
	si023: {
		setname:{en:"Necromancy Power"},
		effects:{
			s2: [["s012",70]],
			s3: [["e078"]],
			s4: [["e079",10.0]],
			s5: [["e080"]]}},
	si024: {
		setname:{en:"Void Power"},
		effects:{
			s2: [["s005",20]],
			s3: [["s017",44]],
			s4: [["e081",2.0]],
			s5: [["e082"]]}},
	si025: {
		setname:{en:"Skuld's Protector"},
		effects:{
			s2: [["s051",25]],
			s3: [["e083",0.3]],
			s4: [["s053",15]],
			s5: [["e084",10]]}},
	/*si026 => si101*/
	si027: {
		setname:{en:"Light Destroyer"},
		effects:{s2: [["s017",120]]}},
	si028: {
		setname:{en:"Trinity Blade"},
		effects:{s2: [["s017",120]]}},
	si029: {
		setname:{en:"Meteor Blade"},
		effects:{s2: [["s017",120]]}},
	si030: {
		setname:{en:"Fury"},
		effects:{
			s2: [["s003",10]],
			s3: [["s012",25]],
			s4: [["s014",50]],
			s5: [["s007",80]]}},
	si031: {
		setname:{en:"Storm Dusk"},
		effects:{
			s2: [["s017",90]],
			s3: [["s007",100]],
			s4: [["s014",60]],
			s5: [["s003",10]]}},
	si032: {
		setname:{en:"Archangel Uriel"},
		effects:{
			s2: [["s017",85]],
			s3: [["s007",105]],
			s4: [["s014",75]],
			s5: [["s003",10]]}},
	si033: {
		setname:{en:"Destroyer of Armies"},
		effects:{
			s2: [["s017",80]],
			s3: [["s051",120]],
			s4: [["s031",90]],
			s5: [["s003",10]]}},
	si034: {
		setname:{en:"Destruction"},
		effects:{
			s2: [["s031",60]],
			s3: [["s012",25]],
			s4: [["s009",60]],
			s5: [["s003",15]]}},
	/*infernal self equips*/
	si101: {setname:{en:"Void Band"},},
	/*eternal sets*/	
	se001: {
		setname:{en:"SETNAME"},
		effects:{
			s2: [["s001",999999]],
			s4: [["s001",999999]]}},
	se010: {
		setname:{en:"God of Battle Eclipse"},
		effects:{
			s2: [["s005",30],["e101",1,15,2]],
			s3: [["s007",150],["s051",150]],
			s4: [["s017",200],["s092",300]]}},
	se011: {
		setname:{en:"Destiny Hunter"},
		effects:{
			s2: [["s014",50],["e102",5]],
			s3: [["s017",150],["s096",80]],
			s4: [["s002",30],["s001",70]]}},
	se012: {
		setname:{en:"Uranus, God of the Skies"},
		effects:{
			s2: [["s014",100],["e103",3,5]],
			s3: [["s017",150],["s031",100]],
			s4: [["s009",80],["s095",100]]}},
	se013: {
		setname:{en:"Mystic Beast Raztori"},
		effects:{
			s2: [["e104",300,20],["s007",200]],
			s3: [["s003",15]]}},
	se014: {
		setname:{en:"Power of God"},
		effects:{
			s2: [["e005",2]],
			s4: [["e011"]]}},
	se015: {
		setname:{en:"The Manticore's End"},
		effects:{
			s2: [["e105"],["s001",60]],
			s4: [["s033",0.05]]}},
	se016: {
		setname:{en:"Undying Sigurd"},
		effects:{
			s2: [["e106",5,1]]}},
	se017: {
		setname:{en:"Death Sentence"},
		effects:{
			s2: [["e107",15,15]]}},
	se018: {
		setname:{en:"Guardian of Darkness"},
		effects:{
			s2: [["e112",2.0,50.0]]}},
	se019: {
		setname:{en:"Avatar of Niflheim"},
		effects:{
			s2: [["s082",20],["s007",200]],
			s3: [["s006",5]],
			s4: [["s086",20]]}},
	se020: {
		setname:{en:"Avatar of Muspelheim"},
		effects:{
			s2: [["s081",20],["s003",15]],
			s3: [["s006",5]],
			s4: [["s085",20]]}},
	se021: {
		setname:{en:"Avatar of Alfheim"},
		effects:{
			s2: [["s084",20],["s005",20]],
			s3: [["s006",5]],
			s4: [["s088",20]]}},
	se022: {
		setname:{en:"Avatar of Vanaheim"},
		effects:{
			s2: [["s083",20],["s001",150]],
			s3: [["s006",5]],
			s4: [["s087",20]]}},
	se023: {
		setname:{en:"Droupnier of Odin"},
		effects:{
			s2: [["s098",55]],
			s3: [["s099",70]],
			s4: [["s097",75]]}},
	se024: {
		setname:{en:"Abyssal Helm/Armor"},
		effects:{
			s2: [["e108",50.0,40.0],["e005",1]],
			s4: [["s001",100],["s011",100]]},
		rarity:["s","s01"]},
	se025: {
		setname:{en:"Abyssal Warrior"},
		effects:{
			s2: [["s007",200],["s033",0.05]],
			s3: [["e109",50.0,50.0]],
			s4: [["s017",200],["s004",10]]},
		rarity:["s","s01"]},
	se026: {
		setname:{en:"Abyssal Ranger"},
		effects:{
			s2: [["s007",200],["s033",0.05]],
			s3: [["e110",2,50.0]],
			s4: [["s017",200],["s004",10]]},
		rarity:["s","s01"]},
	se027: {
		setname:{en:"Abyssal Mage"},
		effects:{
			s2: [["s007",200],["s033",0.05]],
			s3: [["e111",20.0,4.0,5]],
			s4: [["s017",200],["s004",10]]},
		rarity:["s","s01"]},
	se029: {
		setname:{en:"The End of a Myth"},
		effects:{
			s2: [["s001",360]],
			s3: [["s002",240]],
			s4: [["s017",120]],
			s5: [["s014",100]]}},
	/* self equip */
	se101: {setname:{en:"Yggdrasil Crystal"},},
	se102: {setname:{en:"Guardian of Fire"},},
	se103: {setname:{en:"Guardian of Water"},},
	se104: {setname:{en:"Guardian of Wind"},},
	se105: {setname:{en:"Guardian of Lightning"},},
	/* Event Items */
	se130: {setname:{en:"Event Ring"},rarity:["z"]},
	se131: {setname:{en:"Event Boots"},rarity:["z"]},
	se132: {setname:{en:"Event Belt"},rarity:["z"]},
	se133: {setname:{en:"Shard of Winter"},rarity:["z"]},
	se134: {setname:{en:"Sleipnir"},rarity:["z"]},
	se135: {setname:{en:"Goblin Belt"},rarity:["z"]},
}

const rtdequip = {
	/*legendary*/

	/*legendary noset*/
	l101f: {setid: "sl101", name:{en:"Rare ? Shoes"}, pos:0},
	l102f: {setid: "sl102", name:{en:"Rare Leather Shoes"}, pos:1},
	l103f: {setid: "sl103", name:{en:"Rare Iron Shoes"}, pos:2},
	l104f: {setid: "sl104", name:{en:"Heavy Clay Boots"}, pos:3, effects:[["s291",0.30]]},

	/*holy*/
	h010w: {setid: "sh010", name:{en:"Durendal"}, class:1, pos:0},
	h010o: {setid: "sh010", name:{en:"Roland's Shield"}, class:1, pos:0, effects:[["s057",20]]},
	h010h: {setid: "sh010", name:{en:"Roland's Helmet"}, pos:0},
	h010c: {setid: "sh010", name:{en:"Roland's Armor"}, pos:0},

	h011w: {setid: "sh011", name:{en:"Queen of Hearts' Sword"}, class:1, pos:1},
	h011o: {setid: "sh011", name:{en:"Queen of Hearts' Card"}, class:1, pos:1, effects:[["s057",20]]},
	h011h: {setid: "sh011", name:{en:"Queen of Hearts' Crown"}, pos:1},
	h011c: {setid: "sh011", name:{en:"Queen of Hearts' Gown"}, pos:1},

	h012w: {setid: "sh012", name:{en:"EMP Blade"}, class:1, pos:2},
	h012o: {setid: "sh012", name:{en:"EMP Shield"}, class:1, pos:2, effects:[["s057",20]]},
	h012h: {setid: "sh012", name:{en:"EMP Iron Helmet"}, pos:2},
	h012c: {setid: "sh012", name:{en:"EMP Suit"}, pos:2},

	h013w: {setid: "sh013", name:{en:"Ramos' Cursed Staff"}, class:3, pos:3},
	h013o: {setid: "sh013", name:{en:"Ramos' Golden Totem"}, class:3, pos:3},
	h013h: {setid: "sh013", name:{en:"Ramos' Cursed Mask"}, pos:3},
	h013c: {setid: "sh013", name:{en:"Ramos' Underclothes"}, pos:3},
	h013f: {setid: "sh013", name:{en:"Ramos' Shadow"}, pos:3},

	h014w: {setid: "sh014", name:{en:"Silverwolf Crescent Blade"}, class:1, pos:4},
	h014o: {setid: "sh014", name:{en:"Silverwolf Shield"}, class:1, pos:4, effects:[["s057",20]]},
	h014h: {setid: "sh014", name:{en:"Silverwolf's Face"}, pos:4},
	h014c: {setid: "sh014", name:{en:"Silverwolf's Skin"}, pos:4},

	h015w: {setid: "sh015", name:{en:"Evil's Demise"}, class:1, pos:5},
	h015o: {setid: "sh015", name:{en:"Evil's Mask"}, class:1, pos:5, effects:[["s057",20]]},
	h015h: {setid: "sh015", name:{en:"Devil Horns Helmet"}, pos:5},
	h015c: {setid: "sh015", name:{en:"Breastplate of Evil"}, pos:5},
	h015f: {setid: "sh015", name:{en:"Footprints of Evil"}, pos:5},

	h016w: {setid: "sh016", name:{en:"Annihilation"}, class:2, pos:6},
	h016o: {setid: "sh016", name:{en:"Grim Reaper"}, class:2, pos:6},
	h016h: {setid: "sh016", name:{en:"Domination"}, pos:6},
	h016c: {setid: "sh016", name:{en:"Destruction"}, pos:6},
	h016f: {setid: "sh016", name:{en:"Agony"}, pos:6},

	h017w: {setid: "sh017", name:{en:"Necrodemon's Sword"}, class:1, pos:7},
	h017o: {setid: "sh017", name:{en:"Necrodemon's Blood Shield"}, class:1, pos:7, effects:[["s057",20]]},
	h017h: {setid: "sh017", name:{en:"Black Knight's Iron Mask"}, pos:7},
	h017c: {setid: "sh017", name:{en:"Devil's Blood Armor"}, pos:7},

	h018w: {setid: "sh018", name:{en:"Gungnir"}, class:2, pos:8},
	h018o: {setid: "sh018", name:{en:"Odin's Mecha-Shield"}, class:2, pos:8},
	h018h: {setid: "sh018", name:{en:"Odin's Metal Helmet"}, pos:8},
	h018c: {setid: "sh018", name:{en:"Odin's Breastplate"}, pos:8},

	h019w: {setid: "sh019", name:{en:"Lightsword Burak"}, class:1, pos:9},
	h019o: {setid: "sh019", name:{en:"Rune Ring"}, class:1, pos:9, effects:[["s057",20]]},
	h019h: {setid: "sh019", name:{en:"Rune Headband"}, pos:9},
	h019c: {setid: "sh019", name:{en:"Rune Breastplate"}, pos:9},

	h020w: {setid: "sh020", name:{en:"Dreich Hammer Grande"}, class:1, pos:10},
	h020o: {setid: "sh020", name:{en:"Dreich's Ghoul Shield"}, class:1, pos:10, effects:[["s057",20]]},
	h020h: {setid: "sh020", name:{en:"Dreich's Magma Helmet"}, pos:10},
	h020c: {setid: "sh020", name:{en:"Dreich's Magma Armor"}, pos:10},

	h021w: {setid: "sh021", name:{en:"Darkling Victory Sword"}, class:1, pos:11},
	h021o: {setid: "sh021", name:{en:"Darkling Shield"}, class:1, pos:11, effects:[["s057",20]]},
	h021h: {setid: "sh021", name:{en:"Darkling Metal Helmet"}, pos:11},
	h021c: {setid: "sh021", name:{en:"Darkling Breastplate"}, pos:11},

	h022w: {setid: "sh022", name:{en:"Railgun Destroyer"}, class:2, pos:12},
	h022o: {setid: "sh022", name:{en:"Thruster Jetpack"}, class:2, pos:12},
	h022h: {setid: "sh022", name:{en:"Dual Vizard"}, pos:12},
	h022c: {setid: "sh022", name:{en:"Power Armor"}, pos:12},

	h023w: {setid: "sh023", name:{en:"Tear of Yggdrasil"}, class:3, pos:13},
	h023o: {setid: "sh023", name:{en:"Guardian of Nature"}, class:3, pos:13},
	h023h: {setid: "sh023", name:{en:"Heidrun's Horns"}, pos:13},
	h023c: {setid: "sh023", name:{en:"Armor of Life"}, pos:13},

	h024w: {setid: "sh024", name:{en:"Griffin Halberd"}, class:1, pos:14},
	h024o: {setid: "sh024", name:{en:"Griffin Shield"}, class:1, pos:14, effects:[["s057",20]]},
	h024h: {setid: "sh024", name:{en:"Griffin Helmet"}, pos:14},
	h024c: {setid: "sh024", name:{en:"Griffin Breastplate"}, pos:14},

	h025w: {setid: "sh025", name:{en:"Undead Kingdom Crystal"}, class:3, pos:15},
	h025o: {setid: "sh025", name:{en:"Moonlight Guard"}, class:3, pos:15},
	h025h: {setid: "sh025", name:{en:"Eye of Truth"}, pos:15},
	h025c: {setid: "sh025", name:{en:"Arctic Robe"}, pos:15},

	h026w: {setid: "sh026", name:{en:"Crusher of Devils"}, class:2, pos:16},
	h026o: {setid: "sh026", name:{en:"Evil's Rise"}, class:2, pos:16},
	h026h: {setid: "sh026", name:{en:"Eye of the Devil"}, pos:16},
	h026c: {setid: "sh026", name:{en:"Evil's Insurgence"}, pos:16},

	h027w: {setid: "sh027", name:{en:"Staff of Power"}, class:3, pos:17},
	h027o: {setid: "sh027", name:{en:"Exorcism"}, class:3, pos:17},
	h027h: {setid: "sh027", name:{en:"Judgment Crown"}, pos:17},
	h027c: {setid: "sh027", name:{en:"Dragon Robe"}, pos:17},

	h028w: {setid: "sh028", name:{en:"Celestial Lance"}, class:1, pos:18},
	h028o: {setid: "sh028", name:{en:"Celestial Shield"}, class:1, pos:18, effects:[["s057",20]]},
	h028h: {setid: "sh028", name:{en:"Celestial Valkyrie's Helmet"}, pos:18},
	h028c: {setid: "sh028", name:{en:"Celestial Armor"}, pos:18},

	h029r1: {setid: "sh029", name:{en:"Satyr Ring"}, pos:0},
	h029r2: {setid: "sh029", name:{en:"Satyr Band"}, pos:0},
	h029e: {setid: "sh029", name:{en:"Satyr Earrings"}, pos:0},
	h029n: {setid: "sh029", name:{en:"Satyr Amulet"}, pos:0},
	h029b: {setid: "sh029", name:{en:"Satyr Belt"}, pos:0},

	h030r1: {setid: "sh030", name:{en:"Death Ring"}, pos:1},
	h030r2: {setid: "sh030", name:{en:"Death Band"}, pos:1},
	h030e: {setid: "sh030", name:{en:"Death Earrings"}, pos:1},
	h030n: {setid: "sh030", name:{en:"Death Pendant"}, pos:1},
	h030b: {setid: "sh030", name:{en:"Death Protector"}, pos:1},

	h031e: {setid: "sh031", name:{en:"Emperor's Golden Earrings"}, pos:2},
	h031n: {setid: "sh031", name:{en:"Emperor's Golden Necklace"}, pos:2},
	h031b: {setid: "sh031", name:{en:"Emperor's Silk Belt"}, pos:2},

	h032r1: {setid: "sh032", name:{en:"Yggdrasil Leaf Band"}, pos:3},
	h032r2: {setid: "sh032", name:{en:"Yggdrasil Twig Band"}, pos:3},
	h032e: {setid: "sh032", name:{en:"Tear of Yggdrasil"}, pos:3},
	h032n: {setid: "sh032", name:{en:"Yggdrasil Pendant"}, pos:3},
	h032b: {setid: "sh032", name:{en:"Yggdrasil Belt"}, pos:3},

	h033r1: {setid: "sh033", name:{en:"Imp Soulstone Band"}, pos:2},
	h033r2: {setid: "sh033", name:{en:"Archdevil Soulstone Band"}, pos:2},

	/*holy noset*/
	h034r1: {setid: "sh101", name:{en:"Vampire Band"}, pos:4, effects:[["e045",5]]},
	h035r1: {setid: "sh102", name:{en:"Celestial Band"}, pos:5, effects:[["e003",1]]},
	h036f: {setid: "sh103", name:{en:"Phoenix Shoes"}, pos:7, effects:[["s091",0.3]]},
	h037n: {setid: "sh104", name:{en:"Aries' Necklace"}, pos:6, effects:[["s001",10]]},
	/*infernal*/
	i010e: {setid: "si010", name:{en:"Rekyla Eye"}, pos:0},
	i010n: {setid: "si010", name:{en:"Rekyla Necklace"}, pos:0},
	i010f: {setid: "si010", name:{en:"Rekyla Nails"}, pos:0},
	i010r1: {setid: "si010", name:{en:"Rekyla Dusk"}, pos:0},

	i011h: {setid: "si011", name:{en:"Akarak's Fury"}, pos:0},
	i011c: {setid: "si011", name:{en:"Akarak's Blast"}, pos:0},
	i011b: {setid: "si011", name:{en:"Akarak's Matrix"}, pos:0},

	i012w: {setid: "si012", name:{en:"Summer Rain"}, class:2, pos:0},
	i013w: {setid: "si013", name:{en:"Artic Sword"}, class:1, pos:1},
	i014w: {setid: "si014", name:{en:"Mystic Staff"}, class:3, pos:2},
	i015n: {setid: "si015", name:{en:"Majin Necklace"}, pos:1},
	i016o: {setid: "si016", name:{en:"Eye of the Phoenix"}, class:3, pos:0},
	i017o: {setid: "si017", name:{en:"AI Zeros"}, pos:1, effects:[["s057",20]]},
	i018c: {setid: "si018", name:{en:"Caluyax's Bone Armor"}, pos:1},
	i019h: {setid: "si019", name:{en:"Black Unicorn"}, pos:1},
	i020o: {setid: "si020", name:{en:"Catella's Leviathan Shield"}, pos:2},
	i021c: {setid: "si021", name:{en:"Agni, God of Fire's Proposition"}, pos:2},

	i022e: {setid: "si022", name:{en:"Ancient Knight's Crystal Earrings"}, pos:2},
	i022n: {setid: "si022", name:{en:"Ancient Knight's Crystal Necklace"}, pos:2},
	i022b: {setid: "si022", name:{en:"Ancient Knight's Crystal Belt"}, pos:2},
	i022f: {setid: "si022", name:{en:"Ancient Knight's Storm Boots"}, pos:2},

	i023h: {setid: "si023", name:{en:"Skull of Death"}, pos:3},
	i023r1: {setid: "si023", name:{en:"Skeleton Band"}, pos:3},
	i023e: {setid: "si023", name:{en:"Skeleton Earrings"}, pos:3},
	i023n: {setid: "si023", name:{en:"Skeleton Necklace"}, pos:3},
	i023b: {setid: "si023", name:{en:"Skeleton Belt"}, pos:3},

	i024r1: {setid: "si024", name:{en:"Breath of the Nightmare"}, pos:4},
	i024r2: {setid: "si024", name:{en:"Breath of the Abyss"}, pos:4},
	i024e: {setid: "si024", name:{en:"Eye of the Abyss"}, pos:4},
	i024n: {setid: "si024", name:{en:"Eye of the Nightmare"}, pos:4},
	i024b: {setid: "si024", name:{en:"Nightmare Shadow"}, pos:4},

	i025r1: {setid: "si025", name:{en:"Angel Band"}, pos:5},
	i025e: {setid: "si025", name:{en:"Eye of the Angels"}, pos:5},
	i025n: {setid: "si025", name:{en:"Angel Wings"}, pos:5},
	i025b: {setid: "si025", name:{en:"Angelic Belt"}, pos:5},
	i025f: {setid: "si025", name:{en:"Angel Boots"}, pos:5},

	i027w: {setid: "si027", name:{en:"Light Destroyer"}, class:1, pos:3},
	i028w: {setid: "si028", name:{en:"Trinity Blade"}, class:1, pos:4},
	i029w: {setid: "si029", name:{en:"Meteor Blade"}, class:1, pos:5},

	i030r1: {setid: "si030", name:{en:"Valkyrie Iridescent Band"}, pos:6},
	i030r2: {setid: "si030", name:{en:"Valkyrie Opal Band"}, pos:6},
	i030e: {setid: "si030", name:{en:"Valkyrie's Golden Earrings"}, pos:6},
	i030n: {setid: "si030", name:{en:"Valkyrie's Golden Necklace"}, pos:6},
	i030b: {setid: "si030", name:{en:"Valkyrie's Golden Belt"}, pos:6},

	i031w: {setid: "si031", name:{en:"Stormsword Draxler"}, class:1, pos:6},
	i031o: {setid: "si031", name:{en:"Ancient's Crystal Shield"}, class:1, pos:6, effects:[["s057",20]]},
	i031h: {setid: "si031", name:{en:"Ancient's Storm Helmet"}, pos:6},
	i031c: {setid: "si031", name:{en:"Ancient's Storm Breastplate"}, pos:6},
	i031f: {setid: "si031", name:{en:"Ancient's Crystal Boots"}, pos:6},

	i032w: {setid: "si032", name:{en:"Celestial Aurelion"}, class:3, pos:7},
	i032o: {setid: "si032", name:{en:"Celestial Golden Shield"}, class:3, pos:7},
	i032h: {setid: "si032", name:{en:"Celestial Crown"}, pos:7},
	i032c: {setid: "si032", name:{en:"Celestial Golden Garment"}, pos:7},
	i032f: {setid: "si032", name:{en:"Celestial Golden Boots"}, pos:7},

	i033w: {setid: "si033", name:{en:"Dark Mephisto"}, class:2, pos:8},
	i033o: {setid: "si033", name:{en:"Baal's Palm"}, class:2, pos:8},
	i033h: {setid: "si033", name:{en:"Baal's Face"}, pos:8},
	i033c: {setid: "si033", name:{en:"Baal's Demon Breastplate"}, pos:8},
	i033f: {setid: "si033", name:{en:"Baal's Soulstone Boots"}, pos:8},

	i034r1: {setid: "si034", name:{en:"Archdevil Soul Band"}, pos:7},
	i034r2: {setid: "si034", name:{en:"Archdevil Soul Collector Band"}, pos:7},
	i034e: {setid: "si034", name:{en:"Archdevil's Soulstone Earrings"}, pos:7},
	i034n: {setid: "si034", name:{en:"Archdevil's Soulstone Neclace"}, pos:7},
	i034b: {setid: "si034", name:{en:"Archdevil's Soulstone Belt"}, pos:7},

	/*infernal noset*/
	i026r1: {setid: "si101", name:{en:"Void Band"}, pos:1, effects:[["e004",1]]},

	/*eternal*/
	e010w: {setid: "se010", name:{en:"Eclipse Vielse"}, class:1, pos:0},
	e010o: {setid: "se010", name:{en:"Eclipse Zegna's Shield"}, class:1, pos:0, effects:[["s057",20]]},
	e010h: {setid: "se010", name:{en:"God of War Blood Helmet"}, pos:0},
	e010c: {setid: "se010", name:{en:"God of War's Blood Armor"}, pos:0},

	e011w: {setid: "se011", name:{en:"Destiny Railgun"}, class:2, pos:1},
	e011o: {setid: "se011", name:{en:"Advanced Arcane Magazine"}, class:2, pos:1},
	e011h: {setid: "se011", name:{en:"Judge of Destiny"}, pos:1},
	e011c: {setid: "se011", name:{en:"Fated Mecha-Armor"}, pos:1},

	e012w: {setid: "se012", name:{en:"Planet Soul"}, class:3, pos:2},
	e012o: {setid: "se012", name:{en:"Planet Scales"}, class:3, pos:2},
	e012h: {setid: "se012", name:{en:"Uranus' Headband"}, pos:2},
	e012c: {setid: "se012", name:{en:"Uranus' Sorcerer Tunic"}, pos:2},

	e013r1: {setid: "se013", name:{en:"Light of Raztori"}, pos:0},
	e013b: {setid: "se013", name:{en:"Raztori Prey"}, pos:0},

	e014e: {setid: "se014", name:{en:"The Transcender"}, pos:0},
	e014n: {setid: "se014", name:{en:"The Absolute"}, pos:0},

	e015r1: {setid: "se015", name:{en:"Manticore Spine"}, pos:1},
	e015f: {setid: "se015", name:{en:"Manticore Fang"}, pos:1},

	e016w: {setid: "se016", name:{en:"Undead Greatsword"}, class:1, pos:3},
	e016o: {setid: "se016", name:{en:"Fafnir's Pledge"}, class:1, pos:3, effects:[["s057",20]]},

	e017w: {setid: "se017", name:{en:"Devil's Bone"}, class:3, pos:4},
	e017o: {setid: "se017", name:{en:"Necronomicon"}, class:3, pos:4},

	e018w: {setid: "se018", name:{en:"Guardian of Darkness"}, class:2, pos:5},
	e018o: {setid: "se018", name:{en:"Demon Chaser"}, class:2, pos:5},

	e019h: {setid: "se019", name:{en:"Frozen Gaze"}, pos:3},
	e019c: {setid: "se019", name:{en:"Frozen Heart"}, pos:3},
	e019e: {setid: "se019", name:{en:"Will of Frost"}, pos:3},
	e019b: {setid: "se019", name:{en:"Frost Pillar"}, pos:3},
	e019f: {setid: "se019", name:{en:"Frozen Ground"}, pos:3},

	e020h: {setid: "se020", name:{en:"Thawing Gaze"}, pos:4},
	e020c: {setid: "se020", name:{en:"Thawed Heart"}, pos:4},
	e020e: {setid: "se020", name:{en:"Thawing Will"}, pos:4},
	e020b: {setid: "se020", name:{en:"Thawing Pillar"}, pos:4},
	e020f: {setid: "se020", name:{en:"Thawed Ground"}, pos:4},

	e021h: {setid: "se021", name:{en:"Shining Gaze"}, pos:5},
	e021c: {setid: "se021", name:{en:"Shining Heart"}, pos:5},
	e021e: {setid: "se021", name:{en:"Shining Will"}, pos:5},
	e021b: {setid: "se021", name:{en:"Shining Pillar"}, pos:5},
	e021f: {setid: "se021", name:{en:"Shining Ground"}, pos:5},

	e022h: {setid: "se022", name:{en:"Brutal Gaze"}, pos:6},
	e022c: {setid: "se022", name:{en:"Brutal Heart"}, pos:6},
	e022e: {setid: "se022", name:{en:"Brutal Will"}, pos:6},
	e022b: {setid: "se022", name:{en:"Pillar of Brutality"}, pos:6},
	e022f: {setid: "se022", name:{en:"Brutal Ground"}, pos:6},

	e023r1: {setid: "se023", name:{en:"Draupnir"}, pos:2},
	e023e: {setid: "se023", name:{en:"Odin's Rule"}, pos:2},
	e023n: {setid: "se023", name:{en:"Odin's Will"}, pos:2},
	e023b: {setid: "se023", name:{en:"Odin's Throne"}, pos:2},
	/* Yggdrasil */
	e024n: {setid: "se101", name:{en:"Yggdrasil Crystal"}, pos:1, effects:[["e007",2]]},
	/* Guardian Rings */
	e025r1: {setid: "se102", name:{en:"Guardian of Fire"}, pos:3, effects:[["s071",30]]},
	e026r1: {setid: "se103", name:{en:"Guardian of Water"}, pos:4, effects:[["s072",30]]},
	e027r1: {setid: "se104", name:{en:"Guardian of Wind"}, pos:5, effects:[["s073",30]]},
	e028r1: {setid: "se105", name:{en:"Guardian of Lightning"}, pos:6, effects:[["s074",30]]},
	/* Tier Dungeon Set : The End of a Myth */
	e029r1: {setid: "se029", name:{en:"The Piece of Doom"}, pos:7, effects:[["s012",30]]},
	e029r2: {setid: "se029", name:{en:"Shard of Leviath"}, pos:7, effects:[["s053",30]]},
	e029e: {setid: "se029", name:{en:"Jormundgand's Scale"}, pos:7, effects:[["s003",30]]},
	e029n: {setid: "se029", name:{en:"Clockwork Arcane Core"}, pos:7, effects:[["s005",30]]},
	e029b: {setid: "se029", name:{en:"Flaming Lavascale"}, pos:7, effects:[["s033",1.5]]},
	/* Event Items */
	//e030r1: {setid: "se130", name:{en:"Event Ring"}, pos:8},
	//e031f: {setid: "se131", name:{en:"Event Boots"}, pos:8},
	//e032b: {setid: "se132", name:{en:"Event Belt"}, pos:8},
	e033r1: {setid: "se133", name:{en:"Shard of Winter"}, pos:9, effects:[["e007",2]]},
	e034f: {setid: "se134", name:{en:"Sleipnir"}, pos:9, effects:[["s091",0.2]]},
	e035b: {setid: "se135", name:{en:"Goblin King's Ring Belt"}, pos:9, effects:[["e007",1],["s013",10]]},
	/* Season Items */
	e100h: {setid: "se024", name:{en:"Abyssal Eyes"}, pos:7},
	e100c: {setid: "se024", name:{en:"Abyssal Heart"}, pos:7},

	e101w: {setid: "se025", name:{en:"Crasher of Void"}, class:1, pos:7},
	e101o: {setid: "se025", name:{en:"Shadow of Crasher"}, class:1, pos:7, effects:[["s057",20]]},

	e102w: {setid: "se026", name:{en:"Stakeout of Void"}, class:2, pos:8},
	e102o: {setid: "se026", name:{en:"Shadow of Stakeout"}, class:2, pos:8},

	e103w: {setid: "se027", name:{en:"Watcher of Void"}, class:3, pos:9},
	e103o: {setid: "se027", name:{en:"Shadow of Watcher"}, class:3, pos:9},
}