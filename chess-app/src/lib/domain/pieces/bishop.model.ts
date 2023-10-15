import type { Movement } from '$lib/domain/movements/movement.model';
import { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { Piece } from '$lib/domain/pieces/piece.model';

export class Bishop extends Piece {
	private generalMoves: Movement[] = [
		new WalkMovement(1, 1), // Top-right diagonal
		new WalkMovement(1, -1), // Top-left diagonal
		new WalkMovement(-1, -1), // Bottom-left diagonal
		new WalkMovement(-1, 1), // Bottom-right diagonal
		new WalkMovement(2, 2), // Two squares away diagonally
		new WalkMovement(2, -2), // Two squares away diagonally
		new WalkMovement(-2, -2), // Two squares away diagonally
		new WalkMovement(-2, 2), // Two squares away diagonally
		new WalkMovement(3, 3), // Three squares away diagonally
		new WalkMovement(3, -3), // Three squares away diagonally
		new WalkMovement(-3, -3), // Three squares away diagonally
		new WalkMovement(-3, 3), // Three squares away diagonally
		new WalkMovement(4, 4), // Four squares away diagonally
		new WalkMovement(4, -4), // Four squares away diagonally
		new WalkMovement(-4, -4), // Four squares away diagonally
		new WalkMovement(-4, 4), // Four squares away diagonally
		new WalkMovement(5, 5), // Five squares away diagonally
		new WalkMovement(5, -5), // Five squares away diagonally
		new WalkMovement(-5, -5), // Five squares away diagonally
		new WalkMovement(-5, 5), // Five squares away diagonally
		new WalkMovement(6, 6), // Six squares away diagonally
		new WalkMovement(6, -6), // Six squares away diagonally
		new WalkMovement(-6, -6), // Six squares away diagonally
		new WalkMovement(-6, 6), // Six squares away diagonally
		new WalkMovement(7, 7), // Seven squares away diagonally
		new WalkMovement(7, -7), // Seven squares away diagonally
		new WalkMovement(-7, -7), // Seven squares away diagonally
		new WalkMovement(-7, 7) // Seven squares away diagonally
	];

	public baseMoves: Movement[] = this.generalMoves;
	public startMoves: Movement[] = this.generalMoves;
	public captureMoves: Movement[] = this.generalMoves;
}
