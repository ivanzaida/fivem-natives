import { PedIndex, EWeaponType, IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:GET_AMMO_IN_CLIP
 *
 * 0x0227CB6AD5598268

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {IntRef} outAmmoInClip [Ref]
 * @returns {boolean}  
 */
export function getAmmoInClip(ped: PedIndex, weaponType: EWeaponType | number, outAmmoInClip: IntRef /* ptr */): boolean {
	const getAmmoInClip_result = Citizen.invokeNative<boolean>('0x0227CB6AD5598268', ped, weaponType, outAmmoInClip.dataView);
	return getAmmoInClip_result;
}