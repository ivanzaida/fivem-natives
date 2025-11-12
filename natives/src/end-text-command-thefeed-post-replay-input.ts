import { EFeedReplayType } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT
 *
 * 0xAB3EA738521899AA

 * 
 * returns a notification handle, prints out a notification like below:
 * type range: 0 - 2
 * if you set type to 1, button accepts "~INPUT_SOMETHING~"
 * 
 * example:
 * HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1, "~INPUT_TALK~", "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
 * - https://imgur.com/UPy0Ial
 * 
 * 
 * Examples from the scripts:
 * l_D1[1/1/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
 * l_D1[2/1/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_SAVE_REPLAY_CLIP~","");
 * l_D1[1/1/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
 * l_D1[2/1/]=HUD::END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT(1,"~INPUT_REPLAY_START_STOP_RECORDING_SECONDARY~","");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EFeedReplayType} replayType
 * @param {string} icon
 * @param {string} subtitle
 * @returns {number}  
 */
export function endTextCommandThefeedPostReplayInput(replayType: EFeedReplayType | number, icon: string, subtitle: string): number {
	const endTextCommandThefeedPostReplayInput_result = Citizen.invokeNative<number>('0xAB3EA738521899AA', replayType, icon, subtitle);
	return endTextCommandThefeedPostReplayInput_result;
}