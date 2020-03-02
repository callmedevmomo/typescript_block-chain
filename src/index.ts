class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(index, hash, previousHash, data, timestamp) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "1241240adfasdf", "", "HELLO", 123456);

let blockChain: [Block] = [genesisBlock];

console.log(blockChain);
export {}; //bug fix
