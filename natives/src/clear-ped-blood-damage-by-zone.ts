import { PedIndex, EPedDecorationZone } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_BLOOD_DAMAGE_BY_ZONE
 *
 * 0x1926B687CF984FCC

 * 
 * Somehow related to changing ped's clothes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedDecorationZone} zone
 */
export function clearPedBloodDamageByZone(ped: PedIndex, zone: EPedDecorationZone | number): void {
	const clearPedBloodDamageByZone_result = Citizen.invokeNative<void>('0x1926B687CF984FCC', ped, zone);
	return clearPedBloodDamageByZone_result;
}