import type { Movement } from '$lib/domain/movements/movement.model';
import { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { Piece } from '$lib/domain/pieces/piece.model';

export class King extends Piece {
	private generalMoves: Movement[] = [
		new WalkMovement(0, 1),
		new WalkMovement(1, 0),
		new WalkMovement(1, 1),
		new WalkMovement(1, -1),
		new WalkMovement(0, -1),
		new WalkMovement(-1, -1),
		new WalkMovement(-1, 0),
		new WalkMovement(-1, 1)
	];

	public baseMoves: Movement[] = this.generalMoves;
	public startMoves: Movement[] = this.generalMoves;
	public captureMoves: Movement[] = this.generalMoves;
}
