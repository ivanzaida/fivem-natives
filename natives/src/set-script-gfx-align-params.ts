/**
 * GRAPHICS:SET_SCRIPT_GFX_ALIGN_PARAMS
 *
 * 0x9C066F8D86A1A438

 * Sets the additional alignment parameters
 * offsetX, offsetY : Value to offset all x,y coords passed to 2d renderer.
 * sizeX : If you are aligned to the right of the screen it assumes the x size of everything is this. This makes the calculations for
 * positioning multiple UI elements of different sizes easier. Set this to the size of the largest element
 * sizeY : If you are aligned to the bottom of the screen it assumes the y size of everything is this. As above set this to the size of
 * largest element
 * Sets the draw offset/calculated size for SET_SCRIPT_GFX_ALIGN. If using any alignment other than left/top, the game expects the width/height to be configured using this native in order to get a proper starting position for the draw command.
 * 
 * ------------------------------------------------------------------
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} sizeX
 * @param {number} sizeY
 */
export function setScriptGfxAlignParams(offsetX: number, offsetY: number, sizeX: number, sizeY: number): void {
	const setScriptGfxAlignParams_result = Citizen.invokeNative<void>('0x9C066F8D86A1A438', offsetX, offsetY, sizeX, sizeY);
	return setScriptGfxAlignParams_result;
}