import { acceptedMint } from "@/app/utils/solanaProgram";
import { BN } from "bn.js";
import { allPdas } from "@/app/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";

interface createEventInterface {
  name: string,
  price: number,
  publicKey: PublicKey | null,
  program: any
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
        eventMint: eventMintPublicKey, // sponsorship token
        treasuryVault: treasuryVaultPublicKey,
        gainVault: gainVaultPdaPublicKey,
        authority: publicKey, 
      })
      .rpc();

    console.log("TxID: ", tx);

    const eventAccount = await program.account.event.fetch(eventPublicKey);
    console.log("Event info: ", eventAccount);
  } catch (e) {
    console.log("EL ERROR: ", e);
  }
};
