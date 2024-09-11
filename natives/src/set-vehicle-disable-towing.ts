import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DISABLE_TOWING
 *
 * 0x3B1F6012B676860B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disable
 */
export function setVehicleDisableTowing(vehicle: VehicleIndex, disable: boolean): void {
	const setVehicleDisableTowing_result = Citizen.invokeNative<void>('0x3B1F6012B676860B', vehicle, disable);
	return setVehicleDisableTowing_result;
}