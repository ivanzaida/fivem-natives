import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:REFILL_AMMO_INSTANTLY
 *
 * 0x3CB575F4FC5A6DCB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function refillAmmoInstantly(ped: PedIndex): boolean {
	const refillAmmoInstantly_result = Citizen.invokeNative<boolean>('0x3CB575F4FC5A6DCB', ped);
	return refillAmmoInstantly_result;
}