import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_FRIEND_INDICATOR_ON_BLIP
 *
 * 0x06058DF029F581C6

 * 
 * Highlights a blip by a half cyan circle on the right side of the blip. https://i.imgur.com/FrV9M4e.png
 * .Indicating that that player is a friend (in GTA:O). This color can not be changed.
 * To toggle the left side (crew member indicator) of the half circle around the blip, use: `SHOW_CREW_INDICATOR_ON_BLIP`
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} show
 */
export function showFriendIndicatorOnBlip(blip: BlipIndex, show: boolean): void {
	const showFriendIndicatorOnBlip_result = Citizen.invokeNative<void>('0x06058DF029F581C6', blip, show);
	return showFriendIndicatorOnBlip_result;
}