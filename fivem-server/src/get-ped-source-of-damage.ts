import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SOURCE_OF_DAMAGE
 *
 * 0X535DB43F

 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {EntityIndex}  The entity id. Returns 0 if the ped has not been damaged recently.
 */
export function getPedSourceOfDamage(ped: PedIndex): EntityIndex {
	const getPedSourceOfDamage_result = Citizen.invokeNative<EntityIndex>('0X535DB43F', ped);
	return getPedSourceOfDamage_result;
}