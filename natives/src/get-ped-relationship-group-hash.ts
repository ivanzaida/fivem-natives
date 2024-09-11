import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:GET_PED_RELATIONSHIP_GROUP_HASH
 *
 * 0x2A661A0285B74A27

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {ERelGroupHash}  
 */
export function getPedRelationshipGroupHash(ped: PedIndex): ERelGroupHash {
	const getPedRelationshipGroupHash_result = Citizen.invokeNative<ERelGroupHash>('0x2A661A0285B74A27', ped);
	return getPedRelationshipGroupHash_result;
}