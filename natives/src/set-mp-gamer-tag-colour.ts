import { EEMpTag, EHudColours } from '@ivanzaida/structures'

/**
 * HUD:SET_MP_GAMER_TAG_COLOUR
 *
 * 0xFEF57A04955B7213

 * 
 * Sets a gamer tag's component colour
 * 
 * gamerTagId is obtained using for example CREATE_FAKE_MP_GAMER_TAG
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {EEMpTag} tag
 * @param {EHudColours} hudColour
 */
export function setMpGamerTagColour(playerNum: number, tag: EEMpTag | number, hudColour: EHudColours | number): void {
	const setMpGamerTagColour_result = Citizen.invokeNative<void>('0xFEF57A04955B7213', playerNum, tag, hudColour);
	return setMpGamerTagColour_result;
}