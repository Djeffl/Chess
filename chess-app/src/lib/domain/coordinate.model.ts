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
}
