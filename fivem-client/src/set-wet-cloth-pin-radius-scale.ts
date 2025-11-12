/**
 * CFX:SET_WET_CLOTH_PIN_RADIUS_SCALE
 *
 * 0xF1BD2CEF

 * Modifies the radius scale used in the simulation of wet cloth physics.This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 * 
 * ------------------------------------------------------------------
 * @param {number} scale A value that controls the wet cloth radius scale, default
 */
export function setWetClothPinRadiusScale(scale: number): void {
	const setWetClothPinRadiusScale_result = Citizen.invokeNative<void>('0xF1BD2CEF', scale);
	return setWetClothPinRadiusScale_result;
}