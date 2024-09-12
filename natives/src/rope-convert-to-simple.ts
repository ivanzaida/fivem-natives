import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_CONVERT_TO_SIMPLE
 *
 * 0x3C3B85A84C954686

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 */
export function ropeConvertToSimple(entityId: EntityIndex): void {
	const ropeConvertToSimple_result = Citizen.invokeNative<void>('0x3C3B85A84C954686', entityId);
	return ropeConvertToSimple_result;
}