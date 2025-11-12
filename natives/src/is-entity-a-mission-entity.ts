import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_A_MISSION_ENTITY
 *
 * 0x110821AE6C63DD4F

 * 
 * Will return false if the entity has been set as no longer needed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAMissionEntity(entity: EntityIndex): boolean {
	const isEntityAMissionEntity_result = Citizen.invokeNative<boolean>('0x110821AE6C63DD4F', entity);
	return isEntityAMissionEntity_result;
}