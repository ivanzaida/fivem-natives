/**
 * HUD:DISPLAY_AMMO_THIS_FRAME
 *
 * 0xFC14A38C4235E772

 * 
 * Must be called every frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function displayAmmoThisFrame(value: boolean): void {
	const displayAmmoThisFrame_result = Citizen.invokeNative<void>('0xFC14A38C4235E772', value);
	return displayAmmoThisFrame_result;
}