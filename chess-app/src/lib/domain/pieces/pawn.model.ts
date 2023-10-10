import { Piece } from '$lib/domain/pieces/piece.model';

export class Pawn extends Piece {
	baseMoves = [
		{
			row: 1,
			column: 0
		}
	];

	startMoves = [
		{
			row: 1,
			column: 0
		},
		{
			row: 2,
			column: 0
		}
	];

	captureMoves = [
		{
			row: 1,
			column: -1
		},
		{
			row: 1,
			column: 1
		}
	];
}
