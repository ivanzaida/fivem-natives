/**
 * NETWORK:NETWORK_SET_CAN_RECEIVE_PRESENCE_INVITES
 *
 * 0x7AFB027C1EB91ABE

 * 
 * Use this to set whether script can process presence invites or not
 * If FALSE and we receive a direct presence invite, we will request that the user send
 * us a platform invite instead. Can be used during periods where we have no phone, etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} canReceive
 */
export function networkSetCanReceivePresenceInvites(canReceive: boolean): void {
	const networkSetCanReceivePresenceInvites_result = Citizen.invokeNative<void>('0x7AFB027C1EB91ABE', canReceive);
	return networkSetCanReceivePresenceInvites_result;
}