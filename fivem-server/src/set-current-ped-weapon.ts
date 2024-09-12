import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * CFX:SET_CURRENT_PED_WEAPON
 *
 * 0XB8278882

 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {boolean} forceInHand
 */
export function setCurrentPedWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number, forceInHand: boolean = false): void {
	const setCurrentPedWeapon_result = Citizen.invokeNative<void>('0XB8278882', ped, typeOfWeapon, forceInHand);
	return setCurrentPedWeapon_result;
}