import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_MAX_AMMO_IN_CLIP
 *
 * 0xF2C30F76A5BF797F

 * 
 * p2 is mostly 1 in the scripts.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {boolean} doDeadCheck
 * @returns {number}  
 */
export function getMaxAmmoInClip(ped: PedIndex, weaponType: EWeaponType | number, doDeadCheck: boolean = true): number {
	const getMaxAmmoInClip_result = Citizen.invokeNative<number>('0xF2C30F76A5BF797F', ped, weaponType, doDeadCheck);
	return getMaxAmmoInClip_result;
}