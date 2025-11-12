import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_CAN_ATTACK_FRIENDLY
 *
 * 0x19621C4DDF8636D4

 * 
 * Setting ped to true allows the ped to shoot "friendlies".
 * 
 * p2 set to true when toggle is also true seams to make peds permanently unable to aim at, even if you set p2 back to false.
 * 
 * p1 = false & p2 = false for unable to aim at.
 * p1 = true & p2 = false for able to aim at.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 * @param {boolean} changeTargettingLockOnState
 */
export function setCanAttackFriendly(ped: PedIndex, enable: boolean, changeTargettingLockOnState: boolean = false): void {
	const setCanAttackFriendly_result = Citizen.invokeNative<void>('0x19621C4DDF8636D4', ped, enable, changeTargettingLockOnState);
	return setCanAttackFriendly_result;
}