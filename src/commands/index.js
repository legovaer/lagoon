// @flow

import type { AmazeeConfig } from '../parseConfig';

export type BaseArgs = {
  _: Array<string>,
  $0: string,
  config: AmazeeConfig,
};

export type CommandModule = {
  name: string,
  description: string,
  setup?: (yargs: Object) => Object,
  run: (argv: BaseArgs) => Promise<number>,
};

import status from './status';

export { status };

export default ([status]: Array<CommandModule>);
