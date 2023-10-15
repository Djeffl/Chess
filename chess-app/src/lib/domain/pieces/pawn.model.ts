import type { Movement } from '$lib/domain/movements/movement.model';
import { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { Piece } from '$lib/domain/pieces/piece.model';

export class Pawn extends Piece {
	public baseMoves: Movement[] =
		this.initialPosition.row == 2 ? [new WalkMovement(0, 1)] : [new WalkMovement(0, -1)];
	public startMoves: Movement[] =
		this.initialPosition.row == 2
			? [new WalkMovement(0, 1), new WalkMovement(0, 2)]
			: [new WalkMovement(0, -1), new WalkMovement(0, -2)];
	public captureMoves: Movement[] =
		this.initialPosition.row == 2
			? [new WalkMovement(-1, 1), new WalkMovement(1, 1)]
			: [new WalkMovement(1, -1), new WalkMovement(-1, -1)];
}
