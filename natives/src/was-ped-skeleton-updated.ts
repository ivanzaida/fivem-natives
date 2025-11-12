import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:WAS_PED_SKELETON_UPDATED
 *
 * 0x3268785AA66D674C

 * 
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function wasPedSkeletonUpdated(ped: PedIndex): boolean {
	const wasPedSkeletonUpdated_result = Citizen.invokeNative<boolean>('0x3268785AA66D674C', ped);
	return wasPedSkeletonUpdated_result;
}