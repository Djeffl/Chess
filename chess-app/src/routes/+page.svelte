<script lang="ts">
	import type { Square } from '$lib/domain/board/square.model';
	import type { Coordinate } from '$lib/domain/coordinates/coordinate.model';
	import { GameState } from '$lib/domain/Game-state.enum';
	import { Game } from '$lib/domain/game.model';
	import { Movement } from '$lib/domain/movements/movement.model';
	import { Player } from '$lib/domain/players/player.model';
	import { GameColor } from '$lib/GameColor.enum';
	import { visualise } from '$lib/utils/pieceTypeMapper';

	let game: Game;
	let players: Player[];
	let selectedField: Coordinate | null;

	let possibleMovementSquares: Coordinate[];

	const initialize = () => {
		players = [new Player(GameColor.White), new Player(GameColor.Black)];
		game = new Game(players);
		game.start(players[0]);

		game = game;
	};

	const isHighlight = (square: Square) => {
		if (selectedField == null) return false;

		const selectedPiece = game.board.getPiece(selectedField);
		if (selectedPiece == null) return false;

		debugger;
		if (
			possibleMovementSquares.findIndex(
				(x) => x.column.equals(square.coordinate.column) && x.row == square.coordinate.row
			) != -1
		) {
			debugger;
			return true;
		}
	};

	const selectPiece = (coordinate: Coordinate) => {
		if (selectedField != null) {
			move(selectedField!, coordinate);
			selectedField = null;
			return;
		}

		possibleMovementSquares = game.getPossibleSquaresToMove(coordinate);

		selectedField = coordinate;
		game = game;
	};

	initialize();

	const move = (from: Coordinate, to: Coordinate) => {
		game.takeTurn(from, to);
		game = game;
	};
</script>

<div class="flex justify-center">
	<div class="inline-block">
		{#if game.state == GameState.Active}
			{#each game.board.field as column, columnIndex}
				<div class="flex">
					{#each column as row, rowIndex}
						{#if (rowIndex % 2) + ((columnIndex % 2) - 1) == 0}
							<div
								on:click={() => selectPiece(row.coordinate)}
								class="w-12 h-12 p-3 flex justify-center items-center bg-slate-400"
								class:isHighlight={isHighlight(row)}
							>
								<!-- {row.coordinate.toString()} -->
								{@html visualise(row.value, row.value?.color)}
							</div>
						{:else}
							<div
								on:click={() => selectPiece(row.coordinate)}
								class="w-12 h-12 p-3 flex justify-center items-center bg-white"
								class:isHighlight={isHighlight(row)}
							>
								<!-- {row.coordinate.toString()} -->
								{@html visualise(row.value, row.value?.color)}
							</div>
						{/if}
					{/each}
				</div>
			{/each}
			<h2>Selected: {selectedField?.toString()}</h2>
			<h2>{game.currentTurn.color} user's turn</h2>
		{:else}
			<h2>{game.state == GameState.BlackWon ? 'Black Won!' : 'White Won!'}</h2>
			<button on:click={() => initialize()}> Restart </button>
		{/if}
	</div>
</div>
