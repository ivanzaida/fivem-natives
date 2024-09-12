import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:REQUEST_ADDITIONAL_TEXT
 *
 * 0xF2CB0224D3BE0B42

 * One block of text can be loaded into each slot at a time, e.g. the phone script can load a block of text into the phone text slot without affecting the text loaded into the mission text slot for the current mission.
 * In the text file, it is possible to mark a piece of text so that it is only loaded when this command is called. The block is given a name of up to seven characters ? the convention is if the .sc filename
 * has seven or less characters then that name is used in the text file, if the .sc filename has more than seven characters then the first six characters and the last one are used.
 * By putting this block name after a : as part of the text key, the text will not be loaded until REQUEST_ADDITIONAL_TEXT is called using the block name.
 * If any block names are used in the text file then they should be added to an alphabetical list at the very beginning of the text file contained within the words "start" and "end".
 * Only one chunk of block text can be loaded into each slot at a time. When REQUEST_ADDITIONAL_TEXT is called for another block, the block text currently in memory will be lost.
 * It seems that REQUEST_ADDITIONAL_TEXT will also clear any prints on screen and clear the print queue, regardless of the text block that these prints are in. If you're wondering why your text is disappearing this might be the cause.
 * For episodic content, REQUEST_ADDITIONAL_TEXT will not let you override text blocks. i.e. if you have named a text block RAY1 in an episodic gxt and there is already
 * a text block called RAY1 in GTA4's gxt then REQUEST_ADDITIONAL_TEXT will always load the one from GTA4. The solution is to rename the text block to something that doesn't clash.
 * Request a gxt into the passed slot.
 * 
 * ------------------------------------------------------------------
 * @param {string} textBlockName
 * @param {ETextBlockSlots} slotNumber
 */
export function requestAdditionalText(textBlockName: string, slotNumber: ETextBlockSlots | number): void {
	const requestAdditionalText_result = Citizen.invokeNative<void>('0xF2CB0224D3BE0B42', textBlockName, slotNumber);
	return requestAdditionalText_result;
}