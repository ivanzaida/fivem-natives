import { EEPremiumPackType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_USER_PREMIUM_ACCESS
 *
 * 0xEF05628918C6842D

 * 
 * Retrieves the type of pack, if any, which grants the user access to the premium pack content
 * 
 * Checks some commerce stuff
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EEPremiumPackType}  
 */
export function getUserPremiumAccess(): EEPremiumPackType {
	const getUserPremiumAccess_result = Citizen.invokeNative<EEPremiumPackType>('0xEF05628918C6842D', );
	return getUserPremiumAccess_result;
}