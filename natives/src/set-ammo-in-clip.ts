import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_AMMO_IN_CLIP
 *
 * 0x73992DAFD09D607B

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {number} ammoInClip
 * @returns {boolean}  
 */
export function setAmmoInClip(ped: PedIndex, weaponType: EWeaponType | number, ammoInClip: number): boolean {
	const setAmmoInClip_result = Citizen.invokeNative<boolean>('0x73992DAFD09D607B', ped, weaponType, ammoInClip);
	return setAmmoInClip_result;
}