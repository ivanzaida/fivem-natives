import { ELanguageType } from '@ivanzaida/structures'

/**
 * LOCALIZATION:LOCALIZATION_GET_SYSTEM_LANGUAGE
 *
 * 0x148785E497902C88

 * 
 * Returns the current system language
 * 
 * Same return values as GET_CURRENT_LANGUAGE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ELanguageType}  
 */
export function localizationGetSystemLanguage(): ELanguageType {
	const localizationGetSystemLanguage_result = Citizen.invokeNative<ELanguageType>('0x148785E497902C88', );
	return localizationGetSystemLanguage_result;
}