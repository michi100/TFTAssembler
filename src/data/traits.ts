import { Trait } from "../types";

export const traits: Trait[] = [
  {
    name: "執行官",
    breakpoints: [2, 4, 6, 8],
    description: "執行官たちは追加のダメージを与える",
  },
  {
    name: "忍者",
    breakpoints: [2, 4],
    description: "忍者たちは攻撃速度が上昇する",
  },
  {
    name: "魔法使い",
    breakpoints: [2, 4, 6],
    description: "魔法使いたちはスキルダメージが増加する",
  },
  {
    name: "挑戦者",
    breakpoints: [2, 4, 6],
    description: "挑戦者たちは攻撃力が上昇する",
  },
];
