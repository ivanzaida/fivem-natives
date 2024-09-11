import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_SCRIPT
 *
 * 0XB7F70784

 * Returns the name of the script that owns/created the entity or nullptr. Second parameter is unused, can just be a nullptr.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} instanceId
 * @returns {string}  
 */
export function getEntityScript(entity: EntityIndex, instanceId: number): string {
	const getEntityScript_result = Citizen.invokeNative<string>('0XB7F70784', entity, instanceId);
	return getEntityScript_result;
}