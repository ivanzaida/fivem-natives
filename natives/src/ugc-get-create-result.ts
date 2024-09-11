import { EUgcError } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_CREATE_RESULT
 *
 * 0xE2BDF7F96F1777EA

 * 
 * ------------------------------------------------------------------
 * @returns {EUgcError}  
 */
export function ugcGetCreateResult(): EUgcError {
	const ugcGetCreateResult_result = Citizen.invokeNative<EUgcError>('0xE2BDF7F96F1777EA', );
	return ugcGetCreateResult_result;
}