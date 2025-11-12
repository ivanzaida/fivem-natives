/**
 * NETWORK:NETWORK_ALLOW_REMOTE_SYNCED_SCENE_LOCAL_PLAYER_REQUESTS
 *
 * 0x5B051FA78EA5C170

 * 
 * Flags that the script is in a section where remote players starting synced scenes involving the local player
 * is appropriate. This is necessary to prevent hackers from starting synced scenes on players unexpectly as
 * a grief strategy. Please call this command with TRUE at the start of the section of script where this is
 * valid, and then again with FALSE when it is no longer appropriate
 * THE TIGHTER TIME PERIOD WE CAN ALLOW THIS, THE LESS OPPORTUNITY HACKERS HAVE TO GRIEF OUR PLAYERS!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowRemoteRequest
 */
export function networkAllowRemoteSyncedSceneLocalPlayerRequests(allowRemoteRequest: boolean): void {
	const networkAllowRemoteSyncedSceneLocalPlayerRequests_result = Citizen.invokeNative<void>('0x5B051FA78EA5C170', allowRemoteRequest);
	return networkAllowRemoteSyncedSceneLocalPlayerRequests_result;
}