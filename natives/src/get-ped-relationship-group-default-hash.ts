import { PedIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:GET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH
 *
 * 0x4001C3C533FE6925

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {ERelGroupHash}  
 */
export function getPedRelationshipGroupDefaultHash(ped: PedIndex): ERelGroupHash {
	const getPedRelationshipGroupDefaultHash_result = Citizen.invokeNative<ERelGroupHash>('0x4001C3C533FE6925', ped);
	return getPedRelationshipGroupDefaultHash_result;
}