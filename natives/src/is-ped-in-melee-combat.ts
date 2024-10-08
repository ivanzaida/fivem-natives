import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_MELEE_COMBAT
 *
 * 0xFFAC548682B3D56E

 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 * You don't have to be holding the melee-targetting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInMeleeCombat(ped: PedIndex): boolean {
	const isPedInMeleeCombat_result = Citizen.invokeNative<boolean>('0xFFAC548682B3D56E', ped);
	return isPedInMeleeCombat_result;
}