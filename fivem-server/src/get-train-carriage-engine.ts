import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_CARRIAGE_ENGINE
 *
 * 0x95070FA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The entity handle.
 * @returns {number}  The train engine carriage.
 */
export function getTrainCarriageEngine(train: VehicleIndex): number {
	const getTrainCarriageEngine_result = Citizen.invokeNative<number>('0x95070FA', train);
	return getTrainCarriageEngine_result;
}