import { PieceType } from '$lib/pieceType.enum';
import { PlayerColor } from '$lib/playerColor.enum';

export const visualise = (pieceType?: PieceType, player?: PlayerColor): string => {
	let val = '';
	switch (pieceType) {
		case PieceType.Pawn:
			val = player == PlayerColor.Black ? '&#9823' : '&#9817';
			break;
		case PieceType.Rook:
			val = player == PlayerColor.Black ? '&#9820' : '&#9814';
			break;
		case PieceType.Bishop:
			val = player == PlayerColor.Black ? '&#9821' : '&#9815'; // Bishop icons for Black and White
			break;
		case PieceType.King:
			val = player == PlayerColor.Black ? '&#9818' : '&#9812'; // King icons for Black and White
			break;
		case PieceType.Knight:
			val = player == PlayerColor.Black ? '&#9822' : '&#9816'; // Knight icons for Black and White
			break;
		case PieceType.Queen:
			val = player == PlayerColor.Black ? '&#9819' : '&#9813'; // Queen icons for Black and White
			break;
		default:
			val = '';
			break;
	}

	return val;
};
