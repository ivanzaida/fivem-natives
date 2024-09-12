/**
 * AUDIO:UPDATE_SOUND_COORD
 *
 * 0xBE63C0B214CC5142

 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function updateSoundCoord(soundId: number, positionX: number, positionY: number, positionZ: number): void {
	const updateSoundCoord_result = Citizen.invokeNative<void>('0xBE63C0B214CC5142', soundId, positionX, positionY, positionZ);
	return updateSoundCoord_result;
}