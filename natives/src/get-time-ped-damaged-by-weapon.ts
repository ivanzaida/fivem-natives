import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * PED:GET_TIME_PED_DAMAGED_BY_WEAPON
 *
 * 0x81B96B8125212E06

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getTimePedDamagedByWeapon(ped: PedIndex, weaponType: EWeaponType | number): number {
	const getTimePedDamagedByWeapon_result = Citizen.invokeNative<number>('0x81B96B8125212E06', ped, weaponType);
	return getTimePedDamagedByWeapon_result;
}