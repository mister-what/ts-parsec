
// Automatically copied from ColorPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import type {ColorValue} from '../../../../../Libraries/StyleSheet/StyleSheetTypes';
import type {ViewProps} from '../../../../../Libraries/Components/View/ViewPropTypes';
import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';
import {type NativeComponentType} from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  tintColor?: ColorValue,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'ColorPropNativeComponentView',
): NativeComponentType<NativeProps>);
