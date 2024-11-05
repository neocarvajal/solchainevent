export const walletMock = "Neo36...xGtsn";

export enum Cluster {
  Devnet = 'devnet',
  Testnet = 'testnet',
  MainnetBeta = 'mainnet-beta'
}

export interface Event {
    title: string;
    ticket_price: number;
    token_price: number;
    img_event: string;
  }
  
  export interface MyEventData {
    title: string;
    img_event: string;
    token_price: number;
    collaborators: number;
    event_vault_total: number;
    ticket_price: number;
    tickets_sold: number;
    gain_vault_total: number;
    closed: boolean;
  }
  
  export interface CollabData {
    event_title: string;
    tokens_amount: number;
    event_closed: boolean;
    img_event: string;
  }
  
export const eventData: Event[] = [
  {
    title: "Heavy Duty Camp",
    ticket_price: 0.01,
    token_price: 0.1,
    img_event: "/NewBuilder.png",
  },
  {
    title: "Solana Bootcamp",
    ticket_price: 0.05,
    token_price: 0.12,
    img_event: "/NewBuilder.png",
  },
  {
    title: "Crypto Latam Fest",
    ticket_price: 0,
    token_price: 0,
    img_event: "/LatamFest.png",
  },
];


export const myEventData: MyEventData[] = [
  {
      title: "Crypto Latam Fest",
      img_event: "/LatamFest.png",
      token_price: 0.1,
      collaborators: 12,
      event_vault_total: 1.2,
      ticket_price: 0.01,
      tickets_sold: 140,
      gain_vault_total: 1.4,
      closed: true,
     
  },
  {
      title: "Heavy Duty Camp",
      img_event: "/NewBuilder.png",
      token_price: 0.01,
      collaborators: 17,
      event_vault_total: 2.04,
      ticket_price: 0.1,
      tickets_sold: 231,
      gain_vault_total: 23.01,
      closed: false,
  },
]

 export const collabData: CollabData[] = [
    {
      event_title: "Crypto Latam Fest",
      img_event: "/LatamFest.png",
      tokens_amount: 2,
      event_closed: true
    },
    {
      event_title: "Heavy Duty Camp",
      img_event: "/NewBuilder.png",
      tokens_amount: 15,
      event_closed: false
    },
  ]





  
