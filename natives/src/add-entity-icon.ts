import { EntityIndex, EntityIconId } from '@ivanzaida/structures'

/**
 * GRAPHICS:ADD_ENTITY_ICON
 *
 * 0x2EB73EDE5BD6492D

 * 
 * Example:
 * GRAPHICS::ADD_ENTITY_ICON(a_0, "MP_Arrow");
 * 
 * I tried this and nothing happened...
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {string} textureName
 * @returns {EntityIconId}  
 */
export function addEntityIcon(entityID: EntityIndex, textureName: string): EntityIconId {
	const addEntityIcon_result = Citizen.invokeNative<EntityIconId>('0x2EB73EDE5BD6492D', entityID, textureName);
	return addEntityIcon_result;
}