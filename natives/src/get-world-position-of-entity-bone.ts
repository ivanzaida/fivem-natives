import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_WORLD_POSITION_OF_ENTITY_BONE
 *
 * 0x75DF72FC74EED046

 * 
 * Returns the coordinates of an entity-bone.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} boneIdx
 * @returns {Vector3}  
 */
export function getWorldPositionOfEntityBone(entity: EntityIndex, boneIdx: number): Vector3 {
	const getWorldPositionOfEntityBone_result = Citizen.invokeNative<Vector3>('0x75DF72FC74EED046', entity, boneIdx);
	return getWorldPositionOfEntityBone_result;
}