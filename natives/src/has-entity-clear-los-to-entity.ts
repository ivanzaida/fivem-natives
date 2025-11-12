import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_CLEAR_LOS_TO_ENTITY
 *
 * 0xAD915B5E38F323E5

 * 
 * traceType is always 17 in the scripts.
 * 
 * There is other codes used for traceType:
 * 19 - in jewelry_prep1a
 * 126 - in am_hunt_the_beast
 * 256 & 287 - in fm_mission_controller
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @param {number} losFlags
 * @returns {boolean}  
 */
export function hasEntityClearLosToEntity(firstEntity: EntityIndex, secondEntity: EntityIndex, losFlags: number = 17): boolean {
	const hasEntityClearLosToEntity_result = Citizen.invokeNative<boolean>('0xAD915B5E38F323E5', firstEntity, secondEntity, losFlags);
	return hasEntityClearLosToEntity_result;
}