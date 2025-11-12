import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_SOURCE_OF_DEATH
 *
 * 0x836392D80E4F106A

 * 
 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 * 
 * Is best to check if the Ped is dead before asking for its killer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EntityIndex}  
 */
export function getPedSourceOfDeath(ped: PedIndex): EntityIndex {
	const getPedSourceOfDeath_result = Citizen.invokeNative<EntityIndex>('0x836392D80E4F106A', ped);
	return getPedSourceOfDeath_result;
}