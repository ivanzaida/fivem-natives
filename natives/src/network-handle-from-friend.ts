import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HANDLE_FROM_FRIEND
 *
 * 0x1530EB7A9B636789

 * 
 * Retrieve a gamer handle from a friend index
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} friend
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 */
export function networkHandleFromFriend(friend: number, gamerHandle: GamerHandle /* ptr */, sizeOfData: number): void {
	const networkHandleFromFriend_result = Citizen.invokeNative<void>('0x1530EB7A9B636789', friend, gamerHandle.dataView, sizeOfData);
	return networkHandleFromFriend_result;
}