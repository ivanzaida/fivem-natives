import { IntRef } from '@ivanzaida/structures'

/**
 * PED:REMOVE_PED_ELEGANTLY
 *
 * 0x77870665080C9E81

 * 
 * Judging purely from a quick disassembly, if the ped is in a vehicle, the ped will be deleted immediately. If not, it'll be marked as no longer needed. - very elegant..
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ped [Ref]
 */
export function removePedElegantly(ped: IntRef /* ptr */): void {
	const removePedElegantly_result = Citizen.invokeNative<void>('0x77870665080C9E81', ped.dataView);
	return removePedElegantly_result;
}