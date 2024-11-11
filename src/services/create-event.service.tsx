import { BN, Program } from "@coral-xyz/anchor";
import { acceptedMint } from "@/utils/solanaProgram";
import { allPdas } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface createEventInterface {
  name: string,
  price: number,
  publicKey: PublicKey | null,
  program: Program<EventManager>
}

export async function createEvent({ name, price, publicKey, program }: createEventInterface) {
  if (!publicKey) return;
  const eventId = Date.now().toString();
  
  try {
    const {
      eventMintPublicKey,
      eventPublicKey,
      gainVaultPdaPublicKey,
      treasuryVaultPublicKey,
    } = allPdas({ eventId, programId: program.programId, publicKey });

    const tx = await program.methods
      .createEvent(eventId, name, new BN(price))
      .accounts({
        event: eventPublicKey,
        acceptedMint: acceptedMint, 
        eventMint: eventMintPublicKey,
        treasuryVault: treasuryVaultPublicKey,
        gainVault: gainVaultPdaPublicKey,
        authority: publicKey, 
      })
      .rpc();
    
    console.log(`TxID: https://solana.fm/tx/${tx}?cluster=devnet-solana`);

    const eventAccount = await program.account.event.fetch(eventPublicKey);
    console.log("Event info: ", eventAccount);
    return true;
  } catch (e) {
    console.log("EL ERROR: ", e);
    return false;
  }
};
