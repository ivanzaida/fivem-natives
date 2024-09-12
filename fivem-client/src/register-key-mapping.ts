/**
 * CFX:REGISTER_KEY_MAPPING
 *
 * 0xD7664FD1

 * Registers a key mapping for the current resource.See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 * 
 * ------------------------------------------------------------------
 * @param {string} commandString The command to execute, and the identifier of the binding.
 * @param {string} description A description for in the settings menu.
 * @param {string} defaultMapper The [mapper ID](https
 * @param {string} defaultParameter The [IO parameter ID](https
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
	const registerKeyMapping_result = Citizen.invokeNative<void>('0xD7664FD1', commandString, description, defaultMapper, defaultParameter);
	return registerKeyMapping_result;
}