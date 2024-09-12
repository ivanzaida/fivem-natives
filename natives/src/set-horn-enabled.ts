import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_HORN_ENABLED
 *
 * 0x07A608749EC88F3A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enable
 */
export function setHornEnabled(vehicle: VehicleIndex, enable: boolean): void {
	const setHornEnabled_result = Citizen.invokeNative<void>('0x07A608749EC88F3A', vehicle, enable);
	return setHornEnabled_result;
}