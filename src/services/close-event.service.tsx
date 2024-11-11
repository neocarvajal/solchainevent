import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface CloseEventInterface {
  publicKey: PublicKey | null,
  program: Program<EventManager>,
  eventPublicKey: PublicKey,
}

export async function closeEvent({publicKey, program, eventPublicKey}: CloseEventInterface) {
  if (!publicKey) return;
  console.log(eventPublicKey.toString())

  try {

    const tx = await program.methods
        .closeEvent()
        .accounts({
        event: eventPublicKey,
        authority: publicKey,
        })
        .rpc();

    console.log(`TxID: https://solana.fm/tx/${tx}?cluster=devnet-solana`);
    return true;
  } catch (e) {
    console.log("EL ERROR: ", e);
    return false;
  }
};
