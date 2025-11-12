import { EntityIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * ENTITY:ATTACH_ENTITY_TO_ENTITY_PHYSICALLY
 *
 * 0xDE55146A7765454D

 * 
 * Physical attachment using rage constraints - entities are still physically active in the world.
 * 
 * breakForce is the amount of force required to break the bond.
 * p14 - is always 1 in scripts
 * p15 - is 1 or 0 in scripts - unknoun what it does
 * p16 - controls collision between the two entities (FALSE disables collision).
 * p17 - do not teleport entity to be attached to the position of the bone Index of the target entity (if 1, entity will not be teleported to target bone)
 * p18 - is always 2 in scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @param {number} firstEntityBone
 * @param {number} secondEntityBone
 * @param {number} secondEntityOffsetX
 * @param {number} secondEntityOffsetY
 * @param {number} secondEntityOffsetZ
 * @param {number} firstEntityOffsetX
 * @param {number} firstEntityOffsetY
 * @param {number} firstEntityOffsetZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} physicalStrength
 * @param {boolean} constrainRotation
 * @param {boolean} doInitialWarp
 * @param {boolean} collideWithEntity ONLY USED FOR PEDS of set the two entities will collide with each other once attached
 * @param {boolean} addInitialSeperation
 * @param {EEulerRotOrder} rotOrder
 */
export function attachEntityToEntityPhysically(firstEntity: EntityIndex, secondEntity: EntityIndex, firstEntityBone: number, secondEntityBone: number, secondEntityOffsetX: number, secondEntityOffsetY: number, secondEntityOffsetZ: number, firstEntityOffsetX: number, firstEntityOffsetY: number, firstEntityOffsetZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, physicalStrength: number, constrainRotation: boolean, doInitialWarp: boolean = true, collideWithEntity: boolean = false, addInitialSeperation: boolean = true, rotOrder: EEulerRotOrder | number = 2): void {
	const attachEntityToEntityPhysically_result = Citizen.invokeNative<void>('0xDE55146A7765454D', firstEntity, secondEntity, firstEntityBone, secondEntityBone, secondEntityOffsetX, secondEntityOffsetY, secondEntityOffsetZ, firstEntityOffsetX, firstEntityOffsetY, firstEntityOffsetZ, vecRotationX, vecRotationY, vecRotationZ, physicalStrength, constrainRotation, doInitialWarp, collideWithEntity, addInitialSeperation, rotOrder);
	return attachEntityToEntityPhysically_result;
}