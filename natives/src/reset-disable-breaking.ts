import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:RESET_DISABLE_BREAKING
 *
 * 0x950E5A2F4659D2BD

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 */
export function resetDisableBreaking(entityId: EntityIndex): void {
	const resetDisableBreaking_result = Citizen.invokeNative<void>('0x950E5A2F4659D2BD', entityId);
	return resetDisableBreaking_result;
}