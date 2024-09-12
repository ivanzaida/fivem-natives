import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_PROVIDES_COVER
 *
 * 0x0248EA593ACD1C87

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} providesCoverFlag
 */
export function setVehicleProvidesCover(vehicle: VehicleIndex, providesCoverFlag: boolean): void {
	const setVehicleProvidesCover_result = Citizen.invokeNative<void>('0x0248EA593ACD1C87', vehicle, providesCoverFlag);
	return setVehicleProvidesCover_result;
}