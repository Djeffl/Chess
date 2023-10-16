import { Coordinate } from '$lib/domain/coordinates/coordinate.model';
import { Bishop, King, Knight, Queen, Rook } from '$lib/domain/pieces';
import { Pawn } from '$lib/domain/pieces/pawn.model';
import type { Piece } from '$lib/domain/pieces/piece.model';
import { GameColor } from '$lib/GameColor.enum';
import { Square } from '$lib/domain/board/square.model';
import { DirectionMovement } from '$lib/domain/movements/direction-movement.model';
import type { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { Column } from '$lib/domain/coordinates/column.model';

export class Chessboard {
	public getPiece(coordinate: Coordinate): Piece | null {
		return this.getSquare(coordinate)?.value ?? null;
	}

	public getSquare(coordinate: Coordinate): Square | null {
		let square: Square | null = null;
		this.field.forEach((dimOne) =>
			dimOne.forEach((dimTwo) => {
				if (dimTwo.coordinate.equals(coordinate)) {
					square = dimTwo;
				}
			})
		);
		return square;
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
						dimTwo.coordinate.column.number < startCoordinate.column.number &&
						dimTwo.coordinate.column.number > endCoorinate.column.number &&
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
						dimTwo.coordinate.column.number > startCoordinate.column.number &&
						dimTwo.coordinate.column.number < endCoorinate.column.number &&
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
						dimTwo.coordinate.column.number == startCoordinate.column.number &&
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
						dimTwo.coordinate.column.number == startCoordinate.column.number &&
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
						dimTwo.coordinate.column.number < startCoordinate.column.number &&
						dimTwo.coordinate.row < startCoordinate.row &&
						dimTwo.coordinate.column.number > endCoorinate.column.number &&
						dimTwo.coordinate.row > endCoorinate.row &&
						// Check if is diagonal bottom left
						// [-1, -1], [-2, -2] results says it is equal to left under square
						// We could also check if sign is negative
						dimTwo.coordinate.row - startCoordinate.row ==
							dimTwo.coordinate.column.number - startCoordinate.column.number
					)
						validSquares.push(dimTwo);
				})
			);
		}

		if (movement.direction == DirectionMovement.BottomRightDiagonal) {
			this.field.forEach((dimOne) =>
				dimOne.forEach((dimTwo) => {
					if (
						dimTwo.coordinate.column.number > startCoordinate.column.number &&
						dimTwo.coordinate.row < startCoordinate.row &&
						dimTwo.coordinate.column.number < endCoorinate.column.number &&
						dimTwo.coordinate.row > endCoorinate.row &&
						dimTwo.coordinate.column.number - startCoordinate.column.number ==
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
						dimTwo.coordinate.column.number < startCoordinate.column.number &&
						dimTwo.coordinate.row > startCoordinate.row &&
						dimTwo.coordinate.row < endCoorinate.row &&
						dimTwo.coordinate.column.number > endCoorinate.column.number &&
						dimTwo.coordinate.column.number - startCoordinate.column.number ==
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
						dimTwo.coordinate.column.number > startCoordinate.column.number &&
						dimTwo.coordinate.row > startCoordinate.row &&
						dimTwo.coordinate.column.number < endCoorinate.column.number &&
						dimTwo.coordinate.row < endCoorinate.row &&
						dimTwo.coordinate.column.number - startCoordinate.column.number ==
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
			new Square(
				new Coordinate(new Column('a'), 1),
				new Rook(GameColor.White, new Coordinate(new Column('a'), 1))
			),
			new Square(
				new Coordinate(new Column('b'), 1),
				new Knight(GameColor.White, new Coordinate(new Column('b'), 1))
			),
			new Square(
				new Coordinate(new Column('c'), 1),
				new Bishop(GameColor.White, new Coordinate(new Column('c'), 1))
			),
			new Square(
				new Coordinate(new Column('d'), 1),
				new Queen(GameColor.White, new Coordinate(new Column('d'), 1))
			),
			new Square(
				new Coordinate(new Column('e'), 1),
				new King(GameColor.White, new Coordinate(new Column('e'), 1))
			),
			new Square(
				new Coordinate(new Column('f'), 1),
				new Bishop(GameColor.White, new Coordinate(new Column('f'), 1))
			),
			new Square(
				new Coordinate(new Column('g'), 1),
				new Knight(GameColor.White, new Coordinate(new Column('g'), 1))
			),
			new Square(
				new Coordinate(new Column('h'), 1),
				new Rook(GameColor.White, new Coordinate(new Column('h'), 1))
			)
		],
		// 2
		[
			new Square(
				new Coordinate(new Column('a'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('a'), 2))
			),
			new Square(
				new Coordinate(new Column('b'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('b'), 2))
			),
			new Square(
				new Coordinate(new Column('c'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('c'), 2))
			),
			new Square(
				new Coordinate(new Column('d'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('d'), 2))
			),
			new Square(
				new Coordinate(new Column('e'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('e'), 2))
			),
			new Square(
				new Coordinate(new Column('f'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('f'), 2))
			),
			new Square(
				new Coordinate(new Column('g'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('g'), 2))
			),
			new Square(
				new Coordinate(new Column('h'), 2),
				new Pawn(GameColor.White, new Coordinate(new Column('h'), 2))
			)
		],
		// 3
		[
			// Rank 3
			new Square(new Coordinate(new Column('a'), 3), null), // Empty square
			new Square(new Coordinate(new Column('b'), 3), null), // Empty square
			new Square(new Coordinate(new Column('c'), 3), null), // Empty square
			new Square(new Coordinate(new Column('d'), 3), null), // Empty square
			new Square(new Coordinate(new Column('e'), 3), null), // Empty square
			new Square(new Coordinate(new Column('f'), 3), null), // Empty square
			new Square(new Coordinate(new Column('g'), 3), null), // Empty square
			new Square(new Coordinate(new Column('h'), 3), null) // Empty square
		],
		// 4
		[
			new Square(new Coordinate(new Column('a'), 4), null), // Empty square
			new Square(new Coordinate(new Column('b'), 4), null), // Empty square
			new Square(new Coordinate(new Column('c'), 4), null), // Empty square
			new Square(new Coordinate(new Column('d'), 4), null), // Empty square
			new Square(new Coordinate(new Column('e'), 4), null), // Empty square
			new Square(new Coordinate(new Column('f'), 4), null), // Empty square
			new Square(new Coordinate(new Column('g'), 4), null), // Empty square
			new Square(new Coordinate(new Column('h'), 4), null) // Empty square
		],
		// 5
		[
			new Square(new Coordinate(new Column('a'), 5), null), // Empty square
			new Square(new Coordinate(new Column('b'), 5), null), // Empty square
			new Square(new Coordinate(new Column('c'), 5), null), // Empty square
			new Square(new Coordinate(new Column('d'), 5), null), // Empty square
			new Square(new Coordinate(new Column('e'), 5), null), // Empty square
			new Square(new Coordinate(new Column('f'), 5), null), // Empty square
			new Square(new Coordinate(new Column('g'), 5), null), // Empty square
			new Square(new Coordinate(new Column('h'), 5), null) // Empty square
		],
		// 6
		[
			new Square(new Coordinate(new Column('a'), 6), null), // Empty square
			new Square(new Coordinate(new Column('b'), 6), null), // Empty square
			new Square(new Coordinate(new Column('c'), 6), null), // Empty square
			new Square(new Coordinate(new Column('d'), 6), null), // Empty square
			new Square(new Coordinate(new Column('e'), 6), null), // Empty square
			new Square(new Coordinate(new Column('f'), 6), null), // Empty square
			new Square(new Coordinate(new Column('g'), 6), null), // Empty square
			new Square(new Coordinate(new Column('h'), 6), null) // Empty square
		],
		// 7
		[
			new Square(
				new Coordinate(new Column('a'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('a'), 7))
			),
			new Square(
				new Coordinate(new Column('b'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('b'), 7))
			),
			new Square(
				new Coordinate(new Column('c'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('c'), 7))
			),
			new Square(
				new Coordinate(new Column('d'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('d'), 7))
			),
			new Square(
				new Coordinate(new Column('e'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('e'), 7))
			),
			new Square(
				new Coordinate(new Column('f'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('f'), 7))
			),
			new Square(
				new Coordinate(new Column('g'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('g'), 7))
			),
			new Square(
				new Coordinate(new Column('h'), 7),
				new Pawn(GameColor.Black, new Coordinate(new Column('h'), 7))
			)
		],
		// 8
		[
			new Square(
				new Coordinate(new Column('a'), 8),
				new Rook(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('b'), 8),
				new Knight(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('c'), 8),
				new Bishop(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('d'), 8),
				new Queen(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('e'), 8),
				new King(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('f'), 8),
				new Bishop(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('g'), 8),
				new Knight(GameColor.Black, new Coordinate(new Column('a'), 8))
			),
			new Square(
				new Coordinate(new Column('h'), 8),
				new Rook(GameColor.Black, new Coordinate(new Column('a'), 8))
			)
		]
	].reverse();
}
