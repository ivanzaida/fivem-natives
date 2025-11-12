import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MAX_HEALTH
 *
 * 0x36A20106D0B42723

 * 
 * Sets the maximum health of a ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} maxHealth
 */
export function setPedMaxHealth(ped: PedIndex, maxHealth: number): void {
	const setPedMaxHealth_result = Citizen.invokeNative<void>('0x36A20106D0B42723', ped, maxHealth);
	return setPedMaxHealth_result;
}