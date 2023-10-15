import type { Coordinate } from '$lib/domain/coordinates/coordinate.model';
import type { Piece } from '$lib/domain/pieces';

export class Square {
	coordinate: Coordinate;
	value: Piece | null;
	constructor(coordinate: Coordinate, value: Piece | null) {
		this.coordinate = coordinate;
		this.value = value;
	}
}
