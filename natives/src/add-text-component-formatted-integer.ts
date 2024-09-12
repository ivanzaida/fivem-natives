import { ETextComponentIntegerFormat } from '@ivanzaida/structures'

/**
 * HUD:ADD_TEXT_COMPONENT_FORMATTED_INTEGER
 *
 * 0xB5DF3215F3864B3F

 * 
 * ------------------------------------------------------------------
 * @param {number} integerToFormat
 * @param {ETextComponentIntegerFormat} formattingFlags
 */
export function addTextComponentFormattedInteger(integerToFormat: number, formattingFlags: ETextComponentIntegerFormat | number): void {
	const addTextComponentFormattedInteger_result = Citizen.invokeNative<void>('0xB5DF3215F3864B3F', integerToFormat, formattingFlags);
	return addTextComponentFormattedInteger_result;
}