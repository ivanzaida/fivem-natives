import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WILL_FORCE_OTHER_VEHICLES_TO_STOP
 *
 * 0x40891A689350468D

 * 
 * This is used for cases where a car is parked in the middle of the road and you want traffic to queue rather than try
 * and swerve around.
 * Passing TRUE to this command will make Other vehicles always stop behind the vehicle rather than swerving around.
 * This is a reset flag and needs to be called each frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceOtherVehiclesToStop
 */
export function setVehicleWillForceOtherVehiclesToStop(vehicle: VehicleIndex, forceOtherVehiclesToStop: boolean): void {
	const setVehicleWillForceOtherVehiclesToStop_result = Citizen.invokeNative<void>('0x40891A689350468D', vehicle, forceOtherVehiclesToStop);
	return setVehicleWillForceOtherVehiclesToStop_result;
}