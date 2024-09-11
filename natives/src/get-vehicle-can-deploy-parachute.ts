import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CAN_DEPLOY_PARACHUTE
 *
 * 0x5B82466A71C4A9CD

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleCanDeployParachute(vehicle: VehicleIndex): boolean {
	const getVehicleCanDeployParachute_result = Citizen.invokeNative<boolean>('0x5B82466A71C4A9CD', vehicle);
	return getVehicleCanDeployParachute_result;
}