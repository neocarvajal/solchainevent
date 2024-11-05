import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "./idl/idl-event-manager";
import EventManagerIDL from "./idl/idl-event-manager.json";

// USDC Devnet
export const acceptedMint = new PublicKey(
  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
);


const EVENT_MANAGER_PROGRAM_ID = new PublicKey("8ohjk23KfEnzmy5c2jSLBSQc8DvBT3N64KJwtMoPBUbH");

export function getEventManagerProgramId() {
    return EVENT_MANAGER_PROGRAM_ID
}

export function useEventManagerProgram() {
    const { connection } = useConnection();
    const wallet = useWallet();

    const provider =  new AnchorProvider(connection, wallet as AnchorWallet, {
        commitment: "confirmed",
    });
    return new Program(EventManagerIDL as EventManager, EVENT_MANAGER_PROGRAM_ID, provider);
}
