function calculateOhm() {
const I = parseFloat(document.getElementById("current").value);
const R = parseFloat(document.getElementById("resistance").value);
const result = document.getElementById("ohmResult");

if (isNaN(I) || isNaN(R) || I < 0 || R < 0) {
result.innerText = "⚠️ Please enter valid positive values.";
return;
}

const V = I * R;
result.innerText = `Voltage V = ${V.toFixed(2)} V`;
}

function calculatePower() {
const V = parseFloat(document.getElementById("voltageP").value);
const I = parseFloat(document.getElementById("currentP").value);
const result = document.getElementById("powerResult");

if (isNaN(V) || isNaN(I) || V < 0 || I < 0) {
result.innerText = "⚠️ Please enter valid positive values.";
return;
}

const P = V * I;
result.innerText = `Power P = ${P.toFixed(2)} W`;
}

function calculateSeries() {
const R1 = parseFloat(document.getElementById("r1Series").value);
const R2 = parseFloat(document.getElementById("r2Series").value);
const result = document.getElementById("seriesResult");

if (isNaN(R1) || isNaN(R2) || R1 < 0 || R2 < 0) {
result.innerText = "⚠️ Please enter valid positive values.";
return;
}

const Req = R1 + R2;
result.innerText = `Equivalent Resistance = ${Req.toFixed(2)} Ω`;
}

function calculateParallel() {
const R1 = parseFloat(document.getElementById("r1Parallel").value);
const R2 = parseFloat(document.getElementById("r2Parallel").value);
const result = document.getElementById("parallelResult");

if (
isNaN(R1) ||
isNaN(R2) ||
R1 <= 0 ||
R2 <= 0
) {
result.innerText = "⚠️ Please enter resistance values greater than 0.";
return;
}

const Req = (R1 * R2) / (R1 + R2);
result.innerText = `Equivalent Resistance = ${Req.toFixed(2)} Ω`;
}

function calculateVD() {
const Vin = parseFloat(document.getElementById("vin").value);
const R1 = parseFloat(document.getElementById("r1VD").value);
const R2 = parseFloat(document.getElementById("r2VD").value);
const result = document.getElementById("vdResult");

if (
isNaN(Vin) ||
isNaN(R1) ||
isNaN(R2) ||
R1 < 0 ||
R2 < 0 ||
R1 + R2 === 0
) {
result.innerText = "⚠️ Please enter valid resistance values.";
return;
}

const Vout = Vin * (R2 / (R1 + R2));
result.innerText = `Vout = ${Vout.toFixed(2)} V`;
}

function calculateResistorColor() {
const band1 = parseInt(
document.getElementById("band1").value
);

const band2 = parseInt(
document.getElementById("band2").value
);

const multiplier = parseInt(
document.getElementById("multiplier").value
);

const result = document.getElementById("colorResult");

if (
isNaN(band1) ||
isNaN(band2) ||
isNaN(multiplier)
) {
result.innerText = "⚠️ Please select valid colors.";
return;
}

const value = (band1 * 10 + band2) * multiplier;

result.innerText = `Resistance = ${value.toLocaleString()} Ω`;
}

function calculateAC() {
const V = parseFloat(
document.getElementById("voltageAC").value
);

const I = parseFloat(
document.getElementById("currentAC").value
);

const PF = parseFloat(
document.getElementById("pf").value
);

const result = document.getElementById("acResult");

if (
isNaN(V) ||
isNaN(I) ||
isNaN(PF) ||
V < 0 ||
I < 0 ||
PF < 0 ||
PF > 1
) {
result.innerText =
"⚠️ Enter valid values. Power Factor must be between 0 and 1.";
return;
}

const P = V * I * PF;

result.innerText = `Real Power = ${P.toFixed(2)} W`;
}

