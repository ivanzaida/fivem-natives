import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:GET_CURRENT_PED_WEAPON
 *
 * 0x23B29877D0BE9547

 * 
 * The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.
 * p2 seems to be 1 most of the time.
 * 
 * 
 * 
 * 
 * 
 * p2 is not implemented
 * 
 * disassembly said that?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} outWeaponType [Ref]
 * @param {boolean} doDeadCheck
 * @returns {boolean}  
 */
export function getCurrentPedWeapon(ped: PedIndex, outWeaponType: IntRef /* ptr */, doDeadCheck: boolean = true): boolean {
	const getCurrentPedWeapon_result = Citizen.invokeNative<boolean>('0x23B29877D0BE9547', ped, outWeaponType.dataView, doDeadCheck);
	return getCurrentPedWeapon_result;
}