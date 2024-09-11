import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_STARTUP_REV_SOUND
 *
 * 0xD87145DC228F73CB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} soundName
 * @param {string} setName
 */
export function setVehicleStartupRevSound(vehicle: VehicleIndex, soundName: string, setName: string = null!): void {
	const setVehicleStartupRevSound_result = Citizen.invokeNative<void>('0xD87145DC228F73CB', vehicle, soundName, setName);
	return setVehicleStartupRevSound_result;
}