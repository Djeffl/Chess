export class Movement {
	public column: number;
	public row: number;
	constructor(column: number, row: number) {
		this.column = column;
		this.row = row;
	}

	protected isNegative(num: number): boolean {
		return Math.sign(num) == -1;
	}

	protected isZero(num: number): boolean {
		return num == 0;
	}

	protected isPositive(num: number): boolean {
		return Math.sign(num) == 1;
	}
}
