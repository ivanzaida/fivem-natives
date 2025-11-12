import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:DOES_ENTITY_EXIST
 *
 * 0x3AC90869

 * 
 * Checks whether an entity exists in the game world.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityExist(entity: EntityIndex): boolean {
	const doesEntityExist_result = Citizen.invokeNative<boolean>('0x3AC90869', entity);
	return doesEntityExist_result;
}