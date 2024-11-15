import { BN, Program } from "@coral-xyz/anchor";
import { acceptedMintATA, treasuryVaultPda } from "@/utils/find-pdas";
import { acceptedMint, DECIMALS_PER_USDC } from "@/utils/solanaProgram";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";

interface WithdrawFundsInterface {
  amount: number;
  publicKey: PublicKey | null,
  program: Program<EventManager>,
  eventPublicKey: PublicKey,
}

export async function withdrawFunds({amount, publicKey, program, eventPublicKey}: WithdrawFundsInterface) {
    if (!publicKey) return;
    console.log(eventPublicKey.toString());
    console.log("amount", amount);
  
    try {
      const treasuryVaultPublicKey = treasuryVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
      const acceptedMintAta = acceptedMintATA(publicKey);
  
      const tx = await program.methods
          .withdrawFunds(new BN(amount*DECIMALS_PER_USDC))
          .accounts({
          authotiryAcceptedMintAta: acceptedMintAta,
          event: eventPublicKey,
          acceptedMint: acceptedMint,
          authority: publicKey,
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
