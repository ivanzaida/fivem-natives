import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_CGOFFSET
 *
 * 0x8462CDB3E1DA954A

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @param {number} cgOffsetX
 * @param {number} cgOffsetY
 * @param {number} cgOffsetZ
 */
export function setCgoffset(entityId: EntityIndex, cgOffsetX: number, cgOffsetY: number, cgOffsetZ: number): void {
	const setCgoffset_result = Citizen.invokeNative<void>('0x8462CDB3E1DA954A', entityId, cgOffsetX, cgOffsetY, cgOffsetZ);
	return setCgoffset_result;
}