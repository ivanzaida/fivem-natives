import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_BONE_ROTATION
 *
 * 0x8ED7A7A44B79007B

 * 
 * Returns the rotation, in world space, of the bone within the entity
 * 
 * Gets the world rotation of the specified bone of the specified entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} bone
 * @returns {Vector3}  
 */
export function getEntityBoneRotation(entity: EntityIndex, bone: number): Vector3 {
	const getEntityBoneRotation_result = Citizen.invokeNative<Vector3>('0x8ED7A7A44B79007B', entity, bone);
	return getEntityBoneRotation_result;
}