import { EUgcError } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_QUERY_RESULT
 *
 * 0x1DC804A2468D29A2

 * 
 * ------------------------------------------------------------------
 * @returns {EUgcError}  
 */
export function ugcGetQueryResult(): EUgcError {
	const ugcGetQueryResult_result = Citizen.invokeNative<EUgcError>('0x1DC804A2468D29A2', );
	return ugcGetQueryResult_result;
}