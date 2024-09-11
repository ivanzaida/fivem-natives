import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:HAS_PED_PRELOAD_PROP_DATA_FINISHED
 *
 * 0x14491B5694114619

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function hasPedPreloadPropDataFinished(ped: PedIndex): boolean {
	const hasPedPreloadPropDataFinished_result = Citizen.invokeNative<boolean>('0x14491B5694114619', ped);
	return hasPedPreloadPropDataFinished_result;
}