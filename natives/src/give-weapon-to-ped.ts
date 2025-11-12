import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_WEAPON_TO_PED
 *
 * 0xB41DEC3AAC1AA107

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {number} amountOfAmmo
 * @param {boolean} forceIntoHand
 * @param {boolean} equip
 */
export function giveWeaponToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, amountOfAmmo: number, forceIntoHand: boolean = false, equip: boolean = true): void {
	const giveWeaponToPed_result = Citizen.invokeNative<void>('0xB41DEC3AAC1AA107', ped, typeOfWeapon, amountOfAmmo, forceIntoHand, equip);
	return giveWeaponToPed_result;
}