export class Column {
	public value: string;

	constructor(value: string) {
		this.value = value;
	}

	static fromNumber(num: number) {
		return new Column(String.fromCharCode(num + 1 + 'A'.charCodeAt(0)));
	}

	public get number(): number {
		return this.value.charCodeAt(0) + 1 - 'A'.charCodeAt(0);
	}

	public add(col: Column): Column {
		const newCol = this.number + col.number - 1;
		if (newCol > 8) throw Error('Overflow column value');
		return new Column(String.fromCharCode(newCol + 'A'.charCodeAt(0)));
	}

	public subtract(col: Column): Column {
		const newCol = this.number - col.number - 1;
		if (newCol <= 0) throw Error('Overflow column value');
		return new Column(String.fromCharCode(newCol + 'A'.charCodeAt(0)));
	}

	public equals(col: Column): boolean {
		return this.value === col.value;
	}
}
