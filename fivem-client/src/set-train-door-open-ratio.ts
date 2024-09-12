import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_TRAIN_DOOR_OPEN_RATIO
 *
 * 0X2468DBE8

 * Sets the ratio that a door is open for on a train.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train to set the door ratio for.
 * @param {number} doorIndex Zerobased door index.
 * @param {number} ratio A value between 0.0 (fully closed) and 1.0 (fully open).
 */
export function setTrainDoorOpenRatio(train: VehicleIndex, doorIndex: number, ratio: number): void {
	const setTrainDoorOpenRatio_result = Citizen.invokeNative<void>('0X2468DBE8', train, doorIndex, ratio);
	return setTrainDoorOpenRatio_result;
}