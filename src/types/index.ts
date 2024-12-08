export interface Unit {
  id: string;
  name: string;
  traits: string[];
  imageUrl: string;
}

export interface Trait {
  id: string;
  name: string;
  breakpoints: number[];
  description: string;
}
