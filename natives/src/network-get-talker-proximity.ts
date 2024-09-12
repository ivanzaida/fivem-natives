/**
 * NETWORK:NETWORK_GET_TALKER_PROXIMITY
 *
 * 0xA928AA924B7E3EE2

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetTalkerProximity(): number {
	const networkGetTalkerProximity_result = Citizen.invokeNative<number>('0xA928AA924B7E3EE2', );
	return networkGetTalkerProximity_result;
}