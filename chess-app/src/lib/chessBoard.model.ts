import { Coordinate } from '$lib/domain/coordinate.model';
import { Player } from '$lib/domain/players/player.model';
import { PieceType } from '$lib/pieceType.enum';
import { PlayerColor } from '$lib/playerColor.enum';

export class ChessBoard {
	constructor() {}

	public field = [
		// 1
		[
			{
				field: new Coordinate('a', 1),
				value: { piece: PieceType.Rook, color: PlayerColor.White }
			},
			{
				field: new Coordinate('b', 1),
				value: { piece: PieceType.Knight, color: PlayerColor.White }
			},
			{
				field: new Coordinate('c', 1),
				value: { piece: PieceType.Bishop, color: PlayerColor.White }
			},
			{
				field: new Coordinate('d', 1),
				value: { piece: PieceType.Queen, color: PlayerColor.White }
			},
			{
				field: new Coordinate('e', 1),
				value: { piece: PieceType.King, color: PlayerColor.White }
			},
			{
				field: new Coordinate('f', 1),
				value: { piece: PieceType.Bishop, color: PlayerColor.White }
			},
			{
				field: new Coordinate('g', 1),
				value: { piece: PieceType.Knight, color: PlayerColor.White }
			},
			{
				field: new Coordinate('h', 1),
				value: { piece: PieceType.Rook, color: PlayerColor.White }
			}
		],
		// 2
		[
			{
				field: new Coordinate('a', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('b', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('c', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('d', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('e', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('f', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('g', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			},
			{
				field: new Coordinate('h', 2),
				value: { piece: PieceType.Pawn, color: PlayerColor.White }
			}
		],
		// 3
		[
			{
				field: new Coordinate('a', 3),
				value: null
			},
			{
				field: new Coordinate('b', 3),
				value: null
			},
			{
				field: new Coordinate('c', 3),
				value: null
			},
			{
				field: new Coordinate('d', 3),
				value: null
			},
			{
				field: new Coordinate('e', 3),
				value: null
			},
			{
				field: new Coordinate('f', 3),
				value: null
			},
			{
				field: new Coordinate('g', 3),
				value: null
			},
			{
				field: new Coordinate('h', 3),
				value: null
			}
		],
		// 4
		[
			{
				field: new Coordinate('a', 4),
				value: null
			},
			{
				field: new Coordinate('b', 4),
				value: null
			},
			{
				field: new Coordinate('c', 4),
				value: null
			},
			{
				field: new Coordinate('d', 4),
				value: null
			},
			{
				field: new Coordinate('e', 4),
				value: null
			},
			{
				field: new Coordinate('f', 4),
				value: null
			},
			{
				field: new Coordinate('g', 4),
				value: null
			},
			{
				field: new Coordinate('h', 4),
				value: null
			}
		],
		// 5
		[
			{
				field: new Coordinate('a', 5),
				value: null
			},
			{
				field: new Coordinate('b', 5),
				value: null
			},
			{
				field: new Coordinate('c', 5),
				value: null
			},
			{
				field: new Coordinate('d', 5),
				value: null
			},
			{
				field: new Coordinate('e', 5),
				value: null
			},
			{
				field: new Coordinate('f', 5),
				value: null
			},
			{
				field: new Coordinate('g', 5),
				value: null
			},
			{
				field: new Coordinate('h', 5),
				value: null
			}
		],
		// 6
		[
			{
				field: new Coordinate('a', 6),
				value: null
			},
			{
				field: new Coordinate('b', 6),
				value: null
			},
			{
				field: new Coordinate('c', 6),
				value: null
			},
			{
				field: new Coordinate('d', 6),
				value: null
			},
			{
				field: new Coordinate('e', 6),
				value: null
			},
			{
				field: new Coordinate('f', 6),
				value: null
			},
			{
				field: new Coordinate('g', 6),
				value: null
			},
			{
				field: new Coordinate('h', 6),
				value: null
			}
		],
		// 7
		[
			{
				field: new Coordinate('a', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('b', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('c', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('d', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('e', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('f', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('g', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('h', 7),
				value: { piece: PieceType.Pawn, color: PlayerColor.Black }
			}
		],
		// 8
		[
			{
				field: new Coordinate('a', 8),
				value: { piece: PieceType.Rook, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('b', 8),
				value: { piece: PieceType.Knight, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('c', 8),
				value: { piece: PieceType.Bishop, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('d', 8),
				value: { piece: PieceType.Queen, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('e', 8),
				value: { piece: PieceType.King, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('f', 8),
				value: { piece: PieceType.Bishop, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('g', 8),
				value: { piece: PieceType.Knight, color: PlayerColor.Black }
			},
			{
				field: new Coordinate('h', 8),
				value: { piece: PieceType.Rook, color: PlayerColor.Black }
			}
		]
	];
}
