/**
 * NETWORK:NETWORK_IS_TUTORIAL_SESSION_CHANGE_PENDING
 *
 * 0x6457A0C458E98FFB

 * 
 * Returns whether the local player is currently pending a tutorial session change began via a call to either
 * NETWORK_START_SOLO_TUTORIAL_SESSION() or NETWORK_ALLOW_GANG_TO_JOIN_TUTORIAL_SESSION() or NETWORK_END_TUTORIAL_SESSION()
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTutorialSessionChangePending(): boolean {
	const networkIsTutorialSessionChangePending_result = Citizen.invokeNative<boolean>('0x6457A0C458E98FFB', );
	return networkIsTutorialSessionChangePending_result;
}