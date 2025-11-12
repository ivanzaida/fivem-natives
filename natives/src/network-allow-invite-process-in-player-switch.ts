/**
 * NETWORK:NETWORK_ALLOW_INVITE_PROCESS_IN_PLAYER_SWITCH
 *
 * 0x93F98BC782D307FF

 * 
 * Use this to inform code that an invite can be processed during a player switch
 * This is normally blocked.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function networkAllowInviteProcessInPlayerSwitch(allow: boolean): void {
	const networkAllowInviteProcessInPlayerSwitch_result = Citizen.invokeNative<void>('0x93F98BC782D307FF', allow);
	return networkAllowInviteProcessInPlayerSwitch_result;
}