/**
 * CAM:GET_FINAL_RENDERED_CAM_NEAR_DOF
 *
 * 0x806E1CB52BAD45A2

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamNearDof(): number {
	const getFinalRenderedCamNearDof_result = Citizen.invokeNative<number>('0x806E1CB52BAD45A2', );
	return getFinalRenderedCamNearDof_result;
}