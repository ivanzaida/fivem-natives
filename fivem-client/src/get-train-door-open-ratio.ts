import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_DOOR_OPEN_RATIO
 *
 * 0X40B16551

 * Gets the ratio that a door is open for on a train.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train to obtain the door ratio for.
 * @param {number} doorIndex Zerobased door index.
 * @returns {number}  A value between 0.0 (fully closed) and 1.0 (fully open).
 */
export function getTrainDoorOpenRatio(train: VehicleIndex, doorIndex: number): number {
	const getTrainDoorOpenRatio_result = Citizen.invokeNative<number>('0X40B16551', train, doorIndex);
	return getTrainDoorOpenRatio_result;
}