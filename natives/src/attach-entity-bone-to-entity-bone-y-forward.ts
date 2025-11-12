import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:ATTACH_ENTITY_BONE_TO_ENTITY_BONE_Y_FORWARD
 *
 * 0xB30977F20556F296

 * 
 * Same as the above function but assumes that the bone is facing along the y axis
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @param {number} firstEntityBone
 * @param {number} secondEntityBone
 * @param {boolean} doInitialWarp
 * @param {boolean} collideWithEntity ONLY USED FOR PEDS of set the two entities will collide with each other once attached
 */
export function attachEntityBoneToEntityBoneYForward(firstEntity: EntityIndex, secondEntity: EntityIndex, firstEntityBone: number, secondEntityBone: number, doInitialWarp: boolean = true, collideWithEntity: boolean = false): void {
	const attachEntityBoneToEntityBoneYForward_result = Citizen.invokeNative<void>('0xB30977F20556F296', firstEntity, secondEntity, firstEntityBone, secondEntityBone, doInitialWarp, collideWithEntity);
	return attachEntityBoneToEntityBoneYForward_result;
}