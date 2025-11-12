import { EntityIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_ENTITY_FLAG_SUPPRESS_SHADOW
 *
 * 0x1849D5FA4A78390C

 * 
 * Sets entity+38 to C (when false) or 0xFF3f (when true)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {boolean} flag
 */
export function setEntityFlagSuppressShadow(entityID: EntityIndex, flag: boolean): void {
	const setEntityFlagSuppressShadow_result = Citizen.invokeNative<void>('0x1849D5FA4A78390C', entityID, flag);
	return setEntityFlagSuppressShadow_result;
}