import { EntityIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * ENTITY:ATTACH_ENTITY_TO_ENTITY
 *
 * 0x4D306DD94DD6FDBA

 * 
 * None physical attachment - collision is turned off for entity.
 * 
 * Attaches entity1 to bone (boneIndex) of entity2.
 * 
 * boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
 * 
 * useSoftPinning - if set to false attached entity will not detach when fixed
 * collision - controls collision between the two entities (FALSE disables collision).
 * isPed - pitch doesnt work when false and roll will only work on negative numbers (only peds)
 * vertexIndex - position of vertex
 * fixedRot - if false it ignores entity vector
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @param {number} secondEntityBone
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {boolean} detachWhenDead Detaches the ped when he dies (this is only used by peds)
 * @param {boolean} detachWhenRagdoll Detaches the ped when he ragdolls (this is only used by peds)
 * @param {boolean} activeCollisions Leave the collisions activated on the attached object
 * @param {boolean} useBasicAttachIfPed This forces a path, even for peds, that will use all three rotation components EG
 * @param {EEulerRotOrder} rotOrder
 * @param {boolean} attachOffsetIsRelative
 * @param {boolean} markAsNoLongerNeededWhenDetached
 */
export function attachEntityToEntity(firstEntity: EntityIndex, secondEntity: EntityIndex, secondEntityBone: number, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, detachWhenDead: boolean = false, detachWhenRagdoll: boolean = false, activeCollisions: boolean = false, useBasicAttachIfPed: boolean = false, rotOrder: EEulerRotOrder | number = 2, attachOffsetIsRelative: boolean = true, markAsNoLongerNeededWhenDetached: boolean = false): void {
	const attachEntityToEntity_result = Citizen.invokeNative<void>('0x4D306DD94DD6FDBA', firstEntity, secondEntity, secondEntityBone, vecOffsetX, vecOffsetY, vecOffsetZ, vecRotationX, vecRotationY, vecRotationZ, detachWhenDead, detachWhenRagdoll, activeCollisions, useBasicAttachIfPed, rotOrder, attachOffsetIsRelative, markAsNoLongerNeededWhenDetached);
	return attachEntityToEntity_result;
}