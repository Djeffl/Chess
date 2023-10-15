import type { GameColor } from '$lib/GameColor.enum';
import type { Coordinate } from '$lib/domain/coordinates/coordinate.model';
import type { Movement } from '$lib/domain/movements/movement.model';
import { PieceMovementGroup } from '$lib/domain/pieces/piece-movement-group.model';

export abstract class Piece {
	public color: GameColor;
	public initialPosition: Coordinate;

	constructor(color: GameColor, initialPosition: Coordinate) {
		this.color = color;
		this.initialPosition = initialPosition;
	}

	public getMovements(): PieceMovementGroup {
		return new PieceMovementGroup(this.baseMoves, this.startMoves, this.captureMoves);
	}

	protected abstract baseMoves: Movement[];
	protected abstract startMoves: Movement[];
	protected abstract captureMoves: Movement[];
}
