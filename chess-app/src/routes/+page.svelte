<script lang="ts">
	import type { Coordinate } from '$lib/domain/coordinate.model';
	import { Game } from '$lib/domain/game.model';
	import { Player } from '$lib/domain/players/player.model';
	import { PlayerColor } from '$lib/playerColor.enum';
	import { visualise } from '$lib/utils/pieceTypeMapper';

	let game: Game;

	const initialize = () => {
		const players = [new Player(PlayerColor.White), new Player(PlayerColor.Black)];
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
		game.move(from, to);
		game = game;
	};
</script>

<div class="border-2 border-indigo-600 inline-block">
	{#each game.board.field as column, columnIndex}
		<div class="flex">
			{#each column as row, rowIndex}
				{#if (rowIndex % 2) + ((columnIndex % 2) - 1) == 0}
					<div
						on:click={() => selectPiece(row.field)}
						class="w-12 h-12 p-3 flex justify-center items-center bg-slate-400"
					>
						<!-- {row.field.toString()} -->
						{@html visualise(row.value?.piece, row.value?.color)}
					</div>
				{:else}
					<div
						on:click={() => selectPiece(row.field)}
						class="w-12 h-12 p-3 flex justify-center items-center bg-white"
					>
						<!-- {row.field.toString()} -->
						{@html visualise(row.value?.piece, row.value?.color)}
					</div>
				{/if}
			{/each}
		</div>
	{/each}
	<h2>Selected: {selectedField?.toString()}</h2>
</div>
