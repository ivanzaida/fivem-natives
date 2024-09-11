import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_FRIEND_HANDLE_ONLINE
 *
 * 0x484CF81C32C3D413

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsFriendHandleOnline(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsFriendHandleOnline_result = Citizen.invokeNative<boolean>('0x484CF81C32C3D413', gamerHandle.dataView);
	return networkIsFriendHandleOnline_result;
}