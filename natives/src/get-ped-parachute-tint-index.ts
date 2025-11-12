import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PARACHUTE_TINT_INDEX
 *
 * 0x651A46CD4EAC23F3

 * 
 * This function gets the tint index of the parachute for the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} tint [Ref]
 */
export function getPedParachuteTintIndex(ped: PedIndex, tint: IntRef /* ptr */): void {
	const getPedParachuteTintIndex_result = Citizen.invokeNative<void>('0x651A46CD4EAC23F3', ped, tint.dataView);
	return getPedParachuteTintIndex_result;
}