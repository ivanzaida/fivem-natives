import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_SUPERDUMMY
 *
 * 0x1AA970FDD6C143E2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disabled
 */
export function setDisableSuperdummy(vehicle: VehicleIndex, disabled: boolean): void {
	const setDisableSuperdummy_result = Citizen.invokeNative<void>('0x1AA970FDD6C143E2', vehicle, disabled);
	return setDisableSuperdummy_result;
}