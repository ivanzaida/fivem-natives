/**
 * STREAMING:GET_NUMBER_OF_STREAMING_REQUESTS
 *
 * 0x684D65D3F0BFF960

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumberOfStreamingRequests(): number {
	const getNumberOfStreamingRequests_result = Citizen.invokeNative<number>('0x684D65D3F0BFF960', );
	return getNumberOfStreamingRequests_result;
}