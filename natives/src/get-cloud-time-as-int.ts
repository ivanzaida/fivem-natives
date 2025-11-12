/**
 * NETWORK:GET_CLOUD_TIME_AS_INT
 *
 * 0x39D1D336459711BE

 * 
 * Return cloud time as int (in seconds since midnight 1970-01-01)
 * This will not do what you expect after sometime in ~2038
 * 
 * Returns POSIX timestamp, an int representing the cloud time.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCloudTimeAsInt(): number {
	const getCloudTimeAsInt_result = Citizen.invokeNative<number>('0x39D1D336459711BE', );
	return getCloudTimeAsInt_result;
}