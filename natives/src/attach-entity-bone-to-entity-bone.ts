import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:ATTACH_ENTITY_BONE_TO_ENTITY_BONE
 *
 * 0x8026FC64F8CCD292

 * 
 * None physical attachment - collision is turned off for entity.
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
export function attachEntityBoneToEntityBone(firstEntity: EntityIndex, secondEntity: EntityIndex, firstEntityBone: number, secondEntityBone: number, doInitialWarp: boolean = true, collideWithEntity: boolean = false): void {
	const attachEntityBoneToEntityBone_result = Citizen.invokeNative<void>('0x8026FC64F8CCD292', firstEntity, secondEntity, firstEntityBone, secondEntityBone, doInitialWarp, collideWithEntity);
	return attachEntityBoneToEntityBone_result;
}