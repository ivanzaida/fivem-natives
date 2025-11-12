import { EntityIndex, IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_SCRIPT
 *
 * 0xED22194AB8539910

 * 
 * Returns the name of the script that owns/created the entity or nullptr. Second parameter is unused, can just be a nullptr.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {IntRef} instanceId [Ref]
 * @returns {string}  
 */
export function getEntityScript(entity: EntityIndex, instanceId: IntRef /* ptr */): string {
	const getEntityScript_result = Citizen.invokeNative<string>('0xED22194AB8539910', entity, instanceId.dataView);
	return getEntityScript_result;
}