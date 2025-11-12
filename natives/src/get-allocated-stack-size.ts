/**
 * MISC:GET_ALLOCATED_STACK_SIZE
 *
 * 0x6F4C4DF60C52867E

 * 
 * Each script is an allocate stack of memory. This returns that value.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getAllocatedStackSize(): number {
	const getAllocatedStackSize_result = Citizen.invokeNative<number>('0x6F4C4DF60C52867E', );
	return getAllocatedStackSize_result;
}