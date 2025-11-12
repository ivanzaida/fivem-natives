import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_CURRENT_PED_WEAPON
 *
 * 0x3C0F448853B71C92

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {boolean} forceInHand
 */
export function setCurrentPedWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number, forceInHand: boolean = false): void {
	const setCurrentPedWeapon_result = Citizen.invokeNative<void>('0x3C0F448853B71C92', ped, typeOfWeapon, forceInHand);
	return setCurrentPedWeapon_result;
}