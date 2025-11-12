/**
 * PLAYER:PLAYER_DETACH_VIRTUAL_BOUND
 *
 * 0xD11FB55020B6F371

 * 
 * Detach collision bound from ped's character cloth
 * 
 * 1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 * 
 * 
 * ------------------------------------------------------------------
 */
export function playerDetachVirtualBound(): void {
	const playerDetachVirtualBound_result = Citizen.invokeNative<void>('0xD11FB55020B6F371', );
	return playerDetachVirtualBound_result;
}