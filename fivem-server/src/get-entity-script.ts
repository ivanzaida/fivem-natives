import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_SCRIPT
 *
 * 0xB7F70784

 * 
 * Returns the name of the script that owns/created the entity or nullptr. Second parameter is unused, can just be a nullptr.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {string}  
 */
export function getEntityScript(entity: EntityIndex): string {
	const getEntityScript_result = Citizen.invokeNative<string>('0xB7F70784', entity);
	return getEntityScript_result;
}