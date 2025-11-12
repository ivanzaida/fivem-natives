import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:IS_PED_ARMED
 *
 * 0x11552FA9DCB8E126

 * 
 * Checks if the ped is currently equipped with a weapon matching a bit specified using a bitwise-or in typeFlags.
 * 
 * Type flag bit values:
 * 1 = Melee weapons
 * 2 = Explosive weapons
 * 4 = Any other weapons
 * 
 * Not specifying any bit will lead to the native always returning 'false', and for example specifying '4 | 2' will check for any weapon except fists and melee weapons.
 * 7 returns true if you are equipped with any weapon except your fists.
 * 6 returns true if you are equipped with any weapon except melee weapons.
 * 5 returns true if you are equipped with any weapon except the Explosives weapon group.
 * 4 returns true if you are equipped with any weapon except Explosives weapon group AND melee weapons.
 * 3 returns true if you are equipped with either Explosives or Melee weapons (the exact opposite of 4).
 * 2 returns true only if you are equipped with any weapon from the Explosives weapon group.
 * 1 returns true only if you are equipped with any Melee weapon.
 * 0 never returns true.
 * 
 * Note: When I say "Explosives weapon group", it does not include the Jerry can and Fire Extinguisher.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponCheckFlags
 * @returns {boolean}  
 */
export function isPedArmed(ped: PedIndex, weaponCheckFlags: number): boolean {
	const isPedArmed_result = Citizen.invokeNative<boolean>('0x11552FA9DCB8E126', ped, weaponCheckFlags);
	return isPedArmed_result;
}