/**
 * DATAFILE:DATAFILE_WATCH_REQUEST_ID
 *
 * 0xAF6DC1461CCA36F8

 * 
 * Adds the given requestID to the watch list.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 */
export function datafileWatchRequestId(cloudRequestID: number): void {
	const datafileWatchRequestId_result = Citizen.invokeNative<void>('0xAF6DC1461CCA36F8', cloudRequestID);
	return datafileWatchRequestId_result;
}