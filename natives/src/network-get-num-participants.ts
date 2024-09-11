/**
 * NETWORK:NETWORK_GET_NUM_PARTICIPANTS
 *
 * 0x7F258099B06D4C7C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumParticipants(): number {
	const networkGetNumParticipants_result = Citizen.invokeNative<number>('0x7F258099B06D4C7C', );
	return networkGetNumParticipants_result;
}