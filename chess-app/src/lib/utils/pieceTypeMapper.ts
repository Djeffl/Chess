import { GameColor } from '$lib/GameColor.enum';
import { Pawn, Rook, type Piece, Bishop, King, Knight, Queen } from '$lib/domain/pieces';

export const visualise = (piece: Piece | null, player?: GameColor): string => {
	let val = '';

	if (piece instanceof Pawn) val = player == GameColor.Black ? '&#9823' : '&#9817';
	else if (piece instanceof Rook) val = player == GameColor.Black ? '&#9820' : '&#9814';
	else if (piece instanceof Bishop)
		val = player == GameColor.Black ? '&#9821' : '&#9815'; // Bishop icons for Black and White
	else if (piece instanceof King)
		val = player == GameColor.Black ? '&#9818' : '&#9812'; // King icons for Black and White
	else if (piece instanceof Knight)
		val = player == GameColor.Black ? '&#9822' : '&#9816'; // Knight icons for Black and White
	else if (piece instanceof Queen)
		val = player == GameColor.Black ? '&#9819' : '&#9813'; // Queen icons for Black and White
	else {
		val = '';
	}

	return val;
};
