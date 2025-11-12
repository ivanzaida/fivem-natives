/**
 * GRAPHICS:GET_EXTRA_TCMODIFIER
 *
 * 0xA81182F96782A8EE

 * 
 * See GET_TIMECYCLE_MODIFIER_INDEX for use, works the same just for the secondary timecycle modifier.
 * Returns an integer representing the Timecycle modifier
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getExtraTcmodifier(): number {
	const getExtraTcmodifier_result = Citizen.invokeNative<number>('0xA81182F96782A8EE', );
	return getExtraTcmodifier_result;
}