import { EDateFormat } from '@ivanzaida/structures'

/**
 * LOCALIZATION:LOCALIZATION_GET_SYSTEM_DATE_TYPE
 *
 * 0xD676FB5DAC59FB72

 * 
 * Returns the current system date formatting type
 * 
 * Possible return values: 0, 1, 2
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EDateFormat}  
 */
export function localizationGetSystemDateType(): EDateFormat {
	const localizationGetSystemDateType_result = Citizen.invokeNative<EDateFormat>('0xD676FB5DAC59FB72', );
	return localizationGetSystemDateType_result;
}