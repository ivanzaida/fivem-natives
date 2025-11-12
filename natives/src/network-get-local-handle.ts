import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_LOCAL_HANDLE
 *
 * 0x677540FE33795D26

 * 
 * Retrieve the local players gamer handle (this will be invalid if no local player is signed in)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 */
export function networkGetLocalHandle(gamerHandle: GamerHandle /* ptr */, sizeOfData: number): void {
	const networkGetLocalHandle_result = Citizen.invokeNative<void>('0x677540FE33795D26', gamerHandle.dataView, sizeOfData);
	return networkGetLocalHandle_result;
}