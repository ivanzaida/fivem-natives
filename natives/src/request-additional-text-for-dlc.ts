import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:REQUEST_ADDITIONAL_TEXT_FOR_DLC
 *
 * 0x4AB15E3851FF326B

 * 
 * Request additional text for DLC, see above for more info
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textBlockName
 * @param {ETextBlockSlots} slotNumber
 */
export function requestAdditionalTextForDlc(textBlockName: string, slotNumber: ETextBlockSlots | number): void {
	const requestAdditionalTextForDlc_result = Citizen.invokeNative<void>('0x4AB15E3851FF326B', textBlockName, slotNumber);
	return requestAdditionalTextForDlc_result;
}