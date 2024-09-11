/**
 * AUDIO:PLAY_STREAM_FROM_POSITION
 *
 * 0x8D4B90E299F8C082

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function playStreamFromPosition(positionX: number, positionY: number, positionZ: number): void {
	const playStreamFromPosition_result = Citizen.invokeNative<void>('0x8D4B90E299F8C082', positionX, positionY, positionZ);
	return playStreamFromPosition_result;
}