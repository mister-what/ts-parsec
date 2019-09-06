
// Automatically copied from NativeObjectTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export type GenericObject = Object;
type AnotherGenericObject = GenericObject;

export interface Spec extends TurboModule {
  +getGenericObject: (arg: Object) => Object;
  +getGenericObjectReadOnly: (arg: Object) => $ReadOnly<{|a: string|}>;
  +getGenericObjectWithAlias: (arg: GenericObject) => AnotherGenericObject;
  +difficultObject: (A: {|
    D: boolean,
    E: {|
      D: boolean,
      E: number,
      F: string,
    |},
    F: string,
  |}) => {|
    D: boolean,
    E: {|
      D: boolean,
      E: {|
        D: boolean,
        E: number,
        F: string,
      |},
      F: string,
    |},
    F: string,
  |};
  +getConstants: () => {|
    D: boolean,
    E: {|
      D: boolean,
      E: {|
        D: boolean,
        E: {|
          D: boolean,
          E: number,
          F: string,
        |},
        F: string,
      |},
      F: string,
    |},
    F: string,
  |};
}

export default (TurboModuleRegistry.getEnforcing<Spec>(
  'SampleTurboModule',
): Spec);
