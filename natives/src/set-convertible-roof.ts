import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CONVERTIBLE_ROOF
 *
 * 0xAB2F41AC28DDBAAE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} turnOn
 */
export function setConvertibleRoof(vehicle: VehicleIndex, turnOn: boolean): void {
	const setConvertibleRoof_result = Citizen.invokeNative<void>('0xAB2F41AC28DDBAAE', vehicle, turnOn);
	return setConvertibleRoof_result;
}