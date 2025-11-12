import { EWeaponType, HudStatValues } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_HUD_STATS
 *
 * 0x78640AA034DC7BAF

 * 
 * struct WeaponHudStatsData
 * {
 *     BYTE hudDamage; // 0x0000
 *     char _0x0001[0x7]; // 0x0001
 *     BYTE hudSpeed; // 0x0008
 *     char _0x0009[0x7]; // 0x0009
 *     BYTE hudCapacity; // 0x0010
 *     char _0x0011[0x7]; // 0x0011
 *     BYTE hudAccuracy; // 0x0018
 *     char _0x0019[0x7]; // 0x0019
 *     BYTE hudRange; // 0x0020
 * };
 * 
 * Usage:
 * 
 * WeaponHudStatsData data;
 * if (GET_WEAPON_HUD_STATS(weaponHash, (int )&data))
 * {
 *     // BYTE damagePercentage = data.hudDamage and so on
 * }
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {HudStatValues} outValues [Ref]
 * @returns {boolean}  
 */
export function getWeaponHudStats(weaponType: EWeaponType | number, outValues: HudStatValues /* ptr */): boolean {
	const getWeaponHudStats_result = Citizen.invokeNative<boolean>('0x78640AA034DC7BAF', weaponType, outValues.dataView);
	return getWeaponHudStats_result;
}