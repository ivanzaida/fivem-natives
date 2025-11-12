import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_DIRECTION
 *
 * 0x8DAF79B6

 * Gets the direction the train is facing
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {boolean}  True if the train is moving forward on the track, False otherwise
 */
export function getTrainDirection(train: VehicleIndex): boolean {
	const getTrainDirection_result = Citizen.invokeNative<boolean>('0x8DAF79B6', train);
	return getTrainDirection_result;
}