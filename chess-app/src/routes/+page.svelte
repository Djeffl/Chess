<script lang="ts">
	import type { Coordinate } from '$lib/domain/coordinates/coordinate.model';
	import { Game } from '$lib/domain/game.model';
	import { Player } from '$lib/domain/players/player.model';
	import { GameColor } from '$lib/GameColor.enum';
	import { visualise } from '$lib/utils/pieceTypeMapper';

	let game: Game;

	const initialize = () => {
		const players = [new Player(GameColor.White), new Player(GameColor.Black)];
		game = new Game(players);
		game.start(players[0]);
	};

	const isHighlight = () => {
		// class:selected={isHighlight()}
	};

	let selectedField: Coordinate | null;
	const selectPiece = (coordinate: Coordinate) => {
		if (selectedField != null) {
			move(selectedField!, coordinate);
			selectedField = null;
			return;
		}

		selectedField = coordinate;
	};

	initialize();

	const move = (from: Coordinate, to: Coordinate) => {
		game.takeTurn(from, to);
		game = game;
	};
</script>

<div class="flex justify-center">
	<div class="inline-block">
		{#each game.board.field as column, columnIndex}
			<div class="flex">
				{#each column as row, rowIndex}
					{#if (rowIndex % 2) + ((columnIndex % 2) - 1) == 0}
						<div
							on:click={() => selectPiece(row.coordinate)}
							class="w-12 h-12 p-3 flex justify-center items-center bg-slate-400"
						>
							<!-- {row.coordinate.toString()} -->
							{@html visualise(row.value, row.value?.color)}
						</div>
					{:else}
						<div
							on:click={() => selectPiece(row.coordinate)}
							class="w-12 h-12 p-3 flex justify-center items-center bg-white"
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
	</div>
</div>
