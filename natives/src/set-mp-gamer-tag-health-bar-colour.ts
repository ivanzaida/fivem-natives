import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:SET_MP_GAMER_TAG_HEALTH_BAR_COLOUR
 *
 * 0x46B70532CC643751

 * 
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 * 
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 * -> Rockstar use the EU spelling of 'color' so I hashed the same name with COLOUR and it came back as the correct hash, so it has been corrected above.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {EHudColours} hudColour
 */
export function setMpGamerTagHealthBarColour(playerNum: number, hudColour: EHudColours | number): void {
	const setMpGamerTagHealthBarColour_result = Citizen.invokeNative<void>('0x46B70532CC643751', playerNum, hudColour);
	return setMpGamerTagHealthBarColour_result;
}