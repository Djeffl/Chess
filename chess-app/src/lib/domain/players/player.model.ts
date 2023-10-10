import type { PlayerColor } from '$lib/playerColor.enum';

export class Player {
	public color: PlayerColor;

	constructor(color: PlayerColor) {
		this.color = color;
	}
}
