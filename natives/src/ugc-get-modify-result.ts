import { EUgcError } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_MODIFY_RESULT
 *
 * 0xBA339BF67EA1C876

 * 
 * ------------------------------------------------------------------
 * @returns {EUgcError}  
 */
export function ugcGetModifyResult(): EUgcError {
	const ugcGetModifyResult_result = Citizen.invokeNative<EUgcError>('0xBA339BF67EA1C876', );
	return ugcGetModifyResult_result;
}