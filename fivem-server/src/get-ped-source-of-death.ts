import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SOURCE_OF_DEATH
 *
 * 0X84ADF9EB

 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 * Is best to check if the Ped is dead before asking for its killer.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EntityIndex}  
 */
export function getPedSourceOfDeath(ped: PedIndex): EntityIndex {
	const getPedSourceOfDeath_result = Citizen.invokeNative<EntityIndex>('0X84ADF9EB', ped);
	return getPedSourceOfDeath_result;
}