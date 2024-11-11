import { EventManager } from "@/utils/idl/idl-event-manager";
import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { EventAccount, getEvents } from "@/services/get-events.service";
import { gainVaultPda, treasuryVaultPda } from "@/utils/find-pdas";
import { Account, getAccount } from "@solana/spl-token";

export interface MyEventInfo {
  event: EventAccount;
  treasuryVault: Account | undefined;
  gainVault: Account | undefined;
}

export async function getMyEvents(connection: Connection, program: Program<EventManager>,  publicKey: PublicKey){
    
    try {
      const events = await getEvents(program);
      const myEvents = events.filter((event) => event.account.authority.toString() == publicKey.toString());
      return myEvents
    } catch (e) {
      console.log("EL ERROR: ", e);
    }
    return []
};
