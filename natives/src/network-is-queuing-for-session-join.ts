/**
 * NETWORK:NETWORK_IS_QUEUING_FOR_SESSION_JOIN
 *
 * 0x4E03BF5175B444A6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsQueuingForSessionJoin(): boolean {
	const networkIsQueuingForSessionJoin_result = Citizen.invokeNative<boolean>('0x4E03BF5175B444A6', );
	return networkIsQueuingForSessionJoin_result;
}