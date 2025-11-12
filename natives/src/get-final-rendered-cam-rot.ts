import { EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_FINAL_RENDERED_CAM_ROT
 *
 * 0x958849BB56EC0F07

 * 
 * p0 seems to consistently be 2 across scripts
 * 
 * Function is called faily often by CAM::CREATE_CAM_WITH_PARAMS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getFinalRenderedCamRot(rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getFinalRenderedCamRot_result = Citizen.invokeNative<Vector3>('0x958849BB56EC0F07', rotOrder);
	return getFinalRenderedCamRot_result;
}