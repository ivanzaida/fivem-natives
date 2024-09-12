import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * CFX:GIVE_WEAPON_TO_PED
 *
 * 0XC4D88A85

 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {number} amountOfAmmo
 * @param {boolean} forceIntoHand
 * @param {boolean} equip
 */
export function giveWeaponToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, amountOfAmmo: number, forceIntoHand: boolean = false, equip: boolean = true): void {
	const giveWeaponToPed_result = Citizen.invokeNative<void>('0XC4D88A85', ped, typeOfWeapon, amountOfAmmo, forceIntoHand, equip);
	return giveWeaponToPed_result;
}