import { NetworkIndex, PedIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NET_TO_PED
 *
 * 0xC35A3A4C05A4831B

 * 
 * gets the ped id of a network id
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} netID
 * @returns {PedIndex}  
 */
export function netToPed(netID: NetworkIndex): PedIndex {
	const netToPed_result = Citizen.invokeNative<PedIndex>('0xC35A3A4C05A4831B', netID);
	return netToPed_result;
}