/**
 * NETWORK:NETWORK_ALLOW_GANG_TO_JOIN_TUTORIAL_SESSION
 *
 * 0x5147DD7078544AD1

 * 
 * Puts the local player in a gang tutorial session - they will remain connected to other players in the session,
 * but will be unable to interact with any players that have not called this command with the same iTeam value.
 * Any locally controlled ambient population will be removed when this command is called, so ensure the player
 * is placed where this will not be noticeable.
 * 
 * teamId must be < 3, instanceId must be < 64
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} team
 * @param {number} instanceID
 */
export function networkAllowGangToJoinTutorialSession(team: number, instanceID: number): void {
	const networkAllowGangToJoinTutorialSession_result = Citizen.invokeNative<void>('0x5147DD7078544AD1', team, instanceID);
	return networkAllowGangToJoinTutorialSession_result;
}