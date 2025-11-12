import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USE_PLAYER_LIGHT_SETTINGS
 *
 * 0xAAF00640D5573DA0

 * 
 * PARAM
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} state
 */
export function setVehicleUsePlayerLightSettings(vehicle: VehicleIndex, state: boolean): void {
	const setVehicleUsePlayerLightSettings_result = Citizen.invokeNative<void>('0xAAF00640D5573DA0', vehicle, state);
	return setVehicleUsePlayerLightSettings_result;
}