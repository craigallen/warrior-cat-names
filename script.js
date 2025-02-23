const prefixes = ["Fire", "Thunder", "Shadow", "Wind", "River", "Bright", "Dark", "Storm", "Cloud", "Sun"];
const suffixes = ["heart", "claw", "tail", "fur", "pelt", "whisker", "foot", "stripe", "nose", "eye"];

document.getElementById('generateButton').addEventListener('click', () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const catName = `${prefix}${suffix}`;
    document.getElementById('catName').innerText = catName;
});
