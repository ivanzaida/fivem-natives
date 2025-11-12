import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_LEAK_PETROL
 *
 * 0x515A606E0E38355D

 * 
 * Sets whether a vehicle can leak petrol
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setVehicleCanLeakPetrol(vehicle: VehicleIndex, val: boolean): void {
	const setVehicleCanLeakPetrol_result = Citizen.invokeNative<void>('0x515A606E0E38355D', vehicle, val);
	return setVehicleCanLeakPetrol_result;
}