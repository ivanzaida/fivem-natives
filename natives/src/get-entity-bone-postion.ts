import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_BONE_POSTION
 *
 * 0x1D49B6C92B9A5B1C

 * 
 * Returns the position, in world space, of the bone within the entity
 * 
 * Gets the world position of the specified bone of the specified entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} bone
 * @returns {Vector3}  
 */
export function getEntityBonePostion(entity: EntityIndex, bone: number): Vector3 {
	const getEntityBonePostion_result = Citizen.invokeNative<Vector3>('0x1D49B6C92B9A5B1C', entity, bone);
	return getEntityBonePostion_result;
}