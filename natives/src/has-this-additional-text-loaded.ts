import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:HAS_THIS_ADDITIONAL_TEXT_LOADED
 *
 * 0xCC2EFE4B1D0EE422

 * 
 * Checks if the specified gxt has loaded into the passed slot.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textBlockName
 * @param {ETextBlockSlots} slotNumber
 * @returns {boolean}  
 */
export function hasThisAdditionalTextLoaded(textBlockName: string, slotNumber: ETextBlockSlots | number): boolean {
	const hasThisAdditionalTextLoaded_result = Citizen.invokeNative<boolean>('0xCC2EFE4B1D0EE422', textBlockName, slotNumber);
	return hasThisAdditionalTextLoaded_result;
}