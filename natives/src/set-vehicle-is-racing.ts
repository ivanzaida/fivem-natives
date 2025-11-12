import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IS_RACING
 *
 * 0xDA87162A83051958

 * 
 * If bRacing is set to true, vehicle will use more aggressive
 * avoidance parameters when avoiding other vehicles that are also racing
 * 
 * p1 (toggle) was always 1 (true) except in one case in the b678 scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} racing
 */
export function setVehicleIsRacing(vehicle: VehicleIndex, racing: boolean): void {
	const setVehicleIsRacing_result = Citizen.invokeNative<void>('0xDA87162A83051958', vehicle, racing);
	return setVehicleIsRacing_result;
}