import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_TYRES_CAN_BURST
 *
 * 0xE6BE8A525BA6BD44

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleTyresCanBurst(vehicle: VehicleIndex): boolean {
	const getVehicleTyresCanBurst_result = Citizen.invokeNative<boolean>('0xE6BE8A525BA6BD44', vehicle);
	return getVehicleTyresCanBurst_result;
}