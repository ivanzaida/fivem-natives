/**
 * GRAPHICS:SEETHROUGH_SET_MAX_THICKNESS
 *
 * 0x1D01A8724381340E

 * 
 * 0.0 = you will not be able to see people behind the walls. 50.0 and more = you will see everyone through the walls. More value is "better" view. See https://gfycat.com/FirmFlippantGourami
 * min: 1.0
 * max: 10000.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetMaxThickness(param: number): void {
	const seethroughSetMaxThickness_result = Citizen.invokeNative<void>('0x1D01A8724381340E', param);
	return seethroughSetMaxThickness_result;
}