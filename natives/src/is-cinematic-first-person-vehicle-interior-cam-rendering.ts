/**
 * CAM:IS_CINEMATIC_FIRST_PERSON_VEHICLE_INTERIOR_CAM_RENDERING
 *
 * 0x9CA0AFAD60564183

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCinematicFirstPersonVehicleInteriorCamRendering(): boolean {
	const isCinematicFirstPersonVehicleInteriorCamRendering_result = Citizen.invokeNative<boolean>('0x9CA0AFAD60564183', );
	return isCinematicFirstPersonVehicleInteriorCamRendering_result;
}