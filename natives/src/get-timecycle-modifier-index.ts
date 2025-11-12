/**
 * GRAPHICS:GET_TIMECYCLE_MODIFIER_INDEX
 *
 * 0x8960847E5FD7B48F

 * 
 * Only use for this in the PC scripts is:
 * 
 * if (GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX() != -1)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTimecycleModifierIndex(): number {
	const getTimecycleModifierIndex_result = Citizen.invokeNative<number>('0x8960847E5FD7B48F', );
	return getTimecycleModifierIndex_result;
}