import { RopeIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:DETACH_ROPE_FROM_ENTITY
 *
 * 0x6DE0DFF01BAFA2BC

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {EntityIndex} entityID
 */
export function detachRopeFromEntity(ropeID: RopeIndex, entityID: EntityIndex): void {
	const detachRopeFromEntity_result = Citizen.invokeNative<void>('0x6DE0DFF01BAFA2BC', ropeID, entityID);
	return detachRopeFromEntity_result;
}