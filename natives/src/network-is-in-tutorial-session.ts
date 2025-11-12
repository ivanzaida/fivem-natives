/**
 * NETWORK:NETWORK_IS_IN_TUTORIAL_SESSION
 *
 * 0xF859473E4AD09F30

 * 
 * Returns whether the local player is currently in a tutorial session began via a call to either
 * NETWORK_START_SOLO_TUTORIAL_SESSION() or NETWORK_ALLOW_GANG_TO_JOIN_TUTORIAL_SESSION()
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInTutorialSession(): boolean {
	const networkIsInTutorialSession_result = Citizen.invokeNative<boolean>('0xF859473E4AD09F30', );
	return networkIsInTutorialSession_result;
}