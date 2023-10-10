import { ChessBoard } from '$lib/chessBoard.model';
import type { Coordinate } from '$lib/domain/coordinate.model';
import type { Player } from '$lib/domain/players/player.model';

export class Game {
	public players: Player[];
	public board!: ChessBoard;

	public activePlayer!: Player;

	constructor(players: Player[]) {
		this.players = players;
	}

	public start(player: Player): void {
		this.activePlayer = player;
		this.board = new ChessBoard();
	}

	public move(from: Coordinate, to: Coordinate): void {
		this.swapPiece(from, to);
		this.swapActiveUser();
	}

	private swapPiece(from: Coordinate, to: Coordinate): void {
		const fromSquare = this.board.field
			.find((x) => x[0].field.row == from.row)
			.find((x) => x.field.column == from.column && x.field.row == from.row);
		const toSquare = this.board.field
			.find((x) => x[0].field.row == to.row)
			.find((x) => x.field.column == to.column && x.field.row == to.row);

		toSquare!.value = fromSquare!.value;
		fromSquare!.value = null;
	}

	private swapActiveUser(): void {
		this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];
	}
}
