import { EEEmailRetrievalStatus } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_EMAIL_GET_RETRIEVAL_STATUS
 *
 * 0x80CA040BF6D2FA31

 * 
 * ------------------------------------------------------------------
 * @returns {EEEmailRetrievalStatus}  
 */
export function scEmailGetRetrievalStatus(): EEEmailRetrievalStatus {
	const scEmailGetRetrievalStatus_result = Citizen.invokeNative<EEEmailRetrievalStatus>('0x80CA040BF6D2FA31', );
	return scEmailGetRetrievalStatus_result;
}