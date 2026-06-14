export interface GrandPrixe {
  prix_name: string;
  imie: string;
  nazwisko: string;
  modelName: string;
}

export interface RewardModel {
  categoryName: string;
  symbol: string;
  klasa: "P" | "K";
  place: string;
  imie: string;
  nazwisko: string;
  nazwa: string;
}
