import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LIGHTS_STATE
 *
 * 0x9FFEA38DBCE391EC

 * 
 * Returns FALSE if vehicle does not exist
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicleID
 * @param {IntRef} lightsOn [Ref]
 * @param {IntRef} fullBeam [Ref]
 * @returns {boolean}  
 */
export function getVehicleLightsState(vehicleID: VehicleIndex, lightsOn: IntRef /* ptr */, fullBeam: IntRef /* ptr */): boolean {
	const getVehicleLightsState_result = Citizen.invokeNative<boolean>('0x9FFEA38DBCE391EC', vehicleID, lightsOn.dataView, fullBeam.dataView);
	return getVehicleLightsState_result;
}