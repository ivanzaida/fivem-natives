import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SWITCHING_WEAPON
 *
 * 0xB8263BF236C755A5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSwitchingWeapon(ped: PedIndex): boolean {
	const isPedSwitchingWeapon_result = Citizen.invokeNative<boolean>('0xB8263BF236C755A5', ped);
	return isPedSwitchingWeapon_result;
}