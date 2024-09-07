import { ponder } from "@/generated";

ponder.on("DendeVault:BuyStrategy", async ({ event, context }) => {
  const { BuyStrategyEvent } = context.db;

  await BuyStrategyEvent.create({
    id: event.log.id,
    data: {
      chainId: event.args.chainId,
      crossAsset: event.args.crossAsset,
      amount: event.args.amount,
    },
  });
});
