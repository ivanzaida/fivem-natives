import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CAR_BOOT_OPEN
 *
 * 0x8E18C9CFBC30C9FF

 * 
 * Initially used in Max Payne 3, that's why we know the name.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setCarBootOpen(vehicle: VehicleIndex): void {
	const setCarBootOpen_result = Citizen.invokeNative<void>('0x8E18C9CFBC30C9FF', vehicle);
	return setCarBootOpen_result;
}