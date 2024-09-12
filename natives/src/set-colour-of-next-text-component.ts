import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:SET_COLOUR_OF_NEXT_TEXT_COMPONENT
 *
 * 0x4E5A3D96808F7F84

 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} nextColour
 */
export function setColourOfNextTextComponent(nextColour: EHudColours | number): void {
	const setColourOfNextTextComponent_result = Citizen.invokeNative<void>('0x4E5A3D96808F7F84', nextColour);
	return setColourOfNextTextComponent_result;
}