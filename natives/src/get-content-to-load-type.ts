import { EUgcType } from '@ivanzaida/structures'

/**
 * NETWORK:GET_CONTENT_TO_LOAD_TYPE
 *
 * 0xC10C1DEAEBB5849E

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EUgcType}  
 */
export function getContentToLoadType(): EUgcType {
	const getContentToLoadType_result = Citizen.invokeNative<EUgcType>('0xC10C1DEAEBB5849E', );
	return getContentToLoadType_result;
}