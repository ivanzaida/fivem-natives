import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_CLIP_SIZE
 *
 * 0xF4E66F9577F22476

 * 
 * // Returns the size of the default weapon component clip.
 * 
 * Use it like this:
 * 
 * char cClipSize[32];
 * Hash cur;
 * if (WEAPON::GET_CURRENT_PED_WEAPON(playerPed, &cur, 1))
 * {
 *     if (WEAPON::IS_WEAPON_VALID(cur))
 *     {
 *         int iClipSize = WEAPON::GET_WEAPON_CLIP_SIZE(cur);
 *         sprintf_s(cClipSize, "ClipSize: %.d", iClipSize);
 *         vDrawString(cClipSize, 0.5f, 0.5f);
 *     }
 * }
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getWeaponClipSize(weaponType: EWeaponType | number): number {
	const getWeaponClipSize_result = Citizen.invokeNative<number>('0xF4E66F9577F22476', weaponType);
	return getWeaponClipSize_result;
}