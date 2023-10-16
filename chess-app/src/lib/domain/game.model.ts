import { GameColor } from '$lib/GameColor.enum';
import { GameState } from '$lib/domain/Game-state.enum';
import { Chessboard } from '$lib/domain/board/chessboard.model';
import type { Coordinate } from '$lib/domain/coordinates/coordinate.model';
import { JumpMovement } from '$lib/domain/movements/jump-movement.model';
import type { WalkMovement } from '$lib/domain/movements/walk-movement.model';
import { King } from '$lib/domain/pieces';
import type { Piece } from '$lib/domain/pieces/piece.model';
import type { Player } from '$lib/domain/players/player.model';

export class Game {
	public players: Player[];
	public board!: Chessboard;

	public currentTurn!: Player;
	public state!: GameState;

	constructor(players: Player[]) {
		this.players = players;
	}

	public start(player: Player): void {
		this.currentTurn = player;
		this.board = new Chessboard();
		this.state = GameState.Active;
	}

	public takeTurn(from: Coordinate, to: Coordinate) {
		const isMoved = this.movePiece(from, to);
		if (!isMoved) return;

		this.ValidateIfPlayerIsWon();
		this.swapUserTurn();
	}

	public getPossibleSquaresToMove(from: Coordinate): Array<Coordinate> {
		const possibleMoves: Coordinate[] = [];

		const fromPiece = this.board.getPiece(from);
		if (fromPiece === null) return possibleMoves;

		const isPieceFromCurrentTurnUser = fromPiece.color == this.currentTurn.color;
		if (!isPieceFromCurrentTurnUser) return possibleMoves;

		this.board.field.forEach((x) => {
			x.forEach((y) => {
				if (this.validatePieceMovement(fromPiece, from, y.coordinate)) {
					possibleMoves.push(y.coordinate);
				}
			});
		});

		return possibleMoves;
	}

	private movePiece(from: Coordinate, to: Coordinate): boolean {
		const fromPiece = this.board.getPiece(from);

		if (fromPiece === null) return false;
		const isPieceFromCurrentTurnUser = fromPiece.color == this.currentTurn.color;

		if (!isPieceFromCurrentTurnUser) return false;

		if (!this.validatePieceMovement(fromPiece, from, to)) {
			return false;
		}

		this.board.setPiece(to, fromPiece);
		this.board.setPiece(from, null);
		return true;
	}

	private validatePieceMovement(piece: Piece, from: Coordinate, to: Coordinate): boolean {
		const movement = from.prepareMove(to);

		const toPiece = this.board.getPiece(to);

		const isCaptureMove = toPiece != null && piece.color != toPiece.color;
		const isGoingToSelfPiece = toPiece != null && piece.color == toPiece.color;
		const isStartMove =
			piece.initialPosition.column.equals(from.column) && piece.initialPosition.row == from.row;

		if (isGoingToSelfPiece) return false;

		const pieceMovement = isCaptureMove
			? // todo: Extract isValid movement to Piece
			  piece
					.getMovements()
					.captureMoves.find((x) => x.column == movement.column && x.row == movement.row)
			: isStartMove
			? piece
					.getMovements()
					.startMoves.find((x) => x.column == movement.column && x.row == movement.row)
			: piece
					.getMovements()
					.baseMoves.find((x) => x.column == movement.column && x.row == movement.row);

		if (pieceMovement == null) return false;

		if (pieceMovement instanceof JumpMovement) return true;

		// Is Walk movement
		// Validate if obstructed
		if (this.validateWalkMovement(from, to, pieceMovement as WalkMovement)) return true;

		return false;
	}

	private swapUserTurn(): void {
		this.currentTurn = this.currentTurn == this.players[0] ? this.players[1] : this.players[0];
	}

	private validateWalkMovement(from: Coordinate, to: Coordinate, movement: WalkMovement): boolean {
		// refactor that movement contains from & to coordinate
		const squaresOnPath = this.board.getSquaresBetween(from, to, movement);
		const obstructionPieces = squaresOnPath.filter((x) => x.value != null);
		const isAnyObstructionFound = obstructionPieces.length != 0;

		if (isAnyObstructionFound) {
			console.log(JSON.stringify(obstructionPieces.map((x) => x.coordinate)));
			return false;
		}

		return true;
	}

	private ValidateIfPlayerIsWon() {
		const kings = this.board.field.flatMap((x) => x.filter((y) => y.value instanceof King));

		if (kings.length != 2) {
			if (kings[0].value?.color == GameColor.Black) {
				this.state = GameState.BlackWon;
			} else {
				this.state = GameState.WhiteWon;
			}
		}
	}
}
