/**
 * NETWORK:NETWORK_BLOCK_INVITES
 *
 * 0xF303C195C2A60638

 * 
 * Use this to block invites from being actioned.
 * This keeps the invite around. An EVENT_NETWORK_INVITE_ACCEPTED still fires.
 * Script must call NETWORK_SESSION_CANCEL_INVITE if we do not want to action the invite.
 * Reset to unblocked when no longer required
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} blocked
 */
export function networkBlockInvites(blocked: boolean): void {
	const networkBlockInvites_result = Citizen.invokeNative<void>('0xF303C195C2A60638', blocked);
	return networkBlockInvites_result;
}