import { EDefaultTaskAllocator, GroupIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_GROUP
 *
 * 0xAE734C5C560DD787

 * 
 * Every frame, the code automatically removes any group which doesn't have any leader/members.
 * This means that you have to set a group leader in the same frame as the group is created, as otherwise you'll get an assert about the group ID being out of range (i.e. the group doesn't exist)
 * The Player already has a group so a group doens't need to be created for them.
 * 
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 * 
 * The parameter is unused.
 * 
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDefaultTaskAllocator} defaultTaskType
 * @returns {GroupIndex}  
 */
export function createGroup(defaultTaskType: EDefaultTaskAllocator | number): GroupIndex {
	const createGroup_result = Citizen.invokeNative<GroupIndex>('0xAE734C5C560DD787', defaultTaskType);
	return createGroup_result;
}