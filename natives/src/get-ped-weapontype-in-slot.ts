import { PedIndex, EWeaponSlot, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_WEAPONTYPE_IN_SLOT
 *
 * 0xBCEDAE6CA2B2046E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponSlot} slot
 * @returns {EWeaponType}  
 */
export function getPedWeapontypeInSlot(ped: PedIndex, slot: EWeaponSlot | number): EWeaponType {
	const getPedWeapontypeInSlot_result = Citizen.invokeNative<EWeaponType>('0xBCEDAE6CA2B2046E', ped, slot);
	return getPedWeapontypeInSlot_result;
}