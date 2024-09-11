import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_CG_AT_BOUNDCENTER
 *
 * 0xE2B3F860B1A40B7B

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 */
export function setCgAtBoundcenter(entityId: EntityIndex): void {
	const setCgAtBoundcenter_result = Citizen.invokeNative<void>('0xE2B3F860B1A40B7B', entityId);
	return setCgAtBoundcenter_result;
}