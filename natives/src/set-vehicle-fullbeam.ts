import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FULLBEAM
 *
 * 0x2F12C305B28C6C59

 * 
 * Colours can be found in carcols.dat
 * 
 * It switch to highbeam when p1 is set to true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} on
 */
export function setVehicleFullbeam(vehicle: VehicleIndex, on: boolean): void {
	const setVehicleFullbeam_result = Citizen.invokeNative<void>('0x2F12C305B28C6C59', vehicle, on);
	return setVehicleFullbeam_result;
}