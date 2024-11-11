import { acceptedMintATA, eventMintATA, eventMintPda, gainVaultPda, treasuryVaultPda } from "@/utils/find-pdas";
import { acceptedMint } from "@/utils/solana";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface WithdrawEarningsInterface {
  publicKey: PublicKey | null,
  program: Program<EventManager>,
  eventPublicKey: PublicKey,
}

export async function withdrawEarnings({ publicKey, program, eventPublicKey}: WithdrawEarningsInterface) {
    if (!publicKey) return;
    console.log(eventPublicKey.toString());
  
    try {
      const gainVaultPublicKey = gainVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
      const userAcceptedMintAta = acceptedMintATA(publicKey);
      const eventMint = eventMintPda({eventPublicKey: eventPublicKey, programId: program.programId})
      const userEventMintATA = eventMintATA(publicKey, eventMint);
  
      const tx = await program.methods
          .withdrawEarnings()
          .accounts({
          userEventMintAta: userEventMintATA,
          userAcceptedMintAta: userAcceptedMintAta,
          event: eventPublicKey,
          acceptedMint: acceptedMint,
          authority: publicKey,
          gainVault: gainVaultPublicKey,
          eventMint: eventMint
          })
          .rpc();
  
     console.log(`TxID: https://solana.fm/tx/${tx}?cluster=devnet-solana`);
     return true;
  
    } catch (e) {
      console.log("EL ERROR: ", e);
      return false;
    }
};
