import type { Movement } from '$lib/domain/movements/movement.model';

export class PieceMovementGroup {
	public baseMoves: Movement[];
	public startMoves: Movement[];
	public captureMoves: Movement[];

	constructor(baseMoves: Movement[], startMoves: Movement[], captureMoves: Movement[]) {
		this.baseMoves = baseMoves;
		this.startMoves = startMoves;
		this.captureMoves = captureMoves;
	}
}
