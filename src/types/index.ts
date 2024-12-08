export interface Unit {
  id: string;
  name: string;
  traits: string[];
  imageUrl: string;
}

export interface Trait {
  name: string;
  breakpoints: number[];
  description: string;
}
