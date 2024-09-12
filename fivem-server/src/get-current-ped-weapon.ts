import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * CFX:GET_CURRENT_PED_WEAPON
 *
 * 0xB0237302

 * The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.
 * p2 seems to be 1 most of the time.
 * p2 is not implemented
 * disassembly said that?
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} outWeaponType
 * @param {boolean} doDeadCheck
 * @returns {boolean}  
 */
export function getCurrentPedWeapon(ped: PedIndex, outWeaponType: EWeaponType | number, doDeadCheck: boolean = true): boolean {
	const getCurrentPedWeapon_result = Citizen.invokeNative<boolean>('0xB0237302', ped, outWeaponType, doDeadCheck);
	return getCurrentPedWeapon_result;
}