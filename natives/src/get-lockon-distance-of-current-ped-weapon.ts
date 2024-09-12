import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GET_LOCKON_DISTANCE_OF_CURRENT_PED_WEAPON
 *
 * 0xD6F4FF37FC8730A1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getLockonDistanceOfCurrentPedWeapon(ped: PedIndex): number {
	const getLockonDistanceOfCurrentPedWeapon_result = Citizen.invokeNative<number>('0xD6F4FF37FC8730A1', ped);
	return getLockonDistanceOfCurrentPedWeapon_result;
}