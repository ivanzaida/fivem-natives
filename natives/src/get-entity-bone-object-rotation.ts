import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_BONE_OBJECT_ROTATION
 *
 * 0x5834A431DBD4B5E5

 * 
 * Returns the rotation, in object space, of the bone within the entity
 * 
 * Gets the local rotation of the specified bone of the specified entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} bone
 * @returns {Vector3}  
 */
export function getEntityBoneObjectRotation(entity: EntityIndex, bone: number): Vector3 {
	const getEntityBoneObjectRotation_result = Citizen.invokeNative<Vector3>('0x5834A431DBD4B5E5', entity, bone);
	return getEntityBoneObjectRotation_result;
}