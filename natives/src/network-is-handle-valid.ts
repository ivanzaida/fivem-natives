import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_HANDLE_VALID
 *
 * 0xA8F635A578C0CE07

 * 
 * Checks if a gamer handle is valid
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 * @returns {boolean}  
 */
export function networkIsHandleValid(gamerHandle: GamerHandle /* ptr */, sizeOfData: number): boolean {
	const networkIsHandleValid_result = Citizen.invokeNative<boolean>('0xA8F635A578C0CE07', gamerHandle.dataView, sizeOfData);
	return networkIsHandleValid_result;
}