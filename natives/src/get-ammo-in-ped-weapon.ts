import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_AMMO_IN_PED_WEAPON
 *
 * 0x1149D67DB429787A

 * 
 * WEAPON::GET_AMMO_IN_PED_WEAPON(PLAYER::PLAYER_PED_ID(), a_0)
 * 
 * From decompiled scripts
 * Returns total ammo in weapon
 * 
 * GTALua Example :
 * natives.WEAPON.GET_AMMO_IN_PED_WEAPON(plyPed, WeaponHash)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @returns {number}  
 */
export function getAmmoInPedWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number): number {
	const getAmmoInPedWeapon_result = Citizen.invokeNative<number>('0x1149D67DB429787A', ped, typeOfWeapon);
	return getAmmoInPedWeapon_result;
}