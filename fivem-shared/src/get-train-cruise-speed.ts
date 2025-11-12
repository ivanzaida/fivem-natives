import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_CRUISE_SPEED
 *
 * 0xA4921EF5

 * Gets the trains desired speed.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The desired cruise speed of the train. Not the speed the train is currently traveling at
 */
export function getTrainCruiseSpeed(train: VehicleIndex): number {
	const getTrainCruiseSpeed_result = Citizen.invokeNative<number>('0xA4921EF5', train);
	return getTrainCruiseSpeed_result;
}