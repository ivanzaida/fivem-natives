import { ETableGamesCameraType } from '@ivanzaida/structures'

/**
 * CAM:SET_TABLE_GAMES_CAMERA_THIS_UPDATE
 *
 * 0xC1AAF981A4F50898

 * 
 * ------------------------------------------------------------------
 * @param {ETableGamesCameraType} cameraType
 * @returns {boolean}  
 */
export function setTableGamesCameraThisUpdate(cameraType: ETableGamesCameraType | number): boolean {
	const setTableGamesCameraThisUpdate_result = Citizen.invokeNative<boolean>('0xC1AAF981A4F50898', cameraType);
	return setTableGamesCameraThisUpdate_result;
}