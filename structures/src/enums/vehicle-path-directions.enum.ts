export enum EVehiclePathDirections {
	DirectionsUnknown, // Unable to decide
	DirectionsWrongWay, // The wrong way wrt the path
	DirectionsKeepDriving, // Keep going
	DirectionsLeftAtJunction, // We have found a junction, and must turn left at it
	DirectionsRightAtJunction, // We have found a junction, and must turn right at it
	DirectionsStraightThroughJunction, // We have found a junction, and must go straight through it
	DirectionsKeepLeft, // Paths splits ahead, keep left
	DirectionsKeepRight, // Path splits ahead, keep right
	DirectionsUturn,
}