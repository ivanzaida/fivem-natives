import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LIGHTS_STATE
 *
 * 0X7C278621

 * Returns FALSE if vehicle does not exist
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicleID
 * @param {number} lightsOn
 * @param {number} fullBeam
 * @returns {boolean}  
 */
export function getVehicleLightsState(vehicleID: VehicleIndex, lightsOn: number, fullBeam: number): boolean {
	const getVehicleLightsState_result = Citizen.invokeNative<boolean>('0X7C278621', vehicleID, lightsOn, fullBeam);
	return getVehicleLightsState_result;
}