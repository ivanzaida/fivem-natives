import { ELanguageType } from '@ivanzaida/structures'

/**
 * LOCALIZATION:GET_CURRENT_LANGUAGE
 *
 * 0x8608526719A575EE

 * 
 * Returns the selected language of the player profile
 * 
 * 0 = american (en-US)
 * 1 = french (fr-FR)
 * 2 = german (de-DE)
 * 3 = italian (it-IT)
 * 4 = spanish (es-ES)
 * 5 = brazilian (pt-BR)
 * 6 = polish (pl-PL)
 * 7 = russian (ru-RU)
 * 8 = korean (ko-KR)
 * 9 = chinesetrad (zh-TW)
 * 10 = japanese (ja-JP)
 * 11 = mexican (es-MX)
 * 12 = chinesesimp (zh-CN)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ELanguageType}  
 */
export function getCurrentLanguage(): ELanguageType {
	const getCurrentLanguage_result = Citizen.invokeNative<ELanguageType>('0x8608526719A575EE', );
	return getCurrentLanguage_result;
}