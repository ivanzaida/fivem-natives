import { NetworkIndex, ObjectIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NET_TO_OBJ
 *
 * 0xAB3646235DE50E93

 * 
 * gets the object id of a network id
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} netID
 * @returns {ObjectIndex}  
 */
export function netToObj(netID: NetworkIndex): ObjectIndex {
	const netToObj_result = Citizen.invokeNative<ObjectIndex>('0xAB3646235DE50E93', netID);
	return netToObj_result;
}