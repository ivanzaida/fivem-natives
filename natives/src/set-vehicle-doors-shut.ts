import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_SHUT
 *
 * 0xC3680B85B2D7086A

 * 
 * Closes all doors of a vehicle:
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} shutInstantly
 */
export function setVehicleDoorsShut(vehicle: VehicleIndex, shutInstantly: boolean = true): void {
	const setVehicleDoorsShut_result = Citizen.invokeNative<void>('0xC3680B85B2D7086A', vehicle, shutInstantly);
	return setVehicleDoorsShut_result;
}