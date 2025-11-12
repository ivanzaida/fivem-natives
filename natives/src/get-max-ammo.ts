import { PedIndex, EWeaponType, IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:GET_MAX_AMMO
 *
 * 0xACBE463290141D49

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {IntRef} outMaxAmmo [Ref]
 * @returns {boolean}  
 */
export function getMaxAmmo(ped: PedIndex, weaponType: EWeaponType | number, outMaxAmmo: IntRef /* ptr */): boolean {
	const getMaxAmmo_result = Citizen.invokeNative<boolean>('0xACBE463290141D49', ped, weaponType, outMaxAmmo.dataView);
	return getMaxAmmo_result;
}