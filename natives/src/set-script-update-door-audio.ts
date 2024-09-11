/**
 * AUDIO:SET_SCRIPT_UPDATE_DOOR_AUDIO
 *
 * 0x60F1DCFB89B4F353

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {boolean} update
 */
export function setScriptUpdateDoorAudio(doorEnumHash: number, update: boolean): void {
	const setScriptUpdateDoorAudio_result = Citizen.invokeNative<void>('0x60F1DCFB89B4F353', doorEnumHash, update);
	return setScriptUpdateDoorAudio_result;
}