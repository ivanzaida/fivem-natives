import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_MELEE_TARGET_FOR_PED
 *
 * 0xC148F260F73A1A6B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedIndex}  
 */
export function getMeleeTargetForPed(ped: PedIndex): PedIndex {
	const getMeleeTargetForPed_result = Citizen.invokeNative<PedIndex>('0xC148F260F73A1A6B', ped);
	return getMeleeTargetForPed_result;
}