import { JumpMovement } from '$lib/domain/movements/jump-movement.model';
import type { Movement } from '$lib/domain/movements/movement.model';
import { WalkMovement } from '$lib/domain/movements/walk-movement.model';

// Good idea if filters can be implemented
export class WalkMovementsFactory {
	private movements: Movement[] = [
		// Diagonal
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
		new WalkMovement(-7, 7), // Seven squares away diagonally
		// Horizontal and Vertical Walk
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
		new WalkMovement(0, -7), // Seven squares to the left
		// Jump Movements
		new JumpMovement(1, 2),
		new JumpMovement(2, 1),
		new JumpMovement(-1, -2),
		new JumpMovement(-2, -1),
		new JumpMovement(2, -1),
		new JumpMovement(1, -2),
		new JumpMovement(-1, 2),
		new JumpMovement(-2, 1)
	];

	public getAllJumpMovements: Movement[] = this.movements.filter((m) => m instanceof JumpMovement);

	// public getDiagonalMovements: Movement[] = this.movements.filter(m => m instanceof WalkMovement // todo);
}
