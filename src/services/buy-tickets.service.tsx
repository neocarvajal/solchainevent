import { BN, Program } from "@coral-xyz/anchor";
import { acceptedMintATA, gainVaultPda } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { acceptedMint } from "@/utils/solanaProgram";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface buyTicketsInterface {
  quantity: number,
  publicKey: PublicKey | null,
  program: Program<EventManager>,
  eventPublicKey: PublicKey,
}

export async function buyTickets({ quantity, publicKey, program, eventPublicKey}: buyTicketsInterface) {
  if (!publicKey) return;
  console.log(eventPublicKey.toString())
  console.log("quantity", quantity)

  try {
    const gainVaultPublicKey = gainVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const acceptedMintAta = acceptedMintATA(publicKey);

    const tx = await program.methods
        .buyTickets(new BN(quantity))
        .accounts({
        payerAcceptedMintAta: acceptedMintAta,
        event: eventPublicKey,
        acceptedMint: acceptedMint,
        authority: publicKey,
        gainVault: gainVaultPublicKey
        })
        .rpc();

     console.log(`TxID: https://solana.fm/tx/${tx}?cluster=devnet-solana`);
     return true;
     
  } catch (e) {
    console.log("EL ERROR: ", e);
    return false;
  }
};
