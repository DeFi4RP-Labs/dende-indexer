import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  BuyStrategyEvent: p.createTable({
    id: p.string(),
    chainId: p.hex(),
    crossAsset: p.string(),
    amount: p.bigint(),
  }),
}));
