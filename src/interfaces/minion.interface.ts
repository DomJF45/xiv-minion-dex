export interface iSource {
  type: string,
  text: string,
  related_type: string | null,
  related_id: number | null
}

export interface iVerminion {
  cost: number,
  attack: number,
  defense: number,
  hp: number,
  speed: number,
  area_attack: boolean,
  skill: string,
  skill_description: string,
  skill_angle: number,
  skill_cost: number,
  eye: boolean,
  gate: boolean,
  shield: boolean,
  skill_type: {
    id: number | null,
    name: string | null
  }
}

export interface iMinion {
  id: number,
  name: string,
  description: string,
  enhanced_description: string,
  tooltip: string,
  patch: string | null,
  itemId: number | null,
  tradeable: false,
  behavior: {
    id: number,
    name: string
  },
  race: {
    id: number,
    name: string
  },
  image: string,
  icon: string,
  owned: string,
  sources: iSource[],
  verminion: iVerminion
}