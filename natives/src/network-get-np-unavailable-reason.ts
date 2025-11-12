import { ENpUnavailabilityReason } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_NP_UNAVAILABLE_REASON
 *
 * 0x444B1E9E9A9D726B

 * 
 * Returns the reason why the NP service is unavailable.
 * Will return REASON_INVALID if this function is called when Np is available and will assert
 * 
 * Hardcoded to return zero.
 * 
 * ==== PS4 specific info ====
 * 
 * Returns some sort of unavailable reason:
 * -1 = REASON_INVALID
 *  0 = REASON_OTHER
 *  1 = REASON_SYSTEM_UPDATE
 *  2 = REASON_GAME_UPDATE
 *  3 = REASON_SIGNED_OUT
 *  4 = REASON_AGE
 *  5 = REASON_CONNECTION
 * 
 * =================================
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ENpUnavailabilityReason}  
 */
export function networkGetNpUnavailableReason(): ENpUnavailabilityReason {
	const networkGetNpUnavailableReason_result = Citizen.invokeNative<ENpUnavailabilityReason>('0x444B1E9E9A9D726B', );
	return networkGetNpUnavailableReason_result;
}