/**
 * MISC:RESET_WANTED_RESPONSE_NUM_PEDS_TO_SPAWN
 *
 * 0x3C6FB3D7478BC495

 * 
 * Resets the number of peds to spawn for the wanted response.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetWantedResponseNumPedsToSpawn(): void {
	const resetWantedResponseNumPedsToSpawn_result = Citizen.invokeNative<void>('0x3C6FB3D7478BC495', );
	return resetWantedResponseNumPedsToSpawn_result;
}