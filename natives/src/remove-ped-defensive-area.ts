import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_PED_DEFENSIVE_AREA
 *
 * 0x805B057FA4E28531

 * 
 * Ped will no longer get angry when you stay near him.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} removeSecondaryDefensiveArea Will remove the secondary/fallback defensive area instead of the primary one
 */
export function removePedDefensiveArea(ped: PedIndex, removeSecondaryDefensiveArea: boolean = false): void {
	const removePedDefensiveArea_result = Citizen.invokeNative<void>('0x805B057FA4E28531', ped, removeSecondaryDefensiveArea);
	return removePedDefensiveArea_result;
}