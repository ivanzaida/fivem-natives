import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:BREAK_ENTITY_GLASS
 *
 * 0xF7AACF0E52319649

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @param {number} impactPositionX
 * @param {number} impactPositionY
 * @param {number} impactPositionZ
 * @param {number} impactRadius
 * @param {number} impulseX
 * @param {number} impulseY
 * @param {number} impulseZ
 * @param {number} damage
 * @param {number} crackType
 * @param {boolean} silent To avoid VFX, falling shards and audio
 */
export function breakEntityGlass(entityId: EntityIndex, impactPositionX: number, impactPositionY: number, impactPositionZ: number, impactRadius: number, impulseX: number, impulseY: number, impulseZ: number, damage: number, crackType: number, silent: boolean = false): void {
	const breakEntityGlass_result = Citizen.invokeNative<void>('0xF7AACF0E52319649', entityId, impactPositionX, impactPositionY, impactPositionZ, impactRadius, impulseX, impulseY, impulseZ, damage, crackType, silent);
	return breakEntityGlass_result;
}