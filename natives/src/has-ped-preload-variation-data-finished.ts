import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:HAS_PED_PRELOAD_VARIATION_DATA_FINISHED
 *
 * 0xB76612E72B637A6B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function hasPedPreloadVariationDataFinished(ped: PedIndex): boolean {
	const hasPedPreloadVariationDataFinished_result = Citizen.invokeNative<boolean>('0xB76612E72B637A6B', ped);
	return hasPedPreloadVariationDataFinished_result;
}