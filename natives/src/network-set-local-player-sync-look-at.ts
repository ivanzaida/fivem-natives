/**
 * NETWORK:NETWORK_SET_LOCAL_PLAYER_SYNC_LOOK_AT
 *
 * 0xD187A24F607E4EC1

 * 
 * ------------------------------------------------------------------
 * @param {boolean} syncLookAt
 */
export function networkSetLocalPlayerSyncLookAt(syncLookAt: boolean): void {
	const networkSetLocalPlayerSyncLookAt_result = Citizen.invokeNative<void>('0xD187A24F607E4EC1', syncLookAt);
	return networkSetLocalPlayerSyncLookAt_result;
}