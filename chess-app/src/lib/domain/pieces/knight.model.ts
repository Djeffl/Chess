import { JumpMovement } from '$lib/domain/movements/jump-movement.model';
import type { Movement } from '$lib/domain/movements/movement.model';
import { Piece } from '$lib/domain/pieces/piece.model';

export class Knight extends Piece {
	private generalMoves: Movement[] = [
		new JumpMovement(1, 2),
		new JumpMovement(2, 1),
		new JumpMovement(-1, -2),
		new JumpMovement(-2, -1),
		new JumpMovement(2, -1),
		new JumpMovement(1, -2),
		new JumpMovement(-1, 2),
		new JumpMovement(-2, 1)
	];

	public baseMoves: Movement[] = this.generalMoves;
	public startMoves: Movement[] = this.generalMoves;
	public captureMoves: Movement[] = this.generalMoves;
}
