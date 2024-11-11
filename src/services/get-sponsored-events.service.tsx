import { Program } from "@coral-xyz/anchor";
import { EventAccount, getEvents } from "@/services/get-events.service";
import { EventManager } from "@/utils/idl/idl-event-manager";
import { Connection, PublicKey } from "@solana/web3.js";
import { eventMintPda } from "@/utils/find-pdas";
import { DECIMALS_PER_USDC, TOKEN_PROGRAM_ID } from "@/utils/solanaProgram";

export interface TokenAmount {
  amount: string;
  decimals: number;
  uiAmount: number;
  uiAmountString: string;
}

export interface TokenAccountInfo {
  isNative: boolean;
  mint: string;
  owner: string;
  state: string;
  tokenAmount: TokenAmount;
}

export interface TokenAccount {
  info: TokenAccountInfo;
  type: string;
}

export interface SponsoredEvent {
  event: EventAccount;
  tokens: number;
}

export async function getSponsoredEvents(program: Program<EventManager>, connection: Connection, publicKey: PublicKey){
  try {
      const events = await getEvents(program);
      const tokens = await getTokenAccounts(publicKey, connection);
      let sponsored: SponsoredEvent[] = []

      for (let event of events){
	let mint = eventMintPda({eventPublicKey: event.publicKey, programId: program.programId});
	for (let token of tokens){
	  if(mint.toString() == token.info.mint){
	    sponsored.push({
	      event: event,
	      tokens: (token.info.tokenAmount.uiAmount)
	    })
	  }
	}
      }
      console.log(sponsored);
      return sponsored;

    } catch (e) {
      console.log("EL ERROR: ", e);
      return [];
    }
};

export async function getTokenAccounts(publicKey: PublicKey, solanaConnection: Connection) {
  const tokens = await solanaConnection.getParsedTokenAccountsByOwner(publicKey , {
    programId: TOKEN_PROGRAM_ID
  })
  const tokensInfo = tokens.value.map((t) => t.account.data.parsed as TokenAccount)
  console.log(tokensInfo);
  return tokensInfo
}
