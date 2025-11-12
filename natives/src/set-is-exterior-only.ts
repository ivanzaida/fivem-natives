import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:SET_IS_EXTERIOR_ONLY
 *
 * 0x9AC70C40670AC02D

 * 
 * Jenkins hash _might_ be 0xFC227584.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {boolean} isExteriorOnly
 */
export function setIsExteriorOnly(entityID: EntityIndex, isExteriorOnly: boolean): void {
	const setIsExteriorOnly_result = Citizen.invokeNative<void>('0x9AC70C40670AC02D', entityID, isExteriorOnly);
	return setIsExteriorOnly_result;
}