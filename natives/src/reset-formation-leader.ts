/**
 * VEHICLE:RESET_FORMATION_LEADER
 *
 * 0xDFF07C5495BDA6ED

 * 
 * Resets the effect of SET_FORMATION_LEADER
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetFormationLeader(): void {
	const resetFormationLeader_result = Citizen.invokeNative<void>('0xDFF07C5495BDA6ED', );
	return resetFormationLeader_result;
}