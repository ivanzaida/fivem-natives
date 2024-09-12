import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_DOOR_COUNT
 *
 * 0X99974721

 * Gets the door count for the specified train.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train to obtain the door count for.
 * @returns {number}  The door count.
 */
export function getTrainDoorCount(train: VehicleIndex): number {
	const getTrainDoorCount_result = Citizen.invokeNative<number>('0X99974721', train);
	return getTrainDoorCount_result;
}