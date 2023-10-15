import type { Movement } from '$lib/domain/movements/movement.model';
import { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { Piece } from '$lib/domain/pieces/piece.model';

export class Rook extends Piece {
	private generalMoves: Movement[] = [
		new WalkMovement(1, 0), // Move one square up
		new WalkMovement(0, 1), // Move one square to the right
		new WalkMovement(-1, 0), // Move one square down
		new WalkMovement(0, -1), // Move one square to the left
		new WalkMovement(2, 0), // Two squares up
		new WalkMovement(0, 2), // Two squares to the right
		new WalkMovement(-2, 0), // Two squares down
		new WalkMovement(0, -2), // Two squares to the left
		new WalkMovement(3, 0), // Three squares up
		new WalkMovement(0, 3), // Three squares to the right
		new WalkMovement(-3, 0), // Three squares down
		new WalkMovement(0, -3), // Three squares to the left
		new WalkMovement(4, 0), // Four squares up
		new WalkMovement(0, 4), // Four squares to the right
		new WalkMovement(-4, 0), // Four squares down
		new WalkMovement(0, -4), // Four squares to the left
		new WalkMovement(5, 0), // Five squares up
		new WalkMovement(0, 5), // Five squares to the right
		new WalkMovement(-5, 0), // Five squares down
		new WalkMovement(0, -5), // Five squares to the left
		new WalkMovement(6, 0), // Six squares up
		new WalkMovement(0, 6), // Six squares to the right
		new WalkMovement(-6, 0), // Six squares down
		new WalkMovement(0, -6), // Six squares to the left
		new WalkMovement(7, 0), // Seven squares up
		new WalkMovement(0, 7), // Seven squares to the right
		new WalkMovement(-7, 0), // Seven squares down
		new WalkMovement(0, -7) // Seven squares to the left
	];

	public baseMoves: Movement[] = this.generalMoves;
	public startMoves: Movement[] = this.generalMoves;
	public captureMoves: Movement[] = this.generalMoves;
}
