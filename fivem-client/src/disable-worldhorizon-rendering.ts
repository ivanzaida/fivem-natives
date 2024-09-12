/**
 * CFX:DISABLE_WORLDHORIZON_RENDERING
 *
 * 0XA9C92CDC

 * Disables the game's world horizon lods rendering (see `farlods.#dd`).Using the island hopper natives might also affect this state.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function disableWorldhorizonRendering(state: boolean): void {
	const disableWorldhorizonRendering_result = Citizen.invokeNative<void>('0XA9C92CDC', state);
	return disableWorldhorizonRendering_result;
}