"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "1241240adfasdf", "", "HELLO", 123456);
let blockChain = [genesisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map