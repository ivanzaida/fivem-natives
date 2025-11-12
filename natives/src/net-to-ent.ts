import { NetworkIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NET_TO_ENT
 *
 * 0xF5014688C9788D5F

 * 
 * gets the entity id of a network id
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} netID
 * @returns {EntityIndex}  
 */
export function netToEnt(netID: NetworkIndex): EntityIndex {
	const netToEnt_result = Citizen.invokeNative<EntityIndex>('0xF5014688C9788D5F', netID);
	return netToEnt_result;
}