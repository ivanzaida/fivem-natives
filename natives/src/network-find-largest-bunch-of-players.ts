import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * NETWORK:NETWORK_FIND_LARGEST_BUNCH_OF_PLAYERS
 *
 * 0x644DD5C4A28FAEF3

 * 
 * p0 is always 0. p1 is pointing to a global.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} friendly
 * @param {Vector3} position [Ref]
 * @returns {boolean}  
 */
export function networkFindLargestBunchOfPlayers(friendly: boolean, position: Vector3 /* ptr */): boolean {
	const positionPtr = new Vector3Ref();
	const networkFindLargestBunchOfPlayers_result = Citizen.invokeNative<boolean>('0x644DD5C4A28FAEF3', friendly, positionPtr.dataView);
	positionPtr.copyToVector(position);
	return networkFindLargestBunchOfPlayers_result;
}