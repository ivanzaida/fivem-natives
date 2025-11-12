import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HANDLE_FROM_USER_ID
 *
 * 0xF1DAEAF3D760B0ED

 * 
 * Retrieve a gamer handle from it's user id representation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} userId
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 */
export function networkHandleFromUserId(userId: string, gamerHandle: GamerHandle /* ptr */, sizeOfData: number): void {
	const networkHandleFromUserId_result = Citizen.invokeNative<void>('0xF1DAEAF3D760B0ED', userId, gamerHandle.dataView, sizeOfData);
	return networkHandleFromUserId_result;
}