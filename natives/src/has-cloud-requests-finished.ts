import { BoolRef } from '@ivanzaida/structures'

/**
 * DLC:HAS_CLOUD_REQUESTS_FINISHED
 *
 * 0x80A220AA99C04E50

 * 
 * Checks whether the extracontent cloud requests are finalized,
 * We should ensure that this function returns true before checking
 * for the state of cloud data and compatibility pack configuration.
 * PARAM NOTES	: bTimedOut - this boolean is set to true if it keeps returning false for <uWaitDuration>
 * PARAM NOTES	: uWaitDuration - timeout duration in milliseconds.
 * PARAM			: Passing 0 as uWaitDuration will make it fall back to the value defined in the code (30 sec)
 * : This function should be queried in a state and we should only leave that state when we time out or return true
 * 
 * Sets the value of the specified variable to 0.
 * Always returns true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BoolRef} timedOut [Ref]
 * @param {number} waitDuration
 * @returns {boolean}  
 */
export function hasCloudRequestsFinished(timedOut: BoolRef /* ptr */, waitDuration: number): boolean {
	const hasCloudRequestsFinished_result = Citizen.invokeNative<boolean>('0x80A220AA99C04E50', timedOut.dataView, waitDuration);
	return hasCloudRequestsFinished_result;
}