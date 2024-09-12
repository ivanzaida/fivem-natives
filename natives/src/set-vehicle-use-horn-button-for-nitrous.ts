/**
 * VEHICLE:_SET_VEHICLE_USE_HORN_BUTTON_FOR_NITROUS
 *
 * 0x1980F68872CC2C3D

 * 
 * ------------------------------------------------------------------
 */
export function setVehicleUseHornButtonForNitrous(): void {
	const setVehicleUseHornButtonForNitrous_result = Citizen.invokeNative<void>('0x1980F68872CC2C3D', );
	return setVehicleUseHornButtonForNitrous_result;
}