import { IntRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_RETRIEVE_SESSION_ERROR_CODE
 *
 * 0x38C09A49FBCCE839

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} errorCode [Ref]
 * @returns {boolean}  
 */
export function netGameserverRetrieveSessionErrorCode(errorCode: IntRef /* ptr */): boolean {
	const netGameserverRetrieveSessionErrorCode_result = Citizen.invokeNative<boolean>('0x38C09A49FBCCE839', errorCode.dataView);
	return netGameserverRetrieveSessionErrorCode_result;
}