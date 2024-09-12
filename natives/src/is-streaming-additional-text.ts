import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:IS_STREAMING_ADDITIONAL_TEXT
 *
 * 0x134994A89C4A6F71

 * 
 * ------------------------------------------------------------------
 * @param {ETextBlockSlots} slotNumber
 * @returns {boolean}  
 */
export function isStreamingAdditionalText(slotNumber: ETextBlockSlots | number): boolean {
	const isStreamingAdditionalText_result = Citizen.invokeNative<boolean>('0x134994A89C4A6F71', slotNumber);
	return isStreamingAdditionalText_result;
}