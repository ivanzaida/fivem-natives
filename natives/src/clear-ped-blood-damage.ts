import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_BLOOD_DAMAGE
 *
 * 0x8EA9C5E0178372E1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedBloodDamage(ped: PedIndex): void {
	const clearPedBloodDamage_result = Citizen.invokeNative<void>('0x8EA9C5E0178372E1', ped);
	return clearPedBloodDamage_result;
}