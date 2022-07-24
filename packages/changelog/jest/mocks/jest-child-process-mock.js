/*
 * Copyright (C) 2022 SensibleMetrics, Inc. (http://sensiblemetrics.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import * as jest from 'jest';

const child_process = jest.genMockFromModule("child_process");

const mockOutput = {
  message: "",
};

const exec = jest.fn().mockImplementation((command, resolve) => {
  console.log(command);
  console.log(resolve);
  resolve(mockOutput[command]);
});

child_process.exec = exec;

module.exports = child_process;