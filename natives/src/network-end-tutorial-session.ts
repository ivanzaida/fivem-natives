/**
 * NETWORK:NETWORK_END_TUTORIAL_SESSION
 *
 * 0x5A80107016E75ABC

 * 
 * Ends a tutorial session previously began via a call to either NETWORK_START_SOLO_TUTORIAL_SESSION() or NETWORK_ALLOW_GANG_TO_JOIN_TUTORIAL_SESSION()
 * The local player will be able to interact will all connected players again. Any locally controlled ambient population will be removed when
 * this command is called, so ensure the player is placed where this will not be noticeable
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkEndTutorialSession(): void {
	const networkEndTutorialSession_result = Citizen.invokeNative<void>('0x5A80107016E75ABC', );
	return networkEndTutorialSession_result;
}