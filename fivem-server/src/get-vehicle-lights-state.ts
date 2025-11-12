import { VehicleIndex, BoolRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LIGHTS_STATE
 *
 * 0x7C278621

 * 
 * Returns FALSE if vehicle does not exist
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {BoolRef} lightsOn [Ref]
 * @param {BoolRef} highbeamsOn [Ref]
 * @returns {boolean}  
 */
export function getVehicleLightsState(vehicle: VehicleIndex, lightsOn: BoolRef /* ptr */, highbeamsOn: BoolRef /* ptr */): boolean {
	const getVehicleLightsState_result = Citizen.invokeNative<boolean>('0x7C278621', vehicle, lightsOn.dataView, highbeamsOn.dataView);
	return getVehicleLightsState_result;
}