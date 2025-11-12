/**
 * NETWORK:NETWORK_BLOCK_JOIN_QUEUE_INVITES
 *
 * 0x6E8BBCAC6E64214C

 * 
 * Use this to block join queue invites. Use this when the player is in an
 * activity or cutscene that we'd prefer not to interupt with an invite screen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} blocked
 */
export function networkBlockJoinQueueInvites(blocked: boolean): void {
	const networkBlockJoinQueueInvites_result = Citizen.invokeNative<void>('0x6E8BBCAC6E64214C', blocked);
	return networkBlockJoinQueueInvites_result;
}