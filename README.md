<p align="center">
  <img src="https://raw.githubusercontent.com/SamAnand/SVG-Animations/master/grid.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

<p align="center">
  <img src="./assets/header-sync.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

# @0xward/thesisai-sdk

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/thesisai-sdk"><img src="https://img.shields.io/npm/v/@0xward/thesisai-sdk?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/thesisai-sdk"><img src="https://img.shields.io/npm/dm/@0xward/thesisai-sdk?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/thesisai-sdk"><img src="https://img.shields.io/npm/l/@0xward/thesisai-sdk?style=flat-square" alt="License" /></a>
</p>

ThesisAI Autonomous Research Agent SDK—core computational logic for decentralized intelligence frameworks built on STACKS ecosystems.


## Core Capabilities

* **Multi-Source Synthesis:** Standardizes ingestion pipelines to extract technical structures and parse them into clean markdown payloads.
* **Proof of Authorship:** Cryptographically hashes compilation instances, preparing data strings for native anchoring routines.
* **Decentralized Storage Mapping:** Formats data payloads ensuring strict compliance with SIP-010 metadata schemas and external storage registries.

---

## Quick Start

```javascript
const { ThesisAISDK } = require("@0xward/thesisai-sdk");
const sdk = new ThesisAISDK();

async function runTask() {
    const dataset = await sdk.synthesizeResearch("Stacks Architecture Analysis", ["SIP-010"]);
    console.log("Generated Dataset:", dataset);
}

runTask();
```

---

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `synthesizeResearch` | `topic: string`, `sources: Array` | `Promise<Object>` | Consolidates incoming parameters into formal scientific indexes. |
| `verifyProofOfAuthorship` | `hash: string` | `Promise<Object>` | References on-chain blocks to guarantee immutable registration records. |

---

## License

This project is licensed under the terms of the MIT License.