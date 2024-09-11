/**
 * NETWORK:NETWORK_GET_MAX_NUM_PARTICIPANTS
 *
 * 0x95C7A22DBE7AEF4C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetMaxNumParticipants(): number {
	const networkGetMaxNumParticipants_result = Citizen.invokeNative<number>('0x95C7A22DBE7AEF4C', );
	return networkGetMaxNumParticipants_result;
}