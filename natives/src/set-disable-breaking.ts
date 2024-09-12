import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_DISABLE_BREAKING
 *
 * 0xA713C2357FA1526D

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @param {boolean} disableBreaking
 */
export function setDisableBreaking(entityId: EntityIndex, disableBreaking: boolean): void {
	const setDisableBreaking_result = Citizen.invokeNative<void>('0xA713C2357FA1526D', entityId, disableBreaking);
	return setDisableBreaking_result;
}