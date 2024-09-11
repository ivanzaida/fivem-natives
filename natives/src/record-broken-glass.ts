/**
 * AUDIO:RECORD_BROKEN_GLASS
 *
 * 0xCD8CCE6C07790657

 * 
 * ------------------------------------------------------------------
 * @param {number} centrePositionX
 * @param {number} centrePositionY
 * @param {number} centrePositionZ
 * @param {number} areaRadius
 */
export function recordBrokenGlass(centrePositionX: number, centrePositionY: number, centrePositionZ: number, areaRadius: number): void {
	const recordBrokenGlass_result = Citizen.invokeNative<void>('0xCD8CCE6C07790657', centrePositionX, centrePositionY, centrePositionZ, areaRadius);
	return recordBrokenGlass_result;
}