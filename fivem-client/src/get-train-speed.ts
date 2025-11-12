import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_SPEED
 *
 * 0x428668B7

 * Gets the speed the train is currently going.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The current speed of the train
 */
export function getTrainSpeed(train: VehicleIndex): number {
	const getTrainSpeed_result = Citizen.invokeNative<number>('0x428668B7', train);
	return getTrainSpeed_result;
}