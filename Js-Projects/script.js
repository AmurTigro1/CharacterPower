function computePower() {
    let strength = document.getElementById("Strength").value*1
    let intelligence = document.getElementById("Intelligence").value*1
    let agility = document.getElementById("Agility").value*1

    let Power = strength + intelligence + agility
    // document.getElementById("Power").innerText = Power
    document.getElementById("Power").innerText = `Power Level:  ${Power}`;
}
const colorfulRange = document.getElementById("colorful-range");

colorfulRange.addEventListener("input", function() {
  const value = (colorfulRange.value - colorfulRange.min) / (colorfulRange.max - colorfulRange.min) * 100;
  colorfulRange.style.background = `linear-gradient(to right, red, yellow, green ${value}%, transparent ${value}%)`;
});
