import { Coordinate } from '$lib/domain/coordinates/coordinate.model';
import { Bishop, King, Knight, Queen, Rook } from '$lib/domain/pieces';
import { Pawn } from '$lib/domain/pieces/pawn.model';
import type { Piece } from '$lib/domain/pieces/piece.model';
import { GameColor } from '$lib/GameColor.enum';
import { Square } from '$lib/domain/board/square.model';
import { DirectionMovement } from '$lib/domain/movements/direction-movement.model';
import type { WalkMovement } from '$lib/domain/movements/walk-movement.model';

export class Chessboard {
	getPiece(coordinate: Coordinate): Piece | null {
		return (
			this.field
				.find((x) => x[0].coordinate.row == coordinate.row)!
				.find((x) => x.coordinate.column == coordinate.column && x.coordinate.row == coordinate.row)
				?.value || null
		);
	}

	public getSquaresBetween(
		startCoordinate: Coordinate,
		endCoorinate: Coordinate,
		movement: WalkMovement
	): Square[] {
		// Get all left horizontalSquares
		const validSquares: Square[] = [];
		if (movement.direction == DirectionMovement.LeftHorizontal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() < startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.getColumnIndex() > endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.row == startCoordinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}
		if (movement.direction == DirectionMovement.RightHorizontal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() > startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.getColumnIndex() < endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.row == startCoordinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.UpHorizontal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() == startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row > startCoordinate.row &&
						dimTwo.coordinate.row < endCoorinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.DownHorizontal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() == startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row < startCoordinate.row &&
						dimTwo.coordinate.row > endCoorinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.BottomLeftDiagonal) {
			console.log('Bottom left!');
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() < startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row < startCoordinate.row &&
						dimTwo.coordinate.getColumnIndex() > endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.row > endCoorinate.row &&
						// Check if is diagonal bottom left
						// [-1, -1], [-2, -2] results says it is equal to left under square
						// We could also check if sign is negative
						dimTwo.coordinate.row - startCoordinate.row ==
							dimTwo.coordinate.getColumnIndex() - startCoordinate.getColumnIndex()
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.BottomRightDiagonal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() > startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row < startCoordinate.row &&
						dimTwo.coordinate.getColumnIndex() < endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.row > endCoorinate.row &&
						dimTwo.coordinate.getColumnIndex() - startCoordinate.getColumnIndex() ==
							startCoordinate.row - dimTwo.coordinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.TopLeftDiagonal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() < startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row > startCoordinate.row &&
						dimTwo.coordinate.row < endCoorinate.row &&
						dimTwo.coordinate.getColumnIndex() > endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.getColumnIndex() - startCoordinate.getColumnIndex() ==
							startCoordinate.row - dimTwo.coordinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.TopRightDiagonal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.getColumnIndex() > startCoordinate.getColumnIndex() &&
						dimTwo.coordinate.row > startCoordinate.row &&
						dimTwo.coordinate.getColumnIndex() < endCoorinate.getColumnIndex() &&
						dimTwo.coordinate.row < endCoorinate.row &&
						dimTwo.coordinate.getColumnIndex() - startCoordinate.getColumnIndex() ==
							dimTwo.coordinate.row - startCoordinate.row
					)
						validSquares.push(dimTwo);
				})
			);
		}

		return validSquares;
	}

	setPiece(coordinate: Coordinate, piece: Piece | null) {
		this.field
			.find((x) => x[0].coordinate.row == coordinate.row)!
			.find(
				(x) => x.coordinate.column == coordinate.column && x.coordinate.row == coordinate.row
			)!.value = piece;
	}

	constructor() {}

	public field = [
		// 1
		[
			new Square(new Coordinate('a', 1), new Rook(GameColor.White, new Coordinate('a', 1))),
			new Square(new Coordinate('b', 1), new Knight(GameColor.White, new Coordinate('b', 1))),
			new Square(new Coordinate('c', 1), new Bishop(GameColor.White, new Coordinate('c', 1))),
			new Square(new Coordinate('d', 1), new Queen(GameColor.White, new Coordinate('d', 1))),
			new Square(new Coordinate('e', 1), new King(GameColor.White, new Coordinate('e', 1))),
			new Square(new Coordinate('f', 1), new Bishop(GameColor.White, new Coordinate('f', 1))),
			new Square(new Coordinate('g', 1), new Knight(GameColor.White, new Coordinate('g', 1))),
			new Square(new Coordinate('h', 1), new Rook(GameColor.White, new Coordinate('h', 1)))
		],
		// 2
		[
			new Square(new Coordinate('a', 2), new Pawn(GameColor.White, new Coordinate('a', 2))),
			new Square(new Coordinate('b', 2), new Pawn(GameColor.White, new Coordinate('b', 2))),
			new Square(new Coordinate('c', 2), new Pawn(GameColor.White, new Coordinate('c', 2))),
			new Square(new Coordinate('d', 2), new Pawn(GameColor.White, new Coordinate('d', 2))),
			new Square(new Coordinate('e', 2), new Pawn(GameColor.White, new Coordinate('e', 2))),
			new Square(new Coordinate('f', 2), new Pawn(GameColor.White, new Coordinate('f', 2))),
			new Square(new Coordinate('g', 2), new Pawn(GameColor.White, new Coordinate('g', 2))),
			new Square(new Coordinate('h', 2), new Pawn(GameColor.White, new Coordinate('h', 2)))
		],
		// 3
		[
			// Rank 3
			new Square(new Coordinate('a', 3), null), // Empty square
			new Square(new Coordinate('b', 3), null), // Empty square
			new Square(new Coordinate('c', 3), null), // Empty square
			new Square(new Coordinate('d', 3), null), // Empty square
			new Square(new Coordinate('e', 3), null), // Empty square
			new Square(new Coordinate('f', 3), null), // Empty square
			new Square(new Coordinate('g', 3), null), // Empty square
			new Square(new Coordinate('h', 3), null) // Empty square
		],
		// 4
		[
			new Square(new Coordinate('a', 4), null), // Empty square
			new Square(new Coordinate('b', 4), null), // Empty square
			new Square(new Coordinate('c', 4), null), // Empty square
			new Square(new Coordinate('d', 4), null), // Empty square
			new Square(new Coordinate('e', 4), null), // Empty square
			new Square(new Coordinate('f', 4), null), // Empty square
			new Square(new Coordinate('g', 4), null), // Empty square
			new Square(new Coordinate('h', 4), null) // Empty square
		],
		// 5
		[
			new Square(new Coordinate('a', 5), null), // Empty square
			new Square(new Coordinate('b', 5), null), // Empty square
			new Square(new Coordinate('c', 5), null), // Empty square
			new Square(new Coordinate('d', 5), null), // Empty square
			new Square(new Coordinate('e', 5), null), // Empty square
			new Square(new Coordinate('f', 5), null), // Empty square
			new Square(new Coordinate('g', 5), null), // Empty square
			new Square(new Coordinate('h', 5), null) // Empty square
		],
		// 6
		[
			new Square(new Coordinate('a', 6), null), // Empty square
			new Square(new Coordinate('b', 6), null), // Empty square
			new Square(new Coordinate('c', 6), null), // Empty square
			new Square(new Coordinate('d', 6), null), // Empty square
			new Square(new Coordinate('e', 6), null), // Empty square
			new Square(new Coordinate('f', 6), null), // Empty square
			new Square(new Coordinate('g', 6), null), // Empty square
			new Square(new Coordinate('h', 6), null) // Empty square
		],
		// 7
		[
			new Square(new Coordinate('a', 7), new Pawn(GameColor.Black, new Coordinate('a', 7))),
			new Square(new Coordinate('b', 7), new Pawn(GameColor.Black, new Coordinate('b', 7))),
			new Square(new Coordinate('c', 7), new Pawn(GameColor.Black, new Coordinate('c', 7))),
			new Square(new Coordinate('d', 7), new Pawn(GameColor.Black, new Coordinate('d', 7))),
			new Square(new Coordinate('e', 7), new Pawn(GameColor.Black, new Coordinate('e', 7))),
			new Square(new Coordinate('f', 7), new Pawn(GameColor.Black, new Coordinate('f', 7))),
			new Square(new Coordinate('g', 7), new Pawn(GameColor.Black, new Coordinate('g', 7))),
			new Square(new Coordinate('h', 7), new Pawn(GameColor.Black, new Coordinate('h', 7)))
		],
		// 8
		[
			new Square(new Coordinate('a', 8), new Rook(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('b', 8), new Knight(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('c', 8), new Bishop(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('d', 8), new Queen(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('e', 8), new King(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('f', 8), new Bishop(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('g', 8), new Knight(GameColor.Black, new Coordinate('a', 8))),
			new Square(new Coordinate('h', 8), new Rook(GameColor.Black, new Coordinate('a', 8)))
		]
	].reverse();
}
