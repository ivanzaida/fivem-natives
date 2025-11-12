import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_BACKWARD_CARRIAGE
 *
 * 0x456E34A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The handle of the carriage behind this train in the chain. Otherwise returns 0 if the train is the caboose of the chain.
 */
export function getTrainBackwardCarriage(train: VehicleIndex): number {
	const getTrainBackwardCarriage_result = Citizen.invokeNative<number>('0x456E34A', train);
	return getTrainBackwardCarriage_result;
}