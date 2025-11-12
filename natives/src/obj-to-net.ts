import { ObjectIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:OBJ_TO_NET
 *
 * 0x16FE0AE33E462D17

 * 
 * Lets objects spawn online simply do it like this:
 * 
 * int createdObject = OBJ_TO_NET(CREATE_OBJECT_NO_OFFSET(oball, pCoords.x, pCoords.y, pCoords.z, 1, 0, 0));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objID
 * @returns {NetworkIndex}  
 */
export function objToNet(objID: ObjectIndex): NetworkIndex {
	const objToNet_result = Citizen.invokeNative<NetworkIndex>('0x16FE0AE33E462D17', objID);
	return objToNet_result;
}