import { BN, Program} from "@coral-xyz/anchor";
import { acceptedMintATA, eventMintATA, eventMintPda, treasuryVaultPda } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { acceptedMint } from "@/utils/solanaProgram";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface sponsorEventInterface {
  quantity: number,
  publicKey: PublicKey | null,
  program: Program<EventManager>,
  eventPublicKey: PublicKey,
}

export async function sponsorEvent({ quantity, publicKey, program, eventPublicKey}: sponsorEventInterface) {
  if (!publicKey) return;
  console.log(eventPublicKey.toString())

  try {
    const eventMintPublicKey = eventMintPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const treasuryVaultPublicKey = treasuryVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const eventMintAta = eventMintATA(publicKey,eventMintPublicKey);
    const acceptedMintAta = acceptedMintATA(publicKey);

    const tx = await program.methods
        .sponsorEvent(new BN(quantity))
        .accounts({
        eventMint: eventMintPublicKey,
        payerAcceptedMintAta: acceptedMintAta,
        event: eventPublicKey,
        acceptedMint: acceptedMint,
        authority: publicKey,
        payerEventMintAta:eventMintAta,
        treasuryVault: treasuryVaultPublicKey
        })
        .rpc();

    console.log(`TxID: https://solana.fm/tx/${tx}?cluster=devnet-solana`);
    return true;
  } catch (e) {
    console.log("EL ERROR: ", e);
    return false;
  }
};
