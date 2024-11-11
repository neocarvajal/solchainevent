import { PublicKey } from "@solana/web3.js";
import { acceptedMint, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@/utils/solanaProgram";

export function eventPda({
  eventId,
  publicKey,
  programId,
}: {
  eventId: string;
  publicKey: PublicKey;
  programId: PublicKey;
}) {
  const [eventPublicKey] = PublicKey.findProgramAddressSync(
    [
      Buffer.from(eventId, "utf-8"),
      Buffer.from("event", "utf-8"),
      publicKey.toBuffer(),
    ],
    programId
  );

  return eventPublicKey;
}

export function eventMintPda({
  eventPublicKey,
  programId,
}: {
  eventPublicKey: PublicKey;
  programId: PublicKey;
}) {
  const [eventMint] = PublicKey.findProgramAddressSync(
    [Buffer.from("event_mint", "utf-8"), eventPublicKey.toBuffer()],
    programId
  );

  return eventMint;
}

export function treasuryVaultPda({
  eventPublicKey,
  programId,
}: {
  eventPublicKey: PublicKey;
  programId: PublicKey;
}) {
  const [treasuryVault] = PublicKey.findProgramAddressSync(
    [Buffer.from("treasury_vault", "utf-8"), eventPublicKey.toBuffer()],
    programId
  );
  return treasuryVault;
}

export function gainVaultPda({
  eventPublicKey,
  programId,
}: {
  eventPublicKey: PublicKey;
  programId: PublicKey;
}) {
  const [gainVault] = PublicKey.findProgramAddressSync(
    [Buffer.from("gain_vault", "utf-8"), eventPublicKey.toBuffer()],
    programId
  );
  return gainVault;
}

export function allPdas({
  publicKey,
  programId,
  eventId,
}: {
  publicKey: PublicKey;
  programId: PublicKey;
  eventId: string;
}) {
  const eventPublicKey = eventPda({
    eventId,
    programId,
    publicKey,
  });

  const eventMintPublicKey = eventMintPda({
    eventPublicKey,
    programId,
  });

  const treasuryVaultPublicKey = treasuryVaultPda({
    eventPublicKey,
    programId,
  });

  const gainVaultPdaPublicKey = gainVaultPda({
    eventPublicKey,
    programId,
  });
  return {
    eventPublicKey,
    eventMintPublicKey,
    treasuryVaultPublicKey,
    gainVaultPdaPublicKey,
  };
}


export function acceptedMintATA(publicKey: PublicKey) {
  const [acceptedMintATA] = PublicKey.findProgramAddressSync(
    [publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), acceptedMint.toBuffer()],
    ASSOCIATED_TOKEN_PROGRAM_ID
  );

  return acceptedMintATA;
}

export function eventMintATA(publicKey: PublicKey, eventMint: PublicKey) {
  const [eventMintATA] = PublicKey.findProgramAddressSync(
    [publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), eventMint.toBuffer()],
    ASSOCIATED_TOKEN_PROGRAM_ID
  );

  return eventMintATA;
}
