import type { GameColor } from '$lib/GameColor.enum';

export class Player {
	public color: GameColor;

	constructor(color: GameColor) {
		this.color = color;
	}
}
