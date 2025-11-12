import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_LEAK_OIL
 *
 * 0x03DACC5F7E5335AC

 * 
 * Sets whether a vehicle can leak oil
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setVehicleCanLeakOil(vehicle: VehicleIndex, val: boolean): void {
	const setVehicleCanLeakOil_result = Citizen.invokeNative<void>('0x03DACC5F7E5335AC', vehicle, val);
	return setVehicleCanLeakOil_result;
}