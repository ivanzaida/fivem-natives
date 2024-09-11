/**
 * NETWORK:NETWORK_SESSION_GET_UNIQUE_CREW_LIMIT
 *
 * 0xCDC936BF35EDCB73

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkSessionGetUniqueCrewLimit(): number {
	const networkSessionGetUniqueCrewLimit_result = Citizen.invokeNative<number>('0xCDC936BF35EDCB73', );
	return networkSessionGetUniqueCrewLimit_result;
}