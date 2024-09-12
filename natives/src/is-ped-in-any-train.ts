import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_TRAIN
 *
 * 0x17CB7D9FBEC4100F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyTrain(ped: PedIndex): boolean {
	const isPedInAnyTrain_result = Citizen.invokeNative<boolean>('0x17CB7D9FBEC4100F', ped);
	return isPedInAnyTrain_result;
}