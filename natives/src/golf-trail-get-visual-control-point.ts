import { Vector3 } from '@ivanzaida/structures'

/**
 * GRAPHICS:GOLF_TRAIL_GET_VISUAL_CONTROL_POINT
 *
 * 0x76AF286385CB7A3A

 * 
 * ------------------------------------------------------------------
 * @param {number} controlPoint
 * @returns {Vector3}  
 */
export function golfTrailGetVisualControlPoint(controlPoint: number): Vector3 {
	const golfTrailGetVisualControlPoint_result = Citizen.invokeNative<Vector3>('0x76AF286385CB7A3A', controlPoint);
	return golfTrailGetVisualControlPoint_result;
}