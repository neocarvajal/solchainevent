import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";

export interface EventAccountInfo {
    id: string;
    name:string;
    ticketPrice: BN;
    active:boolean;
    sponsors: BN;
    ticketsSold: BN;
    treasuryVaultTotal: BN;
    gainVaultTotal: BN;
    authority: PublicKey;
    acceptedMint: PublicKey;
    eventBump: number;
    eventMintBump: number;
    treasuryVaultBump: number;
    gainVaultBump: number;
}

export interface EventAccount {
    publicKey: PublicKey;
    account: EventAccountInfo;
}

export async function getEvents(program: Program<EventManager>){
    try {
        const events = await program.account.event.all();
        const eventsFormated = events.map((event) => event as EventAccount);
        return eventsFormated
      } catch (e) {
        console.log("EL ERROR: ", e);
      }
    return []
};
