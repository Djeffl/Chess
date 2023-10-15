import { Movement } from '$lib/domain/movements/movement.model';

export class Coordinate {
	public column: string;
	public row: number;
	constructor(column: string, row: number) {
		this.column = column;
		this.row = row;
	}

	public toString(): string {
		return `${this.column}${this.row}`;
	}

	public difference(coordinate: Coordinate): Movement {
		const colDiff = coordinate.getColumnIndex() - this.getColumnIndex();
		const rowDiff = coordinate.row - this.row;
		return new Movement(colDiff, rowDiff);
	}

	public getColumnIndex(): number {
		return this.column.charCodeAt(0) + 1 - 'A'.charCodeAt(0);
	}
}
