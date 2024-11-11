import { AnchorProvider, Program, setProvider } from "@coral-xyz/anchor";
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { EventManager } from "@/utils/idl/idl-event-manager";
import EventManagerIDL from "@/utils/idl/idl-event-manager.json";

export const acceptedMint = new PublicKey(
  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
);

export const DECIMALS_PER_USDC = 1000000;

const EVENT_MANAGER_PROGRAM_ID = new PublicKey("2nfbkj9tFyCYMthNm5gNPTEWqfgsDQo6qwGmw2WN1KAJ");
export const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

export function getEventManagerProgramId() {
    return EVENT_MANAGER_PROGRAM_ID
}

export function useEventManagerProgram() {
    const { connection } = useConnection();
    const wallet = useWallet();

    const provider =  new AnchorProvider(connection, wallet as AnchorWallet, {
        commitment: "confirmed",
    });
    setProvider(provider);
    return new Program(EventManagerIDL as EventManager, EVENT_MANAGER_PROGRAM_ID, provider);
}
