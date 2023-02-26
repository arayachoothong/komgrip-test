export interface Assets {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface AssetsResponse {
  data: Assets[];
  timestamp: number;
}

export interface AssetsRequest {
  search?: string;
  ids?: string[];
  limit?: number;
  offset?: number;
}

