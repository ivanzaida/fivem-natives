import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_BONE_OBJECT_POSTION
 *
 * 0xD7F3495D8307C112

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} bone
 * @returns {Vector3}  
 */
export function getEntityBoneObjectPostion(entity: EntityIndex, bone: number): Vector3 {
	const getEntityBoneObjectPostion_result = Citizen.invokeNative<Vector3>('0xD7F3495D8307C112', entity, bone);
	return getEntityBoneObjectPostion_result;
}