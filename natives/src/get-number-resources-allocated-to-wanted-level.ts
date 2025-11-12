import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:GET_NUMBER_RESOURCES_ALLOCATED_TO_WANTED_LEVEL
 *
 * 0x874C935832B2AE06

 * 
 * Returns the number of resources assigned to a given dispatch for the wanted level response
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @returns {number}  
 */
export function getNumberResourcesAllocatedToWantedLevel(dispatchType: EDispatchType | number): number {
	const getNumberResourcesAllocatedToWantedLevel_result = Citizen.invokeNative<number>('0x874C935832B2AE06', dispatchType);
	return getNumberResourcesAllocatedToWantedLevel_result;
}