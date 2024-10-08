import { VehicleIndex, EVehicleLightSetting } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LIGHTS
 *
 * 0xBA3C1A9AA7FD9616

 * set's if the vehicle has lights or not.
 * not an on off toggle.
 * p1 = 0 ;vehicle normal lights, off then lowbeams, then highbeams
 * p1 = 1 ;vehicle doesn't have lights, always off
 * p1 = 2 ;vehicle has always on lights
 * p1 = 3 ;or even larger like 4,5,... normal lights like =1
 * note1: when using =2 on day it's lowbeam,highbeam
 * but at night it's lowbeam,lowbeam,highbeam
 * note2: when using =0 it's affected by day or night for highbeams don't exist in daytime.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleLightSetting} carLightSetting
 */
export function setVehicleLights(vehicle: VehicleIndex, carLightSetting: EVehicleLightSetting | number): void {
	const setVehicleLights_result = Citizen.invokeNative<void>('0xBA3C1A9AA7FD9616', vehicle, carLightSetting);
	return setVehicleLights_result;
}