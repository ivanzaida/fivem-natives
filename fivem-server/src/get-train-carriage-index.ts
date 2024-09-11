import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_CARRIAGE_INDEX
 *
 * 0X4B8285CF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The entity handle.
 * @returns {number}  The carriage index. -1 returned if invalid result.
 */
export function getTrainCarriageIndex(train: VehicleIndex): number {
	const getTrainCarriageIndex_result = Citizen.invokeNative<number>('0X4B8285CF', train);
	return getTrainCarriageIndex_result;
}