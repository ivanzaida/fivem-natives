/**
 * GRAPHICS:CREATE_TRACKED_POINT
 *
 * 0x5008F9D1AD061D8C

 * 
 * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function createTrackedPoint(): number {
	const createTrackedPoint_result = Citizen.invokeNative<number>('0x5008F9D1AD061D8C', );
	return createTrackedPoint_result;
}