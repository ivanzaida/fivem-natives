import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:IS_PED_WEAPON_READY_TO_SHOOT
 *
 * 0x45F34E0DDD65A401

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedWeaponReadyToShoot(ped: PedIndex): boolean {
	const isPedWeaponReadyToShoot_result = Citizen.invokeNative<boolean>('0x45F34E0DDD65A401', ped);
	return isPedWeaponReadyToShoot_result;
}