import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_CAUSE_OF_DEATH
 *
 * 0x6D7C109F77738F39

 * 
 * Returns the hash of the weapon/model/object that killed the ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EWeaponType}  
 */
export function getPedCauseOfDeath(ped: PedIndex): EWeaponType {
	const getPedCauseOfDeath_result = Citizen.invokeNative<EWeaponType>('0x6D7C109F77738F39', ped);
	return getPedCauseOfDeath_result;
}