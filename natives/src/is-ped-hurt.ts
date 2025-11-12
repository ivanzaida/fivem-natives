import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HURT
 *
 * 0xC00DCFE53DCBBABA

 * 
 * This is the official IS_PED_INJURED. Since V considers injured the same as dying a ped will never be "injured"
 * The hurt threshold was added and is used to describe peds that are injured enough to limp away or flee.
 * 
 * Returns whether the specified ped is hurt.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedHurt(ped: PedIndex): boolean {
	const isPedHurt_result = Citizen.invokeNative<boolean>('0xC00DCFE53DCBBABA', ped);
	return isPedHurt_result;
}