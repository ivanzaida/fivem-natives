/**
 * AUDIO:SET_MICROPHONE_POSITION
 *
 * 0x6250F3FAA1D0F93E

 * 
 * This native controls where the game plays audio from. By default the microphone is positioned on the player.
 * When p0 is true the game will play audio from the 3 positions inputted.
 * It is recommended to set all 3 positions to the same value as mixing different positions doesn't seem to work well.
 * The scripts mostly use it with only one position such as in fbi3.c:
 * AUDIO::SET_MICROPHONE_POSITION(true, ENTITY::GET_ENTITY_COORDS(iLocal_3091, true), ENTITY::GET_ENTITY_COORDS(iLocal_3091, true), ENTITY::GET_ENTITY_COORDS(iLocal_3091, true));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 * @param {number} panningPosX
 * @param {number} panningPosY
 * @param {number} panningPosZ
 * @param {number} vol1PosX
 * @param {number} vol1PosY
 * @param {number} vol1PosZ
 * @param {number} vol2PosX
 * @param {number} vol2PosY
 * @param {number} vol2PosZ
 */
export function setMicrophonePosition(override: boolean, panningPosX: number, panningPosY: number, panningPosZ: number, vol1PosX: number, vol1PosY: number, vol1PosZ: number, vol2PosX: number, vol2PosY: number, vol2PosZ: number): void {
	const setMicrophonePosition_result = Citizen.invokeNative<void>('0x6250F3FAA1D0F93E', override, panningPosX, panningPosY, panningPosZ, vol1PosX, vol1PosY, vol1PosZ, vol2PosX, vol2PosY, vol2PosZ);
	return setMicrophonePosition_result;
}