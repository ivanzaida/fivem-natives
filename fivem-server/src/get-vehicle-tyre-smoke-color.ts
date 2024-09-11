import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TYRE_SMOKE_COLOR
 *
 * 0X75280015

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function getVehicleTyreSmokeColor(vehicle: VehicleIndex, red: number, green: number, blue: number): void {
	const getVehicleTyreSmokeColor_result = Citizen.invokeNative<void>('0X75280015', vehicle, red, green, blue);
	return getVehicleTyreSmokeColor_result;
}