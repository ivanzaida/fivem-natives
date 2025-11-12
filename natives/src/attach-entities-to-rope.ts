import { RopeIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ATTACH_ENTITIES_TO_ROPE
 *
 * 0x3640C9BF5BF56ED8

 * 
 * Attaches entity 1 to entity 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {EntityIndex} entityAID
 * @param {EntityIndex} entityBID
 * @param {number} worldPositionAX
 * @param {number} worldPositionAY
 * @param {number} worldPositionAZ
 * @param {number} worldPositionBX
 * @param {number} worldPositionBY
 * @param {number} worldPositionBZ
 * @param {number} ropeLength
 * @param {number} componentPartA
 * @param {number} componentPartB
 * @param {string} boneNamePartA
 * @param {string} boneNamePartB
 */
export function attachEntitiesToRope(ropeID: RopeIndex, entityAID: EntityIndex, entityBID: EntityIndex, worldPositionAX: number, worldPositionAY: number, worldPositionAZ: number, worldPositionBX: number, worldPositionBY: number, worldPositionBZ: number, ropeLength: number, componentPartA: number, componentPartB: number, boneNamePartA: string = null!, boneNamePartB: string = null!): void {
	const attachEntitiesToRope_result = Citizen.invokeNative<void>('0x3640C9BF5BF56ED8', ropeID, entityAID, entityBID, worldPositionAX, worldPositionAY, worldPositionAZ, worldPositionBX, worldPositionBY, worldPositionBZ, ropeLength, componentPartA, componentPartB, boneNamePartA, boneNamePartB);
	return attachEntitiesToRope_result;
}