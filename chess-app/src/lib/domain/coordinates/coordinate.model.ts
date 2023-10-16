import type { Column } from '$lib/domain/coordinates/column.model';
import { AreaMovement } from '$lib/domain/movements/area-movement.model';

export class Coordinate {
	public column: Column;
	public row: number;
	constructor(column: Column, row: number) {
		this.column = column;
		this.row = row;
	}

	public toString(): string {
		return `${this.column.value}${this.row}`;
	}

	public equals(coordinate: Coordinate) {
		return this.column.equals(coordinate.column) && this.row == coordinate.row;
	}

	public prepareMove(coordinate: Coordinate): AreaMovement {
		return new AreaMovement(
			coordinate.column.number - this.column.number,
			coordinate.row - this.row
		);
	}
}
