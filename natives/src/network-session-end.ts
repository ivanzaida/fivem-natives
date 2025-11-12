/**
 * NETWORK:NETWORK_SESSION_END
 *
 * 0xD0C8A7FF1FD5A461

 * 
 * p0 is always false and p1 varies.
 * NETWORK_SESSION_END(0, 1)
 * NETWORK_SESSION_END(0, 0)
 * Results in: "Connection to session lost due to an unknown network error. Please return to Grand Theft Auto V and try again later."
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} returnToLobby FALSE to leave this session, TRUE to remain (and return to the lobby state)
 * @param {boolean} blacklist Blacklist this session for 5 minutes, it will not be used for matchmaking (unless there are no other sessions)
 * @returns {boolean}  
 */
export function networkSessionEnd(returnToLobby: boolean = false, blacklist: boolean = false): boolean {
	const networkSessionEnd_result = Citizen.invokeNative<boolean>('0xD0C8A7FF1FD5A461', returnToLobby, blacklist);
	return networkSessionEnd_result;
}