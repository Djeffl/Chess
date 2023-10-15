import { Movement } from '$lib/domain/movements/movement.model';
import { DirectionMovement } from '$lib/domain/movements/direction-movement.model';

export class WalkMovement extends Movement {
	public get direction(): DirectionMovement {
		if (this.isNegative(this.column) && this.isPositive(this.row)) {
			return DirectionMovement.TopLeftDiagonal;
		} else if (this.isPositive(this.column) && this.isPositive(this.row)) {
			return DirectionMovement.TopRightDiagonal;
		} else if (this.isNegative(this.column) && this.isNegative(this.row)) {
			return DirectionMovement.BottomLeftDiagonal;
		} else if (this.isPositive(this.column) && this.isNegative(this.row)) {
			return DirectionMovement.BottomRightDiagonal;
		} else if (this.isNegative(this.column) && this.isZero(this.row)) {
			return DirectionMovement.LeftHorizontal;
		} else if (this.isPositive(this.column) && this.isZero(this.row)) {
			return DirectionMovement.RightHorizontal;
		} else if (this.isZero(this.column) && this.isNegative(this.row)) {
			return DirectionMovement.DownHorizontal;
		} else if (this.isZero(this.column) && this.isPositive(this.row)) {
			return DirectionMovement.UpHorizontal;
		} else {
			return DirectionMovement.Unknown;
		}
	}
}
