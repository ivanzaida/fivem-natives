import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_EXIST
 *
 * 0xFC8BFE4B41177C22

 * 
 * Checks whether an entity exists in the game world.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityExist(entity: EntityIndex): boolean {
	const doesEntityExist_result = Citizen.invokeNative<boolean>('0xFC8BFE4B41177C22', entity);
	return doesEntityExist_result;
}