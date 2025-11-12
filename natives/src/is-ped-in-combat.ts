import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_COMBAT
 *
 * 0x1B32E388988DD296

 * 
 * Checks if the ped is in combat, if a target ped index is provided,
 * it will return true if the ped is in combat with the target ped, false otherwise
 * 
 * Checks to see if ped and target are in combat with eachother. Only goes one-way: if target is engaged in combat with ped but ped has not yet reacted, the function will return false until ped starts fighting back.
 * 
 * p1 is usually 0 in the scripts because it gets the ped id during the task sequence. For instance: PED::IS_PED_IN_COMBAT(l_42E[4/14/], PLAYER::PLAYER_PED_ID()) // armenian2.ct4: 43794
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @returns {boolean}  
 */
export function isPedInCombat(ped: PedIndex, targetPed: PedIndex = null!): boolean {
	const isPedInCombat_result = Citizen.invokeNative<boolean>('0x1B32E388988DD296', ped, targetPed);
	return isPedInCombat_result;
}