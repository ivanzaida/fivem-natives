/**
 * DATAFILE:DATAFILE_IS_VALID_REQUEST_ID
 *
 * 0xF224222A0E09BF20

 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 * @returns {boolean}  
 */
export function datafileIsValidRequestId(cloudRequestID: number): boolean {
	const datafileIsValidRequestId_result = Citizen.invokeNative<boolean>('0xF224222A0E09BF20', cloudRequestID);
	return datafileIsValidRequestId_result;
}