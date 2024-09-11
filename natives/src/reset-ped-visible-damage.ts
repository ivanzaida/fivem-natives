import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_VISIBLE_DAMAGE
 *
 * 0x69AE13B08EFD8497

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedVisibleDamage(ped: PedIndex): void {
	const resetPedVisibleDamage_result = Citizen.invokeNative<void>('0x69AE13B08EFD8497', ped);
	return resetPedVisibleDamage_result;
}