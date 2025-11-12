import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_CAUSE_OF_DEATH
 *
 * 0x63458C27

 * 
 * Returns the hash of the weapon/model/object that killed the ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EWeaponType}  
 */
export function getPedCauseOfDeath(ped: PedIndex): EWeaponType {
	const getPedCauseOfDeath_result = Citizen.invokeNative<EWeaponType>('0x63458C27', ped);
	return getPedCauseOfDeath_result;
}