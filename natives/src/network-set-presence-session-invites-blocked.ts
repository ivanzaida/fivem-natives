/**
 * NETWORK:NETWORK_SET_PRESENCE_SESSION_INVITES_BLOCKED
 *
 * 0x690E83E7292EA12C

 * 
 * Allows blocking of Guide Invites and JvP so that players cannot be invited to
 * or join the player via presence.
 * 
 * Does nothing. It's just a nullsub.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} blocked
 */
export function networkSetPresenceSessionInvitesBlocked(blocked: boolean): void {
	const networkSetPresenceSessionInvitesBlocked_result = Citizen.invokeNative<void>('0x690E83E7292EA12C', blocked);
	return networkSetPresenceSessionInvitesBlocked_result;
}