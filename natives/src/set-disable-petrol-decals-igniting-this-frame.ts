/**
 * GRAPHICS:SET_DISABLE_PETROL_DECALS_IGNITING_THIS_FRAME
 *
 * 0xAB03CF772B43A288

 * 
 * ------------------------------------------------------------------
 */
export function setDisablePetrolDecalsIgnitingThisFrame(): void {
	const setDisablePetrolDecalsIgnitingThisFrame_result = Citizen.invokeNative<void>('0xAB03CF772B43A288', );
	return setDisablePetrolDecalsIgnitingThisFrame_result;
}