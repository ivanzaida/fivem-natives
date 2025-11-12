import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_RELATIONSHIP_GROUP_HASH
 *
 * 0x354F283C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {ERelGroupHash}  
 */
export function getPedRelationshipGroupHash(ped: PedIndex): ERelGroupHash {
	const getPedRelationshipGroupHash_result = Citizen.invokeNative<ERelGroupHash>('0x354F283C', ped);
	return getPedRelationshipGroupHash_result;
}