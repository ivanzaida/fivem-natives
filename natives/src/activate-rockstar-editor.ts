import { EEditorOpenedFromSource } from '@ivanzaida/structures'

/**
 * REPLAY:ACTIVATE_ROCKSTAR_EDITOR
 *
 * 0xA21271C08AEE8291

 * 
 * Please note that you will need to call DO_SCREEN_FADE_IN after exiting the Rockstar Editor when you call this.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEditorOpenedFromSource} openedFromSource
 */
export function activateRockstarEditor(openedFromSource: EEditorOpenedFromSource | number = 1): void {
	const activateRockstarEditor_result = Citizen.invokeNative<void>('0xA21271C08AEE8291', openedFromSource);
	return activateRockstarEditor_result;
}