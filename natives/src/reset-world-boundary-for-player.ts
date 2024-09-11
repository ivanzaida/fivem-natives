/**
 * PLAYER:RESET_WORLD_BOUNDARY_FOR_PLAYER
 *
 * 0xDC14EA9673A80516

 * 
 * ------------------------------------------------------------------
 */
export function resetWorldBoundaryForPlayer(): void {
	const resetWorldBoundaryForPlayer_result = Citizen.invokeNative<void>('0xDC14EA9673A80516', );
	return resetWorldBoundaryForPlayer_result;
}