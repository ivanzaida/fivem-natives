import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:HAS_ADDITIONAL_TEXT_LOADED
 *
 * 0xDCB78A15E5F495DC

 * 
 * ------------------------------------------------------------------
 * @param {ETextBlockSlots} slotNumber
 * @returns {boolean}  
 */
export function hasAdditionalTextLoaded(slotNumber: ETextBlockSlots | number): boolean {
	const hasAdditionalTextLoaded_result = Citizen.invokeNative<boolean>('0xDCB78A15E5F495DC', slotNumber);
	return hasAdditionalTextLoaded_result;
}