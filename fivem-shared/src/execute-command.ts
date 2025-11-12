/**
 * CFX:EXECUTE_COMMAND
 *
 * 0x561C060B

 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} commandString
 */
export function executeCommand(commandString: string): void {
	const executeCommand_result = Citizen.invokeNative<void>('0x561C060B', commandString);
	return executeCommand_result;
}