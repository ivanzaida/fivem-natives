import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_TRAIN_CABOOSE
 *
 * 0xFA9336E5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {boolean}  Returns true if the train is the caboose of the chain.
 */
export function isTrainCaboose(train: VehicleIndex): boolean {
	const isTrainCaboose_result = Citizen.invokeNative<boolean>('0xFA9336E5', train);
	return isTrainCaboose_result;
}