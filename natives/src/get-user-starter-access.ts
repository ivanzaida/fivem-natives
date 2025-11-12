import { EEPremiumPackType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_USER_STARTER_ACCESS
 *
 * 0xB83FBB552E8DBF61

 * 
 * Retrieves the type of pack, if any, which grants the user access to the starter pack content
 * 
 * Checks some commerce stuff
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EEPremiumPackType}  
 */
export function getUserStarterAccess(): EEPremiumPackType {
	const getUserStarterAccess_result = Citizen.invokeNative<EEPremiumPackType>('0xB83FBB552E8DBF61', );
	return getUserStarterAccess_result;
}