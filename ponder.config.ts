import { createConfig } from "@ponder/core";
import { http } from "viem";

import { PrimitiveManagerAbi } from "./abis/PrimitiveManagerAbi";
import { DendeVaultAbi } from "./abis/DendeVaultAbi";

export default createConfig({
  networks: {
    kakarot: {
      chainId: 1802203764,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    DendeVault: {
      network: "kakarot",
      abi: DendeVaultAbi as any,
      address: "0x63c776f33769e29a82C5A6e948AA8133a0323817",
      startBlock: 300813,
      filter: {
        event: "BuyStrategy",
      },
    },
  },
});
