/**
 * VEHICLE:SET_DISTANT_CARS_ENABLED
 *
 * 0x40124D3C22E7C332

 * 
 * Toggles to render distant vehicles. They may not be vehicles but images to look like vehicles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setDistantCarsEnabled(enable: boolean): void {
	const setDistantCarsEnabled_result = Citizen.invokeNative<void>('0x40124D3C22E7C332', enable);
	return setDistantCarsEnabled_result;
}