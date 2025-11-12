/**
 * NETWORK:NETWORK_START_SOLO_TUTORIAL_SESSION
 *
 * 0xD2788BE0DF3E0C9B

 * 
 * Puts the local player in a solo tutorial session - they will remain connected to other players in the session,
 * but will be unable to interact with any of them. Any locally controlled ambient population will be removed when
 * this command is called, so ensure the player is placed where this will not be noticeable
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkStartSoloTutorialSession(): void {
	const networkStartSoloTutorialSession_result = Citizen.invokeNative<void>('0xD2788BE0DF3E0C9B', );
	return networkStartSoloTutorialSession_result;
}