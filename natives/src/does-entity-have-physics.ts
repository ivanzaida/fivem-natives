import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_HAVE_PHYSICS
 *
 * 0x4DBCC7D5D01D67FA

 * 
 * Before calling physics commands e.g SET_ENTITY_VELOCITY you have to check that the entity has physics.
 * Physics are streamed in sperateley from the drawable object, though entity physics near the player are streamed
 * in automatically.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityHavePhysics(entity: EntityIndex): boolean {
	const doesEntityHavePhysics_result = Citizen.invokeNative<boolean>('0x4DBCC7D5D01D67FA', entity);
	return doesEntityHavePhysics_result;
}