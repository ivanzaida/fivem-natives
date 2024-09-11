/**
 * STREAMING:SET_HD_AREA
 *
 * 0x34ABC7A6F0629903

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 */
export function setHdArea(positionX: number, positionY: number, positionZ: number, radius: number): void {
	const setHdArea_result = Citizen.invokeNative<void>('0x34ABC7A6F0629903', positionX, positionY, positionZ, radius);
	return setHdArea_result;
}