export type EventManager = {
  "version": "0.1.0",
  "name": "event_manager",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sponsorEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerEventMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTickets",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authotiryAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawEarnings",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userEventMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "active",
            "type": "bool"
          },
          {
            "name": "sponsors",
            "type": "u64"
          },
          {
            "name": "ticketsSold",
            "type": "u64"
          },
          {
            "name": "treasuryVaultTotal",
            "type": "u64"
          },
          {
            "name": "gainVaultTotal",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "acceptedMint",
            "type": "publicKey"
          },
          {
            "name": "eventBump",
            "type": "u8"
          },
          {
            "name": "eventMintBump",
            "type": "u8"
          },
          {
            "name": "treasuryVaultBump",
            "type": "u8"
          },
          {
            "name": "gainVaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EventClosed",
      "msg": "You can't buy tickets, the Event is already closed"
    }
  ]
};

export const IDL: EventManager = {
  "version": "0.1.0",
  "name": "event_manager",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sponsorEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerEventMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTickets",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authotiryAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeEvent",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawEarnings",
      "accounts": [
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAcceptedMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userEventMintAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gainVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "active",
            "type": "bool"
          },
          {
            "name": "sponsors",
            "type": "u64"
          },
          {
            "name": "ticketsSold",
            "type": "u64"
          },
          {
            "name": "treasuryVaultTotal",
            "type": "u64"
          },
          {
            "name": "gainVaultTotal",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "acceptedMint",
            "type": "publicKey"
          },
          {
            "name": "eventBump",
            "type": "u8"
          },
          {
            "name": "eventMintBump",
            "type": "u8"
          },
          {
            "name": "treasuryVaultBump",
            "type": "u8"
          },
          {
            "name": "gainVaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EventClosed",
      "msg": "You can't buy tickets, the Event is already closed"
    }
  ]
};
