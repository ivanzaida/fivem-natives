import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HELMET_STORED_HAT_PROP_INDEX
 *
 * 0xB34A70D5AC13FB8C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedHelmetStoredHatPropIndex(ped: PedIndex): number {
	const getPedHelmetStoredHatPropIndex_result = Citizen.invokeNative<number>('0xB34A70D5AC13FB8C', ped);
	return getPedHelmetStoredHatPropIndex_result;
}