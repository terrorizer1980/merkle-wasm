const {
  createCoreTransferState,
  getRandomBytes32,
  encodeCoreTransferState,
} = require("@connext/vector-utils");
const { Tree } = require("@connext/vector-merkle-tree");

const run = () => {
  console.log("Creating tree");
  const tree = new Tree();
  console.log("Creating leaves");
  const transfers = Array(10)
    .fill(0)
    .map((_) => createCoreTransferState({ transferId: getRandomBytes32() }));

  const leaves = transfers.map((t) => encodeCoreTransferState(t));
  console.log("Inserting leaves");
  leaves.forEach((leaf) => {
    tree.insert_hex_js(leaf);
  });
  console.log("Root", tree.root_js());
};

run();
