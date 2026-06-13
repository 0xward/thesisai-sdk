const { ThesisAISDK } = require("../index.js");
const sdk = new ThesisAISDK();
console.log("📚 Running Autonomous Research Synthesis Agent on Stacks...");
sdk.synthesizeResearch("Web3 Identity", ["SIP-010"]).then(res => console.log("Synthesis:", res));
console.log("✅ [thesisai-sdk] Demo running successfully!");