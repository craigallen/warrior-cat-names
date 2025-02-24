const prefixes = [
    "Acorn", "Adder", "Albatross", "Alder", "Alligator", "Alpine", "Amber", "Anole", "Ant", "Antler", "Apple", "Arch", 
    "Ash", "Aspen", "Aster", "Auburn", "Badger", "Bamboo", "Basil", "Bass", "Bat", "Bay", "Bear", "Beaver", "Bee", 
    "Beech", "Beetle", "Berry", "Birch", "Bird", "Bitter", "Black", "Blink", "Blister", "Blizzard", "Blossom", "Blue", 
    "Bone", "Borage", "Boulder", "Bracken", "Bramble", "Breeze", "Briar", "Bright", "Brindle", "Brisk", "Bristle", 
    "Brittle", "Broken", "Brook", "Brown", "Brush", "Bubble", "Bumble", "Burdock", "Burn", "Burnet", "Burrow", "Burr", 
    "Butterfly", "Cactus", "Caiman", "Cardinal", "Cedar", "Chance", "Charm", "Chasm", "Cherry", "Chestnut", "Chickadee", 
    "Chipmunk", "Chirp", "Chrysalis", "Chum", "Cicada", "Cinder", "Clam", "Clay", "Clear", "Cliff", "Cloud", "Clover", 
    "Coal", "Cobweb", "Cocoon", "Comet", "Comfrey", "Conch", "Cow", "Coyote", "Crab", "Cranberry", "Creek", "Cricket", 
    "Crimson", "Crocodile", "Crooked", "Crouch", "Crow", "Crystal", "Curl", "Curly", "Cypress", "Daffodil", "Daisy", 
    "Damson", "Dandelion", "Dapple(d)", "Dark", "Dawn", "Desert", "Dew", "Doe", "Dolphin", "Dove", "Dragonfly", "Drift", 
    "Duck", "Dune", "Dusk", "Dust", "Eagle", "Echo", "Eclipse", "Elk", "Elm", "Ember", "Falcon", "Fallow", "Fawn", 
    "Feather", "Fern", "Fever", "Fig", "Fin", "Finch", "Fire", "Flake", "Flame", "Flicker", "Flight", "Flint", "Flower", 
    "Flutter", "Fly", "Foam", "Fog", "Fox", "Freckle", "Fringe", "Frog", "Frost", "Furze", "Fuzz", "Fuzzy", "Gale", 
    "Gannet", "Gecko", "Ginger", "Ginkgo", "Glade", "Glare", "Glen", "Goat", "Gold", "Golden", "Goose", "Gorse", "Grass", 
    "Grasshopper", "Gray", "Green", "Grouse", "Gull", "Hail", "Half", "Harbor", "Hare", "Harrier", "Haven", "Hawk", 
    "Hazel", "Heather", "Heavy", "Heron", "Hickory", "Hollow", "Holly", "Honey", "Hop", "Horn", "Hornet", "Horse", 
    "Hound", "Hover", "Howl", "Hum", "Humming", "Hummingbird", "Ibis", "Ice", "Icicle", "Indigo", "Iris", "Ivory", 
    "Ivy", "Jackal", "Jade", "Jay", "Juniper", "Katydid", "Kestrel", "Kite", "Kiwi", "Lake", "Larch", "Lark", "Larkspur", 
    "Lavender", "Leaf", "Lemming", "Lemon", "Leopard", "Lichen", "Light", "Lightning", "Lilac", "Lily", "Linden", "Lion", 
    "Little", "Lizard", "Lode", "Loon", "Lotus", "Loud", "Lynx", "Magnolia", "Magpie", "Mallow", "Mango", "Maple", 
    "Marble", "Marbled", "Marigold", "Marrow", "Mayfly", "Meadow", "Milk", "Mint", "Mist", "Misty", "Mockingbird", 
    "Mole", "Monarch", "Montane", "Moon", "Moose", "Morning", "Moss", "Moth", "Mottle", "Mottled", "Mountain", "Mouse", 
    "Mud", "Mulberry", "Mumble", "Murky", "Mushroom", "Mussel", "Myrtle", "Nectar", "Needle", "Nettle", "Newt", "Night", 
    "Nightingale", "Nightmare", "Nut", "Oak", "Oat", "Ocher", "Odd", "Oleander", "Olive", "One", "Orange", "Orca", 
    "Orchid", "Oriole", "Osprey", "Otter", "Owl", "Pansy", "Parsley", "Patch", "Peach", "Peak", "Pear", "Pearl", 
    "Pebble", "Peony", "Pepper", "Perch", "Petal", "Petrel", "Pigeon", "Pike", "Pine", "Piper", "Plover", "Plum", "Pod", 
    "Pollen", "Poppy", "Pounce", "Prickle", "Primrose", "Ptarmigan", "Puddle", "Puff", "Pumpkin", "Purr", "Quail", 
    "Quick", "Quiet", "Quill", "Rabbit", "Raccoon", "Ragged", "Rain", "Raspberry", "Rat", "Rattle", "Raven", "Ray", 
    "Red", "Reed", "Reef", "Rice", "Ridge", "Rift", "Ripple", "Rise", "Rising", "River", "Robin", "Root", "Rose", 
    "Rowan", "Rubble", "Running", "Russet", "Rust", "Rye", "Sage", "Salmon", "Sand", "Sandy", "Scad", "Scorch", "Sedge", 
    "Sequoia", "Shade", "Shadow", "Shark", "Shatter", "Sheep", "Shell", "Shimmer", "Shrew", "Shy", "Sickle", "Silver", 
    "Skip", "Skunk", "Slate", "Slight", "Small", "Smoke", "Smolder", "Snail", "Snake", "Snap", "Snip", "Snow", "Soft", 
    "Soot", "Sorrel", "Spark", "Sparrow", "Speckle", "Speckled", "Spider", "Splinter", "Spotted", "Sprout", "Squirrel", 
    "Stag", "Starling", "Stem", "Still", "Sting", "Stoat", "Stone", "Storm", "Stream", "Sun", "Swallow", "Swan", "Sway", 
    "Swift", "Sycamore", "Tadpole", "Taiga", "Tall", "Tangle", "Tansy", "Tawny", "Tether", "Thistle", "Thorn", "Thrift", 
    "Thrush", "Thunder", "Thyme", "Tiercel", "Tiger", "Timber", "Tortoise", "Tree", "Trout", "Turtle", "Twig", "Twilight", 
    "Umber", "Valley", "Vapor", "Violet", "Viper", "Vixen", "Vole", "Wade", "Wasp", "Water", "Waterfall", "Watermint", 
    "Weasel", "Weed", "Whirl", "Whisker", "Whisper", "Whistle", "White", "Whorl", "Wild", "Willow", "Wind", "Wish", 
    "Wisteria", "Wolf", "Wood", "Woodpecker", "Wool", "Woolly", "Wren", "Yarrow", "Yellow", "Yew", "Zinnia"
];
const suffixes = [
    "beak", "belly", "berry", "bite", "blaze", "blossom", "bramble", "branch", "breeze", "briar", "bright", "burr", 
    "bush", "call", "chance", "charm", "claw", "cloud", "cry", "dawn", "dusk", "dust", "ear", "ears", "eye", "eyes", 
    "face", "fall", "fang", "feather", "fern", "field", "fin", "fish", "flake", "flame", "flight", "flower", "foot", 
    "frost", "fur", "glade", "grove", "heart", "hollow", "jaw", "kit", "lake", "leaf", "leap", "leg", "light", "mask", 
    "mist", "moon", "nose", "nut", "patch", "paw", "pelt", "petal", "pool", "rain", "ripple", "root", "run", "runner", 
    "scar", "seed", "shade", "shadow", "shell", "shine", "sight", "skip", "sky", "slip", "song", "spark", "speck", 
    "splash", "spot", "spring", "stalk", "star", "stem", "step", "stone", "storm", "streak", "stream", "strike", 
    "stripe", "sun", "swoop", "tail", "talon", "thorn", "throat", "tip", "tooth", "tree", "tuft", "twig", "water", 
    "weed", "whisker", "wind", "wing", "wish", "wood"
];

document.getElementById('generateButton').addEventListener('click', () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const catName = `${prefix}${suffix}`;
    document.getElementById('catName').innerText = catName;
});
