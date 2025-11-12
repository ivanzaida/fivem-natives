import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_FLASH_LIGHT_ACTIVE_HISTORY
 *
 * 0x46DEC96BAC39908C

 * 
 * Enables/disables flashlight on ped's weapon.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} active
 */
export function setFlashLightActiveHistory(ped: PedIndex, active: boolean): void {
	const setFlashLightActiveHistory_result = Citizen.invokeNative<void>('0x46DEC96BAC39908C', ped, active);
	return setFlashLightActiveHistory_result;
}