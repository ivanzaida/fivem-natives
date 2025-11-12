import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USE_CUTSCENE_WHEEL_COMPRESSION
 *
 * 0xD735FEDB86CA06C6

 * 
 * Sets the vehicle to ignore calls to set the wheel compression (ie. from SET_VEHICLE_ON_GROUND_PROPERLY)
 * to allow blending back into the game from a cutscene task without the wheels popping. Use this command only
 * if you're sure the cutscene places the vehicle/wheels in a state that is okay to enter the game with
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useCutsceneWheelCompression
 * @param {boolean} animateWheels
 * @param {boolean} animateJoints
 * @returns {boolean}  
 */
export function setVehicleUseCutsceneWheelCompression(vehicle: VehicleIndex, useCutsceneWheelCompression: boolean = true, animateWheels: boolean = true, animateJoints: boolean = true): boolean {
	const setVehicleUseCutsceneWheelCompression_result = Citizen.invokeNative<boolean>('0xD735FEDB86CA06C6', vehicle, useCutsceneWheelCompression, animateWheels, animateJoints);
	return setVehicleUseCutsceneWheelCompression_result;
}