/**
 * NETWORK:NETWORK_HAVE_SCS_PRIVATE_MSG_PRIV
 *
 * 0x62B038F95CEA3FE9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveScsPrivateMsgPriv(): boolean {
	const networkHaveScsPrivateMsgPriv_result = Citizen.invokeNative<boolean>('0x62B038F95CEA3FE9', );
	return networkHaveScsPrivateMsgPriv_result;
}