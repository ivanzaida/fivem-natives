/**
 * MISC:GET_HEADING_FROM_VECTOR_2D
 *
 * 0x97BC40FFA2FFCCD2

 * 
 * dx = x1 - x2
 * dy = y1 - y2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @returns {number}  
 */
export function getHeadingFromVector_2D(x: number, y: number): number {
	const getHeadingFromVector_2D_result = Citizen.invokeNative<number>('0x97BC40FFA2FFCCD2', x, y);
	return getHeadingFromVector_2D_result;
}