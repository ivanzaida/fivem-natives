/**
 * GRAPHICS:SET_NIGHTVISION
 *
 * 0x7E732AC97C7488C2

 * 
 * Enables Night Vision.
 * 
 * Example:
 * C#: Function.Call(Hash.SET_NIGHTVISION, true);
 * C++: GRAPHICS::SET_NIGHTVISION(true);
 * 
 * BOOL toggle:
 * true = turns night vision on for your player.
 * false = turns night vision off for your player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setNightvision(onOff: boolean): void {
	const setNightvision_result = Citizen.invokeNative<void>('0x7E732AC97C7488C2', onOff);
	return setNightvision_result;
}