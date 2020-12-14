/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const path = require('path');

class BaseDeployer {
  constructor(builder) {
    this._builder = builder;
  }

  get log() {
    return this._builder.log;
  }

  ready() {
    return this._builder && false;
  }

  get relZip() {
    return path.relative(process.cwd(), this._builder.zipFile);
  }

  get host() {
    if (this._functionURL) {
      return new URL(this._functionURL).hostname;
    }
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  get basePath() {
    return '';
  }

  // eslint-disable-next-line class-methods-use-this
  get customVCL() {
    return '';
  }
}

module.exports = BaseDeployer;
